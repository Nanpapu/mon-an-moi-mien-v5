import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const bunBoHue: Recipe = {
  id: '46_01',
  name: 'Bún Bò Huế',
  region: 'Miền Trung',
  image: 'images/46/46_01.jpg',
  cookingTime: 120,
  difficulty: 4,
  servings: 6,
  ingredients: [
    {
      name: 'Bắp bò',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Giò heo',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bún tươi',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
    },
    {
      name: 'Mắm ruốc Huế',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Sả',
      amount: 12,
      unit: UNITS.QUANTITY.STICK,
    },
    {
      name: 'Gừng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Ớt sừng',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Ớt bột',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau muống cọng',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành lá',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau răm',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Húng quế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Chanh tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Muối',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Bắp bò rửa sạch, để ráo, thái miếng vừa ăn (5x7cm)',
      'Giò heo rửa sạch, chần qua nước sôi có gừng để khử mùi hôi',

      'Sả:',
      '- Rửa sạch, cắt bỏ rễ',
      '- 6 cây đập dập để nấu nước dùng',
      '- 6 cây băm nhuyễn để phi với mắm ruốc',

      'Gừng:',
      '- Gọt vỏ, rửa sạch',
      '- 1/2 phần thái lát mỏng để nấu nước dùng',
      '- 1/2 phần băm nhuyễn để ướp thịt',

      'Tỏi và hành tím:',
      '- Bóc vỏ, rửa sạch',
      '- 2/3 phần băm nhuyễn',
      '- 1/3 phần để nguyên',

      'Rau muống cọng:',
      '- Nhặt lấy phần cọng già, bỏ lá',
      '- Rửa sạch, cắt khúc 5cm',

      'Rau gia vị:',
      '- Nhặt bỏ rễ và lá úa',
      '- Rửa sạch, để ráo',
      '- Hành lá thái nhỏ',
      '- Rau răm và húng quế để nguyên lá',
    ],
    marinating: [
      'Ướp bắp bò:',
      '- 2 muỗng canh gừng băm',
      '- 2 muỗng canh tỏi băm',
      '- 1 muỗng canh hành tím băm',
      '- 1 muỗng canh muối',
      '- 1 muỗng canh đường',
      'Trộn đều và để thịt ướp 30 phút',
    ],
    broth: [
      'Nấu nước dùng:',
      '- Đun sôi 4 lít nước',
      '- Cho giò heo vào nấu với lửa vừa 30 phút',
      '- Thêm bắp bò đã ướp vào nấu thêm 45 phút',
      '- Cho sả đập dập, gừng thái lát vào',
      '- Nấu liu riu thêm 15 phút',

      'Phi mắm ruốc:',
      '- Phi thơm 1/2 lượng tỏi hành băm với dầu',
      '- Cho sả băm vào phi thơm',
      '- Cho mắm ruốc vào, đảo đều với lửa nhỏ 5 phút',
      '- Cho hỗn hợp vào nồi nước dùng',

      'Nêm nếm:',
      '- 2 muỗng canh đường',
      '- 1 muỗng canh muối',
      '- Nếm thử và điều chỉnh vị',
    ],
    cooking: [
      'Xử lý thịt:',
      '- Vớt thịt ra, ngâm trong nước đá 10 phút',
      '- Thái bắp bò thành lát mỏng 2-3mm',
      '- Thái giò heo thành lát vừa ăn',

      'Chuẩn bị ớt sa tế:',
      '- Phi thơm phần tỏi hành còn lại',
      '- Cho ớt bột vào phi với lửa nhỏ',
      '- Thêm 2 muỗng canh dầu, đảo đều',

      'Trụng rau muống:',
      '- Đun sôi nước với chút muối',
      '- Trụng rau muống 1 phút',
      '- Vớt ra ngâm nước lạnh',
    ],
    assembly: [
      'Trụng bún:',
      '- Đun sôi nước trong nồi lớn',
      '- Cho bún vào trụng 10-15 giây',
      '- Vớt ra, để ráo',

      'Sắp xếp tô bún:',
      '- Xếp bún vào tô',
      '- Xếp thịt bò, giò heo lên trên',
      '- Thêm rau muống cọng',
      '- Chan nước dùng sôi vào',
    ],
    serving: [
      'Dọn kèm:',
      '- Đĩa rau sống (giá, rau răm, húng quế)',
      '- Chanh tươi',
      '- Ớt sa tế',
      '- Ớt tươi thái lát',

      'Hướng dẫn ăn:',
      '- Thêm rau sống tùy thích',
      '- Nặn chanh',
      '- Có thể thêm ớt sa tế để tăng độ cay',
      '- Khuấy đều trước khi ăn',
    ],
    tips: [
      'Mắm ruốc phải là loại đặc sản Huế để có hương vị chuẩn',
      'Phi mắm ruốc riêng để khử mùi tanh và tạo màu đẹp cho nước dùng',
      'Nước dùng phải có màu đỏ đặc trưng từ mắm ruốc và ớt',
      'Thịt bò phải được thái mỏng và cắt ngang thớ để dễ ăn',
      'Giò heo phải được luộc vừa chín tới để giữ độ giòn',
      'Sả phải được đập dập k��� để tinh dầu tỏa ra nhiều',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt bò và giò heo đã thái nên bảo quản riêng, dùng trong vòng 2 ngày',
      'Mắm ruốc đã phi có thể bảo quản trong tủ lạnh đến 2 tuần',
      'Rau sống nên mua mới mỗi lần dùng',
      'Ớt sa tế có thể bảo quản trong tủ lạnh đến 1 tuần',
      'Khi hâm nóng lại, đun sôi nước dùng và cho thịt vào sau cùng',
    ],
  },
};

export default bunBoHue;
