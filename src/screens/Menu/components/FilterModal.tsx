import React, { useState } from 'react';
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
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AdvancedFilters } from './AdvancedFilters';
import { useToast } from '../../../hooks/useToast';

interface Props {
  visible: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  onApply: (options: FilterOptions) => void;
  regions: string[];
}

export const FilterModal = ({
  visible,
  onClose,
  filterOptions,
  onFilterChange,
  onApply,
  regions,
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme);

  const [tempFilterOptions, setTempFilterOptions] =
    useState<FilterOptions>(filterOptions);

  const activeFiltersCount = [
    tempFilterOptions.region,
    tempFilterOptions.category,
    tempFilterOptions.difficulty,
    tempFilterOptions.cookingTime.min || tempFilterOptions.cookingTime.max,
    tempFilterOptions.servings.min || tempFilterOptions.servings.max,
    tempFilterOptions.mainIngredientTypes.length > 0,
    tempFilterOptions.showFavorites,
  ].filter(Boolean).length;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.text.primary}
              />
            </TouchableOpacity>
            <Typography variant="h2" style={styles.title}>
              Bộ lọc nâng cao
            </Typography>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setTempFilterOptions({
                  ...tempFilterOptions,
                  region: null,
                  category: null,
                  difficulty: null,
                  cookingTime: { min: null, max: null },
                  servings: { min: null, max: null },
                  mainIngredientTypes: [],
                  showFavorites: false,
                });
              }}
            >
              <MaterialCommunityIcons
                name="refresh"
                size={24}
                color={theme.colors.error.main}
              />
            </TouchableOpacity>
          </View>

          {activeFiltersCount > 0 && (
            <View style={styles.filterCountContainer}>
              <MaterialCommunityIcons
                name="filter-variant"
                size={20}
                color={theme.colors.primary.main}
              />
              <Typography
                variant="body2"
                color="primary"
                style={styles.filterCount}
              >
                {activeFiltersCount} bộ lọc đang áp dụng
              </Typography>
            </View>
          )}
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <AdvancedFilters
            filterOptions={tempFilterOptions}
            onFilterChange={setTempFilterOptions}
            regions={regions}
          />
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => {
              onApply(tempFilterOptions);
              onClose();
            }}
          >
            <Typography variant="body2" style={styles.applyButtonText}>
              Áp dụng {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}
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
    headerTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    closeButton: {
      padding: theme.spacing.xs,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
    },
    filterCountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing.sm,
      gap: theme.spacing.xs,
    },
    filterCount: {
      fontSize: 14,
    },
    content: {
      flex: 1,
    },
    contentContainer: {
      padding: theme.spacing.md,
      paddingBottom: theme.spacing.xl * 4,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: theme.spacing.md,
      paddingBottom: theme.spacing.lg,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      backgroundColor: theme.colors.background.paper,
    },
    applyButton: {
      backgroundColor: theme.colors.primary.main,
      padding: theme.spacing.md,
      borderRadius: theme.spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.shadows.md,
    },
    applyButtonText: {
      color: theme.colors.primary.contrast,
      fontSize: 16,
      fontWeight: '600',
    },
    resetButton: {
      padding: theme.spacing.xs,
    },
  });
