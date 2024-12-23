// Module xử lý lưu trữ dữ liệu local sử dụng AsyncStorage
// Bao gồm các hàm để lưu, lấy và xóa công thức nấu ăn
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe, Region } from '../types';
import { UserSavedRecipesService } from '../services/userSavedRecipesService';
import { CacheService } from '../services/cacheService';
import { CACHE_KEYS } from '../constants/cacheKeys';
import { ImageCacheService } from '../services/imageCacheService';

// Khóa lưu trữ cho danh sách công thức
const SAVED_RECIPES_KEY = (userId: string) => `saved_recipes_${userId}`;

// FUNCTIONS
// Lưu một công thức mới vào storage
export const saveRecipe = async (
  recipe: Recipe,
  userId: string
): Promise<boolean> => {
  try {
    const key = SAVED_RECIPES_KEY(userId);
    const savedRecipesStr = await AsyncStorage.getItem(key);
    let savedRecipes: Recipe[] = savedRecipesStr
      ? JSON.parse(savedRecipesStr)
      : [];

    // Check if recipe already exists
    if (savedRecipes.some((r) => r.id === recipe.id)) {
      return false;
    }

    // Add new recipe
    savedRecipes.push(recipe);

    // Save to local storage
    await AsyncStorage.setItem(key, JSON.stringify(savedRecipes));

    // Clear cache to force reload
    await CacheService.clearCache(`${CACHE_KEYS.SAVED_RECIPES}${userId}`);

    // Sync to cloud
    const recipeIds = savedRecipes.map((r: Recipe) => r.id);
    await UserSavedRecipesService.syncToCloud(userId, recipeIds);

    return true;
  } catch (error) {
    console.error('Lỗi khi lưu công thức:', error);
    return false;
  }
};

// Lấy danh sách tất cả công thức đã lưu
export const getSavedRecipes = async (userId: string): Promise<Recipe[]> => {
  try {
    const key = SAVED_RECIPES_KEY(userId);
    const savedRecipesStr = await AsyncStorage.getItem(key);
    return savedRecipesStr ? JSON.parse(savedRecipesStr) : [];
  } catch (error) {
    console.error('Lỗi khi lấy công thức đã lưu:', error);
    return [];
  }
};

// Xóa một công thức khỏi danh sách đã lưu
export const removeRecipe = async (
  recipeId: string,
  userId: string
): Promise<boolean> => {
  try {
    const key = SAVED_RECIPES_KEY(userId);
    const savedRecipesStr = await AsyncStorage.getItem(key);
    if (!savedRecipesStr) return false;

    const savedRecipes: Recipe[] = JSON.parse(savedRecipesStr);
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );

    // Xóa cache ảnh
    await ImageCacheService.clearImageCache(recipeId);

    // Update local storage
    await AsyncStorage.setItem(key, JSON.stringify(updatedRecipes));

    // Clear cache
    await CacheService.clearCache(`${CACHE_KEYS.SAVED_RECIPES}${userId}`);

    // Sync to cloud
    const recipeIds = updatedRecipes.map((r: Recipe) => r.id);
    await UserSavedRecipesService.syncToCloud(userId, recipeIds);

    return true;
  } catch (error) {
    console.error('Lỗi khi xóa công thức:', error);
    return false;
  }
};

export const migrateSavedRecipes = async (userId: string) => {
  try {
    const savedRecipes = await getSavedRecipes(userId);

    const updatedRecipes = savedRecipes.map((recipe) => {
      const regionId = recipe.id.split('_')[0];
      return {
        ...recipe,
        regionId,
        image: recipe.image.startsWith('http')
          ? `recipes/images/${regionId}/${recipe.id}.jpg`
          : recipe.image,
      };
    });

    // Save to local storage
    await AsyncStorage.setItem(
      SAVED_RECIPES_KEY(userId),
      JSON.stringify(updatedRecipes)
    );

    // Clear cache
    await CacheService.clearCache(`${CACHE_KEYS.SAVED_RECIPES}${userId}`);

    // Sync to cloud after migration
    const recipeIds = updatedRecipes.map((r: Recipe) => r.id);
    await UserSavedRecipesService.syncToCloud(userId, recipeIds);

    return true;
  } catch (error) {
    console.error('Lỗi khi migrate dữ liệu:', error);
    return false;
  }
};
