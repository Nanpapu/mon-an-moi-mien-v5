import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme/ThemeContext';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
    imageContainer: {
      width: '100%',
      height: 250,
      backgroundColor: theme.colors.background.paper,
      marginBottom: theme.spacing.md,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
