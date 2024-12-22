import { Ingredient } from '../types';
import {
  INGREDIENT_PRICES,
  UNIT_CONVERSIONS,
} from '../constants/ingredientPrices';

export const PriceEstimationService = {
  /**
   * Tính giá ước lượng cho một nguyên liệu
   * @param ingredient Thông tin nguyên liệu
   * @returns Giá ước lượng (VND)
   */
  calculateIngredientPrice(ingredient: Ingredient): number {
    // Lấy thông tin giá cơ bản
    const priceInfo =
      INGREDIENT_PRICES[ingredient.type as keyof typeof INGREDIENT_PRICES] ||
      INGREDIENT_PRICES.default;

    // Tính hệ số quy đổi đơn vị
    let conversionFactor = 1;

    // Quy đổi đơn vị về gram/ml
    if (
      ingredient.unit.includes('GRAM') ||
      ingredient.unit.includes('KILOGRAM')
    ) {
      conversionFactor =
        UNIT_CONVERSIONS.WEIGHT[
          ingredient.unit as keyof typeof UNIT_CONVERSIONS.WEIGHT
        ] || 1;
    } else if (
      ingredient.unit.includes('MILLILITER') ||
      ingredient.unit.includes('LITER')
    ) {
      conversionFactor =
        UNIT_CONVERSIONS.VOLUME[
          ingredient.unit as keyof typeof UNIT_CONVERSIONS.VOLUME
        ] || 1;
    } else if (
      ingredient.unit.includes('PIECE') ||
      ingredient.unit.includes('TABLESPOON') ||
      ingredient.unit.includes('TEASPOON')
    ) {
      conversionFactor =
        UNIT_CONVERSIONS.QUANTITY[
          ingredient.unit as keyof typeof UNIT_CONVERSIONS.QUANTITY
        ] || 1;
    }

    // Tính giá = (số lượng * hệ số quy đổi * giá cơ bản) / 1000 (vì giá cơ bản tính theo kg)
    const price =
      (ingredient.amount * conversionFactor * priceInfo.basePrice) / 1000;

    return Math.round(price); // Làm tròn số
  },

  /**
   * Tính tổng giá ước lượng cho công thức
   * @param ingredients Danh sách nguyên liệu
   * @returns Thông tin giá ước lượng
   */
  calculateRecipePrice(ingredients: Ingredient[]): {
    totalPrice: number;
    priceRange: { min: number; max: number };
    priceLevel: 'Rẻ' | 'Trung bình' | 'Cao';
  } {
    // Tính tổng giá
    const totalPrice = ingredients.reduce((sum, ingredient) => {
      return sum + this.calculateIngredientPrice(ingredient);
    }, 0);

    // Tính khoảng giá (±20%)
    const priceRange = {
      min: Math.round(totalPrice * 0.8),
      max: Math.round(totalPrice * 1.2),
    };

    // Xác định mức giá
    let priceLevel: 'Rẻ' | 'Trung bình' | 'Cao';
    if (totalPrice < 50000) {
      priceLevel = 'Rẻ';
    } else if (totalPrice < 150000) {
      priceLevel = 'Trung bình';
    } else {
      priceLevel = 'Cao';
    }

    return {
      totalPrice,
      priceRange,
      priceLevel,
    };
  },
};
