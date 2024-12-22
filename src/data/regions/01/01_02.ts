import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const bunChaHaNoi: Recipe = {
  id: '01_02',
  name: 'Bún Chả Hà Nội',
  region: 'Miền Bắc',
  image: 'images/01/01_02.jpg',
  cookingTime: 120,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Thịt ba chỉ',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Thịt nạc vai',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Tỏi băm',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/fresh',
    },
    {
      name: 'Hành khô băm',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/fresh',
    },
    {
      name: 'Mật ong',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Nước mắm ngon',
      amount: 3,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Dầu hào',
      amount: 1,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Tiêu xay',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
      type: 'spice/powder',
    },
    {
      name: 'Nước mắm ngon (cho nước chấm)',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Đường',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Nước cốt chanh',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/fresh',
    },
    {
      name: 'Tỏi băm (cho nước chấm)',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/fresh',
    },
    {
      name: 'Ớt tươi',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Nước ấm',
      amount: 200,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Bún tươi',
      amount: 800,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Rau xà lách',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Húng quế',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Húng lủi',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Tía tô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Kinh giới',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế thịt',
        details: [
          'Thịt ba chỉ thái miếng vuông mỏng khoảng 3mm',
          'Thịt nạc vai thái miếng dày khoảng 1cm',
          'Rửa sạch thịt với nước muối loãng',
          'Để ráo nước',
        ],
      },
      {
        title: 'Chuẩn bị gia vị ướp',
        details: [
          'Băm nhuyễn tỏi và hành khô',
          'Trộn đều tỏi, hành băm với mật ong',
          'Thêm nước mắm, dầu hào, tiêu vào trộn đều',
          'Ướp thịt với hỗn hợp gia vị ít nhất 1 tiếng, tốt nhất là qua đêm',
        ],
      },
      {
        title: 'Chuẩn bị rau và gia vị',
        details: [
          'Rửa sạch các loại rau (xà lách, húng quế, húng lủi, tía tô, kinh giới)',
          'Để ráo nước, xé nhỏ vừa ăn',
          'Tỏi băm nhuyễn cho nước chấm',
          'Ớt rửa sạch, thái lát mỏng',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước chấm',
        details: [
          'Hòa tan đường với nước ấm',
          'Thêm nước mắm, khuấy đều',
          'Thêm nước cốt chanh, tỏi băm, ớt',
          'Nếm thử và điều chỉnh vị chua ngọt mặn theo khẩu vị',
          'Để nước chấm thấm vị khoảng 15 phút trước khi dùng',
        ],
      },
    ],
    cooking: [
      {
        title: 'Nướng thịt',
        details: [
          'Chuẩn bị bếp than hoa hoặc bếp nướng điện',
          'Đợi than đỏ đều hoặc bếp nóng đủ nhiệt độ',
          'Xếp thịt lên vỉ nướng',
          'Nướng đến khi thịt vàng đều hai mặt',
          'Lật thịt thường xuyên để không bị cháy',
          'Phết thêm chút dầu ăn nếu thịt khô',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bún',
        details: [
          'Trụng bún qua nước sôi nhanh',
          'Vớt ra ngay, tráng qua nước lạnh',
          'Để ráo nước',
          'Chia bún ra từng bát',
        ],
      },
      {
        title: 'Hoàn thiện món',
        details: [
          'Cho thịt nướng vào bát',
          'Chan nước chấm vừa đủ ngập mặt thịt',
          'Bày rau sống ra đĩa riêng',
          'Xếp các loại rau thành từng nhóm để dễ lấy',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Mỗi người tự gắp bún vào bát của mình',
          'Thêm rau sống tùy thích',
          'Gắp thịt và chan nước chấm vừa đủ',
          'Có thể ăn kèm nem cua bể hoặc nem rán',
          'Trộn đều trước khi ăn',
        ],
      },
    ],
    tips: [
      'Thịt phải ướp ít nhất 1 tiếng, tốt nhất là qua đêm để ngấm gia vị',
      'Nướng thịt trên bếp than để có mùi thơm đặc trưng',
      'Không nướng thịt quá khô, phải giữ độ mềm và mọng nước',
      'Nước chấm phải cân bằng vị chua-ngọt-mặn',
      'Rau sống phải đa dạng các loại để tạo hương vị phong phú',
      'Bún phải được trụng qua nước sôi và để nguội trước khi ăn',
    ],
    storage: [
      'Thịt ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước chấm pha sẵn có thể giữ trong tủ lạnh đến 1 tuần',
      'Rau sống nên rửa sạch, để ráo và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Bún nên mua mới và dùng trong ngày',
      'Thịt đã nướng nên ăn hết trong bữa, không nên để qua ngày',
    ],
  },
};

export default bunChaHaNoi;
