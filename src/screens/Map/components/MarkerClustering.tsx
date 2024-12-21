import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import { Region, Recipe } from '../../../types';
import { useTheme } from '../../../theme/ThemeContext';
import SuperCluster from 'supercluster';

interface Props {
  regions: Region[];
  onMarkerPress: (recipes: Recipe[], regionName: string) => void;
  mapRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export const MarkerClustering: React.FC<Props> = ({
  regions,
  onMarkerPress,
  mapRegion,
}) => {
  const { theme } = useTheme();

  // Tạo SuperCluster instance
  const cluster = useMemo(() => {
    const supercluster = new SuperCluster({
      radius: 40, // Bán kính gom cụm (pixel)
      maxZoom: 20, // Mức zoom tối đa
      minZoom: 1, // Mức zoom tối thiểu
    });

    // Convert regions thành GeoJSON points
    const points = regions
      .filter((region) => region.coordinate)
      .map((region) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            region.coordinate.longitude,
            region.coordinate.latitude,
          ],
        },
        properties: {
          id: region.id,
          name: region.name,
          recipes: region.recipes,
        },
      }));

    supercluster.load(points as any);
    return supercluster;
  }, [regions]);

  // Tính toán zoom level từ latitudeDelta
  const getZoomLevel = () => {
    const angle = mapRegion.latitudeDelta;
    return Math.round(Math.log(360 / angle) / Math.LN2);
  };

  // Lấy các clusters và markers để hiển thị
  const markers = useMemo(() => {
    const zoom = getZoomLevel();
    const bounds = [
      mapRegion.longitude - mapRegion.longitudeDelta,
      mapRegion.latitude - mapRegion.latitudeDelta,
      mapRegion.longitude + mapRegion.longitudeDelta,
      mapRegion.latitude + mapRegion.latitudeDelta,
    ];

    return cluster.getClusters(bounds as any, zoom);
  }, [mapRegion, cluster]);

  return (
    <>
      {markers.map((marker: any) => {
        const coordinates = {
          latitude: marker.geometry.coordinates[1],
          longitude: marker.geometry.coordinates[0],
        };

        if (marker.properties.cluster) {
          // Render cluster marker
          return (
            <Marker
              key={`cluster-${marker.id}`}
              coordinate={coordinates}
              tracksViewChanges={false}
            >
              <View
                style={[
                  styles.clusterMarker,
                  { backgroundColor: theme.colors.primary.main },
                ]}
              >
                <Text style={styles.clusterText}>
                  {marker.properties.point_count}
                </Text>
              </View>
            </Marker>
          );
        }

        // Render individual marker
        return (
          <Marker
            key={marker.properties.id}
            coordinate={coordinates}
            title={marker.properties.name}
            onPress={() =>
              onMarkerPress(marker.properties.recipes, marker.properties.name)
            }
            tracksViewChanges={false}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  clusterMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  clusterText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
