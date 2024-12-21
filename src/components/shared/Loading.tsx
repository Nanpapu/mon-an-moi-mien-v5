import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';

// Props interface cho Loading
interface LoadingProps {
  loading?: boolean;
  text?: string;
  overlay?: boolean;
  style?: StyleProp<ViewStyle>;
}

// Loading component
export const Loading = ({
  loading = true,
  text,
  overlay = false,
  style,
}: LoadingProps) => {
  const { theme } = useTheme();

  // Nếu không đang loading, trả về null
  if (!loading) return null;

  return (
    <View
      style={[
        styles.container,
        overlay && styles.overlay,
        {
          backgroundColor: overlay
            ? 'rgba(0, 0, 0, 0.5)'
            : theme.colors.background.default,
        },
        style,
      ]}
    >
      <ActivityIndicator
        size="large"
        color={overlay ? '#fff' : theme.colors.primary.main}
      />
      {text && (
        <Typography
          variant="body2"
          color={overlay ? 'primary' : 'primary'}
          style={styles.text}
        >
          {text}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
  text: {
    marginTop: 12,
  },
});
