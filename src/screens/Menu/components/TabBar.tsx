import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';

export type TabType = 'cooking' | 'saved';

interface Props {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  cookingCount: number;
  savedCount: number;
}

export const TabBar = ({
  activeTab,
  onTabChange,
  cookingCount,
  savedCount,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const containerRef = useRef<View>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Sửa lại giá trị khởi tạo của Animated.Value
  const translateX = useRef(
    new Animated.Value(activeTab === 'cooking' ? 1 : 0)
  ).current;

  const onLayout = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.measure((x, y, width) => {
        setContainerWidth(width);
      });
    }
  }, []);

  // Sửa lại logic animation
  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeTab === 'cooking' ? 1 : 0,
      useNativeDriver: true,
      tension: 68,
      friction: 10,
    }).start();
  }, [activeTab]);

  // Tính toán lại vị trí indicator
  const indicatorWidth = containerWidth
    ? (containerWidth - theme.spacing.xs * 2) / 2
    : 0;

  return (
    <View ref={containerRef} onLayout={onLayout} style={styles.container}>
      {/* Tab Đã lưu */}
      <TouchableOpacity style={styles.tab} onPress={() => onTabChange('saved')}>
        <Typography
          variant="body1"
          style={[
            styles.tabText,
            activeTab === 'saved' && styles.activeTabText,
          ]}
        >
          Đã lưu ({savedCount})
        </Typography>
      </TouchableOpacity>

      {/* Tab Đang nấu */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange('cooking')}
      >
        <Typography
          variant="body1"
          style={[
            styles.tabText,
            activeTab === 'cooking' && styles.activeTabText,
          ]}
        >
          Đang nấu ({cookingCount})
        </Typography>
      </TouchableOpacity>

      {/* Animated Indicator */}
      <Animated.View
        style={[
          styles.indicator,
          {
            width: indicatorWidth,
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    theme.spacing.xs,
                    indicatorWidth + theme.spacing.xs,
                  ],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.sm,
      padding: theme.spacing.xs,
      marginHorizontal: theme.spacing.md,
      marginVertical: theme.spacing.sm,
      position: 'relative',
      height: 48,
      alignItems: 'center',
      ...theme.shadows.sm,
    },
    tab: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.spacing.xs,
      zIndex: 1,
      paddingHorizontal: theme.spacing.sm,
    },
    tabText: {
      color: theme.colors.text.primary,
      fontWeight: '500',
    },
    activeTabText: {
      color: theme.colors.primary.contrast,
      fontWeight: '600',
    },
    indicator: {
      position: 'absolute',
      top: 4,
      height: 40,
      backgroundColor: theme.colors.primary.main,
      borderRadius: theme.spacing.xs,
      zIndex: 0,
    },
  });
