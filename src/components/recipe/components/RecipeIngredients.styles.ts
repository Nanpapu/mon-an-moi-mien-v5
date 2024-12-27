import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    ingredientsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    sectionIcon: {
      marginRight: theme.spacing.sm,
    },
    groupContainer: {
      borderRadius: theme.spacing.md,
      overflow: 'hidden',
      backgroundColor: theme.colors.background.default,
      marginBottom: theme.spacing.sm,
      ...theme.shadows.sm,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderTopLeftRadius: theme.spacing.md,
      borderTopRightRadius: theme.spacing.md,
      opacity: 0.9,
    },
    groupIcon: {
      marginRight: theme.spacing.sm,
    },
    groupTitle: {
      ...theme.typography.subtitle1,
      color: theme.colors.primary.main,
      fontWeight: '600',
    },
    ingredientsList: {
      backgroundColor: theme.colors.background.default,
    },
    ingredientItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
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
      marginLeft: 12,
      marginRight: 12,
    },
    ingredientName: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.xs,
    },
    ingredientDetails: {
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },
    totalContainer: {
      marginTop: theme.spacing.md,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.info.light,
      borderRadius: theme.spacing.md,
    },
  });
