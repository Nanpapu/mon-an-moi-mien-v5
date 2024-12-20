import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { createStyles } from './RecipeCardSkeleton.styles';
import { useTheme } from '../../theme/ThemeContext';

// RecipeCardSkeleton component
export function RecipeCardSkeleton() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Effect hook để tạo hiệu ứng chạy lặp lại
  useEffect(() => {
    // Tạo hiệu ứng chạy lặp lại
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        })
      ])
    ).start();
  }, []);

  // Interpolate giá trị opacity
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7]
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.image, { opacity }]} />
      <View style={styles.content}>
        <Animated.View style={[styles.title, { opacity }]} />
        <Animated.View style={[styles.region, { opacity }]} />
        <Animated.View style={[styles.ingredients, { opacity }]} />
      </View>
    </View>
  );
}
