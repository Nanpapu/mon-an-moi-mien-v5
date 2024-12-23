import { useMemo, useState, useEffect } from 'react';
import { Recipe, IngredientType, DishCategory } from '../../../types';
import { FavoriteService } from '../../../services/favoriteService';
import { containsSearchQuery } from '../../../utils/stringUtils';
import { FilterOptions } from '../types';

export const useRecipeFilter = (savedRecipes: Recipe[]) => {
  // State cho các filter options
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
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
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
    return savedRecipes.map((recipe) => {
      // Kiểm tra search query
      const matchesSearch =
        !filterOptions.searchQuery ||
        recipe.name
          .toLowerCase()
          .includes(filterOptions.searchQuery.toLowerCase());

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
        matchesSearch &&
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
    });
  }, [savedRecipes, filterOptions, favoriteRecipes]);

  return {
    filterOptions,
    setFilterOptions,
    filteredRecipes,
    regions: Array.from(new Set(savedRecipes.map((r) => r.region))),
    refreshFavorites: loadFavorites,
  };
};
