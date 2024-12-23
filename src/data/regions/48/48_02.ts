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
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Thịt heo ba chỉ',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Bánh tráng mỏng',
      amount: 20,
      unit: UNITS.QUANTITY.PIECE,
      type: 'grain/noodle',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau xà lách',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Húng lủi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Tía tô',
      amount: 50,
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
      name: 'Tỏi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Ớt tươi',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
    },
    {
      name: 'Nước mắm',
      amount: 50,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Chanh tươi',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế thịt heo',
        details: [
          'Chọn thịt ba chỉ tươi có tỷ lệ nạc mỡ 7:3, vân mỡ đều, màu hồng tươi, không có mùi lạ',
          'Rửa thịt với nước muối loãng (1 muỗng cà phê muối/1 lít nước) trong 2 phút',
          'Để ráo nước 10 phút trên rổ đan thưa',
          'Dùng khăn giấy thấm khô bề mặt thịt',
          'Thái miếng dài 15cm, dày 3cm theo thớ thịt (để khi luộc không bị co rút)',
          'Ướp thịt với: 2 củ sả đập dập + 3 lát gừng + 1 muỗng cà phê muối + 1/4 muỗng cà phê tiêu',
          'Để thịt thấm gia vị 30 phút ở nhiệt độ phòng (không để quá 1 tiếng)',
          'Dùng màng bọc thực phẩm bọc kín trong quá trình ướp',
        ],
      },
      {
        title: 'Sơ chế rau sống',
        details: [
          'Rau xà lách: Tách từng lá, bỏ phần gốc già và lá bị sâu, úa vàng',
          'Húng lủi: Nhặt lá và ngọn non, bỏ cọng già và lá bị thâm',
          'Tía tô: Chọn lá còn tươi, không bị sâu, nhặt bỏ cọng già',
          'Ngâm tất cả rau trong nước muối loãng (2 muỗng cà phê muối/3 lít nước) trong 15 phút',
          'Vớt ra, rửa lại với nước sạch 2 lần dưới vòi nước chảy nhẹ',
          'Để ráo nước trên rổ đan thưa hoặc máy vắt rau (cài đặt tốc độ thấp)',
          'Gói rau trong khăn ẩm sạch, để ngăn mát tủ lạnh nếu chưa dùng ngay',
        ],
      },
      {
        title: 'Sơ chế gia vị',
        details: [
          'Gừng già: Gọt vỏ, rửa sạch, thái sợi 2mm x 3cm (thái theo chiều dọc củ gừng)',
          'Tỏi: Bóc vỏ, một nửa băm nhuyễn, một nửa thái lát mỏng 2mm',
          'Ớt tươi: Rửa sạch, để ráo, thái lát chéo mỏng 2mm (bỏ hạt nếu không ăn cay)',
          'Đậu phộng: Chọn hạt đều màu, rang vàng ở 160°C trong 8 phút, lắc đều mỗi 2 phút',
          'Hành lá: Nhặt bỏ lá úa, rửa sạch, thái khúc 2cm (chỉ lấy phần xanh non)',
          'Dưa leo: Rửa sạch, thái sợi dài 5cm, dày 2mm (bỏ ruột nếu nhiều hạt)',
        ],
      },
    ],
    cooking: [
      {
        title: 'Luộc thịt',
        details: [
          'Đun sôi 2 lít nước với 2 củ sả đập dập và 3 lát gừng (nước phải ngập thịt 3cm)',
          'Khi nước sôi già (100°C), thả từng miếng thịt vào, không xếp chồng lên nhau',
          'Đậy nắp vừa khít, để lửa vừa (nước sôi liu riu)',
          'Luộc trong 15-20 phút, thỉnh thoảng lật thịt để chín đều',
          'Kiểm tra độ chín bằng đũa (đâm xuyên dễ dàng là được)',
          'Vớt thịt ra ngâm ngay vào thau nước đá 15 phút (để thịt giòn và giữ màu đẹp)',
          'Vớt ra để ráo, thấm khô bằng giấy sạch',
          'Để thịt nguội hoàn toàn (khoảng 30 phút) rồi thái lát mỏng 2mm theo thớ',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước chấm',
        details: [
          'Chuẩn bị tô thủy tinh hoặc tô sứ sạch (không dùng tô kim loại)',
          'Pha theo tỷ lệ: 3 phần nước mắm ngon + 3 phần nước ấm + 2 phần đường + 2 phần nước cốt chanh',
          'Khuấy đều cho đường tan hoàn toàn (khoảng 2-3 phút)',
          'Thêm tỏi băm và ớt thái (tùy khẩu vị)',
          'Để nước chấm thấm 15 phút trước khi dùng',
          'Nếm thử và điều chỉnh vị chua ngọt theo ý thích',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bánh tráng',
        details: [
          'Chọn bánh tráng mỏng, trong, không bị rách hoặc ẩm mốc',
          'Chuẩn bị tô nước ấm 40°C (không dùng nước quá nóng sẽ làm bánh bị nhũn)',
          'Nhúng nhanh bánh tráng qua nước (1-2 giây, không ngâm lâu)',
          'Đặt lên mặt phẳng sạch (mâm nhựa hoặc đĩa lớn)',
          'Đợi 5-7 giây cho bánh mềm vừa phải (bánh phải còn độ dai)',
          'Lau khô mặt bàn sau mỗi lần cuốn để bánh không bị dính',
        ],
      },
      {
        title: 'Cuốn bánh tráng',
        details: [
          'Xếp 2-3 lá xà lách ở 1/3 dưới bánh tráng (không xếp quá nhiều sẽ khó cuốn)',
          'Xếp các loại rau thơm lên trên (húng lủi, tía tô)',
          'Đặt 3-4 lát thịt heo ở giữa (xếp so le để khi cắt đẹp)',
          'Thêm dưa leo, hành lá',
          'Rắc ít đậu phộng giã (không rắc quá nhiều sẽ làm rách bánh)',
          'Gấp hai mép bên vào giữa (cách mép 2cm)',
          'Cuốn chặt từ dưới lên, giữ độ chặt vừa phải (không cuốn quá chặt bánh sẽ bị rách)',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Cắt cuốn bánh tráng thành khúc 4-5cm bằng dao sắc',
          'Xếp đẹp mắt ra đĩa có lót lá chuối tươi',
          'Rắc thêm đậu phộng rang giã dập lên trên',
          'Dùng kèm nước chấm đã pha',
          'Có thể thêm ớt tươi theo khẩu vị',
          'Nên ăn ngay khi vừa cuốn để bánh còn giòn',
        ],
      },
    ],
    tips: [
      'Chọn thịt ba chỉ tươi, có vân mỡ đều, không có mùi lạ',
      'Bánh tráng phải mỏng, dai và trong, không bị ướt mốc',
      'Rau sống phải tươi ngon và đa dạng để tạo hương vị đặc trưng',
      'Nước chấm cần cân bằng giữa vị mặn, chua, ngọt',
      'Không nhúng bánh tráng quá ướt sẽ làm rách bánh',
      'Thịt luộc phải mềm nhưng không nát, có độ giòn',
      'Rau phải được để ráo kỹ tránh làm ướt bánh',
      'Cuốn vừa tay, không quá chặt hoặc quá lỏng',
      'Dao cắt phải thật sắc để không làm nát bánh',
      'Nên pha nước chấm trước để các gia vị thấm đều',
    ],
    storage: [
      'Thịt luộc có thể bảo quản trong tủ lạnh 2-3 ngày (bọc kín màng bọc thực phẩm)',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 2-3 ngày',
      'Nước chấm pha có thể giữ trong tủ lạnh 3-4 ngày (đựng trong hộp kín)',
      'Bánh tráng để nơi khô ráo, tránh ẩm, nhiệt độ phòng',
      'Đậu phộng rang để trong hộp kín, nơi khô ráo đến 2 tuần',
      'Không cuốn sẵn bánh tráng, chỉ cuốn khi ăn để giữ độ giòn',
      'Thịt đã thái mỏng nên dùng trong ngày, tránh để qua đêm',
    ],
  },
};

export default banhTrangCuonThitHeo;
