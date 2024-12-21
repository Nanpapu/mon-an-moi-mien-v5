import { useState, useRef } from 'react';
import MapView from 'react-native-maps';

const VIETNAM_REGION = {
  latitude: 16.047079,
  longitude: 108.20623,
  latitudeDelta: 12,
  longitudeDelta: 12,
};

export const useMapInteraction = () => {
  const [region, setRegion] = useState(VIETNAM_REGION);

  const viewVietnam = (mapRef: React.RefObject<MapView>) => {
    mapRef.current?.animateToRegion(VIETNAM_REGION, 1000);
  };

  return {
    region,
    setRegion,
    viewVietnam,
    VIETNAM_REGION,
  };
};
