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
          'Thịt ba chỉ thái miếng vuông mỏng khoảng 3mm, kích thước 4x4cm',
          'Thịt nạc vai thái miếng dày khoảng 1cm, kích thước 5x5cm',
          'Rửa sạch thịt với nước muối loãng (1 muỗng cà phê muối/1 lít nước)',
          'Để ráo nước trên rổ 15 phút',
          'Dùng giấy thấm thật khô bề mặt thịt',
        ],
      },
      {
        title: 'Chuẩn bị gia vị ướp',
        details: [
          'Tỏi bóc vỏ, đập dập rồi băm thật nhuyễn',
          'Hành khô bóc vỏ, băm nhuyễn',
          'Trộn đều tỏi, hành băm với 2 muỗng canh mật ong',
          'Thêm 3 muỗng canh nước mắm ngon',
          'Thêm 1 muỗng canh dầu hào',
          'Thêm 1 muỗng cà phê tiêu xay',
          'Khuấy đều hỗn hợp gia vị',
        ],
      },
      {
        title: 'Ướp thịt',
        details: [
          'Chia hỗn hợp gia vị thành 2 phần bằng nhau',
          'Ướp riêng thịt ba chỉ và thịt nạc với phần gia vị',
          'Dùng găng tay trộn đều và nhẹ nhàng massage thịt để thấm gia vị',
          'Đậy kín và để trong tủ lạnh ít nhất 4 tiếng, tốt nhất là qua đêm',
        ],
      },
      {
        title: 'Chuẩn bị rau và gia vị',
        details: [
          'Rửa sạch các loại rau với nước muối loãng',
          'Ngâm rau trong nước lạnh 10 phút để giòn',
          'Vớt ra, để ráo nước trên rổ',
          'Xà lách tách từng lá, rửa sạch',
          'Các loại rau thơm (húng quế, húng lủi, tía tô, kinh giới) nhặt lá, bỏ cọng già',
          'Để ráo nước hoàn toàn trước khi dùng',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước chấm',
        details: [
          'Đun nóng 200ml nước đến khoảng 60°C',
          'Hòa tan 50g đường vào nước ấm, khuấy đều',
          'Thêm 100ml nước mắm ngon, khuấy đều',
          'Thêm 2 muỗng canh nước cốt chanh tươi',
          'Thêm 2 muỗng canh tỏi băm',
          'Ớt tươi thái lát mỏng',
          'Để nguội hoàn toàn rồi nếm thử',
          'Điều chỉnh vị chua ngọt mặn theo tỷ lệ: 2 phần ngọt - 2 phần chua - 1 phần mặn',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chuẩn bị bếp nướng',
        details: [
          'Với bếp than: Dùng than gáo dừa hoặc than nhãn để có mùi thơm',
          'Đốt than đến khi đỏ đều, tro phủ bề mặt, không còn khói đen',
          'Với bếp điện: Làm nóng bếp ở 200°C (±10°C) trong 10 phút',
          'Vỉ nướng inox dày 1.5mm trở lên, khoảng cách nan 8-10mm',
          'Phết dầu ăn tinh luyện lên vỉ bằng chổi silicone',
          'Kiểm tra nhiệt độ vỉ bằng cách nhỏ vài giọt nước (phải sôi ngay)',
        ],
      },
      {
        title: 'Nướng thịt',
        details: [
          'Lấy thịt ra khỏi tủ lạnh 30 phút trước khi nướng',
          'Xếp thịt lên vỉ theo hình xoắn ốc, cách nhau 1cm',
          'Đặt vỉ cách than 10-12cm (với bếp than)',
          'Nướng thịt ba chỉ 4-5 phút mỗi mặt ở 180-200°C',
          'Nướng thịt nạc 6-7 phút mỗi mặt ở 170-180°C',
          'Lật thịt mỗi 2 phút một lần để nướng đều',
          'Phết dầu ăn mỗi lần lật nếu thịt khô',
          'Nướng đến khi thịt có màu nâu vàng, cạnh hơi cháy xém',
          'Kiểm tra độ chín bằng cách ấn nhẹ (thịt đàn hồi là được)',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bún',
        details: [
          'Đun sôi nồi nước lớn',
          'Trụng bún tươi qua nước sôi khoảng 10 giây',
          'Vớt ra ngay, tráng qua nước lạnh để bún không bị dính',
          'Để ráo nước hoàn toàn',
          'Chia bún ra từng bát (khoảng 200g/người)',
        ],
      },
      {
        title: 'Hoàn thiện món',
        details: [
          'Cắt thịt nướng thành miếng vừa ăn',
          'Xếp thịt vào bát',
          'Chan nước chấm vừa đủ ngập mặt thịt',
          'Bày rau sống ra đĩa riêng theo từng loại',
          'Để riêng bát bún cho mỗi người',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Mỗi người tự gắp bún vào bát của mình',
          'Gắp rau sống tùy thích (nên có đủ các loại rau để cảm nhận hương vị trọn vẹn)',
          'Gắp thịt nướng và chan thêm nước chấm',
          'Có thể ăn kèm nem cua bể hoặc nem rán',
          'Trộn đều tất cả nguyên liệu trước khi ăn',
          'Thêm ớt tươi nếu muốn cay',
        ],
      },
    ],
    tips: [
      'Thịt phải được ướp đủ thời gian để thấm gia vị, tối thiểu 4 tiếng',
      'Nướng thịt trên bếp than để có mùi thơm đặc trưng của bún chả Hà Nội',
      'Không nướng thịt quá chín sẽ làm mất độ mềm và mọng nước',
      'Nước chấm phải đạt độ cân bằng giữa vị chua-ngọt-mặn',
      'Rau sống phải đa dạng các loại để tạo hương vị phong phú',
      'Bún phải được trụng vừa tới, không để quá mềm',
      'Nên ăn ngay khi thịt còn nóng để cảm nhận hương vị tốt nhất',
    ],
    storage: [
      'Thịt ướp có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước chấm pha sẵn có thể giữ trong tủ lạnh đến 1 tuần',
      'Rau sống nên rửa sạch, để ráo và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Bún nên mua mới và dùng trong ngày',
      'Thịt đã nướng nên ăn hết trong bữa, không nên để qua ngày',
      'Nếu cần bảo quản thịt nướng, có thể để trong hộp kín trong tủ lạnh tối đa 24 giờ',
    ],
  },
};

export default bunChaHaNoi;
