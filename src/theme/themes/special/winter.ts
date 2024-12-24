import { ThemeType } from '../types';

export const winterTheme: ThemeType = {
  id: 'winter-special',
  name: 'Mùa Đông',
  icon: 'snow-outline',
  colors: {
    primary: {
      main: '#4169E1', // Xanh dương hoàng gia
      light: '#718AE7',
      dark: '#3454B4',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#B0C4DE', // Xanh nhạt
      light: '#CBD6E8',
      dark: '#8D9DB2',
      contrast: '#000000',
    },
    error: {
      main: '#4A0404',
      light: '#714D4D',
      dark: '#3B0303',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#CD853F',
      light: '#DBA36C',
      dark: '#A46A32',
      contrast: '#000000',
    },
    success: {
      main: '#2F4F4F',
      light: '#557272',
      dark: '#253F3F',
      contrast: '#FFFFFF',
    },
    background: {
      default: '#F0F8FF', // Xanh băng nhạt
      paper: '#FFFFFF',
      contrast: '#4169E1',
    },
    text: {
      primary: '#1B1B3A',
      secondary: '#2F2F5B',
      disabled: '#9090A8',
      contrast: '#FFFFFF',
    },
    divider: '#E1E1E8',
    border: '#C8C8D8',
    shadow: '#4169E150',
    action: {
      disabled: '#9090A8',
      hover: 'rgba(65, 105, 225, 0.1)',
      active: 'rgba(65, 105, 225, 0.2)',
    },
    info: {
      main: '#87CEEB',
      light: '#A7DEF5',
      dark: '#6CA5BC',
      contrast: '#000000',
    },
  },
};
