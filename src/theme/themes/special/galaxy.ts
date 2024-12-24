import { ThemeType } from '../types';

export const galaxyTheme: ThemeType = {
  id: 'galaxy-special',
  name: 'Dải Ngân Hà',
  icon: 'planet-outline',
  colors: {
    primary: {
      main: '#663399', // Purple
      light: '#8B63B5',
      dark: '#52297A',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#00FFFF', // Cyan
      light: '#4DFFFF',
      dark: '#00CCCC',
      contrast: '#000000',
    },
    error: {
      main: '#FF1493', // Deep Pink
      light: '#FF4DA9',
      dark: '#CC1076',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',
      light: '#FFE44D',
      dark: '#CCAC00',
      contrast: '#000000',
    },
    success: {
      main: '#7CFC00',
      light: '#9FFD4D',
      dark: '#63CA00',
      contrast: '#000000',
    },
    background: {
      default: '#0C0C2C', // Deep Blue
      paper: '#1A1A3A',
      contrast: '#663399',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8D1',
      disabled: '#6E6E8F',
      contrast: '#000000',
    },
    divider: '#2D2D4D',
    border: '#3D3D5D',
    shadow: '#66339950',
    action: {
      disabled: '#6E6E8F',
      hover: 'rgba(102, 51, 153, 0.1)',
      active: 'rgba(102, 51, 153, 0.2)',
    },
    info: {
      main: '#87CEEB',
      light: '#A7DEF5',
      dark: '#6CA5BC',
      contrast: '#000000',
    },
  },
};
