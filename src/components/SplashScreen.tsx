import React, { useEffect } from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Typography } from './shared';
import {
  useFonts,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const { width, height } = Dimensions.get('window');

export const SplashScreen = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  // Load fonts
  const [fontsLoaded] = useFonts({
    DancingScript: DancingScript_700Bold,
    Pacifico: Pacifico_400Regular,
  });

  // Các giá trị animation
  const logoScale = new Animated.Value(0.8);
  const logoOpacity = new Animated.Value(0);
  const logoRotate = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);
  const textSlide = new Animated.Value(50);
  const sloganOpacity = new Animated.Value(0);
  const sloganSlide = new Animated.Value(30);

  useEffect(() => {
    if (!fontsLoaded) return;

    // Animation sequence
    Animated.sequence([
      // Logo animation
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 15,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
      // Logo nhẹ nhàng lắc qua lại
      Animated.sequence([
        Animated.timing(logoRotate, {
          toValue: -0.1,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(logoRotate, {
          toValue: 0.1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(logoRotate, {
          toValue: 0,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      // Text animations
      Animated.parallel([
        // App name
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(textSlide, {
          toValue: 0,
          tension: 30,
          friction: 8,
          useNativeDriver: true,
        }),
        // Slogan
        Animated.timing(sloganOpacity, {
          toValue: 1,
          duration: 800,
          delay: 300,
          useNativeDriver: true,
        }),
        Animated.spring(sloganSlide, {
          toValue: 0,
          tension: 30,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
      // Delay before exit
      Animated.delay(1500),
    ]).start(() => {
      // Fade out everything
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(sloganOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(onAnimationComplete);
    });
  }, [fontsLoaded]);

  // Đợi font load xong
  if (!fontsLoaded) return null;

  const rotate = logoRotate.interpolate({
    inputRange: [-0.1, 0, 0.1],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }, { rotate }],
          },
        ]}
      >
        <Image
          source={require('../../assets/viet-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: textOpacity,
            transform: [{ translateY: textSlide }],
          },
        ]}
      >
        <Typography
          variant="body1"
          style={[
            styles.appName,
            {
              fontFamily: 'DancingScript',
              includeFontPadding: false,
              textAlignVertical: 'center',
            },
          ]}
        >
          Món Việt
        </Typography>
      </Animated.View>

      <Animated.View
        style={[
          styles.sloganContainer,
          {
            opacity: sloganOpacity,
            transform: [{ translateY: sloganSlide }],
          },
        ]}
      >
        <Typography
          variant="body1"
          style={[
            styles.slogan,
            {
              fontFamily: 'Pacifico',
              includeFontPadding: false,
              textAlignVertical: 'center',
            },
          ]}
        >
          Khám phá tinh hoa ẩm thực Việt
        </Typography>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: height * 0.1,
  },
  logoContainer: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: height * 0.06,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02,
    height: 70,
    justifyContent: 'center',
  },
  sloganContainer: {
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  appName: {
    fontSize: width * 0.12,
    color: '#000000',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    lineHeight: 70,
    height: 70,
    paddingTop: 0,
    includeFontPadding: false,
  },
  slogan: {
    fontSize: width * 0.045,
    color: '#666666',
    opacity: 0.9,
    lineHeight: 24,
  },
});
