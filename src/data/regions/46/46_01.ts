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
        title: 'Sơ chế thịt và xương',
        details: [
          'Bắp bò rửa sạch với nước muối loãng',
          'Giò heo rửa sạch, chà xát với muối để khử mùi hôi',
          'Chần qua nước sôi có gừng để khử mùi',
          'Rửa lại bằng nước lạnh và để ráo',
        ],
      },
      {
        title: 'Chuẩn bị sả và gia vị',
        details: [
          'Sả đập dập, cắt khúc 10cm',
          'Gừng thái lát mỏng',
          'Tỏi bóc vỏ, đập dập',
          'Hành tím bóc vỏ, đập dập',
          'Ớt sừng thái nhỏ',
          'Ớt bột ngâm nước ấm 15 phút',
        ],
      },
      {
        title: 'Chuẩn bị rau củ',
        details: [
          'Rau muống cọng rửa sạch, cắt khúc 5cm',
          'Giá đỗ nhặt bỏ rễ, rửa sạch',
          'Hành lá rửa sạch, thái nhỏ',
          'Rau răm nhặt lá, rửa sạch',
          'Húng quế nhặt lá, rửa sạch',
          'Chanh rửa sạch, thái múi cau',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 5 lít nước trong nồi lớn',
          'Cho bắp bò và giò heo vào nấu',
          'Khi sôi, hạ nhỏ lửa, vớt bọt cho nước trong',
          'Cho sả, gừng, tỏi, hành tím vào',
          'Ninh với lửa liu riu 2-3 tiếng',
          'Vớt thịt ra khi đã mềm, ngâm trong nước lạnh',
        ],
      },
      {
        title: 'Pha màu và nêm nếm',
        details: [
          'Phi thơm tỏi băm với dầu ăn',
          'Cho ớt bột vào phi đến khi có màu đỏ đẹp',
          'Cho mắm ruốc vào, khuấy đều',
          'Đổ hỗn hợp vào nồi nước dùng',
          'Nêm nếm với muối, đường, nước mắm',
          'Vị phải cay nồng, đậm đà, có độ ngọt vừa phải',
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
          'Bày rau muống cọng ra đĩa',
          'Giá đỗ để riêng',
          'Rau thơm (húng quế, rau răm) để nguyên cành',
          'Chanh, ớt tươi để riêng',
        ],
      },
      {
        title: 'Cách thưởng thức',
        details: [
          'Thêm rau muống, giá đỗ tùy thích',
          'Thêm rau thơm để tăng hương vị',
          'Có thể thêm chanh, ớt tươi tùy khẩu vị',
          'Ăn nóng để cảm nhận đầy đủ hương vị',
          'Khuấy đều trước khi ăn',
        ],
      },
    ],
    tips: [
      'Chọn bắp bò tươi, có màu đỏ tươi, thớ thịt mịn',
      'Giò heo phải chọn phần có gân và da để nước dùng ngọt',
      'Mắm ruốc Huế là không thể thiếu để tạo vị đặc trưng',
      'Ớt bột phải ngâm nước ấm để ra màu đẹp và không bị vón cục',
      'Nước dùng phải trong và có màu đỏ cam đặc trưng',
      'Không nên cho quá nhiều mắm ruốc sẽ làm món ăn quá mặn',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt đã nấu chín có thể bảo quản trong tủ lạnh 2-3 ngày',
      'Bún tươi nên mua mới và dùng trong ngày',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh',
      'Mắm ruốc pha sẵn có thể giữ trong tủ lạnh đến 1 tuần',
      'Khi hâm nóng, đun sôi kỹ nước dùng trước khi dùng',
    ],
  },
};

export default bunBoHue;
