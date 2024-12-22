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
          'Rửa sạch xương với nước muối loãng',
          'Chần qua nước sôi 3 phút để loại bỏ bẩn và mùi hôi',
          'Rửa lại bằng nước lạnh',
          'Để ráo nước',
        ],
      },
      {
        title: 'Chuẩn bị thịt bò',
        details: [
          'Rửa sạch thịt bò với nước muối loãng',
          'Để đông lạnh 30 phút để dễ thái',
          'Thái lát mỏng 2mm theo chiều ngang thớ',
          'Ướp thịt với chút muối, tiêu (tùy chọn)',
          'Bảo quản trong tủ lạnh cho đến khi dùng',
        ],
      },
      {
        title: 'Chuẩn bị gia vị nướng',
        details: [
          'Hành tây bóc vỏ, cắt đôi',
          'Nướng hành tây trực tiếp trên lửa đến khi thơm và hơi cháy vỏ ngoài',
          'Gừng rửa sạch, đập dập',
          'Nướng gừng trực tiếp trên lửa cho thơm',
        ],
      },
      {
        title: 'Chuẩn bị gia vị khô',
        details: [
          'Rang hoa hồi, quế, thảo quả, đinh hương trên chảo kh�� với lửa nhỏ',
          'Rang đến khi có mùi thơm (khoảng 2-3 phút)',
          'Cho tất cả vào túi vải buộc kín',
        ],
      },
      {
        title: 'Chuẩn bị hành phi và rau',
        details: [
          'Hành khô bóc vỏ, một nửa thái mỏng để phi vàng',
          'Phi hành với dầu ăn đến khi vàng đều',
          'Vớt ra để ráo dầu',
          'Nửa hành còn lại để nguyên củ',
          'Hành lá rửa sạch, thái nhỏ',
          'Rau mùi nhặt lá, rửa sạch',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 6 lít nước trong nồi lớn',
          'Cho xương đã chần vào nấu với lửa to',
          'Khi sôi, hạ lửa nhỏ, vớt bọt cho nước trong',
          'Cho hành tây và gừng nướng vào',
          'Thêm túi gia vị, hành khô nguyên củ',
          'Ninh liu riu 6-8 tiếng, thỉnh thoảng vớt bọt',
          'Nước dùng phải trong và có màu nâu vàng đẹp',
        ],
      },
      {
        title: 'Nêm nước dùng',
        details: [
          'Sau 6 tiếng, nêm 2 muỗng canh nước mắm',
          'Thêm đường phèn và muối',
          'Nếm thử và điều ch���nh vị đậm đà vừa ăn',
          'Vị phải cân bằng giữa ngọt tự nhiên từ xương và mặn vừa phải',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bánh phở',
        details: [
          'Trụng bánh phở qua nước sôi 10-15 giây',
          'Vớt ra ngay khi bánh vừa mềm',
          'Để ráo nước hoàn toàn',
          'Chia bánh phở ra từng tô',
        ],
      },
      {
        title: 'Hoàn thiện tô phở',
        details: [
          'Xếp bánh phở vào tô',
          'Xếp thịt bò tái lên trên',
          'Rắc hành phi, hành lá đã thái nhỏ',
          'Chan nước dùng đang sôi vào (phải thật sôi để chín thịt)',
          'Rắc thêm chút tiêu xay nếu thích',
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
