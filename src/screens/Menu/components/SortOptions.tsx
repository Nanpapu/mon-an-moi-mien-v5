import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SortOption, SORT_OPTIONS, SortField, SortOrder } from '../types';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  currentSort: SortOption | null;
  showFavoriteFirst: boolean;
  onSortChange: (sort: SortOption | null) => void;
  onFavoriteFirstChange: (value: boolean) => void;
}

export const SortOptions = ({
  currentSort,
  showFavoriteFirst,
  onSortChange,
  onFavoriteFirstChange,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleSortPress = (field: SortField) => {
    console.log('Bấm sort với field:', field);
    if (!currentSort || currentSort.field !== field) {
      console.log('Set sort mới:', { field, order: 'asc' });
      onSortChange({ field, order: 'asc' });
    } else {
      if (currentSort.order === 'asc') {
        console.log('Đổi sang desc:', { field, order: 'desc' });
        onSortChange({ field, order: 'desc' });
      } else {
        console.log('Hủy sort');
        onSortChange(null);
      }
    }
  };

  const getSortIcon = (field: SortField) => {
    if (!currentSort || currentSort.field !== field) {
      return 'sort';
    }
    return currentSort.order === 'asc' ? 'sort-ascending' : 'sort-descending';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="sort-variant"
          size={24}
          color={theme.colors.text.primary}
        />
        <Typography variant="subtitle1" style={styles.title}>
          Sắp xếp theo
        </Typography>
      </View>

      <TouchableOpacity
        style={[
          styles.favoriteButton,
          showFavoriteFirst && styles.activeFavoriteButton,
        ]}
        onPress={() => onFavoriteFirstChange(!showFavoriteFirst)}
      >
        <Ionicons
          name={showFavoriteFirst ? 'heart' : 'heart-outline'}
          size={20}
          color={
            showFavoriteFirst
              ? theme.colors.primary.contrast
              : theme.colors.text.primary
          }
        />
        <Typography
          variant="body2"
          style={[
            styles.buttonText,
            showFavoriteFirst && styles.activeButtonText,
          ]}
        >
          Ưu tiên món yêu thích
        </Typography>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.optionsContainer}>
        {SORT_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.field}
            style={[
              styles.sortButton,
              currentSort?.field === option.field && styles.activeSortButton,
            ]}
            onPress={() => handleSortPress(option.field)}
          >
            <Typography
              variant="body2"
              style={[
                styles.buttonText,
                currentSort?.field === option.field && styles.activeButtonText,
              ]}
            >
              {option.label}
            </Typography>
            <MaterialCommunityIcons
              name={getSortIcon(option.field)}
              size={20}
              color={
                currentSort?.field === option.field
                  ? theme.colors.primary.contrast
                  : theme.colors.text.primary
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.paper,
      padding: theme.spacing.md,
      borderRadius: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.divider,
      marginBottom: theme.spacing.lg,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    sortButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.lg,
      backgroundColor: theme.colors.background.default,
      borderWidth: 1,
      borderColor: theme.colors.divider,
      gap: theme.spacing.sm,
    },
    activeSortButton: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    buttonText: {
      color: theme.colors.text.primary,
    },
    activeButtonText: {
      color: theme.colors.primary.contrast,
    },
    favoriteButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.spacing.lg,
      backgroundColor: theme.colors.background.default,
      borderWidth: 1,
      borderColor: theme.colors.divider,
      marginBottom: theme.spacing.md,
    },
    activeFavoriteButton: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.divider,
      marginVertical: theme.spacing.md,
    },
  });
