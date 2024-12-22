import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const banhCungBacLieu: Recipe = {
  id: '95_01',
  name: 'Bánh Cống Bạc Liêu',
  region: 'Miền Nam',
  image: 'images/95/95_01.jpg',
  cookingTime: 60,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Tôm tươi',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shrimp',
      note: 'Tôm sú hoặc tôm thẻ, bóc vỏ, giữ lại đuôi',
    },
    {
      name: 'Thịt heo xay',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
      note: 'Thịt nạc, băm nhuyễn',
    },
    {
      name: 'Đậu xanh cà vỏ',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
      note: 'Đậu xanh đã xát vỏ, ngâm mềm',
    },
    {
      name: 'Bột gạo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Bột năng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Tỏi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
    },
    {
      name: 'Nước mắm',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
    },
    {
      name: 'Tiêu đen',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
    },
    {
      name: 'Dầu ăn',
      amount: 500,
      unit: UNITS.VOLUME.MILLILITER,
      note: 'Dùng để chiên bánh',
    },
    {
      name: 'Rau sống các loại',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Xà lách, húng quế, rau răm',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế đậu xanh',
        details: [
          'Ngâm đậu xanh trong nước lạnh 4 tiếng hoặc qua đêm',
          'Đãi sạch vỏ đậu và rửa lại với nước',
          'Để ráo nước hoàn toàn',
          'Xay nhuyễn thành bột mịn bằng máy xay',
          'Để riêng trong tô',
        ],
      },
      {
        title: 'Sơ chế tôm',
        details: [
          'Bóc vỏ tôm nhưng giữ lại phần đuôi',
          'Rửa sạch với nước muối loãng',
          'Để ráo nước trên rổ',
          'Ướp tôm với 1/2 muỗng cà phê tiêu và 1/2 muỗng canh nước mắm',
          'Để tôm thấm gia vị 15 phút',
        ],
      },
      {
        title: 'Sơ chế gia vị',
        details: [
          'Bóc vỏ hành tím và tỏi',
          'Băm nhuyễn một nửa số hành tím và tỏi',
          'Thái lát mỏng phần hành tím và tỏi còn lại',
          'Để riêng phần băm và phần thái',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm bột bánh',
        details: [
          'Trộn đều bột gạo với bột năng trong tô lớn',
          'Thêm từ từ 400ml nước ấm (40°C) vào hỗn hợp bột',
          'Khuấy đều tay theo một chiều đến khi hỗn hợp sệt mịn',
          'Để bột nghỉ 30 phút cho bột nở nhẹ',
          'Kiểm tra độ sệt, nếu quá đặc thì thêm chút nước ấm',
        ],
      },
      {
        title: 'Làm nhân bánh',
        details: [
          'Trộn thịt xay với hành tỏi băm nhuyễn',
          'Nêm 1 muỗng canh nước mắm, 1/2 muỗng cà phê tiêu',
          'Trộn đều và ướp 15 phút cho thịt thấm gia vị',
          'Nếm thử và điều chỉnh gia vị nếu cần',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên bánh',
        details: [
          'Đun nóng dầu trong chảo sâu lòng đến 180°C',
          'Làm nóng khuôn bánh cống trong dầu',
          'Múc bột vào khuôn đến 2/3 độ cao',
          'Đặt tôm vào giữa, đầu tôm hướng lên',
          'Phủ một lớp bột đậu xanh và thịt lên trên',
          'Chiên với lửa vừa khoảng 5-7 phút đến khi vàng đều',
          'Vớt ra để ráo dầu trên giấy thấm',
        ],
      },
    ],
    sauce: [
      {
        title: 'Pha nước mắm chấm',
        details: [
          'Cho 3 muỗng canh nước mắm vào tô',
          'Thêm 3 muỗng canh đường',
          'Thêm 2 muỗng canh nước cốt chanh',
          'Cho 1 muỗng canh ớt băm và 2 tép tỏi băm',
          'Khuấy đều cho đường tan hoàn toàn',
          'Nếm thử và điều chỉnh vị chua ngọt theo ý thích',
        ],
      },
    ],
    assembly: [
      {
        title: 'Trình bày',
        details: [
          'Xếp bánh cống ra đĩa có lót giấy thấm dầu',
          'Bày rau sống và các loại rau thơm xung quanh',
          'Cắt dưa leo thành lát mỏng vừa ăn',
          'Đặt chén nước mắm pha chua ngọt bên cạnh',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Dùng bánh nóng giòn',
          'Chấm bánh với nước mắm pha',
          'Ăn kèm với rau sống và dưa leo',
          'Có thể cuốn bánh với rau trong bánh tráng',
        ],
      },
    ],
    tips: [
      'Bột phải được để nghỉ đủ thời gian để bánh giòn',
      'Dầu chiên phải đủ nóng (180-190°C) để bánh không bị ngấm dầu',
      'Không chiên quá nhiều bánh cùng lúc để dầu không bị nguội',
      'Tôm nên để nguyên đuôi để tăng thẩm mỹ',
      'Bột đậu xanh phải xay thật mịn để bánh đẹp mắt',
      'Nên ăn bánh khi còn nóng để cảm nhận độ giòn',
    ],
    storage: [
      'Bánh cống nên ăn ngay khi chiên xong',
      'Nếu cần bảo quản, để nguội hoàn toàn rồi cho vào hộp kín',
      'Có thể giữ trong tủ lạnh tối đa 24 giờ',
      'Khi ăn lại, hâm nóng bằng lò nướng hoặc nồi chiên không dầu',
      'Bột pha sẵn có thể bảo quản trong tủ lạnh đến 24 giờ',
      'Nước mắm pha có thể giữ trong tủ lạnh đến 1 tuần',
    ],
  },
};
export default banhCungBacLieu;
