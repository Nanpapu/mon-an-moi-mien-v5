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
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RegionFilter } from './RegionFilter';
import { AdvancedFilters } from './AdvancedFilters';
import { FilterSettings, QuickFilterSettings } from './FilterSettings';

interface Props {
  visible: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  onApply: (options: FilterOptions) => void;
  regions: string[];
  quickFilterSettings: QuickFilterSettings;
  onQuickFilterSettingsChange: (settings: QuickFilterSettings) => void;
}

export const FilterModal = ({
  visible,
  onClose,
  filterOptions,
  onFilterChange,
  onApply,
  regions,
  quickFilterSettings,
  onQuickFilterSettingsChange,
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

  const handleApply = () => {
    onApply(tempFilterOptions);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {/* Header mới với thiết kế tối giản */}
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
              Bộ lọc
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
                });
              }}
            >
              <Typography variant="body2" color="error">
                Đặt lại
              </Typography>
            </TouchableOpacity>
          </View>

          <Typography
            variant="body2"
            color="secondary"
            style={styles.filterCount}
          >
            {activeFiltersCount} bộ lọc đang áp dụng
          </Typography>
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <FilterSettings
              settings={quickFilterSettings}
              onSettingsChange={onQuickFilterSettingsChange}
            />
          </View>

          <View style={styles.section}>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Vùng miền
            </Typography>
            <RegionFilter
              regions={regions}
              selectedRegion={tempFilterOptions.region}
              onSelectRegion={(region) =>
                setTempFilterOptions({ ...tempFilterOptions, region })
              }
              showFavorites={tempFilterOptions.showFavorites}
              onToggleFavorites={() =>
                setTempFilterOptions({
                  ...tempFilterOptions,
                  showFavorites: !tempFilterOptions.showFavorites,
                })
              }
            />
          </View>

          <View style={[styles.section, styles.lastSection]}>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Bộ lọc nâng cao
            </Typography>
            <AdvancedFilters
              filterOptions={tempFilterOptions}
              onFilterChange={setTempFilterOptions}
              regions={regions}
            />
          </View>
        </ScrollView>

        {/* Footer mới với nút áp dụng to hơn */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
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
      marginBottom: theme.spacing.xs,
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
    filterCount: {
      textAlign: 'left',
      marginTop: theme.spacing.xs,
      marginLeft: theme.spacing.xs,
    },
    content: {
      flex: 1,
    },
    section: {
      padding: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
      backgroundColor: theme.colors.background.paper,
    },
    lastSection: {
      borderBottomWidth: 0,
      paddingBottom: theme.spacing.xl * 2,
    },
    sectionTitle: {
      marginBottom: theme.spacing.md,
      fontSize: 18,
      fontWeight: '600',
    },
    footer: {
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
