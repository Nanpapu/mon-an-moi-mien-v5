import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Animated, View } from 'react-native';
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

  return (
    <View style={[styles.buttonContainer, { pointerEvents: 'box-none' }]}>
      <Tooltip text="Xem toàn bộ Việt Nam">
        <Animated.View
          style={[
            styles.button,
            {
              transform: [{ scale: scaleValue }],
              backgroundColor: theme.colors.background.paper,
              opacity: disabled || isPressed ? 0.6 : 1,
              ...theme.shadows.sm,
            },
          ]}
        >
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isPressed}
            style={styles.touchable}
          >
            <Ionicons
              name="compass-outline"
              size={24}
              color={theme.colors.primary.main}
            />
          </TouchableOpacity>
        </Animated.View>
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
