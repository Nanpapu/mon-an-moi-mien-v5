import { useMemo, useState, useEffect } from 'react';
import { Recipe, IngredientType } from '../../../types';
import { SortField, FilterOptions } from '../types';
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
    sort: null,
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
  };

  // Thêm hàm helper để lấy giá trị sort
  const getSortValue = (recipe: Recipe, field: SortField) => {
    switch (field) {
      case 'name':
        return recipe.name.toLowerCase();
      case 'difficulty':
        return recipe.difficulty ?? 999;
      case 'cookingTime':
        return recipe.cookingTime ?? 999999;
      case 'servings':
        return recipe.servings ?? 999;
      case 'favorite':
        return favoriteRecipes.some((fav) => fav.id === recipe.id) ? 0 : 1;
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
      .map((recipe) => {
        // Thay thế phần kiểm tra search cũ bằng hàm mới
        const matchesSearchResult = matchesSearch(recipe);

        // Kiểm tra từng điều kiện filter
        const matchesRegion =
          !filterOptions.region || recipe.region === filterOptions.region;
        const matchesCategory =
          !filterOptions.category || recipe.category === filterOptions.category;
        const matchesDifficulty =
          !filterOptions.difficulty ||
          recipe.difficulty === filterOptions.difficulty;
        const matchesFavorite =
          !filterOptions.showFavorites ||
          favoriteRecipes.some((fav) => fav.id === recipe.id);

        // Kiểm tra thời gian nấu
        const timeMatches =
          !filterOptions.cookingTime.min && !filterOptions.cookingTime.max
            ? true
            : recipe.cookingTime &&
              (!filterOptions.cookingTime.min ||
                recipe.cookingTime >= filterOptions.cookingTime.min) &&
              (!filterOptions.cookingTime.max ||
                recipe.cookingTime <= filterOptions.cookingTime.max);

        // Kiểm tra số người ăn
        const servingsMatches =
          !filterOptions.servings.min && !filterOptions.servings.max
            ? true
            : recipe.servings &&
              (!filterOptions.servings.min ||
                recipe.servings >= filterOptions.servings.min) &&
              (!filterOptions.servings.max ||
                recipe.servings <= filterOptions.servings.max);

        // Kiểm tra nguyên liệu
        const ingredientMatches =
          filterOptions.mainIngredientTypes.length === 0
            ? true
            : recipe.ingredients.some(
                (ingredient) =>
                  ingredient.type &&
                  filterOptions.mainIngredientTypes.includes(ingredient.type)
              );

        // Kết hợp tất cả điều kiện
        const isVisible = Boolean(
          matchesSearchResult &&
            matchesRegion &&
            matchesCategory &&
            matchesDifficulty &&
            matchesFavorite &&
            timeMatches &&
            servingsMatches &&
            ingredientMatches
        );

        return {
          recipe,
          visible: isVisible,
        };
      })
      .filter((item) => item.visible); // Lọc các item visible trước khi sort

    // Sau đó mới sort
    if (filterOptions.sort) {
      const { field, order } = filterOptions.sort;
      console.log('Đang sort với options:', { field, order });

      results.sort((a, b) => {
        const aValue = getSortValue(a.recipe, field);
        const bValue = getSortValue(b.recipe, field);

        // Xử lý sort string riêng
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return order === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        // Sort số
        return order === 'asc'
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      });
    }

    return results;
  }, [savedRecipes, filterOptions, favoriteRecipes]);

  const regions = useMemo(() => {
    const uniqueRegions = new Set(savedRecipes.map((recipe) => recipe.region));
    return Array.from(uniqueRegions).filter(Boolean) as string[];
  }, [savedRecipes]);

  return {
    filterOptions,
    setFilterOptions,
    filteredRecipes,
    favoriteRecipes,
    refreshFavorites: loadFavorites,
    regions,
  };
};
