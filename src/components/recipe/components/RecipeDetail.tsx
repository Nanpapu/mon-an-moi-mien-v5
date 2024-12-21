import React from 'react';
import { View, ScrollView } from 'react-native';
import { Recipe } from '../../../types';
import { createStyles } from '../RecipeCard.styles';
import { useTheme } from '../../../theme/ThemeContext';
import {
  RecipeHeader,
  RecipeMeta,
  RecipeIngredients,
  InstructionsSection,
  RecipeActions,
  RecipeReviews,
} from './';

interface Props {
  recipe: Recipe;
  onClose: () => void;
  onSave?: () => Promise<boolean>;
  onDelete?: (recipe: Recipe) => void;
  showActions?: boolean;
  showReviews?: boolean;
}

export const RecipeDetail = ({
  recipe,
  onClose,
  onSave,
  onDelete,
  showActions = true,
  showReviews = true,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <ScrollView style={styles.detailContainer}>
      <View style={styles.detailContent}>
        {/* Thông tin cơ bản */}
        <RecipeMeta recipe={recipe} />

        {/* Phần nguyên liệu */}
        <View style={styles.detailSection}>
          <RecipeIngredients ingredients={recipe.ingredients} />
        </View>

        {/* Phần hướng dẫn */}
        <View style={styles.detailSection}>
          <InstructionsSection instructions={recipe.instructions} />
        </View>

        {/* Phần đánh giá */}
        {showReviews && (
          <View style={styles.detailSection}>
            <RecipeReviews recipe={recipe} />
          </View>
        )}

        {/* Các action */}
        {showActions && (
          <View style={styles.detailActions}>
            <RecipeActions
              recipe={recipe}
              onSave={onSave}
              onDelete={onDelete}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
