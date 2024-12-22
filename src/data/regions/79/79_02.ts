import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const huTieuNamVang: Recipe = {
  id: '79_02',
  name: 'Hủ Tiếu Nam Vang',
  region: 'Miền Nam',
  image: 'images/79/79_02.jpg',
  cookingTime: 120,
  difficulty: 4,
  servings: 6,
  category: 'non-vegetarian',
  ingredients: [
    {
      name: 'Hủ tiếu tươi',
      amount: 1,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'grain/noodle',
      note: 'Loại hủ tiếu dai, sợi nhỏ',
    },
    {
      name: 'Xương heo',
      amount: 1.5,
      unit: UNITS.WEIGHT.KILOGRAM,
      type: 'meat/pork',
      note: 'Xương ống, xương đuôi',
    },
    {
      name: 'Tôm sú',
      amount: 500,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/shrimp',
      note: 'Tôm tươi size 30-35 con/kg',
    },
    {
      name: 'Thịt nạc vai heo',
      amount: 400,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/pork',
    },
    {
      name: 'Gan heo',
      amount: 300,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/processed',
    },
    {
      name: 'Cật heo',
      amount: 200,
      unit: UNITS.WEIGHT.GRAM,
      type: 'meat/processed',
    },
    {
      name: 'Trứng cút',
      amount: 15,
      unit: UNITS.QUANTITY.PIECE,
      type: 'other/egg',
    },
    {
      name: 'Tôm khô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/dried',
    },
    {
      name: 'Mực khô',
      amount: 50,
      unit: UNITS.WEIGHT.GRAM,
      type: 'seafood/dried',
    },
    {
      name: 'Nấm đông cô',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/mushroom',
    },
    {
      name: 'Hành tây',
      amount: 2,
      unit: UNITS.QUANTITY.PIECE,
      type: 'vegetable/root',
    },
    {
      name: 'Hành tím',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'spice/fresh',
    },
    {
      name: 'Tỏi',
      amount: 100,
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
      name: 'Hẹ',
      amount: 100,
      unit: UNITS.WEIGHT.GRAM,
      type: 'vegetable/leafy',
    },
  ],
  instructions: {
    preparation: [
      {
        title: 'Sơ chế xương heo',
        details: [
          'Rửa xương với nước muối loãng để khử mùi hôi',
          'Chặt xương thành từng khúc vừa phải (khoảng 5-7cm) để dễ nấu',
          'Ngâm xương trong nước lạnh 30 phút để ra hết máu',
          'Luộc sơ xương với nước sôi 5 phút rồi đổ bỏ nước',
          'Rửa lại xương với nước lạnh để loại bỏ hoàn toàn bọt bẩn',
          'Để ráo nước trước khi nấu nước dùng',
        ],
      },
      {
        title: 'Sơ chế các loại thịt',
        details: [
          'Thái thịt nạc thành lát mỏng vừa ăn (độ dày 2-3mm) theo chiều ngang thớ để thịt mềm',
          'Cắt gan heo thành miếng vuông 2x2cm, độ dày 5mm',
          'Cắt cật heo thành lát mỏng vừa ăn',
          'Lột vỏ và làm sạch tôm sú, để nguyên đuôi, rút chỉ đen',
          'Luộc trứng cút 3 phút, ngâm nước lạnh rồi bóc vỏ',
          'Ướp các loại thịt với chút muối, tiêu, bột ngọt để thịt đậm đà hơn',
        ],
      },
      {
        title: 'Sơ chế hải sản khô và rau củ',
        details: [
          'Ngâm tôm khô và mực khô trong nước ấm 30 phút cho mềm',
          'Vớt ra, để ráo nước, loại bỏ tạp chất',
          'Xé mực thành sợi nhỏ vừa ăn',
          'Giã nhẹ tôm khô thành từng mảnh vừa ăn',
          'Thái hành tây thành lát mỏng',
          'Băm nhỏ hành tím và tỏi',
          'Rửa sạch giá và hẹ, để ráo nước',
          'Ngâm nấm đông cô trong nước ấm 15 phút, cắt bỏ chân nấm',
        ],
      },
    ],
    broth: [
      {
        title: 'Nấu nước dùng',
        details: [
          'Đun sôi 4 lít nước trong nồi lớn',
          'Cho xương heo đã sơ chế vào nấu với lửa lớn',
          'Khi nước sôi, hạ lửa nhỏ và nấu thêm 60 phút để xương ra chất ngọt',
          'Thêm tôm khô và mực khô vào nấu thêm 30 phút',
          'Phi thơm hành tỏi với dầu ăn, cho vào nồi nước dùng',
          'Nêm nếm với: 2 muỗng canh nước mắm + 1 muỗng canh đường + 1 muỗng cà phê bột ngọt',
          'Lọc bỏ cặn để được nước dùng trong',
          'Giữ nước dùng sôi liu riu trong suốt quá trình dùng',
        ],
      },
    ],
    cooking: [
      {
        title: 'Chế biến các loại thịt',
        details: [
          'Luộc gan heo trong nước sôi 3 phút, vớt ra ngâm ngay vào nước lạnh để gan không bị khô',
          'Luộc cật heo trong nước sôi 5 phút, vớt ra ngâm nước lạnh để giữ độ giòn',
          'Chần thịt nạc trong nước dùng sôi đến khi chín tái (khoảng 30 giây)',
          'Luộc tôm sú trong nước dùng đến khi vừa chín (khoảng 2 phút), vỏ tôm chuyển đỏ cam',
          'Xào nấm đông cô với chút dầu ăn và nước mắm cho thơm',
        ],
      },
    ],
    assembly: [
      {
        title: 'Hoàn thiện',
        details: [
          'Trụng hủ tiếu trong nước sôi 1 phút cho mềm nhưng vẫn giữ được độ dai',
          'Vớt hủ tiếu ra, tráng qua nước lạnh để sợi không bị dính',
          'Xếp hủ tiếu vào tô (khoảng 150g/tô)',
          'Xếp các loại thịt, tôm, gan, cật lên trên theo thứ tự đẹp mắt',
          'Thêm trứng cút cắt đôi',
          'Rải giá sống, hẹ và hành tây',
          'Chan nước dùng nóng vào (khoảng 300ml/tô)',
          'Rắc tiêu và hành ngò lên trên',
        ],
      },
    ],
    serving: [
      {
        title: 'Thưởng thức',
        details: [
          'Dùng kèm với rau ghém: ngò gai, rau quế, húng quế',
          'Có thể thêm ớt tươi, tương ớt tùy khẩu vị',
          'Thêm chanh, ớt theo sở thích',
          'Nên ăn nóng để thưởng thức trọn vẹn hương vị',
          'Có thể thêm sa tế và nước mắm nếu muốn đậm đà hơn',
        ],
      },
    ],
    tips: [
      'Nước dùng phải được nấu từ xương heo để có vị ngọt tự nhiên',
      'Không nấu nước dùng quá lâu sẽ bị đục',
      'Các loại thịt nên được chần qua nước dùng sôi để giữ được vị ngọt',
      'Hủ tiếu phải được trụng vừa tới, không được để quá mềm',
      'Nên để giá sống riêng để thực khách có thể tùy chỉnh theo khẩu vị',
      'Có thể thêm sa tế để tăng vị cay nồng',
    ],
    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Các loại thịt đã chế biến nên bảo quản riêng và dùng trong vòng 24 giờ',
      'Hủ tiếu tươi nên mua mới và dùng trong ngày',
      'Rau ghém và giá để trong tủ lạnh được 2-3 ngày',
      'Không trữ đông nước dùng vì sẽ làm mất đi hương vị đặc trưng',
    ],
  },
};
export default huTieuNamVang;
