import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const comTamSuonBiCha: Recipe = {
  id: '79_01',
  name: 'Cơm Tấm Sườn Bì Chả',
  region: 'Miền Nam',
  image: 'images/79/79_01.jpg',
  cookingTime: 90,
  difficulty: 3,
  servings: 4,
  ingredients: [
    {
      name: 'Sườn heo non',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Da heo (làm bì)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Thịt heo xay (làm chả)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Gạo tấm',
      amount: 400,
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
      name: 'Nước mắm ngon',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Đường cát trắng',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột ngọt',
      amount: 10,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tiêu đen',
      amount: 15,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dầu hào',
      amount: 30,
      unit: UNITS.VOLUME.MILLILITER,
    },
    {
      name: 'Mỡ heo (làm mỡ hành)',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Cà chua',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
    {
      name: 'Đồ chua (cà rốt, củ cải)',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
    },
  ],
  instructions: {
    preparation: [
      'Sườn non rửa sạch, để ráo, chặt miếng vừa ăn (3x5cm)',
      'Da heo cạo sạch, rửa kỹ v���i muối',
      'Thịt xay ướp gia vị làm chả',
      'Gạo tấm vo sạch, ngâm nước 30 phút',
      'Hành tím, tỏi bóc vỏ, băm nhuyễn một phần, để nguyên một phần',
      'Dưa leo, cà chua rửa sạch, thái lát mỏng',
    ],
    marinating: [
      'Sườn ướp với: 2 muỗng canh nước mắm, 1 muỗng canh đường, 1 muỗng cà phê bột ngọt, 1 muỗng cà phê tiêu, 2 muỗng canh hành tỏi băm, 1 muỗng canh dầu hào',
      'Để sườn ướp ít nhất 2 tiếng hoặc qua đêm trong tủ lạnh',
      'Thịt xay ướp với: 1 muỗng canh nước mắm, 1/2 muỗng cà phê đường, 1/2 muỗng cà phê tiêu, 2 muỗng canh hành tỏi băm',
      'Trộn đều và để thịt ướp 30 phút',
    ],
    cooking: [
      'Nấu cơm tấm:',
      '- Đổ nước vào nồi theo tỷ lệ 1:1.2 (gạo:nước)',
      '- Nấu với lửa vừa đến khi cơm chín mềm',
      '- Để cơm nghỉ 10 phút rồi xới lên cho tơi',

      'Làm bì:',
      '- Luộc da heo trong nước sôi có thêm chút muối khoảng 20 phút',
      '- Vớt ra ngâm nước lạnh rồi thái sợi mỏng',
      '- Trộn với mè rang, hành phi, nước mắm, đường, tiêu',

      'Làm chả:',
      '- Đánh thịt xay cho dai',
      '- Cho vào khuôn lót lá chuối',
      '- Hấp trong 20 phút',
      '- Để nguội rồi thái lát mỏng',

      'Nướng sườn:',
      '- Làm nóng vỉ nướng than hoa',
      '- Nướng sườn trên lửa vừa, thường xuyên phết dầu ăn',
      '- Nướng đến khi sườn chín vàng đều hai mặt (khoảng 15-20 phút)',

      'Làm mỡ hành:',
      '- Phi hành tím với mỡ heo đến khi hành vàng thơm',
      '- Tắt bếp để nguội',
    ],
    sauce: [
      'Pha nước mắm:',
      '- 5 muỗng canh nước mắm',
      '- 3 muỗng canh đường',
      '- 4 muỗng canh nước ấm',
      '- 2 muỗng canh chanh tươi',
      '- 1 muỗng cà phê tỏi băm',
      '- Ớt tươi thái lát',
      'Khuấy đều đến khi đường tan hết',
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
      'Sườn nên chọn phần non, có cả nạc và mỡ để khi nướng không bị khô',
      'Nướng sườn bằng than hoa sẽ thơm hơn nướng bếp gas',
      'Cơm tấm phải nấu vừa chín tới, không được nhão',
      'Bì phải thái sợi mỏng đều và trộn với mè rang mới ngon',
      'Chả phải đánh cho dai và hấp vừa tới để không bị khô',
      'Mỡ hành phải được phi vàng đều và để nguội mới rưới lên cơm',
    ],
    storage: [
      'Sườn ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Bì trộn có thể giữ trong tủ lạnh đến 3 ngày',
      'Chả đã hấp chín để được 3-4 ngày trong tủ lạnh',
      'Mỡ hành để trong lọ kín, bảo quản tủ lạnh đến 1 tuần',
      'Nước mắm pha có thể giữ trong tủ lạnh đến 1 tuần',
      'Đồ chua bảo quản trong tủ lạnh đến 2 tuần',
    ],
  },
};

export default comTamSuonBiCha;
