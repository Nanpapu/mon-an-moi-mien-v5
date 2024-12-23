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
        title: 'Sơ chế nguyên liệu',
        details: [
          'Thịt ba chỉ rửa sạch, để ráo, cắt miếng vuông 3x3cm',
          'Tôm sú bóc vỏ, giữ lại đầu và đuôi, rút chỉ đen',
          'Xương heo rửa sạch, chặt khúc vừa ăn, chần qua nước sôi',
          'Củ nén gọt vỏ, đập dập, băm nhỏ',
          'Hành tím, tỏi bóc vỏ, băm nhuyễn',
          'Nghệ củ gọt vỏ, giã nhỏ hoặc xay nhuyễn',
          'Rau sống nhặt, rửa sạch, để ráo',
          'Đậu phộng rang vàng, giã dập vừa phải',
          'Bánh tráng nướng vàng giòn trên bếp than hoặc bếp ga',
        ],
      },
      {
        title: 'Ướp thịt và tôm',
        details: [
          'Thịt ba chỉ ướp với 1/3 lượng hành tỏi băm, 1 muỗng cà phê nghệ, 1 muỗng canh nước mắm, 1/2 muỗng cà phê tiêu',
          'Tôm ướp với 1/3 lượng hành tỏi băm, 1/2 muỗng canh nước mắm, 1/4 muỗng cà phê tiêu',
          'Để thịt và tôm thấm gia vị trong 15-20 phút',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun nóng 2 muỗng canh dầu điều trong nồi lớn',
          'Phi thơm 1/3 lượng hành tỏi còn lại với dầu điều',
          'Cho xương vào xào săn với lửa vừa (3-5 phút)',
          'Thêm 2 lít nước, đun sôi rồi hạ lửa nhỏ',
          'Cho nghệ và củ nén vào, nấu liu riu 45 phút',
          'Thêm thịt ba chỉ đã ướp vào nấu thêm 15 phút',
          'Nêm 2 muỗng canh nước mắm, 1 muỗng cà phê muối, 1 muỗng canh đường',
          'Nếm thử và điều chỉnh vị (mặn 40%, ngọt 30%, umami 30%)',
          'Nước dùng phải có màu vàng đẹp của nghệ và dầu điều',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chế biến tôm và thịt',
        details: [
          'Đun nóng chảo với 2 muỗng canh dầu điều',
          'Xào tôm đã ướp với lửa lớn (2-3 phút) đến khi tôm săn và có màu đỏ cam đẹp',
          'Vớt tôm ra đĩa riêng',
          'Vớt thịt từ nồi nước dùng ra, để ráo',
          'Cắt thịt thành miếng mỏng vừa ăn',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị mì',
        details: [
          'Đun sôi nồi nước lớn ở 100°C',
          'Trụng mì Quảng qua nước sôi 10-15 giây',
          'Vớt ra ngay, tráng qua nước lạnh',
          'Để ráo hoàn toàn trong rổ đan thưa',
          'Chia mì ra từng tô (200g/tô)',
        ],
      },
      {
        title: 'Hoàn thiện tô mì',
        details: [
          'Xếp mì vào tô theo hình xoắn ốc',
          'Xếp thịt ba chỉ (50g) và tôm (3-4 con) lên trên',
          'Rắc đậu phộng rang và hành phi',
          'Chan nước dùng vừa đủ ướt (2-3 muỗng canh)',
          'Rắc tiêu xay và ngò rí thái nhỏ',
          'Thêm một ít dầu điều màu lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Bày rau sống ra đĩa lót lá chuối (rau xà lách, húng quế, rau răm, giá sống, bắp chuối bào)',
          'Để riêng bánh tráng nướng giòn',
          'Ớt tươi thái lát mỏng để riêng',
          'Chanh tươi thái múi cau',
          'Nước mắm pha chua ngọt để riêng',
        ],
      },
      {
        title: 'Cách thưởng thức đúng điệu',
        details: [
          'Bẻ bánh tráng nướng thành miếng vừa ăn',
          'Thêm rau sống, bắp chuối bào tùy thích',
          'Có thể thêm ớt, chanh theo khẩu vị',
          'Trộn đều tất cả nguyên liệu trước khi ăn',
          'Chấm bánh tráng với nước mắm pha',
        ],
      },
    ],
    tips: [
      'Nước dùng Mì Quảng phải đặc và ít, chỉ vừa đủ ướt mì',
      'Dầu điều phải có màu đẹp và thơm, không được cháy',
      'Tôm phải tươi và xào vừa chín tới để giữ độ ngọt và giòn',
      'Bánh tráng nướng phải giòn đều và có màu vàng đẹp',
      'Thịt ba chỉ phải mềm nhưng không nát',
      'Mì phải dai và có màu vàng đặc trưng',
      'Rau ăn kèm phải đa dạng và tươi mới',
      'Đậu phộng rang phải giòn và thơm, không được cháy',
    ],
    storage: [
      'Nước dùng bảo quản trong tủ lạnh tối đa 3 ngày',
      'Thịt và tôm đã chế biến nên dùng trong vòng 24 giờ',
      'Mì Quảng tươi nên mua và sử dụng trong ngày',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 2-3 ngày',
      'Bánh tráng nướng để nơi khô ráo, dùng trong 2-3 ngày',
      'Đậu phộng rang và hành phi để trong hộp kín, nơi khô ráo',
    ],
  },
};

export default miQuang;
