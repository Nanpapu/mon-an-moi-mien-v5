import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Easing } from 'react-native';
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
  isExiting?: boolean;
}

// Toast component
export const Toast = ({
  visible,
  message,
  type,
  position = 'bottom',
  isExiting,
}: Props) => {
  const { theme } = useTheme();
  const translateY = useRef(
    new Animated.Value(position === 'top' ? -100 : 100)
  ).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

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
    if (visible && !isExiting) {
      // Entrance animation
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          friction: 8,
          tension: 40,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 8,
          tension: 40,
        }),
      ]).start();
    } else if (isExiting) {
      // Exit animation
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: position === 'top' ? -100 : 100,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, isExiting]);

  // Nếu không visible, trả về null
  if (!visible && !isExiting) return null;

  return (
    <RootSiblingParent>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY }, { scale }],
            opacity,
            backgroundColor: getToastColor(),
          },
          position === 'top' ? styles.topPosition : styles.bottomPosition,
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
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  topPosition: {
    top: 44, // Adjust based on your needs
  },
  bottomPosition: {
    bottom: 44, // Adjust based on your needs
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
