import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Recipe } from '../../../types';
import { createStyles } from './RecipeHeader.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  recipe: Recipe;
  showDetails: boolean;
  onToggleDetails: () => void;
  mode?: 'compact' | 'detailed';
}

// Component hiển thị phần header của công thức
export const RecipeHeader = ({
  recipe,
  showDetails,
  onToggleDetails,
  mode = 'compact',
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Typography variant="h3" style={styles.name}>
          {recipe.name}
        </Typography>
        <Typography variant="body2" style={styles.region}>
          {recipe.region}
        </Typography>
      </View>

      {mode === 'compact' && (
        <TouchableOpacity
          style={[
            styles.expandButton,
            showDetails && styles.expandButtonRotate,
          ]}
          onPress={onToggleDetails}
        >
          <Ionicons
            name="chevron-up"
            size={24}
            color={theme.colors.text.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
