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

  // Tạo mảng 6 phần tử để render skeleton
  const skeletonItems = Array(6).fill(null);

  return (
    <View style={styles.container}>
      {skeletonItems.map((_, index) => (
        <RecipeGridItemSkeleton key={index} width={itemWidth} />
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
