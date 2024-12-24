import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';
import { Ionicons } from '@expo/vector-icons';

interface Category {
  key: string;
  title: string;
  icon: string;
  color: string;
  total: number;
  completed: number;
  isExpanded?: boolean;
  onPress: () => void;
}

interface Props {
  categories: Category[];
}

export const ProgressCategories = ({ categories }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.categoriesRow}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.key}
            style={[
              styles.categoryButton,
              {
                backgroundColor: category.isExpanded 
                  ? category.color 
                  : theme.colors.background.paper,
                borderColor: category.color,
              },
            ]}
            onPress={category.onPress}
          >
            <Ionicons
              name={category.icon as any}
              size={16}
              color={category.isExpanded ? '#FFF' : category.color}
              style={styles.categoryIcon}
            />
            <Typography
              variant="caption"
              style={[
                styles.categoryText,
                {
                  color: category.isExpanded ? '#FFF' : category.color,
                },
              ]}
            >
              {`${category.completed}/${category.total}`}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 8,
    },
    categoriesRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    categoryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth: 1,
      elevation: 2,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    categoryIcon: {
      marginRight: 4,
    },
    categoryText: {
      fontSize: 12,
      fontWeight: '600',
    },
  });