import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { useDisplay } from '../../../context/DisplayContext';

export const DisplaySettings = () => {
  const { theme } = useTheme();
  const { focusMode, toggleFocusMode } = useDisplay();

  return (
    <View style={styles.container}>
      <Typography variant="subtitle1" style={styles.title}>
        Tùy chỉnh hiển thị
      </Typography>

      <View style={[styles.section]}>
        <View style={styles.sectionHeader}>
          <Ionicons
            name="eye-outline"
            size={18}
            color={theme.colors.text.primary}
            style={{ marginRight: 6 }}
          />
          <Typography variant="subtitle1" style={styles.sectionTitle}>
            Chế độ tập trung
          </Typography>
        </View>

        <View style={styles.settingItem}>
          <Typography variant="body2" style={{ flex: 1 }}>
            Ẩn thanh tiêu đề để tập trung vào nội dung
          </Typography>
          <Switch
            value={focusMode}
            onValueChange={toggleFocusMode}
            trackColor={{
              false: theme.colors.divider,
              true: theme.colors.primary.main,
            }}
            thumbColor={theme.colors.background.paper}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
