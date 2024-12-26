import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../constants';
import { Recipe } from '../types';
import { CacheService } from './cacheService';

const COOKING_RECIPES_KEY = (userId: string) => `cooking_recipes_${userId}`;

export const CookingRecipesService = {
  // Lưu danh sách công thức đang nấu
  saveCookingRecipes: async (
    userId: string,
    recipes: Recipe[]
  ): Promise<boolean> => {
    try {
      // Lưu vào AsyncStorage
      await AsyncStorage.setItem(
        COOKING_RECIPES_KEY(userId),
        JSON.stringify(recipes)
      );

      // Sync lên cloud
      const recipeIds = recipes.map((r) => r.id);
      const docRef = doc(db, COLLECTIONS.USER_SAVED_RECIPES, userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        await setDoc(
          docRef,
          {
            ...data,
            cookingRecipeIds: recipeIds,
          },
          { merge: true }
        );
      }

      return true;
    } catch (error) {
      console.error('Lỗi khi lưu công thức đang nấu:', error);
      return false;
    }
  },

  // Lấy danh sách công thức đang nấu
  getCookingRecipes: async (userId: string): Promise<Recipe[]> => {
    try {
      const localData = await AsyncStorage.getItem(COOKING_RECIPES_KEY(userId));
      if (localData) {
        return JSON.parse(localData);
      }

      // Nếu không có local data, lấy từ cloud
      const docRef = doc(db, COLLECTIONS.USER_SAVED_RECIPES, userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().cookingRecipeIds) {
        return docSnap.data().cookingRecipeIds;
      }

      return [];
    } catch (error) {
      console.error('Lỗi khi lấy công thức đang nấu:', error);
      return [];
    }
  },
};
