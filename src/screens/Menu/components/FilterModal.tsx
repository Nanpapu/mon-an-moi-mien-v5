import React, { useState } from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { FilterOptions } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RegionFilter } from './RegionFilter';
import { AdvancedFilters } from './AdvancedFilters';
import { FilterSettings, QuickFilterSettings } from './FilterSettings';
import { usePinnedFilters } from '../contexts/PinnedFiltersContext';
import { QuickFilterType } from '../types';
import { useToast } from '../../../hooks/useToast';

interface Props {
  visible: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  onApply: (options: FilterOptions) => void;
  regions: string[];
}

const PinnedFiltersSection = () => {
  const { theme } = useTheme();
  const { pinnedFilters, togglePinnedFilter, canPinMore } = usePinnedFilters();
  const styles = createStyles(theme);

  const availableFilters: Array<{
    type: QuickFilterType['type'];
    label: string;
  }> = [
    { type: 'region', label: 'Vùng miền' },
    { type: 'difficulty', label: 'Độ khó' },
    { type: 'cookTime', label: 'Thời gian nấu' },
    { type: 'servings', label: 'Số người ăn' },
    { type: 'dietType', label: 'Loại món' },
  ];

  const renderFilterToggle = (type: QuickFilterType['type'], label: string) => {
    const isEnabled = pinnedFilters[type].enabled;
    const isDisabled = !isEnabled && !canPinMore;

    return (
      <View style={styles.filterToggleRow}>
        <Typography variant="body1">{label}</Typography>
        <Switch
          value={isEnabled}
          onValueChange={() => togglePinnedFilter(type)}
          trackColor={{
            false: theme.colors.divider,
            true: theme.colors.primary.main,
          }}
          thumbColor={theme.colors.background.paper}
          disabled={isDisabled}
          style={{ opacity: isDisabled ? 0.5 : 1 }}
        />
      </View>
    );
  };

  return (
    <View style={styles.section}>
      <Typography variant="subtitle1" style={styles.sectionTitle}>
        Hiển thị bộ lọc nhanh
      </Typography>
      <Typography variant="caption" style={styles.sectionDescription}>
        Chọn các bộ lọc bạn muốn hiển thị trực tiếp trên màn hình Menu
      </Typography>

      {availableFilters.map(({ type, label }) =>
        renderFilterToggle(type, label)
      )}
    </View>
  );
};

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
  const { showToast } = useToast();
  const { pinnedFilters, togglePinnedFilter, canPinMore } = usePinnedFilters();

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
              <Typography
                variant="body2"
                color="error"
                style={styles.resetButtonText}
              >
                Đặt lại
              </Typography>
            </TouchableOpacity>
          </View>

          {/* <Typography
            variant="body2"
            color="secondary"
            style={styles.filterCount}
          >
            {activeFiltersCount} bộ lọc đang áp dụng
          </Typography> */}
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Bộ lọc nâng cao
            </Typography>
            <AdvancedFilters
              filterOptions={tempFilterOptions}
              onFilterChange={setTempFilterOptions}
              regions={regions}
            />
          </View>
          <PinnedFiltersSection />
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
      padding: theme.spacing.md,
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
      padding: theme.spacing.sm,
    },
    resetButtonText: {
      fontSize: 16,
      fontWeight: '700',
    },
    sectionDescription: {
      marginBottom: theme.spacing.md,
      color: theme.colors.text.secondary,
    },
    filterToggleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm,
    },
  });
