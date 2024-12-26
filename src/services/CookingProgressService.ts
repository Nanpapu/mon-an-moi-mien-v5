import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@cooking_progress:';
const INGREDIENTS_KEY = `${STORAGE_KEY}ingredients:`;
const INSTRUCTIONS_KEY = `${STORAGE_KEY}instructions:`;

interface CookingProgress {
  checkedIngredients: string[];
  checkedInstructions: string[];
  timestamp: number;
}

export class CookingProgressService {
  static async saveIngredientsProgress(
    recipeId: string,
    checkedItems: string[]
  ) {
    try {
      const key = `${INGREDIENTS_KEY}${recipeId}`;
      const data: CookingProgress = {
        checkedIngredients: checkedItems,
        checkedInstructions: [],
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Lỗi khi lưu tiến độ nguyên liệu:', error);
    }
  }

  static async saveInstructionsProgress(
    recipeId: string,
    checkedItems: string[]
  ) {
    try {
      const key = `${INSTRUCTIONS_KEY}${recipeId}`;
      const data: CookingProgress = {
        checkedIngredients: [],
        checkedInstructions: checkedItems,
        timestamp: Date.now(),
      };
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Lỗi khi lưu tiến độ hướng dẫn:', error);
    }
  }

  static async getIngredientsProgress(recipeId: string): Promise<string[]> {
    try {
      const key = `${INGREDIENTS_KEY}${recipeId}`;
      const data = await AsyncStorage.getItem(key);
      if (data) {
        const parsed: CookingProgress = JSON.parse(data);
        return parsed.checkedIngredients;
      }
      return [];
    } catch (error) {
      console.error('Lỗi khi đọc tiến độ nguyên liệu:', error);
      return [];
    }
  }

  static async getInstructionsProgress(recipeId: string): Promise<string[]> {
    try {
      const key = `${INSTRUCTIONS_KEY}${recipeId}`;
      const data = await AsyncStorage.getItem(key);
      if (data) {
        const parsed: CookingProgress = JSON.parse(data);
        return parsed.checkedInstructions;
      }
      return [];
    } catch (error) {
      console.error('Lỗi khi đọc tiến độ hướng dẫn:', error);
      return [];
    }
  }

  static async clearProgress(recipeId: string) {
    try {
      const ingredientsKey = `${INGREDIENTS_KEY}${recipeId}`;
      const instructionsKey = `${INSTRUCTIONS_KEY}${recipeId}`;
      await AsyncStorage.multiRemove([ingredientsKey, instructionsKey]);
    } catch (error) {
      console.error('Lỗi khi xóa tiến độ:', error);
    }
  }
}
