/**
 * @fileoverview Định nghĩa các types và interfaces dùng chung trong ứng dụng
 */

import { Timestamp } from 'firebase/firestore';

/**
 * Enum cho độ khó của công thức
 */
export enum RecipeDifficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
  EXPERT = 4,
  MASTER = 5,
}

/**
 * Enum cho độ phức tạp của công thức
 */
export enum RecipeComplexity {
  SIMPLE = 1, // 1-3 bước
  NORMAL = 2, // 4-6 bước
  COMPLEX = 3, // 7-10 bước
  VERY_COMPLEX = 4, // >10 bước
}

/**
 * Enum cho ngân sách của công thức
 */
export enum RecipeBudget {
  CHEAP = 1, // <100k VND
  MODERATE = 2, // 100k-300k VND
  EXPENSIVE = 3, // >300k VND
}

/**
 * Enum cho mùa
 */
export enum Season {
  SPRING = 'spring',
  SUMMER = 'summer',
  AUTUMN = 'autumn',
  WINTER = 'winter',
}

/**
 * Enum cho loại món ăn
 */
export enum RecipeType {
  APPETIZER = 'appetizer',
  MAIN = 'main',
  DESSERT = 'dessert',
  DRINK = 'drink',
  SNACK = 'snack',
}

/**
 * Enum cho phương pháp nấu chính
 */
export enum CookingMethod {
  STIR_FRY = 'stir-fry',
  STEAM = 'steam',
  BOIL = 'boil',
  GRILL = 'grill',
  BAKE = 'bake',
  DEEP_FRY = 'deep-fry',
  BRAISE = 'braise',
  ROAST = 'roast',
  SIMMER = 'simmer',
}

/**
 * Interface cho thông tin dinh dưỡng
 */
export interface NutritionInfo {
  /** Calories */
  calories?: number;
  /** Protein (g) */
  protein?: number;
  /** Chất béo (g) */
  fat?: number;
  /** Carbohydrate (g) */
  carbs?: number;
  /** Chất xơ (g) */
  fiber?: number;
  /** Đường (g) */
  sugar?: number;
}

/**
 * Interface cho thông tin chế độ ăn
 */
export interface DietaryInfo {
  /** Loại chế độ ăn */
  type: 'vegetarian' | 'vegan' | 'non-vegetarian';
  /** Ghi chú về chế độ ăn */
  note?: string;
  /** Các hạn chế về chế độ ăn */
  restrictions?: {
    glutenFree?: boolean;
    soyFree?: boolean;
    lactoseFree?: boolean;
    peanutFree?: boolean;
    seafoodFree?: boolean;
    halal?: boolean;
    kosher?: boolean;
  };
}

/**
 * Interface cho thông tin bảo quản
 */
export interface StorageInfo {
  /** Nhiệt độ bảo quản (°C) */
  temperature?: {
    min: number;
    max: number;
  };
  /** Độ ẩm bảo quản (%) */
  humidity?: {
    min: number;
    max: number;
  };
  /** Thời gian bảo quản tối đa (ngày) */
  maxStorageDays: number;
  /** Ghi chú về bảo quản */
  notes?: string[];
}

/**
 * Định nghĩa các loại nguyên liệu chính
 */
export type IngredientCategory =
  | 'meat' // thịt
  | 'seafood' // hải sản
  | 'vegetable' // rau củ
  | 'spice' // gia vị
  | 'grain' // ngũ cốc, gạo, bột
  | 'dairy' // sữa và các chế phẩm từ sữa
  | 'egg' // trứng
  | 'fruit' // trái cây
  | 'mushroom' // nấm
  | 'processed' // thực phẩm chế biến sẵn
  | 'other'; // khác

/**
 * Interface cho nguyên liệu đã được tối ưu
 */
export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: IngredientCategory;
  importance: 1 | 2 | 3;
  substitutes?: string[];
  nutrition?: NutritionInfo;
  note?: string;
  isAllergen?: boolean;
  estimatedPrice?: number;
  image?: string;
  dietaryInfo?: DietaryInfo;
  seasonality?: {
    availableMonths: number[];
    peakMonths?: number[];
  };
  preparationMethod?: {
    description: string;
    duration?: number;
    steps?: string[];
  };
  storageConditions?: StorageInfo;
}

/**
 * Interface cho vấn đề thường gặp
 */
export interface CommonProblem {
  problem: string;
  causes: string[];
  solutions: string[];
}

/**
 * Interface cho phương pháp thay thế
 */
export interface AlternativeMethod {
  description: string;
  steps: string[];
  pros: string[];
  cons: string[];
  requiredTools?: string[];
}

/**
 * Thông tin chi tiết cho một bước trong quy trình nấu
 * @interface Step
 */
export interface Step {
  /** ID định danh duy nhất của bước */
  id: string;

  /** Số thứ tự của bước */
  order: number;

  /** Nội dung hướng dẫn của bước */
  description: string;

  /** Thời gian thực hiện (phút) */
  duration?: number;

  /** Nhiệt độ nấu (độ C) nếu có */
  temperature?: number;

  /** Dụng cụ cần thiết cho bước này */
  tools?: string[];

  /** Lưu ý đặc biệt cho bước này */
  notes?: string[];

  /** URL video hướng dẫn chi tiết nếu có */
  videoUrl?: string;

  /** URLs hình ảnh minh họa */
  images?: string[];

  /** Các dấu hiệu nhận biết bước đã hoàn thành tốt */
  completionSigns?: string[];

  /** Các lỗi thường gặp và cách khắc phục */
  commonMistakes?: {
    mistake: string;
    solution: string;
  }[];

  /** Các kỹ thuật nấu ăn được sử dụng trong bước này */
  techniques?: string[];

  /** Mức độ quan trọng của bước (1-3) */
  importance: 1 | 2 | 3;

  /** Các bước thay thế nếu không thể thực hiện bước này */
  alternatives?: {
    description: string;
    pros: string[];
    cons: string[];
  }[];
}

/**
 * Interface cho hướng dẫn đã được tối ưu
 */
export interface Instructions {
  preparation: Step[];
  processing?: Step[];
  marinating?: Step[];
  cooking?: Step[];
  assembly: Step[];
  serving: Step[];
  tips: string[];
  storage: string[];
  commonProblems?: CommonProblem[];
  alternativeMethods?: AlternativeMethod[];
}

/**
 * Thông tin cơ bản của một công thức nấu ăn
 * @interface BaseRecipe
 */
export interface BaseRecipe {
  /** ID định danh duy nhất của công thức */
  id: string;
  /** Tên món ăn */
  name: string;
  /** Vùng miền của món ăn */
  region: string;
  /** URL hình ảnh món ăn */
  image: string;
  /** Danh sách nguyên liệu với số lượng cụ thể */
  ingredients: Ingredient[];
  /** Các bước thực hiện được phân loại theo giai đoạn */
  instructions: Instructions;
}

/**
 * Interface cho phiên bản công thức
 */
export interface RecipeVersion {
  version: string;
  updatedAt: Date;
  updatedBy?: string;
  changes: string[];
  reason?: string;
}

/**
 * Interface cho công thức nấu ăn đã được tối ưu
 */
export interface Recipe extends BaseRecipe {
  cookingTime?: number;
  prepTime?: number;
  waitTime?: number;
  difficulty: RecipeDifficulty;
  complexity: RecipeComplexity;
  budget: RecipeBudget;
  servings?: number;
  type: RecipeType;
  cookingMethod: CookingMethod;
  tags?: string[];
  estimatedCostPerServing?: number;
  nutritionPerServing?: NutritionInfo;
  variations?: {
    name: string;
    description: string;
    ingredientModifications: string[];
  }[];
  suggestedSideDishes?: string[];
  suggestedDrinks?: string[];
  seasons?: Season[];
  occasions?: string[];
  versions?: RecipeVersion[];
  dietaryInfo: DietaryInfo;
}

/**
 * Thông tin một vùng miền
 * @interface Region
 */
export interface Region {
  /** ID định danh duy nhất của vùng miền */
  id: string;
  /** Tên vùng miền */
  name: string;
  /** Tọa độ địa lý của vùng miền */
  coordinate: {
    /** Vĩ độ */
    latitude: number;
    /** Kinh độ */
    longitude: number;
  };
  /** Danh sách công thức của vùng miền */
  recipes: Recipe[];
}

/**
 * Trạng thái validation của form
 * @interface ValidationState
 */
export interface ValidationState {
  /** Trạng thái hợp lệ của email */
  email: boolean;
  /** Trạng thái hợp lệ của mật khẩu */
  password: boolean;
}

/**
 * Thông tin đánh giá món ăn
 * @interface Review
 */
export interface Review {
  /** ID định danh duy nhất của đánh giá */
  id: string;
  /** ID của công thức được đánh giá */
  recipeId: string;
  /** ID của người đánh giá */
  userId: string;
  /** Số sao đánh giá (1-5) */
  rating: number;
  /** Nội dung bình luận */
  comment: string;
  /** Thời điểm tạo đánh giá */
  createdAt: Timestamp;
  /** Thời điểm cập nhật đánh giá */
  updatedAt: Timestamp;
  /** Thông tin người đánh giá */
  userInfo?: {
    /** Tên hiển thị */
    displayName: string;
    /** Email */
    email: string;
    /** URL ảnh đại diện */
    photoURL?: string;
  };
}

/**
 * Thống kê đánh giá của một công thức
 * @interface RecipeStats
 */
export interface RecipeStats {
  /** ID của công thức */
  recipeId: string;
  /** Điểm đánh giá trung bình */
  averageRating: number;
  /** Tổng số lượt đánh giá */
  totalReviews: number;
  /** Thời điểm tạo */
  createdAt: Timestamp;
  /** Thời điểm cập nhật */
  updatedAt: Timestamp;
}

/**
 * Thông tin người dùng
 * @interface User
 */
export interface User {
  /** ID định danh duy nhất của người dùng */
  uid: string;
  /** Email của người dùng */
  email: string;
  /** Tên hiển thị của người dùng */
  displayName?: string;
  /** URL ảnh đại diện */
  photoURL?: string;
}

/**
 * Thông tin người dùng
 * @interface UserProfile
 */
export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  avatarUpdatedAt?: number;
  createdAt: Date;
  updatedAt?: Date;
}

/**
 * Thông tin về một kỹ thuật nấu ăn
 * @interface CookingTechnique
 */
export interface CookingTechnique {
  /** ID định danh duy nhất của kỹ thuật */
  id: string;

  /** Tên kỹ thuật */
  name: string;

  /** Mô tả chi tiết */
  description: string;

  /** Độ khó (1-5) */
  difficulty: number;

  /** URL video hướng dẫn */
  videoUrl?: string;

  /** Các bước thực hiện */
  steps: string[];

  /** Các lưu ý quan trọng */
  tips: string[];

  /** Các lỗi thường gặp và cách khắc phục */
  commonMistakes: {
    mistake: string;
    solution: string;
  }[];
}
