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
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Xương ống bò',
      amount: 2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'meat/beef',
    },
    {
      name: 'Thịt bò phi lê (thăn, nạm hoặc gầu)',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/beef',
    },
    {
      name: 'Bánh phở Nam Định',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
      note: 'Bánh phở Nam Định mỏng và dai hơn bánh phở thông thường',
    },
    {
      name: 'Hành tây',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/root',
    },
    {
      name: 'Gừng già',
      amount: 150,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Hoa hồi',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Quế cây',
      amount: 3,
      unit: UNITS.QUANTITY.STICK,
      type: 'spice/dried',
    },
    {
      name: 'Thảo quả',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Đinh hương',
      amount: 6,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Hành khô',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Hành lá',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau mùi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Giá đỗ',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Chanh tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Ớt tươi',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Nước mắm ngon',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế xương bò',
        details: [
          'Rửa xương với nước muối loãng (15g muối/1 lít nước)',
          'Ngâm xương trong nước lạnh 30 phút để ra hết máu',
          'Đun sôi nồi nước lớn ở 100°C',
          'Chần xương trong nước sôi 3-5 phút, khuấy đều',
          'Vớt xương ra, rửa kỹ dưới vòi nước lạnh',
          'Chà sạch bề mặt xương bằng bàn chải chuyên dụng',
          'Để ráo nước trên rổ inox 15 phút',
        ],
      },
      {
        title: 'Chuẩn bị thịt bò',
        details: [
          'Chọn thịt bò tươi, có vân mỡ đều, màu đỏ tươi',
          'Rửa thịt với nước muối loãng (10g muối/1 lít nước)',
          'Thấm khô bằng giấy bếp',
          'Bọc thịt trong màng bọc thực phẩm',
          'Để đông lạnh 30-45 phút ở -2°C (để dễ thái)',
          'Thái lát mỏng 2mm theo chiều ngang thớ thịt',
          'Xếp thịt thành từng phần 100g, ngăn cách bằng giấy bóng',
          'Bảo quản trong hộp kín ở ngăn mát tủ lạnh (2-4°C)',
        ],
      },
      {
        title: 'Chuẩn bị gia vị nướng',
        details: [
          'Hành tây bóc vỏ, cắt đôi theo chiều dọc',
          'Gừng già rửa sạch, đập dập nhẹ, cắt lát 1cm',
          'Làm nóng bếp than hồng hoặc bếp gas ở lửa vừa',
          'Nướng hành tây mặt cắt úp xuống 7-10 phút',
          'Nướng gừng 5-7 phút, xoay đều các mặt',
          'Nướng đến khi có mùi thơm và hơi cháy xém bề mặt',
          'Để nguội tự nhiên 5 phút trước khi cho vào nồi',
        ],
      },
      {
        title: 'Chuẩn bị gia vị khô',
        details: [
          'Làm nóng chảo khô ở lửa nhỏ (150°C)',
          'Rang riêng từng loại gia vị để kiểm soát độ chín',
          'Hoa hồi rang 2-3 phút đến khi có mùi thơm',
          'Quế rang 1-2 phút đến khi tỏa hương',
          'Thảo quả đập nhẹ, rang 2 phút',
          'Đinh hương rang 1 phút đến khi có mùi',
          'Để nguội hoàn toàn (3-5 phút)',
          'Gói tất cả trong túi vải cotton mịn, buộc chặt',
        ],
      },
      {
        title: 'Chuẩn bị hành phi và rau',
        details: [
          'Hành khô bóc vỏ, thái lát mỏng 2mm',
          'Làm nóng dầu ăn đến 160°C (test bằng đũa có bọt nhỏ)',
          'Phi hành từng đợt nhỏ, không cho quá nhiều',
          'Đảo đều tay đến khi hành vàng đều',
          'Vớt ra giấy thấm dầu, để nguội hoàn toàn',
          'Hành lá rửa sạch, thái khúc 2cm',
          'Rau mùi nhặt lá, rửa sạch, ngâm nước muối loãng 5 phút',
          'Để ráo nước trên rổ hoặc máy vắt rau',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 6 lít nước trong nồi lớn (nồi inox đáy dày)',
          'Cho xương đã sơ chế vào, đun sôi mạnh 5 phút',
          'Hạ lửa nhỏ vừa, vớt bọt cho nước trong',
          'Cho túi gia vị, hành tây và gừng nướng vào',
          'Ninh trong 6-7 tiếng ở 95°C (sôi liu riu)',
          'Định kỳ vớt bọt mỗi 30 phút trong 2 giờ đầu',
          'Bổ sung nước sôi nếu cần (giữ nguyên mức nước ban đầu)',
          'Sau 5 tiếng, nêm 2 muỗng canh nước mắm cốt 40 độ đạm',
          'Thêm 30g đường phèn và 15g muối',
          'Nếm thử và điều chỉnh vị cân bằng (ngọt 40%, mặn 30%, umami 30%)',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bánh phở',
        details: [
          'Đun sôi nồi nước lớn ở 100°C',
          'Trụng bánh phở Nam Định 10-12 giây (ngắn hơn phở thường)',
          'Vớt ra ngay khi bánh vừa mềm dẻo',
          'Tráng qua nước lạnh nhanh để giữ độ dai',
          'Để ráo hoàn toàn trên rổ đan thưa',
          'Chia bánh phở ra từng tô (150g/tô)',
        ],
      },
      {
        title: 'Hoàn thiện tô phở',
        details: [
          'Xếp bánh phở vào tô theo hình xoắn ốc',
          'Xếp thịt bò tái lên trên (80-100g/tô)',
          'Rắc hành phi và hành lá (1 muỗng canh mỗi loại)',
          'Chan nước dùng đang sôi già (95-100°C)',
          'Rắc tiêu xay và hành phi lên trên',
          'Phải bưng ra ngay khi vừa chan nước dùng',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Bày giá đỗ tươi ra đĩa riêng',
          'Rau mùi để nguyên cành',
          'Chanh tươi thái múi cau',
          'Ớt tươi thái lát mỏng',
        ],
      },
      {
        title: 'Cách thưởng thức',
        details: [
          'Thêm giá, rau theo khẩu vị',
          'Có thể thêm nước mắm, chanh, ớt tùy thích',
          'Ăn nóng để thưởng thức trọn vẹn hương vị',
          'Khuấy đều trước khi ăn để hòa quyện các vị',
        ],
      },
    ],
    tips: [
      'Phải dùng bánh phở Nam Định chính gốc để có độ dai đặc trưng',
      'Nước dùng phải nấu lâu với lửa nhỏ để ngọt tự nhiên',
      'Xương phải được chần kỹ để nước dùng trong',
      'Gia vị phải được rang thơm trước khi cho vào nấu',
      'Thịt bò phải thái mỏng và để đông trước khi thái',
      'Hành tây và gừng phải nướng thơm để tạo hương vị đặc trưng',
      'Không nên cho quá nhiều gia vị vào vì sẽ làm mất đi hương vị nguyên bản',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt bò thái sẵn nên dùng trong ngày',
      'Bánh phở nên mua mới và trụng khi ăn',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh',
      'Hành phi có thể bảo quản trong hộp kín đến 1 tuần',
      'Khi hâm nóng nước dùng, đun sôi kỹ trước khi dùng',
    ],
  },
};

export default phoBoNamDinh;
