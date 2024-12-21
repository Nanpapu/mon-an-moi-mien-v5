import { Recipe } from '../../../types';
import { UNITS } from '../../../constants/units';

export const miQuang: Recipe = {
    
        id: '48_01',
        name: 'Mì Quảng',
        region: 'Miền Trung',
        image: 'images/48/48_01.jpg',
        cookingTime: 90,
        difficulty: 4,
        servings: 4,
        ingredients: [
          {
            name: 'Mì Quảng (sợi to, vàng)',
            amount: 800,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Tôm sú',
            amount: 300,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Thịt heo ba chỉ',
            amount: 300,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Xương heo',
            amount: 500,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Củ nén',
            amount: 50,
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
            name: 'Nghệ củ',
            amount: 30,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Dầu điều màu',
            amount: 30,
            unit: UNITS.VOLUME.MILLILITER,
          },
          {
            name: 'Đậu phộng rang',
            amount: 100,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Bánh tráng nướng',
            amount: 8,
            unit: UNITS.QUANTITY.PIECE,
          },
          {
            name: 'Rau húng quế',
            amount: 100,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Rau răm',
            amount: 50,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Giá sống',
            amount: 100,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Bắp chuối bào',
            amount: 100,
            unit: UNITS.WEIGHT.GRAM,
          },
          {
            name: 'Ớt sừng',
            amount: 4,
            unit: UNITS.QUANTITY.PIECE,
          },
        ],
        instructions: {
          preparation: [
            'Thịt ba chỉ rửa sạch, thái miếng vuông 2x2cm',
            'Tôm bóc vỏ, giữ đuôi, rút chỉ đen',
            'Củ nén bóc vỏ, rửa sạch, băm nhuyễn',
            'Hành tím, tỏi bóc vỏ, băm nhuyễn',
            'Nghệ củ gọt vỏ, giã nhuyễn',
            'Đậu phộng rang chín, giã dập vừa',
            'Rau sống nhặt, rửa sạch, để ráo',
            'Bắp chuối bào mỏng, ngâm nước muối loãng',
            'Ớt sừng thái lát mỏng',
          ],
          broth: [
            'Xương heo rửa sạch, chần qua nước sôi',
            'Phi thơm 1/2 lượng hành tỏi với dầu điều',
            'Cho xương vào nấu với 2 lít nước trong 1 tiếng',
            'Thêm nghệ và củ nén vào phi thơm với dầu điều còn lại',
            'Cho thịt ba chỉ vào xào săn với hỗn hợp nghệ',
            'Cho tất cả vào nồi nước dùng',
            'Nêm 2 muỗng canh nước mắm, 1 muỗng cà phê muối, 1 muỗng canh đường',
            'Nấu liu riu thêm 30 phút để thịt mềm',
          ],
          cooking: [
            'Tôm ướp với 1 muỗng cà phê hành tỏi, 1/2 muỗng canh nước mắm trong 15 phút',
            'Xào tôm với dầu điều cho săn và thơm (khoảng 2-3 phút)',
          ],
          assembly: [
            'Trụng mì qua nước sôi khoảng 10 giây',
            'Xếp mì vào tô',
            'Xếp thịt và tôm lên trên',
            'Chan nước dùng vừa đủ ướt (khoảng 2-3 muỗng canh)',
            'Rắc đậu phộng và hành phi lê lên trên',
          ],
          serving: [
            'Dọn kèm đĩa rau sống gồm húng quế, rau răm, giá, bắp chuối',
            'Bánh tráng nướng giòn để bên cạnh',
            'Ăn kèm ớt tươi tùy khẩu vị',
            'Có thể thêm nước mắm, tương ớt tùy thích',
          ],
          tips: [
            'Nước dùng Mì Quảng phải đặc và ít, không nhiều như bún hay phở',
            'Bánh tráng nướng phải giòn mới ngon',
            'Có thể thêm trứng cút luộc hoặc chả để đa dạng món ăn',
          ],
          storage: [
            'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
            'Thịt và tôm đã chế biến nên bảo quản riêng, dùng trong vòng 24 giờ',
            'Mì Quảng tươi nên mua mới và dùng trong ngày',
            'Rau sống và bắp chuối bào phải rửa sạch, để ráo và bọc trong giấy ���m trước khi cho vào tủ lạnh',
            'Đậu phộng rang và hành phi phải để nguội hoàn toàn trước khi bảo quản trong hộp kín',
            'Bánh tráng nướng phải bảo quản trong hộp kín để giữ độ giòn',
          ],
        },
}

export default miQuang;