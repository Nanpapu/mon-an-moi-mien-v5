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
      name: 'Sườn heo cốt lết',
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
        title: 'Sơ chế sườn cốt lết',
        details: [
          'Chọn sườn cốt lết tươi, có màu hồng tự nhiên, thớ thịt đều, không có mùi lạ',
          'Rửa sườn với nước muối pha loãng (10g muối/1 lít nước) trong 5 phút',
          'Dùng dao cắt sườn thành từng miếng vừa ăn (4-5cm/miếng)',
          'Đập dập từng miếng sườn để thịt mềm hơn',
          'Để ráo nước 10 phút trên rổ đan thưa',
          'Thấm khô bề mặt sườn bằng giấy thấm',
          'Ướp sườn với: 2 muỗng canh nước mắm + 1 muỗng canh đường + 1/2 muỗng cà phê tiêu + 1/3 lượng hành tỏi băm',
          'Để sườn thấm gia vị 30 phút ở nhiệt độ phòng',
        ],
      },
      {
        title: 'Sơ chế da heo làm bì',
        details: [
          'Chọn da heo tươi, màu trắng sáng, không có vết bẩn hay vết thương',
          'Cạo sạch lông, rửa kỹ với nước muối pha loãng',
          'Luộc da trong nước sôi có thêm 1 lát gừng (để khử mùi) trong 15-20 phút',
          'Vớt ra ngâm ngay trong nước đá 5 phút (giúp da giòn)',
          'Để ráo, cạo sạch lớp mỡ bám dưới da',
          'Thái da thành sợi mỏng 2mm theo chiều dọc',
          'Trộn với 1/2 muỗng cà phê muối, để thấm 10 phút',
        ],
      },
      {
        title: 'Chuẩn bị chả trứng',
        details: [
          'Thịt xay trộn với: 2 muỗng canh nước mắm + 1 muỗng cà phê tiêu + 1/3 lượng hành tỏi băm',
          'Đánh tan 2 quả trứng, cho vào thịt xay đã ướp',
          'Thêm 1 muỗng cà phê bột ngọt, trộn đều',
          'Để hỗn hợp thấm gia vị 20 phút',
          'Cho vào khuôn, nén chặt để không có bọt khí',
        ],
      },
      {
        title: 'Sơ chế gạo tấm',
        details: [
          'Vo gạo tấm 2-3 lần với nước sạch',
          'Ngâm gạo trong nước 20 phút (tỷ lệ gạo:nước = 1:1.2)',
          'Để ráo 5 phút trước khi nấu',
        ],
      },
    ],
    cooking: [
      {
        title: 'Nướng sườn',
        details: [
          'Làm nóng vỉ nướng ở 180°C',
          'Xếp sườn lên vỉ, không xếp quá dày',
          'Nướng mỗi mặt 7-8 phút, phết dầu điều thường xuyên',
          'Lật sườn khi thấy cạnh có màu vàng nâu',
          'Nướng đến khi sườn có màu nâu đỏ đều, cạnh hơi cháy',
        ],
      },
      {
        title: 'Hấp chả',
        details: [
          'Đun sôi nước trong nồi hấp',
          'Phết dầu ăn mỏng vào khuôn để chả không dính',
          'Hấp chả ở lửa vừa 20-25 phút',
          'Kiểm tra độ chín bằng cách xiên que tăm (phải trong và không dính)',
          'Để nguội 5 phút trước khi cắt',
        ],
      },
      {
        title: 'Nấu cơm tấm',
        details: [
          'Cho gạo đã ngâm vào nồi cơm điện',
          'Thêm nước theo tỷ lệ đã định (1:1.2)',
          'Bật nút nấu, đợi đến khi cơm chín',
          'Để cơm nghỉ 10 phút sau khi nấu xong',
          'Xới cơm nhẹ nhàng để tơi đều',
        ],
      },
      {
        title: 'Làm nước mắm pha',
        details: [
          'Pha theo tỷ lệ: 3 phần nước mắm + 2 phần đường + 2 phần nước ấm',
          'Khuấy đều đến khi đường tan hoàn toàn',
          'Thêm tỏi ớt băm nhuyễn vừa đủ cay',
          'Điều chỉnh vị chua bằng chanh tươi',
          'Để nguội hoàn toàn mới dùng',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện món ăn',
        details: [
          'Xới cơm tấm vào tô, nén nhẹ tay để cơm đẹp mắt',
          'Đặt sườn nướng lên trên (1-2 miếng tùy khẩu phần)',
          'Xếp chả cắt lát mỏng 5mm bên cạnh',
          'Rải bì đều lên một góc của đĩa',
          'Rưới 2-3 muỗng nước mắm pha lên cơm',
          'Trang trí với dưa chua, cà chua',
          'Rắc hành phi và mỡ hành lên trên',
          'Thêm ít rau xà lách, dưa leo tươi ăn kèm',
        ],
      },
    ],
    serving: [
      {
        title: 'Cách thưởng thức',
        details: [
          'Trộn đều cơm với nước mắm pha trước khi ăn',
          'Kết hợp từng miếng cơm với sườn, chả, bì',
          'Ăn kèm với dưa chua để cân bằng vị',
          'Có thể thêm nước mắm pha tùy khẩu vị',
          'Dùng khi còn nóng để thưởng thức trọn vẹn hương vị',
        ],
      },
    ],
    tips: [
      'Sườn nướng phải có độ cháy vừa phải ở cạnh, thịt bên trong vẫn mềm, ngọt',
      'Chả phải mềm, mịn, không bị khô hay bị bọt khí',
      'Bì phải giòn, không bị dai, sợi mỏng đều nhau',
      'Cơm tấm phải tơi, không bị nhão hay khô cứng',
      'Nước mắm pha phải cân bằng vị mặn ngọt chua cay',
      'Mỡ hành phải vàng đều, thơm, không bị cháy',
      'Dưa chua phải giòn, chua nhẹ, không quá mặn',
    ],
    storage: [
      'Sườn nướng để được 1-2 ngày trong tủ lạnh, hâm nóng trước khi ăn',
      'Chả để được 2-3 ngày trong tủ lạnh',
      'Bì nên làm mới mỗi ngày để giữ độ giòn',
      'Cơm nên nấu mới mỗi bữa để ngon nhất',
      'Nước mắm pha để được 3-4 ngày trong tủ lạnh',
      'Mỡ hành để được 2-3 ngày ở nhiệt độ phòng trong hộp kín',
    ],
  },
};

export default comTamSuonBiCha;
