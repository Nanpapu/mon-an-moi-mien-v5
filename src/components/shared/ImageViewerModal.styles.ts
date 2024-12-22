import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width,
      height: height * 0.8,
    },
    closeButton: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 1,
      padding: theme.spacing.sm,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: theme.spacing.xl,
    },
    closeIcon: {
      color: theme.colors.background.paper,
    },
  });
