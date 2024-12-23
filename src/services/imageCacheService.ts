import * as FileSystem from 'expo-file-system';
import { storage } from '../config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { ImageUtils } from '../utils/imageUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMAGE_CACHE_PREFIX = 'image_cache_';
const IMAGE_CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 ngày
const IMAGE_CACHE_DIR = `${FileSystem.cacheDirectory}recipe-images/`;

interface CacheMetadata {
  timestamp: number;
  path: string;
}

export const ImageCacheService = {
  initialize: async () => {
    const dirInfo = await FileSystem.getInfoAsync(IMAGE_CACHE_DIR);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(IMAGE_CACHE_DIR, {
        intermediates: true,
      });
    }
    await ImageCacheService.cleanExpiredCache();
  },

  saveMetadata: async (recipeId: string, path: string) => {
    const metadata: CacheMetadata = {
      timestamp: Date.now(),
      path,
    };
    await FileSystem.writeAsStringAsync(
      `${IMAGE_CACHE_DIR}${recipeId}.meta`,
      JSON.stringify(metadata)
    );
  },

  getMetadata: async (recipeId: string): Promise<CacheMetadata | null> => {
    try {
      const metaPath = `${IMAGE_CACHE_DIR}${recipeId}.meta`;
      const metaInfo = await FileSystem.getInfoAsync(metaPath);
      if (!metaInfo.exists) return null;

      const metaContent = await FileSystem.readAsStringAsync(metaPath);
      return JSON.parse(metaContent);
    } catch {
      return null;
    }
  },

  isCacheExpired: async (recipeId: string): Promise<boolean> => {
    const metadata = await ImageCacheService.getMetadata(recipeId);
    if (!metadata) return true;

    const now = Date.now();
    return now - metadata.timestamp > IMAGE_CACHE_EXPIRY;
  },

  cacheImage: async (imageUrl: string, recipeId: string): Promise<string> => {
    try {
      const cacheFilePath = `${IMAGE_CACHE_DIR}${recipeId}.jpg`;

      if (await ImageCacheService.isCacheExpired(recipeId)) {
        await ImageCacheService.clearImageCache(recipeId);
      }

      const fileInfo = await FileSystem.getInfoAsync(cacheFilePath);
      if (!fileInfo.exists) {
        await FileSystem.downloadAsync(imageUrl, cacheFilePath);
        await ImageCacheService.saveMetadata(recipeId, cacheFilePath);
      }

      return cacheFilePath;
    } catch (error) {
      console.error('Lỗi khi cache ảnh:', error);
      return imageUrl;
    }
  },

  getCachedImage: async (recipeId: string): Promise<string | null> => {
    try {
      if (await ImageCacheService.isCacheExpired(recipeId)) {
        await ImageCacheService.clearImageCache(recipeId);
        return null;
      }

      const cacheFilePath = `${IMAGE_CACHE_DIR}${recipeId}.jpg`;
      const fileInfo = await FileSystem.getInfoAsync(cacheFilePath);
      return fileInfo.exists ? cacheFilePath : null;
    } catch {
      return null;
    }
  },

  clearImageCache: async (recipeId: string): Promise<void> => {
    try {
      const cacheFilePath = `${IMAGE_CACHE_DIR}${recipeId}.jpg`;
      const metaPath = `${IMAGE_CACHE_DIR}${recipeId}.meta`;

      await Promise.all([
        FileSystem.deleteAsync(cacheFilePath, { idempotent: true }),
        FileSystem.deleteAsync(metaPath, { idempotent: true }),
      ]);
    } catch (error) {
      console.error('Lỗi khi xóa cache:', error);
    }
  },

  cleanExpiredCache: async (): Promise<void> => {
    try {
      const dirContent = await FileSystem.readDirectoryAsync(IMAGE_CACHE_DIR);
      const metaFiles = dirContent.filter((file) => file.endsWith('.meta'));

      for (const metaFile of metaFiles) {
        const recipeId = metaFile.replace('.meta', '');
        if (await ImageCacheService.isCacheExpired(recipeId)) {
          await ImageCacheService.clearImageCache(recipeId);
        }
      }
    } catch (error) {
      console.error('Lỗi khi dọn cache:', error);
    }
  },

  clearAllCache: async (): Promise<void> => {
    try {
      await FileSystem.deleteAsync(IMAGE_CACHE_DIR, { idempotent: true });
      await FileSystem.makeDirectoryAsync(IMAGE_CACHE_DIR, {
        intermediates: true,
      });
    } catch (error) {
      console.error('Lỗi khi xóa toàn bộ cache:', error);
    }
  },

  getImageUrl: async (imagePath: string): Promise<string | null> => {
    try {
      if (imagePath.startsWith('http')) {
        return imagePath;
      }

      const cacheKey = `${IMAGE_CACHE_PREFIX}${imagePath}`;

      const cached = await AsyncStorage.getItem(cacheKey);
      if (cached) {
        const { url, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < IMAGE_CACHE_EXPIRY) {
          return url;
        }
      }

      const imageRef = ref(storage, imagePath);
      const url = await getDownloadURL(imageRef);

      await AsyncStorage.setItem(
        cacheKey,
        JSON.stringify({
          url,
          timestamp: Date.now(),
        })
      );

      return url;
    } catch (error) {
      console.error('Lỗi khi lấy URL hình ảnh:', error);
      return null;
    }
  },
};
