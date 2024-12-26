import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storage';

type MapStyleContextType = {
  simpleMapMode: boolean;
  toggleSimpleMapMode: () => void;
};

const MapStyleContext = createContext<MapStyleContextType | undefined>(
  undefined
);

export const useMapStyle = () => {
  const context = useContext(MapStyleContext);
  if (!context) {
    throw new Error('useMapStyle must be used within a MapStyleProvider');
  }
  return context;
};

export const MapStyleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [simpleMapMode, setSimpleMapMode] = useState(false);

  // Load trạng thái simple mode từ storage khi khởi động
  useEffect(() => {
    const loadSimpleMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem(
          STORAGE_KEYS.SIMPLE_MAP_MODE
        );
        if (savedMode !== null) {
          setSimpleMapMode(JSON.parse(savedMode));
        }
      } catch (error) {
        console.error('Lỗi khi load simple map mode:', error);
      }
    };
    loadSimpleMode();
  }, []);

  const toggleSimpleMapMode = async () => {
    try {
      const newMode = !simpleMapMode;
      setSimpleMapMode(newMode);
      await AsyncStorage.setItem(
        STORAGE_KEYS.SIMPLE_MAP_MODE,
        JSON.stringify(newMode)
      );
    } catch (error) {
      console.error('Lỗi khi lưu simple map mode:', error);
    }
  };

  return (
    <MapStyleContext.Provider value={{ simpleMapMode, toggleSimpleMapMode }}>
      {children}
    </MapStyleContext.Provider>
  );
};
