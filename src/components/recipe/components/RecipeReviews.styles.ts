import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    ratingContainer: {
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      marginTop: theme.spacing.md,
    },
    ratingHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ratingScore: {
      alignItems: 'center',
    },
    averageRating: {
      fontSize: 36,
      fontWeight: 'bold',
      color: theme.colors.text.primary,
      padding: theme.spacing.sm,
    },
    starsRow: {
      flexDirection: 'row',
      marginVertical: theme.spacing.xs,
      gap: theme.spacing.xs,
    },
    noReviewsContainer: {
      alignItems: 'center',
      padding: theme.spacing.md,
    },
    noReviews: {
      marginTop: theme.spacing.sm,
      color: theme.colors.text.secondary,
      fontSize: 12,
    },
    addReviewButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      gap: theme.spacing.xs,
    },
    addReviewText: {
      ...theme.typography.body2,
      color: theme.colors.background.default,
      fontWeight: '500' as const,
    },
    viewAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background.paper,
      padding: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      marginTop: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.primary.main,
    },
    viewAllText: {
      color: theme.colors.primary.main,
      marginRight: theme.spacing.sm,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: theme.colors.background.default,
      borderTopLeftRadius: theme.spacing.lg,
      borderTopRightRadius: theme.spacing.lg,
      height: '60%',
    },
    modalHeader: {
      zIndex: 1,
    },
    modalHeaderBackground: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderTopLeftRadius: theme.spacing.lg,
      borderTopRightRadius: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    modalTitle: {
      ...theme.typography.h3,
      color: theme.colors.text.primary,
    },
    closeButton: {
      padding: theme.spacing.sm,
    },
    modalBody: {
      flex: 1,
    },
    reviewsList: {
      maxHeight: width * 1.2,
    },
    pressableHighlight: {
      opacity: 0.7,
    },
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    ratingStars: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginLeft: theme.spacing.sm,
      color: theme.colors.text.secondary,
    },
    totalReviews: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
    },
  });
