import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from './Typography';
import { useTheme } from '../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export const SearchSuggestions = ({ suggestions, onSelect }: Props) => {
  const { theme } = useTheme();

  if (suggestions.length === 0) return null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background.paper,
          borderColor: theme.colors.divider,
          ...theme.shadows.sm,
        },
      ]}
    >
      {suggestions.map((suggestion, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.suggestionItem,
            {
              borderBottomColor: theme.colors.divider,
              borderBottomWidth: index < suggestions.length - 1 ? 1 : 0,
            },
          ]}
          onPress={() => onSelect(suggestion)}
        >
          <Ionicons
            name="search-outline"
            size={16}
            color={theme.colors.text.secondary}
            style={{ marginRight: theme.spacing.sm }}
          />
          <Typography variant="body2">{suggestion}</Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 16,
    right: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 4,
    maxHeight: 200,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});
