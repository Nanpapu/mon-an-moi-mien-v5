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
          'Chọn ống tre non Bát Độ (loại tre đặc trưng Thái Nguyên), độ tuổi 3-4 tháng',
          'Đo và cắt thành các ống dài 30-35cm, đường kính 5-6cm',
          'Cạo sạch lớp măng bên ngoài bằng dao sắc',
          'Chà rửa kỹ bằng bàn chải mềm và nước muối loãng',
          'Ngâm trong nước vo gạo 15 phút để khử mùi hăng',
          'Để ráo tự nhiên hoặc lau khô bằng khăn sạch',
          'Kiểm tra kỹ các mắt tre, đảm bảo không bị nứt hoặc thủng',
        ],
      },
      {
        title: 'Chuẩn bị gạo nếp',
        details: [
          'Chọn gạo nếp cái hoa vàng Thái Nguyên (vụ mùa) hoặc nếp Thái',
          'Vo gạo 3 lần với nước sạch đến khi nước trong',
          'Ngâm gạo trong nước ấm 40°C trong 4-6 giờ',
          'Để ráo nư���c hoàn toàn trong rổ tre 15 phút',
          'Trộn gạo với 1/4 muỗng cà phê muối/100g gạo',
          'Để gạo thấm muối 10 phút trước khi cho vào ống',
        ],
      },
      {
        title: 'Chuẩn bị lá dong',
        details: [
          'Chọn lá dong tươi, không bị rách hoặc úa vàng',
          'Rửa sạch hai mặt lá bằng nước muối loãng',
          'Lau khô bằng khăn sạch',
          'Cắt bỏ phần gân giữa cứng',
          'Cắt thành những miếng vừa với đường kính ống tre',
          'Để riêng phần lá dùng nút hai đầu ống',
        ],
      },
      {
        title: 'Làm muối vừng',
        details: [
          'Rang vừng trắng ở 150°C trong 5-7 phút đến khi vàng thơm',
          'Đảo đều tay để vừng không bị cháy',
          'Để nguội hoàn toàn trên khay rộng',
          'Giã nhuyễn vừng với muối tỷ lệ 2:1 trong cối đá',
          'Có thể thêm ít ớt khô giã nhuyễn tùy khẩu vị',
          'Đóng trong hũ thủy tinh kín',
        ],
      },
    ],
    assembly: [
      {
        title: 'Đóng cơm vào ống',
        details: [
          'Lót 2 lớp lá dong vào trong ống tre (tránh gạo dính vào thành ống)',
          'Cho gạo đã ngâm vào ống (đầy 2/3 ống)',
          'Đổ nước ấm 40°C vào (ngập hơn mặt gạo 1-1.2cm)',
          'Lắc nhẹ ống để gạo và nước trộn đều',
          'Gấp mép lá dong phía trên lại',
          'Nút chặt hai đầu ống bằng lá dong (dùng dây chuối buộc nếu cần)',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chuẩn bị bếp nướng',
        details: [
          'Dùng than gỗ thiên nhiên (tốt nhất là than củi vườn)',
          'Xếp than thành hàng dài, đốt đến khi than đỏ đều',
          'Tạo giá đỡ bằng gạch hoặc khung sắt cao 20cm',
          'Đảm bảo than cháy đều và ổn định',
        ],
      },
      {
        title: 'Nướng cơm lam',
        details: [
          'Xếp các ống tre nghiêng 45 độ trên giá nướng',
          'Giữ khoảng cách 3-4cm giữa các ống',
          'Nướng với nhiệt độ than ổn định (kiểm tra bằng tay đưa gần than 5 giây)',
          'Xoay ống mỗi 10-12 phút để cơm chín đều',
          'Tổng thời gian nướng 45-50 phút',
          'Kiểm tra độ chín bằng cách ấn nhẹ vào ống (khi mềm là đã chín)',
          'Để ý mùi thơm của cơm lam tỏa ra (dấu hiệu cơm gần chín)',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức đúng cách',
        details: [
          'Để nguội tự nhiên 10-15 phút (cơm sẽ dẻo hơn)',
          'Chẻ dọc ống tre bằng dao sắc hoặc rìu nhỏ',
          'Lột nhẹ lá dong ra, tránh làm vỡ cơm',
          'Cắt cơm thành khoanh tròn dày 2-3cm',
          'Xếp cơm lên đĩa lá chuối tươi',
          'Rắc ít muối vừng lên trên',
          'Dùng kèm trà xanh Tân Cương để cảm nhận trọn vẹn hương vị',
        ],
      },
    ],
    tips: [
      'Ống tre phải là tre non 3-4 tháng tuổi để có vị ngọt tự nhiên',
      'Thời gian ngâm gạo rất quan trọng, ảnh hưởng trực tiếp đến độ dẻo của cơm',
      'Nước đổ vào ống phải là nước ấm để cơm chín đều',
      'Khoảng cách từ than đến ống tre quyết định độ chín của cơm',
      'Không nướng quá lâu sẽ làm cơm bị khô và mất đi vị ngọt tự nhiên',
      'Nên ăn trong vòng 2 giờ sau khi nướng để cảm nhận trọn vẹn hương vị',
      'Muối vừng nên giã nhuyễn vừa phải, không nên quá mịn',
      'Trà xanh Tân Cương là lựa chọn hoàn hảo để thưởng thức cùng cơm lam',
    ],
    storage: [
      'Cơm lam nên ăn trong vòng 4-6 giờ sau khi nướng',
      'Nếu cần bảo quản, giữ nguyên trong ống tre và bọc kín bằng giấy bạc',
      'Có thể bảo quản trong tủ lạnh tối đa 48 giờ ở nhiệt độ 4-6°C',
      'Trước khi ăn lại, nướng nhẹ 5-7 phút hoặc hấp 10 phút',
      'Muối vừng bảo quản trong hũ thủy tinh kín, tránh ánh nắng trực tiếp',
      'Thời hạn sử dụng muối vừng tối đa 2 tuần ở nhiệt độ phòng',
    ],
  },
};

export default comLamThaiNguyen;
