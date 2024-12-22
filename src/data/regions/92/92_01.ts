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
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Cá lóc phi lê',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
      note: 'Cá tươi, phi lê sạch',
    },
    {
      name: 'Xương cá lóc',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
      note: 'Dùng nấu nước dùng',
    },
    {
      name: 'Bún tươi',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
      note: 'Bún số 8, sợi vừa',
    },
    {
      name: 'Cà chua',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/fruit',
      note: 'Chín đỏ, chắc quả',
    },
    {
      name: 'Dọc mùng',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
      note: 'Tươi, non',
    },
    {
      name: 'Bạc hà',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
      note: 'Tươi, non',
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
      name: 'Ớt sừng',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Rau om',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Ngò gai',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Bột chiên giòn',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/flour',
    },
    {
      name: 'Me chín',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế cá',
        details: [
          'Cá lóc phi lê rửa sạch với nước muối loãng',
          'Cắt miếng vừa ăn khoảng 3x5cm, độ dày 1.5cm',
          'Xương cá lóc rửa sạch với muối, chần qua nước sôi 2 phút để khử mùi tanh',
          'Để ráo xương cá trước khi nấu nước dùng',
        ],
      },
      {
        title: 'Sơ chế rau củ',
        details: [
          'Cà chua rửa sạch, cắt múi cau vừa ăn',
          'Dọc mùng và bạc hà cắt khúc 5cm, ngâm nước muối loãng 15 phút',
          'Hành tỏi bóc vỏ, băm nhuyễn',
          'Rau om, ngò gai nhặt rửa sạch, thái nhỏ',
          'Me ngâm nước ấm 40°C trong 15 phút, lọc lấy nước cốt',
        ],
      },
    ],
    processing: [
      {
        title: 'Ướp cá',
        details: [
          'Ướp cá với 2 muỗng canh hành tỏi băm',
          'Thêm 1 muỗng canh nước mắm, 1/2 muỗng cà phê tiêu',
          'Trộn đều và để thấm 15-20 phút',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Phi thơm 2 muỗng canh hành tỏi băm với dầu ăn',
          'Cho xương cá vào nấu với 2.5 lít nước',
          'Nấu liu riu 30 phút, hớt bọt thường xuyên để nước dùng trong',
          'Thêm cà chua vào nấu cho nhừ khoảng 10 phút',
          'Nêm 3 muỗng canh nước me, 2 muỗng canh nước mắm, 1 muỗng canh đường',
          'Cho dọc mùng, bạc hà vào nấu chín mềm khoảng 5 phút',
          'Nếm nêm lại cho vừa ăn',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên cá',
        details: [
          'Lăn cá qua bột chiên giòn, phủ đều các mặt',
          'Đun nóng dầu ở 180°C',
          'Chiên cá trong chảo dầu nóng già đến khi vàng giòn (khoảng 3-4 phút)',
          'Vớt ra để ráo dầu trên giấy thấm',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện',
        details: [
          'Trụng bún trong nước sôi 1 phút cho chín tới',
          'Xếp bún vào tô (khoảng 200g/tô)',
          'Xếp cá chiên lên trên',
          'Chan nước dùng nóng vào (khoảng 300ml/tô)',
          'Rắc rau om, ngò gai lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Dùng kèm với giá sống, ớt tươi',
          'Có thể thêm nước mắm, ớt tùy khẩu vị',
          'Ăn nóng để thưởng thức trọn vẹn hương vị',
        ],
      },
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
