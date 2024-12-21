import { Region } from '../../types';
import { region as region01 } from './01/index';
import { region as region19 } from './19/index';
import { region as region36 } from './36/index';
import { region as region46 } from './46/index';
import { region as region48 } from './48/index';
import { region as region54 } from './54/index';
import { region as region75 } from './75/index';
import { region as region79 } from './79/index';
import { region as region92 } from './92/index';
import { region as region95 } from './95/index';

// Tạo mảng chứa tất cả các regions
export const regions: Region[] = [
  region01, // Hà Nội
  region19, // Thái Nguyên
  region36, // Nam Định
  region46, // Thừa Thiên Huế
  region48, // Đà Nẵng
  region54, // Phú Yên
  region75, // Đồng Nai
  region79, // TP. Hồ Chí Minh
  region92, // Cần Thơ
  region95, // Bạc Liêu
];

// Export default regions array
export default regions;
