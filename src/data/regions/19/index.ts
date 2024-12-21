import { Region } from '../../../types';
import { comLamThaiNguyen } from './19_01';

export const region: Region = {
  id: '19',
  name: 'Thái Nguyên',
  coordinate: {
    latitude: 9.294,
    longitude: 105.7216,
  },
  recipes: [comLamThaiNguyen],
};

export default region;
