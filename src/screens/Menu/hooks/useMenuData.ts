import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Recipe } from '../../../types';
import { removeRecipe, migrateSavedRecipes } from '../../../utils/storage';
import { useRecipes } from '../../../context/RecipeContext';
import { useToast } from '../../../hooks/useToast';
import { useAuth } from '../../../context/AuthContext';

export const useMenuData = () => {
  const { savedRecipes, refreshSavedRecipes } = useRecipes();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    loadData();
  }, [user]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (user) {
        await migrateSavedRecipes(user.uid);
        await refreshSavedRecipes();
      } else {
        await refreshSavedRecipes();
      }
    } catch (error) {
      console.error('Lỗi khi load dữ liệu:', error);
      showToast('error', 'Không thể tải dữ liệu');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteRecipe = async (recipe: Recipe) => {
    if (!user) {
      showToast('error', 'Bạn cần đăng nhập để xóa công thức');
      return;
    }

    try {
      Alert.alert(
        'Xác nhận xóa',
        `Bạn có chắc muốn xóa công thức "${recipe.name}" không?`,
        [
          {
            text: 'Hủy',
            style: 'cancel',
          },
          {
            text: 'Xóa',
            style: 'destructive',
            onPress: async () => {
              setIsLoading(true);
              const success = await removeRecipe(recipe.id, user.uid);

              if (success) {
                await refreshSavedRecipes();
                showToast('success', 'Đã xóa công thức');
              } else {
                showToast('error', 'Không thể xóa công thức');
              }
              setIsLoading(false);
            },
          },
        ]
      );
    } catch (error) {
      console.error('Lỗi khi xóa công thức:', error);
      showToast('error', 'Không thể xóa công thức');
      setIsLoading(false);
    }
  };

  return {
    savedRecipes,
    isRefreshing,
    isLoading,
    setIsLoading,
    handleDeleteRecipe,
    loadData,
    refreshSavedRecipes,
  };
};
