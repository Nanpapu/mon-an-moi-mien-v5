import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export interface QuickFilterSettings {
  showRegions: boolean;
  showCategories: boolean;
  showDifficulty: boolean;
}

interface Props {
  settings: QuickFilterSettings;
  onSettingsChange: (newSettings: QuickFilterSettings) => void;
}

export const FilterSettings = ({ settings, onSettingsChange }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const toggleSetting = (key: keyof QuickFilterSettings) => {
    onSettingsChange({
      ...settings,
      [key]: !settings[key],
    });
  };

  const renderSettingItem = (
    key: keyof QuickFilterSettings,
    label: string,
    icon: string,
    disabled = false
  ) => (
    <TouchableOpacity
      style={[
        styles.settingItem,
        settings[key] && styles.settingItemActive,
        disabled && styles.settingItemDisabled,
      ]}
      onPress={() => !disabled && toggleSetting(key)}
      disabled={disabled}
    >
      <Ionicons
        name={icon as any}
        size={20}
        color={
          settings[key]
            ? theme.colors.primary.contrast
            : theme.colors.text.primary
        }
      />
      <Typography
        variant="body2"
        style={[
          styles.settingLabel,
          settings[key] && styles.settingLabelActive,
        ]}
      >
        {label}
      </Typography>
      {disabled && (
        <Typography variant="caption" style={styles.defaultText}>
          (Mặc định)
        </Typography>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Typography variant="subtitle1" style={styles.title}>
        Bộ lọc nhanh
      </Typography>
      <View style={styles.settingsGrid}>
        {renderSettingItem('showRegions', 'Vùng miền', 'map')}
        {renderSettingItem('showCategories', 'Loại món', 'restaurant')}
        {renderSettingItem('showDifficulty', 'Độ khó', 'star')}
      </View>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.md,
    },
    title: {
      marginBottom: theme.spacing.md,
    },
    settingsGrid: {
      gap: theme.spacing.sm,
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.md + 2,
      paddingHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.divider,
    },
    settingItemActive: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    settingItemDisabled: {
      opacity: 0.8,
    },
    settingLabel: {
      marginLeft: theme.spacing.sm,
    },
    settingLabelActive: {
      color: theme.colors.primary.contrast,
    },
    defaultText: {
      marginLeft: 'auto',
      color: theme.colors.text.secondary,
      fontStyle: 'italic',
    },
  });
