import { useRef, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Recipe } from '../../../types';
import { useToast } from '../../../hooks/useToast';

interface SearchPoint {
  lat: number;
  lng: number;
  name: string;
}

const SEARCH_POINTS: SearchPoint[] = [
  { lat: 21.028511, lng: 105.804817, name: 'Hà Nội' },
  { lat: 16.047079, lng: 108.20623, name: 'Đà Nẵng' },
  { lat: 10.762622, lng: 106.660172, name: 'TP.HCM' },
  { lat: 12.235825, lng: 109.190483, name: 'Nha Trang' },
  { lat: 21.394305, lng: 103.01783, name: 'Sơn La' },
  { lat: 10.045162, lng: 105.746857, name: 'Cần Thơ' },
];

export const useRandomAnimation = (mapRef: React.RefObject<MapView>) => {
  const { showToast } = useToast();
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);
  const isAnimating = useRef(false);
  const hasStartedAnimation = useRef(false);

  const cleanupAnimation = () => {
    if (isAnimating.current) {
      animationTimeouts.current.forEach((timeout) => clearTimeout(timeout));
      animationTimeouts.current = [];
      isAnimating.current = false;
      if (hasStartedAnimation.current) {
        showToast('info', 'Đã dừng tìm kiếm ngẫu nhiên');
      }
      hasStartedAnimation.current = false;
    }
  };

  const animateRandomSearch = (
    targetLatitude: number,
    targetLongitude: number,
    recipes: Recipe[],
    onAnimationComplete: (recipes: Recipe[]) => void
  ) => {
    isAnimating.current = true;

    const randomPoints = [...SEARCH_POINTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((point) => ({
        latitude: point.lat + (Math.random() - 0.5) * 0.5,
        longitude: point.lng + (Math.random() - 0.5) * 0.5,
        latitudeDelta: 4,
        longitudeDelta: 4,
      }));

    let delay = 0;
    const initialTimeout = setTimeout(() => {
      hasStartedAnimation.current = true;
    }, 100);
    animationTimeouts.current.push(initialTimeout);

    randomPoints.forEach((point) => {
      const timeout = setTimeout(() => {
        if (!isAnimating.current) return;
        mapRef.current?.animateToRegion(point, 800);
      }, delay);
      animationTimeouts.current.push(timeout);
      delay += 800;
    });

    const finalTimeout = setTimeout(() => {
      if (!isAnimating.current) return;
      mapRef.current?.animateToRegion(
        {
          latitude: targetLatitude,
          longitude: targetLongitude,
          latitudeDelta: 2,
          longitudeDelta: 2,
        },
        1000
      );
    }, delay);
    animationTimeouts.current.push(finalTimeout);

    const completeTimeout = setTimeout(() => {
      if (!isAnimating.current) return;
      onAnimationComplete(recipes);
      isAnimating.current = false;
      hasStartedAnimation.current = false;
      animationTimeouts.current = [];
    }, delay + 1000);
    animationTimeouts.current.push(completeTimeout);
  };

  useEffect(() => {
    return () => {
      cleanupAnimation();
    };
  }, []);

  return {
    animateRandomSearch,
    cleanupAnimation,
    isAnimating: isAnimating.current,
  };
};
