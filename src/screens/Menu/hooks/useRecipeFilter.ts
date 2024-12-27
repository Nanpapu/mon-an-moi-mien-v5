import { useMemo, useState, useEffect, useCallback } from 'react';
import { Recipe, IngredientType } from '../../../types';
import { SortField, FilterOptions, RecipeSection } from '../types';
import { FavoriteService } from '../../../services/favoriteService';
import { containsSearchQuery } from '../../../utils/stringUtils';
import { CookingRecipesService } from '../../../services/cookingRecipesService';
import { useAuth } from '../../../context/AuthContext';
import { TabType } from '../components/TabBar';

// Thêm export vào trước interface
export interface TabFilterOptions {
  cooking: FilterOptions;
  saved: FilterOptions;
}

export const useRecipeFilter = (savedRecipes: Recipe[]) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('saved');

  // Thay đổi state để lưu filter options cho từng tab
  const [filterOptions, setFilterOptions] = useState<TabFilterOptions>({
    cooking: {
      searchQuery: '',
      region: null,
      showFavorites: false,
      category: null,
      difficulty: null,
      cookingTime: { min: null, max: null },
      servings: { min: null, max: null },
      mainIngredientTypes: [],
      showFavoriteFirst: true,
      sort: null,
      groupBySearch: true,
      showDuplicateResults: false,
    },
    saved: {
      searchQuery: '',
      region: null,
      showFavorites: false,
      category: null,
      difficulty: null,
      cookingTime: { min: null, max: null },
      servings: { min: null, max: null },
      mainIngredientTypes: [],
      showFavoriteFirst: true,
      sort: null,
      groupBySearch: true,
      showDuplicateResults: false,
    },
  });

  // Helper để lấy filter options của tab hiện tại
  const currentFilterOptions: FilterOptions =
    filterOptions[activeTab as keyof TabFilterOptions];

  // Cập nhật hàm setFilterOptions
  const updateFilterOptions = (newOptions: Partial<FilterOptions>) => {
    setFilterOptions((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        ...newOptions,
      },
    }));
  };

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
        [activeTab]: {
          ...prev[activeTab],
          searchQuery: searchQuery,
        },
      }));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, activeTab]);

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
    if (
      !currentFilterOptions.cookingTime.min &&
      !currentFilterOptions.cookingTime.max
    )
      return true;
    if (!recipe.cookingTime) return false;

    const { min, max } = currentFilterOptions.cookingTime;
    if (min && max)
      return recipe.cookingTime >= min && recipe.cookingTime <= max;
    if (min) return recipe.cookingTime >= min;
    if (max) return recipe.cookingTime <= max;
    return true;
  };

  // Hàm helper để kiểm tra số người ăn
  const matchesServings = (recipe: Recipe): boolean => {
    if (
      !currentFilterOptions.servings.min &&
      !currentFilterOptions.servings.max
    )
      return true;
    if (!recipe.servings) return false;

    const { min, max } = currentFilterOptions.servings;
    if (min && max) return recipe.servings >= min && recipe.servings <= max;
    if (min) return recipe.servings >= min;
    if (max) return recipe.servings <= max;
    return true;
  };

  // Hàm helper để kiểm tra nguyên liệu chính
  const matchesIngredientTypes = (recipe: Recipe): boolean => {
    if (currentFilterOptions.mainIngredientTypes.length === 0) return true;

    return recipe.ingredients.some(
      (ingredient) =>
        ingredient.type &&
        currentFilterOptions.mainIngredientTypes.includes(ingredient.type)
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
        if (currentFilterOptions.showFavorites && !item.isFavorite) {
          return false;
        }

        // Lọc theo vùng miền
        if (
          currentFilterOptions.region &&
          item.recipe.region !== currentFilterOptions.region
        ) {
          return false;
        }

        // Lọc theo category (chay/mặn)
        if (
          currentFilterOptions.category &&
          item.recipe.category !== currentFilterOptions.category
        ) {
          return false;
        }

        // Lọc theo độ khó
        if (
          currentFilterOptions.difficulty !== null &&
          item.recipe.difficulty !== currentFilterOptions.difficulty
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
        if (currentFilterOptions.searchQuery) {
          const query = currentFilterOptions.searchQuery.toLowerCase().trim();
          const matchesName = containsSearchQuery(item.recipe.name, query);
          const matchesIngredients = item.recipe.ingredients.some(
            (ingredient) => containsSearchQuery(ingredient.name, query)
          );
          if (!matchesName && !matchesIngredients) return false;
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
      if (currentFilterOptions.showFavoriteFirst) {
        if (a.isFavorite !== b.isFavorite) {
          return a.isFavorite ? -1 : 1;
        }
      }

      // Sau đó mới sort theo field
      if (currentFilterOptions.sort) {
        const { field, order } = currentFilterOptions.sort;
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

    console.log('Current filter options:', currentFilterOptions);
    console.log('Filtering recipes with options:', {
      searchQuery: currentFilterOptions.searchQuery,
      showFavorites: currentFilterOptions.showFavorites,
      region: currentFilterOptions.region,
    });
    console.log('Total recipes before filter:', savedRecipes.length);

    console.log('Recipes after favorite filter:', results.length);
    console.log('Recipes after search filter:', results.length);
    console.log('Recipes after region filter:', results.length);

    return results.map((item) => ({
      recipe: item.recipe,
      visible: true,
    }));
  }, [savedRecipes, currentFilterOptions, favoriteRecipes]);

  const regions = useMemo(() => {
    const uniqueRegions = new Set(savedRecipes.map((recipe) => recipe.region));
    return Array.from(uniqueRegions).filter(Boolean) as string[];
  }, [savedRecipes]);

  const groupRecipes = (recipes: { recipe: Recipe; visible: boolean }[]) => {
    // Lọc các công thức có visible = true
    const visibleRecipes = recipes.filter((item) => item.visible);

    // Nếu có search query thì chia thành 2 section cho cả 2 tab
    if (currentFilterOptions.searchQuery) {
      const query = currentFilterOptions.searchQuery.toLowerCase().trim();

      // Lọc recipes theo tab hiện tại trước khi tìm kiếm
      const tabRecipes =
        activeTab === 'cooking'
          ? visibleRecipes.filter((item) => isRecipeInCooking(item.recipe.id))
          : visibleRecipes;

      // Section tìm theo tên
      const nameMatches = tabRecipes.filter((item) =>
        containsSearchQuery(item.recipe.name, query)
      );

      // Section tìm theo nguyên liệu (loại bỏ các món đã match tên)
      const ingredientMatches = tabRecipes.filter(
        (item) =>
          !containsSearchQuery(item.recipe.name, query) &&
          item.recipe.ingredients.some((ingredient) =>
            containsSearchQuery(ingredient.name, query)
          )
      );

      return [
        {
          title: 'Tìm theo tên món',
          data: nameMatches,
        },
        {
          title: 'Tìm theo nguyên liệu',
          data: ingredientMatches,
        },
      ];
    }

    // Nếu không có search query
    return [
      {
        title: '',
        data:
          activeTab === 'cooking'
            ? visibleRecipes.filter((item) => isRecipeInCooking(item.recipe.id))
            : visibleRecipes,
      },
    ];
  };

  // Thêm hàm mới để kiểm tra có filter nào đang active không
  const hasActiveFilters = () => {
    const options = filterOptions[activeTab];
    return (
      options.searchQuery ||
      options.region ||
      options.showFavorites ||
      options.category ||
      options.difficulty ||
      options.cookingTime.min ||
      options.cookingTime.max ||
      options.servings.min ||
      options.servings.max ||
      options.mainIngredientTypes.length > 0
    );
  };

  // Thêm hàm để thêm công thức vào danh sách nấu
  const addToCooking = useCallback(
    async (recipe: Recipe) => {
      if (!user) return;

      setCookingRecipes((prev) => {
        const exists = prev.some((item) => item.id === recipe.id);
        if (!exists) {
          const newRecipes = [...prev, recipe];
          // Lưu xuống storage và sync
          CookingRecipesService.saveCookingRecipes(user.uid, newRecipes);
          return newRecipes;
        }
        return prev;
      });
    },
    [user]
  );

  // Thêm hàm kiểm tra
  const isRecipeInCooking = useCallback(
    (recipeId: string) => {
      return cookingRecipes.some((recipe) => recipe.id === recipeId);
    },
    [cookingRecipes]
  );

  // Load cooking recipes khi component mount và khi user thay đổi
  useEffect(() => {
    const loadCookingRecipes = async () => {
      if (user) {
        const recipes = await CookingRecipesService.getCookingRecipes(user.uid);
        setCookingRecipes(recipes);
      }
    };
    loadCookingRecipes();
  }, [user]);

  const removeFromCooking = useCallback(
    async (recipe: Recipe) => {
      if (!user) return;

      setCookingRecipes((prev) => {
        const newRecipes = prev.filter((item) => item.id !== recipe.id);
        // Lưu xuống storage và sync
        CookingRecipesService.saveCookingRecipes(user.uid, newRecipes);
        return newRecipes;
      });
    },
    [user]
  );

  return {
    filterOptions: currentFilterOptions, // Trả về filter của tab hiện tại
    setFilterOptions: updateFilterOptions,
    activeTab,
    setActiveTab,
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
    removeFromCooking,
    hasActiveFilters,
  };
};
