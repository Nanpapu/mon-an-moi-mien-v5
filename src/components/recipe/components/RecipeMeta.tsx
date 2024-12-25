import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Recipe } from '../../../types';
import { createStyles } from './RecipeMeta.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';
import { PriceEstimationService } from '../../../services/priceEstimationService';
import { SEASONAL_ADJUSTMENTS } from '../../../constants/ingredientPrices';

interface Props {
  recipe: Recipe;
}

// Component hiển thị thông tin meta của công thức
export const RecipeMeta = ({ recipe }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const priceInfo = PriceEstimationService.calculateRecipePrice(
    recipe.ingredients,
    recipe.servings || 1
  );

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

      <View style={styles.metaDivider} />

      <View style={styles.metaItem}>
        <View style={styles.metaIcon}>
          <Ionicons
            name="wallet-outline"
            size={16}
            color={theme.colors.text.secondary}
          />
        </View>
        <Typography style={styles.metaLabel}>Chi phí ước tính</Typography>
        <Typography style={styles.metaValue}>
          {`${(priceInfo.priceRange.min / 1000).toFixed(0)}-${(priceInfo.priceRange.max / 1000).toFixed(0)}k`}
        </Typography>
        <Typography
          style={[
            styles.priceLevel,
            {
              backgroundColor:
                priceInfo.priceLevel === 'Rẻ'
                  ? theme.colors.success.main
                  : priceInfo.priceLevel === 'Trung bình'
                    ? theme.colors.warning.main
                    : theme.colors.error.main,
              color: '#FFFFFF',
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              fontWeight: '600',
              textShadowColor: 'rgba(0, 0, 0, 0.2)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 1,
            },
          ]}
        >
          {priceInfo.priceLevel}
        </Typography>
      </View>
    </View>
  );
};
