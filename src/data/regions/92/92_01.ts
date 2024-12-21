import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const bunCaCanTho: Recipe = {
  id: '92_01',
  name: 'Bún Cá Cần Thơ',
  region: 'Miền Nam',
  image: 'images/92/92_01.jpg',
  cookingTime: 90,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Cá lóc phi lê',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Xương cá lóc',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bún tươi',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
    },
    {
      name: 'Cà chua',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dọc mùng',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bạc hà',
      amount: 200,
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
      name: 'Ớt sừng',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Rau om',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Ngò gai',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột chiên giòn',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Me chín',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Cá lóc phi lê cắt miếng vừa ăn khoảng 3x5cm',
      'Xương cá lóc rửa sạch với muối, chần qua nước sôi',
      'Cà chua cắt múi cau',
      'Dọc mùng và bạc hà cắt khúc 5cm',
      'Hành tỏi băm nhuyễn',
      'Rau om, ngò gai nhặt rửa sạch',
      'Me ngâm nước ấm, lọc lấy nước cốt',
    ],
    broth: [
      'Phi thơm hành tỏi',
      'Cho xương cá vào nấu với 2.5 lít nước',
      'Nấu liu riu 30 phút, hớt bọt thường xuyên',
      'Thêm cà chua vào nấu cho nhừ',
      'Nêm nước me, nước mắm, đường, muối vừa ăn',
      'Cho dọc mùng, bạc hà vào nấu chín mềm',
    ],
    cooking: [
      'Ướp cá với hành tỏi băm, nước mắm, tiêu',
      'Lăn cá qua bột chiên giòn',
      'Chiên cá trong chảo dầu nóng già đến khi vàng giòn',
    ],
    assembly: [
      'Trụng bún chín tới',
      'Xếp bún vào tô',
      'Xếp cá chiên lên trên',
      'Chan nước dùng nóng vào',
    ],
    serving: [
      'Rắc rau om, ngò gai lên trên',
      'Ăn kèm giá sống, ớt tươi',
      'Có thể thêm nước mắm, ớt tùy khẩu vị',
    ],
    tips: [
      'Cá phải được chiên vàng giòn bên ngoài nhưng vẫn mềm và ngọt bên trong',
      'Nước dùng phải nấu từ xương cá để có vị ngọt tự nhiên',
      'Bạc hà và dọc mùng phải được luộc riêng trước khi cho vào nước dùng để khử vị hăng',
      'Nước me phải vừa đủ chua để cân bằng với vị béo của cá',
      'Rau om và ngò gai phải được thái nhỏ và rắc lên trên cùng để giữ được hương thơm',
      'Cá sau khi chiên nên để ráo dầu trên giấy thấm để món ăn không bị ngấy',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Cá đã chiên nên ăn ngay để giữ độ giòn, nếu cần bảo quản thì để riêng và hâm nóng lại bằng lò vi sóng',
      'Bạc hà và dọc mùng đã luộc có thể bảo quản trong tủ lạnh 1-2 ngày',
      'Rau sống phải được rửa sạch, để ráo và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Nước me pha sẵn có thể bảo quản trong tủ lạnh đến 1 tuần',
      'Ớt sa tế có thể bảo quản trong lọ kín đến 2 tuần trong tủ lạnh',
    ],
  },
};

export default bunCaCanTho;
