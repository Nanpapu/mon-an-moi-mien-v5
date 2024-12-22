import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const comTamSuonBiCha: Recipe = {
  id: '79_01',
  name: 'Cơm Tấm Sườn Bì Chả',
  region: 'Miền Nam',
  image: 'images/79/79_01.jpg',
  cookingTime: 90,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Sườn heo non',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Da heo (làm bì)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Thịt heo xay (làm chả)',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Gạo tấm',
      amount: 400,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/rice',
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Tỏi',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Nước mắm ngon',
      amount: 100,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Đường cát trắng',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'other',
    },
    {
      name: 'Bột ngọt',
      amount: 10,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Tiêu đen',
      amount: 15,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Dầu hào',
      amount: 30,
      unit: UNITS.VOLUME.MILLILITER,
      type: 'spice/sauce',
    },
    {
      name: 'Mỡ heo (làm mỡ hành)',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Dưa leo',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Cà chua',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/fruit',
    },
    {
      name: 'Đồ chua (cà rốt, củ cải)',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế sườn',
        details: [
          'Rửa sườn với nước muối loãng',
          'Thái sườn thành từng miếng vừa ăn (khoảng 5-7cm)',
          'Dùng dao đập nhẹ để làm mềm thịt',
          'Ướp sườn với: 2 muỗng canh nước mắm + 1 muỗng canh đường + 2 muỗng cà phê bột ngọt + 1/2 muỗng cà phê tiêu + hành tỏi băm',
          'Để sườn ướp ít nhất 2 tiếng trong tủ lạnh',
        ],
      },
      {
        title: 'Chuẩn bị bì',
        details: [
          'Luộc da heo trong nước sôi có thêm gừng để khử mùi',
          'Ngâm da heo trong nước đá để giòn',
          'Cạo sạch mỡ thừa bám trên da',
          'Thái da heo thành sợi mỏng dài khoảng 3-4cm',
          'Trộn bì với một ít muối, tiêu và mỡ hành',
        ],
      },
      {
        title: 'Ướp thịt làm chả',
        details: [
          'Băm nhỏ hành tỏi',
          'Trộn thịt xay với: 2 muỗng canh nước mắm + 1 muỗng cà phê đường + 1 muỗng cà phê bột ngọt + 1/2 muỗng cà phê tiêu + hành tỏi băm',
          'Thêm 1 muỗng canh dầu hào để tạo màu đẹp',
          'Trộn đều và để thịt ướp 30 phút cho ngấm gia vị',
          'Đánh nhuyễn thịt để tạo độ kết dính',
        ],
      },
      {
        title: 'Chuẩn bị phần phụ',
        details: [
          'Thái mỏng dưa leo và cà chua thành lát tròn',
          'Làm đồ chua: thái sợi cà rốt và củ cải, ngâm với giấm đường',
          'Phi hành mỡ: phi hành tím với mỡ heo đến vàng thơm',
          'Pha nước mắm: 3 phần nước mắm + 2 phần đường + 2 phần nước ấm + 1 phần giấm + ớt thái nhỏ',
        ],
      },
    ],
    cooking: [
      {
        title: 'Nấu cơm tấm',
        details: [
          'Vo sạch gạo tấm, để ráo nước',
          'Cho gạo vào nồi cơm điện với tỷ lệ nước 1:1',
          'Thêm một chút muối và dầu ăn',
          'Nấu cơm đến khi chín mềm nhưng không nhão',
        ],
      },
      {
        title: 'Nướng sườn',
        details: [
          'Làm nóng bếp than hoặc lò nướng ở nhiệt độ 180°C',
          'Xếp sườn lên vỉ nướng',
          'Phết dầu ăn đều lên sườn trong quá trình nướng',
          'Nướng mỗi mặt khoảng 7-10 phút',
          'Phết thêm mật ong pha với nước mắm lên sườn trong 2 phút cuối để tạo màu đẹp',
        ],
      },
      {
        title: 'Làm chả',
        details: [
          'Nặn thịt đã ướp thành miếng tròn dẹt dày khoảng 1cm',
          'Làm nóng chảo với dầu ăn vừa phải',
          'Chiên chả với lửa vừa',
          'Chiên mỗi mặt 3-4 phút đến khi vàng đều',
          'Vớt ra để ráo dầu trên giấy thấm',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện',
        details: [
          'Xới cơm tấm ra dĩa',
          'Xếp sườn nướng, chả chiên lên trên',
          'Thêm bì và mỡ hành',
          'Trang trí với dưa leo, cà chua thái lát',
          'Thêm đồ chua bên cạnh',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Dùng kèm nước mắm pha',
          'Có thể thêm ớt tươi tùy khẩu vị',
          'Ăn nóng để cảm nhận đầy đủ hương vị',
        ],
      },
    ],
    tips: [
      'Chọn sườn non có thịt hồng tươi, không có mùi lạ',
      'Nướng sườn với lửa vừa để thịt chín đều không bị cháy',
      'Chả nên chiên với lửa nhỏ để chín đều không bị khô',
      'Bì phải thái mỏng và trộn đều với mỡ hành để ngon',
      'Cơm tấm nấu vừa chín tới, không nhão',
    ],
    storage: [
      'Sườn nướng có thể bảo quản trong tủ lạnh 2-3 ngày',
      'Chả chiên để nguội hoàn toàn mới cho vào tủ lạnh',
      'Bì trộn nên ăn trong ngày',
      'Đồ chua có thể giữ trong tủ lạnh đến 1 tuần',
      'Cơm tấm nên nấu mới mỗi bữa',
    ],
  },
};

export default comTamSuonBiCha;
