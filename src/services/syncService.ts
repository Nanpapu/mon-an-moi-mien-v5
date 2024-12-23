import AsyncStorage from '@react-native-async-storage/async-storage';
import { SyncOperation } from '../types/sync';
import { CACHE_KEYS } from '../constants';
import NetInfo from '@react-native-community/netinfo';

export const SyncService = {
  /**
   * Thêm operation vào queue để đồng bộ sau
   */
  addToQueue: async (operation: SyncOperation): Promise<void> => {
    try {
      const queueStr = await AsyncStorage.getItem(CACHE_KEYS.SYNC_QUEUE);
      const queue: SyncOperation[] = queueStr ? JSON.parse(queueStr) : [];

      queue.push({
        ...operation,
        timestamp: Date.now(),
      });

      await AsyncStorage.setItem(CACHE_KEYS.SYNC_QUEUE, JSON.stringify(queue));
    } catch (error) {
      console.error('Lỗi khi thêm vào sync queue:', error);
    }
  },

  /**
   * Xử lý queue đồng bộ hóa
   */
  processQueue: async (): Promise<void> => {
    try {
      const networkState = await NetInfo.fetch();
      if (!networkState.isConnected) return;

      const queueStr = await AsyncStorage.getItem(CACHE_KEYS.SYNC_QUEUE);
      if (!queueStr) return;

      const queue: SyncOperation[] = JSON.parse(queueStr);
      if (queue.length === 0) return;

      // Xử lý từng operation theo thứ tự
      for (const operation of queue) {
        try {
          await SyncService.processOperation(operation);
        } catch (error) {
          console.error('Lỗi khi xử lý operation:', error);
        }
      }

      // Xóa queue sau khi xử lý xong
      await AsyncStorage.removeItem(CACHE_KEYS.SYNC_QUEUE);
    } catch (error) {
      console.error('Lỗi khi xử lý sync queue:', error);
    }
  },

  /**
   * Xử lý một operation đồng bộ
   */
  processOperation: async (operation: SyncOperation): Promise<void> => {
    switch (operation.type) {
      case 'RECIPES':
        // Xử lý đồng bộ công thức
        break;
      case 'PROFILE':
        // Xử lý đồng bộ profile
        break;
      case 'SETTINGS':
        // Xử lý đồng bộ settings
        break;
    }
  },
};
