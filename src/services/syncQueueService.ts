import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { UserSavedRecipesService } from './userSavedRecipesService';
import { CookingRecipesService } from './cookingRecipesService';

const SYNC_QUEUE_KEY = '@sync_queue';

interface SyncQueueItem {
  type: 'RECIPES' | 'COOKING_RECIPES' | 'REMOVE_COOKING_RECIPE';
  userId: string;
  data: any;
  timestamp: number;
  retryCount: number;
}

export const SyncQueueService = {
  addToQueue: async (item: Omit<SyncQueueItem, 'retryCount'>) => {
    try {
      const queue = await SyncQueueService.getQueue();
      queue.push({
        ...item,
        retryCount: 0,
      });
      await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
    } catch (error) {
      console.error('Lỗi khi thêm vào sync queue:', error);
    }
  },

  getQueue: async (): Promise<SyncQueueItem[]> => {
    try {
      const queueStr = await AsyncStorage.getItem(SYNC_QUEUE_KEY);
      return queueStr ? JSON.parse(queueStr) : [];
    } catch (error) {
      console.error('Lỗi khi lấy sync queue:', error);
      return [];
    }
  },

  processQueue: async () => {
    try {
      const queue = await SyncQueueService.getQueue();
      if (queue.length === 0) return;

      const networkState = await NetInfo.fetch();
      if (!networkState.isConnected) return;

      for (const item of queue) {
        try {
          switch (item.type) {
            case 'RECIPES':
              await UserSavedRecipesService.syncToCloud(item.userId, item.data);
              break;
            case 'COOKING_RECIPES':
              await CookingRecipesService.saveCookingRecipes(
                item.userId,
                item.data
              );
              break;
            case 'REMOVE_COOKING_RECIPE':
              const currentRecipes =
                await CookingRecipesService.getCookingRecipes(item.userId);
              const updatedRecipes = currentRecipes.filter(
                (r) => r.id !== item.data.recipeId
              );
              await CookingRecipesService.saveCookingRecipes(
                item.userId,
                updatedRecipes
              );
              break;
          }

          // Remove successful item
          const updatedQueue = queue.filter(
            (q) => q.userId !== item.userId || q.timestamp !== item.timestamp
          );
          await AsyncStorage.setItem(
            SYNC_QUEUE_KEY,
            JSON.stringify(updatedQueue)
          );
        } catch (error) {
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
