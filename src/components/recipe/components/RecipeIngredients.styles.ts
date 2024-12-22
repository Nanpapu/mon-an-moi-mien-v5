import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    ingredientsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    sectionIcon: {
      marginRight: theme.spacing.sm,
    },
    ingredientsList: {
      marginTop: theme.spacing.xs,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    ingredientItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.xs,
      width: '48%',
      marginBottom: theme.spacing.xs,
    },
    ingredientNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    ingredientNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 24,
      textAlign: 'center',
      textAlignVertical: 'center',
      includeFontPadding: false,
      padding: 0,
    },
    ingredientText: {
      flex: 1,
      color: theme.colors.text.primary,
      fontSize: 14,
      lineHeight: 20,
    },
  });
