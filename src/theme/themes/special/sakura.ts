import { ThemeType } from '../types';

export const sakuraTheme: ThemeType = {
  id: 'sakura-special',
  name: 'Hoa Anh Đào',
  icon: 'flower-outline',
  colors: {
    primary: {
      main: '#FFB7C5', // Pink
      light: '#FFD1DB',
      dark: '#CC929E',
      contrast: '#000000',
    },
    secondary: {
      main: '#FFF0F5', // Lavender blush
      light: '#FFFFFF',
      dark: '#CCC0C4',
      contrast: '#000000',
    },
    error: {
      main: '#FF69B4', // Hot Pink
      light: '#FF94CB',
      dark: '#CC5490',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FFE4E1', // Misty Rose
      light: '#FFECEB',
      dark: '#CCB6B4',
      contrast: '#000000',
    },
    success: {
      main: '#DDA0DD', // Plum
      light: '#E7B9E7',
      dark: '#B180B1',
      contrast: '#000000',
    },
    background: {
      default: '#FFF5F5', // Soft Pink
      paper: '#FFFFFF',
      contrast: '#FFB7C5',
    },
    text: {
      primary: '#4A3B3B',
      secondary: '#6B5656',
      disabled: '#A69999',
      contrast: '#000000',
    },
    divider: '#FFE4E8',
    border: '#FFD1D1',
    shadow: '#FFB7C550',
    action: {
      disabled: '#A69999',
      hover: 'rgba(255, 183, 197, 0.1)',
      active: 'rgba(255, 183, 197, 0.2)',
    },
    info: {
      main: '#DB7093', // Pale Violet Red
      light: '#E58FAB',
      dark: '#AF5976',
      contrast: '#FFFFFF',
    },
  },
};
