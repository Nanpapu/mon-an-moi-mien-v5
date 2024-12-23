import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import {
  FilterOptions,
  COOKING_TIME_RANGES,
  SERVINGS_RANGES,
  DishCategory,
} from '../types';

interface Props {
  filterOptions: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  regions: string[];
}

export const AdvancedFilters = ({
  filterOptions,
  onFilterChange,
  regions,
}: Props) => {
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
      cookingTime: {
        min: filterOptions.cookingTime.min === min ? null : min,
        max: filterOptions.cookingTime.max === max ? null : max,
      },
    });
  };

  const handleServingsChange = (min: number | null, max: number | null) => {
    onFilterChange({
      ...filterOptions,
      servings: {
        min: filterOptions.servings.min === min ? null : min,
        max: filterOptions.servings.max === max ? null : max,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Vùng miền */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Vùng miền
        </Typography>
        <View style={styles.chipContainer}>
          {regions.map((region) => (
            <TouchableOpacity
              key={region}
              style={[
                styles.chip,
                filterOptions.region === region && styles.activeChip,
              ]}
              onPress={() =>
                onFilterChange({
                  ...filterOptions,
                  region: filterOptions.region === region ? null : region,
                })
              }
            >
              <Typography
                variant="body2"
                style={[
                  styles.chipText,
                  filterOptions.region === region && styles.activeChipText,
                ]}
              >
                {region}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Loại món */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Loại món
        </Typography>
        <View style={styles.chipContainer}>
          <TouchableOpacity
            style={[
              styles.chip,
              filterOptions.category === 'vegetarian' && styles.activeChip,
            ]}
            onPress={() => handleCategoryChange('vegetarian')}
          >
            <Typography
              variant="body2"
              style={[
                styles.chipText,
                filterOptions.category === 'vegetarian' &&
                  styles.activeChipText,
              ]}
            >
              Chay
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.chip,
              filterOptions.category === 'non-vegetarian' && styles.activeChip,
            ]}
            onPress={() => handleCategoryChange('non-vegetarian')}
          >
            <Typography
              variant="body2"
              style={[
                styles.chipText,
                filterOptions.category === 'non-vegetarian' &&
                  styles.activeChipText,
              ]}
            >
              Mặn
            </Typography>
          </TouchableOpacity>
        </View>
      </View>

      {/* Độ khó */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Độ khó
        </Typography>
        <View style={styles.chipContainer}>
          {[1, 2, 3, 4, 5].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.chip,
                filterOptions.difficulty === level && styles.activeChip,
              ]}
              onPress={() => handleDifficultyChange(level)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.chipText,
                  filterOptions.difficulty === level && styles.activeChipText,
                ]}
              >
                {level} ⭐
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Thời gian nấu */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Thời gian
        </Typography>
        <View style={styles.chipContainer}>
          {COOKING_TIME_RANGES.map((range) => (
            <TouchableOpacity
              key={range.label}
              style={[
                styles.chip,
                filterOptions.cookingTime.min === range.min &&
                  filterOptions.cookingTime.max === range.max &&
                  styles.activeChip,
              ]}
              onPress={() => handleCookingTimeChange(range.min, range.max)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.chipText,
                  filterOptions.cookingTime.min === range.min &&
                    filterOptions.cookingTime.max === range.max &&
                    styles.activeChipText,
                ]}
              >
                {range.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Số người ăn */}
      <View style={styles.filterGroup}>
        <Typography variant="subtitle2" style={styles.groupTitle}>
          Số người
        </Typography>
        <View style={styles.chipContainer}>
          {SERVINGS_RANGES.map((range) => (
            <TouchableOpacity
              key={range.label}
              style={[
                styles.chip,
                filterOptions.servings.min === range.min &&
                  filterOptions.servings.max === range.max &&
                  styles.activeChip,
              ]}
              onPress={() => handleServingsChange(range.min, range.max)}
            >
              <Typography
                variant="body2"
                style={[
                  styles.chipText,
                  filterOptions.servings.min === range.min &&
                    filterOptions.servings.max === range.max &&
                    styles.activeChipText,
                ]}
              >
                {range.label}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      gap: theme.spacing.lg,
    },
    filterGroup: {
      gap: theme.spacing.sm,
    },
    groupTitle: {
      marginBottom: theme.spacing.xs,
    },
    chipContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    chip: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.lg,
      backgroundColor: theme.colors.background.paper,
      borderWidth: 1,
      borderColor: theme.colors.divider,
    },
    activeChip: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    chipText: {
      color: theme.colors.text.primary,
    },
    activeChipText: {
      color: theme.colors.primary.contrast,
    },
  });
