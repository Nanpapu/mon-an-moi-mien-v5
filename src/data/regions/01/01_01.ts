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
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Xương ống bò',
      amount: 2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'meat/beef',
    },
    {
      name: 'Thịt bò phi lê (thăn, nạm hoặc gầu)',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/beef',
    },
    {
      name: 'Bánh phở tươi số 1',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
    },
    {
      name: 'Hành tây',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/root',
    },
    {
      name: 'Gừng già',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Hoa hồi',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Quế cây',
      amount: 2,
      unit: UNITS.QUANTITY.STICK,
      type: 'spice/dried',
    },
    {
      name: 'Thảo quả',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Đinh hương',
      amount: 5,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/dried',
    },
    {
      name: 'Ngò gai',
      amount: 1,
      unit: UNITS.QUANTITY.BUNCH,
      type: 'vegetable/leafy',
    },
    {
      name: 'Hành lá',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Muối hạt',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/powder',
    },
    {
      name: 'Nước mắm ngon',
      amount: 2,
      unit: UNITS.VOLUME.TABLESPOON,
      type: 'spice/sauce',
    },
    {
      name: 'Đường phèn',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/powder',
    },
    {
      name: 'Bột ngọt (tuỳ thích)',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
      type: 'spice/powder',
    },
    {
      name: 'Giá đỗ tươi',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Rau quế',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
    {
      name: 'Chanh tươi',
      amount: 2,
      unit: UNITS.QUANTITY.FRUIT,
      type: 'vegetable/fruit',
    },
    {
      name: 'Ớt tươi',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế xương bò',
        details: [
          'Rửa sạch xương với nước muối loãng',
          'Chần qua nước sôi 3 phút để loại bỏ bẩn và mùi hôi',
          'Vớt ra, rửa lại bằng nước lạnh',
          'Để ráo nước',
        ],
      },
      {
        title: 'Chuẩn bị thịt bò',
        details: [
          'Thịt bò để đông lạnh 30 phút để dễ thái',
          'Thái thật mỏng theo thớ (khoảng 2mm)',
          'Ướp thịt với chút muối, tiêu (nếu muốn)',
          'Để trong tủ lạnh cho đến khi dùng',
        ],
      },
      {
        title: 'Chuẩn bị gia vị nấu nước dùng',
        details: [
          'Hành tây bóc vỏ, nướng trực tiếp trên lửa đến khi thơm và hơi cháy vỏ ngoài',
          'Gừng rửa sạch, đập dập, nướng trực tiếp trên lửa cho thơm',
          'Rang các gia vị (hoa hồi, quế, thảo quả, đinh hương) trên chảo khô với lửa nhỏ đến khi thơm (2-3 phút)',
          'Cho gia vị đã rang vào túi vải buộc kín',
        ],
      },
      {
        title: 'Chuẩn bị rau ăn kèm',
        details: [
          'Hành lá rửa sạch, thái nhỏ',
          'Ngò gai nhặt lá, rửa sạch',
          'Giá đỗ nhặt bỏ rễ, rửa sạch',
          'Rau quế nhặt lá, rửa sạch',
          'Chanh rửa sạch, thái múi cau',
          'Ớt tươi rửa sạch, thái lát mỏng',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 5 lít nước trong nồi lớn',
          'Cho xương đã chần vào',
          'Khi nước sôi lại, hạ lửa nhỏ vừa',
          'Cho túi gia vị, hành tây và gừng nướng vào',
          'Ninh trong 5-6 tiếng, thường xuyên hớt bọt để nước dùng trong',
          'Sau 4 tiếng, nêm nước mắm, muối, đường phèn',
          'Nếm thử và điều chỉnh vị sao cho vừa mặn, vừa ngọt, có độ umami',
        ],
      },
    ],
    assembly: [
      {
        title: 'Chuẩn bị bánh phở',
        details: [
          'Trần bánh phở qua nước sôi khoảng 10-15 giây',
          'Vớt ra ngay, để ráo',
          'Chia bánh phở vào từng tô',
        ],
      },
      {
        title: 'Hoàn thiện tô phở',
        details: [
          'Xếp thịt bò sống lên trên bánh phở',
          'Rắc hành lá, ngò gai đã thái nhỏ',
          'Chan nước dùng đang sôi vào tô (nước phải thật sôi để chín thịt)',
          'Thêm chút tiêu xay nếu thích',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Dùng khi còn thật nóng',
          'Thêm giá đỗ, rau quế tùy khẩu vị',
          'Có thể thêm tương đen, tương ớt theo sở thích',
          'Nặn chanh, thêm ớt tươi tùy thích',
        ],
      },
    ],
    tips: [
      'Nước dùng phải nấu với lửa liu riu để nước trong và ngọt',
      'Xương phải chần qua nước sôi để nước dùng trong',
      'Túi gia vị phải rang thơm trước khi cho vào nấu',
      'Thịt bò phải thái mỏng và để đông lạnh trước khi thái',
      'Bánh phở phải trụng vừa tới, không được để mềm',
      'Hành tây và gừng phải nướng thơm để tạo hương vị đặc trưng',
      'Nước dùng phải thật sôi khi chan vào tô để chín thịt bò',
      'Không nên cho quá nhiều gia vị vào vì sẽ làm mất đi hương vị nguyên bản của phở',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt bò sống phải bảo quản trong ngăn đông, dùng trong vòng 1 tuần',
      'Bánh phở tươi nên mua mới và dùng trong ngày',
      'Rau ăn kèm phải rửa sạch và để ráo trước khi cho vào tủ lạnh',
      'Gia vị đã rang nên bảo quản trong hộp kín, tránh ẩm',
      'Khi hâm nóng nước dùng, đun sôi kỹ trước khi dùng',
    ],
  },
};
export default phoHaNoi;
