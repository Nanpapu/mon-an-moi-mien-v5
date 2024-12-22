/**
 * @fileoverview Service xử lý các chức năng liên quan đến công thức nấu ăn
 */

import { CacheService, CACHE_KEYS, CACHE_EXPIRY } from './cacheService';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../constants/collections';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe, Region } from '../types';
import { UserSavedRecipesService } from './userSavedRecipesService';

/**
 * Service quản lý công thức nấu ăn
 * @module RecipeService
 */
export const RecipeService = {
  /**
   * Lấy thông tin chi tiết một công thức
   * @param {string} recipeId - ID của công thức cần lấy
   * @returns {Promise<object | null>} Thông tin công thức hoặc null nếu không tìm thấy
   * @throws {Error} Lỗi khi lấy thông tin công thức
   */
  getRecipeById: async (recipeId: string) => {
    try {
      const cacheKey = `${CACHE_KEYS.RECIPES}${recipeId}`;

      // Lấy recipe và stats
      const recipeDoc = await getDoc(doc(db, COLLECTIONS.RECIPES, recipeId));
      const statsDoc = await getDoc(
        doc(db, COLLECTIONS.RECIPE_STATS, recipeId)
      );

      if (!recipeDoc.exists()) return null;

      const recipe = {
        id: recipeDoc.id,
        ...recipeDoc.data(),
        rating: statsDoc.exists() ? statsDoc.data().averageRating : 0,
        totalReviews: statsDoc.exists() ? statsDoc.data().totalReviews : 0,
      };

      // Luôn cập nhật cache mới nhất
      await CacheService.setCache(cacheKey, recipe);
      return recipe;
    } catch (error) {
      console.error('Lỗi khi lấy công thức:', error);
      throw error;
    }
  },

  /**
   * Lấy danh sách công thức đã lưu của người dùng
   * @param {string} userId - ID của người dùng
   * @returns {Promise<Array>} Danh sách công thức đã lưu
   */
  getSavedRecipes: async (userId: string) => {
    try {
      const cacheKey = `${CACHE_KEYS.SAVED_RECIPES}${userId}`;
      const cachedRecipes = await CacheService.getCache(
        cacheKey,
        CACHE_EXPIRY.SAVED_RECIPES
      );

      if (cachedRecipes) {
        // Sync lên cloud ngầm nếu có cache
        const recipeIds = cachedRecipes.map((r: Recipe) => r.id);
        UserSavedRecipesService.syncToCloud(userId, recipeIds).catch(
          console.error
        );
        return cachedRecipes;
      }

      const savedRecipes = await AsyncStorage.getItem(
        `saved_recipes_${userId}`
      );
      if (savedRecipes) {
        const recipes = JSON.parse(savedRecipes);
        await CacheService.setCache(cacheKey, recipes);

        // Sync lên cloud khi lấy từ storage
        const recipeIds = recipes.map((r: Recipe) => r.id);
        UserSavedRecipesService.syncToCloud(userId, recipeIds).catch(
          console.error
        );

        return recipes;
      }

      // Nếu không có local data, thử lấy từ cloud
      const { recipeIds } = await UserSavedRecipesService.getFromCloud(userId);
      if (recipeIds.length > 0) {
        // Convert IDs thành recipes
        const recipes = await Promise.all(
          recipeIds.map((id) => RecipeService.getRecipeById(id))
        );
        const validRecipes = recipes.filter((r) => r !== null);

        // Save xuống local
        await AsyncStorage.setItem(
          `saved_recipes_${userId}`,
          JSON.stringify(validRecipes)
        );
        await CacheService.setCache(cacheKey, validRecipes);

        return validRecipes;
      }

      return [];
    } catch (error) {
      console.error('Lỗi khi lấy công thức đã lưu:', error);
      return [];
    }
  },

  clearRecipeCache: async (recipeId: string) => {
    await CacheService.clearCache(`${CACHE_KEYS.RECIPES}${recipeId}`);
  },

  clearSavedRecipesCache: async (userId: string) => {
    await CacheService.clearCache(`${CACHE_KEYS.SAVED_RECIPES}${userId}`);
  },

  /**
   * Lưu công thức vào danh sách yêu thích của user
   */
  saveRecipe: async (recipe: Recipe, userId: string) => {
    try {
      const cacheKey = `${CACHE_KEYS.SAVED_RECIPES}${userId}`;
      const savedRecipes = await AsyncStorage.getItem(
        `saved_recipes_${userId}`
      );
      let recipes: Recipe[] = savedRecipes ? JSON.parse(savedRecipes) : [];

      if (recipes.some((r) => r.id === recipe.id)) {
        return false;
      }

      recipes.push(recipe);

      // Save local
      await AsyncStorage.setItem(
        `saved_recipes_${userId}`,
        JSON.stringify(recipes)
      );
      await CacheService.setCache(cacheKey, recipes);

      // Sync to cloud
      const recipeIds = recipes.map((r) => r.id);
      UserSavedRecipesService.syncToCloud(userId, recipeIds).catch(
        console.error
      );

      return true;
    } catch (error) {
      console.error('Lỗi khi lưu công thức:', error);
      return false;
    }
  },

  syncToCloud: async (userId: string, recipes: Recipe[]) => {
    try {
      const userRecipesRef = doc(db, 'users', userId, 'saved_recipes', 'data');
      await setDoc(userRecipesRef, { recipes });
      return true;
    } catch (error) {
      console.error('Lỗi khi đồng bộ lên cloud:', error);
      return false;
    }
  },

  getFromCloud: async (userId: string) => {
    try {
      const userRecipesRef = doc(db, 'users', userId, 'saved_recipes', 'data');
      const snapshot = await getDoc(userRecipesRef);
      return snapshot.exists() ? snapshot.data().recipes : [];
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ cloud:', error);
      return [];
    }
  },
};
