import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { FilterOptions, COOKING_TIME_RANGES, SERVINGS_RANGES } from '../types';
import { DishCategory, IngredientType } from '../../../types';

interface Props {
  filterOptions: FilterOptions;
  onFilterChange: (newOptions: FilterOptions) => void;
}

export const AdvancedFilters = ({ filterOptions, onFilterChange }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleCategoryChange = (category: DishCategory | null) => {
    onFilterChange({
      ...filterOptions,
      category: filterOptions.category === category ? null : category,
    });
  };

  const handleDifficultyChange = (difficulty: number | null) => {
    onFilterChange({
      ...filterOptions,
      difficulty: filterOptions.difficulty === difficulty ? null : difficulty,
    });
  };

  const handleCookingTimeChange = (min: number | null, max: number | null) => {
    onFilterChange({
      ...filterOptions,
      cookingTime: { min, max },
    });
  };

  const handleServingsChange = (min: number | null, max: number | null) => {
    onFilterChange({
      ...filterOptions,
      servings: { min, max },
    });
  };

  const handleIngredientTypeChange = (type: IngredientType) => {
    const types = [...filterOptions.mainIngredientTypes];
    const index = types.indexOf(type);

    if (index >= 0) {
      types.splice(index, 1);
    } else {
      types.push(type);
    }

    onFilterChange({
      ...filterOptions,
      mainIngredientTypes: types,
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* Lọc theo loại món */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Loại món
        </Typography>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterOptions.category === 'vegetarian' && styles.activeButton,
            ]}
            onPress={() => handleCategoryChange('vegetarian')}
          >
            <Typography
              variant="body2"
              style={[
                styles.buttonText,
                filterOptions.category === 'vegetarian' && styles.activeText,
              ]}
            >
              Chay
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterOptions.category === 'non-vegetarian' &&
                styles.activeButton,
            ]}
            onPress={() => handleCategoryChange('non-vegetarian')}
          >
            <Typography
              variant="body2"
              style={[
                styles.buttonText,
                filterOptions.category === 'non-vegetarian' &&
                  styles.activeText,
              ]}
            >
              Mặn
            </Typography>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lọc theo độ khó */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Độ khó
        </Typography>
        <View style={styles.buttonGroup}>
          {[1, 2, 3, 4, 5].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.filterButton,
                filterOptions.difficulty === level && styles.activeButton,
              ]}
              onPress={() => handleDifficultyChange(level)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.buttonText,
                  filterOptions.difficulty === level && styles.activeText,
                ]}
              >
                {level}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Lọc theo thời gian nấu */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Thời gian
        </Typography>
        <View style={styles.buttonGroup}>
          {COOKING_TIME_RANGES.map((range) => (
            <TouchableOpacity
              key={range.label}
              style={[
                styles.filterButton,
                filterOptions.cookingTime.min === range.min &&
                  filterOptions.cookingTime.max === range.max &&
                  styles.activeButton,
              ]}
              onPress={() => handleCookingTimeChange(range.min, range.max)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.buttonText,
                  filterOptions.cookingTime.min === range.min &&
                    filterOptions.cookingTime.max === range.max &&
                    styles.activeText,
                ]}
              >
                {range.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Lọc theo số người ăn */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Số người
        </Typography>
        <View style={styles.buttonGroup}>
          {SERVINGS_RANGES.map((range) => (
            <TouchableOpacity
              key={range.label}
              style={[
                styles.filterButton,
                filterOptions.servings.min === range.min &&
                  filterOptions.servings.max === range.max &&
                  styles.activeButton,
              ]}
              onPress={() => handleServingsChange(range.min, range.max)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.buttonText,
                  filterOptions.servings.min === range.min &&
                    filterOptions.servings.max === range.max &&
                    styles.activeText,
                ]}
              >
                {range.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.md,
      gap: theme.spacing.lg,
    },
    filterGroup: {
      marginRight: theme.spacing.lg,
    },
    groupTitle: {
      marginBottom: theme.spacing.xs,
      color: theme.colors.text.secondary,
    },
    buttonGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.xs,
    },
    filterButton: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
      borderWidth: 1,
      borderColor: theme.colors.divider,
    },
    activeButton: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    buttonText: {
      color: theme.colors.text.primary,
    },
    activeText: {
      color: theme.colors.primary.contrast,
    },
  });
