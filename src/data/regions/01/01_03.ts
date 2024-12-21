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
  ingredients: [
    {
      name: 'Cá lăng phi lê',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nghệ củ tươi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Mẻ',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Thì là',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành lá',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Gừng',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Mắm nêm',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Bún tươi',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau sống các loại (diếp cá, tía tô, kinh giới)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Cá lăng phi lê cắt miếng vuông 4x4cm dày 2cm',
      'Nghệ củ giã nhuyễn',
      'Thì là và hành lá rửa sạch, cắt khúc 4-5cm',
      'Gừng thái sợi mỏng',
      'Đậu phộng rang giã dập',
      'Rửa sạch các loại rau sống',
    ],
    marinating: [
      'Trộn cá với nghệ giã và mẻ',
      'Ướp cá với 2 muỗng canh mắm nêm',
      'Để cá ướp ít nhất 2 tiếng trong tủ lạnh',
    ],
    cooking: [
      'Đun nóng dầu trong chảo',
      'Chiên sơ cá đến khi hơi vàng',
      'Cho cá ra đĩa có lót giấy thấm dầu',
    ],
    assembly: [
      'Đặt chảo lên bếp than hoa hoặc bếp điện',
      'Cho dầu vào chảo, đợi dầu nóng',
      'Cho cá đã chiên sơ vào chảo',
      'Rắc thì là và hành lá lên trên',
      'Đảo đều cho đến khi cá vàng đều và thơm',
    ],
    serving: [
      'Bày bún ra bát',
      'Đặt chả cá nóng lên trên',
      'Rắc đậu phộng rang',
      'Ăn kèm với rau sống và mắm nêm',
    ],
    tips: [
      'Chọn cá lăng tươi, thịt chắc',
      'Nghệ tươi giã nhuyễn sẽ có màu đẹp hơn nghệ bột',
      'Nên nướng trên bếp than để có mùi thơm đặc trưng',
      'Rau thì là phải tươi và xanh mướt',
    ],
    storage: [
      'Cá đã ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể giữ trong tủ lạnh đến 1 tuần',
      'Rau sống nên rửa sạch và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
    ],
  },
};

export default chaCaLaVong;
