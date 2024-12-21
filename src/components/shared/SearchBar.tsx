import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

// Props interface cho SearchBar
interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
}

// SearchBar component
export const SearchBar = ({
  value,
  onChangeText,
  placeholder = 'Tìm kiếm...',
  onSubmitEditing,
}: Props) => {
  const { theme } = useTheme();

  // Hàm xử lý xóa text
  const handleClear = () => {
    onChangeText('');
  };

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
            color: theme.colors.text.primary,
            backgroundColor: theme.colors.background.paper,
            borderColor: theme.colors.divider,
          },
        ]}
        onSubmitEditing={onSubmitEditing}
        numberOfLines={1}
        maxLength={100}
        multiline={false}
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
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
});
