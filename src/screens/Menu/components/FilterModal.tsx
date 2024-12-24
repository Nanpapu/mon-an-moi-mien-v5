import React, { useState } from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { FilterOptions } from '../types';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AdvancedFilters } from './AdvancedFilters';
import { useToast } from '../../../hooks/useToast';
import { SortOptions } from './SortOptions';

interface Props {
  visible: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  onApply: (options: FilterOptions) => void;
  regions: string[];
}

const defaultFilterOptions: FilterOptions = {
  searchQuery: '',
  region: null,
  showFavorites: false,
  category: null,
  difficulty: null,
  cookingTime: { min: null, max: null },
  servings: { min: null, max: null },
  mainIngredientTypes: [],
  showFavoriteFirst: true, // Giữ nguyên setting này
  sort: null,
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

  const handleClose = () => {
    onApply(tempFilterOptions);
    onClose();
  };

  const handleReset = () => {
    Alert.alert(
      'Đặt lại bộ lọc',
      'Bạn có chắc muốn đặt lại tất cả bộ lọc và sắp xếp về mặc định?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Đặt lại',
          style: 'destructive',
          onPress: () => {
            setTempFilterOptions({
              ...defaultFilterOptions,
              showFavoriteFirst: true, // Giữ nguyên setting này
            });
          },
        },
      ]
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.text.primary}
              />
            </TouchableOpacity>
            <Typography variant="h2" style={styles.title}>
              Bộ lọc nâng cao
            </Typography>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <MaterialCommunityIcons
                name="refresh"
                size={24}
                color={theme.colors.error.main}
              />
            </TouchableOpacity>
          </View>

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
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <SortOptions
              currentSort={tempFilterOptions.sort}
              showFavoriteFirst={tempFilterOptions.showFavoriteFirst}
              onSortChange={(sort) =>
                setTempFilterOptions({ ...tempFilterOptions, sort })
              }
              onFavoriteFirstChange={(value) =>
                setTempFilterOptions({
                  ...tempFilterOptions,
                  showFavoriteFirst: value,
                })
              }
            />
          </View>

          <View style={styles.sectionDivider} />

          <View style={styles.section}>
            <AdvancedFilters
              filterOptions={tempFilterOptions}
              onFilterChange={setTempFilterOptions}
              regions={regions}
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => {
              console.log('Áp dụng filter với options:', tempFilterOptions);
              onApply(tempFilterOptions);
              onClose();
            }}
          >
            <Typography variant="body1" style={styles.applyButtonText}>
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
      padding: theme.spacing.sm,
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
      marginTop: theme.spacing.xs,
      gap: theme.spacing.xs,
      opacity: 0.8,
    },
    filterCount: {
      fontSize: 14,
    },
    content: {
      flex: 1,
    },
    contentContainer: {
      padding: theme.spacing.sm,
      paddingBottom: theme.spacing.xl * 3,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: theme.spacing.sm,
      paddingBottom: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      backgroundColor: theme.colors.background.paper,
    },
    applyButton: {
      backgroundColor: theme.colors.primary.main,
      padding: theme.spacing.sm,
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
    section: {
      marginBottom: theme.spacing.lg,
    },
    sectionDivider: {
      height: 8,
      backgroundColor: theme.colors.background.default,
      marginVertical: theme.spacing.md,
    },
  });
