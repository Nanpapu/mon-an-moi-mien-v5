import { ThemeType } from '../types';

export const summerTheme: ThemeType = {
  id: 'summer-special',
  name: 'Mùa Hạ',
  icon: 'sunny-outline',
  colors: {
    primary: {
      main: '#FFD700', // Vàng nắng
      light: '#FFE44D',
      dark: '#CCAC00',
      contrast: '#000000',
    },
    secondary: {
      main: '#00CED1', // Xanh biển
      light: '#4DDADD',
      dark: '#00A5A7',
      contrast: '#FFFFFF',
    },
    error: {
      main: '#FF4500',
      light: '#FF764D',
      dark: '#CC3700',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FFA500',
      light: '#FFB84D',
      dark: '#CC8400',
      contrast: '#000000',
    },
    success: {
      main: '#32CD32',
      light: '#5FD75F',
      dark: '#28A428',
      contrast: '#FFFFFF',
    },
    background: {
      default: '#F0F8FF', // Xanh trời nhạt
      paper: '#FFFFFF',
      contrast: '#FFD700',
    },
    text: {
      primary: '#1A237E',
      secondary: '#3949AB',
      disabled: '#9FA8DA',
      contrast: '#FFFFFF',
    },
    divider: '#E3F2FD',
    border: '#BBDEFB',
    shadow: '#FFD70050',
    action: {
      disabled: '#9FA8DA',
      hover: 'rgba(255, 215, 0, 0.1)',
      active: 'rgba(255, 215, 0, 0.2)',
    },
    info: {
      main: '#00BCD4',
      light: '#4DD0E1',
      dark: '#0097A7',
      contrast: '#FFFFFF',
    },
  },
};
