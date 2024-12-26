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
import { Ionicons } from '@expo/vector-icons';

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
    <View style={styles.wrapper}>
      <View ref={containerRef} onLayout={onLayout} style={styles.container}>
        {/* Tab Đã lưu */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabChange('saved')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={
              activeTab === 'saved'
                ? theme.colors.primary.contrast
                : theme.colors.text.primary
            }
            style={styles.tabIcon}
          />
          <Typography
            variant="body1"
            style={[
              styles.tabText,
              activeTab === 'saved' && styles.activeTabText,
            ]}
          >
            Đã lưu
          </Typography>
          <View style={styles.badgeContainer}>
            <Typography variant="caption" style={styles.badgeText}>
              {savedCount}
            </Typography>
          </View>
        </TouchableOpacity>

        {/* Tab Đang nấu */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabChange('cooking')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="restaurant-outline"
            size={20}
            color={
              activeTab === 'cooking'
                ? theme.colors.primary.contrast
                : theme.colors.text.primary
            }
            style={styles.tabIcon}
          />
          <Typography
            variant="body1"
            style={[
              styles.tabText,
              activeTab === 'cooking' && styles.activeTabText,
            ]}
          >
            Đang nấu
          </Typography>
          <View style={styles.badgeContainer}>
            <Typography variant="caption" style={styles.badgeText}>
              {cookingCount}
            </Typography>
          </View>
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
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.background.default,
    },
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background.paper,
      borderRadius: 28,
      padding: 4,
      position: 'relative',
      height: 56,
      alignItems: 'center',
      ...theme.shadows.md,
    },
    tab: {
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      zIndex: 1,
      paddingHorizontal: theme.spacing.sm,
    },
    tabIcon: {
      marginRight: 6,
    },
    tabText: {
      color: theme.colors.text.primary,
      fontWeight: '500',
      fontSize: 15,
    },
    activeTabText: {
      color: theme.colors.primary.contrast,
      fontWeight: '600',
    },
    indicator: {
      position: 'absolute',
      top: 4,
      height: 48,
      backgroundColor: theme.colors.primary.main,
      borderRadius: 24,
      zIndex: 0,
      elevation: 2,
      shadowColor: theme.colors.primary.main,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    badgeContainer: {
      backgroundColor: theme.colors.background.default,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 2,
      marginLeft: 6,
      minWidth: 24,
      alignItems: 'center',
    },
    badgeText: {
      color: theme.colors.text.primary,
      fontSize: 12,
      fontWeight: '500',
    },
  });
