import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      ...theme.shadows.sm,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 400,
      backgroundColor: theme.colors.background.paper,
    },
    content: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
    },
    details: {
      paddingTop: theme.spacing.md,
    },
  });
