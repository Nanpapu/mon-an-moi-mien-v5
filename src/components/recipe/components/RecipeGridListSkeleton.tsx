import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RecipeGridItemSkeleton } from './RecipeGridItemSkeleton';
import { useTheme } from '../../../theme/ThemeContext';
import { ZOOM_LEVELS } from '../../../screens/Menu/hooks/useGridZoom';

interface Props {
  config: (typeof ZOOM_LEVELS)[keyof typeof ZOOM_LEVELS];
  calculateItemWidth: () => number;
}

export const RecipeGridListSkeleton = ({
  config,
  calculateItemWidth,
}: Props) => {
  const { theme } = useTheme();
  const itemWidth = calculateItemWidth();
  const styles = createStyles(theme, config.spacing);

  // Tính số lượng skeleton items dựa trên zoom level
  const getSkeletonCount = () => {
    switch (config.columns) {
      case 2: // LEVEL_1
        return 6; // 2x3 grid
      case 3: // LEVEL_2
        return 9; // 3x3 grid
      case 4: // LEVEL_3
        return 12; // 4x3 grid
      default:
        return 6;
    }
  };

  const skeletonItems = Array(getSkeletonCount()).fill(null);

  return (
    <View style={styles.container}>
      {skeletonItems.map((_, index) => (
        <RecipeGridItemSkeleton
          key={index}
          width={itemWidth}
          showTitle={config.showTitle}
          showRating={config.showRating}
          minTitleHeight={config.minTitleHeight}
          minRatingHeight={config.minRatingHeight}
        />
      ))}
    </View>
  );
};

const createStyles = (theme: any, spacing: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing,
      padding: theme.spacing.md,
    },
  });
