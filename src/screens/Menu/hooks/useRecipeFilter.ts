import { useMemo, useState, useEffect } from 'react';
import { Recipe, IngredientType } from '../../../types';
import { SortField, FilterOptions, RecipeSection } from '../types';
import { FavoriteService } from '../../../services/favoriteService';
import { containsSearchQuery } from '../../../utils/stringUtils';

export const useRecipeFilter = (savedRecipes: Recipe[]) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    searchQuery: '',
    region: null,
    showFavorites: false,
    category: null,
    difficulty: null,
    cookingTime: {
      min: null,
      max: null,
    },
    servings: {
      min: null,
      max: null,
    },
    mainIngredientTypes: [],
    showFavoriteFirst: true,
    sort: null,
    groupBySearch: true,
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
  };

  // Thêm log để debug giá trị sort
  const getSortValue = (recipe: Recipe, field: SortField) => {
    console.log('Getting sort value for:', { name: recipe.name, field });

    switch (field) {
      case 'name':
        return recipe.name.toLowerCase();
      case 'difficulty':
        return recipe.difficulty || 0;
      case 'cookingTime':
        return recipe.cookingTime || 0;
      case 'servings':
        return recipe.servings || 0;
      default:
        return 0;
    }
  };

  // Khai báo kiểu trước khi sử dụng
  const matchesCookingTime: (recipe: Recipe) => boolean = (recipe) => {
    if (!filterOptions.cookingTime.min && !filterOptions.cookingTime.max)
      return true;
    if (!recipe.cookingTime) return false;

    const { min, max } = filterOptions.cookingTime;
    if (min && max)
      return recipe.cookingTime >= min && recipe.cookingTime <= max;
    if (min) return recipe.cookingTime >= min;
    if (max) return recipe.cookingTime <= max;
    return true;
  };

  // Hàm helper để kiểm tra số người ăn
  const matchesServings = (recipe: Recipe): boolean => {
    if (!filterOptions.servings.min && !filterOptions.servings.max) return true;
    if (!recipe.servings) return false;

    const { min, max } = filterOptions.servings;
    if (min && max) return recipe.servings >= min && recipe.servings <= max;
    if (min) return recipe.servings >= min;
    if (max) return recipe.servings <= max;
    return true;
  };

  // Hàm helper để kiểm tra nguyên liệu chính
  const matchesIngredientTypes = (recipe: Recipe): boolean => {
    if (filterOptions.mainIngredientTypes.length === 0) return true;

    return recipe.ingredients.some(
      (ingredient) =>
        ingredient.type &&
        filterOptions.mainIngredientTypes.includes(ingredient.type)
    );
  };

  const matchesSearch = (recipe: Recipe): boolean => {
    if (!filterOptions.searchQuery) return true;

    // Tìm theo tên công thức
    const matchesName = containsSearchQuery(
      recipe.name,
      filterOptions.searchQuery
    );

    // Tìm theo tên nguyên liệu
    const matchesIngredients = recipe.ingredients.some((ingredient) =>
      containsSearchQuery(ingredient.name, filterOptions.searchQuery)
    );

    return matchesName || matchesIngredients;
  };

  const filteredRecipes = useMemo(() => {
    let results = savedRecipes
      .map((recipe) => ({
        recipe,
        visible: matchesSearch(recipe),
        isFavorite: favoriteRecipes.some((fav) => fav.id === recipe.id),
      }))
      .filter((item) => item.visible);

    // Sort theo 2 bước:
    // 1. Sort theo favorite nếu showFavoriteFirst = true
    if (filterOptions.showFavoriteFirst) {
      results.sort((a, b) =>
        a.isFavorite === b.isFavorite ? 0 : a.isFavorite ? -1 : 1
      );
    }

    // 2. Sort theo field được chọn
    if (filterOptions.sort) {
      const { field, order } = filterOptions.sort;
      results.sort((a, b) => {
        // Nếu cả 2 đều là favorite hoặc không favorite, sort bình thường
        if (
          (!a.isFavorite && !b.isFavorite) ||
          (a.isFavorite && b.isFavorite)
        ) {
          const aValue = getSortValue(a.recipe, field);
          const bValue = getSortValue(b.recipe, field);
          // ... logic sort cũ ...
        }
        // Giữ nguyên thứ tự favorite nếu khác nhau
        return a.isFavorite ? -1 : 1;
      });
    }

    return results.map((item) => ({
      recipe: item.recipe,
      visible: true,
    }));
  }, [savedRecipes, filterOptions, favoriteRecipes]);

  const regions = useMemo(() => {
    const uniqueRegions = new Set(savedRecipes.map((recipe) => recipe.region));
    return Array.from(uniqueRegions).filter(Boolean) as string[];
  }, [savedRecipes]);

  const groupRecipes = (recipes: { recipe: Recipe; visible: boolean }[]) => {
    if (!filterOptions.searchQuery || !filterOptions.groupBySearch) {
      return [{ title: '', data: recipes }];
    }

    const byName: { recipe: Recipe; visible: boolean }[] = [];
    const byIngredients: { recipe: Recipe; visible: boolean }[] = [];

    recipes.forEach((item) => {
      const matchesName = containsSearchQuery(
        item.recipe.name,
        filterOptions.searchQuery
      );
      const matchesIngredients = item.recipe.ingredients.some((ingredient) =>
        containsSearchQuery(ingredient.name, filterOptions.searchQuery)
      );

      if (matchesName) {
        byName.push(item);
      } else if (matchesIngredients) {
        byIngredients.push(item);
      }
    });

    const sections: RecipeSection[] = [];
    if (byName.length > 0) {
      sections.push({ title: 'Tìm theo tên', data: byName });
    }
    if (byIngredients.length > 0) {
      sections.push({ title: 'Tìm theo nguyên liệu', data: byIngredients });
    }

    return sections;
  };

  return {
    filterOptions,
    setFilterOptions,
    filteredRecipes,
    favoriteRecipes,
    refreshFavorites: loadFavorites,
    regions,
    sections: groupRecipes(filteredRecipes),
  };
};
