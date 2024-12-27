import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

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
          <Ionicons
            name="location-outline"
            size={20}
            color={theme.colors.text.secondary}
            style={styles.icon}
          />
          <Typography
            variant="body2"
            style={[
              styles.suggestionText,
              { color: theme.colors.text.primary },
            ]}
            numberOfLines={1}
          >
            {suggestion}
          </Typography>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.colors.text.disabled}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: 12,
    marginTop: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 240,
    overflow: 'hidden',
    zIndex: 1000,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  icon: {
    marginRight: 12,
  },
  suggestionText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 20,
  },
  arrowIcon: {
    marginLeft: 8,
  },
});
