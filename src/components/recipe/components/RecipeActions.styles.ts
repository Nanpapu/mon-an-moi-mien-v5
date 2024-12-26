import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    saveButton: {
      flex: 4,
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.spacing.sm,
      ...theme.shadows.sm,
    },
    deleteButton: {
      flex: 2,
      height: 48,
      backgroundColor: theme.colors.error.main,
      paddingHorizontal: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      ...theme.shadows.sm,
    },
    buttonText: {
      ...theme.typography.body1,
      color: theme.colors.background.default,
      fontWeight: '600' as const,
      textAlign: 'center',
    },
    deleteButtonText: {
      ...theme.typography.body2,
      color: theme.colors.background.default,
      fontWeight: '600' as const,
      textAlign: 'center',
    },
    savedButton: {
      backgroundColor: theme.colors.success.main,
    },
    wasSavedButton: {
      backgroundColor: theme.colors.info.main,
    },
    savingButton: {
      backgroundColor: theme.colors.primary.light,
      opacity: 0.8,
    },
    cookingButton: {
      flex: 4,
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.success.main,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.spacing.sm,
      ...theme.shadows.sm,
    },
  });
