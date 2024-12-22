import { Region } from '../../../types';
import { comLamThaiNguyen } from './19_01';

export const region: Region = {
  id: '19',
  name: 'Thái Nguyên',
  coordinate: {
    latitude: 21.5942,
    longitude: 105.8248,
  },
  recipes: [comLamThaiNguyen],
};

export default region;
