import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { SearchSuggestions } from '../../../components/shared/SearchSuggestions';

// Props interface cho MenuSearchBar
interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
  recentSearches?: string[];
  onSaveRecentSearch?: (search: string) => void;
}

// MenuSearchBar component
export const MenuSearchBar = ({
  value,
  onChangeText,
  placeholder = 'Tìm kiếm...',
  onSubmitEditing,
  recentSearches,
  onSaveRecentSearch,
}: Props) => {
  const { theme } = useTheme();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // Hàm xử lý xóa text
  const handleClear = () => {
    onChangeText('');
  };

  // Xử lý suggestions khi người dùng nhập
  useEffect(() => {
    if (value.trim().length > 0 && recentSearches?.length && isFocused) {
      const filtered = recentSearches
        .filter((search) => search.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [value, recentSearches, isFocused]);

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
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.text.secondary}
        style={{ marginRight: theme.spacing.sm }}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text.secondary}
        style={[
          styles.input,
          theme.typography.body1,
          {
            backgroundColor: theme.colors.background.paper,
            borderColor: theme.colors.divider,
          },
        ]}
        onSubmitEditing={onSubmitEditing}
        numberOfLines={1}
        maxLength={100}
        multiline={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Hiển thị nút xóa khi có text */}
      {value.length > 0 && (
        <TouchableOpacity
          onPress={handleClear}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Ionicons
            name="close-circle"
            size={20}
            color={theme.colors.text.secondary}
          />
        </TouchableOpacity>
      )}

      {showSuggestions && (
        <SearchSuggestions
          suggestions={suggestions}
          onSelect={(suggestion) => {
            onChangeText(suggestion);
            if (onSaveRecentSearch) {
              onSaveRecentSearch(suggestion);
            }
            setShowSuggestions(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    zIndex: 100,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
});
