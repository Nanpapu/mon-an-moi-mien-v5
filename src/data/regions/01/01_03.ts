import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const chaCaLaVong: Recipe = {
  id: '01_03',
  name: 'Chả Cá Lã Vọng',
  region: 'Miền Bắc',
  image: 'images/01/01_03.jpg',
  cookingTime: 60,
  difficulty: 4,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Cá lăng phi lê',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
    },
    {
      name: 'Nghệ củ tươi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Mẻ',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Thì là',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Hành lá',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Gừng',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Mắm nêm',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Bún tươi',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Rau sống các loại (diếp cá, tía tô, kinh giới)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế cá',
        details: [
          'Cá lăng phi lê rửa sạch với nước muối loãng',
          'Để ráo nước',
          'Cắt miếng vuông 4x4cm dày 2cm',
          'Để riêng trong tô',
        ],
      },
      {
        title: 'Chuẩn bị gia vị',
        details: [
          'Nghệ củ gọt vỏ, rửa sạch',
          'Giã nghệ thật nhuyễn',
          'Gừng thái sợi mỏng',
          'Đậu phộng rang giã dập',
        ],
      },
      {
        title: 'Chuẩn bị rau',
        details: [
          'Thì là và hành lá rửa sạch',
          'Cắt khúc 4-5cm',
          'Rửa sạch các loại rau sống (diếp cá, tía tô, kinh giới)',
          'Để ráo nước',
        ],
      },
    ],
    marinating: [
      {
        title: 'Ướp cá',
        details: [
          'Trộn cá với nghệ giã và mẻ',
          'Thêm 2 muỗng canh mắm nêm',
          'Trộn đều nhẹ nhàng để cá không bị nát',
          'Để cá ướp ít nhất 2 tiếng trong tủ lạnh',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên sơ cá',
        details: [
          'Đun nóng dầu trong chảo',
          'Chiên sơ cá đến khi hơi vàng',
          'Không chiên quá chín',
          'Cho cá ra đĩa có lót giấy thấm dầu',
        ],
      },
      {
        title: 'Nướng cá',
        details: [
          'Đặt chảo lên bếp than hoa hoặc bếp điện',
          'Cho dầu vào chảo, đợi dầu nóng',
          'Cho cá đã chiên sơ vào chảo',
          'Rắc thì là và hành lá lên trên',
          'Đảo đều cho đến khi cá vàng đều và thơm',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bún',
        details: [
          'Trụng bún qua nước sôi nhanh',
          'Vớt ra ngay, tráng nước lạnh',
          'Để ráo nước',
          'Chia bún ra từng bát',
        ],
      },
    ],
    serving: [
      {
        title: 'Hoàn thiện món',
        details: [
          'Bày bún ra bát',
          'Đặt chả cá nóng lên trên',
          'Rắc đậu phộng rang',
          'Bày rau sống ra đĩa riêng',
          'Ăn kèm với rau sống và mắm nêm',
        ],
      },
    ],
    tips: [
      'Chọn cá lăng tươi, thịt chắc',
      'Nghệ tươi giã nhuyễn sẽ có màu đẹp hơn nghệ bột',
      'Nên nướng trên bếp than để có mùi thơm đặc trưng',
      'Rau thì là phải tươi và xanh mướt',
      'Không nên nướng cá quá lâu sẽ bị khô',
      'Mắm nêm nên pha loãng với nước dừa tươi để bớt mặn',
    ],
    storage: [
      'Cá đã ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể giữ trong tủ lạnh đến 1 tuần',
      'Rau sống nên rửa sạch và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Cá đã nướng nên ăn ngay, không nên để qua ngày',
      'Bún nên mua mới và dùng trong ngày',
    ],
  },
};

export default chaCaLaVong;
