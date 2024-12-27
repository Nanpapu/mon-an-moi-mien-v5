import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import * as Font from 'expo-font';
import {
  useFonts,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export const Logo = () => {
  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    DancingScript: DancingScript_700Bold,
    Pacifico: Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../../assets/viet-logo.png')}
          style={[
            styles.logo,
            { borderColor: theme.colors.primary.main, borderRadius: 20 },
          ]}
          resizeMode="contain"
        />
        <View style={styles.textWrapper}>
          <Typography
            variant="caption"
            style={[
              styles.appName,
              {
                color: theme.colors.text.primary,
                fontFamily: 'DancingScript',
              },
            ]}
          >
            Món Việt
          </Typography>
          <Typography
            variant="caption"
            style={[
              styles.slogan,
              {
                color: theme.colors.text.secondary,
                fontFamily: 'Pacifico',
              },
            ]}
          >
            Khám phá tinh hoa ẩm thực Việt
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderWidth: 2,
  },
  appName: {
    fontSize: 38,
    lineHeight: 50,
    letterSpacing: 0.8,
    includeFontPadding: false,
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    paddingTop: 8,
  },
  slogan: {
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: 0.25,
    opacity: 0.9,
    includeFontPadding: false,
  },
});
