// Giá tham khảo cho các nguyên liệu (đơn vị: VND)
export const INGREDIENT_PRICES = {
  // Thịt
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

  // Hải sản
  'seafood/fish': {
    basePrice: 150000,
    unit: 'gram',
  },
  'seafood/shrimp': {
    basePrice: 250000,
    unit: 'gram',
  },

  // Rau củ
  'vegetable/leafy': {
    basePrice: 15000,
    unit: 'gram',
  },
  'vegetable/root': {
    basePrice: 20000,
    unit: 'gram',
  },

  // Gia vị
  'spice/fresh': {
    basePrice: 40000,
    unit: 'gram',
  },
  'spice/dried': {
    basePrice: 100000,
    unit: 'gram',
  },

  // Mặc định cho các loại chưa định nghĩa
  default: {
    basePrice: 50000,
    unit: 'gram',
  },
} as const;

// Hệ số quy đổi đơn vị
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
    PIECE: 100, // Ước lư��ng 1 cái = 100g
    TABLESPOON: 15, // 1 muỗng = 15g/ml
    TEASPOON: 5, // 1 thìa = 5g/ml
  },
} as const;
