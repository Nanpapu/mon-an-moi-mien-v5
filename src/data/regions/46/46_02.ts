import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const comHen: Recipe = {
  id: '46_02',
  name: 'Cơm Hến',
  region: 'Miền Trung',
  image: 'images/46/46_02.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Hến tươi',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shellfish',
    },
    {
      name: 'Cơm trắng',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/rice',
    },
    {
      name: 'Rau thơm các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Đậu phộng rang',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Mắm ruốc Huế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/sauce',
    },
    {
      name: 'Tóp mỡ',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Ớt tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Hành phi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế hến',
        details: [
          'Chọn hến tươi sống, vỏ còn nguyên vẹn, có mùi tanh tự nhiên',
          'Ngâm hến trong nước muối 3% (30g muối/1 lít nước) trong 2 tiếng',
          'Đảo hến mỗi 30 phút để hến nhả hết cát',
          'Rửa kỹ nhiều lần với nước sạch đến khi nước trong',
          'Chà nhẹ vỏ hến bằng bàn chải mềm',
          'Để ráo trong rổ đan thưa 15 phút',
        ],
      },
      {
        title: 'Chuẩn bị các loại rau và gia vị',
        details: [
          'Rau răm nhặt bỏ lá úa, rửa sạch, thái nhỏ 2mm',
          'Húng quế nhặt lá, rửa sạch, để nguyên lá',
          'Bắp chuối bào mỏng, ngâm nước muối loãng',
          'Rau má rửa sạch, thái nhỏ 2mm',
          'Ớt tươi rửa sạch, thái lát xiên 45 độ',
          'Đậu phộng rang vàng ở 150°C trong 10 phút',
          'Giã đậu phộng vừa dập, không nát',
          'Tóp mỡ cắt hạt lựu 5mm, chiên vàng giòn ở 160°C',
        ],
      },
    ],
    cooking: [
      {
        title: 'Luộc và xào hến',
        details: [
          'Đun sôi nước trong nồi lớn ở 100°C',
          'Cho hến vào luộc với 1 lát gừng đập dập',
          'Đảo đều, luộc 3-5 phút đến khi hến mở miệng',
          'Vớt hến ra ngay, ngâm nước đá 1 phút',
          'Tách lấy thịt hến, loại bỏ vỏ',
          'Giữ lại 500ml nước luộc hến đã lọc trong',
          'Phi thơm tỏi băm với dầu ăn ở 150°C',
          'Xào hến với hành phi 2-3 phút ở lửa lớn',
          'Nêm 1/2 muỗng cà phê muối, 1/4 muỗng cà phê tiêu',
          'Xào đến khi hến thơm và hơi khô (2-3 phút)',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước mắm ruốc',
        details: [
          'Phi thơm 2 muỗng canh dầu ăn với tỏi băm',
          'Cho mắm ruốc vào phi đến khi thơm (1-2 phút)',
          'Pha loãng với nước luộc hến theo tỷ lệ 1:2',
          'Thêm 1 muỗng canh đường, khuấy tan',
          'Nếm thử và điều chỉnh vị (mặn 40%, ngọt 30%, chua 30%)',
          'Để nguội hoàn toàn trước khi dùng',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện món ăn',
        details: [
          'Xới cơm nguội vào tô (200g/phần)',
          'Xếp hến xào lên trên (80g/phần)',
          'Rưới 3-4 muỗng nước mắm ruốc',
          'Rắc đậu phộng rang (15g/phần)',
          'Thêm tóp mỡ giòn (10g/phần)',
          'Rắc hành phi vàng lên trên',
          'Trang trí với rau thơm các loại',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Bày rau sống ra đĩa lót lá chuối',
          'Xếp riêng từng loại rau thơm',
          'Để riêng bắp chuối bào',
          'Để riêng ớt tươi thái lát',
          'Chuẩn bị thêm nước mắm ruốc pha loãng',
        ],
      },
      {
        title: 'Cách thưởng thức',
        details: [
          'Trộn đều cơm với hến và nước mắm ruốc',
          'Thêm rau thơm, bắp chuối tùy khẩu vị',
          'Có thể thêm ớt tươi nếu thích cay',
          'Dùng khi cơm còn ấm để cảm nhận đủ hương vị',
          'Thưởng thức từng thìa với đầy đủ nguyên liệu',
        ],
      },
    ],
    tips: [
      'Hến phải được ngâm kỹ để loại bỏ hoàn toàn cát',
      'Luộc hến vừa chín tới, không luộc quá lâu sẽ dai',
      'Mắm ruốc Huế là linh hồn của món ăn, không thể thay thế',
      'Cơm nguội vừa phải, không quá cứng hoặc quá mềm',
      'Tóp mỡ phải giòn và không bị cháy',
      'Đậu phộng rang phải vừa chín tới, có mùi thơm',
      'Rau thơm phải tươi và đa dạng để tạo hương vị đặc trưng',
      'Nước mắm ruốc phải đậm đà nhưng không quá mặn',
    ],
    storage: [
      'Hến đã xào có thể bảo quản trong tủ lạnh 1-2 ngày',
      'Cơm nguội nên dùng trong ngày để giữ độ ngon',
      'Rau thơm rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 2-3 ngày',
      'Nước mắm ruốc pha có thể giữ trong tủ lạnh 3-4 ngày',
      'Tóp mỡ để nơi khô ráo, dùng trong 3-4 ngày',
      'Đậu phộng rang để trong hộp kín, nơi khô ráo đến 2 tuần',
    ],
  },
};

export default comHen;
