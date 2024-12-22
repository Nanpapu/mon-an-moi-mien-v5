import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    recipeMetaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
      backgroundColor: theme.colors.background.default,
      borderRadius: theme.spacing.xs,
      padding: 8,
    },
    metaItem: {
      alignItems: 'center',
      flex: 1,
      paddingVertical: 4,
    },
    metaIcon: {
      marginBottom: 2,
      backgroundColor: theme.colors.background.paper,
      padding: 4,
      borderRadius: theme.spacing.sm,
      width: 28,
      height: 28,
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
      fontWeight: '700',
      fontSize: 12,
    },
    metaDivider: {
      width: 1,
      height: '50%',
      backgroundColor: theme.colors.divider,
      marginHorizontal: 4,
      alignSelf: 'center',
    },
  });
