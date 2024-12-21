import { Region } from '../../../types';
import { miQuang } from './48_01';
import { banhTrangCuonThitHeo } from './48_02';

export const region: Region = {
  id: '01',
  name: 'Hà Nội',
  coordinate: {
    latitude: 21.0285,
    longitude: 105.8542,
  },
  recipes: [miQuang, banhTrangCuonThitHeo],
};

export default region;
