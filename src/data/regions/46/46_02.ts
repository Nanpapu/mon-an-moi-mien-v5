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
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Hến tươi',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shellfish',
    },
    {
      name: 'Cơm trắng',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/rice',
    },
    {
      name: 'Rau thơm các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Mắm ruốc Huế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/sauce',
    },
    {
      name: 'Tóp mỡ',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Ớt tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Hành phi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế hến',
        details: [
          'Rửa hến nhiều lần với nước sạch',
          'Ngâm hến trong nước có pha muối khoảng 2 tiếng để hến nhả cát',
          'Rửa lại lần cuối với nước sạch',
          'Để ráo nước',
        ],
      },
      {
        title: 'Chuẩn bị các loại rau và gia vị',
        details: [
          'Rau thơm (rau răm, húng quế) nhặt rửa sạch',
          'Thái nhỏ rau thơm',
          'Ớt tươi rửa sạch, thái lát mỏng',
          'Đậu phộng rang giã dập vừa phải',
        ],
      },
    ],
    cooking: [
      {
        title: 'Luộc hến',
        details: [
          'Đun sôi nước trong nồi',
          'Cho hến vào luộc với nước sôi đến khi vừa chín tới (khoảng 5 phút)',
          'Vớt hến ra, tách lấy phần thịt',
          'Giữ lại nước luộc hến để pha nước mắm',
        ],
      },
      {
        title: 'Xào hến',
        details: [
          'Phi hành tỏi thơm vàng',
          'Cho hến vào xào với hành phi',
          'Nêm nếm với ít muối và tiêu',
          'Xào đến khi hến thơm và hơi khô',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước mắm ruốc',
        details: [
          'Phi mắm ruốc với dầu ăn cho thơm',
          'Pha loãng với nước luộc hến',
          'Nêm nếm với đường cho vừa ăn',
          'Để nguội trước khi dùng',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện món ăn',
        details: [
          'Xới cơm nguội ra tô',
          'Cho hến xào lên trên',
          'Rưới nước mắm ruốc vừa đủ ướt',
          'Rắc đậu phộng, tóp mỡ, hành phi lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách dùng',
        details: [
          'Thêm rau thơm các loại tùy thích',
          'Ăn kèm ớt tươi',
          'Có thể chan thêm nước mắm ruốc tùy khẩu vị',
          'Trộn đều trước khi ăn',
        ],
      },
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
      'Hành phi bảo quản trong hộp kín ở nhiệt độ phòng đến 1 tuần',
      'Rau thơm nên mua mới mỗi lần dùng',
    ],
  },
};

export default comHen;
