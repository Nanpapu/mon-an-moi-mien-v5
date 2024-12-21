import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const comHen: Recipe = {
  id: '46_02',
  name: 'Cơm Hến',
  region: 'Miền Trung',
  image: 'images/46/46_02.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Hến tươi',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Cơm trắng',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau thơm các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Mắm ruốc Huế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tóp mỡ',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Ớt tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Hành phi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Hến rửa sạch nhiều lần với nước',
      'Ngâm hến trong nước có pha muối để hến nhả cát',
      'Rau thơm nhặt rửa sạch, thái nhỏ',
      'Ớt thái lát mỏng',
      'Đậu phộng rang giã dập',
    ],
    cooking: [
      'Luộc hến với nước sôi đến khi vừa chín tới',
      'Vớt hến ra, tách lấy phần thịt',
      'Giữ lại nước luộc hến',
      'Phi hành tỏi thơm vàng',
      'Xào hến với hành phi và gia vị',
    ],
    sauce: [
      'Phi mắm ruốc với dầu ăn',
      'Pha loãng với nước luộc hến',
      'Nêm nếm vừa ăn',
    ],
    assembly: [
      'Xới cơm ra tô',
      'Cho hến xào lên trên',
      'Rưới nước mắm ruốc',
      'Rắc đậu phộng, tóp mỡ, hành phi',
    ],
    serving: [
      'Thêm rau thơm các loại',
      'Ăn kèm ớt tươi',
      'Có thể chan thêm nước mắm ruốc tùy khẩu vị',
    ],
    tips: [
      'Hến phải được ngâm và rửa kỹ để loại bỏ hoàn toàn cát',
      'Nước luộc hến có thể dùng để pha mắm ruốc, tạo vị đậm đà',
      'Cơm nên dùng nguội để món ăn ngon hơn',
      'Tóp mỡ phải giòn và được thái nhỏ vừa ăn',
      'Rau thơm nên đa dạng các loại để tạo hương vị phong phú',
      'Mắm ruốc phải được phi thơm để khử mùi tanh',
    ],
    storage: [
      'Hến đã xào có thể bảo quản trong tủ lạnh đến 2 ngày',
      'Nước mắm ruốc pha có thể giữ trong tủ lạnh đến 1 tuần',
      'Tóp mỡ để nơi khô ráo, có thể giữ được 3-4 ngày',
      'Đậu phộng rang để trong hộp kín, tránh ẩm',
      'Hành phi bảo quản trong hộp kín ở nhiệt độ phng đến 1 tuần',
      'Rau thơm nên mua mới mỗi lần dùng',
    ],
  },
};

export default comHen;
