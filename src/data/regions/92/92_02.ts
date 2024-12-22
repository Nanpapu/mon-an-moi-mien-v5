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
        title: 'Sơ chế nguyên liệu',
        details: [
          'Tôm bóc vỏ, giữ đầu và đuôi, rút chỉ đen',
          'Rửa sạch tôm với nước muối loãng',
          'Để ráo nước và ướp tôm với: 1/2 muỗng cà phê tiêu + 1/2 muỗng cà phê bột ngọt',
          'Ngâm đậu xanh trong nước ấm 4 tiếng cho mềm',
          'Xay đậu xanh thật nhuyễn mịn',
          'Băm nhuyễn hành tím',
          'Rửa sạch các loại rau ăn kèm, để ráo nước',
        ],
      },
      {
        title: 'Chuẩn bị bột',
        details: [
          'Cho bột gạo vào tô lớn',
          'Thêm từ từ 250ml nước ấm (40°C) vào bột, vừa đổ vừa khuấy đều',
          'Đánh bột theo một chiều đến khi mịn và không còn vón cục',
          'Thêm 1/2 muỗng cà phê muối vào bột',
          'Để bột nghỉ 30 phút cho bột nở',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm nhân bánh',
        details: [
          'Ướp thịt băm với: 1 muỗng canh nước mắm + 1/2 muỗng cà phê tiêu + hành tím băm',
          'Để thịt ướp 15-20 phút cho ngấm gia vị',
          'Trộn đều đậu xanh xay với thịt băm đã ướp',
          'Nêm nếm lại cho vừa ăn',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên bánh',
        details: [
          'Làm nóng dầu trong chảo sâu lòng đến 180°C',
          'Làm nóng khuôn bánh cống trong dầu',
          'Đổ bột vào khuôn đến 2/3 khuôn',
          'Đặt tôm lên trên, đầu tôm hướng lên, ấn nhẹ vào bột',
          'Chiên với lửa vừa khoảng 3-4 phút mỗi mặt đến khi vàng giòn',
          'Vớt bánh ra để ráo dầu trên giấy thấm dầu',
        ],
      },
    ],
    assembly: [
      {
        title: 'Trình bày',
        details: [
          'Xếp bánh cống ra đĩa có lót giấy thấm dầu',
          'Bày rau sống và các loại rau thơm xung quanh',
          'Cắt dưa leo thành lát mỏng',
          'Chuẩn bị nước mắm pha chua ngọt đi kèm',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Ăn kèm với rau sống và nước mắm pha',
          'Có thể cuốn bánh với bánh tráng',
          'Thêm ớt tươi tùy khẩu vị',
          'Dùng nóng để bánh giữ được độ giòn',
        ],
      },
    ],
    tips: [
      'Bột phải được đánh cho thật mịn và để nghỉ 30 phút trước khi chiên',
      'Dầu chiên phải nóng già (180-190°C) để bánh giòn và không bị ngấm dầu',
      'Tôm phải được đặt đầu hướng lên và ấn nhẹ vào bột để không bị rơi',
      'Đậu xanh xay phải mịn và không quá khô để bánh không bị vụn',
      'Chiên bánh với lửa vừa để chín đều và không bị cháy',
      'Khuôn bánh phải được làm nóng trước khi đổ bột để bánh không bị dính',
    ],
    storage: [
      'Bột sống có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Bánh đã chiên nên ăn nóng ngay để giữ độ giòn',
      'Nếu cần bảo quản bánh đã chiên, để nguội hoàn toàn rồi cho vào hộp kín',
      'Nhân đậu xanh và thịt đã trộn có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể bảo quản trong tủ lạnh đến 1 tuần',
    ],
  },
};

export default banhCong;
