// Context để quản lý theme trong ứng dụng
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useColorScheme, Animated, Easing } from 'react-native';
import { typography } from './typography';
import { spacing, layout } from './spacing';
import { shadows } from './shadows';
import { themes, ThemeType, ThemeColors } from './themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storage';

// Định nghĩa kiểu dữ liệu cho theme
export type Theme = {
  colors: ThemeColors;
  typography: typeof typography;
  spacing: typeof spacing;
  layout: typeof layout;
  shadows: typeof shadows;
  isDark: boolean;
  skeleton: {
    background: string;
  };
};

// Định nghĩa kiểu dữ liệu cho context
type ThemeContextType = {
  currentTheme: ThemeType;
  setTheme: (themeId: string) => void;
  availableThemes: ThemeType[];
  theme: Theme;
  defaultLightTheme: string;
  defaultDarkTheme: string;
  defaultSpecialTheme: string;
  setDefaultTheme: (themeId: string) => void;
  toggleTheme: () => void;
};

// Tạo context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component để cung cấp theme cho toàn ứng dụng
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(themes[0]);
  const [defaultLightTheme, setDefaultLightTheme] = useState('light');
  const [defaultDarkTheme, setDefaultDarkTheme] = useState('classic-dark');
  const [defaultSpecialTheme, setDefaultSpecialTheme] =
    useState('neon-dark-special');

  const loadSavedThemes = async () => {
    try {
      const [currentThemeId, defaultLightId, defaultDarkId, defaultSpecialId] =
        await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.THEME.CURRENT),
          AsyncStorage.getItem(STORAGE_KEYS.THEME.DEFAULT_LIGHT),
          AsyncStorage.getItem(STORAGE_KEYS.THEME.DEFAULT_DARK),
          AsyncStorage.getItem(STORAGE_KEYS.THEME.DEFAULT_SPECIAL),
        ]);

      if (currentThemeId) {
        setCurrentTheme(
          themes.find((t) => t.id === currentThemeId) || themes[0]
        );
      }
      if (defaultLightId) setDefaultLightTheme(defaultLightId);
      if (defaultDarkId) setDefaultDarkTheme(defaultDarkId);
      if (defaultSpecialId) setDefaultSpecialTheme(defaultSpecialId);
    } catch (error) {
      console.error('Lỗi khi load theme:', error);
    }
  };

  useEffect(() => {
    loadSavedThemes();
  }, []);

  const setDefaultTheme = async (themeId: string) => {
    try {
      if (themeId.includes('-special')) {
        setDefaultSpecialTheme(themeId);
        await AsyncStorage.setItem(STORAGE_KEYS.THEME.DEFAULT_SPECIAL, themeId);
      } else if (themeId.includes('dark')) {
        setDefaultDarkTheme(themeId);
        await AsyncStorage.setItem(STORAGE_KEYS.THEME.DEFAULT_DARK, themeId);
      } else {
        setDefaultLightTheme(themeId);
        await AsyncStorage.setItem(STORAGE_KEYS.THEME.DEFAULT_LIGHT, themeId);
      }
    } catch (error) {
      console.error('Lỗi khi lưu default theme:', error);
    }
  };

  const setTheme = async (themeId: string) => {
    const newTheme = themes.find((t) => t.id === themeId);
    if (newTheme) {
      setCurrentTheme(newTheme);
      try {
        await AsyncStorage.setItem(STORAGE_KEYS.THEME.CURRENT, themeId);
      } catch (error) {
        console.error('Lỗi khi lưu theme:', error);
      }
    }
  };

  const toggleTheme = () => {
    const currentId = currentTheme.id;

    if (currentId.includes('special')) {
      // Nếu đang ở special theme thì chuyển sang light theme
      setTheme(defaultLightTheme);
    } else if (currentId.includes('dark')) {
      // Nếu đang ở dark theme thì chuyển sang special theme
      setTheme(defaultSpecialTheme);
    } else {
      // Nếu đang ở light theme thì chuyển sang dark theme
      setTheme(defaultDarkTheme);
    }
  };

  // Tạo theme cũ từ currentTheme
  const theme: Theme = {
    colors: currentTheme.colors,
    typography,
    spacing,
    layout,
    shadows,
    isDark: currentTheme.id !== 'light',
    skeleton: {
      background: currentTheme.colors.background.paper,
    },
  };

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: themes,
        theme,
        defaultLightTheme,
        defaultDarkTheme,
        defaultSpecialTheme,
        setDefaultTheme,
        toggleTheme,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          backgroundColor: currentTheme.colors.background.default,
        }}
      >
        {children}
      </Animated.View>
    </ThemeContext.Provider>
  );
};

// Hook để sử dụng theme trong components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
