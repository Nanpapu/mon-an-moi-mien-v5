import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const bunBoHue: Recipe = {
  id: '46_01',
  name: 'Bún Bò Huế',
  region: 'Miền Trung',
  image: 'images/46/46_01.jpg',
  cookingTime: 120,
  difficulty: 4,
  servings: 6,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Bắp bò',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/beef',
    },
    {
      name: 'Giò heo',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Bún tươi',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Mắm ruốc Huế',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/sauce',
    },
    {
      name: 'Sả',
      amount: 12,
      unit: UNITS.QUANTITY.STICK,
      type: 'spice/fresh',
    },
    {
      name: 'Gừng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Ớt sừng',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Ớt bột',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Tỏi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Rau muống cọng',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Hành lá',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau răm',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Húng quế',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Chanh tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Muối',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế thịt bò và giò heo',
        details: [
          'Chọn bắp bò tươi có vân mỡ đều, thớ thịt mịn, màu đỏ tươi',
          'Rửa thịt với nước muối loãng (10g muối/1 lít nước)',
          'Ngâm thịt trong nước lạnh 15 phút để ra hết máu',
          'Thấm khô thịt bằng khăn sạch',
          'Giò heo chọn phần có gân và da, cạo sạch lông',
          'Rửa giò heo với nước muối ấm, chà xát nhẹ bề mặt',
          'Để ráo nước cả hai loại thịt',
        ],
      },
      {
        title: 'Sơ chế gia vị',
        details: [
          'Sả bóc vỏ ngoài, đập dập, cắt khúc 10cm',
          'Gừng già cạo vỏ, đập dập, thái lát mỏng 0.5cm',
          'Tỏi bóc vỏ, đập dập một nửa, băm nhỏ một nửa',
          'Hành tím bóc vỏ, đập dập một nửa, băm nhỏ một nửa',
          'Ớt sừng rửa sạch, để nguyên quả 2 quả, còn lại băm nhỏ',
          'Ớt bột ngâm trong 100ml nước ấm 60°C trong 10 phút',
        ],
      },
      {
        title: 'Chuẩn bị mắm ruốc',
        details: [
          'Chọn mắm ruốc Huế chính gốc (màu tím đỏ, mùi thơm đặc trưng)',
          'Phi dầu thơm với 2 muỗng canh dầu ăn ở 160°C',
          'Cho 1/2 phần tỏi băm vào phi vàng',
          'Thêm mắm ruốc vào, đảo đều với lửa nhỏ',
          'Phi đến khi mắm ruốc thơm và có màu đỏ sậm (khoảng 3-4 phút)',
          'Để nguội, chia làm 2 phần (1 để nấu, 1 để ăn kèm)',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 5 lít nước trong nồi lớn đáy dày',
          'Cho bắp bò và giò heo vào nấu ở lửa lớn',
          'Khi sôi, hạ lửa nhỏ, vớt bọt cho nước trong',
          'Thêm sả, gừng, tỏi, hành tím đập dập',
          'Ninh với lửa liu riu ở 95°C trong 2-3 tiếng',
          'Định kỳ vớt bọt mỗi 30 phút',
          'Khi thịt mềm, vớt ra ngâm ngay trong nước đá 10 phút',
          'Để thịt nguội hoàn toàn mới thái',
        ],
      },
      {
        title: 'Pha màu và nêm nếm',
        details: [
          'Làm nóng 3 muỗng canh dầu ăn trong chảo nhỏ',
          'Phi vàng phần tỏi băm còn lại ở lửa vừa',
          'Cho ớt bột đã ngâm vào, đảo đều (1-2 phút)',
          'Thêm phần mắm ruốc đã phi, khuấy tan',
          'Đổ hỗn hợp vào nồi nước dùng',
          'Nêm 2 muỗng canh muối, 1 muỗng canh đường',
          'Nấu thêm 15 phút để gia vị thấm đều',
          'Nếm thử và điều chỉnh (mặn 40%, cay 30%, ngọt 30%)',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chế biến thịt',
        details: [
          'Thái bắp bò thành lát mỏng vừa ăn',
          'Cắt giò heo thành miếng vừa ăn',
          'Xếp thịt ra đĩa riêng',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bún',
        details: [
          'Trụng bún tươi qua nước sôi nhanh',
          'Vớt ra ngay, tráng qua nước lạnh',
          'Để ráo nước hoàn toàn',
          'Chia bún ra từng tô',
        ],
      },
      {
        title: 'Hoàn thiện tô bún',
        details: [
          'Xếp bún vào tô',
          'Xếp thịt bò và giò heo lên trên',
          'Rắc hành lá, rau răm',
          'Chan nước dùng đang sôi vào',
          'Thêm ít ớt bột màu đỏ lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Rau muống cọng luộc chín vừa, để ráo nước',
          'Giá đỗ rửa sạch, để nguyên',
          'Rau thơm (húng quế, rau răm) nhặt bỏ lá úa, rửa sạch',
          'Chanh tươi thái múi cau mỏng',
          'Ớt tươi thái lát xiên 45 độ',
          'Mắm ruốc pha loãng với nước dùng (1:1)',
          'Để riêng từng loại trên đĩa lót lá chuối',
        ],
      },
      {
        title: 'Cách thưởng thức đúng điệu',
        details: [
          'Thêm rau muống cọng và giá đỗ vào tô',
          'Rắc rau thơm vừa phải (2-3 lá mỗi loại)',
          'Nặn chanh tươi để tăng vị chua tự nhiên',
          'Thêm ớt tươi tùy độ cay ưa thích',
          'Có thể thêm mắm ruốc pha loãng để tăng vị đậm đà',
          'Khuấy đều tất cả nguyên liệu trước khi ăn',
          'Nên ăn khi nước dùng còn thật nóng',
        ],
      },
    ],
    tips: [
      'Chọn bắp bò tươi, có màu đỏ tươi, thớ thịt mịn, có vân mỡ đều',
      'Giò heo phải chọn phần có gân và da để nước dùng ngọt thanh',
      'Mắm ruốc Huế là linh hồn của món ăn, không thể thay thế bằng loại khác',
      'Ớt bột phải ngâm nước ấm để ra màu đẹp và không bị vón cục',
      'Nước dùng phải được nấu liu riu để trong và ngọt tự nhiên',
      'Thịt phải được ngâm nước đá ngay sau khi chín để giữ độ giòn',
      'Bún tươi phải được trụng vừa tới, không để quá mềm',
      'Rau muống cọng phải luộc vừa chín tới để giữ độ giòn',
      'Nên chuẩn bị đầy đủ các loại rau thơm để hương vị trọn vẹn',
      'Mắm ruốc phi phải thơm và có màu đỏ đẹp mới đạt chuẩn',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh tối đa 3 ngày',
      'Thịt đã chín nên dùng trong ngày, tối đa 24 giờ trong tủ lạnh',
      'Bún tươi nên mua và sử dụng trong ngày',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm có thể giữ được 2-3 ngày trong tủ lạnh',
      'Mắm ruốc phi có thể bảo quản trong tủ lạnh đến 2 tuần',
      'Ớt bột pha màu nên pha mới mỗi lần dùng',
      'Khi hâm nóng nước dùng, đun sôi kỹ ít nhất 10 phút',
      'Không trữ đồ ăn kèm đã trộn lẫn quá 2 giờ ở nhiệt độ phòng',
    ],
  },
};

export default bunBoHue;
