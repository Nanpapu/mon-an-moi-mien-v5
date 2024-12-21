import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Typography } from './Typography';
import { useTheme } from '../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { ToastType } from '../../hooks/useToast';
import { THEME_CONSTANTS } from '../../theme/constants';
import { RootSiblingParent } from 'react-native-root-siblings';

// Props interface cho Toast
interface Props {
  visible: boolean;
  message: string;
  type: ToastType;
  position?: 'top' | 'bottom';
}

// Toast component
export const Toast = ({
  visible,
  message,
  type,
  position = 'bottom',
}: Props) => {
  const { theme } = useTheme();
  const translateY = new Animated.Value(position === 'top' ? -100 : 100);

  // Hàm lấy màu toast dựa trên type
  const getToastColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.success.main;
      case 'error':
        return theme.colors.error.main;
      case 'warning':
        return theme.colors.warning.main;
      default:
        return theme.colors.info.main;
    }
  };

  // Hàm lấy icon toast dựa trên type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'checkmark-circle';
      case 'error':
        return 'alert-circle';
      case 'warning':
        return 'warning';
      default:
        return 'information-circle';
    }
  };

  // Effect hook để tạo hiệu ứng chuyển động
  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: position === 'top' ? -100 : 100,
        duration: THEME_CONSTANTS.animation.duration,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  // Nếu không visible, trả về null
  if (!visible) return null;

  return (
    <RootSiblingParent>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY }],
            backgroundColor: getToastColor(),
            [position]: THEME_CONSTANTS.layout.tabBarHeight + theme.spacing.md,
            left: theme.spacing.md,
            right: theme.spacing.md,
            padding: theme.spacing.md,
            borderRadius: THEME_CONSTANTS.layout.borderRadius.sm,
            ...theme.shadows.md,
          },
        ]}
      >
        <View style={styles.content}>
          <Ionicons
            name={getIcon()}
            size={24}
            color={theme.colors.text.contrast}
          />
          <Typography
            variant="body2"
            style={{
              color: theme.colors.text.contrast,
              marginLeft: theme.spacing.sm,
            }}
          >
            {message}
          </Typography>
        </View>
      </Animated.View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999999,
    elevation: 999999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
