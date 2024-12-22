import { Region } from '../../../types';
import { banhCongBacLieu } from './95_01';  

export const region: Region = {
  id: '95',
  name: 'Bạc Liêu',
  coordinate: {
    latitude: 9.294,
    longitude: 105.7216,
  },
  recipes: [banhCongBacLieu],
};

export default region;
