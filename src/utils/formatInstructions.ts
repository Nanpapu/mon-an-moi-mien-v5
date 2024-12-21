import { Instructions } from '../types';

interface FormattedInstruction {
  title: string;
  content: string;
}

export const formatInstructions = (
  instructions: Instructions
): FormattedInstruction[] => {
  const formattedInstructions: FormattedInstruction[] = [];

  // Thứ tự các bước theo logic nấu ăn
  const steps = [
    { key: 'preparation', title: 'Chuẩn bị' },
    { key: 'processing', title: 'Sơ chế' },
    { key: 'marinating', title: 'Ướp gia vị' },
    { key: 'broth', title: 'Nấu nước dùng' },
    { key: 'sauce', title: 'Làm nước chấm' },
    { key: 'cooking', title: 'Nấu chính' },
    { key: 'steaming', title: 'Hấp/Luộc' },
    { key: 'filling', title: 'Làm nhân' },
    { key: 'dough', title: 'Làm vỏ/bột' },
    { key: 'assembly', title: 'Hoàn thiện' },
    { key: 'serving', title: 'Thưởng thức' },
    { key: 'tips', title: 'Mẹo và lưu ý' },
    { key: 'storage', title: 'Bảo quản' },
  ];

  // Thêm các bước theo thứ tự đã định nghĩa
  steps.forEach(({ key, title }) => {
    const steps = instructions[key as keyof Instructions];
    if (steps && Array.isArray(steps)) {
      steps.forEach((step) => {
        formattedInstructions.push({
          title,
          content: step,
        });
      });
    }
  });

  return formattedInstructions;
};
