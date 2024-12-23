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
          'Chọn bắp bò tươi có vân mỡ đều, thớ thịt mịn, màu đỏ tươi sáng, không có mùi lạ',
          'Rửa thịt với nước muối pha loãng (10g muối/1 lít nước) trong 5 phút',
          'Ngâm thịt trong nước lạnh 15 phút để ra hết máu và tạp chất',
          'Thấm khô thịt bằng khăn sạch, để thịt ở nhiệt độ phòng 15 phút',
          'Giò heo chọn phần có gân và da, cạo sạch lông, rửa kỹ với muối',
          'Chặt giò heo thành khúc 7-8cm (kích thước chuẩn cho bún bò)',
          'Để ráo nước cả hai loại thịt trên rổ đan thưa',
        ],
      },
      {
        title: 'Sơ chế gia vị đặc trưng',
        details: [
          'Sả bóc vỏ ngoài, đập dập, cắt khúc 10cm (để lấy tinh dầu tốt nhất)',
          'Gừng già cạo vỏ, đập dập, thái lát mỏng 0.5cm theo đường chéo',
          'Tỏi bóc vỏ, đập dập một nửa, băm nhỏ 1mm một nửa',
          'Hành tím bóc vỏ, đập dập một nửa, băm nhỏ 1mm một nửa',
          'Ớt sừng rửa sạch, để nguyên quả 2 quả, còn lại băm nhỏ 1mm',
          'Ớt bột ngâm trong 100ml nước ấm 60°C trong 10 phút (để lấy màu đẹp)',
          'Để riêng từng loại gia vị trong các bát nhỏ',
        ],
      },
      {
        title: 'Chuẩn bị mắm ruốc Huế',
        details: [
          'Chọn mắm ruốc Huế chính gốc (màu tím đỏ, mùi thơm đặc trưng)',
          'Phi dầu thơm với 2 muỗng canh dầu ăn ở 160°C',
          'Cho 1/2 phần tỏi băm vào phi vàng nhẹ (1-2 phút)',
          'Thêm mắm ruốc vào, đảo đều với lửa nhỏ',
          'Phi đến khi mắm ruốc thơm và có màu đỏ sậm (3-4 phút)',
          'Để nguội, chia làm 2 phần (1 để nấu, 1 để ăn kèm)',
        ],
      },
    ],
    cooking: [
      {
        title: 'Nấu nước dùng đặc trưng',
        details: [
          'Đun sôi 3 lít nước trong nồi lớn ở nhiệt độ cao',
          'Chần giò heo qua nước sôi 2 phút để loại bỏ bọt bẩn',
          'Thay nước mới, đun sôi lại với 4 lít nước',
          'Cho giò heo, 2/3 sả đập dập, 1/2 gừng vào nấu với lửa vừa',
          'Hạ lửa nhỏ, nấu liu riu 45 phút đến khi giò heo mềm',
          'Thêm bắp bò vào nấu thêm 30 phút ở lửa liu riu',
          'Nêm 2 muỗng canh mắm ruốc phi, 2 muỗng canh nước mắm ngon',
          'Thêm 1 muỗng canh đường phèn, nêm nếm vừa ăn',
          'Cho ớt bột ngâm vào để tạo màu đỏ đẹp mắt',
          'Nước dùng phải trong, có màu đỏ cam đặc trưng, không đục',
        ],
      },
      {
        title: 'Hoàn thiện các nguyên liệu',
        details: [
          'Vớt thịt bò và giò heo ra, ngâm nước lạnh 2 phút',
          'Thái thịt bò thành lát mỏng 2-3mm theo thớ thịt',
          'Cắt giò heo thành miếng vừa ăn dày 3-4mm',
          'Phi hành tỏi còn lại với dầu ăn đến vàng thơm',
          'Chuẩn bị rau sống: rau muống chẻ, giá sống, rau thơm các loại',
          'Bày các loại gia vị ăn kèm: chanh, ớt tươi, mắm ruốc phi',
        ],
      },
    ],
    assembly: [
      {
        title: 'Trình bày tô bún đúng điệu',
        details: [
          'Trụng bún tươi qua nước sôi 3 giây (bún phải dai, không nát)',
          'Xếp bún vào tô (150g/tô), tạo độ cao vừa phải',
          'Xếp thịt bò (60g) và giò heo (40g) lên trên',
          'Chan nước dùng sôi vào tô (phải thật sôi để bún không bị nhão)',
          'Rắc hành phi, tiêu xay lên trên',
          'Trang trí với một ít rau thơm và ớt tươi',
        ],
      },
    ],
    serving: [
      {
        title: 'Chuẩn bị đồ ăn kèm',
        details: [
          'Bày rau sống ra đĩa lớn có lót lá chuối',
          'Để riêng từng loại: rau muống chẻ, giá sống, rau thơm',
          'Chanh tươi thái múi cau mỏng',
          'Ớt tươi thái lát xiên đẹp mắt',
          'Mắm ruốc phi để riêng trong chén nhỏ',
        ],
      },
      {
        title: 'Cách thưởng thức đúng điệu',
        details: [
          'Cho rau sống, giá vào tô tùy khẩu vị',
          'Thêm chút mắm ruốc phi để tăng vị đậm đà',
          'Nặn chanh, thêm ớt tươi tùy thích',
          'Khuấy đều tất cả nguyên liệu trước khi ăn',
          'Thưởng thức khi nước dùng còn thật sôi',
        ],
      },
    ],
    tips: [
      'Nước dùng phải trong và có màu đỏ cam đặc trưng của ớt bột',
      'Mắm ruốc Huế là linh hồn của món ăn, không thể thay thế',
      'Thịt bò phải mềm, không dai, thái mỏng vừa phải',
      'Giò heo phải có đủ da, gân, thịt mới ngon',
      'Bún phải tươi, dai và không bị nát',
      'Nước dùng chan vào tô phải thật sôi',
      'Rau sống phải tươi và đa dạng các loại',
      'Gia vị ăn kèm phải đầy đủ để thực khách tự điều chỉnh',
    ],
    storage: [
      'Nước dùng có thể để tủ lạnh 2-3 ngày, đun sôi lại trước khi dùng',
      'Thịt bò, giò heo thái lát để ngăn mát tủ lạnh tối đa 2 ngày',
      'Mắm ruốc phi để được 3-4 ngày trong tủ lạnh',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 1-2 ngày',
      'Bún tươi nên mua và dùng trong ngày để giữ độ dai ngon',
      'Gia vị khô để nơi khô ráo, thoáng mát',
    ],
  },
};

export default bunBoHue;
