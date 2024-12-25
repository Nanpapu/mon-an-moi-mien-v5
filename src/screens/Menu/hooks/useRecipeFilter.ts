import { useMemo, useState, useEffect, useCallback } from 'react';
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
    showDuplicateResults: false,
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  // Thêm state riêng cho search query
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterOptions((prev) => ({
        ...prev,
        searchQuery: searchQuery,
      }));
    }, 300); // Delay 300ms

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Tạo hàm update search riêng
  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
  };

  // Thêm log để debug giá trị sort
  const getSortValue = (recipe: Recipe, field: SortField) => {
    switch (field) {
      case 'name':
        return recipe.name.toLowerCase();
      case 'difficulty':
        return recipe.difficulty ?? Number.MAX_VALUE;
      case 'cookingTime':
        return recipe.cookingTime ?? Number.MAX_VALUE;
      case 'servings':
        return recipe.servings ?? Number.MAX_VALUE;
      default:
        return '';
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

  const filteredRecipes = useMemo(() => {
    let results = savedRecipes
      .map((recipe) => {
        const isFavorite = favoriteRecipes.some((fav) => fav.id === recipe.id);
        return { recipe, isFavorite };
      })
      .filter((item) => {
        // Lọc theo yêu thích
        if (filterOptions.showFavorites && !item.isFavorite) {
          return false;
        }

        // Lọc theo vùng miền
        if (
          filterOptions.region &&
          item.recipe.region !== filterOptions.region
        ) {
          return false;
        }

        // Lọc theo category (chay/mặn)
        if (
          filterOptions.category &&
          item.recipe.category !== filterOptions.category
        ) {
          return false;
        }

        // Lọc theo độ khó
        if (
          filterOptions.difficulty !== null &&
          item.recipe.difficulty !== filterOptions.difficulty
        ) {
          return false;
        }

        // Lọc theo thời gian nấu
        if (!matchesCookingTime(item.recipe)) {
          return false;
        }

        // Lọc theo số người ăn
        if (!matchesServings(item.recipe)) {
          return false;
        }

        // Lọc theo loại nguyên liệu chính
        if (!matchesIngredientTypes(item.recipe)) {
          return false;
        }

        // Lọc theo từ khóa tìm kiếm
        if (filterOptions.searchQuery) {
          const matchesName = containsSearchQuery(
            item.recipe.name,
            filterOptions.searchQuery
          );
          const matchesIngredients = item.recipe.ingredients.some(
            (ingredient) =>
              containsSearchQuery(ingredient.name, filterOptions.searchQuery)
          );
          return matchesName || matchesIngredients;
        }

        return true;
      });

    // Combine sort và favorite first
    results.sort((a, b) => {
      // Sort by favorite first nếu ��ược bật
      if (filterOptions.showFavoriteFirst) {
        if (a.isFavorite !== b.isFavorite) {
          return a.isFavorite ? -1 : 1;
        }
      }

      // Sau đó mới sort theo field
      if (filterOptions.sort) {
        const { field, order } = filterOptions.sort;
        const aValue = getSortValue(a.recipe, field);
        const bValue = getSortValue(b.recipe, field);

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return order === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return order === 'asc' ? aValue - bValue : bValue - aValue;
        }
      }

      return 0;
    });

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

      // Nếu cho phép hiển thị kết quả trùng lặp
      if (filterOptions.showDuplicateResults) {
        if (matchesName) {
          byName.push(item);
        }
        if (matchesIngredients) {
          byIngredients.push(item);
        }
      } else {
        // Logic cũ - chỉ hiển thị ở section phù hợp nhất
        if (matchesName) {
          byName.push(item);
        } else if (matchesIngredients) {
          byIngredients.push(item);
        }
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
    searchQuery, // Export searchQuery state
    updateSearchQuery, // Export update function
    filteredRecipes,
    favoriteRecipes,
    refreshFavorites: loadFavorites,
    regions,
    sections: groupRecipes(filteredRecipes),
  };
};
