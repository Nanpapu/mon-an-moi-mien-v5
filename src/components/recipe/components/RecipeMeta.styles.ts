import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    recipeMetaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.background.default,
      borderRadius: theme.spacing.xs,
      paddingVertical: theme.spacing.xs,
    },
    metaItem: {
      alignItems: 'center',
      flex: 1,
      paddingVertical: 2,
    },
    metaIcon: {
      marginBottom: 1,
      backgroundColor: theme.colors.background.paper,
      padding: 3,
      borderRadius: theme.spacing.xs,
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.shadows.sm,
    },
    metaLabel: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
      marginBottom: 1,
      fontSize: 9,
    },
    metaValue: {
      ...theme.typography.body2,
      color: theme.colors.text.primary,
      fontWeight: '600',
      fontSize: 11,
    },
    metaDivider: {
      width: 1,
      height: '40%',
      backgroundColor: theme.colors.divider,
      marginHorizontal: 2,
      alignSelf: 'center',
    },
    priceLevel: {
      ...theme.typography.caption,
      fontSize: 9,
      fontWeight: '600',
      marginTop: 1,
    },
  });
