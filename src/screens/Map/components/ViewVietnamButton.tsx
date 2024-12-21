import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeContext';
import { Tooltip } from '../../../components/shared/Tooltip';

interface Props {
  onPress: () => void;
  disabled?: boolean;
}

export const ViewVietnamButton = ({ onPress, disabled = false }: Props) => {
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePress = () => {
    if (disabled) return;

    setIsPressed(true);

    // Animation khi bấm
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsPressed(false);
      onPress();
    });
  };

  return (
    <Tooltip text="Xem toàn bộ Việt Nam">
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={handlePress}
          disabled={disabled || isPressed}
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.background.paper,
              opacity: disabled || isPressed ? 0.7 : 1,
              ...theme.shadows.sm,
            },
          ]}
        >
          <Ionicons
            name="compass-outline"
            size={24}
            color={theme.colors.primary.main}
          />
        </TouchableOpacity>
      </Animated.View>
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    width: 48,
    height: 48,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
