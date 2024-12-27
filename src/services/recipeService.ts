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
import { ImageUtils } from '../utils/imageUtils';
import { ImageCacheService } from './imageCacheService';
import { Timestamp } from 'firebase/firestore';

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
  getRecipeById: async (recipeId: string): Promise<Recipe | null> => {
    try {
      const cacheKey = `${CACHE_KEYS.RECIPES}${recipeId}`;

      const recipeDoc = await getDoc(doc(db, COLLECTIONS.RECIPES, recipeId));
      const statsDoc = await getDoc(
        doc(db, COLLECTIONS.RECIPE_STATS, recipeId)
      );

      if (!recipeDoc.exists()) return null;

      const recipeData = recipeDoc.data();
      const recipe: Recipe = {
        id: recipeDoc.id,
        name: recipeData.name,
        category: recipeData.category,
        region: recipeData.region,
        image: recipeData.image,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
      };

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
      let localRecipes: Recipe[] = [];

      // 1. Lấy dữ liệu từ cache
      const cachedRecipes = await CacheService.getCache(
        cacheKey,
        CACHE_EXPIRY.SAVED_RECIPES
      );
      if (cachedRecipes) {
        localRecipes = cachedRecipes;
      } else {
        // 2. Nếu không có cache, lấy từ AsyncStorage
        const savedRecipesStr = await AsyncStorage.getItem(
          `saved_recipes_${userId}`
        );
        if (savedRecipesStr) {
          localRecipes = JSON.parse(savedRecipesStr);
        }
      }

      // 3. Lấy dữ liệu từ cloud
      const { recipeIds } = await UserSavedRecipesService.getFromCloud(userId);
      let cloudRecipes: Recipe[] = [];
      if (recipeIds.length > 0) {
        const recipes = await Promise.all(
          recipeIds.map((id) => RecipeService.getRecipeById(id))
        );
        cloudRecipes = recipes.filter(
          (r): r is Recipe => r !== null
        ) as Recipe[];
      }

      // 4. Merge dữ liệu từ local và cloud
      const mergedRecipes = [
        ...localRecipes,
        ...cloudRecipes.filter(
          (cloudRecipe) =>
            !localRecipes.some(
              (localRecipe) => localRecipe.id === cloudRecipe.id
            )
        ),
      ];

      // 5. Cập nhật lại local storage và cache
      await AsyncStorage.setItem(
        `saved_recipes_${userId}`,
        JSON.stringify(mergedRecipes)
      );
      await CacheService.setCache(cacheKey, mergedRecipes);

      // 6. Sync lại lên cloud để đảm bảo dữ liệu đồng nhất
      const mergedRecipeIds = mergedRecipes.map((r) => r.id);
      UserSavedRecipesService.syncToCloud(userId, mergedRecipeIds).catch(
        console.error
      );

      return mergedRecipes;
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
      // 1. Lấy danh sách hiện tại (đã được merge)
      const currentRecipes = await RecipeService.getSavedRecipes(userId);

      // 2. Kiểm tra trùng lặp
      if (currentRecipes.some((r) => r.id === recipe.id)) {
        return false;
      }

      // 3. Cache ảnh trước khi lưu công thức
      if (recipe.image) {
        const imageUrl = await ImageUtils.getRecipeImageUrl(recipe.image);
        if (imageUrl) {
          await ImageCacheService.cacheImage(imageUrl, recipe.id);
        }
      }

      // 4. Thêm công thức mới vào danh sách
      const updatedRecipes = [...currentRecipes, recipe];

      // 5. Cập nhật local storage và cache
      const cacheKey = `${CACHE_KEYS.SAVED_RECIPES}${userId}`;
      await AsyncStorage.setItem(
        `saved_recipes_${userId}`,
        JSON.stringify(updatedRecipes)
      );
      await CacheService.setCache(cacheKey, updatedRecipes);

      // 6. Sync to cloud
      const recipeIds = updatedRecipes.map((r) => r.id);
      await UserSavedRecipesService.syncToCloud(userId, recipeIds);

      return true;
    } catch (error) {
      console.error('Lỗi khi lưu công thức:', error);
      return false;
    }
  },

  syncToCloud: async (userId: string, recipes: Recipe[]) => {
    try {
      const userRecipesRef = doc(db, 'users', userId, 'saved_recipes', 'data');
      const docSnap = await getDoc(userRecipesRef);

      // Merge với data hiện tại nếu có
      const currentData = docSnap.exists() ? docSnap.data() : { recipes: [] };
      const mergedRecipes = [...currentData.recipes];

      // Thêm recipes mới vào nếu chưa tồn tại
      recipes.forEach((recipe) => {
        if (!mergedRecipes.some((r) => r.id === recipe.id)) {
          mergedRecipes.push(recipe);
        }
      });

      await setDoc(
        userRecipesRef,
        {
          recipes: mergedRecipes,
          updatedAt: Timestamp.now(),
          version: (currentData.version || 0) + 1,
        },
        { merge: true }
      );

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
