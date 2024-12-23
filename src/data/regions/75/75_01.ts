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
        title: 'Sơ chế bột',
        details: [
          'Bột gạo: Chọn loại bột gạo xay mịn, không vón cục, có màu trắng tự nhiên',
          'Bột năng: Rây qua rây mịn để đảm bảo không có cục',
          'Nước cốt dừa: Chọn loại nguyên chất, béo, không có mùi lạ',
          'Chuẩn bị khuôn bánh bèo: Rửa sạch, lau khô, phết một lớp dầu mỏng',
        ],
      },
      {
        title: 'Sơ chế tôm khô',
        details: [
          'Chọn tôm khô nguyên con, màu đỏ cam tự nhiên, không bị mốc',
          'Nhặt bỏ râu và chân tôm',
          'Rửa nhanh qua nước ấm 40°C',
          'Ngâm trong nước ấm 15 phút cho tôm nở mềm',
          'Vớt ra, để ráo nước trên rổ',
          'Giã nhẹ trong cối đá (không giã quá nhỏ để giữ độ dai)',
        ],
      },
      {
        title: 'Sơ chế đậu xanh',
        details: [
          'Chọn đậu xanh không vỏ, hạt đều màu, không bị đen',
          'Ngâm đậu trong nước ấm 4 tiếng hoặc qua đêm',
          'Vớt ra, rửa sạch với nước lạnh',
          'Để ráo nước hoàn toàn trước khi hấp',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm bột bánh',
        details: [
          'Trộn đều 300g bột gạo với 50g bột năng trong tô lớn',
          'Thêm từ từ 450ml nước ấm (40°C), khuấy đều theo một chiều',
          'Thêm 100ml nước cốt dừa, khuấy đều',
          'Thêm 1/2 muỗng cà phê muối, khuấy kỹ',
          'Lọc bột qua rây mịn 2 lần để loại bỏ cục vón',
          'Để bột nghỉ 30 phút ở nhiệt độ phòng, đậy khăn ẩm',
          'Khuấy nhẹ lại trước khi đổ bánh',
        ],
      },
      {
        title: 'Làm nhân đậu xanh',
        details: [
          'Hấp đậu xanh trong xửng hơi 20 phút đến khi mềm',
          'Giã nhuyễn đậu xanh nóng trong cối đá',
          'Nêm 1/4 muỗng cà phê muối',
          'Vo thành viên nhỏ bằng đầu đũa',
          'Để riêng trong đĩa có đậy khăn ẩm',
        ],
      },
      {
        title: 'Xào tôm khô',
        details: [
          'Phi thơm tỏi băm với 2 muỗng canh dầu ăn',
          'Cho tôm khô vào xào với lửa nhỏ',
          'Nêm 1/2 muỗng cà phê đường, 1/4 muỗng cà phê tiêu',
          'Xào đến khi tôm thơm và hơi khô (khoảng 3-4 phút)',
          'Để nguội, cho vào hộp kín',
        ],
      },
    ],
    cooking: [
      {
        title: 'Đổ bánh',
        details: [
          'Đun nước trong nồi hấp đến khi sôi già',
          'Lau sạch khuôn bánh, phết một lớp dầu thật mỏng',
          'Khuấy đều hỗn hợp bột trước mỗi lần đổ',
          'Múc bột vào khuôn (2/3 khuôn)',
          'Xếp khuôn vào nồi hấp đang sôi',
          'Hấp với lửa vừa trong 3-4 phút đến khi bánh trong',
          'Kiểm tra độ chín bằng đũa (không dính bột)',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện bánh',
        details: [
          'Gỡ nhẹ bánh ra đĩa khi còn nóng',
          'Xếp bánh thành hình tròn hoặc theo hàng',
          'Đặt viên đậu xanh vào giữa mỗi bánh',
          'Rắc đều tôm khô xào lên trên',
          'Rắc hành phi và tỏi phi',
          'Rưới đều nước mỡ hành nóng',
          'Trang trí với ít hành lá thái nhỏ',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Dùng khi bánh còn ấm nóng',
          'Chan nước mắm pha chua ngọt vừa đủ ướt bánh',
          'Có thể thêm ớt tươi cắt nhỏ tùy khẩu vị',
          'Dùng muỗng nhỏ để thưởng thức trọn vẹn từng chiếc bánh',
        ],
      },
    ],
    tips: [
      'Bột phải được đánh thật kỹ và để nghỉ đủ thời gian để bánh dai mềm',
      'Nước hấp phải sôi già trước khi đặt khuôn vào để bánh chín đều',
      'Không đổ bột quá dày sẽ làm bánh bị dày và không ngon',
      'Lau dầu khuôn thật mỏng và đều để bánh không bị dính',
      'Hành phi phải vàng đều và để ráo dầu kỹ để giữ được độ giòn',
      'Đậu xanh không nên nêm quá mặn vì sẽ ăn kèm với nước mắm',
      'Nên làm bánh và ăn ngay để cảm nhận được hương vị tốt nhất',
      'Khuôn phải được làm nóng trước khi đổ bột để bánh chín đều',
    ],
    storage: [
      'Bột đã pha nên sử dụng trong ngày',
      'Bánh đã hấp có thể bảo quản trong tủ lạnh 1-2 ngày',
      'Hành phi để nơi khô ráo, trong hộp kín đến 3 ngày',
      'Đậu xanh đã hấp có thể bảo quản tủ lạnh đến 3 ngày',
      'Tôm khô xào nên làm mới mỗi ngày để giữ độ giòn',
      'Khi hâm nóng bánh, hấp lại 1-2 phút để bánh không bị khô',
    ],
  },
};

export default banhBeoBienHoa;
