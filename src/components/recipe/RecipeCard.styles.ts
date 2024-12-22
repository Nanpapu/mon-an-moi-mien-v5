import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.sm,
      ...theme.shadows.sm,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 200,
      backgroundColor: theme.colors.background.paper,
    },
    content: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
    },
    details: {
      paddingTop: theme.spacing.sm,
    },
    metaContainer: {
      marginTop: theme.spacing.xs,
    },
    actionsContainer: {
      marginTop: theme.spacing.sm,
    },
    reviewsContainer: {
      marginTop: theme.spacing.sm,
    },
  });
