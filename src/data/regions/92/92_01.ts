import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const bunCaCanTho: Recipe = {
  id: '92_01',
  name: 'Bún Cá Cần Thơ',
  region: 'Miền Nam',
  image: 'images/92/92_01.jpg',
  cookingTime: 90,
  difficulty: 3,
  servings: 4,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Cá lóc phi lê',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
      note: 'Cá tươi, phi lê sạch',
    },
    {
      name: 'Xương cá lóc',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/fish',
      note: 'Dùng nấu nước dùng',
    },
    {
      name: 'Bún tươi',
      amount: 1.2,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
      note: 'Bún số 8, sợi vừa',
    },
    {
      name: 'Cà chua',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/fruit',
      note: 'Chín đỏ, chắc quả',
    },
    {
      name: 'Dọc mùng',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
      note: 'Tươi, non',
    },
    {
      name: 'Bạc hà',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/root',
      note: 'Tươi, non',
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
      name: 'Ớt sừng',
      amount: 3,
      unit: UNITS.QUANTITY.PIECE,
      type: 'spice/fresh',
    },
    {
      name: 'Rau om',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Ngò gai',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Giá sống',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/sprout',
    },
    {
      name: 'Bột chiên giòn',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'grain/flour',
    },
    {
      name: 'Me chín',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/dried',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế cá lóc',
        details: [
          'Chọn cá lóc tươi, mắt trong, mang đỏ, vảy bóng, thịt đàn hồi tốt',
          'Phi lê cá theo chiều dọc từ đầu đến đuôi, giữ lại xương để nấu nước dùng',
          'Rửa phi lê cá với nước muối 1% (10g muối/1 lít nước) trong 2 phút',
          'Để ráo nước trên rổ 10 phút ở nhiệt độ phòng',
          'Dùng giấy bếp thấm khô bề mặt cá',
          'Cắt phi lê thành miếng 3x5cm, dày 1.5cm (kích thước chuẩn để cá chín đều)',
          'Dùng nhíp nhỏ gắp kỹ xương còn sót lại trong thịt cá',
          'Xương cá rửa sạch, chần trong nước sôi 2 phút để khử mùi tanh',
          'Vớt xương ra, ngâm nước lạnh 1 phút, để ráo',
        ],
      },
      {
        title: 'Sơ chế rau củ',
        details: [
          'Cà chua chọn quả chín đỏ đều, rửa sạch, cắt múi cau 2x3cm',
          'Dọc mùng tước vỏ, cắt khúc 5cm, ngâm nước muối 2% trong 15 phút',
          'Bạc hà tước vỏ, cắt khúc 5cm, ngâm chung với dọc mùng',
          'Vớt dọc mùng và bạc hà ra, rửa lại với nước lạnh, để ráo',
          'Hành tím bóc vỏ, 1/2 băm nhuyễn, 1/2 thái lát mỏng',
          'Tỏi bóc vỏ, băm nhuyễn',
          'Ớt sừng rửa sạch, thái lát xiên 45 độ dày 2mm',
          'Rau om nhặt lá và ngọn non, rửa sạch, thái nhỏ 2mm',
          'Ngò gai nhặt lá, rửa sạch, thái nhỏ 2mm',
          'Giá đỗ nhặt bỏ rễ, rửa sạch với nước muối loãng',
          'Me ngâm với 100ml nước ấm 40°C trong 15 phút, dằm nhuyễn, lọc lấy nước cốt',
        ],
      },
    ],
    processing: [
      {
        title: 'Ướp cá',
        details: [
          'Trộn đều 2 muỗng canh hành tỏi băm với 1 muỗng canh nước mắm ngon',
          'Thêm 1/2 muỗng cà phê tiêu xay, 1/4 muỗng cà phê bột ngọt',
          'Ướp cá với hỗn hợp gia vị trên, đảo đều nhẹ nhàng',
          'Bọc kín bằng màng bọc thực phẩm',
          'Để cá thấm gia vị 15-20 phút ở nhiệt độ phòng',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun nóng 2 muỗng canh dầu ăn trong nồi ở lửa vừa',
          'Phi thơm 2 muỗng canh hành tỏi băm đến khi vàng nhẹ (1-2 phút)',
          'Cho xương cá vào xào sơ 2 phút để khử mùi tanh',
          'Thêm 2.5 lít nước lọc vào nồi, đun sôi ở lửa to',
          'Hạ lửa nhỏ, nấu liu riu 30 phút, thường xuyên hớt bọt',
          'Cho cà chua vào, nấu thêm 10 phút đến khi cà chua mềm',
          'Thêm 3 muỗng canh nước me, 2 muỗng canh nước mắm, 1 muỗng canh đường',
          'Nêm nếm lại cho vừa vị chua ngọt (nước dùng phải hơi chua và ngọt nhẹ)',
          'Cho dọc mùng và bạc hà vào, nấu 5 phút đến khi rau mềm vừa',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chiên cá',
        details: [
          'Chuẩn bị chảo sâu lòng với dầu ngập 1/2 miếng cá',
          'Đun nóng dầu đến 180°C (kiểm tra bằng đũa gỗ - có bọt nhỏ sủi đều)',
          'Lăn từng miếng cá qua bột chiên giòn, phủ đều và vỗ nhẹ bỏ bột thừa',
          'Thả từ từ cá vào dầu nóng, chiên 5-6 miếng một lần (không chiên quá nhiều)',
          'Chiên 2-3 phút mỗi mặt đến khi cá có màu vàng đều và giòn',
          'Vớt ra để ráo dầu trên giấy thấm dầu hoặc rổ có lót giấy',
          'Giữ cá nơi ấm trong lò nướng ở 60°C nếu chưa dùng ngay',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện',
        details: [
          'Đun sôi nồi nước lớn để trụng bún',
          'Trụng bún tươi trong nước sôi 45-60 giây (bún phải còn hơi dai)',
          'Vớt bún ra, xả qua nước lạnh để bún không bị dính',
          'Xếp 200g bún vào tô (dùng đũa xoay tròn để bún đẹp mắt)',
          'Xếp 3-4 miếng cá chiên lên trên bún',
          'Chan 300ml nước dùng nóng vào tô (nước phải thật nóng)',
          'Rắc rau om và ngò gai thái nhỏ lên trên',
          'Trang trí với ít hành phi và vài lát ớt tươi',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Dùng kèm với giá sống, rau thơm các loại theo khẩu vị',
          'Có thể thêm nước mắm ớt tỏi và chanh tươi tùy thích',
          'Thưởng thức ngay khi còn nóng để cảm nhận độ giòn của cá',
          'Kết hợp vị chua ngọt của nước dùng với vị béo của cá chiên',
        ],
      },
    ],
    tips: [
      'Chọn cá lóc tươi và phi lê đúng kỹ thuật là yếu tố quyết định độ ngon của món',
      'Nhiệt độ dầu chiên phải đạt chuẩn 180°C để cá giòn ngoài, mềm trong',
      'Nước dùng cần nấu từ xương cá để có vị ngọt tự nhiên, không dùng bột ngọt quá nhiều',
      'Dọc mùng và bạc hà phải được ngâm muối kỹ để khử vị hăng và chát',
      'Nước me cần nêm vừa phải để tạo vị chua dịu, không lấn át vị ngọt của nước dùng',
      'Rau om và ngò gai phải thái nhỏ và rắc lên trên cùng để giữ được hương thơm',
      'Bún phải được trụng vừa tới, không được mềm nhũn',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày, hâm nóng trước khi dùng',
      'Cá đã chiên nên ăn ngay, nếu cần bảo quản thì để riêng và hâm nóng lại bằng lò nướng ở 180°C trong 3-5 phút',
      'Bạc hà và dọc mùng đã luộc có thể bảo quản trong tủ lạnh 1-2 ngày trong hộp kín',
      'Rau sống phải được rửa sạch, để ráo và bọc trong khăn ẩm trước khi cho vào tủ lạnh',
      'Nước me pha sẵn có thể bảo quản trong tủ lạnh đến 1 tuần trong hộp kín',
      'Bột chiên giòn còn dư nên để trong hộp kín, nơi khô ráo tránh ẩm',
    ],
  },
};

export default bunCaCanTho;
