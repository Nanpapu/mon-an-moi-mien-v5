import { Region } from '../../../types';
import { bunCaCanTho } from './92_01';
import { banhCong } from './92_02';

export const region: Region = {
  id: '92',
    name: 'Cần Thơ',
    coordinate: {
      latitude: 10.0452,
      longitude: 105.7469,
  },
  recipes: [bunCaCanTho, banhCong],
};

export default region;
