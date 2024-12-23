/**
 * @fileoverview Định nghĩa các types và interfaces dùng chung trong ứng dụng
 */

import { Timestamp } from 'firebase/firestore';

/**
 * Phân loại nguyên liệu
 * @type IngredientType
 */
export type IngredientType =
  // Thịt và các chế phẩm từ thịt
  | 'meat/pork' // thịt heo
  | 'meat/beef' // thịt bò
  | 'meat/chicken' // thịt gà
  | 'meat/duck' // thịt vịt
  | 'meat/processed' // thịt chế biến (chả, giò, xúc xích...)

  // Hải sản và thủy hải sản
  | 'seafood/fish' // cá các loại
  | 'seafood/shrimp' // tôm các loại
  | 'seafood/crab' // cua, ghẹ
  | 'seafood/squid' // mực
  | 'seafood/shellfish' // nghêu, sò, ốc
  | 'seafood/dried' // hải sản khô

  // Rau củ quả
  | 'vegetable/leafy' // rau ăn lá
  | 'vegetable/root' // củ các loại
  | 'vegetable/mushroom' // nấm các loại
  | 'vegetable/fruit' // rau ăn quả
  | 'vegetable/sprout' // giá, mầm

  // Gia vị
  | 'spice/fresh' // gia vị tươi (sả, gừng, nghệ...)
  | 'spice/dried' // gia vị khô (tiêu, đinh hương...)
  | 'spice/sauce' // nước chấm, xốt
  | 'spice/powder' // bột gia vị

  // Ngũ cốc và tinh bột
  | 'grain/rice' // gạo các loại
  | 'grain/noodle' // bún, phở, mì
  | 'grain/flour' // bột các loại

  // Khác
  | 'other/egg' // trứng
  | 'other/tofu' // đậu phụ
  | 'other/dried' // thực phẩm khô
  | 'other'; // khác

/**
 * Interface cho nguyên liệu
 * @interface Ingredient
 */
export interface Ingredient {
  /** Tên nguyên liệu */
  name: string;
  /** Số lượng */
  amount: number;
  /** Đơn vị tính */
  unit: string;
  /** Ghi chú */
  note?: string;
  /** Phân loại nguyên liệu */
  type?: IngredientType;
}

/**
 * Một bước trong quy trình nấu
 * @interface Step
 */
export interface Step {
  /** Tên của bước */
  title: string;
  /** Các thao tác chi tiết trong bước */
  details: string[];
}

/**
 * Các bước thực hiện được phân loại theo giai đoạn
 * @interface Instructions
 */
export interface Instructions {
  /** Các bước chuẩn bị nguyên liệu */
  preparation: Step[];
  /** Các bước sơ chế */
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
  /** Các bước làm nhân */
  filling?: Step[];
  /** Các bước làm vỏ/bột */
  dough?: Step[];
  /** Các bước hoàn thiện món ăn */
  assembly: Step[];
  /** Cách thưởng thức */
  serving: Step[];
  /** Các mẹo và lưu ý quan trọng */
  tips: string[];
  /** Cách bảo quản */
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
 * Phân loại món ăn (chay/mặn)
 */
export type DishCategory = 'vegetarian' | 'non-vegetarian';

/**
 * Thông tin công thức nấu ăn
 * @interface Recipe
 */
export interface Recipe extends BaseRecipe {
  /** Thời gian nấu (phút) */
  cookingTime?: number;
  /** Độ khó (1-5) */
  difficulty?: number;
  /** Số người ăn */
  servings?: number;
  /** Phân loại món chay/mặn */
  category: DishCategory;
  visible?: boolean;
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
  /** Số lượt upvote */
  upvotes?: number;

  /** Số lượt downvote */
  downvotes?: number;

  /** Danh sách user đã vote */
  votes?: {
    [userId: string]: 'up' | 'down' | null;
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
