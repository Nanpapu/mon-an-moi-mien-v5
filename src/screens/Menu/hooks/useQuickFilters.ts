import { useState, useCallback, useMemo } from 'react';
import { QuickFilterType } from '../types';
import { Recipe } from '../../../types';

interface FilterState {
  region: string | null;
  difficulty: string | null;
  cookTime: string | null;
  servings: string | null;
  dietType: string | null;
}

export const useQuickFilters = (recipes: Recipe[]) => {
  // State cho từng loại filter
  const [filterState, setFilterState] = useState<FilterState>({
    region: null,
    difficulty: null,
    cookTime: null,
    servings: null,
    dietType: null,
  });

  // Data cho từng loại filter
  const filterData = useMemo(
    () => ({
      region: {
        label: 'Vùng miền',
        options: ['Miền Bắc', 'Miền Trung', 'Miền Nam'],
      },
      difficulty: {
        label: 'Độ khó',
        options: ['Dễ', 'Trung bình', 'Khó'],
      },
      cookTime: {
        label: 'Thời gian',
        options: ['< 15 phút', '15-30 phút', '30-60 phút', '> 60 phút'],
      },
      servings: {
        label: 'Khẩu phần',
        options: ['1-2 người', '3-4 người', '5-6 người', '> 6 người'],
      },
      dietType: {
        label: 'Loại món',
        options: ['Chay', 'Mặn'],
      },
    }),
    []
  );

  // Handler để update giá trị filter
  const handleFilterChange = useCallback(
    (filterType: keyof FilterState, value: string | null) => {
      setFilterState((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    },
    []
  );

  // Kiểm tra xem có filter nào đang active không
  const hasActiveFilters = useMemo(() => {
    return Object.values(filterState).some((value) => value !== null);
  }, [filterState]);

  // Reset tất cả filter về null
  const resetFilters = useCallback(() => {
    setFilterState({
      region: null,
      difficulty: null,
      cookTime: null,
      servings: null,
      dietType: null,
    });
  }, []);

  const getDifficultyText = (level: number): string => {
    switch (level) {
      case 1:
        return 'Dễ';
      case 2:
      case 3:
        return 'Trung bình';
      case 4:
      case 5:
        return 'Khó';
      default:
        return 'Dễ';
    }
  };

  // Thêm logic lọc recipes
  const filteredRecipes = useMemo(() => {
    return recipes.map((recipe) => {
      // Kiểm tra từng điều kiện filter
      const matchesRegion =
        !filterState.region || recipe.region === filterState.region;
      const matchesDifficulty =
        !filterState.difficulty ||
        getDifficultyText(recipe.difficulty || 1) === filterState.difficulty;
      const matchesDietType =
        !filterState.dietType ||
        (recipe.category === 'vegetarian' ? 'Chay' : 'Mặn') ===
          filterState.dietType;

      // Xử lý cookingTime ranges
      const matchesCookTime = (() => {
        if (!filterState.cookTime) return true;
        const cookTimeRange = filterData.cookTime.options.find(
          (option) => option === filterState.cookTime
        );
        if (!cookTimeRange) return true;

        const [min, max] = cookTimeRange.split('-').map(Number);
        return recipe.cookingTime != null
          ? recipe.cookingTime >= min && recipe.cookingTime <= max
          : true;
      })();

      // Xử lý servings ranges
      const matchesServings = (() => {
        if (!filterState.servings) return true;
        const servingsRange = filterData.servings.options.find(
          (option) => option === filterState.servings
        );
        if (!servingsRange) return true;

        const [min, max] = servingsRange.split('-').map(Number);
        return recipe.servings != null
          ? recipe.servings >= min && recipe.servings <= max
          : true;
      })();

      // Set visible dựa trên tất cả điều kiện
      return {
        recipe,
        visible:
          matchesRegion &&
          matchesDifficulty &&
          matchesCookTime &&
          matchesServings &&
          matchesDietType,
      };
    });
  }, [recipes, filterState, filterData]);

  return {
    filterState,
    filterData,
    handleFilterChange,
    hasActiveFilters,
    resetFilters,
    filteredRecipes, // Thêm filtered recipes vào return
  };
};
