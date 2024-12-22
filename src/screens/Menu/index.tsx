import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Loading } from '../../components/shared';
import { MenuSearchBar } from './components/MenuSearchBar';
import { useMenuData } from './hooks/useMenuData';
import { useRecipeFilter } from './hooks/useRecipeFilter';
import { RegionFilter } from './components/RegionFilter';
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
import { AdvancedFilters } from './components/AdvancedFilters';
import { FilterModal } from './components/FilterModal';
import { QuickFilterSettings } from './components/FilterSettings';

export default function MenuScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const { showToast } = useToast();
  const { user } = useAuth();

  const {
    savedRecipes,
    isRefreshing,
    isLoading,
    setIsLoading,
    refreshSavedRecipes,
    handleDeleteRecipe,
  } = useMenuData();

  const {
    filteredRecipes,
    regions,
    refreshFavorites,
    filterOptions,
    setFilterOptions,
  } = useRecipeFilter(savedRecipes);

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
  const [quickFilterSettings, setQuickFilterSettings] =
    useState<QuickFilterSettings>({
      showRegions: true,
      showCategories: false,
      showDifficulty: false,
    });

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
        <RegionFilter
          regions={regions}
          selectedRegion={filterOptions.region}
          onSelectRegion={(region) =>
            setFilterOptions((prev) => ({ ...prev, region }))
          }
          showFavorites={filterOptions.showFavorites}
          onToggleFavorites={() =>
            setFilterOptions((prev) => ({
              ...prev,
              showFavorites: !prev.showFavorites,
            }))
          }
        />
      </ScrollView>
    );
  };

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
            onClose={() => setShowFilterModal(false)}
            filterOptions={filterOptions}
            onFilterChange={setFilterOptions}
            regions={regions}
            quickFilterSettings={quickFilterSettings}
            onQuickFilterSettingsChange={setQuickFilterSettings}
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
            filteredRecipes={filteredRecipes}
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
    </View>
  );
}
