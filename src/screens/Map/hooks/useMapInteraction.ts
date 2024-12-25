import { useState, useRef } from 'react';
import MapView from 'react-native-maps';

const CAMERA_BOUNDS = {
  north: 23.393395,
  south: 8.559615,
  west: 102.148224,
  east: 109.469469,
  minZoom: 5.6,
  maxZoom: 9,
};

const VIETNAM_REGION = {
  latitude: 16.047079,
  longitude: 107.5,
  latitudeDelta: 12,
  longitudeDelta: 12,
  ...CAMERA_BOUNDS,
};

// Điều chỉnh lại các mức zoom phù hợp hơn
const ZOOM_LEVELS = {
  COUNTRY: 4, // Zoom xa hơn để dễ nhìn toàn Việt Nam
  REGION: 5, // Mức zoom vùng miền
  CITY: 6, // Mức zoom tỉnh/thành phố
  DISTRICT: 7, // Mức zoom chi tiết
};

// Thêm nhiều thành phố hơn để dễ tìm
const MAJOR_CITIES = [
  '48', // Đà Nẵng
  '01', // Hà Nội
  '79', // TP.HCM
  '46', // Huế
  '92', // Cần Thơ
  '95', // Bạc Liêu
];

const MAP_STYLE = [
  {
    // Ẩn các điểm POI và labels không cần thiết
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    // Ẩn đường đi
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  {
    // Làm đậm biên giới quốc gia
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#000000' }, { weight: 2 }],
  },
  {
    // Làm đậm ranh giới tỉnh thành
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#000000' }, { weight: 1.5 }],
  },
];

export const useMapInteraction = () => {
  // Khởi tạo zoom ban đầu dựa trên VIETNAM_REGION
  const initialZoom = Math.round(
    Math.log(360 / VIETNAM_REGION.latitudeDelta) / Math.LN2
  );
  const [currentZoom, setCurrentZoom] = useState(initialZoom);
  const [region, setRegion] = useState({
    latitude: VIETNAM_REGION.latitude,
    longitude: VIETNAM_REGION.longitude,
    latitudeDelta: VIETNAM_REGION.latitudeDelta,
    longitudeDelta: VIETNAM_REGION.longitudeDelta,
  });

  // Tính toán mức zoom dựa trên latitudeDelta
  const calculateZoom = (latitudeDelta: number) => {
    return Math.round(Math.log(360 / latitudeDelta) / Math.LN2);
  };

  const shouldShowMarker = (regionId: string, zoom: number) => {
    // Luôn hiển thị các thành phố lớn
    if (MAJOR_CITIES.includes(regionId)) {
      return true;
    }

    // Điều chỉnh logic hiển thị marker
    if (zoom <= ZOOM_LEVELS.COUNTRY) {
      // Ở mức zoom toàn quốc, chỉ hiển thị thành phố lớn và một số điểm đáng chú ý
      return MAJOR_CITIES.includes(regionId);
    } else if (zoom <= ZOOM_LEVELS.REGION) {
      // Ở mức zoom vùng miền, hiển thị thêm các tỉnh lân cận
      return true;
    } else {
      // Ở mức zoom chi tiết hơn, hiển thị tất cả
      return true;
    }
  };

  const viewVietnam = (mapRef: React.RefObject<MapView>) => {
    mapRef.current?.animateToRegion(VIETNAM_REGION, 1000);
  };

  // Thêm function mới
  const resetToVietnam = () => {
    setRegion(VIETNAM_REGION);
    setCurrentZoom(initialZoom);
  };

  return {
    currentZoom,
    region,
    setRegion,
    calculateZoom,
    shouldShowMarker,
    setCurrentZoom,
    viewVietnam,
    resetToVietnam,
    VIETNAM_REGION,
    ZOOM_LEVELS,
    CAMERA_BOUNDS,
    MAP_STYLE,
  };
};
