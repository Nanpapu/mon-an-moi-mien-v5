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

  // Hàm helper để kiểm tra thời gian nấu
  const matchesCookingTime = (recipe: Recipe): boolean => {
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
    let recipes = [...savedRecipes];

    // Lọc theo vùng miền
    if (filterOptions.region) {
      recipes = recipes.filter(
        (recipe) => recipe.region === filterOptions.region
      );
    }

    // Lọc theo từ khóa
    if (filterOptions.searchQuery.trim()) {
      recipes = recipes.filter((recipe) => {
        const matchesName = containsSearchQuery(
          recipe.name,
          filterOptions.searchQuery
        );
        const matchesIngredients = recipe.ingredients.some((ingredient) =>
          containsSearchQuery(ingredient.name, filterOptions.searchQuery)
        );
        const matchesInstructions = Object.values(recipe.instructions)
          .flat()
          .some(
            (step: any) =>
              containsSearchQuery(step.title, filterOptions.searchQuery) ||
              step.details?.some((detail: string) =>
                containsSearchQuery(detail, filterOptions.searchQuery)
              )
          );

        return matchesName || matchesIngredients || matchesInstructions;
      });
    }

    // Lọc theo loại món
    if (filterOptions.category) {
      recipes = recipes.filter(
        (recipe) => recipe.category === filterOptions.category
      );
    }

    // Lọc theo độ khó
    if (filterOptions.difficulty) {
      recipes = recipes.filter(
        (recipe) => recipe.difficulty === filterOptions.difficulty
      );
    }

    // Lọc theo thời gian nấu
    recipes = recipes.filter(matchesCookingTime);

    // Lọc theo số người ăn
    recipes = recipes.filter(matchesServings);

    // Lọc theo loại nguyên liệu
    recipes = recipes.filter(matchesIngredientTypes);

    // Lọc yêu thích
    if (filterOptions.showFavorites) {
      return recipes.filter((recipe) =>
        favoriteRecipes.some((fav) => fav.id === recipe.id)
      );
    }

    // Sắp xếp: yêu thích lên đầu
    return [
      ...recipes.filter((recipe) =>
        favoriteRecipes.some((fav) => fav.id === recipe.id)
      ),
      ...recipes.filter(
        (recipe) => !favoriteRecipes.some((fav) => fav.id === recipe.id)
      ),
    ];
  }, [savedRecipes, filterOptions, favoriteRecipes]);

  return {
    filterOptions,
    setFilterOptions,
    filteredRecipes,
    regions: Array.from(new Set(savedRecipes.map((r) => r.region))),
    refreshFavorites: loadFavorites,
  };
};
