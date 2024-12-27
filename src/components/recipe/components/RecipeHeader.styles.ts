import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
    },
    headerContent: {
      flex: 1,
      marginRight: theme.spacing.sm,
    },
    name: {
      ...theme.typography.h3,
      color: theme.colors.text.primary,
    },
    region: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
      marginTop: theme.spacing.xs,
    },
    expandButton: {
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
    },
    expandButtonRotate: {
      transform: [{ rotate: '180deg' }],
    },
  });
