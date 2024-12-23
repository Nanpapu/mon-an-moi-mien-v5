import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Loading } from '../../components/shared';
import { MenuSearchBar } from './components/MenuSearchBar';
import { useMenuData } from './hooks/useMenuData';
import { useRecipeFilter } from './hooks/useRecipeFilter';
import { RecipeList } from './components/RecipeList';
import { Ionicons } from '@expo/vector-icons';
import { useGridZoom } from './hooks/useGridZoom';
import { createStyles } from './styles';
import { ZoomControls } from './components/ZoomControls';
import { Typography } from '../../components/shared/Typography';
import { removeRecipe } from '../../utils/storage';
import { useToast } from '../../hooks/useToast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchHistoryService } from '../../services/searchHistoryService';
import { useAuth } from '../../context/AuthContext';
import { FilterModal } from './components/FilterModal';
import { QuickFilterSettings } from './components/FilterSettings';
import { FilterOptions } from './types';
import { QuickFilter } from './components/QuickFilter';
import { usePinnedFilters } from './contexts/PinnedFiltersContext';
import { useQuickFilters } from './hooks/useQuickFilters';
import { SortType } from './types';
import { getSortLabel } from './utils/sortUtils';

export default function MenuScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const { showToast } = useToast();
  const { user } = useAuth();
  const { pinnedFilters } = usePinnedFilters();
  const { savedRecipes } = useMenuData();
  const {
    filterState,
    filterData,
    handleFilterChange,
    filteredRecipes,
    hasActiveFilters,
  } = useQuickFilters(savedRecipes);

  const {
    isRefreshing,
    isLoading,
    setIsLoading,
    refreshSavedRecipes,
    handleDeleteRecipe,
  } = useMenuData();

  const { regions, refreshFavorites, filterOptions, setFilterOptions } =
    useRecipeFilter(savedRecipes);

  const {
    currentConfig,
    calculateItemWidth,
    zoomIn,
    zoomOut,
    canZoomIn,
    canZoomOut,
  } = useGridZoom();

  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedRecipes, setSelectedRecipes] = useState<Set<string>>(
    new Set()
  );
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [tempFilterOptions, setTempFilterOptions] =
    useState<FilterOptions>(filterOptions);
  const [sortType, setSortType] = useState<SortType>(SortType.DEFAULT);
  const [showSortModal, setShowSortModal] = useState(false);

  const activeFiltersCount = [
    filterOptions.region,
    filterOptions.category,
    filterOptions.difficulty,
    filterOptions.cookingTime.min || filterOptions.cookingTime.max,
    filterOptions.servings.min || filterOptions.servings.max,
    filterOptions.mainIngredientTypes.length > 0,
  ].filter(Boolean).length;

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    const history = await SearchHistoryService.getSearchHistory();
    setRecentSearches(history);
  };

  const handleSaveSearch = async (search: string) => {
    if (search.trim()) {
      await SearchHistoryService.saveSearch(search);
      await loadSearchHistory();
    }
  };

  const handleLongPress = (recipeId: string) => {
    setIsSelectionMode(true);
    setSelectedRecipes(new Set([recipeId]));
  };

  const handleExitSelectionMode = () => {
    setIsSelectionMode(false);
    setSelectedRecipes(new Set());
  };

  const handleToggleSelect = (recipeId: string) => {
    setSelectedRecipes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(recipeId)) {
        newSet.delete(recipeId);
      } else {
        newSet.add(recipeId);
      }
      return newSet;
    });
  };

  const handleDeleteSelected = async () => {
    if (!user) {
      showToast('error', 'Bạn cần đăng nhập để xóa công thức');
      return;
    }

    Alert.alert(
      'Xác nhận xóa',
      `Bạn có chắc muốn xóa ${selectedRecipes.size} công thức đã chọn?`,
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: async () => {
            setIsLoading(true);
            try {
              for (const recipeId of selectedRecipes) {
                await removeRecipe(recipeId, user.uid);
              }
              await refreshSavedRecipes();
              showToast('success', 'Đã xóa các công thức đã chọn');
              handleExitSelectionMode();
            } catch (error) {
              console.error('Lỗi khi xóa công thức:', error);
              showToast('error', 'Không thể xóa một số công thức');
            } finally {
              setIsLoading(false);
            }
          },
        },
      ]
    );
  };

  const QuickFilters = () => {
    if (!user) return null;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.quickFiltersContainer}
        contentContainerStyle={styles.quickFiltersContent}
      >
        <View style={styles.filterContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickFiltersContent}
          >
            {activePinnedFilters.map(([filterType, _]) => {
              const type = filterType as keyof typeof filterData;
              const data = filterData[type];
              return (
                <QuickFilter
                  key={filterType}
                  label={data.label}
                  options={data.options}
                  selectedOption={filterState[type]}
                  onSelectOption={(option) => handleFilterChange(type, option)}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    );
  };

  const handleCloseFilterModal = () => {
    setTempFilterOptions(filterOptions);
    setShowFilterModal(false);
  };

  const handleApplyFilter = (newFilterOptions: FilterOptions) => {
    setFilterOptions(newFilterOptions);
    setShowFilterModal(false);
  };

  // Lấy danh sách các filter đã được pin và sắp xếp theo order
  const activePinnedFilters = Object.entries(pinnedFilters)
    .filter(([_, settings]) => settings.enabled)
    .sort((a, b) => a[1].order - b[1].order);

  const sortedRecipes = useMemo(() => {
    const recipes = [...filteredRecipes];

    switch (sortType) {
      case SortType.NAME_ASC:
        return recipes.sort((a, b) =>
          a.recipe.name.localeCompare(b.recipe.name)
        );

      case SortType.NAME_DESC:
        return recipes.sort((a, b) =>
          b.recipe.name.localeCompare(a.recipe.name)
        );

      case SortType.DIFFICULTY_ASC:
        return recipes.sort(
          (a, b) => (a.recipe.difficulty || 0) - (b.recipe.difficulty || 0)
        );

      case SortType.DIFFICULTY_DESC:
        return recipes.sort(
          (a, b) => (b.recipe.difficulty || 0) - (a.recipe.difficulty || 0)
        );

      case SortType.COOKING_TIME_ASC:
        return recipes.sort(
          (a, b) => (a.recipe.cookingTime || 0) - (b.recipe.cookingTime || 0)
        );

      case SortType.COOKING_TIME_DESC:
        return recipes.sort(
          (a, b) => (b.recipe.cookingTime || 0) - (a.recipe.cookingTime || 0)
        );

      case SortType.SERVINGS_ASC:
        return recipes.sort(
          (a, b) => (a.recipe.servings || 0) - (b.recipe.servings || 0)
        );

      case SortType.SERVINGS_DESC:
        return recipes.sort(
          (a, b) => (b.recipe.servings || 0) - (a.recipe.servings || 0)
        );

      default:
        return recipes;
    }
  }, [filteredRecipes, sortType]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.default,
      }}
    >
      {user && (
        <>
          <View style={styles.headerControls}>
            <View style={styles.searchBarContainer}>
              <MenuSearchBar
                value={filterOptions.searchQuery}
                onChangeText={(text) =>
                  setFilterOptions({ ...filterOptions, searchQuery: text })
                }
                placeholder="Tìm theo tên hoặc nguyên liệu..."
                onSubmitEditing={() => {}}
                recentSearches={[]}
              />
            </View>

            <View style={styles.filterButtonGroup}>
              {sortType !== SortType.DEFAULT && (
                <TouchableOpacity
                  style={styles.resetSortButton}
                  onPress={() => setSortType(SortType.DEFAULT)}
                >
                  <Ionicons
                    name="close-circle"
                    size={20}
                    color={theme.colors.error.main}
                  />
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[
                  styles.filterButton,
                  sortType !== SortType.DEFAULT && styles.activeFilterButton,
                ]}
                onPress={() => setShowSortModal(true)}
              >
                <Ionicons
                  name="funnel-outline"
                  size={20}
                  color={
                    sortType !== SortType.DEFAULT
                      ? theme.colors.primary.main
                      : theme.colors.text.primary
                  }
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => setShowFilterModal(true)}
            >
              <Ionicons
                name="options-outline"
                size={24}
                color={theme.colors.text.primary}
              />
              {activeFiltersCount > 0 && (
                <View style={styles.filterBadge}>
                  <Typography variant="caption" style={styles.filterBadgeText}>
                    {activeFiltersCount}
                  </Typography>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <QuickFilters />

          <FilterModal
            visible={showFilterModal}
            onClose={handleCloseFilterModal}
            filterOptions={tempFilterOptions}
            onFilterChange={setTempFilterOptions}
            onApply={handleApplyFilter}
            regions={regions}
          />
        </>
      )}

      {isSelectionMode && (
        <View style={styles.selectionHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={handleExitSelectionMode}
              style={styles.selectionButton}
            >
              <Ionicons
                name="close"
                size={20}
                color={theme.colors.error.main}
              />
            </TouchableOpacity>
            <Typography
              variant="h3"
              style={[styles.selectionText, { marginLeft: theme.spacing.md }]}
            >
              Đã chọn{' '}
              <Typography variant="h3" style={styles.selectionCount}>
                {selectedRecipes.size}
              </Typography>{' '}
              công thức
            </Typography>
          </View>
          <TouchableOpacity
            onPress={handleDeleteSelected}
            disabled={selectedRecipes.size === 0}
            style={[
              styles.deleteButton,
              selectedRecipes.size === 0 && { opacity: 0.5 },
            ]}
          >
            <Ionicons
              name="trash-outline"
              size={20}
              color={theme.colors.background.paper}
            />
          </TouchableOpacity>
        </View>
      )}

      {isLoading ? (
        <Loading text="Đang tải..." />
      ) : (
        <>
          <RecipeList
            isRefreshing={isRefreshing}
            isLoading={isLoading}
            filteredRecipes={sortedRecipes}
            savedRecipes={savedRecipes}
            onRefresh={refreshSavedRecipes}
            onDeleteRecipe={handleDeleteRecipe}
            currentConfig={currentConfig}
            calculateItemWidth={calculateItemWidth}
            onFavoriteChange={refreshFavorites}
            isSelectionMode={isSelectionMode}
            selectedRecipes={selectedRecipes}
            onLongPress={handleLongPress}
            onToggleSelect={handleToggleSelect}
            isAuthenticated={!!user}
          />
          {user && (
            <ZoomControls
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              canZoomIn={canZoomIn}
              canZoomOut={canZoomOut}
            />
          )}
        </>
      )}

      {/* Hiển thị số lượng kt quả nếu có filter active */}
      {hasActiveFilters && (
        <Typography
          variant="caption"
          style={{
            marginTop: theme.spacing.sm,
            color: theme.colors.text.secondary,
          }}
        >
          Tìm thấy {filteredRecipes.filter((item) => item.visible).length} công
          thức
        </Typography>
      )}

      <Modal
        visible={showSortModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSortModal(false)}
      >
        <View style={styles.sortModalContainer}>
          {Object.values(SortType).map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.sortOption,
                sortType === type && styles.selectedSortOption,
              ]}
              onPress={() => {
                setSortType(type);
                setShowSortModal(false);
              }}
            >
              <Typography
                style={[
                  styles.sortOptionText,
                  sortType === type && styles.selectedSortOptionText,
                ]}
              >
                {getSortLabel(type)}
              </Typography>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
}
