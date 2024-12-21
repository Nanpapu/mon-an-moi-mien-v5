import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhBeoBienHoa: Recipe = {
  id: '75_01',
  name: 'Bánh Bèo Biên Hòa',
  region: 'Miền Nam',
  image: 'images/75/75_01.jpg',
  cookingTime: 60,
  difficulty: 2,
  servings: 4,
  ingredients: [
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Bột gạo xay mịn',
    },
    {
      name: 'Bột năng',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Để bánh trong và dẻo',
    },
    {
      name: 'Tôm khô',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Loại tôm khô ngon, có màu đỏ cam',
    },
    {
      name: 'Đậu xanh không vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nước cốt dừa',
      amount: 200,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành phi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi phi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Muối',
      amount: 10,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đường',
      amount: 15,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tiêu',
      amount: 5,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Chuẩn bị bột:',
      '- Trộn bột gạo với bột năng',
      '- Thêm 450ml nước ấm từ từ và khuấy đều',
      '- Thêm 1/2 muỗng cà phê muối',
      '- Để bột nghỉ 30 phút',

      'Chuẩn bị nhân:',
      '- Ngâm tôm khô trong nước ấm 15 phút',
      '- Xay nhuyễn tôm khô',
      '- Ngâm đậu xanh 2 giờ, đãi vỏ',
      '- Hấp đậu xanh chín mềm',
      '- Nghiền đậu xanh thành nhuyễn',

      'Chuẩn bị gia vị:',
      '- Phi hành tỏi vàng thơm',
      '- Thái nhỏ hành lá',
    ],
    processing: [
      'Làm nhân tôm:',
      '- Phi thơm tỏi băm',
      '- Xào tôm khô với dầu ăn',
      '- Nêm muối, tiêu vừa ăn',
      '- Để nguội',

      'Làm đậu xanh:',
      '- Trộn đậu xanh nghiền với nước cốt dừa',
      '- Nêm đường, muối vừa ăn',
      '- Đánh nhuyễn mịn',
    ],
    cooking: [
      'Hấp bánh:',
      '- Đặt khuôn bánh bèo lên nồi hấp',
      '- Đổ bột vào khuôn (2/3 khuôn)',
      '- Hấp 3-4 phút đến khi bánh trong',
      '- Gỡ bánh ra đĩa',
    ],
    assembly: [
      'Hoàn thiện bánh:',
      '- Xếp bánh ra đĩa theo hình tròn',
      '- Phết một lớp đậu xanh mỏng lên mặt bánh',
      '- Rắc tôm khô xào lên trên',
      '- Rắc hành phi, tỏi phi',
      '- Rắc hành lá thái nhỏ',
    ],
    serving: [
      'Thưởng thức:',
      '- Ăn kèm nước mắm pha chua ngọt',
      '- Có thể thêm ớt tươi tùy khẩu vị',
      '- Dùng nóng để cảm nhận đầy đủ hương vị',
    ],
    tips: [
      'Bột phải được khuấy kỹ, không vón cục',
      'Khuôn bánh phải được lau sạch và thoa dầu mỏng trước mỗi lần đổ bột',
      'Hấp bánh với lửa vừa để bánh chín đều và không bị rách',
      'Đậu xanh phải nghiền thật mịn để tạo độ mềm mịn',
      'Tôm khô nên xay vừa phải, không quá nhỏ để giữ được độ giòn',
    ],
    storage: [
      'Bánh nên ăn ngay khi hấp xong',
      'Nếu cần bảo quản, để nguội hoàn toàn rồi đậy kín',
      'Có thể giữ trong tủ lạnh đến 24 giờ',
      'Hâm nóng bằng lò vi sóng hoặc hấp lại trước khi ăn',
      'Nhân tôm khô có thể bảo quản riêng trong tủ lạnh đến 1 tuần',
    ],
  },
};

export default banhBeoBienHoa;
