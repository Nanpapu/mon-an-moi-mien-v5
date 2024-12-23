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
    return recipes.map((recipe) => ({
      recipe,
      visible: recipes
        .filter((recipe) => {
          // Giữ nguyên logic filter cũ
          const matchesRegion =
            !filterState.region || recipe.region === filterState.region;
          const matchesDifficulty =
            !filterState.difficulty ||
            getDifficultyText(recipe.difficulty || 1) ===
              filterState.difficulty;
          const matchesDietType =
            !filterState.dietType ||
            (recipe.category === 'vegetarian' ? 'Chay' : 'Mặn') ===
              filterState.dietType;

          // Xử lý cookingTime ranges
          const matchesCookTime =
            !filterState.cookTime ||
            (() => {
              const time = recipe.cookingTime;
              if (!time) return false;

              switch (filterState.cookTime) {
                case '< 15 phút':
                  return time < 15;
                case '15-30 phút':
                  return time >= 15 && time <= 30;
                case '30-60 phút':
                  return time > 30 && time <= 60;
                case '> 60 phút':
                  return time > 60;
                default:
                  return true;
              }
            })();

          // Xử lý servings ranges
          const matchesServings =
            !filterState.servings ||
            (() => {
              const servings = recipe.servings;
              if (!servings) return false;

              switch (filterState.servings) {
                case '1-2 người':
                  return servings >= 1 && servings <= 2;
                case '3-4 người':
                  return servings >= 3 && servings <= 4;
                case '5-6 người':
                  return servings >= 5 && servings <= 6;
                case '> 6 người':
                  return servings > 6;
                default:
                  return true;
              }
            })();

          // Recipe phải thỏa mãn tất cả điều kiện
          return (
            matchesRegion &&
            matchesDifficulty &&
            matchesCookTime &&
            matchesServings &&
            matchesDietType
          );
        })
        .includes(recipe),
    }));
  }, [recipes, filterState]);

  return {
    filterState,
    filterData,
    handleFilterChange,
    hasActiveFilters,
    resetFilters,
    filteredRecipes, // Thêm filtered recipes vào return
  };
};
