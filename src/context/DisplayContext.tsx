import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storage';

type DisplayContextType = {
  focusMode: boolean;
  toggleFocusMode: () => void;
};

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useDisplay must be used within a DisplayProvider');
  }
  return context;
};

export const DisplayProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [focusMode, setFocusMode] = useState(false);

  // Load trạng thái focus mode từ storage khi khởi động
  useEffect(() => {
    const loadFocusMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem(STORAGE_KEYS.FOCUS_MODE);
        if (savedMode !== null) {
          setFocusMode(JSON.parse(savedMode));
        }
      } catch (error) {
        console.error('Lỗi khi load focus mode:', error);
      }
    };
    loadFocusMode();
  }, []);

  const toggleFocusMode = async () => {
    try {
      const newMode = !focusMode;
      setFocusMode(newMode);
      await AsyncStorage.setItem(
        STORAGE_KEYS.FOCUS_MODE,
        JSON.stringify(newMode)
      );
    } catch (error) {
      console.error('Lỗi khi lưu focus mode:', error);
    }
  };

  return (
    <DisplayContext.Provider value={{ focusMode, toggleFocusMode }}>
      {children}
    </DisplayContext.Provider>
  );
};
