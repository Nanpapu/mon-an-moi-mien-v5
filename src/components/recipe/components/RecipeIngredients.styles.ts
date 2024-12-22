import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    ingredientsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.lg,
      padding: theme.spacing.md,
      marginVertical: theme.spacing.sm,
      ...theme.shadows.sm,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
      paddingHorizontal: theme.spacing.xs,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    titleIcon: {
      marginRight: theme.spacing.sm,
      backgroundColor: theme.colors.primary.light,
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    title: {
      color: theme.colors.text.primary,
      fontWeight: '600',
      flex: 1,
    },
    totalContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      backgroundColor: theme.colors.background.default,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    totalItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
    totalText: {
      color: theme.colors.text.secondary,
      fontSize: 12,
      fontWeight: '500',
    },
    ingredientsListContainer: {
      paddingHorizontal: theme.spacing.xs,
    },
    groupContainer: {
      marginBottom: theme.spacing.md,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    groupTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    groupIcon: {
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    groupTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    ingredientsList: {
      gap: theme.spacing.xs,
    },
    ingredientItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background.default,
      borderRadius: theme.spacing.sm,
      padding: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    ingredientNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    ingredientNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 12,
      fontWeight: 'bold',
    },
    ingredientContent: {
      flex: 1,
    },
    ingredientName: {
      fontSize: 14,
      color: theme.colors.text.primary,
      fontWeight: '500',
    },
    ingredientDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing.xs,
      marginTop: 2,
    },
    ingredientAmount: {
      fontSize: 12,
      color: theme.colors.text.secondary,
    },
    ingredientNote: {
      fontSize: 12,
      color: theme.colors.text.secondary,
      fontStyle: 'italic',
    },
  });
