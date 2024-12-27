import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';

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
        },
      ]}
    >
      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.suggestionItem,
              {
                borderBottomColor: theme.colors.divider,
                borderBottomWidth: index === suggestions.length - 1 ? 0 : 1,
              },
            ]}
            onPress={() => onSelect(suggestion)}
          >
            <Typography variant="body2">{suggestion}</Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    maxHeight: 200,
    borderRadius: 8,
    marginTop: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  scroll: {
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
  },
});
