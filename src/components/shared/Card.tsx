import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

// Props interface cho Card
interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  variant?: 'elevated' | 'outlined' | 'filled';
}

// Card component
export const Card = ({
  children,
  style,
  onPress,
  variant = 'elevated',
}: CardProps) => {
  const { theme } = useTheme();

  // Hàm lấy styles cho variant
  const getVariantStyle = () => {
    switch (variant) {
      case 'outlined':
        return {
          backgroundColor: theme.colors.background.default,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      case 'filled':
        return {
          backgroundColor: theme.colors.background.paper,
        };
      default:
        return {
          backgroundColor: theme.colors.background.default,
          ...theme.shadows.md,
        };
    }
  };

  // Chọn Container dựa trên onPress
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={[
        styles.card,
        getVariantStyle(),
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
});
