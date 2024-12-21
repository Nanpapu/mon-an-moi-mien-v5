import React, { memo } from 'react';
import { Marker } from 'react-native-maps';
import { Recipe, Region } from '../../../types';

interface Props {
  regions: Region[];
  isMapReady: boolean;
  onMarkerPress: (recipes: Recipe[], regionName: string) => void;
}

export const MapMarkers = memo(
  ({ regions, isMapReady, onMarkerPress }: Props) => {
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

          return (
            <Marker
              key={region.id}
              identifier={region.id}
              coordinate={region.coordinate}
              title={region.name}
              onPress={() => onMarkerPress(region.recipes, region.name)}
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
      prevProps.regions.length === nextProps.regions.length
    );
  }
);

MapMarkers.displayName = 'MapMarkers';
