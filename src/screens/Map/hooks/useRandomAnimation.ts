import { useRef } from 'react';
import MapView from 'react-native-maps';
import { Recipe } from '../../../types';
import { useToast } from '../../../hooks/useToast';
import { Region } from '../../../types';

// Các điểm tìm kiếm chính
const SEARCH_POINTS = [
  { lat: 21.028511, lng: 105.804817 }, // Hà Nội
  { lat: 16.047079, lng: 108.20623 }, // Đà Nẵng
  { lat: 10.762622, lng: 106.660172 }, // TP.HCM
  { lat: 12.235825, lng: 109.190483 }, // Nha Trang
];

export const useRandomAnimation = (mapRef: React.RefObject<MapView>) => {
  const { showToast } = useToast();
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);
  const isAnimating = useRef(false);

  // Chọn ngẫu nhiên một công thức từ danh sách regions
  const getRandomRecipe = (
    regions: Region[]
  ): { recipe: Recipe; region: Region } | null => {
    // Lọc các vùng có công thức
    const regionsWithRecipes = regions.filter(
      (r) => r.recipes && r.recipes.length > 0
    );
    if (regionsWithRecipes.length === 0) return null;

    // Chọn ngẫu nhiên một vùng
    const randomRegion =
      regionsWithRecipes[Math.floor(Math.random() * regionsWithRecipes.length)];

    // Chọn ngẫu nhiên một công thức từ vùng đó
    const randomRecipe =
      randomRegion.recipes[
        Math.floor(Math.random() * randomRegion.recipes.length)
      ];

    return { recipe: randomRecipe, region: randomRegion };
  };

  // Dọn dẹp animation
  const cleanupAnimation = () => {
    if (isAnimating.current) {
      animationTimeouts.current.forEach(clearTimeout);
      animationTimeouts.current = [];
      isAnimating.current = false;
      showToast('info', 'Đã dừng tìm kiếm ngẫu nhiên');
    }
  };

  // Animation tìm kiếm ngẫu nhiên
  const animateRandomSearch = (
    regions: Region[],
    onAnimationComplete: (recipe: Recipe, regionName: string) => void
  ) => {
    const randomResult = getRandomRecipe(regions);
    if (!randomResult) {
      showToast('error', 'Không tìm thấy công thức nào');
      return;
    }

    const { recipe, region } = randomResult;
    isAnimating.current = true;

    // Chọn 3 điểm ngẫu nhiên
    const randomPoints = [...SEARCH_POINTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((point) => ({
        latitude: point.lat + (Math.random() - 0.5) * 0.2,
        longitude: point.lng + (Math.random() - 0.5) * 0.2,
        latitudeDelta: 4,
        longitudeDelta: 4,
      }));

    // Animation qua các điểm
    let delay = 0;
    randomPoints.forEach((point) => {
      const timeout = setTimeout(() => {
        if (!isAnimating.current) return;
        mapRef.current?.animateToRegion(point, 800);
      }, delay);
      animationTimeouts.current.push(timeout);
      delay += 800;
    });

    // Animation đến điểm đích
    const finalTimeout = setTimeout(() => {
      if (!isAnimating.current) return;
      mapRef.current?.animateToRegion(
        {
          latitude: region.coordinate.latitude,
          longitude: region.coordinate.longitude,
          latitudeDelta: 2,
          longitudeDelta: 2,
        },
        1000
      );
    }, delay);
    animationTimeouts.current.push(finalTimeout);

    // Hoàn thành animation
    const completeTimeout = setTimeout(() => {
      if (!isAnimating.current) return;
      onAnimationComplete(recipe, region.name);
      isAnimating.current = false;
      animationTimeouts.current = [];
    }, delay + 1000);
    animationTimeouts.current.push(completeTimeout);
  };

  return {
    animateRandomSearch,
    cleanupAnimation,
    isAnimating: isAnimating.current,
  };
};
