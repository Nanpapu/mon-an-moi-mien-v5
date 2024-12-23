import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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

  const handleFavoritesChange = () => {
    onFilterChange({
      ...filterOptions,
      showFavorites: !filterOptions.showFavorites,
    });
  };

  return (
    <View style={styles.container}>
      {/* Yêu thích - Đặt lên đầu và tách biệt */}
      <View style={styles.favoriteSection}>
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            filterOptions.showFavorites && styles.activeFavoriteButton,
          ]}
          onPress={handleFavoritesChange}
        >
          <Ionicons
            name={filterOptions.showFavorites ? 'heart' : 'heart-outline'}
            size={24}
            color={
              filterOptions.showFavorites
                ? theme.colors.primary.contrast
                : theme.colors.primary.main
            }
          />
          <Typography
            variant="body1"
            style={[
              styles.favoriteText,
              filterOptions.showFavorites && styles.activeFavoriteText,
            ]}
          >
            Chỉ hiện công thức yêu thích
          </Typography>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Vùng miền */}
      <View style={styles.filterGroup}>
        <View style={styles.groupHeader}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color={theme.colors.text.primary}
          />
          <Typography variant="subtitle1" style={styles.groupTitle}>
            Vùng miền
          </Typography>
        </View>
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
        <View style={styles.groupHeader}>
          <MaterialCommunityIcons
            name="food-variant"
            size={24}
            color={theme.colors.text.primary}
          />
          <Typography variant="subtitle1" style={styles.groupTitle}>
            Loại món
          </Typography>
        </View>
        <View style={styles.chipContainer}>
          <TouchableOpacity
            style={[
              styles.chip,
              filterOptions.category === 'vegetarian' && styles.activeChip,
            ]}
            onPress={() => handleCategoryChange('vegetarian')}
          >
            <MaterialCommunityIcons
              name="leaf"
              size={16}
              color={
                filterOptions.category === 'vegetarian'
                  ? theme.colors.primary.contrast
                  : theme.colors.text.primary
              }
            />
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
            <MaterialCommunityIcons
              name="food-steak"
              size={16}
              color={
                filterOptions.category === 'non-vegetarian'
                  ? theme.colors.primary.contrast
                  : theme.colors.text.primary
              }
            />
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
        <View style={styles.groupHeader}>
          <MaterialCommunityIcons
            name="star-outline"
            size={24}
            color={theme.colors.text.primary}
          />
          <Typography variant="subtitle1" style={styles.groupTitle}>
            Độ khó
          </Typography>
        </View>
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
        <View style={styles.groupHeader}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color={theme.colors.text.primary}
          />
          <Typography variant="subtitle1" style={styles.groupTitle}>
            Thời gian
          </Typography>
        </View>
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
        <View style={styles.groupHeader}>
          <MaterialCommunityIcons
            name="account-group-outline"
            size={24}
            color={theme.colors.text.primary}
          />
          <Typography variant="subtitle1" style={styles.groupTitle}>
            Số người
          </Typography>
        </View>
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
    favoriteSection: {
      marginBottom: theme.spacing.md,
    },
    favoriteButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.lg,
      borderWidth: 2,
      borderColor: theme.colors.primary.main,
      gap: theme.spacing.sm,
    },
    activeFavoriteButton: {
      backgroundColor: theme.colors.primary.main,
    },
    favoriteText: {
      color: theme.colors.primary.main,
      fontSize: 16,
      fontWeight: '600',
    },
    activeFavoriteText: {
      color: theme.colors.primary.contrast,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.divider,
      marginVertical: theme.spacing.md,
    },
    filterGroup: {
      gap: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      padding: theme.spacing.md,
      borderRadius: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.divider,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    groupTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    chipContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    chip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.lg,
      backgroundColor: theme.colors.background.default,
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
