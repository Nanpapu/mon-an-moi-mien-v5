import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Region as MapRegion } from 'react-native-maps';
import { Recipe } from '../../types';
import { saveRecipe } from '../../utils/storage';
import { useRecipes } from '../../context/RecipeContext';
import { styles } from './styles';
import { useMapData } from './hooks/useMapData';
import { useMapInteraction } from './hooks/useMapInteraction';
import { MapMarkers } from './components/MapMarkers';
import { MapControls } from './components/MapControls';
import { RecipeModal } from './components/RecipeModal';
import { useTheme } from '../../theme/ThemeContext';
import { Loading } from '../../components/shared';
import * as Location from 'expo-location';
import { RegionService } from '../../services/regionService';
import { ViewVietnamButton } from './components/ViewVietnamButton';
import { useToast } from '../../hooks/useToast';
import { useRandomAnimation } from './hooks/useRandomAnimation';
import { MarkerClustering } from './components/MarkerClustering';

export default function MapScreen({ navigation }: { navigation: any }) {
  const { theme } = useTheme();
  const { refreshSavedRecipes } = useRecipes();
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [isRandomAnimating, setIsRandomAnimating] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isViewingVietnam, setIsViewingVietnam] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [selectedRegionName, setSelectedRegionName] = useState<string>('');
  const [isRandomRecipe, setIsRandomRecipe] = useState(false);

  const mapRef = useRef<MapView>(null);
  const { regions, loadedRegions, isLoading, refreshRegions } = useMapData();
  const { region, setRegion, viewVietnam } = useMapInteraction();

  const { showToast } = useToast();
  const { animateRandomSearch, cleanupAnimation } = useRandomAnimation(mapRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (isRandomAnimating) {
        cleanupAnimation();
        setIsRandomAnimating(false);
      }
    });

    return unsubscribe;
  }, [navigation, isRandomAnimating, cleanupAnimation]);

  const handleSaveRecipe = async (recipe: Recipe) => {
    try {
      const region = regions.find((r) =>
        r.recipes.some((rcp) => rcp.id === recipe.id)
      );
      if (!region) {
        throw new Error('Không tìm thấy vùng miền của công thức');
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const success = await saveRecipe(recipe, region);
      if (success) {
        showToast('success', 'Đã lưu công thức');
      } else {
        showToast('info', 'Công thức đã được lưu trước đó');
      }
      return success;
    } catch (error) {
      showToast('error', 'Không thể lưu công thức');
      return false;
    }
  };

  const handleRandomRecipe = () => {
    if (isRandomAnimating) return;

    setIsRandomAnimating(true);
    setIsRandomRecipe(true);

    setTimeout(() => {
      animateRandomSearch(regions, (recipe, regionName) => {
        setSelectedRecipes([recipe]);
        setSelectedRegionName(regionName);
        setModalVisible(true);
        setIsRandomAnimating(false);
      });
    }, 0);
  };

  const onSearch = async (query: string) => {
    if (!query.trim()) return;

    try {
      if (!hasLocationPermission) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          showToast('error', 'Cần quyền truy cập vị trí để tìm kiếm');
          return;
        }
        setHasLocationPermission(true);
      }

      const result = await Location.geocodeAsync(query);
      if (result.length > 0) {
        const { latitude, longitude } = result[0];
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        mapRef.current?.animateToRegion(newRegion, 1000);
        showToast('success', 'Đã tìm thấy địa điểm');
      } else {
        showToast('warning', 'Không tìm thấy địa điểm');
      }
    } catch (error) {
      console.error('Lỗi tìm kiếm:', error);
      showToast('error', 'Không thể tìm kiếm địa điểm');
    }
  };

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      await RegionService.clearRegionsCache();

      await new Promise((resolve) => setTimeout(resolve, 500));

      await refreshRegions();
      showToast('success', 'Đã tải lại dữ liệu thành công');
    } catch (error) {
      console.error('Lỗi khi refresh:', error);
      showToast('error', 'Không thể tải lại dữ liệu');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleViewVietnam = () => {
    setIsViewingVietnam(true);
    viewVietnam(mapRef);

    setTimeout(() => {
      setIsViewingVietnam(false);
    }, 1000);
  };

  if (!regions || regions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Loading text="Đang tải dữ liệu vùng miền..." />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider="google"
        style={{ flex: 1 }}
        initialRegion={region}
        onRegionChange={setRegion}
        onMapReady={() => {
          console.log('Map is ready');
          setIsMapReady(true);
          setIsMapLoading(false);
        }}
      >
        {!isMapLoading && isMapReady && (
          <MarkerClustering
            regions={loadedRegions}
            onMarkerPress={(recipes, regionName) => {
              setSelectedRecipes(recipes);
              setSelectedRegionName(regionName);
              setModalVisible(true);
            }}
            mapRegion={region}
          />
        )}
      </MapView>

      <MapControls
        onRefresh={handleRefresh}
        regions={regions}
        onRandomSelect={handleRandomRecipe}
        onSearch={onSearch}
        isAnimating={isRandomAnimating}
        onAnimationStart={() => setIsRandomAnimating(true)}
        isRefreshing={isRefreshing}
      />

      <RecipeModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setIsRandomRecipe(false);
        }}
        recipes={selectedRecipes}
        onSaveRecipe={handleSaveRecipe}
        regionName={selectedRegionName}
        isRandomRecipe={isRandomRecipe}
      />

      {isLoading && <Loading overlay text="Đang tải..." />}

      <ViewVietnamButton
        onPress={handleViewVietnam}
        disabled={isViewingVietnam || isRandomAnimating}
      />
    </View>
  );
}
