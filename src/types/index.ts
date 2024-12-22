/**
 * @fileoverview Định nghĩa các types và interfaces dùng chung trong ứng dụng
 */

import { Timestamp } from 'firebase/firestore';

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
 * Interface cho nguyên liệu
 * @interface Ingredient
 */
export interface Ingredient {
  /** ID định danh duy nhất của nguyên liệu */
  id: string;

  /** Tên nguyên liệu */
  name: string;

  /** Số lượng */
  amount: number;

  /** Đơn vị tính */
  unit: string;

  /** Phân loại nguyên liệu */
  category: IngredientCategory;

  /** Mức độ quan trọng của nguyên liệu (1-3)
   * 1: Bắt buộc phải có
   * 2: Nên có
   * 3: Có thể thay thế hoặc bỏ qua
   */
  importance: 1 | 2 | 3;

  /** Các nguyên liệu có thể thay thế */
  substitutes?: string[];

  /** Giá trị dinh dưỡng cho lượng nguyên liệu này (tính theo 100g) */
  nutrition?: {
    calories?: number; // Calories
    protein?: number; // Protein (g)
    fat?: number; // Chất béo (g)
    carbs?: number; // Carbohydrate (g)
  };

  /** Ghi chú về cách chọn, sơ chế nguyên liệu */
  note?: string;

  /** Cờ đánh dấu nguyên liệu có phải là dị ứng phổ biến không */
  isAllergen?: boolean;

  /** Giá thành tham khảo (VND) */
  estimatedPrice?: number;

  /** URL hình ảnh nguyên liệu */
  image?: string;

  /** Phân loại nguyên liệu theo chế độ ăn */
  dietaryInfo?: {
    /** Có phải nguyên liệu chay không */
    isVegetarian: boolean;
    /** Có phải nguyên liệu thuần chay không */
    isVegan: boolean;
    /** Các hạn chế về chế độ ăn */
    restrictions?: {
      containsGluten?: boolean; // Chứa gluten (chất đạm trong lúa mì)
      containsSoy?: boolean; // Chứa đậu nành
      containsLactose?: boolean; // Chứa lactose (đường sữa)
      containsPeanuts?: boolean; // Chứa đậu phộng/lạc
      containsSeafood?: boolean; // Chứa hải sản
      isHalal?: boolean; // Phù hợp với tiêu chuẩn Halal (đạo Hồi)
      isKosher?: boolean; // Phù hợp với tiêu chuẩn Kosher (Do Thái)
    };
  };

  /** Mùa vụ của nguyên liệu */
  seasonality?: {
    /** Các tháng trong năm nguyên liệu có sẵn */
    availableMonths: number[];
    /** Thời điểm nguyên liệu ngon nhất */
    peakMonths?: number[];
  };

  /** Cách sơ chế nguyên liệu */
  preparationMethod?: {
    /** Mô tả cách sơ chế */
    description: string;
    /** Thời gian sơ chế (phút) */
    duration?: number;
    /** Các bước sơ chế chi tiết */
    steps?: string[];
  };

  /** Điều kiện bảo quản */
  storageConditions?: {
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
  };

  /** Thông tin về tính bền vững */
  sustainabilityInfo?: {
    /** Dấu chân carbon (CO2e/kg) */
    carbonFootprint?: number;
    /** Nguồn gốc */
    origin?: string;
    /** Chứng nhận bền vững */
    certifications?: string[];
  };
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
 * Các bước thực hiện được phân loại theo giai đoạn
 * @interface Instructions
 */
export interface Instructions {
  /** Các bước chuẩn bị nguyên liệu */
  preparation: Step[];

  /** Các bước sơ chế (làm sạch, thái, cắt...) */
  processing?: Step[];

  /** Các bước ướp gia vị */
  marinating?: Step[];

  /** Các bước nấu nước dùng/xốt */
  broth?: Step[];

  /** Các bước làm nước chấm/sốt */
  sauce?: Step[];

  /** Các bước nướng/chiên/xào */
  cooking?: Step[];

  /** Các bước hấp/luộc */
  steaming?: Step[];

  /** Các bước làm nhân (cho bánh, nem...) */
  filling?: Step[];

  /** Các bước làm vỏ/bột (cho bánh) */
  dough?: Step[];

  /** Các bước hoàn thiện món ăn */
  assembly: Step[];

  /** Cách thưởng thức */
  serving: Step[];

  /** Các mẹo và lưu ý quan trọng - bắt buộc để đảm bảo chất lượng */
  tips: string[];

  /** Cách bảo quản - bắt buộc để hướng dẫn người dùng */
  storage: string[];
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
 * Công thức nấu ăn đầy đủ, kế thừa từ BaseRecipe
 * @interface Recipe
 * @extends {BaseRecipe}
 */
export interface Recipe extends BaseRecipe {
  /** Thời gian nấu (phút) */
  cookingTime?: number;

  /** Thời gian chuẩn bị (phút) */
  prepTime?: number;

  /** Thời gian chờ (phút) - VD: thời gian ướp, thời gian chờ nở bột... */
  waitTime?: number;

  /** Độ khó (1-5) */
  difficulty?: number;

  /** Số người ăn */
  servings?: number;

  /** Loại món ăn */
  type?: 'appetizer' | 'main' | 'dessert' | 'drink' | 'snack';

  /** Phương pháp nấu chính */
  cookingMethod?: 'stir-fry' | 'steam' | 'boil' | 'grill' | 'bake' | 'deep-fry';

  /** Các tag để phân loại và tìm kiếm */
  tags?: string[];

  /** Giá thành ước tính cho một phần ăn (VND) */
  estimatedCostPerServing?: number;

  /** Thông tin dinh dưỡng cho một phần ăn */
  nutritionPerServing?: {
    calories?: number;
    protein?: number;
    fat?: number;
    carbs?: number;
    fiber?: number;
    sugar?: number;
  };

  /** Các biến thể của công thức (VD: phiên bản chay, ít cay...) */
  variations?: {
    name: string;
    description: string;
    ingredientModifications: string[];
  }[];

  /** Các món ăn kèm phù hợp */
  suggestedSideDishes?: string[];

  /** Các đồ uống phù hợp */
  suggestedDrinks?: string[];

  /** Mùa phù hợp để nấu món này */
  seasons?: ('spring' | 'summer' | 'autumn' | 'winter')[];

  /** Dịp phù hợp để nấu món này */
  occasions?: string[];

  /** Lịch sử cập nhật công thức */
  history?: {
    version: string;
    date: Date;
    changes: string[];
  }[];

  /** Phân loại món ăn theo chế độ ăn */
  dietaryType: {
    /** Món chay hay mặn */
    type: 'vegetarian' | 'vegan' | 'non-vegetarian';
    /** Ghi chú về chế độ ăn */
    note?: string;
  };

  /** Các hạn chế về chế độ ăn */
  dietaryRestrictions?: {
    /** Không chứa gluten */
    glutenFree?: boolean;
    /** Không chứa đậu nành */
    soyFree?: boolean;
    /** Không chứa lactose */
    lactoseFree?: boolean;
    /** Không chứa đậu phộng */
    peanutFree?: boolean;
    /** Không chứa h��i sản */
    seafoodFree?: boolean;
    /** Halal */
    halal?: boolean;
    /** Kosher */
    kosher?: boolean;
  };
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

/**
 * Thông tin về một phiên bản của công thức
 * @interface RecipeVersion
 */
export interface RecipeVersion {
  /** ID định danh duy nhất của phiên bản */
  id: string;

  /** ID của công thức gốc */
  originalRecipeId: string;

  /** Số phiên bản */
  version: string;

  /** Ngày tạo phiên bản */
  createdAt: Date;

  /** Người tạo phiên bản */
  createdBy: string;

  /** Mô tả các thay đổi */
  changes: string[];

  /** Các nguyên liệu đã thay đổi */
  modifiedIngredients: {
    ingredientId: string;
    oldValue: Partial<Ingredient>;
    newValue: Partial<Ingredient>;
  }[];

  /** Các bước đã thay đổi */
  modifiedSteps: {
    stepId: string;
    oldValue: Partial<Step>;
    newValue: Partial<Step>;
  }[];
}
