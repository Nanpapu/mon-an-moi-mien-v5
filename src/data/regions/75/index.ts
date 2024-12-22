import { Region } from '../../../types';
import { banhBeoBienHoa } from './75_01';

export const region: Region = {
  id: '75',
  name: 'Đồng Nai',
  coordinate: {
    latitude: 10.9374,
    longitude: 106.8837,
  },
  recipes: [banhBeoBienHoa],
};

export default region;
