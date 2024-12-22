import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhBeoBienHoa: Recipe = {
  id: '75_01',
  name: 'Bánh Bèo Biên Hòa',
  region: 'Miền Nam',
  image: 'images/75/75_01.jpg',
  cookingTime: 60,
  difficulty: 2,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/flour',
      note: 'Bột gạo xay mịn',
    },
    {
      name: 'Bột năng',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/flour',
      note: 'Để bánh trong và dẻo',
    },
    {
      name: 'Tôm khô',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/dried',
      note: 'Loại tôm khô ngon, có màu đỏ cam',
    },
    {
      name: 'Đậu xanh không vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other/dried',
    },
    {
      name: 'Nước cốt dừa',
      amount: 200,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Hành lá',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Hành phi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
    {
      name: 'Tỏi phi',
      amount: 30,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
    {
      name: 'Dầu ăn',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'other',
    },
    {
      name: 'Muối',
      amount: 10,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Đường',
      amount: 15,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
    },
    {
      name: 'Tiêu',
      amount: 5,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Chuẩn bị bột',
        details: [
          'Trộn đều 300g bột gạo với 50g bột năng trong tô lớn',
          'Thêm từ từ 450ml nước ấm (khoảng 40°C) vào bột, vừa thêm vừa khuấy đều theo một chiều',
          'Thêm 1/2 muỗng cà phê muối, khuấy đều',
          'Lọc bột qua rây mịn để loại bỏ cục vón',
          'Để bột nghỉ 30 phút ở nhiệt độ phòng, đậy kín bằng khăn ẩm',
          'Sau 30 phút, khuấy nhẹ lại bột một lần nữa',
        ],
      },
      {
        title: 'Chuẩn bị nhân',
        details: [
          'Ngâm tôm khô trong nước ấm 15 phút cho mềm',
          'Vớt tôm ra, để ráo nước',
          'Xay tôm khô thành hạt vừa phải (không xay quá nhỏ)',
          'Ngâm đậu xanh trong nước ấm 2 giờ cho mềm',
          'Đãi sạch vỏ đậu xanh',
          'Hấp đậu xanh trong nồi hấp khoảng 20 phút đến khi mềm',
          'Nghiền đậu xanh nóng thành nhuyễn mịn',
        ],
      },
      {
        title: 'Chuẩn bị gia vị',
        details: [
          'Băm nhỏ tỏi và hành tím',
          'Phi hành tỏi với dầu ăn đến khi vàng thơm',
          'Vớt hành tỏi phi ra để ráo dầu',
          'Thái hành lá thành sợi mỏng dài khoảng 2cm',
          'Pha nước mắm chua ngọt: 3 phần nước mắm + 2 phần đường + 1 phần nước cốt chanh + ớt thái nhỏ (tùy khẩu vị)',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm nhân tôm',
        details: [
          'Phi thơm tỏi băm',
          'Xào tôm khô với dầu ăn',
          'Nêm muối, tiêu vừa ăn',
          'Để nguội',
        ],
      },
      {
        title: 'Làm đậu xanh',
        details: [
          'Trộn đậu xanh nghiền với nước cốt dừa',
          'Nêm đường, muối vừa ăn',
          'Đánh nhuyễn mịn',
        ],
      },
    ],
    cooking: [
      {
        title: 'Hấp bánh',
        details: [
          'Đặt khuôn bánh bèo lên nồi hấp',
          'Đổ bột vào khuôn (2/3 khuôn)',
          'Hấp 3-4 phút đến khi bánh trong',
          'Gỡ bánh ra đĩa',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện bánh',
        details: [
          'Xếp bánh ra đĩa theo hình tròn',
          'Phết một lớp đậu xanh mỏng lên mặt bánh',
          'Rắc tôm khô xào lên trên',
          'Rắc hành phi, tỏi phi',
          'Rắc hành lá thái nhỏ',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Ăn kèm nước mắm pha chua ngọt',
          'Có thể thêm ớt tươi tùy khẩu vị',
          'Dùng nóng để cảm nhận đầy đủ hương vị',
        ],
      },
    ],
    tips: [
      'Bột phải được khuấy kỹ, không vón cục',
      'Khuôn bánh phải được lau sạch và thoa dầu mỏng trước mỗi lần đổ bột',
      'Hấp bánh với lửa vừa để bánh chín đều và không bị rách',
      'Đậu xanh phải nghiền thật mịn để tạo độ mềm mịn',
      'Tôm khô nên xay vừa phải, không quá nhỏ để giữ được độ giòn',
    ],
    storage: [
      'Bánh nên ăn ngay khi hấp xong',
      'Nếu cần bảo quản, để nguội hoàn toàn rồi đậy kín',
      'Có thể giữ trong tủ lạnh đến 24 giờ',
      'Hâm nóng bằng lò vi sóng hoặc hấp lại trước khi ăn',
      'Nhân tôm khô có thể bảo quản riêng trong tủ lạnh đến 1 tuần',
    ],
  },
};

export default banhBeoBienHoa;
