import { SortType } from '../types';

export const getSortLabel = (type: SortType): string => {
  switch (type) {
    case SortType.DEFAULT:
      return 'Mặc định';
    case SortType.NAME_ASC:
      return 'Tên A-Z';
    case SortType.NAME_DESC:
      return 'Tên Z-A';
    case SortType.DIFFICULTY_ASC:
      return 'Độ khó tăng dần';
    case SortType.DIFFICULTY_DESC:
      return 'Độ khó giảm dần';
    case SortType.COOKING_TIME_ASC:
      return 'Thời gian nấu tăng dần';
    case SortType.COOKING_TIME_DESC:
      return 'Thời gian nấu giảm dần';
    case SortType.SERVINGS_ASC:
      return 'Số người ăn tăng dần';
    case SortType.SERVINGS_DESC:
      return 'Số người ăn giảm dần';
    default:
      return '';
  }
};
