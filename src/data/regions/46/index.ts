import { Region } from '../../../types';
import { phoHaNoi } from './01_01';
import { bunChaHaNoi } from './01_02';
import { chaCaLaVong } from './01_03';

export const region: Region = {
  id: '01',
  name: 'Hà Nội',
  coordinate: {
    latitude: 21.0285,
    longitude: 105.8542,
  },
  recipes: [phoHaNoi, bunChaHaNoi, chaCaLaVong],
};

export default region;
