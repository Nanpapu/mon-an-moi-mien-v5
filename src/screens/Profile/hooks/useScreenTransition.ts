import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const useScreenTransition = (isAuthenticated: boolean) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (isAuthenticated) {
      // Animation đăng nhập - mượt mà hơn với spring
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400, // Giảm duration xuống
          useNativeDriver: true,
          easing: Easing.bezier(0.4, 0, 0.2, 1), // Dùng bezier để mượt hơn
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 65, // Tăng tension để animation nhanh hơn
          friction: 10, // Giảm friction để bớt "nảy"
          restSpeedThreshold: 10, // Tối ưu điểm dừng
          restDisplacementThreshold: 10,
        }),
      ]).start();
    } else {
      // Animation đăng xuất - mượt mà với timing
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250, // Giảm duration để nhanh hơn
          useNativeDriver: true,
          easing: Easing.bezier(0.4, 0, 1, 1), // Dùng bezier cho mượt
        }),
        Animated.timing(slideAnim, {
          toValue: -20, // Giảm khoảng cách slide
          duration: 250,
          useNativeDriver: true,
          easing: Easing.bezier(0.4, 0, 1, 1),
        }),
      ]).start(() => {
        slideAnim.setValue(30); // Reset giá trị sau animation
      });
    }
  }, [isAuthenticated]);

  return { fadeAnim, slideAnim };
};
