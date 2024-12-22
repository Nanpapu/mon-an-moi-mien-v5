import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Ingredient } from '../../../types';
import { createStyles } from './RecipeIngredients.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  ingredients: Ingredient[];
}

export const RecipeIngredients = ({ ingredients }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.sectionTitle}>
        <Ionicons
          name="restaurant-outline"
          size={20}
          color={theme.colors.primary.main}
          style={styles.sectionIcon}
        />
        <Typography variant="h3">Nguyên liệu</Typography>
      </View>

      <View style={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientItem}>
            <View style={styles.ingredientNumber}>
              <Typography style={styles.ingredientNumberText}>
                {index + 1}
              </Typography>
            </View>
            <Typography style={styles.ingredientText}>
              {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
              {ingredient.note && ` (${ingredient.note})`}
            </Typography>
          </View>
        ))}
      </View>
    </View>
  );
};
