import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SortOption, SORT_OPTIONS, SortField, SortOrder } from '../types';

interface Props {
  currentSort: SortOption | null;
  onSortChange: (sort: SortOption | null) => void;
}

export const SortOptions = ({ currentSort, onSortChange }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleSortPress = (field: SortField) => {
    if (!currentSort || currentSort.field !== field) {
      onSortChange({ field, order: 'asc' });
    } else {
      if (currentSort.order === 'asc') {
        onSortChange({ field, order: 'desc' });
      } else {
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
  });
