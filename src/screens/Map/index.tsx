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
import { useAuth } from '../../context/AuthContext';
import {
  MAP_LOAD_TIMEOUT,
  RETRY_DELAY,
  MAX_RETRIES,
} from '../../constants/timeout';
import { MAP_STYLES } from './constants/mapStyles';
import { useMapStyle } from '../../context/MapStyleContext';
import { removeAccents, containsSearchQuery } from '../../utils/stringUtils';
import Fuse from 'fuse.js';

// Thêm hằng số cho animation
const MARKER_ZOOM_ANIMATION = {
  DURATION: 500,
  LATITUDE_DELTA: 3,
  LONGITUDE_DELTA: 3,
  DELAY_MODAL: 600,
};

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
  const [mapInitialized, setMapInitialized] = useState(false);

  const mapRef = useRef<MapView>(null);
  const { regions, loadedRegions, isLoading, refreshRegions, retryCount } =
    useMapData();
  const {
    currentZoom,
    region,
    setRegion,
    calculateZoom,
    shouldShowMarker,
    setCurrentZoom,
    viewVietnam,
    CAMERA_BOUNDS,
    MAP_STYLE,
  } = useMapInteraction();

  const { showToast } = useToast();
  const { animateRandomSearch, cleanupAnimation } = useRandomAnimation(mapRef);

  const { user } = useAuth();
  const { simpleMapMode } = useMapStyle();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 500);
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
    if (!user) {
      Alert.alert('Yêu cầu đăng nhập', 'Bạn cần đăng nhập để lưu công thức.', [
        {
          text: 'Đóng',
          style: 'cancel',
        },
      ]);
      return false;
    }

    try {
      const success = await saveRecipe(recipe, user.uid);
      if (success) {
        showToast('success', 'Đã lưu công th��c');
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

  const onSearch = (query: string) => {
    if (!query.trim()) return;

    // Khởi tạo Fuse với cùng options như trong MapControls
    const fuse = new Fuse(
      regions.map((region) => ({
        name: removeAccents(region.name),
        originalName: region.name,
        coordinate: region.coordinate,
      })),
      {
        includeScore: true,
        threshold: 0.4,
        keys: ['name'],
        ignoreLocation: true,
        shouldSort: true,
      }
    );

    // Tìm kiếm với Fuse
    const searchResults = fuse.search(removeAccents(query));

    if (searchResults.length > 0) {
      const bestMatch = searchResults[0].item; // Lấy kết quả có score tốt nhất

      const newRegion = {
        latitude: bestMatch.coordinate.latitude,
        longitude: bestMatch.coordinate.longitude,
        latitudeDelta: MARKER_ZOOM_ANIMATION.LATITUDE_DELTA,
        longitudeDelta: MARKER_ZOOM_ANIMATION.LONGITUDE_DELTA,
      };

      mapRef.current?.animateToRegion(
        newRegion,
        MARKER_ZOOM_ANIMATION.DURATION
      );
      showToast('success', `Đã tìm thấy: ${bestMatch.originalName}`);
    } else {
      showToast('warning', 'Địa điểm không tồn tại hoặc hiện chưa có món nào');
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

  // Thêm hàm xử lý zoom animation
  const animateToMarker = (latitude: number, longitude: number) => {
    // Tạo region mới với delta cố định
    const newRegion: MapRegion = {
      latitude,
      longitude,
      latitudeDelta: MARKER_ZOOM_ANIMATION.LATITUDE_DELTA,
      longitudeDelta: MARKER_ZOOM_ANIMATION.LONGITUDE_DELTA,
    };

    // Thực hiện animation
    mapRef.current?.animateToRegion(newRegion, MARKER_ZOOM_ANIMATION.DURATION);
  };

  // Cập nhật lại phần xử lý marker press
  const handleMarkerPress = (
    recipes: Recipe[],
    regionName: string,
    coordinate: { latitude: number; longitude: number }
  ) => {
    // Thực hiện animation zoom trước
    animateToMarker(coordinate.latitude, coordinate.longitude);

    // Delay hiện modal để đợi animation hoàn thành
    setTimeout(() => {
      setSelectedRecipes(recipes);
      setSelectedRegionName(regionName);
      setModalVisible(true);
    }, MARKER_ZOOM_ANIMATION.DELAY_MODAL);
  };

  if (!regions || regions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Loading
          text={
            retryCount > 0
              ? `Đang tải lại lần ${retryCount}/${MAX_RETRIES}...`
              : 'Đang tải dữ liệu vùng miền...'
          }
        />
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
        // Chỉnh màu cho map
        // customMapStyle={MAP_STYLE}
        minZoomLevel={CAMERA_BOUNDS.minZoom}
        maxZoomLevel={CAMERA_BOUNDS.maxZoom}
        mapPadding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        onRegionChange={(newRegion) => {
          if (mapInitialized) {
            const limitedRegion = {
              latitude: Math.min(
                Math.max(newRegion.latitude, CAMERA_BOUNDS.south),
                CAMERA_BOUNDS.north
              ),
              longitude: Math.min(
                Math.max(newRegion.longitude, CAMERA_BOUNDS.west),
                CAMERA_BOUNDS.east
              ),
              latitudeDelta: newRegion.latitudeDelta,
              longitudeDelta: newRegion.longitudeDelta,
            };

            setRegion(limitedRegion);
            const newZoom = calculateZoom(newRegion.latitudeDelta);
            setCurrentZoom(newZoom);
          }
        }}
        rotateEnabled={false}
        pitchEnabled={false}
        moveOnMarkerPress={false}
        onMapReady={() => {
          console.log('Map is ready');
          setIsMapReady(true);
          setIsMapLoading(false);
          setMapInitialized(true);

          mapRef.current?.animateToRegion(region, 100);
        }}
        onLayout={() => {
          console.log('Map layout complete');
        }}
        customMapStyle={simpleMapMode ? MAP_STYLES.SIMPLE : MAP_STYLES.DEFAULT}
      >
        {!isMapLoading && isMapReady && mapInitialized && (
          <MapMarkers
            regions={loadedRegions}
            isMapReady={true}
            currentZoom={currentZoom}
            shouldShowMarker={shouldShowMarker}
            onMarkerPress={(recipes, regionName, coordinate) => {
              handleMarkerPress(recipes, regionName, coordinate);
            }}
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
