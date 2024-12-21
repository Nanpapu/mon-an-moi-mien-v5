import { Region } from '../../../types';
import { bunBoHue } from './46_01';
import { comHen } from './46_02';

export const region: Region = {
  id: '46',
    name: 'Thừa Thiên Huế',
    coordinate: {
      latitude: 16.4637,
      longitude: 107.5909,
    },
  recipes: [bunBoHue, comHen],
};

export default region;
