import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const comLamThaiNguyen: Recipe = {
  id: '19_01',
  name: 'Cơm Lam Thái Nguyên',
  region: 'Miền Bắc',
  image: 'images/19/19_01.jpg',
  cookingTime: 60,
  difficulty: 2,
  servings: 4,
  category: 'vegetarian',
  ingredients: [
    {
      name: 'Gạo nếp',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Gạo nếp cái hoa vàng hoặc nếp Thái',
      type: 'grain/rice',
    },
    {
      name: 'Ống tre non',
      amount: 4,
      unit: UNITS.QUANTITY.PIECE,
      note: 'Dài khoảng 30-35cm, đường kính 5-6cm',
      type: 'other',
    },
    {
      name: 'Lá dong',
      amount: 8,
      unit: UNITS.QUANTITY.LEAF,
      note: 'Rửa sạch, lau khô',
      type: 'vegetable/leafy',
    },
    {
      name: 'Muối',
      amount: 1,
      unit: UNITS.VOLUME.TEASPOON,
      type: 'spice/powder',
    },
    {
      name: 'Nước suối',
      amount: 600,
      unit: UNITS.VOLUME.MILLILITER,
      note: 'Nước sạch hoặc nước suối',
      type: 'other',
    },
    {
      name: 'Vừng (mè) trắng',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Rang vàng',
      type: 'spice/dried',
    },
    {
      name: 'Muối vừng',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      note: 'Để chấm khi ăn',
      type: 'spice/powder',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Chuẩn bị ống tre',
        details: [
          'Chọn ống tre non, tươi',
          'Cắt thành các ống dài 30-35cm',
          'Cạo sạch lớp măng bên ngoài',
          'Rửa sạch, để ráo',
        ],
      },
      {
        title: 'Chuẩn bị lá dong',
        details: [
          'Rửa sạch lá dong',
          'Lau khô',
          'Cắt theo kích thước vừa với ống tre',
        ],
      },
      {
        title: 'Chuẩn bị gạo',
        details: [
          'Vo gạo nếp thật sạch',
          'Ngâm trong nước 4-6 tiếng hoặc qua đêm',
          'Vớt ra để ráo',
        ],
      },
    ],
    processing: [
      {
        title: 'Làm muối vừng',
        details: [
          'Rang vừng trắng đến vàng thơm',
          'Giã nhuyễn vừng với muối theo tỷ lệ 2:1',
          'Để riêng để chấm khi ăn',
        ],
      },
    ],
    assembly: [
      {
        title: 'Đóng cơm vào ống',
        details: [
          'Lót lá dong vào trong ống tre',
          'Cho gạo đã ngâm vào ống (khoảng 2/3 ống)',
          'Đổ nước vào (nước ngập hơn mặt gạo 1cm)',
          'Thêm 1/4 muỗng cà phê muối vào mỗi ống',
          'Nút kín hai đầu ống bằng lá dong',
        ],
      },
    ],
    cooking: [
      {
        title: 'Nướng cơm lam',
        details: [
          'Chuẩn bị bếp than hồng',
          'Xếp các ống tre nghiêng 45 độ',
          'Nướng đều các mặt khoảng 45-50 phút',
          'Thỉnh thoảng xoay ống để cơm chín đều',
          'Kiểm tra độ chín bằng cách ấn vào ống tre (nếu mềm là đã chín)',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Để nguội khoảng 10 phút',
          'Chẻ ống tre theo chiều dọc',
          'Lột lá dong ra',
          'Cắt cơm thành khoanh tròn dày 2-3cm',
        ],
      },
      {
        title: 'Dùng kèm',
        details: [
          'Muối vừng',
          'Có thể ăn kèm gà nướng hoặc thịt nướng',
          'Uống với trà xanh Thái Nguyên',
        ],
      },
    ],
    tips: [
      'Chọn ống tre non để cơm có hương vị thơm đặc trưng',
      'Ngâm gạo đủ thời gian để cơm được dẻo',
      'Không cho quá nhiều nước để cơm không bị nhão',
      'Nướng bằng than hoa để có mùi thơm đặc trưng',
      'Nút hai đầu ống phải thật kín để giữ độ ẩm',
      'Nên ăn khi cơm còn ấm để cảm nhận hương vị tốt nhất',
    ],
    storage: [
      'Cơm lam nên ăn trong ngày nấu',
      'Nếu cần bảo quản, để nguyên trong ống tre',
      'Có thể giữ trong tủ lạnh đến 2 ngày',
      'Hâm nóng bằng lò vi sóng hoặc nướng lại trước khi ăn',
      'Muối vừng có thể bảo quản trong hộp kín đến 2 tuần',
    ],
  },
};

export default comLamThaiNguyen;
