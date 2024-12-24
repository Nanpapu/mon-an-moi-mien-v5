import { ThemeType } from '../types';

export const christmasTheme: ThemeType = {
  id: 'christmas-special',
  name: 'Giáng Sinh',
  icon: 'gift-outline',
  colors: {
    primary: {
      main: '#CC0000', // Đỏ Giáng sinh
      light: '#FF4D4D',
      dark: '#A30000',
      contrast: '#FFFFFF',
    },
    secondary: {
      main: '#006400', // Xanh thông
      light: '#4D8C4D',
      dark: '#004D00',
      contrast: '#FFFFFF',
    },
    error: {
      main: '#8B0000',
      light: '#B04D4D',
      dark: '#6F0000',
      contrast: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',
      light: '#FFE44D',
      dark: '#CCAC00',
      contrast: '#000000',
    },
    success: {
      main: '#228B22',
      light: '#4DA64D',
      dark: '#1B6F1B',
      contrast: '#FFFFFF',
    },
    background: {
      default: '#FFFAFA', // Trắng tuyết
      paper: '#FFFFFF',
      contrast: '#CC0000',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#34495E',
      disabled: '#95A5A6',
      contrast: '#FFFFFF',
    },
    divider: '#E8E8E8',
    border: '#D4D4D4',
    shadow: '#CC000050',
    action: {
      disabled: '#95A5A6',
      hover: 'rgba(204, 0, 0, 0.1)',
      active: 'rgba(204, 0, 0, 0.2)',
    },
    info: {
      main: '#B8860B', // Vàng kim
      light: '#CCA23D',
      dark: '#936B09',
      contrast: '#FFFFFF',
    },
  },
};
