import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theme/ThemeContext';

// Lấy kích thước của màn hình
const { width } = Dimensions.get('window');

// Tạo styles cho RecipeCard
export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      // marginHorizontal: theme.spacing.md,
      // marginBottom: theme.spacing.md,
      ...theme.shadows.sm,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 400,
      backgroundColor: theme.colors.background.paper,
    },
    content: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: theme.spacing.sm,
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
    details: {
      paddingTop: theme.spacing.md,
    },
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    sectionIcon: {
      marginRight: theme.spacing.sm,
    },
    listItem: {
      ...theme.typography.body1,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing.xs,
      paddingLeft: theme.spacing.md,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    saveButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      marginRight: theme.spacing.sm,
      ...theme.shadows.sm,
    },
    deleteButton: {
      flex: 1,
      backgroundColor: theme.colors.error.main,
      padding: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: theme.spacing.xs,
    },
    buttonText: {
      ...theme.typography.body1,
      color: theme.colors.background.default,
      fontWeight: '600' as const,
    },
    expandButton: {
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
    },
    ratingContainer: {
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      marginTop: theme.spacing.md,
    },
    ratingStars: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginLeft: theme.spacing.sm,
      color: theme.colors.text.secondary,
    },
    ratingHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    ratingScore: {
      alignItems: 'center',
    },
    averageRating: {
      ...theme.typography.h2,
      color: theme.colors.text.primary,
    },
    starsRow: {
      flexDirection: 'row',
      marginVertical: theme.spacing.xs,
      gap: theme.spacing.xs,
    },
    totalReviews: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
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
      // ...theme.shadows.md,
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
    noReviews: {
      color: theme.colors.text.secondary,
      fontSize: 12,
    },
    pressableHighlight: {
      opacity: 0.7,
    },
    expandButtonRotate: {
      transform: [{ rotate: '180deg' }],
    },
    noReviewsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    ingredientsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
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
    instructionsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
    instructionsList: {
      marginTop: theme.spacing.xs,
    },
    instructionNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 12,
      fontWeight: 'bold',
    },
    instructionContent: {
      flex: 1,
    },
    instructionTitle: {
      ...theme.typography.subtitle1,
      color: theme.colors.primary.main,
      marginBottom: theme.spacing.xs,
      fontWeight: '600',
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
    // Container chứa thông tin bổ sung của công thức
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
    instructionSectionIcon: {
      marginRight: theme.spacing.sm,
    },
    instructionSectionTitle: {
      ...theme.typography.subtitle1,
      color: theme.colors.primary.main,
      fontWeight: '600',
    },
    instructionItem: {
      flexDirection: 'row',
      padding: theme.spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    instructionNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },
    instructionText: {
      flex: 1,
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },
    detailContainer: {
      flex: 1,
      backgroundColor: theme.colors.background.default,
    },
    detailContent: {
      padding: theme.spacing.md,
    },
    detailSection: {
      marginBottom: theme.spacing.lg,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.md,
      ...theme.shadows.sm,
    },
    detailActions: {
      marginTop: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
    },
    instructionSteps: {
      backgroundColor: theme.colors.background.default,
    },
    instructionSectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderTopLeftRadius: theme.spacing.md,
      borderTopRightRadius: theme.spacing.md,
    },
    instructionSection: {
      borderRadius: theme.spacing.md,
      overflow: 'hidden',
      backgroundColor: theme.colors.background.default,
      ...theme.shadows.sm,
    },
  });
