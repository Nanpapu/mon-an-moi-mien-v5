import { Region } from '../../../types';
import { comTamSuonBiCha } from './79_01';
import { huTieuNamVang } from './79_02';

export const region: Region = {
  id: '79',
  name: 'TP. Hồ Chí Minh',
  coordinate: {
    latitude: 10.7769,
    longitude: 106.7009,
  },
  recipes: [comTamSuonBiCha, huTieuNamVang],
};

export default region;
