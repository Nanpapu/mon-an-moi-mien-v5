import {
  Recipe,
  RecipeDifficulty,
  RecipeComplexity,
  RecipeBudget,
  RecipeType,
  CookingMethod,
  Season,
  IngredientCategory,
} from '../../../types';
import { UNITS } from '../../../constants/units';

export const phoHaNoi: Recipe = {
  id: '01_01',
  name: 'Phở Hà Nội',
  region: 'Miền Bắc',
  image: 'images/01/01_01.jpg',

  // Thời gian
  cookingTime: 480, // 8 tiếng
  prepTime: 60, // 1 tiếng chuẩn bị
  waitTime: 30, // 30 phút để đông thịt

  // Độ khó và quy mô
  difficulty: RecipeDifficulty.EXPERT, // 4/5 - Cần kỹ thuật và kinh nghiệm
  complexity: RecipeComplexity.COMPLEX, // Nhiều bước và nguyên liệu
  budget: RecipeBudget.EXPENSIVE, // >300k cho 6 người
  servings: 6,

  // Phân loại
  type: RecipeType.MAIN,
  cookingMethod: CookingMethod.SIMMER,
  tags: ['phở', 'món truyền thống', 'đặc sản hà nội', 'món nước', 'bún phở'],
  seasons: [Season.AUTUMN, Season.WINTER], // Thích hợp mùa lạnh
  occasions: ['bữa sáng', 'bữa trưa', 'tiếp khách'],

  // Chi phí và dinh dưỡng
  estimatedCostPerServing: 60000, // 60k/tô
  nutritionPerServing: {
    calories: 450,
    protein: 25,
    fat: 15,
    carbs: 60,
    fiber: 3,
    sugar: 2,
  },

  // Chế độ ăn
  dietaryInfo: {
    type: 'non-vegetarian',
    note: 'Có thể thay thế thịt bò bằng thịt gà cho người không ăn được thịt bò',
    restrictions: {
      glutenFree: false,
      soyFree: true,
      lactoseFree: true,
      peanutFree: true,
      seafoodFree: true,
    },
  },

  ingredients: [
    {
      id: '01_01_01',
      name: 'Xương ống bò',
      amount: 2,
      unit: UNITS.WEIGHT.KILOGRAM,
      category: 'meat',
      importance: 1, // 1: Rất quan trọng
      note: 'Nên chọn xương có tủy, càng già càng ngọt',
      isAllergen: false,
      estimatedPrice: 120000,
      image: 'images/ingredients/xuong-bo.jpg',
      seasonality: {
        availableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Có quanh năm
      },
      preparationMethod: {
        description: 'Chần sơ và rửa sạch',
        duration: 15,
        steps: [
          'Rửa sạch với nước muối loãng',
          'Chần trong nước sôi 3 phút',
          'Rửa lại bằng nước lạnh',
        ],
      },
      storageConditions: {
        temperature: {
          min: 0,
          max: 4,
        },
        maxStorageDays: 3,
        notes: ['Bảo quản trong ngăn mát tủ lạnh'],
      },
      nutrition: {
        calories: 120,
        protein: 15,
        fat: 8,
        carbs: 0,
        fiber: 0,
        sugar: 0,
      },
      dietaryInfo: {
        type: 'non-vegetarian',
        restrictions: {
          glutenFree: true,
          soyFree: true,
          lactoseFree: true,
          peanutFree: true,
          seafoodFree: true,
        },
      },
    },
    {
      id: '01_01_02',
      name: 'Thịt bò phi lê',
      amount: 600,
      unit: UNITS.WEIGHT.GRAM,
      category: 'meat',
      importance: 1,
      substitutes: ['thịt bò thăn', 'thịt bò nạm', 'thịt bò gầu'],
      note: 'Nên chọn thịt tươi, có vân mỡ đều',
      isAllergen: false,
      estimatedPrice: 180000,
      image: 'images/ingredients/thit-bo-file.jpg',
      seasonality: {
        availableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      preparationMethod: {
        description: 'Thái lát mỏng',
        duration: 30,
        steps: ['Để đông lạnh 30 phút', 'Thái lát mỏng 2mm theo thớ'],
      },
      storageConditions: {
        temperature: {
          min: -18,
          max: -12,
        },
        maxStorageDays: 90,
        notes: ['Bảo quản trong ngăn đông'],
      },
      nutrition: {
        calories: 250,
        protein: 26,
        fat: 17,
        carbs: 0,
        fiber: 0,
        sugar: 0,
      },
      dietaryInfo: {
        type: 'non-vegetarian',
        restrictions: {
          glutenFree: true,
          soyFree: true,
          lactoseFree: true,
          peanutFree: true,
          seafoodFree: true,
        },
      },
    },
    {
      id: '01_01_03',
      name: 'Bánh phở',
      amount: 1,
      unit: UNITS.WEIGHT.KILOGRAM,
      category: 'grain',
      importance: 1,
      note: 'Chọn bánh phở tươi, sợi mỏng',
      isAllergen: false,
      estimatedPrice: 40000,
      image: 'images/ingredients/banh-pho.jpg',
      seasonality: {
        availableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      preparationMethod: {
        description: 'Tách sợi và trụng',
        duration: 1,
        steps: ['Tách từng sợi phở', 'Trụng qua nước sôi 3-5 giây'],
      },
      storageConditions: {
        temperature: {
          min: 20,
          max: 25,
        },
        maxStorageDays: 1,
        notes: ['Nên dùng trong ngày mua'],
      },
      nutrition: {
        calories: 140,
        protein: 3,
        fat: 0.3,
        carbs: 30,
        fiber: 0.5,
        sugar: 0,
      },
      dietaryInfo: {
        type: 'vegetarian',
        restrictions: {
          glutenFree: false,
          soyFree: true,
          lactoseFree: true,
          peanutFree: true,
          seafoodFree: true,
        },
      },
    },
    {
      id: '01_01_04',
      name: 'Túi gia vị phở',
      amount: 1,
      unit: UNITS.PIECE,
      category: 'spice',
      importance: 2,
      note: 'Gồm: hồi, quế, đinh hương, gừng',
      isAllergen: false,
      estimatedPrice: 20000,
      image: 'images/ingredients/tui-gia-vi.jpg',
      preparationMethod: {
        description: 'Rang gia vị',
        duration: 5,
        steps: ['Rang khô các gia vị đến khi thơm'],
      },
      storageConditions: {
        temperature: {
          min: 20,
          max: 25,
        },
        maxStorageDays: 180,
        notes: ['Bảo quản nơi khô ráo, thoáng mát'],
      },
    },
    // ... có thể thêm các nguyên liệu khác
  ],

  instructions: {
    preparation: [
      {
        id: 'prep_01',
        order: 1,
        description: 'Sơ chế xương bò',
        duration: 15,
        importance: 1,
        tools: ['nồi lớn', 'rây', 'thớt'],
        notes: [
          'Nước phải thật sôi khi chần',
          'Rửa kỹ sau khi chần',
          'Chọn xương có nhiều tủy',
        ],
        completionSigns: [
          'Nước trong khi rửa lại',
          'Không còn mùi hôi',
          'Xương có màu trắng sạch',
        ],
        commonMistakes: [
          {
            mistake: 'Không chần kỹ xương',
            solution: 'Chần lại lần nữa với nước sôi',
          },
        ],
      },
      {
        id: 'prep_02',
        order: 2,
        description: 'Chuẩn bị túi gia vị',
        duration: 10,
        importance: 2,
        tools: ['chảo rang', 'túi vải lọc gia vị'],
        notes: ['Rang gia vị với lửa nhỏ đến khi thơm'],
        completionSigns: ['Gia vị có mùi thơm đặc trưng'],
        techniques: ['rang khô'],
        ingredients: [
          '5 cái hoa hồi',
          '6 nhúm đinh hương',
          '1 thanh quế lớn',
          '1 củ gừng',
          '2 củ hành tây',
        ],
      },
      {
        id: 'prep_03',
        order: 3,
        description: 'Sơ chế thịt bò',
        duration: 30,
        importance: 1,
        tools: ['dao sắc', 'thớt sạch', 'màng bọc thực phẩm'],
        notes: [
          'Thịt phải để đông trước khi thái',
          'Thái theo chiều vuông góc với thớ thịt',
        ],
        completionSigns: ['Lát thịt mỏng đều 2mm', 'Thịt không bị dập nát'],
        techniques: ['thái thịt'],
      },
    ],

    processing: [
      {
        id: 'proc_01',
        order: 1,
        description: 'Nướng hành và gừng',
        duration: 10,
        importance: 2,
        tools: ['vỉ nướng', 'kẹp gắp'],
        temperature: 200,
        notes: ['Nướng đến khi hơi cháy xém vỏ ngoài'],
        completionSigns: ['Hành và gừng có mùi thơm đặc trưng'],
        techniques: ['nướng trực tiếp'],
      },
    ],

    cooking: [
      {
        id: 'cook_01',
        order: 1,
        description: 'Nấu nước dùng',
        duration: 480,
        temperature: 95,
        importance: 1,
        tools: ['nồi lớn 20L', 'vá hớt bọt', 'muôi lớn'],
        notes: [
          'Giữ lửa liu riu liên tục',
          'Thường xuyên hớt bọt trong 2 giờ đầu',
          'Không đậy nắp kín để nước trong',
        ],
        completionSigns: [
          'Nước dùng trong vắt',
          'Có mùi thơm đặc trưng',
          'Xương mềm rục',
        ],
        techniques: ['ninh xương', 'hớt bọt'],
        commonMistakes: [
          {
            mistake: 'Để sôi quá mạnh',
            solution: 'Giảm lửa nhỏ nhất có thể',
          },
          {
            mistake: 'Không hớt bọt thường xuyên',
            solution: 'Hớt bọt 15-20 phút/lần trong 2 giờ đầu',
          },
        ],
      },
      {
        id: 'cook_02',
        order: 2,
        description: 'Nêm nếm nước dùng',
        duration: 30,
        importance: 1,
        tools: ['muôi nếm', 'rây lọc'],
        notes: [
          'Nêm từ từ và nếm thử liên tục',
          'Vị phải đậm hơn bình thường vì sẽ pha loãng khi chan',
        ],
        completionSigns: [
          'Vị ngọt tự nhiên từ xương',
          'Mặn vừa phải',
          'Có mùi thơm của gia vị',
        ],
      },
    ],

    assembly: [
      {
        id: 'assem_01',
        order: 1,
        description: 'Chuẩn bị rau ăn kèm',
        duration: 10,
        importance: 2,
        tools: ['rổ', 'dao'],
        notes: ['Rửa sạch và để ráo nước'],
        ingredients: [
          'Hành lá',
          'Rau quế',
          'Giá đỗ',
          'Ngò gai',
          'Ớt tươi',
          'Chanh',
        ],
      },
      {
        id: 'assem_02',
        order: 2,
        description: 'Trụng bánh phở',
        duration: 1,
        importance: 1,
        temperature: 100,
        tools: ['rổ trụng phở', 'đũa lớn'],
        notes: [
          'Nước phải thật sôi',
          'Không trụng quá lâu',
          'Tách từng sợi phở trước khi trụng',
        ],
        completionSigns: [
          'Bánh phở mềm nhưng còn độ dai',
          'Sợi phở không bị dính',
        ],
        commonMistakes: [
          {
            mistake: 'Trụng quá lâu',
            solution: 'Chỉ trụng 3-5 giây là đủ',
          },
        ],
      },
    ],

    serving: [
      {
        id: 'serv_01',
        order: 1,
        description: 'Sắp xếp tô phở',
        duration: 2,
        importance: 1,
        tools: ['tô lớn', 'đũa', 'muôi múc'],
        notes: [
          'Làm nóng tô trước khi xếp',
          'Xếp theo thứ tự: phở -> th���t -> hành -> nước dùng',
          'Chan nước dùng phải thật sôi',
        ],
        steps: [
          'Xếp bánh phở đã trụng vào tô',
          'Xếp thịt bò tái lên trên',
          'Rắc hành lá và hành tây',
          'Chan nước dùng sôi',
          'Thêm rau ăn kèm tùy thích',
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
    ],

    storage: [
      'Nước dùng có thể bảo quản trong tủ lạnh đến 3 ngày',
      'Thịt bò sống phải bảo quản trong ngăn đông, dùng trong vòng 1 tuần',
      'Bánh phở tươi nên mua mới và dùng trong ngày',
      'Rau ăn kèm phải rửa sạch và để ráo trước khi cho vào tủ lạnh',
      'Gia vị đã rang nên bảo quản trong hộp kín, tránh ẩm',
    ],

    commonProblems: [
      {
        problem: 'Nư��c dùng đục',
        causes: ['Không chần xương kỹ', 'Để sôi quá mạnh'],
        solutions: ['Chần lại xương', 'Giảm lửa nhỏ liu riu'],
      },
      {
        problem: 'Thịt bò không mềm',
        causes: ['Thái quá dày', 'Nước dùng không đủ nóng'],
        solutions: ['Thái mỏng hơn', 'Đảm bảo nước dùng sôi khi chan'],
      },
    ],

    alternativeMethods: [
      {
        description: 'Nấu nước dùng bằng nồi áp suất',
        steps: [
          'Làm các bước chuẩn bị như bình thường',
          'Nấu trong nồi áp suất 2 tiếng thay vì 6-8 tiếng',
        ],
        pros: ['Tiết kiệm thời gian', 'Tiết kiệm gas/điện'],
        cons: ['Nước dùng có thể không ngọt bằng', 'Khó kiểm soát độ trong'],
        requiredTools: ['Nồi áp suất cỡ lớn'],
      },
    ],
  },

  variations: [
    {
      name: 'Phở gà',
      description: 'Thay thịt bò và xương bò bằng gà và xương gà',
      ingredientModifications: [
        'Thay xương bò bằng xương gà',
        'Thay thịt bò bằng thịt gà file',
      ],
    },
  ],

  suggestedSideDishes: ['Quẩy nóng', 'Trứng gà luộc', 'Tiết luộc'],

  suggestedDrinks: ['Trà xanh nóng', 'Nước chanh', 'Bia'],

  versions: [
    {
      version: '1.0',
      updatedAt: new Date('2024-03-20'),
      updatedBy: 'Chef Nguyen',
      changes: ['Phiên bản đầu tiên'],
      reason: 'Tạo công thức chuẩn',
    },
  ],
};

export default phoHaNoi;
