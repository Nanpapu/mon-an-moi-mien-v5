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
    ingredients: [
      {
        name: 'Thịt ba chỉ',
        amount: 500,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Thịt nạc vai',
        amount: 300,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Tỏi băm',
        amount: 3,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Hành khô băm',
        amount: 3,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Mật ong',
        amount: 2,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Nước mắm ngon',
        amount: 3,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Dầu hào',
        amount: 1,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Tiêu xay',
        amount: 1,
        unit: UNITS.VOLUME.TEASPOON,
      },
      {
        name: 'Nước mắm ngon (cho nước chấm)',
        amount: 100,
        unit: UNITS.VOLUME.MILLILITER,
      },
      {
        name: 'Đường',
        amount: 50,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Nước cốt chanh',
        amount: 2,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Tỏi băm (cho nước chấm)',
        amount: 2,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Ớt tươi',
        amount: 3,
        unit: UNITS.QUANTITY.PIECE,
      },
      {
        name: 'Nước ấm',
        amount: 200,
        unit: UNITS.VOLUME.MILLILITER,
      },
      {
        name: 'Bún tươi',
        amount: 800,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Rau xà lách',
        amount: 200,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Húng quế',
        amount: 100,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Húng lủi',
        amount: 100,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Tía tô',
        amount: 50,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Kinh giới',
        amount: 50,
        unit: UNITS.WEIGHT.GRAM,
      },
    ],
    instructions: {
      preparation: [
        'Thịt ba chỉ thái miếng vuông mỏng khoảng 3mm, thịt nạc vai thái miếng dày khoảng 1cm',
        'Băm nhuyễn tỏi và hành khô',
        'Trộn đều tỏi, hành băm, mật ong, nước mắm, dầu hào, tiêu với thịt',
        'Ướp thịt ít nhất 1 tiếng, tốt nhất là qua đêm',
        'Rửa sạch các loại rau, để ráo nước',
        'Tỏi băm nhuyễn cho nước chấm',
        'Ớt thái lát mỏng',
      ],
      sauce: [
        'Hòa tan đường với nước ấm',
        'Thêm nước mắm, khuấy đều',
        'Thêm nước cốt chanh, tỏi băm, ớt',
        'Nếm thử và điều chỉnh vị chua ngọt mặn theo khẩu vị',
      ],
      assembly: [
        'Nướng thịt trên bếp than hoa hoặc bếp nướng điện đến khi vàng đều hai mặt',
        'Cho thịt nướng vào bát, chan nước chấm vừa đủ ngập mặt thịt',
        'Bày rau sống ra đĩa riêng',
        'Bún tươi để riêng trong tô',
      ],
      serving: [
        'Mỗi người tự gắp bún, rau và thịt vào bát của mình',
        'Chan thêm nước chấm tùy khẩu vị',
        'Có thể ăn kèm nem cua bể hoặc nem rán',
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
}

export default bunChaHaNoi;