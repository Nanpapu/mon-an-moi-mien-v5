import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const useScreenTransition = (isAuthenticated: boolean) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (isAuthenticated) {
      // Animation khi đăng nhập thành công
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animation khi logout
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(slideAnim, {
          toValue: -30, // Slide ra phía trên khi logout
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
      ]).start(() => {
        // Reset animation values sau khi hoàn thành
        slideAnim.setValue(30);
      });
    }
  }, [isAuthenticated]);

  return { fadeAnim, slideAnim };
};
