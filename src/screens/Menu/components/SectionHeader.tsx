import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared/Typography';
import { useTheme } from '../../../theme/ThemeContext';

interface Props {
  title: string;
  count: number;
}

export const SectionHeader = ({ title, count }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography variant="h3" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" style={styles.count}>
          ({count})
        </Typography>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.background.default,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
    title: {
      color: theme.colors.text.primary,
      fontSize: 18,
      fontWeight: '600',
    },
    count: {
      color: theme.colors.text.secondary,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.divider,
      marginTop: theme.spacing.sm,
      opacity: 0.5,
    },
  });
