import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhTrangCuonThitHeo: Recipe = {
  id: '48_02',
  name: 'Bánh Tráng Cuốn Thịt Heo',
  region: 'Miền Trung',
  image: 'images/48/48_02.jpg',
  cookingTime: 60,
  difficulty: 2,
  servings: 4,
  ingredients: [
    {
      name: 'Thịt heo ba chỉ',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bánh tráng mỏng',
      amount: 20,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau xà lách',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Húng lủi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tía tô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Gừng',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Ớt tươi',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nước mắm',
      amount: 50,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Chanh tươi',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
  ],
  instructions: {
    preparation: [
      'Thịt heo rửa sạch, để ráo',
      'Dưa leo rửa sạch, gọt vỏ, thái sợi dài khoảng 5cm',
      'Hành lá rửa sạch, thái nhỏ',
      'Gừng gọt vỏ, thái sợi mỏng',
      'Tỏi bóc vỏ, băm nhuyễn',
      'Ớt rửa sạch, thái lát mỏng',
      'Rau sống các loại nhặt, rửa sạch, để ráo',
      'Chanh vắt lấy nước',
    ],
    cooking: [
      'Đun sôi nồi nước to',
      'Cho gừng thái sợi và 1/2 hành lá vào nước',
      'Thả thịt heo vào luộc với lửa vừa',
      'Khi nước sôi lại, hạ lửa nhỏ luộc thêm 20 phút',
      'Vớt thịt ra ngâm ngay vào thau nước lạnh (giữ độ giòn)',
      'Để thịt nguội hoàn toàn (khoảng 15 phút)',
      'Thái thịt mỏng vừa ăn (khoảng 2-3mm)',
    ],
    sauce: [
      'Pha 3 muỗng canh nước mắm với 2 muỗng canh đường',
      'Thêm 4 muỗng canh nước cốt chanh',
      'Cho tỏi băm và ớt thái lát vào',
      'Khuấy đều đến khi đường tan hết',
      'Nếm thử và điều chỉnh vị chua ngọt mặn theo ý thích',
    ],
    assembly: [
      'Nướng thịt trên bếp than hoa hoặc bếp nướng điện đến khi vàng đều hai mặt',
      'Cho thịt nướng vào bát, chan nước chấm vừa đủ ngập mặt thịt',
      'Bày rau sống ra đĩa riêng',
      'Bún tươi để riêng trong tô',
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
      'Không ngâm bánh tráng quá lâu sẽ bị nhũn',
      'Nên thái thịt mỏng và theo chiều ngang thớ để thịt mềm',
      'Có thể thêm đồ chua (củ cải, cà rốt) để đa dạng vị',
    ],
    storage: [
      'Thịt luộc còn dư có thể bảo quản trong tủ lạnh 2-3 ngày',
      'Nước chấm có thể giữ trong tủ lạnh đến 1 tuần',
    ],
  },
};

export default banhTrangCuonThitHeo;
