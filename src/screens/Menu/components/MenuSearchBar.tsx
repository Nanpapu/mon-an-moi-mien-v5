import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { SearchSuggestions } from '../../../components/shared/SearchSuggestions';
import { containsSearchQuery } from '../../../utils/stringUtils';

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
    try {
      if (!value || !recentSearches) {
        setShowSuggestions(false);
        return;
      }

      const trimmedValue = value.trim();

      if (trimmedValue.length > 0 && recentSearches.length > 0 && isFocused) {
        const filtered = recentSearches
          .filter((search) => {
            if (!search) return false;
            return containsSearchQuery(search, trimmedValue);
          })
          .slice(0, 5);

        setSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error('Lỗi khi xử lý suggestions:', error);
      setShowSuggestions(false);
    }
  }, [value, recentSearches, isFocused]);

  // Thêm xử lý onSubmitEditing
  const handleSubmitEditing = () => {
    try {
      if (value && value.trim()) {
        onSubmitEditing?.();
        if (onSaveRecentSearch) {
          onSaveRecentSearch(value.trim());
        }
      }
    } catch (error) {
      console.error('Lỗi khi submit search:', error);
    }
  };

  console.log('Search submitted with value:', value);

  console.log('Processing suggestions for value:', value);
  console.log('Recent searches:', recentSearches);

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
            color: theme.colors.text.primary,
            height: 32,
            textAlignVertical: 'center',
          },
        ]}
        onSubmitEditing={handleSubmitEditing}
        numberOfLines={1}
        maxLength={100}
        multiline={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit={true}
        returnKeyType="search"
      />

      {/* Hiển thị nút xóa khi có text */}
      {value && value.trim().length > 0 && (
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
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 1,
    marginVertical: 4,
    zIndex: 100,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 0,
  },
});
