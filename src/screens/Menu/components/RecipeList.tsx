import React, { useState } from 'react';
import {
  FlatList,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { Recipe } from '../../../types';
import { RecipeGridItem } from './RecipeGridItem';
import { RecipeDetailModal } from './RecipeDetailModal';
import { EmptyState } from './EmptyState';
import { createStyles } from '../styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../../components/shared';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  isLoading: boolean;
  isRefreshing: boolean;
  filteredRecipes: Recipe[];
  savedRecipes: Recipe[];
  onRefresh: () => void;
  onDeleteRecipe: (recipe: Recipe) => Promise<void>;
  currentConfig: any;
  calculateItemWidth: () => number;
  onFavoriteChange: () => void;
  isSelectionMode?: boolean;
  selectedRecipes?: Set<string>;
  onLongPress?: (recipeId: string) => void;
  onToggleSelect?: (recipeId: string) => void;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export const RecipeList = ({
  isLoading,
  isRefreshing,
  filteredRecipes,
  savedRecipes,
  onRefresh,
  onDeleteRecipe,
  currentConfig,
  calculateItemWidth,
  onFavoriteChange,
  isSelectionMode = false,
  selectedRecipes = new Set(),
  onLongPress,
  onToggleSelect,
  hasMore = false,
  onLoadMore,
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  if (!isLoading && filteredRecipes.length === 0) {
    return (
      <EmptyState
        hasRecipes={savedRecipes.length > 0}
        isRefreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    );
  }

  const renderFooter = () => {
    if (!hasMore) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color={theme.colors.primary.main} />
        <Typography
          variant="body2"
          style={{ color: theme.colors.text.secondary, marginLeft: 8 }}
        >
          Đang tải thêm...
        </Typography>
      </View>
    );
  };

  const handleEndReached = () => {
    if (hasMore && !isLoading && !isRefreshing && onLoadMore) {
      onLoadMore();
    }
  };

  return (
    <>
      <FlatList
        data={filteredRecipes}
        numColumns={currentConfig.columns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <RecipeGridItem
            key={item.id}
            recipe={item}
            onPress={() => setSelectedRecipe(item)}
            width={calculateItemWidth()}
            config={currentConfig}
            onFavoriteChange={onFavoriteChange}
            isSelectionMode={isSelectionMode}
            isSelected={selectedRecipes.has(item.id)}
            onLongPress={() => onLongPress?.(item.id)}
            onToggleSelect={() => onToggleSelect?.(item.id)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />

      {!isSelectionMode && (
        <RecipeDetailModal
          visible={!!selectedRecipe}
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onDelete={onDeleteRecipe}
        />
      )}
    </>
  );
};
