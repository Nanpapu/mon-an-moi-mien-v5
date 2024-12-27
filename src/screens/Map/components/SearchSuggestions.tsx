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

  // Giới hạn chỉ lấy 5 suggestions đầu tiên
  const limitedSuggestions = suggestions.slice(0, 5);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background.paper },
      ]}
    >
      {limitedSuggestions.map((suggestion, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.suggestionItem,
            {
              borderBottomColor: theme.colors.divider,
              borderBottomWidth:
                index === limitedSuggestions.length - 1 ? 0 : 1,
            },
          ]}
          onPress={() => onSelect(suggestion)}
          activeOpacity={0.7}
        >
          <Typography
            variant="body2"
            style={styles.suggestionText}
            numberOfLines={1}
          >
            {suggestion}
          </Typography>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: 8,
    marginTop: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 220, // Chiều cao tối đa cho 5 items
    overflow: 'hidden',
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 44, // Chiều cao cố định cho mỗi item
  },
  suggestionText: {
    fontSize: 14,
    lineHeight: 24,
  },
});
