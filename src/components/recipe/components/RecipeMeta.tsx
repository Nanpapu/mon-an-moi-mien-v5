import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Recipe } from '../../../types';
import { createStyles } from './RecipeMeta.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  recipe: Recipe;
}

// Component hiển thị thông tin meta của công thức
export const RecipeMeta = ({ recipe }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.recipeMetaContainer}>
      <View style={styles.metaItem}>
        <View style={styles.metaIcon}>
          <Ionicons
            name="time-outline"
            size={16}
            color={theme.colors.text.secondary}
          />
        </View>
        <Typography style={styles.metaLabel}>Thời gian</Typography>
        <Typography style={styles.metaValue}>
          {recipe.cookingTime ? `${recipe.cookingTime} phút` : 'N/A'}
        </Typography>
      </View>

      <View style={styles.metaDivider} />

      <View style={styles.metaItem}>
        <View style={styles.metaIcon}>
          <Ionicons
            name="bar-chart-outline"
            size={16}
            color={theme.colors.text.secondary}
          />
        </View>
        <Typography style={styles.metaLabel}>Độ khó</Typography>
        <Typography style={styles.metaValue}>
          {recipe.difficulty ? `${recipe.difficulty}/5` : 'N/A'}
        </Typography>
      </View>

      <View style={styles.metaDivider} />

      <View style={styles.metaItem}>
        <View style={styles.metaIcon}>
          <Ionicons
            name="people-outline"
            size={16}
            color={theme.colors.text.secondary}
          />
        </View>
        <Typography style={styles.metaLabel}>Khẩu phần</Typography>
        <Typography style={styles.metaValue}>
          {recipe.servings ? `${recipe.servings} người` : 'N/A'}
        </Typography>
      </View>
    </View>
  );
};
