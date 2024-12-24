import { ThemeType } from '../types';

export const springTheme: ThemeType = {
  id: 'spring-special',
  name: 'Mùa Xuân',
  icon: 'flower-outline',
  colors: {
    primary: {
      main: '#FF69B4', // Hồng hoa đào
      light: '#FF94CB',
      dark: '#CC5490',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#98FB98', // Xanh lá non
      light: '#B4FCB4',
      dark: '#7AC97A',
      contrast: '#000000',
    },
    error: {
      main: '#FF6B6B',
      light: '#FF9B9B',
      dark: '#CC5555',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',
      light: '#FFE44D',
      dark: '#CCAC00',
      contrast: '#000000',
    },
    success: {
      main: '#90EE90',
      light: '#B3F4B3',
      dark: '#73BE73',
      contrast: '#000000',
    },
    background: {
      default: '#F8FFF8', // Trắng xanh nhạt
      paper: '#FFFFFF',
      contrast: '#FF69B4',
    },
    text: {
      primary: '#2E4532', // Xanh lá đậm
      secondary: '#557A5A',
      disabled: '#A5B6A7',
      contrast: '#FFFFFF',
    },
    divider: '#E8F5E8',
    border: '#D1EBD1',
    shadow: '#FF69B450',
    action: {
      disabled: '#A5B6A7',
      hover: 'rgba(255, 105, 180, 0.1)',
      active: 'rgba(255, 105, 180, 0.2)',
    },
    info: {
      main: '#87CEEB',
      light: '#A7DEF5',
      dark: '#6CA5BC',
      contrast: '#000000',
    },
  },
};
