import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';

interface Props {
  checked: boolean;
  onToggle: () => void;
  size?: number;
  color?: string;
}

export const Checkbox = ({ checked, onToggle, size = 24, color }: Props) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    touchable: {
      padding: 8,
      margin: -8,
    },
    container: {
      width: size,
      height: size,
      borderRadius: size / 4,
      borderWidth: 2,
      borderColor: color || theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: checked
        ? color || theme.colors.primary.main
        : 'transparent',
    },
  });

  return (
    <TouchableOpacity
      onPress={onToggle}
      style={styles.touchable}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <View style={styles.container}>
        {checked && (
          <Ionicons
            name="checkmark"
            size={size - 8}
            color={theme.colors.background.paper}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
