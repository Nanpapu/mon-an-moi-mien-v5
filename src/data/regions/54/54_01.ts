import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const matCaNguDaiDuong: Recipe = {
  id: '54_01',
  name: 'Mắt Cá Ngừ Đại Dương',
  region: 'Miền Trung',
  image: 'images/54/54_01.jpg',
  cookingTime: 90,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Mắt cá ngừ đại dương',
      amount: 1,
      unit: UNITS.QUANTITY.PAIR,
      note: 'Khoảng 800g-1kg/cặp',
    },
    {
      name: 'Sả',
      amount: 10,
      unit: UNITS.QUANTITY.STICK,
    },
    {
      name: 'Gừng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nghệ tươi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
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
      name: 'Ớt hiểm',
      amount: 10,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Ớt sừng',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Me chín',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dứa',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Cà chua',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Đậu bắp',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bạc hà',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Rau răm',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
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
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tiêu đen',
      amount: 15,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dầu ăn',
      amount: 50,
      unit: UNITS.VOLUME.MILLILITER,
    },
  ],
  instructions: {
    preparation: [
      'Mắt cá ngừ:',
      '- Rửa sạch với nước muối loãng',
      '- Cắt bỏ phần màng đen bên ngoài',
      '- Chặt thành miếng vừa ăn (khoảng 4-5cm)',
      '- Ngâm trong nước lạnh với gừng để khử tanh',

      'Gia vị:',
      '- Sả: Cắt bỏ rễ, rửa sạch',
      '  + 6 cây đập dập để nấu',
      '  + 4 cây băm nhuyễn để ướp',
      '- Gừng: Gọt vỏ, rửa sạch',
      '  + 1/2 phần thái lát mỏng',
      '  + 1/2 phần băm nhuyễn',
      '- Nghệ tươi: Gọt vỏ, rửa sạch, băm nhuyễn',
      '- Hành tím, tỏi: Bóc vỏ, băm nhuyễn',

      'Rau củ:',
      '- Dứa: Gọt vỏ, bỏ mắt, thái miếng vừa ăn',
      '- Cà chua: Rửa sạch, cắt múi cau',
      '- Đậu bắp: Rửa sạch, cắt khúc 3cm',
      '- Bạc hà: Rửa sạch, cắt khúc 5cm',

      'Rau gia vị:',
      '- Rau răm: Nhặt lá, rửa sạch',
      '- Hành lá: Rửa sạch, thái nhỏ',

      'Me:',
      '- Ngâm trong nước ấm 15 phút',
      '- Dầm lấy nước cốt, bỏ hạt và xơ',
    ],
    marinating: [
      'Ướp mắt cá:',
      '- 2 muỗng canh sả băm',
      '- 2 muỗng canh gừng băm',
      '- 2 muỗng canh nghệ băm',
      '- 2 muỗng canh hành tỏi băm',
      '- 1 muỗng canh nước mắm',
      '- 1/2 muỗng cà phê tiêu',
      '- 1/2 muỗng cà phê muối',
      'Trộn đều và ướp 30 phút',
    ],
    broth: [
      'Nấu nước dùng:',
      '- Đun sôi 2 lít nước',
      '- Cho sả đập dập, gừng thái lát vào',
      '- Nấu sôi 10 phút để lấy hương vị',

      'Nấu canh chua:',
      '- Cho mắt cá đã ướp vào nồi nước dùng',
      '- Nấu với lửa vừa 15 phút',
      '- Thêm dứa, nấu thêm 5 phút',
      '- Cho cà chua vào, nấu 3 phút',
      '- Thêm đậu bắp, nấu 2 phút',
      '- Cho bạc hà vào cuối cùng',

      'Nêm nếm:',
      '- Thêm nước me',
      '- 2 muỗng canh nước mắm',
      '- 1 muỗng canh đường',
      '- Nếm lại và điều chỉnh vị chua-cay-mặn',
    ],
    assembly: [
      'Hoàn thiện món ăn:',
      '- Kiểm tra độ chín của mắt cá (thịt chín mềm nhưng không nát)',
      '- Nêm nếm lại nước dùng cho vừa vị chua-cay-mặn-ngọt',
      '- Vớt bỏ phần sả, gừng đã dùng để nấu',
      '- Xếp các miếng mắt cá gọn gàng trong tô',
      '- Xếp đậu bắp, bạc hà thành hình tỏa tròn xung quanh',
      '- Múc nước dùng sôi chan vào, đảm bảo ngập hết nguyên liệu',
      '- Rắc hành lá thái nhỏ lên trên',
      '- Trang trí với rau răm và ớt tươi thái lát',
    ],
    serving: [
      'Trình bày:',
      '- Múc canh ra tô lớn',
      '- Rắc hành lá, rau răm lên trên',
      '- Thêm ớt tươi thái lát',

      'Dùng nóng với:',
      '- Cơm trắng nóng',
      '- Nước mắm ớt',
      '- Có thể thêm ớt tươi tùy khẩu vị',
    ],
    tips: [
      'Chọn mắt cá ngừ đại dương tươi, có màu hồng tự nhiên',
      'Phải làm sạch kỹ phần màng đen để tránh vị đắng',
      'Ướp mắt cá với nghệ để khử tanh và có màu đẹp',
      'Nấu mắt cá vừa chín tới để thịt không bị dai',
      'Cho các loại rau củ vào nồi theo độ cứng mềm',
      'Nêm nếm cân bằng vị chua của me và dứa',
    ],
    storage: [
      'Canh nên dùng trong ngày để đảm bảo độ tươi ngon',
      'Nếu cần bảo quản, để riêng phần nước và mắt cá',
      'Mắt cá đã nấu có thể bảo quản trong tủ lạnh 1-2 ngày',
      'Nước dùng có thể giữ trong tủ lạnh đến 2 ngày',
      'Rau gia vị nên chuẩn bị mới mỗi lần dùng',
      'Không nên trữ đông món này vì sẽ làm mất đi hương vị đặc trưng',
    ],
  },
};

export default matCaNguDaiDuong;
