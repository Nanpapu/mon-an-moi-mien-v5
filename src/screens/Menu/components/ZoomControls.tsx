import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeContext';

interface Props {
  onZoomIn: () => void;
  onZoomOut: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
  onZoomChange?: () => void;
}

export const ZoomControls = ({
  onZoomIn,
  onZoomOut,
  canZoomIn,
  canZoomOut,
  onZoomChange,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleZoomIn = () => {
    onZoomIn();
    onZoomChange?.();
  };

  const handleZoomOut = () => {
    onZoomOut();
    onZoomChange?.();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleZoomIn}
        disabled={!canZoomIn}
        style={[styles.button, !canZoomIn && styles.buttonDisabled]}
      >
        <Ionicons name="add" size={24} color={canZoomIn ? '#000' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleZoomOut}
        disabled={!canZoomOut}
        style={[styles.button, !canZoomOut && styles.buttonDisabled]}
      >
        <Ionicons
          name="remove"
          size={24}
          color={canZoomOut ? '#000' : '#999'}
        />
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      right: theme.spacing.lg,
      bottom: theme.spacing.xl,
      flexDirection: 'column',
      gap: theme.spacing.xs,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.xs,
      ...theme.shadows.md,
    },
    button: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonDisabled: {
      opacity: 0.5,
    },
  });
