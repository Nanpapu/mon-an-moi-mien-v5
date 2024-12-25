// Giá tham khảo cho các nguyên liệu (đơn vị: VND)
export const INGREDIENT_PRICES = {
  // Thịt và các chế phẩm từ thịt
  'meat/pork': {
    basePrice: 120000, // giá/kg thịt heo (ba rọi, thăn...)
    unit: 'gram',
  },
  'meat/pork_ground': {
    basePrice: 130000, // giá/kg thịt heo xay
    unit: 'gram',
  },
  'meat/pork_rib': {
    basePrice: 140000, // giá/kg sườn heo
    unit: 'gram',
  },
  'meat/beef': {
    basePrice: 280000, // giá/kg thịt bò (thăn, bắp...)
    unit: 'gram',
  },
  'meat/beef_ground': {
    basePrice: 290000, // giá/kg thịt bò xay
    unit: 'gram',
  },
  'meat/chicken': {
    basePrice: 70000, // giá/kg thịt gà ta
    unit: 'gram',
  },
  'meat/chicken_breast': {
    basePrice: 90000, // giá/kg ức gà
    unit: 'gram',
  },
  'meat/duck': {
    basePrice: 90000, // giá/kg thịt vịt
    unit: 'gram',
  },
  'meat/processed/ham': {
    basePrice: 180000, // giá/kg chả lụa
    unit: 'gram',
  },
  'meat/processed/sausage': {
    basePrice: 150000, // giá/kg xúc xích
    unit: 'gram',
  },

  // Hải sản và thủy hải sản
  'seafood/fish/snapper': {
    basePrice: 200000, // giá/kg cá hồng
    unit: 'gram',
  },
  'seafood/fish/mackerel': {
    basePrice: 150000, // giá/kg cá thu
    unit: 'gram',
  },
  'seafood/fish/salmon': {
    basePrice: 350000, // giá/kg cá hồi
    unit: 'gram',
  },
  'seafood/shrimp/white': {
    basePrice: 250000, // giá/kg tôm sú
    unit: 'gram',
  },
  'seafood/shrimp/black_tiger': {
    basePrice: 300000, // giá/kg tôm sú
    unit: 'gram',
  },
  'seafood/crab/mud': {
    basePrice: 400000, // giá/kg cua biển
    unit: 'gram',
  },
  'seafood/squid/fresh': {
    basePrice: 200000, // giá/kg mực tươi
    unit: 'gram',
  },
  'seafood/shellfish/clam': {
    basePrice: 80000, // giá/kg nghêu
    unit: 'gram',
  },
  'seafood/dried/shrimp': {
    basePrice: 500000, // giá/kg tôm khô
    unit: 'gram',
  },

  // Rau củ quả
  'vegetable/leafy/morning_glory': {
    basePrice: 15000, // giá/kg rau muống
    unit: 'gram',
  },
  'vegetable/leafy/cabbage': {
    basePrice: 20000, // giá/kg bắp cải
    unit: 'gram',
  },
  'vegetable/root/carrot': {
    basePrice: 25000, // giá/kg cà rốt
    unit: 'gram',
  },
  'vegetable/root/potato': {
    basePrice: 20000, // giá/kg khoai tây
    unit: 'gram',
  },
  'vegetable/mushroom/straw': {
    basePrice: 60000, // giá/kg nấm rơm
    unit: 'gram',
  },
  'vegetable/mushroom/shiitake': {
    basePrice: 120000, // giá/kg nấm đông cô
    unit: 'gram',
  },
  'vegetable/fruit/tomato': {
    basePrice: 30000, // giá/kg cà chua
    unit: 'gram',
  },
  'vegetable/fruit/chili': {
    basePrice: 40000, // giá/kg ớt
    unit: 'gram',
  },
  'vegetable/sprout/bean': {
    basePrice: 25000, // giá/kg giá đỗ
    unit: 'gram',
  },

  // Gia vị
  'spice/fresh/garlic': {
    basePrice: 100000, // giá/kg tỏi
    unit: 'gram',
  },
  'spice/fresh/ginger': {
    basePrice: 60000, // giá/kg gừng
    unit: 'gram',
  },
  'spice/fresh/lemongrass': {
    basePrice: 40000, // giá/kg sả
    unit: 'gram',
  },
  'spice/dried/pepper': {
    basePrice: 200000, // giá/kg tiêu
    unit: 'gram',
  },
  'spice/dried/cinnamon': {
    basePrice: 300000, // giá/kg quế
    unit: 'gram',
  },
  'spice/sauce/fish_sauce': {
    basePrice: 60000, // giá/lít nước mắm
    unit: 'milliliter',
  },
  'spice/sauce/soy_sauce': {
    basePrice: 50000, // giá/lít nước tương
    unit: 'milliliter',
  },
  'spice/powder/five_spice': {
    basePrice: 150000, // giá/kg ngũ vị hương
    unit: 'gram',
  },
  'spice/powder/curry': {
    basePrice: 200000, // giá/kg bột cà ri
    unit: 'gram',
  },

  // Ngũ cốc và tinh bột
  'grain/rice/white': {
    basePrice: 25000, // giá/kg gạo tẻ
    unit: 'gram',
  },
  'grain/rice/sticky': {
    basePrice: 35000, // giá/kg gạo nếp
    unit: 'gram',
  },
  'grain/noodle/pho': {
    basePrice: 40000, // giá/kg bánh phở
    unit: 'gram',
  },
  'grain/noodle/egg': {
    basePrice: 50000, // giá/kg mì trứng
    unit: 'gram',
  },
  'grain/flour/wheat': {
    basePrice: 30000, // giá/kg bột mì
    unit: 'gram',
  },
  'grain/flour/rice': {
    basePrice: 35000, // giá/kg bột gạo
    unit: 'gram',
  },

  // Khác
  'other/egg/chicken': {
    basePrice: 3500, // giá/quả trứng gà
    unit: 'piece',
  },
  'other/egg/duck': {
    basePrice: 4000, // giá/quả trứng vịt
    unit: 'piece',
  },
  'other/tofu/white': {
    basePrice: 15000, // giá/kg đậu phụ trắng
    unit: 'gram',
  },
  'other/tofu/fried': {
    basePrice: 20000, // giá/kg đậu phụ chiên
    unit: 'gram',
  },
  'other/dried/wood_ear': {
    basePrice: 200000, // giá/kg nấm mèo khô
    unit: 'gram',
  },
  'other/dried/vermicelli': {
    basePrice: 80000, // giá/kg miến
    unit: 'gram',
  },
  other: {
    basePrice: 50000, // giá mặc định
    unit: 'gram',
  },
} as const;

// Hệ số quy đổi đơn vị chi tiết
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
      'other/egg/chicken': 60, // 1 quả trứng gà ~ 60g
      'other/egg/duck': 70, // 1 quả trứng vịt ~ 70g
      'vegetable/fruit/chili': 10, // 1 quả ớt ~ 10g
      'spice/fresh/garlic': 5, // 1 tép tỏi ~ 5g
      'spice/fresh/lemongrass': 20, // 1 cây sả ~ 20g
      default: 100, // mặc định 1 cái = 100g
    },
    TABLESPOON: {
      'spice/sauce/fish_sauce': 15, // 1 muỗng canh nước mắm = 15ml
      'spice/sauce/soy_sauce': 15, // 1 muỗng canh nước tương = 15ml
      'spice/powder/five_spice': 10, // 1 muỗng bột = 10g
      default: 15,
    },
    TEASPOON: {
      'spice/sauce/fish_sauce': 5,
      'spice/sauce/soy_sauce': 5,
      'spice/powder/five_spice': 3,
      default: 5,
    },
    BUNCH: {
      'vegetable/leafy/morning_glory': 200, // 1 mớ rau muống ~ 200g
      default: 100,
    },
  },
} as const;

// Hệ số điều chỉnh theo mùa
export const SEASONAL_ADJUSTMENTS = {
  TET: 1.5, // Tết giá tăng 50%
  NORMAL: 1.0,
  ABUNDANT: 0.8, // Mùa thu hoạch giá giảm 20%
} as const;
