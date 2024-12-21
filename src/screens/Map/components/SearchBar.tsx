import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { theme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchWidth = useState(new Animated.Value(48))[0];

  // Xử lý animation mở rộng/thu gọn thanh tìm kiếm
  const toggleSearch = () => {
    const toValue = showSearch ? 48 : 300; // Thu gọn về 48px hoặc mở rộng 300px
    Animated.spring(searchWidth, {
      toValue,
      useNativeDriver: false,
    }).start();
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery(''); // Reset query khi đóng
    }
  };

  // Xử lý khi submit tìm kiếm
  const handleSubmit = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <Animated.View
      style={[
        styles.searchContainer,
        {
          backgroundColor: theme.colors.background.paper,
          width: searchWidth,
          ...theme.shadows.sm,
        },
      ]}
    >
      {!showSearch ? (
        // Nút tìm kiếm khi đóng
        <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
          <Ionicons
            name="search"
            size={24}
            color={theme.colors.text.secondary}
          />
        </TouchableOpacity>
      ) : (
        // Thanh tìm kiếm khi mở
        <View style={styles.searchInputWrapper}>
          <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.colors.text.secondary}
            />
          </TouchableOpacity>

          <View style={styles.searchBarWrapper}>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Tìm kiếm địa điểm..."
              placeholderTextColor={theme.colors.text.secondary}
              style={[
                styles.input,
                {
                  color: theme.colors.text.primary,
                  backgroundColor: theme.colors.background.paper,
                  borderColor: theme.colors.divider,
                  ...theme.shadows.sm,
                },
              ]}
              onSubmitEditing={handleSubmit}
            />
          </View>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 16,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    zIndex: 1,
  },
  searchIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarWrapper: {
    flex: 1,
    paddingRight: 16,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingVertical: 8,
  },
});
