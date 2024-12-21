import { Region } from '../../../types';
import { miQuang } from './48_01';
import { banhTrangCuonThitHeo } from './48_02';

export const region: Region = {
  id: '48',
    name: 'Đà Nẵng',
    coordinate: {
      latitude: 16.0544,
      longitude: 108.2022,
  },
  recipes: [miQuang, banhTrangCuonThitHeo],
};

export default region;
