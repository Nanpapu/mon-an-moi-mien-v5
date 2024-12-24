import { IngredientType } from '../../../types';

export type DishCategory = 'vegetarian' | 'non-vegetarian';

export type SortField =
  | 'favorite'
  | 'difficulty'
  | 'cookingTime'
  | 'servings'
  | 'name';
export type SortOrder = 'asc' | 'desc';

export interface SortOption {
  field: SortField;
  order: SortOrder;
}

export interface FilterOptions {
  // Lọc cơ bản
  searchQuery: string;
  region: string | null;
  showFavorites: boolean;

  // Lọc nâng cao
  category: DishCategory | null;
  difficulty: number | null; // 1-5
  cookingTime: {
    min: number | null;
    max: number | null;
  };
  servings: {
    min: number | null;
    max: number | null;
  };
  mainIngredientTypes: IngredientType[];

  // Thêm sort options
  sort: SortOption | null;
}

export interface CookingTimeRange {
  label: string;
  min: number;
  max: number | null;
}

export interface ServingsRange {
  label: string;
  min: number;
  max: number | null;
}

export const COOKING_TIME_RANGES: CookingTimeRange[] = [
  { label: '< 30 phút', min: 0, max: 30 },
  { label: '30-60 phút', min: 30, max: 60 },
  { label: '1-2 giờ', min: 60, max: 120 },
  { label: '> 2 giờ', min: 120, max: null },
];

export const SERVINGS_RANGES: ServingsRange[] = [
  { label: '1-2 người', min: 1, max: 2 },
  { label: '3-4 người', min: 3, max: 4 },
  { label: '5-6 người', min: 5, max: 6 },
  { label: '> 6 người', min: 7, max: null },
];

export const SORT_OPTIONS: { label: string; field: SortField }[] = [
  { label: 'Tên công thức', field: 'name' },
  { label: 'Yêu thích', field: 'favorite' },
  { label: 'Độ khó', field: 'difficulty' },
  { label: 'Thời gian nấu', field: 'cookingTime' },
  { label: 'Số người ăn', field: 'servings' },
];
