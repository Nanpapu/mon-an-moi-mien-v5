import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';
import { ThemeToggle } from './ThemeToggle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Props interface cho AppBar
interface Props {
  title: string;
  rightComponent?: React.ReactNode;
}

// AppBar component
export const AppBar = ({ title, rightComponent }: Props) => {
  const { theme } = useTheme();

  // Lấy kích thước của màn hình
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor: theme.colors.background.paper,
          borderBottomColor: theme.colors.divider,
          ...theme.shadows.sm,
        },
      ]}
    >
      <View style={styles.content}>
        <Typography variant="h2" style={{ flex: 1 }}>
          {title}
        </Typography>

        <View style={styles.actions}>
          <ThemeToggle />
          {rightComponent}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  content: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
