import { ThemeType } from '../types';

export const autumnTheme: ThemeType = {
  id: 'autumn-special',
  name: 'Mùa Thu',
  icon: 'leaf-outline',
  colors: {
    primary: {
      main: '#D2691E', // Nâu cam
      light: '#E08743',
      dark: '#A85418',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#CD853F', // Nâu vàng
      light: '#DBA36C',
      dark: '#A46A32',
      contrast: '#FFFFFF',
    },
    error: {
      main: '#8B0000',
      light: '#B04D4D',
      dark: '#6F0000',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#DAA520',
      light: '#E4BB4D',
      dark: '#AE841A',
      contrast: '#000000',
    },
    success: {
      main: '#556B2F',
      light: '#778B55',
      dark: '#445626',
      contrast: '#FFFFFF',
    },
    background: {
      default: '#FFF8DC', // Kem nhạt
      paper: '#FFFAF0',
      contrast: '#D2691E',
    },
    text: {
      primary: '#654321',
      secondary: '#8B4513',
      disabled: '#A0522D',
      contrast: '#FFFFFF',
    },
    divider: '#DEB887',
    border: '#D2B48C',
    shadow: '#D2691E50',
    action: {
      disabled: '#A0522D',
      hover: 'rgba(210, 105, 30, 0.1)',
      active: 'rgba(210, 105, 30, 0.2)',
    },
    info: {
      main: '#B8860B',
      light: '#CCA23D',
      dark: '#936B09',
      contrast: '#FFFFFF',
    },
  },
};
