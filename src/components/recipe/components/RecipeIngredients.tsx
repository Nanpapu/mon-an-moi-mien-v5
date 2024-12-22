import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Ingredient } from '../../../types';
import { createStyles } from './RecipeIngredients.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  ingredients: Ingredient[];
  onIngredientPress?: (ingredient: Ingredient) => void;
}

export const RecipeIngredients = ({
  ingredients,
  onIngredientPress,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // Tính toán tổng khối lượng và thể tích
  const totals = useMemo(() => {
    return ingredients.reduce(
      (acc, ingredient) => {
        const amount = parseFloat(ingredient.amount.toString());
        if (isNaN(amount)) return acc;

        switch (ingredient.unit?.toLowerCase()) {
          case 'g':
          case 'gram':
            acc.weight += amount;
            break;
          case 'kg':
          case 'kilogram':
            acc.weight += amount * 1000;
            break;
          case 'ml':
          case 'milliliter':
            acc.volume += amount;
            break;
          case 'l':
          case 'liter':
            acc.volume += amount * 1000;
            break;
        }
        return acc;
      },
      { weight: 0, volume: 0 }
    );
  }, [ingredients]);

  // Nhóm nguyên liệu theo loại
  const groupedIngredients = useMemo(() => {
    return ingredients.reduce(
      (groups, ingredient) => {
        const type = ingredient.category || 'other';
        if (!groups[type]) {
          groups[type] = [];
        }
        groups[type].push(ingredient);
        return groups;
      },
      {} as Record<string, Ingredient[]>
    );
  }, [ingredients]);

  // Render một nhóm nguyên liệu
  const renderIngredientGroup = (
    title: string,
    items: Ingredient[] = [],
    iconName: string,
    iconColor: string
  ) => {
    if (!items.length) return null;

    return (
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <View style={styles.groupTitleContainer}>
            <View style={[styles.groupIcon, { backgroundColor: iconColor }]}>
              <Ionicons
                name={iconName as any}
                size={16}
                color={theme.colors.background.paper}
              />
            </View>
            <Typography style={styles.groupTitle}>
              {title} ({items.length})
            </Typography>
          </View>
        </View>
        <View style={styles.ingredientsList}>
          {items.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <View
                style={[
                  styles.ingredientNumber,
                  { backgroundColor: iconColor },
                ]}
              >
                <Typography style={styles.ingredientNumberText}>
                  {index + 1}
                </Typography>
              </View>
              <View style={styles.ingredientContent}>
                <Typography style={styles.ingredientName}>
                  {ingredient.name}
                </Typography>
                <View style={styles.ingredientDetails}>
                  <Typography style={styles.ingredientAmount}>
                    {`${ingredient.amount} ${ingredient.unit}`}
                  </Typography>
                  {ingredient.note && (
                    <Typography style={styles.ingredientNote}>
                      ({ingredient.note})
                    </Typography>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.ingredientsContainer}>
      {/* Header với tổng số lượng */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.titleIcon}>
            <Ionicons
              name="restaurant-outline"
              size={18}
              color={theme.colors.primary.main}
            />
          </View>
          <Typography style={styles.title}>
            Nguyên liệu ({ingredients.length})
          </Typography>
        </View>

        {/* Hiển thị tổng khối lượng/thể tích */}
        {(totals.weight > 0 || totals.volume > 0) && (
          <View style={styles.totalContainer}>
            {totals.weight > 0 && (
              <View style={styles.totalItem}>
                <Ionicons
                  name="scale-outline"
                  size={14}
                  color={theme.colors.text.secondary}
                />
                <Typography style={styles.totalText}>
                  {totals.weight >= 1000
                    ? `${(totals.weight / 1000).toFixed(1)}kg`
                    : `${totals.weight.toFixed(0)}g`}
                </Typography>
              </View>
            )}
            {totals.volume > 0 && (
              <View style={styles.totalItem}>
                <Ionicons
                  name="beaker-outline"
                  size={14}
                  color={theme.colors.text.secondary}
                />
                <Typography style={styles.totalText}>
                  {totals.volume >= 1000
                    ? `${(totals.volume / 1000).toFixed(1)}L`
                    : `${totals.volume.toFixed(0)}ml`}
                </Typography>
              </View>
            )}
          </View>
        )}
      </View>

      {/* Danh sách nguyên liệu theo nhóm */}
      <View style={styles.ingredientsListContainer}>
        {renderIngredientGroup(
          'Thịt các loại',
          groupedIngredients.meat,
          'nutrition-outline',
          theme.colors.error.main
        )}
        {renderIngredientGroup(
          'Hải sản',
          groupedIngredients.seafood,
          'fish-outline',
          theme.colors.info.main
        )}
        {renderIngredientGroup(
          'Rau củ',
          groupedIngredients.vegetable,
          'leaf-outline',
          theme.colors.success.main
        )}
        {renderIngredientGroup(
          'Gia vị',
          groupedIngredients.spice,
          'flask-outline',
          theme.colors.warning.main
        )}
        {renderIngredientGroup(
          'Khác',
          groupedIngredients.other,
          'apps-outline',
          theme.colors.text.secondary
        )}
      </View>
    </View>
  );
};
