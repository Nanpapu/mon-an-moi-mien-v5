import { Region } from '@/types';

// Import các recipe từ các tỉnh
import * as HaNoi from './01';
import * as ThaiNguyen from './19';
import * as ThanhHoa from './36';
import * as ThuaThienHue from './46';
import * as DaNang from './48';
import * as PhuYen from './54';
import * as DongNai from './75';
import * as HoChiMinh from './79';
import * as CanTho from './92';
import * as BacLieu from './95';

// Export mảng regions
export const regions: Region[] = [
  HaNoi.region,
  ThaiNguyen.region,
  ThanhHoa.region,
  ThuaThienHue.region,
  DaNang.region,
  PhuYen.region,
  DongNai.region,
  HoChiMinh.region,
  CanTho.region,
  BacLieu.region,
];

export default regions;
