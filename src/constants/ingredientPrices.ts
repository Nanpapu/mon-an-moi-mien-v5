// Giá tham khảo cho các nguyên liệu (đơn vị: VND)
export const INGREDIENT_PRICES = {
  // Thịt và các chế phẩm từ thịt
  'meat/pork': {
    basePrice: 120000, // giá/kg
    unit: 'gram',
  },
  'meat/beef': {
    basePrice: 280000,
    unit: 'gram',
  },
  'meat/chicken': {
    basePrice: 70000,
    unit: 'gram',
  },
  'meat/duck': {
    basePrice: 90000,
    unit: 'gram',
  },
  'meat/processed': {
    basePrice: 150000,
    unit: 'gram',
  },

  // Hải sản và thủy hải sản
  'seafood/fish': {
    basePrice: 150000,
    unit: 'gram',
  },
  'seafood/shrimp': {
    basePrice: 250000,
    unit: 'gram',
  },
  'seafood/crab': {
    basePrice: 400000,
    unit: 'gram',
  },
  'seafood/squid': {
    basePrice: 200000,
    unit: 'gram',
  },
  'seafood/shellfish': {
    basePrice: 120000,
    unit: 'gram',
  },
  'seafood/dried': {
    basePrice: 500000,
    unit: 'gram',
  },

  // Rau củ quả
  'vegetable/leafy': {
    basePrice: 15000,
    unit: 'gram',
  },
  'vegetable/root': {
    basePrice: 20000,
    unit: 'gram',
  },
  'vegetable/mushroom': {
    basePrice: 80000,
    unit: 'gram',
  },
  'vegetable/fruit': {
    basePrice: 30000,
    unit: 'gram',
  },
  'vegetable/sprout': {
    basePrice: 25000,
    unit: 'gram',
  },

  // Gia vị
  'spice/fresh': {
    basePrice: 40000,
    unit: 'gram',
  },
  'spice/dried': {
    basePrice: 200000,
    unit: 'gram',
  },
  'spice/sauce': {
    basePrice: 100000,
    unit: 'milliliter',
  },
  'spice/powder': {
    basePrice: 150000,
    unit: 'gram',
  },

  // Ngũ cốc và tinh bột
  'grain/rice': {
    basePrice: 25000,
    unit: 'gram',
  },
  'grain/noodle': {
    basePrice: 40000,
    unit: 'gram',
  },
  'grain/flour': {
    basePrice: 30000,
    unit: 'gram',
  },

  // Khác
  'other/egg': {
    basePrice: 3500, // giá/quả
    unit: 'piece',
  },
  'other/tofu': {
    basePrice: 15000,
    unit: 'gram',
  },
  'other/dried': {
    basePrice: 200000,
    unit: 'gram',
  },
  other: {
    basePrice: 50000,
    unit: 'gram',
  },
} as const;

// Hệ số quy đổi đơn vị chi tiết hơn
export const UNIT_CONVERSIONS = {
  WEIGHT: {
    GRAM: 1,
    KILOGRAM: 1000,
  },
  VOLUME: {
    MILLILITER: 1,
    LITER: 1000,
  },
  QUANTITY: {
    PIECE: {
      'other/egg': 60, // 1 quả trứng ~ 60g
      'vegetable/fruit': 150, // 1 quả (chanh, ớt...) ~ 150g
      'spice/fresh': 20, // 1 củ tỏi/hành ~ 20g
      default: 100, // mặc định 1 cái = 100g
    },
    TABLESPOON: {
      'spice/sauce': 15, // 1 muỗng nước mắm/xì dầu = 15ml
      'spice/powder': 10, // 1 muỗng bột = 10g
      default: 15,
    },
    TEASPOON: {
      'spice/sauce': 5,
      'spice/powder': 3,
      default: 5,
    },
  },
} as const;

// Hệ số điều chỉnh theo mùa (có thể thay đổi theo thời gian)
export const SEASONAL_ADJUSTMENTS = {
  TET: 1.5, // Tết giá tăng 50%
  NORMAL: 1.0,
  ABUNDANT: 0.8, // Mùa thu hoạch giá giảm 20%
} as const;
