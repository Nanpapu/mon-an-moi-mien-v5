import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    instructionsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
    // sectionTitle: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginBottom: theme.spacing.sm,
    // },
    sectionIcon: {
      marginRight: theme.spacing.sm,
    },
    instructionSection: {
      borderRadius: theme.spacing.md,
      overflow: 'hidden',
      backgroundColor: theme.colors.background.default,
      ...theme.shadows.sm,
    },
    instructionSectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderTopLeftRadius: theme.spacing.md,
      borderTopRightRadius: theme.spacing.md,
    },
    instructionSectionIcon: {
      marginRight: theme.spacing.sm,
    },
    instructionSectionTitle: {
      ...theme.typography.subtitle1,
      color: theme.colors.primary.main,
      fontWeight: '600',
    },
    instructionSteps: {
      backgroundColor: theme.colors.background.default,
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
    instructionNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 12,
      fontWeight: 'bold',
    },
    instructionContent: {
      flex: 1,
    },
    instructionText: {
      flex: 1,
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },
    stepTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.xs,
    },
    tipsContainer: {
      marginTop: theme.spacing.md,
      backgroundColor: theme.colors.warning.light + '10',
      borderRadius: 2,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.warning.main,
      ...theme.shadows.xs,
    },
    storageContainer: {
      marginTop: theme.spacing.md,
      backgroundColor: theme.colors.info.light + '10',
      borderRadius: 2,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.info.main,
      ...theme.shadows.xs,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    tipIconContainer: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.colors.warning.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.xs,
    },
    storageIconContainer: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.colors.info.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.xs,
    },
    tipItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    tipBullet: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.colors.warning.main,
      marginRight: theme.spacing.sm,
      marginTop: 8,
    },
    storageBullet: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.colors.info.main,
      marginRight: theme.spacing.sm,
      marginTop: 8,
    },
    tipsContent: {
      paddingVertical: theme.spacing.xs,
    },
    tipText: {
      flex: 1,
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },
    storageText: {
      flex: 1,
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },
  });
