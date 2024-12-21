import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhCong: Recipe = {
  id: '92_02',
  name: 'Bánh Cống',
  region: 'Miền Nam',
  image: 'images/92/92_02.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Tôm tươi cỡ vừa',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Thịt heo băm',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đậu xanh đã xát vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tiêu',
      amount: 5,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nước mắm',
      amount: 30,
      unit: UNITS.VOLUME.MILLILITER,
    },
  ],
  instructions: {
    preparation: [
      'Tôm bóc vỏ, giữ đầu',
      'Đậu xanh ngâm 4 tiếng, xay nhuyễn',
      'Hành tím băm nhuyễn',
    ],
    processing: [
      'Trộn bột gạo với nước ấm tạo hỗn hợp sệt',
      'Ướp thịt băm với hành tím, tiêu, nước mắm',
      'Trộn đều đậu xanh xay với thịt băm đã ướp',
    ],
    cooking: [
      'Đổ bột vào khuôn bánh cống',
      'Đặt tôm lên trên, đầu tôm hướng lên',
      'Chiên trong dầu nóng với lửa vừa đến khi vàng giòn',
    ],
    // Thêm phần assembly bắt buộc
    assembly: [
      'Chuẩn bị đĩa bánh:',
      '- Xếp bánh cống ra đĩa có lót giấy thấm dầu',
      '- Bày rau sống và các loại rau thơm xung quanh',
      '- Đặt chén nước mắm pha bên cạnh',
    ],
    serving: [
      'Nhúng bánh tráng qua nước ấm nhanh',
      'Đặt bánh tráng lên đĩa',
      'Xếp xà lách, rau thơm lên trước',
      'Thêm thịt heo thái và dưa leo',
      'Cuốn chặt tay, không để rau thò ra ngoài',
      'Chấm với nước mắm pha',
    ],
    tips: [
      'Bột phải được đánh cho thật mịn và để nghỉ 30 phút trước khi chiên',
      'Dầu chiên phải nóng già (180-190°C) để bánh giòn và không bị ngấm dầu',
      'Tôm phải được đặt đầu hướng lên và ấn nhẹ vào bột để không bị rơi',
      'Đậu xanh xay phải mịn và không quá khô để bánh không bị vụn',
      'Chiên bánh với lửa vừa để chín đều và không bị cháy',
      'Khuôn bánh phải được làm nóng trước khi đổ bột để bánh không bị dính',
    ],
    storage: [
      'Bột sống có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Bánh đã chiên nên ăn nóng ngay để giữ độ giòn',
      'Nếu cần bảo quản bánh đã chiên, để nguội hoàn toàn rồi cho vào hộp kín, hâm nóng lại bằng lò vi sóng',
      'Nhân đậu xanh và thịt đã trộn có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể bảo quản trong tủ lạnh đến 1 tuần',
      'Đồ chua bảo quản trong tủ lạnh đến 2 tuần',
    ],
  },
};

export default banhCong;
