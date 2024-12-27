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
      // padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
    },
    details: {
      paddingTop: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
    },
    metaContainer: {
      marginTop: theme.spacing.xs,
    },
    categoryBadge: {
      position: 'absolute',
      top: theme.spacing.sm,
      right: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      ...theme.shadows.md,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.2)',
    },
    categoryIcon: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing.sm,
      backgroundColor: 'rgba(255,255,255,0.15)',
    },
    categoryText: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: '600',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    actionsContainer: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
    },
    reviewsContainer: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
    },
    statusBadgeContainer: {
      position: 'absolute',
      top: theme.spacing.sm,
      left: theme.spacing.sm,
      flexDirection: 'row',
      gap: theme.spacing.xs,
    },
    statusBadge: {
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xxs,
      ...theme.shadows.sm,
    },
    savedBadge: {
      backgroundColor: theme.colors.success.main,
    },
    cookingBadge: {
      backgroundColor: theme.colors.error.main,
    },
    badgeText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '500',
    },
  });
