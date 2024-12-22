import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { UserSavedRecipesService } from './userSavedRecipesService';

const SYNC_QUEUE_KEY = '@sync_queue';

interface SyncQueueItem {
  userId: string;
  recipeIds: string[];
  timestamp: number;
  retryCount: number;
}

export const SyncQueueService = {
  /**
   * Thêm một sync task vào queue
   */
  addToQueue: async (userId: string, recipeIds: string[]) => {
    try {
      const queue = await SyncQueueService.getQueue();
      queue.push({
        userId,
        recipeIds,
        timestamp: Date.now(),
        retryCount: 0,
      });
      await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
    } catch (error) {
      console.error('Lỗi khi thêm vào sync queue:', error);
    }
  },

  /**
   * Lấy toàn bộ queue
   */
  getQueue: async (): Promise<SyncQueueItem[]> => {
    try {
      const queueStr = await AsyncStorage.getItem(SYNC_QUEUE_KEY);
      return queueStr ? JSON.parse(queueStr) : [];
    } catch (error) {
      console.error('Lỗi khi lấy sync queue:', error);
      return [];
    }
  },

  /**
   * Xử lý queue khi có internet
   */
  processQueue: async () => {
    try {
      const queue = await SyncQueueService.getQueue();
      if (queue.length === 0) return;

      const networkState = await NetInfo.fetch();
      if (!networkState.isConnected) return;

      for (const item of queue) {
        try {
          await UserSavedRecipesService.syncToCloud(
            item.userId,
            item.recipeIds
          );
          // Remove successful item
          const updatedQueue = queue.filter(
            (q) => q.userId !== item.userId || q.timestamp !== item.timestamp
          );
          await AsyncStorage.setItem(
            SYNC_QUEUE_KEY,
            JSON.stringify(updatedQueue)
          );
        } catch (error) {
          // Increment retry count
          item.retryCount++;
          if (item.retryCount > 3) {
            console.error('Sync failed after 3 retries:', error);
            continue;
          }
          await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
        }
      }
    } catch (error) {
      console.error('Lỗi khi xử lý sync queue:', error);
    }
  },
};
