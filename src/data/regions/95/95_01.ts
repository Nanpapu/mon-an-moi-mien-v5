import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhCungBacLieu: Recipe = {
  id: '95_01',
  name: 'Bánh Cống Bạc Liêu',
  region: 'Miền Nam',
  image: 'images/95/95_01.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Tôm tươi',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Tôm sú hoặc tôm thẻ, bóc vỏ, giữ lại đuôi',
    },
    {
      name: 'Thịt heo xay',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đậu xanh cà vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột năng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nước mắm',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Tiêu đen',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
    },
    {
      name: 'Dầu ăn',
      amount: 500,
      unit: UNITS.VOLUME.MILLILITER,
      note: 'Dùng để chiên bánh',
    },
    {
      name: 'Rau sống các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Xà lách, húng quế, rau răm',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
  ],
  instructions: {
    preparation: [
      'Đậu xanh:',
      '- Ngâm đậu xanh 4 tiếng hoặc qua đêm',
      '- Đãi sạch, để ráo',
      '- Xay nhuyễn thành bột mịn',

      'Tôm tươi:',
      '- Bóc vỏ, giữ lại đuôi',
      '- Rửa sạch, để ráo',
      '- Ướp với 1/2 muỗng cà phê tiêu và 1/2 muỗng canh nước mắm',

      'Gia vị:',
      '- Hành tím, tỏi bóc vỏ',
      '- Băm nhuyễn một nửa số hành tím và tỏi',
      '- Phần còn lại thái lát mỏng',
    ],
    processing: [
      'Làm bột:',
      '- Trộn bột gạo với bột năng',
      '- Thêm 400ml nước ấm',
      '- Khuấy đều thành hỗn hợp sệt',
      '- Để nghỉ 30 phút',

      'Làm nhân:',
      '- Trộn thịt xay với hành tỏi băm',
      '- Thêm 1 muỗng canh nước mắm, 1/2 muỗng cà phê tiêu',
      '- Trộn đều và ướp 15 phút',
    ],
    cooking: [
      'Chiên bánh:',
      '- Đun nóng dầu trong chảo sâu lòng',
      '- Múc bột vào khuôn bánh cống',
      '- Đặt tôm vào giữa',
      '- Phủ một lớp bột đậu xanh và thịt lên trên',
      '- Chiên với lửa vừa đến khi vàng giòn (khoảng 5-7 phút)',
      '- Vớt ra để ráo dầu trên giấy thấm',
    ],
    sauce: [
      'Pha nước mắm chua ngọt:',
      '- 3 muỗng canh nước mắm',
      '- 3 muỗng canh đường',
      '- 2 muỗng canh nước cốt chanh',
      '- 1 muỗng canh ớt băm',
      '- 2 tép tỏi băm',
      'Khuấy đều cho đường tan hết',
    ],
    assembly: [
      'Lắp ráp bánh:',
      '- Chuẩn bị khuôn bánh cống nóng',
      '- Múc bột vào khuôn theo thứ tự: bột gạo, tôm, bột đậu xanh, thịt',
      '- Đảm bảo các lớp được xếp đều và đẹp mắt',
    ],
    serving: [
      'Dọn bánh nóng kèm:',
      '- Rau sống các loại',
      '- Dưa leo thái lát',
      '- Nước mắm chua ngọt',

      'Cách ăn:',
      '- Chấm bánh với nước mắm',
      '- Ăn kèm rau sống và dưa leo',
      '- Dùng nóng để bánh giòn ngon',
    ],
    tips: [
      'Bột phải được để nghỉ đủ thời gian để bánh giòn',
      'Dầu chiên phải đủ nóng (180-190°C) để bánh không bị ngấm dầu',
      'Không chiên quá nhiều bánh cùng lúc để dầu không bị nguội',
      'Tôm nên để nguyên đuôi để tăng thẩm mỹ',
      'Bột đậu xanh phải xay thật mịn để bánh đẹp mắt',
      'Nên ăn bánh khi còn nóng để cảm nhận độ giòn',
    ],
    storage: [
      'Bánh cống nên ăn ngay khi chiên xong',
      'Nếu cần bảo quản, để nguội hoàn toàn rồi cho vào hộp kín',
      'Có thể giữ trong tủ lạnh tối đa 24 giờ',
      'Khi ăn lại, hâm nóng bằng lò nướng hoặc nồi chiên không dầu',
      'Bột pha sẵn có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể giữ trong tủ lạnh đến 1 tuần',
    ],
  },
};
export default banhCungBacLieu;
