import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';
import { FavoriteService } from '../../services/favoriteService';
import { Recipe } from '../../types';

// Props interface cho FavoriteButton component
interface Props {
  recipe: Recipe;      // Thông tin công thức nấu ăn
  onToggle?: () => void; // Callback khi toggle trạng thái yêu thích
  iconSize?: number;    // Thêm prop mới
}

export function FavoriteButton({ recipe, onToggle, iconSize = 20 }: Props) {
  const { theme } = useTheme();
  // State quản lý trạng thái yêu thích
  const [isFavorite, setIsFavorite] = useState(false); // Trạng thái yêu thích
  const [isLoading, setIsLoading] = useState(true);    // Trạng thái loading

  // Effect hook để kiểm tra trạng thái yêu thích khi recipe.id thay đổi
  useEffect(() => {
    checkFavoriteStatus();
  }, [recipe.id]);

  // Kiểm tra trạng thái yêu thích từ service
  const checkFavoriteStatus = async () => {
    const status = await FavoriteService.isFavorite(recipe.id);
    setIsFavorite(status);
    setIsLoading(false);
  };

  // Xử lý toggle trạng thái yêu thích
  const toggleFavorite = async () => {
    // Set trạng thái loading
    setIsLoading(true);
    // Xử lý toggle trạng thái yêu thích
    try {
      if (isFavorite) {
        await FavoriteService.removeFavorite(recipe.id);
      } else {
        await FavoriteService.addFavorite(recipe);
      }
      // Cập nhật trạng thái yêu thích
      setIsFavorite(!isFavorite);
      // Gọi callback khi toggle
      onToggle?.();
    } catch (error) {
      console.error('Lỗi khi thay đổi trạng thái yêu thích:', error);
    }
    // Reset trạng thái loading
    setIsLoading(false);
  };

  return (
    <TouchableOpacity
      onPress={toggleFavorite}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={iconSize}
        color={theme.colors.error.main}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
});
