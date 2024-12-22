import React, { useState } from 'react';
import {
  ScrollView,
  View,
  RefreshControl,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Recipe } from '../../../types';
import { RecipeGridItem } from './RecipeGridItem';
import { RecipeDetailModal } from './RecipeDetailModal';
import { EmptyState } from './EmptyState';
import { createStyles } from '../styles';
import { useTheme } from '../../../theme/ThemeContext';
import { useGridZoom } from '../hooks/useGridZoom';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecipes } from '../../../context/RecipeContext';
import { RecipeCard } from '../../../components/recipe/RecipeCard';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '../../../components/shared/Typography';

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
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const { refreshSavedRecipes } = useRecipes();

  const handleRecipePress = async (recipe: Recipe) => {
    // Refresh data trước khi show
    await refreshSavedRecipes();
    setSelectedRecipe(recipe);
  };

  if (!isLoading && filteredRecipes.length === 0) {
    return (
      <EmptyState
        hasRecipes={savedRecipes.length > 0}
        isRefreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    );
  }

  return (
    <>
      <ScrollView
        style={styles.recipeList}
        contentContainerStyle={styles.gridContainer}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.grid}>
          {filteredRecipes.map((recipe) => (
            <RecipeGridItem
              key={recipe.id}
              recipe={recipe}
              onPress={() => handleRecipePress(recipe)}
              width={calculateItemWidth()}
              config={currentConfig}
              onFavoriteChange={onFavoriteChange}
              isSelectionMode={isSelectionMode}
              isSelected={selectedRecipes.has(recipe.id)}
              onLongPress={() => onLongPress?.(recipe.id)}
              onToggleSelect={() => onToggleSelect?.(recipe.id)}
            />
          ))}
        </View>
      </ScrollView>

      {!isSelectionMode && selectedRecipe && (
        <Modal
          visible={!!selectedRecipe}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setSelectedRecipe(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => setSelectedRecipe(null)}
                style={styles.backButton}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={theme.colors.text.primary}
                />
              </TouchableOpacity>
              <Typography variant="h2" style={styles.modalTitle}>
                {selectedRecipe.name}
              </Typography>
            </View>

            <ScrollView style={{ flex: 1 }}>
              <RecipeCard
                recipe={selectedRecipe}
                mode="detailed"
                showActions={true}
                showReviews={true}
                onDelete={onDeleteRecipe}
              />
            </ScrollView>
          </View>
        </Modal>
      )}
    </>
  );
};
