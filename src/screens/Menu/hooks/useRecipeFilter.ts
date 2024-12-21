import { useMemo, useState, useEffect } from 'react';
import { Recipe } from '../../../types';
import { FavoriteService } from '../../../services/favoriteService';
import { containsSearchQuery } from '../../../utils/stringUtils';

export const useRecipeFilter = (savedRecipes: Recipe[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
  };

  const filteredRecipes = useMemo(() => {
    let recipes = [...savedRecipes];

    if (selectedRegion) {
      recipes = recipes.filter((recipe) => recipe.region === selectedRegion);
    }

    if (searchQuery.trim()) {
      recipes = recipes.filter((recipe) => {
        // Tìm theo tên món
        const matchesName = containsSearchQuery(recipe.name, searchQuery);

        // Tìm theo nguyên liệu
        const matchesIngredients = recipe.ingredients.some((ingredient) =>
          containsSearchQuery(ingredient, searchQuery)
        );

        // Tìm theo cách làm
        const matchesInstructions = recipe.instructions.some((instruction) =>
          containsSearchQuery(instruction, searchQuery)
        );

        return matchesName || matchesIngredients || matchesInstructions;
      });
    }

    if (showFavorites) {
      return recipes.filter((recipe) =>
        favoriteRecipes.some((fav) => fav.id === recipe.id)
      );
    }

    return [
      ...recipes.filter((recipe) =>
        favoriteRecipes.some((fav) => fav.id === recipe.id)
      ),
      ...recipes.filter(
        (recipe) => !favoriteRecipes.some((fav) => fav.id === recipe.id)
      ),
    ];
  }, [savedRecipes, searchQuery, selectedRegion, showFavorites]);

  useEffect(() => {
    if (!showFavorites) {
      loadFavorites();
    }
  }, [showFavorites]);

  return {
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    showFavorites,
    setShowFavorites,
    filteredRecipes,
    regions: Array.from(new Set(savedRecipes.map((r) => r.region))),
    refreshFavorites: loadFavorites,
  };
};
