import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhCongBacLieu: Recipe = {
  id: '95_01',
  name: 'Bánh Cống Bạc Liêu',
  region: 'Miền Nam',
  image: 'images/95/95_01.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Tôm tươi',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shrimp',
      note: 'Tôm sú hoặc tôm thẻ, bóc vỏ, giữ lại đuôi',
    },
    {
      name: 'Thịt heo xay',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
      note: 'Thịt nạc, băm nhuyễn',
    },
    {
      name: 'Đậu xanh cà vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
      note: 'Đậu xanh đã xát vỏ, ngâm mềm',
    },
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột năng',
      amount: 100,
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
      name: 'Nước mắm',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Tiêu đen',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
    },
    {
      name: 'Dầu ăn',
      amount: 500,
      unit: UNITS.VOLUME.MILLILITER,
      note: 'Dùng để chiên bánh',
    },
    {
      name: 'Rau sống các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Xà lách, húng quế, rau răm',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế tôm tươi',
        details: [
          'Chọn tôm sú hoặc tôm thẻ tươi cỡ 30-35 con/kg, vỏ bóng, đầu còn chắc, thịt đàn hồi',
          'Dùng kéo cắt râu và chân tôm, giữ lại phần đầu và đuôi để trang trí',
          'Lột vỏ tôm từ thân đến đuôi, giữ nguyên phần đầu',
          'Dùng dao nhỏ rạch một đường dọc sống lưng, rút bỏ chỉ đen',
          'Rửa sạch tôm với nước muối 1% (10g muối/1 lít nước)',
          'Để ráo nước trên rổ inox 10 phút ở nhiệt độ phòng',
          'Ướp tôm với: 1/2 muỗng cà phê tiêu xay + 1/2 muỗng canh nước mắm + 1/4 muỗng cà phê bột ngọt',
          'Để tôm thấm gia vị 15-20 phút ở nhiệt độ phòng',
        ],
      },
      {
        title: 'Sơ chế đậu xanh',
        details: [
          'Chọn đậu xanh cà vỏ, hạt đều màu, không bị đen, mốc hay mọt',
          'Ngâm đậu trong nước ấm 40°C trong 4 tiếng (hoặc nước nguội 6-8 tiếng)',
          'Vớt đậu ra, rửa sạch với nước lạnh 2 lần',
          'Để ráo nước trên rổ 10 phút',
          'Xay đậu thành bột mịn với máy xay sinh tố (2-3 lần để đảm bảo độ mịn)',
          'Rây bột đậu qua rây mịn để loại bỏ cặn thô',
          'Để riêng trong tô sạch, đậy kín bằng màng bọc thực phẩm',
        ],
      },
      {
        title: 'Sơ chế gia vị',
        details: [
          'Hành tím: Bóc vỏ, rửa sạch, để ráo nước',
          'Phần làm nhân: Băm nhuyễn 70g hành tím bằng dao sắc',
          'Phần trang trí: Thái lát mỏng 30g hành tím còn lại (dày 1mm)',
          'Tỏi: Bóc vỏ, rửa sạch, băm nhuyễn',
          'Để riêng hành tím băm, hành tím thái và tỏi băm',
        ],
      },
      {
        title: 'Sơ chế rau ăn kèm',
        details: [
          'Xà lách: Tách từng lá, loại bỏ phần gốc và lá hư, rửa sạch',
          'Húng quế: Nhặt lá tươi, bỏ cọng già và lá úa vàng',
          'Rau răm: Nhặt lá, rửa sạch, thái nhỏ 2mm',
          'Dưa leo: Rửa sạch, cắt bỏ đầu đuôi, thái lát chéo dày 2mm',
          'Ngâm tất cả rau trong nước muối loãng (1 muỗng cà phê muối/1 lít nước) trong 10 phút',
          'Vớt ra, rửa lại với nước sạch 2 lần',
          'Để ráo nước trên rổ hoặc dùng rổ quay rau',
          'Bọc rau trong khăn ẩm sạch, để ngăn mát tủ lạnh nếu chưa dùng ngay',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm bột bánh',
        details: [
          'Rây bột gạo và bột năng qua rây mịn để loại bỏ cục và tạp chất',
          'Trộn đều 300g bột gạo với 100g bột năng trong tô lớn',
          'Thêm 1/2 muỗng cà phê muối vào hỗn hợp bột',
          'Đun nóng 400ml nước đến 40°C (kiểm tra bằng nhiệt kế hoặc ngón tay nhúng thấy ấm)',
          'Từ từ đổ nước vào bột, vừa đổ vừa khuấy đều theo một chiều',
          'Đ��nh bột liên tục trong 5 phút đến khi bột mịn, không vón cục',
          'Bọc tô bột bằng màng bọc thực phẩm',
          'Để bột nghỉ 30 phút ở nhiệt độ phòng cho bột nở và có độ dẻo',
          'Kiểm tra độ sệt, nếu quá đặc thì thêm từng chút nước ấm (40°C) và khuấy đều',
        ],
      },
      {
        title: 'Làm nhân bánh',
        details: [
          'Ướp thịt xay với: 1 muỗng canh nước mắm + 1/2 muỗng cà phê tiêu + 1 muỗng canh hành tỏi băm',
          'Để thịt thấm gia vị 20 phút ở nhiệt độ phòng',
          'Trộn đều thịt băm với bột đậu xanh đã xay (tỷ lệ 1:1)',
          'Nêm nếm lại với: 1/4 muỗng cà phê đường + 1/4 muỗng cà phê bột ngọt',
          'Vo nhân thành từng viên nhỏ cỡ 20g, ấn dẹt thành hình tròn',
          'Xếp nhân lên đĩa có lót giấy nến để không bị dính',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên bánh',
        details: [
          'Chuẩn bị chảo sâu lòng với dầu ngập khuôn bánh cống',
          'Đun nóng dầu đến 180°C (kiểm tra bằng đũa gỗ - có bọt nhỏ sủi đều)',
          'Ngâm khuôn bánh trong dầu nóng 1 ph��t để làm nóng đều khuôn',
          'Đổ bột vào khuôn đến 2/3 độ cao, đặt nhân bánh vào giữa',
          'Đặt tôm lên trên, đầu tôm hướng lên, ấn nhẹ vào bột',
          'Chiên bánh ở lửa vừa (170-180°C) trong 3-4 phút đến khi vàng đều',
          'Dùng đũa tre lật bánh, chiên thêm 2-3 phút cho mặt còn lại',
          'Vớt bánh ra để ráo dầu trên giấy thấm dầu',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước chấm',
        details: [
          'Chuẩn bị tô thủy tinh hoặc tô sứ sạch để pha nước chấm',
          'Pha theo tỷ lệ: 3 muỗng canh nước mắm ngon + 3 muỗng canh đường + 6 muỗng canh nước ấm',
          'Khuấy đều cho đường tan hoàn toàn (khoảng 2-3 phút)',
          'Thêm 2 muỗng canh nước cốt chanh tươi, khuấy nhẹ',
          'Băm nhuyễn 2-3 trái ớt tươi (tùy độ cay)',
          'Băm 1 tép tỏi cho thơm (không bắt buộc)',
          'Nêm nếm lại để đạt vị chua ngọt cân bằng',
          'Để nguội hoàn toàn trước khi dùng',
        ],
      },
      {
        title: 'Kiểm tra nước chấm',
        details: [
          'Nước chấm phải trong, không vẩn đục',
          'Màu sắc nâu vàng đẹp mắt của nước mắm ngon',
          'Mùi thơm đặc trưng của nước mắm, không có mùi chua khó chịu',
          'Vị chua ngọt hài hòa, mặn vừa phải, cay tùy khẩu vị',
          'Có thể điều chỉnh thêm đường hoặc chanh tùy theo khẩu vị',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện và trình bày',
        details: [
          'Xếp bánh cống ra đĩa có lót giấy thấm dầu theo hình tròn hoặc hình quạt',
          'Rắc hành tím thái lát phi vàng lên trên bánh',
          'Xếp xà lách và các loại rau thơm xung quanh đĩa',
          'Xếp dưa leo thái lát xen kẽ với rau',
          'Chuẩn bị nước mắm pha chua ngọt đi kèm theo tỷ lệ: 3 muỗng canh nước mắm + 2 muỗng canh đường + 4 muỗng canh nước ấm + 2 muỗng canh chanh + ớt thái lát',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Dùng bánh khi còn nóng để cảm nhận độ giòn của vỏ bánh',
          'Kết hợp bánh với rau sống và nước mắm pha chua ngọt',
          'Có thể cuốn bánh với rau trong bánh tráng ướt',
          'Chấm với nước mắm pha và thêm ớt tươi tùy khẩu vị',
          'Thưởng thức từng miếng nhỏ để cảm nhận đầy đủ hương vị',
        ],
      },
    ],
    tips: [
      'Bột phải được đánh kỹ và để nghỉ đủ thời gian để bánh giòn và không bị nứt khi chiên',
      'Nhiệt độ dầu chiên phải ổn định ở 170-180°C để bánh chín đều và không bị ngấm dầu',
      'Khuôn bánh phải được làm nóng trước để bánh không bị dính và tạo hình đẹp',
      'Tôm nên đặt đầu hướng lên và ấn nhẹ vào bột để không bị rơi khi chiên',
      'Nhân bánh phải được trộn đều và nêm nếm vừa phải để không át vị của vỏ bánh',
      'Nước mắm pha phải cân bằng vị chua ngọt để phù hợp với độ béo của bánh',
    ],
    storage: [
      'Bột bánh đã pha có thể bảo quản trong tủ lạnh tối đa 24 giờ, để ấm và đánh lại trước khi sử dụng',
      'Nhân bánh đã trộn có thể bảo quản trong tủ lạnh đến 24 giờ trong hộp kín',
      'Bánh đã chiên nên ăn nóng ngay, không nên để qua đêm',
      'Nếu cần bảo quản bánh đã chiên, để nguội hoàn toàn và hâm nóng lại bằng lò nướng ở 180°C trong 3-5 phút',
      'Nước mắm pha có thể bảo quản trong tủ lạnh đến 1 tuần trong hộp kín',
      'Rau sống đã sơ chế có thể bảo quản trong tủ lạnh 2-3 ngày nếu được gói kỹ trong khăn ẩm và hộp kín',
    ],
  },
};
export default banhCongBacLieu;
