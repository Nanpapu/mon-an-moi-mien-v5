import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../../../components/shared';
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
      <Typography variant="subtitle1" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="caption" style={styles.count}>
        ({count})
      </Typography>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    title: {
      flex: 1,
      fontWeight: '600',
    },
    count: {
      color: theme.colors.text.secondary,
    },
  });
