import { Region } from '../../../types';
import { banhBeoBienHoa } from './75_01';

export const region: Region = {
  id: '75',
  name: 'Đồng Nai',
  coordinate: {
    latitude: 21.0285,
    longitude: 105.8542,
  },
  recipes: [banhBeoBienHoa],
};

export default region;
