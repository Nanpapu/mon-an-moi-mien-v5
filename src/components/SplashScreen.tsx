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
import { useTheme } from '../theme/ThemeContext';
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
  const { theme } = useTheme();
  // Load fonts
  const [fontsLoaded] = useFonts({
    DancingScript: DancingScript_700Bold,
    Pacifico: Pacifico_400Regular,
  });

  // Các giá trị animation
  const logoScale = new Animated.Value(0.8);
  const logoOpacity = new Animated.Value(0);
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
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 30,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // App name animation
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(textSlide, {
          toValue: 0,
          tension: 60,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Slogan animation
      Animated.parallel([
        Animated.timing(sloganOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(sloganSlide, {
          toValue: 0,
          tension: 60,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Delay before exit
      Animated.delay(600),
    ]).start(() => {
      // Fade out everything
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(sloganOpacity, {
          toValue: 0,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(onAnimationComplete);
    });
  }, [fontsLoaded]);

  // Đợi font load xong
  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background.default },
      ]}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View
          style={{
            shadowColor: theme.colors.primary.main,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Image
            source={require('../../assets/viet-logo.png')}
            style={[
              styles.logo,
              {
                borderColor: theme.colors.primary.main,
                backgroundColor: theme.colors.background.paper,
              },
            ]}
            resizeMode="contain"
          />
        </View>
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
              color: theme.colors.primary.main,
              textShadowColor: `${theme.colors.primary.main}40`,
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
              color: theme.colors.text.secondary,
              includeFontPadding: false,
              textAlignVertical: 'center',
            },
          ]}
        >
          Khám phá tinh hoa ẩm thực Việt
        </Typography>
      </Animated.View>

      <Animated.View
        style={[
          styles.gradientOverlay,
          {
            backgroundColor: `${theme.colors.primary.main}10`,
            opacity: logoOpacity,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: height * 0.1,
  },
  logoContainer: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: height * 0.03,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 2,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: height * 0.01,
    height: 70,
    justifyContent: 'center',
  },
  sloganContainer: {
    alignItems: 'center',
    marginTop: height * 0.005,
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
