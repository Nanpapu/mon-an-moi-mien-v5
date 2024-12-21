import React, { memo } from 'react';
import { Marker } from 'react-native-maps';
import { Region } from '../../../types';

interface Props {
  regions: Region[];
  isMapReady: boolean;
  currentZoom: number;
  shouldShowMarker: (regionId: string, zoom: number) => boolean;
  onMarkerPress: (recipes: any[]) => void;
}

export const MapMarkers = memo(
  ({
    regions,
    isMapReady,
    currentZoom,
    shouldShowMarker,
    onMarkerPress,
  }: Props) => {
    // Chỉ log trong development và khi thực sự cần thiết
    // if (__DEV__) {
    //   console.log('MapMarkers render:', {
    //     regionsCount: regions.length,
    //     isMapReady,
    //     currentZoom,
    //   });
    // }

    if (!isMapReady || !regions || regions.length === 0) {
      return null;
    }

    return (
      <>
        {regions.map((region) => {
          if (!region.coordinate || !region.id) {
            console.warn('Region không hợp lệ:', region);
            return null;
          }

          const shouldShow = shouldShowMarker(region.id, currentZoom);

          if (!shouldShow) return null;

          return (
            <Marker
              key={region.id}
              identifier={region.id}
              coordinate={region.coordinate}
              title={region.name}
              onPress={() => onMarkerPress(region.recipes)}
              tracksViewChanges={false}
              zIndex={1}
            />
          );
        })}
      </>
    );
  },
  // Thêm hàm so sánh để tránh re-render không cần thiết
  (prevProps, nextProps) => {
    return (
      prevProps.isMapReady === nextProps.isMapReady &&
      prevProps.currentZoom === nextProps.currentZoom &&
      prevProps.regions.length === nextProps.regions.length
    );
  }
);

MapMarkers.displayName = 'MapMarkers';
