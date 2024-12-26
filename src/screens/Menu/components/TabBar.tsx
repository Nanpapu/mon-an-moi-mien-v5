import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
        onPress={() => onTabChange('saved')}
      >
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

      <TouchableOpacity
        style={[styles.tab, activeTab === 'cooking' && styles.activeTab]}
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
      ...theme.shadows.sm,
    },
    tab: {
      flex: 1,
      paddingVertical: theme.spacing.sm,
      alignItems: 'center',
      borderRadius: theme.spacing.xs,
    },
    activeTab: {
      backgroundColor: theme.colors.primary.main,
    },
    tabText: {
      color: theme.colors.text.primary,
    },
    activeTabText: {
      color: theme.colors.primary.contrast,
    },
  });
