import { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

// Các cấu hình zoom
export const ZOOM_LEVELS = {
  LEVEL_1: {
    // 2x2
    columns: 2,
    spacing: 8,
    showTitle: true,
    showRating: true,
    minTitleHeight: 40,
    minRatingHeight: 25,
    titleLines: 2,
    adjustableFontSize: false,
    maxLines: 2,
    baseFontSize: 13,
    minFontSize: 11,
    titleFontSize: 13,
  },
  LEVEL_2: {
    // 3x3
    columns: 3,
    spacing: 6,
    showTitle: true,
    showRating: true,
    minTitleHeight: 30,
    minRatingHeight: 20,
    titleLines: 1,
    adjustableFontSize: true,
    maxLines: 2,
    baseFontSize: 13,
    minFontSize: 11,
    titleFontSize: 12,
  },
  LEVEL_3: {
    // 4x4
    columns: 4,
    spacing: 4,
    showTitle: true,
    showRating: false,
    minTitleHeight: 20,
    minRatingHeight: 0,
    titleLines: 1,
    titleFontSize: 10,
    adjustableFontSize: false,
    maxLines: 0,
    baseFontSize: 13,
    minFontSize: 11,
  },
} as const;

export const useGridZoom = () => {
  const [zoomLevel, setZoomLevel] =
    useState<keyof typeof ZOOM_LEVELS>('LEVEL_1');

  const currentConfig = ZOOM_LEVELS[zoomLevel];

  const calculateItemWidth = useCallback(() => {
    const { columns, spacing } = currentConfig;
    const containerPadding = 16; // theme.spacing.md
    const availableWidth = windowWidth - containerPadding * 2; // Trừ padding container
    const itemMargin = spacing; // Margin giữa các items
    const totalMarginWidth = itemMargin * (columns - 1); // Tổng margin giữa các items
    const itemWidth = (availableWidth - totalMarginWidth) / columns;
    return Math.floor(itemWidth); // Làm tròn xuống để tránh lỗi pixel
  }, [currentConfig]);

  const zoomIn = useCallback(() => {
    setZoomLevel((current) => {
      if (current === 'LEVEL_1') return 'LEVEL_2';
      if (current === 'LEVEL_2') return 'LEVEL_3';
      return current;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel((current) => {
      if (current === 'LEVEL_3') return 'LEVEL_2';
      if (current === 'LEVEL_2') return 'LEVEL_1';
      return current;
    });
  }, []);

  return {
    zoomLevel,
    currentConfig,
    calculateItemWidth,
    zoomIn,
    zoomOut,
    canZoomIn: zoomLevel !== 'LEVEL_3',
    canZoomOut: zoomLevel !== 'LEVEL_1',
  };
};
