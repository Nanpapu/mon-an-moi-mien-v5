import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhCong: Recipe = {
  id: '92_02',
  name: 'Bánh Cống',
  region: 'Miền Nam',
  image: 'images/92/92_02.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Tôm tươi cỡ vừa',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shrimp',
      note: 'Tôm size 30-35 con/kg',
    },
    {
      name: 'Thịt heo băm',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
      note: 'Thịt nạc, băm nhuyễn',
    },
    {
      name: 'Đậu xanh đã xát vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
      note: 'Đậu xanh cà vỏ',
    },
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/flour',
      note: 'Bột gạo mịn',
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Tiêu',
      amount: 5,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
    {
      name: 'Nước mắm',
      amount: 30,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Rau xà lách',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau thơm các loại',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
      note: 'Rau quế, húng quế, ngò gai',
    },
    {
      name: 'Dưa leo',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/fruit',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế tôm tươi',
        details: [
          'Chọn tôm tươi cỡ 30-35 con/kg, vỏ bóng, thịt săn chắc, không có mùi lạ',
          'Dùng kéo cắt râu và chân tôm, giữ lại phần đầu và đuôi',
          'Lột vỏ tôm từ thân đến đuôi, giữ nguyên phần đầu để trang trí',
          'Dùng dao nhỏ rạch một đường dọc sống lưng, rút bỏ chỉ đen',
          'Rửa sạch tôm với nước muối 1% (10g muối/1 lít nước)',
          'Để ráo nước trên rổ inox 5 phút',
          'Ướp tôm với: 1/2 muỗng cà phê tiêu xay + 1/2 muỗng cà phê bột ngọt + 1/4 muỗng cà phê muối',
          'Để tôm thấm gia vị 15 phút ở nhiệt độ phòng',
        ],
      },
      {
        title: 'Sơ chế đậu xanh và gia vị',
        details: [
          'Chọn đậu xanh cà vỏ, không bị đen, mốc hay mọt',
          'Ngâm đậu trong nước ấm 40°C trong 4 tiếng (hoặc ngâm nước nguội 6-8 tiếng)',
          'Vớt đậu ra, để ráo nước 10 phút',
          'Xay đậu thành bột mịn với máy xay sinh tố (2-3 lần để đảm bảo độ mịn)',
          'Bóc vỏ hành tím, rửa sạch, để ráo nước',
          'Băm nhuyễn hành tím bằng dao sắc (không xay máy để giữ hương vị)',
          'Rây bột đậu qua rây mịn để loại bỏ cặn thô',
        ],
      },
      {
        title: 'Sơ chế rau ăn kèm',
        details: [
          'Rau xà lách: Tách từng lá, loại bỏ phần gốc và lá hư, rửa sạch',
          'Rau thơm: Nhặt lá tươi, bỏ cọng già và lá úa vàng',
          'Dưa leo: Rửa sạch, cắt bỏ đầu đuôi, thái lát chéo dày 2mm',
          'Ngâm tất cả rau trong nước muối loãng (1 muỗng cà phê muối/1 lít nước) trong 10 phút',
          'Vớt ra, rửa lại với nước sạch 2 lần',
          'Để ráo nước trên rổ hoặc dùng rổ quay rau',
          'Bọc rau trong khăn ẩm sạch, để ngăn mát tủ lạnh nếu chưa dùng ngay',
        ],
      },
      {
        title: 'Chuẩn bị bột bánh',
        details: [
          'Rây bột gạo qua rây mịn để loại bỏ cục và tạp chất',
          'Cho bột vào tô lớn, thêm 1/2 muỗng cà phê muối',
          'Đun nóng 250ml nước đến 40°C (kiểm tra bằng nhiệt kế hoặc ngón tay nhúng thấy ấm)',
          'Từ từ đổ nước vào bột, vừa đổ vừa khuấy đều theo một chiều',
          'Đánh bột liên tục trong 5 phút đến khi bột mịn, không vón cục',
          'Bọc tô bột bằng màng bọc thực phẩm',
          'Để bột nghỉ 30 phút ở nhiệt độ phòng cho bột nở và có độ dẻo',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm nhân bánh',
        details: [
          'Ướp thịt băm với: 1 muỗng canh nước mắm ngon + 1/2 muỗng cà phê tiêu xay + 1 muỗng canh hành tím băm',
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
          'Ngâm khuôn bánh trong dầu nóng 1 phút để làm nóng đều khuôn',
          'Đổ bột vào khuôn đến 2/3 độ cao, đặt nhân bánh vào giữa',
          'Đặt tôm lên trên, đầu tôm hướng lên, ấn nhẹ vào bột',
          'Chiên bánh ở lửa vừa (170-180°C) trong 3-4 phút đến khi vàng đều',
          'Dùng đũa tre lật bánh, chiên thêm 2-3 phút cho mặt còn lại',
          'Vớt bánh ra để ráo dầu trên giấy thấm dầu',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện và trình bày',
        details: [
          'Xếp bánh cống ra đĩa có lót giấy thấm dầu theo hình tròn hoặc hình quạt',
          'Trang trí xung quanh với rau xà lách và các loại rau thơm',
          'Xếp dưa leo thái lát xen kẽ với rau',
          'Chuẩn bị nước mắm pha chua ngọt đi kèm (2 muỗng canh nước mắm + 2 muỗng canh đường + 4 muỗng canh nước ấm + 1 muỗng canh chanh)',
          'Đặt chén nước mắm pha và ớt tươi thái lát bên cạnh',
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

export default banhCong;
