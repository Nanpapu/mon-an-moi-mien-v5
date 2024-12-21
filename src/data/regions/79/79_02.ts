import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const huTieuNamVang: Recipe = {
  id: '79_02',
  name: 'Hủ Tiếu Nam Vang',
  region: 'Miền Nam',
  image: 'images/79/79_02.jpg',
  cookingTime: 120,
  difficulty: 4,
  servings: 6,
  ingredients: [
    {
      name: 'Hủ tiếu tươi',
      amount: 1,
      unit: UNITS.WEIGHT.KILOGRAM,
    },
    {
      name: 'Xương heo',
      amount: 1.5,
      unit: UNITS.WEIGHT.KILOGRAM,
    },
    {
      name: 'Tôm sú',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Thịt nạc vai heo',
      amount: 400,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Gan heo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Cật heo',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Trứng cút',
      amount: 15,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Tôm khô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Mực khô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nấm đông cô',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành tây',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hẹ',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Ngò gai',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau húng quế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Chanh tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Ớt sừng',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Nước mắm',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Muối',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đường phèn',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tiêu đen',
      amount: 20,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Xương heo:',
      '- Rửa sạch với nước muối',
      '- Chần qua nước sôi để loại bỏ bẩn',
      '- Rửa lại với nước lạnh',

      'Thịt và nội tạng:',
      '- Thịt nạc rửa sạch, thái miếng mỏng vừa ăn',
      '- Gan heo rửa sạch, thái lát mỏng 2mm',
      '- Cật heo rửa sạch, thái lát mỏng',

      'Tôm sú:',
      '- Bóc vỏ, giữ lại đuôi',
      '- Rút chỉ đen',
      '- Rửa sạch, để ráo',

      'Hải sản khô:',
      '- Tôm khô và mực khô ngâm nước ấm 30 phút',
      '- Nấm đông cô ngâm nước ấm 20 phút',
      '- Vớt ra, để ráo',

      'Gia vị:',
      '- Hành tây bóc vỏ, thái múi cau',
      '- Hành tím, tỏi bóc vỏ',
      '- 2/3 phần băm nhuyễn',
      '- 1/3 phần để nguyên',

      'Rau gia vị:',
      '- Hẹ cắt khúc 5cm',
      '- Ngò gai nhặt lá, rửa sạch',
      '- Húng quế nhặt lá, rửa sạch',
      '- Ớt sừng thái lát mỏng',
    ],
    marinating: [
      'Ướp thịt nạc:',
      '- 1 muỗng canh hành tỏi băm',
      '- 1 muỗng cà phê tiêu',
      '- 1 muỗng cà phê muối',
      '- 1/2 muỗng cà phê đường',
      'Để thịt ướp 30 phút',

      'Ướp tôm:',
      '- 1 muỗng canh hành tỏi băm',
      '- 1/2 muỗng cà phê tiêu',
      '- 1/2 muỗng cà phê muối',
      'Để tôm ướp 15 phút',
    ],
    broth: [
      'Nấu nước dùng:',
      '- Đun sôi 3 lít nước',
      '- Cho xương vào nấu với lửa vừa 1 giờ',
      '- Thêm tôm khô, mực khô đã ngâm',
      '- Nấu thêm 30 phút với lửa nhỏ',
      '- Nêm: 2 muỗng canh nước mắm, 1 muỗng canh đường phèn, 1 muỗng cà phê muối',
      '- Nấu liu riu thêm 15 phút',
      '- Vớt bọt thường xuyên để nước dùng trong',
    ],
    cooking: [
      'Xào thịt:',
      '- Phi thơm hành tỏi với dầu',
      '- Xào thịt nạc đến khi chín tái',
      '- Vớt ra để riêng',

      'Chế biến gan, cật:',
      '- Luộc nhanh trong nước sôi 1-2 phút',
      '- Vớt ra ngâm nước lạnh',

      'Chế biến tôm:',
      '- Xào tôm với hành tỏi đến khi vừa chín',
      '- Vớt ra để riêng',

      'Luộc trứng cút:',
      '- Luộc 3 phút trong nước sôi',
      '- Ngâm nước lạnh, bóc vỏ',
    ],
    assembly: [
      'Chuẩn bị hủ tiếu:',
      '- Đun sôi nước trong nồi lớn',
      '- Trụng hủ tiếu 30 giây',
      '- Vớt ra, tráng nước lạnh',

      'Sắp xếp tô:',
      '- Xếp hủ tiếu vào tô',
      '- Xếp thịt, gan, cật, tôm',
      '- Thêm trứng cút',
      '- Rắc hành phi',
      '- Chan nước dùng sôi vào',
    ],
    serving: [
      'Dọn kèm:',
      '- Đĩa rau sống (giá, hẹ, ngò gai, húng quế)',
      '- Chanh tươi',
      '- Ớt tươi thái lát',

      'Gia vị thêm:',
      '- Tiêu xay',
      '- Nước mắm',
      '- Tương ớt',

      'Hướng dẫn ăn:',
      '- Thêm rau sống tùy thích',
      '- Nặn chanh',
      '- Có thể thêm ớt, tiêu theo khẩu vị',
    ],
    tips: [
      'Nước dùng phải nấu từ xương tươi và hải sản khô để có vị ngọt tự nhiên',
      'Xương phải được chần qua và rửa sạch để nước dùng trong',
      'Hủ tiếu phải trụng vừa tới, không được để mềm',
      'Gan và cật chỉ luộc qua để giữ độ giòn',
      'Tôm phải xào vừa chín để giữ độ ngọt và không bị dai',
      'Nên để riêng nước dùng và hủ tiếu khi bảo quản',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt, gan, cật đã chế biến nên bảo quản riêng, dùng trong vòng 24 giờ',
      'Tôm đã xào nên dùng trong ngày',
      'Hủ tiếu đã trụng không nên bảo quản, nên trụng mới mỗi lần ăn',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm và bảo quản trong tủ lạnh',
      'Gia vị phi thơm có thể bảo quản trong tủ lạnh đến 1 tuần',
    ],
  },
};
export default huTieuNamVang;
