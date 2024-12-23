import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/viet-logo.png')}
        style={[styles.logo, { borderColor: theme.colors.primary.main, borderRadius: 20}]}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Typography
          variant="h2"
          style={[styles.appName, { color: theme.colors.text.primary }]}
        >
          Món Việt
        </Typography>
        <Typography
          variant="caption"
          style={[styles.slogan, { color: theme.colors.text.secondary }]}
        >
          Khám phá tinh hoa ẩm thực Việt
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 24,
  },
  logo: {
    width: 80,
    height: 80,
    borderWidth: 2,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  slogan: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
});
