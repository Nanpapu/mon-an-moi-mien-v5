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
    categoryBadge: {
      position: 'absolute',
      top: theme.spacing.sm,
      right: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.spacing.lg,
      backgroundColor: '#000000',
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 8,
      borderWidth: 1.5,
      borderColor: 'rgba(255,255,255,0.3)',
    },
    categoryIcon: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing.sm,
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    categoryText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '700',
      textShadowColor: 'rgba(0, 0, 0, 0.9)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 3,
    },
    actionsContainer: {
      marginTop: theme.spacing.sm,
    },
    reviewsContainer: {
      marginTop: theme.spacing.sm,
    },
  });
