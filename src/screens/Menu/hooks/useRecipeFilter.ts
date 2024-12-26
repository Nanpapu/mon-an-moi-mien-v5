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

  // Thêm state mới
  const [cookingRecipes, setCookingRecipes] = useState<Recipe[]>([]);

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

  // Thêm hàm helper để lấy giá trị sort
  const getSortValue = (recipe: Recipe, field: SortField) => {
    switch (field) {
      case 'name':
        // Sử dụng Intl.Collator để sort tiếng Việt chính xác
        return recipe.name;
      case 'difficulty':
        return recipe.difficulty;
      case 'cookingTime':
        return recipe.cookingTime;
      case 'servings':
        return recipe.servings;
      default:
        return null;
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

    // Tạo collator cho tiếng Việt
    const vietnameseCollator = new Intl.Collator('vi', {
      sensitivity: 'base',
      ignorePunctuation: true,
    });

    results.sort((a, b) => {
      // Sort by favorite first nếu được bật
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

        if (aValue === null || bValue === null) return 0;

        // Xử lý đặc biệt cho sort theo tên
        if (field === 'name') {
          // Kiểm tra và ép kiểu string
          const aString = String(aValue || '');
          const bString = String(bValue || '');
          const compareResult = vietnameseCollator.compare(aString, bString);
          return order === 'asc' ? compareResult : -compareResult;
        }

        // Xử lý các trường hợp khác
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
    // Lấy tất cả công thức đang nấu
    const cookingRecipesSection = {
      title: 'Công thức đang nấu',
      data: recipes.filter((item) => isRecipeInCooking(item.recipe.id)),
    };

    // Lấy tất cả công thức đã lưu (bao gồm cả đang nấu)
    const savedRecipesSection = {
      title: 'Công thức đã lưu',
      data: recipes, // Không filter nữa, hiển thị tất cả
    };

    return [cookingRecipesSection, savedRecipesSection];
  };

  // Thêm hàm để thêm công thức vào danh sách nấu
  const addToCooking = useCallback((recipe: Recipe) => {
    setCookingRecipes((prev) => {
      // Kiểm tra xem công thức đã có trong danh sách chưa
      const exists = prev.some((item) => item.id === recipe.id);
      if (!exists) {
        return [...prev, recipe];
      }
      return prev;
    });
  }, []);

  // Thêm hàm kiểm tra
  const isRecipeInCooking = useCallback(
    (recipeId: string) => {
      return cookingRecipes.some((recipe) => recipe.id === recipeId);
    },
    [cookingRecipes]
  );

  return {
    filterOptions,
    setFilterOptions,
    searchQuery, // Export searchQuery state
    updateSearchQuery, // Export update function
    filteredRecipes,
    favoriteRecipes,
    refreshFavorites: loadFavorites,
    regions,
    cookingRecipes,
    addToCooking,
    sections: groupRecipes(filteredRecipes),
    isRecipeInCooking, // Thêm vào return
  };
};
