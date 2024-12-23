import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhTrangCuonThitHeo: Recipe = {
  id: '48_02',
  name: 'Bánh Tráng Cuốn Thịt Heo',
  region: 'Miền Trung',
  image: 'images/48/48_02.jpg',
  cookingTime: 60,
  difficulty: 2,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Thịt heo ba chỉ',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Bánh tráng mỏng',
      amount: 20,
      unit: UNITS.QUANTITY.PIECE,
      type: 'grain/noodle',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Rau xà lách',
      amount: 200,
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
      name: 'Gừng',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Tỏi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Ớt tươi',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Đường',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
    },
    {
      name: 'Nước mắm',
      amount: 50,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Chanh tươi',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế thịt',
        details: [
          'Thịt ba chỉ rửa sạch với nước muối loãng 2%',
          'Để ráo nước trên rổ 10 phút',
          'Thêm 2-3 lát gừng đập dập vào nước rửa để khử mùi hôi',
          'Thái thịt thành miếng dài 7-8cm, dày 2-3mm',
          'Ướp thịt với 2 muỗng canh nước mắm, 1 muỗng canh đường',
          'Thêm 2 muỗng cà phê tỏi băm, 1 muỗng cà phê tiêu xay',
          'Trộn đều và để thấm ít nhất 30 phút',
        ],
      },
      {
        title: 'Sơ chế rau củ',
        details: [
          'Dưa leo rửa sạch, gọt vỏ, bỏ ruột',
          'Thái sợi dài 5-6cm, dày 2mm',
          'Hành lá rửa sạch, thái khúc 3cm',
          'Tỏi bóc vỏ, băm nhuyễn',
          'Ớt tươi rửa sạch, thái lát mỏng 2mm',
          'Rau sống các loại nhặt bỏ lá úa, rửa sạch',
          'Ngâm rau trong nước muối loãng 10 phút',
          'Vớt ra, để ráo trên rổ hoặc máy vắt',
        ],
      },
    ],
    cooking: [
      {
        title: 'Luộc thịt',
        details: [
          'Đun sôi nồi nước với 2 lát gừng và 1/2 hành lá',
          'Thả từng miếng thịt vào nước sôi, đảo nhẹ',
          'Luộc với lửa vừa trong 15-20 phút',
          'Khi thịt chín mềm, vớt ra ngâm ngay vào thau nước đá',
          'Để thịt nguội hoàn toàn khoảng 15 phút',
          'Thái thịt thành lát mỏng 2-3mm theo thớ',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước chấm',
        details: [
          'Pha 3 muỗng canh nước mắm ngon với 2 muỗng canh đường',
          'Thêm 4 muỗng canh nước cốt chanh tươi',
          'Cho 1 muỗng cà phê tỏi băm và ớt thái lát',
          'Khuấy đều đến khi đường tan hoàn toàn',
          'Điều chỉnh vị theo tỷ lệ: mặn 40%, chua 30%, ngọt 30%',
        ],
      },
    ],
    assembly: [
      {
        title: 'Cuốn bánh tráng',
        details: [
          'Nhúng bánh tráng qua nước ấm 40°C thật nhanh',
          'Đặt bánh lên đĩa hoặc mặt phẳng sạch',
          'Xếp rau xà lách và các loại rau thơm',
          'Đặt 2-3 lát thịt heo ở phần giữa',
          'Thêm dưa leo, hành lá',
          'Cuốn chặt từ dưới lên, gấp hai bên vào',
          'Cuốn tiếp đến hết, giữ độ chặt vừa phải',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Cắt cuốn bánh tráng thành khúc vừa ăn 4-5cm',
          'Xếp đẹp mắt ra đĩa có lót lá chuối',
          'Rắc thêm đậu phộng rang giã dập lên trên',
          'Dùng kèm nước chấm đã pha',
          'Có thể thêm ớt tươi theo khẩu vị',
        ],
      },
    ],
    tips: [
      'Chọn thịt ba chỉ tươi, có vân mỡ đều, màu hồng tươi',
      'Bánh tráng phải mỏng, dai và trong',
      'Rau sống phải tươi ngon và đa dạng để tạo hương vị',
      'Nước chấm cần cân bằng giữa vị mặn, chua, ngọt',
      'Không nhúng bánh tráng quá ướt sẽ làm rách bánh',
      'Thịt luộc phải mềm nhưng không nát',
      'Rau phải được để ráo kỹ tránh làm ướt bánh',
      'Cuốn vừa tay, không quá chặt hoặc quá lỏng',
    ],
    storage: [
      'Thịt luộc có thể bảo quản trong tủ lạnh 2-3 ngày',
      'Rau sống rửa sạch, để ráo, bọc khăn ẩm bảo quản tủ lạnh 2-3 ngày',
      'Nước chấm pha có thể giữ trong tủ lạnh 3-4 ngày',
      'Bánh tráng để nơi khô ráo, tránh ẩm',
      'Đậu phộng rang để trong hộp kín, nơi khô ráo đến 2 tuần',
      'Không cuốn sẵn bánh tráng, chỉ cuốn khi ăn',
    ],
  },
};

export default banhTrangCuonThitHeo;
