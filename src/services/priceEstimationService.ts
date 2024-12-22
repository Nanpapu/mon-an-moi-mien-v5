import { Ingredient } from '../types';
import {
  INGREDIENT_PRICES,
  UNIT_CONVERSIONS,
  SEASONAL_ADJUSTMENTS,
} from '../constants/ingredientPrices';

export const PriceEstimationService = {
  /**
   * Tính hệ số quy đổi cho đơn vị đếm
   * @param ingredient Thông tin nguyên liệu
   * @returns Hệ số quy đổi
   */
  getQuantityConversion(ingredient: Ingredient): number {
    if (ingredient.unit.includes('PIECE')) {
      const conversions = UNIT_CONVERSIONS.QUANTITY.PIECE;
      return (
        conversions[ingredient.type as keyof typeof conversions] ||
        conversions.default
      );
    }

    if (ingredient.unit.includes('TABLESPOON')) {
      const conversions = UNIT_CONVERSIONS.QUANTITY.TABLESPOON;
      return (
        conversions[ingredient.type as keyof typeof conversions] ||
        conversions.default
      );
    }

    if (ingredient.unit.includes('TEASPOON')) {
      const conversions = UNIT_CONVERSIONS.QUANTITY.TEASPOON;
      return (
        conversions[ingredient.type as keyof typeof conversions] ||
        conversions.default
      );
    }

    return 1;
  },

  /**
   * Tính giá ước lượng cho một nguyên liệu
   * @param ingredient Thông tin nguyên liệu
   * @param seasonalFactor Hệ số điều chỉnh theo mùa
   * @returns Giá ước lượng (VND)
   */
  calculateIngredientPrice(
    ingredient: Ingredient,
    seasonalFactor: number = SEASONAL_ADJUSTMENTS.NORMAL
  ): number {
    const priceInfo =
      INGREDIENT_PRICES[ingredient.type as keyof typeof INGREDIENT_PRICES] ||
      INGREDIENT_PRICES.other;

    // Tính hệ số quy đổi đơn vị
    let conversionFactor = 1;

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
    } else {
      conversionFactor = this.getQuantityConversion(ingredient);
    }

    // Tính giá = (số lượng * hệ số quy đổi * giá cơ bản * hệ số mùa vụ) / 1000
    const price =
      (ingredient.amount *
        conversionFactor *
        priceInfo.basePrice *
        seasonalFactor) /
      1000;

    return Math.round(price);
  },

  /**
   * Tính tổng giá ước lượng cho công thức
   * @param ingredients Danh sách nguyên liệu
   * @param seasonalFactor Hệ số điều chỉnh theo mùa
   * @returns Thông tin giá ước lượng
   */
  calculateRecipePrice(
    ingredients: Ingredient[],
    seasonalFactor: number = SEASONAL_ADJUSTMENTS.NORMAL
  ): {
    totalPrice: number;
    priceRange: { min: number; max: number };
    priceLevel: 'Rẻ' | 'Trung bình' | 'Cao';
    details: {
      name: string;
      price: number;
      percentage: number;
    }[];
  } {
    // Tính giá từng nguyên liệu
    const ingredientPrices = ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: this.calculateIngredientPrice(ingredient, seasonalFactor),
    }));

    // Tính tổng giá
    const totalPrice = ingredientPrices.reduce(
      (sum, item) => sum + item.price,
      0
    );

    // Tính phần trăm đóng góp của từng nguyên liệu
    const details = ingredientPrices.map((item) => ({
      ...item,
      percentage: Math.round((item.price / totalPrice) * 100),
    }));

    // Tính khoảng giá (±20%)
    const priceRange = {
      min: Math.round(totalPrice * 0.8),
      max: Math.round(totalPrice * 1.2),
    };

    // Xác định mức giá
    let priceLevel: 'Rẻ' | 'Trung bình' | 'Cao';
    if (totalPrice < 100000) {
      priceLevel = 'Rẻ';
    } else if (totalPrice < 200000) {
      priceLevel = 'Trung bình';
    } else {
      priceLevel = 'Cao';
    }

    return {
      totalPrice,
      priceRange,
      priceLevel,
      details: details.sort((a, b) => b.price - a.price), // Sắp xếp theo giá giảm dần
    };
  },
};
