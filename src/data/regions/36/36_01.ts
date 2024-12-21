import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const phoBoNamDinh: Recipe = {
  id: '36_01',
  name: 'Phở Bò Nam Định',
  region: 'Miền Bắc',
  image: 'images/36/36_01.jpg',
  cookingTime: 480,
  difficulty: 4,
  servings: 6,
  ingredients: [
    {
      name: 'Xương ống bò',
      amount: 2,
      unit: UNITS.WEIGHT.KILOGRAM,
    },
    {
      name: 'Thịt bò phi lê (thăn, nạm hoặc gầu)',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bánh phở Nam Định',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      note: 'Bánh phở Nam Định mỏng và dai hơn bánh phở thông thường',
    },
    {
      name: 'Hành tây',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Gừng già',
      amount: 150,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hoa hồi',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Quế cây',
      amount: 3,
      unit: UNITS.QUANTITY.STICK,
    },
    {
      name: 'Thảo quả',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Đinh hương',
      amount: 6,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Hành khô',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành lá',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau mùi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Giá đỗ',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Chanh tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Ớt tươi',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Nước mắm ngon',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Muối',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Đường phèn',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Xương bò:',
      '- Rửa sạch với nước muối loãng',
      '- Chần qua nước sôi 3 phút để loại bỏ bẩn',
      '- Rửa lại bằng nước lạnh',

      'Thịt bò:',
      '- Rửa sạch, để ráo',
      '- Để đông lạnh 30 phút để dễ thái',
      '- Thái lát mỏng 2mm theo chiều ngang thớ',

      'Gia vị:',
      '- Hành tây bóc vỏ, nướng trực tiếp trên lửa đến thơm',
      '- Gừng rửa sạch, đập dập, nướng thơm',
      '- Hành khô bóc vỏ, một nửa thái mỏng phi vàng, một nửa để nguyên',
      '- Hành lá rửa sạch, thái nhỏ',
      '- Rau mùi nhặt lá, rửa sạch',

      'Gia vị khô:',
      '- Rang hoa hồi, quế, thảo quả, đinh hương trên chảo khô với lửa nhỏ đến thơm (2-3 phút)',
      '- Cho vào túi vải buộc kín',
    ],
    broth: [
      'Nấu nước dùng:',
      '- Đun sôi 6 lít nước trong nồi lớn',
      '- Cho xương đã chần vào nấu với lửa to',
      '- Khi sôi, hạ lửa nhỏ, vớt bọt cho nước trong',
      '- Cho hành tây và gừng nướng vào',
      '- Thêm túi gia vị, hành khô nguyên củ',
      '- Ninh liu riu 6-8 tiếng, thỉnh thoảng vớt bọt',

      'Nêm nước dùng:',
      '- Sau 6 tiếng, nêm 2 muỗng canh nước mắm',
      '- Thêm đường phèn và muối',
      '- Nếm thử và điều chỉnh vị đậm đà vừa ăn',
    ],
    assembly: [
      'Chuẩn bị bánh phở:',
      '- Trụng bánh phở qua nước sôi 10-15 giây',
      '- Vớt ra, để ráo',

      'Sắp xếp tô phở:',
      '- Xếp bánh phở vào tô',
      '- Xếp thịt bò tái lên trên',
      '- Rắc hành phi, hành lá',
      '- Chan nước dùng sôi vào (phải thật sôi để chín thịt)',
    ],
    serving: [
      'Dọn kèm:',
      '- Đĩa giá đỗ tươi',
      '- Rau mùi',
      '- Chanh tươi',
      '- Ớt tươi thái lát',

      'Hướng dẫn ăn:',
      '- Thêm giá, rau theo khẩu vị',
      '- Có thể thêm nước mắm, chanh, ớt tùy thích',
      '- Ăn nóng để thưởng thức trọn vẹn hương vị',
    ],
    tips: [
      'Phải dùng bánh phở Nam Định chính gốc để có độ dai đặc trưng',
      'Nước dùng phải nấu lâu với lửa nhỏ để ngọt tự nhiên',
      'Xương phải được chần kỹ để nước dùng trong',
      'Gia vị phải được rang thơm trước khi cho vào nấu',
      'Thịt bò phải thái mỏng và để đông trước khi thái',
      'Hành tây và gừng phải nướng thơm để tạo hương vị đặc trưng',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt bò thái sẵn nên dùng trong ngày',
      'Bánh phở nên mua mới và trụng khi ăn',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh',
      'Hành phi có thể bảo quản trong hộp kín đến 1 tuần',
    ],
  },
};

export default phoBoNamDinh;
