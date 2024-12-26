import React, { useEffect, useRef } from 'react';
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

  // Tạo animated value để control vị trí của indicator
  const translateX = useRef(
    new Animated.Value(activeTab === 'saved' ? 0 : 1)
  ).current;

  // Animation khi tab thay đổi
  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeTab === 'saved' ? 0 : 1,
      useNativeDriver: true,
      tension: 68,
      friction: 10,
    }).start();
  }, [activeTab]);

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
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
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, width / 2 - 8],
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
      left: 4,
      width: '48%',
      height: 40,
      backgroundColor: theme.colors.primary.main,
      borderRadius: theme.spacing.xs,
      zIndex: 0,
    },
  });
