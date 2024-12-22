import React from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { FilterOptions } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RegionFilter } from './RegionFilter';
import { AdvancedFilters } from './AdvancedFilters';

interface Props {
  visible: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  onFilterChange: (newOptions: FilterOptions) => void;
  regions: string[];
}

export const FilterModal = ({
  visible,
  onClose,
  filterOptions,
  onFilterChange,
  regions,
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme);

  const activeFiltersCount = [
    filterOptions.region,
    filterOptions.category,
    filterOptions.difficulty,
    filterOptions.cookingTime.min || filterOptions.cookingTime.max,
    filterOptions.servings.min || filterOptions.servings.max,
    filterOptions.mainIngredientTypes.length > 0,
  ].filter(Boolean).length;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons
              name="close"
              size={24}
              color={theme.colors.text.primary}
            />
          </TouchableOpacity>
          <Typography variant="h2" style={styles.title}>
            Bộ lọc
          </Typography>
          <Typography variant="body2" color="secondary">
            {activeFiltersCount} bộ lọc đang áp dụng
          </Typography>
        </View>

        {/* Filter Content */}
        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Vùng miền
            </Typography>
            <RegionFilter
              regions={regions}
              selectedRegion={filterOptions.region}
              onSelectRegion={(region) =>
                onFilterChange({ ...filterOptions, region })
              }
              showFavorites={filterOptions.showFavorites}
              onToggleFavorites={() =>
                onFilterChange({
                  ...filterOptions,
                  showFavorites: !filterOptions.showFavorites,
                })
              }
            />
          </View>

          <View style={styles.section}>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Bộ lọc nâng cao
            </Typography>
            <AdvancedFilters
              filterOptions={filterOptions}
              onFilterChange={onFilterChange}
            />
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              onFilterChange({
                ...filterOptions,
                region: null,
                category: null,
                difficulty: null,
                cookingTime: { min: null, max: null },
                servings: { min: null, max: null },
                mainIngredientTypes: [],
              });
            }}
          >
            <Typography variant="body2" color="error">
              Đặt lại
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity style={styles.applyButton} onPress={onClose}>
            <Typography
              variant="body2"
              style={{ color: theme.colors.primary.contrast }}
            >
              Áp dụng ({activeFiltersCount})
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.default,
    },
    header: {
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
      backgroundColor: theme.colors.background.paper,
    },
    closeButton: {
      padding: theme.spacing.sm,
      marginBottom: theme.spacing.sm,
    },
    title: {
      marginBottom: theme.spacing.xs,
    },
    content: {
      flex: 1,
    },
    section: {
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    sectionTitle: {
      marginBottom: theme.spacing.md,
    },
    footer: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      backgroundColor: theme.colors.background.paper,
      gap: theme.spacing.md,
    },
    resetButton: {
      flex: 1,
      padding: theme.spacing.md,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.error.main,
      borderRadius: theme.spacing.md,
    },
    applyButton: {
      flex: 2,
      padding: theme.spacing.md,
      alignItems: 'center',
      backgroundColor: theme.colors.primary.main,
      borderRadius: theme.spacing.md,
    },
  });
