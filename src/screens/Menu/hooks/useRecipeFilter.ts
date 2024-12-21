import { useMemo, useState, useEffect } from 'react';
import { Recipe } from '../../../types';
import { FavoriteService } from '../../../services/favoriteService';
import { containsSearchQuery } from '../../../utils/stringUtils';

// Số lượng item mỗi trang
const PAGE_SIZE = 5;

export const useRecipeFilter = (savedRecipes: Recipe[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadFavorites();
  }, []);

  // Reset page khi filter thay đổi
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedRegion, showFavorites]);

  const loadFavorites = async () => {
    const favorites = await FavoriteService.getFavorites();
    setFavoriteRecipes(favorites);
  };

  // Lọc toàn bộ recipes theo điều kiện
  const allFilteredRecipes = useMemo(() => {
    let recipes = [...savedRecipes];

    if (selectedRegion) {
      recipes = recipes.filter((recipe) => recipe.region === selectedRegion);
    }

    if (searchQuery.trim()) {
      recipes = recipes.filter((recipe) => {
        const matchesName = containsSearchQuery(recipe.name, searchQuery);
        const matchesIngredients = recipe.ingredients.some((ingredient) =>
          containsSearchQuery(ingredient, searchQuery)
        );
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
  }, [
    savedRecipes,
    searchQuery,
    selectedRegion,
    showFavorites,
    favoriteRecipes,
  ]);

  // Phân trang kết quả
  const paginatedRecipes = useMemo(() => {
    const startIndex = 0;
    const endIndex = page * PAGE_SIZE;
    return allFilteredRecipes.slice(startIndex, endIndex);
  }, [allFilteredRecipes, page]);

  // Kiểm tra còn data để load không
  const hasMore = paginatedRecipes.length < allFilteredRecipes.length;

  // Load thêm data
  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

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
    filteredRecipes: paginatedRecipes,
    regions: Array.from(new Set(savedRecipes.map((r) => r.region))),
    refreshFavorites: loadFavorites,
    hasMore,
    loadMore,
    resetPage: () => setPage(1),
  };
};
