import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';
import { ThemeToggle } from './ThemeToggle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// AppBar cho người dùng chưa đăng nhập - đơn giản hơn
interface AppBarProps {
  title: string;
}

export const PublicAppBar = ({ title }: AppBarProps) => {
  const { theme } = useTheme();
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
