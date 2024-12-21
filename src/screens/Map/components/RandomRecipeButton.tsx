import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Region } from '../../../types';
import * as Haptics from 'expo-haptics';
import { Tooltip } from '../../../components/shared/Tooltip';

// Props interface cho RandomRecipeButton
interface Props {
  regions: Region[]; // Danh sách các vùng miền
  onRandomSelect: (
    latitude: number,
    longitude: number,
    recipes: any[],
    shouldAnimate?: boolean
  ) => void; // Callback khi chọn ngẫu nhiên
  disabled?: boolean; // Trạng thái vô hiệu hóa button
  isAnimating?: boolean; // Thêm prop mới
  onAnimationStart?: () => void; // Thêm prop mới
}

export function RandomRecipeButton({
  regions,
  onRandomSelect,
  disabled,
  isAnimating,
  onAnimationStart,
}: Props) {
  const { theme } = useTheme();
  // State quản lý trạng thái loading
  const [isLoading, setIsLoading] = useState(false);
  // State quản lý trạng thái xoay
  const spinValue = useRef(new Animated.Value(0)).current;
  // State quản lý trạng thái scale
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Reset animation khi isAnimating thay đổi
  useEffect(() => {
    if (!isAnimating) {
      setIsLoading(false);
      spinValue.setValue(0);
      scaleValue.setValue(1);
    }
  }, [isAnimating]);

  // Interpolate giá trị xoay
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Xử lý chọn ngẫu nhiên công thức nấu ăn
  const handleRandomRecipe = async () => {
    const allRegions = regions.filter((region) => region.recipes.length > 0);
    if (allRegions.length === 0 || disabled || isAnimating) return;

    // Thông báo bắt đầu animation
    onAnimationStart?.();

    // Set trạng thái loading
    setIsLoading(true);
    // Tạo hiệu ứng haptic
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Animation nút
    Animated.sequence([
      // Animation scale
      Animated.spring(scaleValue, {
        toValue: 0.8,
        useNativeDriver: true,
        speed: 50,
        bounciness: 10,
      }),
      // Animation scale
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 10,
      }),
    ]).start();

    // Animation xoay
    Animated.loop(
      // Animation xoay
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Delay nhẹ 200ms
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Chọn ngẫu nhiên vùng miền
    const randomRegion =
      allRegions[Math.floor(Math.random() * allRegions.length)];
    // Gọi callback khi chọn ngẫu nhiên
    onRandomSelect(
      randomRegion.coordinate.latitude,
      randomRegion.coordinate.longitude,
      randomRegion.recipes,
      true // flag để trigger animation
    );
  };

  return (
    <Tooltip text="Khám phá ngẫu nhiên một công thức nấu ăn">
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.background.paper,
            opacity: disabled || isAnimating ? 0.6 : 1,
            ...theme.shadows.sm,
          },
        ]}
        onPress={handleRandomRecipe}
        disabled={disabled || isLoading || isAnimating}
      >
        <Animated.View
          style={{
            transform: [{ rotate: spin }, { scale: scaleValue }],
          }}
        >
          <Ionicons name="dice" size={24} color={theme.colors.primary.main} />
        </Animated.View>
      </TouchableOpacity>
    </Tooltip>
  );
}

// Styles cho button
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20, // Đưa xuống sát bottom
    left: 16, // Đặt bên trái màn hình
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
