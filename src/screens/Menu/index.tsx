import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
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

export default function MenuScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const { showToast } = useToast();

  const {
    savedRecipes,
    isRefreshing,
    isLoading,
    setIsLoading,
    refreshSavedRecipes,
    handleDeleteRecipe,
  } = useMenuData();

  const {
    searchQuery,
    setSearchQuery,
    selectedRegion,
    setSelectedRegion,
    showFavorites,
    setShowFavorites,
    filteredRecipes,
    regions,
    refreshFavorites,
    hasMore,
    loadMore,
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
                await removeRecipe(recipeId);
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.default,
      }}
    >
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

      <MenuSearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Tìm theo tên món hoặc nguyên liệu..."
        recentSearches={recentSearches}
        onSaveRecentSearch={handleSaveSearch}
        onSubmitEditing={() => handleSaveSearch(searchQuery)}
      />

      <View style={styles.headerControls}>
        <RegionFilter
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          showFavorites={showFavorites}
          onToggleFavorites={() => setShowFavorites(!showFavorites)}
        />
      </View>

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
            hasMore={hasMore}
            onLoadMore={loadMore}
          />
          <ZoomControls
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            canZoomIn={canZoomIn}
            canZoomOut={canZoomOut}
          />
        </>
      )}
    </View>
  );
}
