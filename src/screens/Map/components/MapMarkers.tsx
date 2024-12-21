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
    console.log('MapMarkers render:', {
      regionsCount: regions.length,
      isMapReady,
      currentZoom,
    });

    if (!isMapReady || !regions || regions.length === 0) {
      console.log('MapMarkers không render vì:', {
        isMapReady,
        hasRegions: regions && regions.length > 0,
      });
      return null;
    }

    return (
      <>
        {regions.map((region) => {
          if (!region.coordinate || !region.id) {
            console.log('Region không hợp lệ:', region);
            return null;
          }

          const shouldShow = shouldShowMarker(region.id, currentZoom);

          // console.log('Marker check:', {
          //   regionId: region.id,
          //   shouldShow,
          //   zoom: currentZoom,
          //   coordinate: region.coordinate,
          // });

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
  }
);

MapMarkers.displayName = 'MapMarkers';
