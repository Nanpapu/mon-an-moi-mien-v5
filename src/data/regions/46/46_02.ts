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
          'Chọn hến tươi sống, vỏ còn nguyên vẹn, có màu nâu sẫm tự nhiên, không nứt mẻ',
          'Ngâm hến trong nước muối 3% (30g muối/1 lít nước) trong 2-3 tiếng, thay nước 2 lần',
          'Đảo hến mỗi 30 phút để hến nhả hết cát (quan trọng nhất với món cơm hến)',
          'Rửa kỹ nhiều lần với nước sạch đến khi nước hoàn toàn trong',
          'Chà nhẹ vỏ hến bằng bàn chải mềm để loại bỏ rong rêu bám ngoài',
          'Để ráo trong rổ đan thưa 15 phút ở nhiệt độ phòng',
        ],
      },
      {
        title: 'Sơ chế rau và gia vị',
        details: [
          'Rau răm: Nhặt lá tươi, rửa sạch, thái nhỏ 2mm (đặc trưng của cơm hến)',
          'Húng quế: Nhặt lá non, rửa sạch, để nguyên lá',
          'Rau má: Nhặt bỏ lá già, rửa sạch, thái nhỏ 2mm',
          'Bắp chuối: Bào mỏng 1mm, ngâm nước có chanh để không thâm',
          'Ớt tươi: Rửa sạch, thái lát xiên 45 độ dày 2mm',
          'Đậu phộng: Rang vàng ở 150°C trong 10 phút, không được cháy',
          'Tóp mỡ: Cắt hạt lựu 5mm, chiên vàng giòn ở 160°C trong 3-4 phút',
          'Hành phi: Thái mỏng 1mm, phi vàng đều ở 150°C trong 2-3 phút',
        ],
      },
    ],
    cooking: [
      {
        title: 'Luộc và xào hến',
        details: [
          'Đun sôi nước trong nồi lớn ở 100°C (nước phải sôi già)',
          'Thêm 1 lát gừng đập dập để khử mùi tanh',
          'Cho hến vào luộc, đảo đều, đợi nước sôi lại',
          'Luộc 3-5 phút đến khi hến mở miệng hoàn toàn',
          'Vớt hến ra ngay, ngâm nước đá 1 phút để giữ độ giòn',
          'Tách lấy thịt hến, loại bỏ vỏ cẩn thận không để sót cát',
          'Giữ lại 500ml nước luộc hến đã lọc trong (nước dùng đặc trưng)',
          'Phi thơm tỏi băm với dầu ăn ở 150°C',
          'Xào hến với hành phi 2-3 phút ở lửa lớn để hến thơm và săn',
          'Nêm 1/2 muỗng cà phê muối, 1/4 muỗng cà phê tiêu',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước mắm ruốc Huế',
        details: [
          'Chọn mắm ruốc Huế chính hiệu, màu nâu đỏ, mùi thơm đặc trưng',
          'Phi thơm 2 muỗng canh dầu ăn với tỏi băm ở 150°C',
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
          'Xới cơm nguội vào tô (cơm phải dẻo vừa, không quá khô hay ướt)',
          'Xếp hến xào lên trên (80g/phần)',
          'Rưới 3-4 muỗng nước mắm ruốc Huế',
          'Rắc đậu phộng rang (15g/phần)',
          'Thêm tóp mỡ giòn (10g/phần)',
          'Rắc hành phi vàng lên trên',
          'Trang trí với rau thơm các loại theo hình tỏa tròn',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Bày rau sống ra đĩa lót lá chuối tươi',
          'Xếp riêng từng loại rau thơm thành hình quạt',
          'Để riêng bắp chuối bào trong tô có nước chanh',
          'Để riêng ớt tươi thái lát',
          'Chuẩn bị thêm nước mắm ruốc pha loãng để chan thêm',
        ],
      },
      {
        title: 'Cách thưởng thức đúng điệu',
        details: [
          'Trộn đều cơm với hến và nước mắm ruốc trước khi ăn',
          'Thêm rau thơm, bắp chuối tùy khẩu vị (càng nhiều loại càng ngon)',
          'Có thể thêm ớt tươi nếu thích cay',
          'Dùng khi cơm còn ấm để cảm nhận đủ hương vị',
          'Thưởng thức từng thìa với đầy đủ nguyên liệu để cảm nhận trọn vẹn hương vị',
        ],
      },
    ],
    tips: [
      'Hến phải được ngâm và rửa thật kỹ để không còn cát sạn',
      'Luộc hến vừa chín tới, không luộc quá lâu sẽ dai và mất ngọt',
      'Mắm ruốc Huế là linh hồn của món ăn, không thể thay thế bằng loại khác',
      'Cơm nguội vừa phải, không quá cứng hoặc quá mềm',
      'Tóp mỡ phải giòn và không bị cháy đen',
      'Đậu phộng rang phải vừa chín tới, có mùi thơm đặc trưng',
      'Rau thơm phải tươi và đa dạng để tạo hương vị đặc trưng của món',
      'Nước mắm ruốc phải đậm đà nhưng không quá mặn',
    ],
    storage: [
      'Hến đã luộc có thể bảo quản trong tủ lạnh 1-2 ngày',
      'Nước mắm ruốc pha để được 2-3 ngày trong tủ lạnh',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 2-3 ngày',
      'Tóp mỡ để nơi khô ráo, trong hộp kín có thể giữ được 3-4 ngày',
      'Đậu phộng rang để trong hộp kín, nơi khô ráo đến 2 tuần',
      'Hành phi để trong hộp kín, nơi khô ráo 4-5 ngày',
    ],
  },
};

export default comHen;
