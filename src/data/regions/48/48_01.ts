import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const miQuang: Recipe = {
  id: '48_01',
  name: 'Mì Quảng',
  region: 'Miền Trung',
  image: 'images/48/48_01.jpg',
  cookingTime: 90,
  difficulty: 4,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Mì Quảng (sợi to, vàng)',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Tôm sú',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shrimp',
    },
    {
      name: 'Thịt heo ba chỉ',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Xương heo',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Củ nén',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Tỏi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Nghệ củ',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Dầu điều màu',
      amount: 30,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Bánh tráng nướng',
      amount: 8,
      unit: UNITS.QUANTITY.PIECE,
      type: 'grain/rice',
    },
    {
      name: 'Rau húng quế',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau răm',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Giá sống',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Bắp chuối bào',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
    },
    {
      name: 'Ớt sừng',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế nguyên liệu chính',
        details: [
          'Thịt ba chỉ rửa sạch, thái miếng vuông 2x2cm',
          'Tôm bóc vỏ, giữ đuôi, rút chỉ đen',
          'Xương heo rửa sạch, chặt khúc vừa ăn',
        ],
      },
      {
        title: 'Sơ chế gia vị',
        details: [
          'Củ nén bóc vỏ, rửa sạch, băm nhuyễn',
          'Hành tím, tỏi bóc vỏ, băm nhuyễn',
          'Nghệ củ gọt vỏ, giã nhuyễn',
          'Đậu phộng rang chín, giã dập vừa',
        ],
      },
      {
        title: 'Chuẩn bị rau ăn kèm',
        details: [
          'Rau sống nhặt, rửa sạch, để ráo',
          'Bắp chuối bào mỏng, ngâm nước muối loãng',
          'Ớt sừng thái lát mỏng',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Xương heo rửa sạch, chần qua nước sôi',
          'Phi thơm 1/2 lượng hành tỏi với dầu điều',
          'Cho xương vào nấu với 2 lít nước trong 1 tiếng',
          'Thêm nghệ và củ nén vào phi thơm với dầu điều còn lại',
          'Cho thịt ba chỉ vào xào săn với hỗn hợp nghệ',
          'Cho tất cả vào nồi nước dùng',
          'Nêm 2 muỗng canh nước mắm, 1 muỗng cà phê muối, 1 muỗng canh đường',
          'Nấu liu riu thêm 30 phút để thịt mềm',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chế biến tôm',
        details: [
          'Tôm ướp với 1 muỗng cà phê hành tỏi, 1/2 muỗng canh nước mắm trong 15 phút',
          'Xào tôm với dầu điều cho săn và thơm (khoảng 2-3 phút)',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện món ăn',
        details: [
          'Trụng mì qua nước sôi khoảng 10 giây',
          'Xếp mì vào tô',
          'Xếp thịt và tôm lên trên',
          'Chan nước dùng vừa đủ ướt (khoảng 2-3 muỗng canh)',
          'Rắc đậu phộng và hành phi lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị ăn kèm',
        details: [
          'Dọn kèm đĩa rau sống gồm húng quế, rau răm, giá, bắp chuối',
          'Bánh tráng nướng giòn để bên cạnh',
          'Ăn kèm ớt tươi tùy khẩu vị',
          'Có thể thêm nước mắm, tương ớt tùy thích',
        ],
      },
    ],
    tips: [
      'Nước dùng Mì Quảng phải đặc và ít, không nhiều như bún hay phở',
      'Bánh tráng nướng phải giòn mới ngon',
      'Có thể thêm trứng cút luộc hoặc chả để đa dạng món ăn',
      'Dầu điều màu phải vừa đủ để tạo màu đẹp cho món ăn',
      'Tôm phải tươi và xào vừa chín tới để giữ độ ngọt',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt và tôm đã chế biến nên bảo quản riêng, dùng trong vòng 24 giờ',
      'Mì Quảng tươi nên mua mới và dùng trong ngày',
      'Rau sống và bắp chuối bào phải rửa sạch, để ráo và bọc trong giấy ẩm trước khi cho vào tủ lạnh',
      'Đậu phộng rang và hành phi phải để nguội hoàn toàn trước khi bảo quản trong hộp kín',
      'Bánh tráng nướng phải bảo quản trong hộp kín để giữ độ giòn',
    ],
  },
};

export default miQuang;
