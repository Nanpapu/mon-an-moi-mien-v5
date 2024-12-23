import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const chaCaLaVong: Recipe = {
  id: '01_03',
  name: 'Chả Cá Lã Vọng',
  region: 'Miền Bắc',
  image: 'images/01/01_03.jpg',
  cookingTime: 60,
  difficulty: 4,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Cá lăng phi lê',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
    },
    {
      name: 'Nghệ củ tươi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Mẻ',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Thì là',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Hành lá',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Gừng',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Mắm nêm',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Bún tươi',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Rau sống các loại (diếp cá, tía tô, kinh giới)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế cá',
        details: [
          'Cá lăng phi lê rửa sạch với nước muối loãng (1 muỗng cà phê muối/1 lít nước)',
          'Để ráo nước trên rổ 15 phút trong nhiệt độ phòng',
          'Dùng giấy thấm khô kỹ bề mặt cá để cá không bị nát khi chiên',
          'Cắt miếng vuông 4x4cm, dày 2cm (kích thước chuẩn để cá chín đều)',
          'Dùng nhíp nhỏ gắp kỹ xương còn sót lại',
          'Để riêng trong tô sứ hoặc thủy tinh (không dùng tô kim loại)',
        ],
      },
      {
        title: 'Chuẩn bị gia vị',
        details: [
          'Nghệ củ chọn củ già, vàng sậm, không bị xốp',
          'Cạo vỏ nghệ, rửa sạch, thái lát mỏng 2mm',
          'Giã nghệ trong cối đá (không dùng cối kim loại sẽ bị đen)',
          'Vắt lấy nước nghệ qua rây inox mịn, bỏ bã',
          'Gừng già gọt vỏ, rửa sạch, thái sợi 2mm x 3cm',
          'Đậu phộng rang chín vàng ở 160°C trong 8-10 phút, để nguội rồi giã dập',
        ],
      },
      {
        title: 'Chuẩn bị rau',
        details: [
          'Thì là và hành lá rửa sạch',
          'Cắt khúc 4-5cm, chỉ lấy phần xanh',
          'Rửa sạch các loại rau sống',
          'Ngâm rau trong nước muối loãng 10 phút',
          'Vớt ra, rửa lại với nước sạch',
          'Để ráo nước hoàn toàn',
          'Nhặt lá, bỏ cọng già',
        ],
      },
    ],
    marinating: [
      {
        title: 'Ướp cá',
        details: [
          'Trộn cá với 3 muỗng canh nước nghệ vắt và 2 muỗng canh mẻ nguyên chất',
          'Thêm 2 muỗng canh mắm nêm thượng hạng',
          'Thêm 30g gừng thái sợi',
          'Trộn đều bằng đũa tre hoặc đũa gỗ (không dùng đũa kim loại)',
          'Đậy kín bằng màng bọc thực phẩm',
          'Để cá ướp 2-3 tiếng trong ngăn mát tủ lạnh (4-6°C)',
          'Mỗi giờ đảo nhẹ một lần để cá thấm đều gia vị',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên sơ cá',
        details: [
          'Làm nóng dầu trong chảo sâu lòng đến 170°C (kiểm tra bằng que tre)',
          'Vớt bỏ gừng khỏi cá ướp để tránh bị cháy',
          'Chiên sơ cá ở 170°C trong 2 phút mỗi mặt',
          'Quan sát màu vàng nhạt của cá, không chiên quá chín',
          'Vớt ra đĩa có lót 2 lớp giấy thấm dầu',
          'Để nguội 5-7 phút ở nhiệt độ phòng trước khi nướng',
        ],
      },
      {
        title: 'Nướng cá',
        details: [
          'Làm nóng chảo gang dày 5mm trên bếp than hoa',
          'Đợi chảo nóng đều (test bằng cách nhỏ vài giọt nước)',
          'Phết đều 2 muỗng canh dầu ăn lên bề mặt chảo',
          'Xếp cá vào chảo theo hình xoắn ốc từ ngoài vào trong',
          'Rải đều một lớp thì là và hành lá đã cắt khúc',
          'Nướng mỗi mặt 3-4 phút ở lửa vừa (than hồng đều)',
          'Thêm dầu ăn mỗi khi lật cá (khoảng 1 muỗng canh)',
          'Đảo nhẹ nhàng bằng đũa tre để cá không bị vỡ',
          'Nướng đến khi cá có màu vàng đều và thơm mùi nghệ',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bún',
        details: [
          'Đun sôi nồi nước lớn',
          'Trụng bún tươi qua nước sôi khoảng 10-15 giây',
          'Vớt ra ngay, tráng qua nước lạnh',
          'Để ráo nước hoàn toàn',
          'Chia bún ra từng bát (khoảng 200g/người)',
        ],
      },
      {
        title: 'Hoàn thiện món',
        details: [
          'Xếp bún vào bát',
          'Đặt chả cá nóng lên trên',
          'Rắc đậu phộng rang',
          'Thêm thì là và hành lá nướng',
          'Bày rau sống ra đĩa riêng',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Trộn đều bún với chả cá',
          'Thêm rau sống tùy thích',
          'Chan mắm nêm vừa đủ',
          'Rắc thêm đậu phộng nếu thích',
          'Có thể thêm ớt tươi cho cay',
          'Ăn nóng để cảm nhận hương vị thơm ngon nhất',
        ],
      },
    ],
    tips: [
      'Chọn cá lăng tươi, thịt chắc, không có mùi tanh',
      'Nghệ tươi giã nhuyễn sẽ có màu đẹp và thơm hơn nghệ bột',
      'Nên nướng trên bếp than để có mùi thơm đặc trưng',
      'Rau thì là phải tươi và xanh mướt',
      'Không nên nướng cá quá lâu sẽ bị khô',
      'Mắm nêm nên pha loãng với nước dừa tươi để bớt mặn',
      'Chảo gang sẽ giữ nhiệt tốt hơn khi nướng cá',
      'Đảo cá nhẹ nhàng để không bị vỡ',
    ],
    storage: [
      'Cá đã ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Mắm nêm pha có thể giữ trong tủ lạnh đến 1 tuần',
      'Rau sống nên rửa sạch và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Cá đã nướng nên ăn ngay, không nên để qua ngày',
      'Bún nên mua mới và dùng trong ngày',
      'Đậu phộng rang có thể bảo quản trong hộp kín đến 2 tuần',
    ],
  },
};

export default chaCaLaVong;
