import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = '@profile_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 giờ

export interface ProfileCache {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  timestamp: number;
}

export const ProfileCacheService = {
  /**
   * Lưu thông tin profile vào cache
   */
  saveProfileCache: async (profile: Omit<ProfileCache, 'timestamp'>) => {
    try {
      const cacheData: ProfileCache = {
        ...profile,
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Lỗi khi lưu profile cache:', error);
    }
  },

  /**
   * Lấy thông tin profile từ cache
   */
  getProfileCache: async (): Promise<ProfileCache | null> => {
    try {
      const cacheStr = await AsyncStorage.getItem(CACHE_KEY);
      if (!cacheStr) return null;

      const cache: ProfileCache = JSON.parse(cacheStr);

      // Kiểm tra cache có hết hạn chưa
      if (Date.now() - cache.timestamp > CACHE_EXPIRY) {
        await AsyncStorage.removeItem(CACHE_KEY);
        return null;
      }

      return cache;
    } catch (error) {
      console.error('Lỗi khi đọc profile cache:', error);
      return null;
    }
  },

  /**
   * Xóa cache profile
   */
  clearProfileCache: async () => {
    try {
      await AsyncStorage.removeItem(CACHE_KEY);
    } catch (error) {
      console.error('Lỗi khi xóa profile cache:', error);
    }
  },
};
