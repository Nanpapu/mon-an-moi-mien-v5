import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const phoHaNoi: Recipe = {
    id: '01_01',
    name: 'Phở Hà Nội',
    region: 'Miền Bắc',
    image: 'images/01/01_01.jpg',
    cookingTime: 480,
    difficulty: 4,
    servings: 6,
    ingredients: [
      {
        name: 'Xương ống bò',
        amount: 2,
        unit: UNITS.WEIGHT.KILOGRAM,
      },
      {
        name: 'Thịt bò phi lê (thăn, nạm hoặc gầu)',
        amount: 600,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Bánh phở tươi số 1',
        amount: 1.2,
        unit: UNITS.WEIGHT.KILOGRAM,
      },
      {
        name: 'Hành tây',
        amount: 2,
        unit: UNITS.QUANTITY.PIECE,
      },
      {
        name: 'Gừng già',
        amount: 100,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Hoa hồi',
        amount: 4,
        unit: UNITS.QUANTITY.PIECE,
      },
      {
        name: 'Quế cây',
        amount: 2,
        unit: UNITS.QUANTITY.STICK,
      },
      {
        name: 'Thảo quả',
        amount: 2,
        unit: UNITS.QUANTITY.PIECE,
      },
      {
        name: 'Đinh hương',
        amount: 5,
        unit: UNITS.QUANTITY.PIECE,
      },
      {
        name: 'Ngò gai',
        amount: 1,
        unit: UNITS.QUANTITY.BUNCH,
      },
      {
        name: 'Hành lá',
        amount: 100,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Muối hạt',
        amount: 2,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Nước mắm ngon',
        amount: 2,
        unit: UNITS.VOLUME.TABLESPOON,
      },
      {
        name: 'Đường phèn',
        amount: 50,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Bột ngọt (tuỳ thích)',
        amount: 1,
        unit: UNITS.VOLUME.TEASPOON,
      },
      {
        name: 'Giá đỗ tươi',
        amount: 300,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Rau quế',
        amount: 100,
        unit: UNITS.WEIGHT.GRAM,
      },
      {
        name: 'Chanh tươi',
        amount: 2,
        unit: UNITS.QUANTITY.FRUIT,
      },
      {
        name: 'Ớt tươi',
        amount: 4,
        unit: UNITS.QUANTITY.PIECE,
      },
    ],
    instructions: {
      preparation: [
        'Xương bò rửa sạch với nước muối loãng, chần qua nước sôi 3 phút để loại bỏ bẩn và mùi hôi',
        'Hành tây bóc vỏ, nướng trực tiếp trên lửa đến khi thơm và hơi cháy vỏ ngoài',
        'Gừng rửa sạch, đập dập, nướng trực tiếp trên lửa cho thơm',
        'Rang các gia vị (hoa hồi, quế, thảo quả, đinh hương) trên chảo khô với lửa nhỏ đến khi thơm (khoảng 2-3 phút), cho vào túi vải buộc kín',
        'Thịt bò để đông lạnh 30 phút để dễ thái, thái thật mỏng theo thớ',
        'Hành lá rửa sạch, thái nhỏ',
        'Rửa sạch các loại rau ăn kèm, để ráo',
      ],
      broth: [
        'Đun sôi 5 lít nước trong nồi lớn, cho xương đã chần vào',
        'Khi nước sôi lại, hạ lửa nhỏ vừa, cho túi gia vị, hành tây và gừng nướng vào',
        'Ninh trong 5-6 tiếng, thường xuyên hớt bọt để nước dùng trong',
        'Sau 4 tiếng, nêm nước mắm, muối, đường phèn. Nếm thử và điều chỉnh vị',
      ],
      assembly: [
        'Trần bánh phở qua nước sôi khoảng 10 giây',
        'Xếp bánh phở vào tô, xếp thịt bò sống lên trên',
        'Chan nước dùng đang sôi vào tô (nước phải thật sôi để chín thịt)',
        'Rắc hành lá, ngò gai lên trên',
      ],
      serving: [
        'Dùng nóng, ăn kèm giá đỗ, rau quế, chanh, ớt tùy khẩu vị',
        'Có thể thêm tương đen, tương ớt theo sở thích',
      ],
      tips: [
        'Nước dùng phải nấu với lửa liu riu để nước trong và ngọt',
        'Xương phải chần qua nước sôi để nước dùng trong',
        'Túi gia vị phải rang thơm trước khi cho vào nấu',
        'Thịt bò phải thái mỏng và để đông lạnh trước khi thái',
        'Bánh phở phải trụng vừa tới, không được để mềm',
        'Hành tây và gừng phải nướng thơm để tạo hương vị đặc trưng',
      ],
      storage: [
        'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
        'Thịt bò sống phải bảo quản trong ngăn đông, dùng trong vòng 1 tuần',
        'Bánh phở tươi nên mua mới và dùng trong ngày',
        'Rau ăn kèm phải rửa sạch và để ráo trước khi cho vào tủ lạnh',
        'Gia vị đã rang nên bảo quản trong hộp kín, tránh ẩm',
      ],
    },
  }
;
export default phoHaNoi;