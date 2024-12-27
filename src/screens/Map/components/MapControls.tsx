import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
  TextInput,
  Dimensions,
  Easing,
} from 'react-native';
import { RandomRecipeButton } from './RandomRecipeButton';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Region } from '../../../types';
import { SearchSuggestions } from './SearchSuggestions';
import { removeAccents } from '../../../utils/stringUtils';
import Fuse from 'fuse.js';

interface Props {
  onRefresh: () => Promise<void>;
  regions: Region[];
  onRandomSelect: (latitude: number, longitude: number, recipes: any[]) => void;
  onSearch: (query: string) => void;
  isAnimating?: boolean;
  onAnimationStart?: () => void;
  isRefreshing?: boolean;
}

export function MapControls({
  onRefresh,
  regions,
  onRandomSelect,
  onSearch,
  isAnimating,
  onAnimationStart,
  isRefreshing = false,
}: Props) {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchWidth = useRef(new Animated.Value(48)).current;
  const reloadTop = useRef(new Animated.Value(20)).current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (isRefreshing) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [isRefreshing]);

  const toggleSearch = () => {
    const screenWidth = Dimensions.get('window').width;
    const expandedWidth = screenWidth - 32;
    const toValue = showSearch ? 48 : expandedWidth;
    const newTop = showSearch ? 20 : 80;

    setShowSearch(!showSearch);

    Animated.parallel([
      Animated.spring(searchWidth, {
        toValue,
        useNativeDriver: false,
        friction: 10,
      }),
      Animated.spring(reloadTop, {
        toValue: newTop,
        useNativeDriver: false,
        friction: 10,
      }),
    ]).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const fuse = useMemo(() => {
    const options = {
      includeScore: true,
      threshold: 0.4,
      keys: ['name'],
      ignoreLocation: true,
      shouldSort: true,
    };

    const searchData = regions.map((region) => ({
      name: removeAccents(region.name),
      originalName: region.name,
    }));

    return new Fuse(searchData, options);
  }, [regions]);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);

    if (text.trim().length > 0) {
      const searchResults = fuse
        .search(removeAccents(text))
        .slice(0, 5)
        .map((result) => result.item.originalName);

      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
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
          <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
            <Ionicons
              name="search"
              size={24}
              color={theme.colors.text.secondary}
            />
          </TouchableOpacity>
        ) : (
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
                onChangeText={handleSearchChange}
                placeholder="Tìm kiếm địa điểm..."
                placeholderTextColor={theme.colors.text.secondary}
                style={[styles.input, { color: theme.colors.text.primary }]}
                onSubmitEditing={() => {
                  onSearch(searchQuery);
                  setSearchQuery('');
                  setSuggestions([]);
                  toggleSearch();
                }}
              />
              {suggestions.length > 0 && (
                <SearchSuggestions
                  suggestions={suggestions}
                  onSelect={(suggestion) => {
                    onSearch(suggestion);
                    setSearchQuery('');
                    setSuggestions([]);
                    toggleSearch();
                  }}
                />
              )}
            </View>
          </View>
        )}
      </Animated.View>

      <Animated.View
        style={[
          styles.reloadButton,
          {
            backgroundColor: theme.colors.background.paper,
            top: reloadTop,
            ...theme.shadows.sm,
          },
        ]}
      >
        <TouchableOpacity
          onPress={onRefresh}
          disabled={isRefreshing}
          style={[
            styles.reloadButtonInner,
            { opacity: isRefreshing ? 0.7 : 1 },
          ]}
        >
          <Animated.View
            style={[styles.iconWrapper, { transform: [{ rotate: spin }] }]}
          >
            <Ionicons
              name="reload"
              size={22}
              color={theme.colors.primary.main}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>

      <RandomRecipeButton
        regions={regions}
        onRandomSelect={onRandomSelect}
        isAnimating={isAnimating}
        onAnimationStart={onAnimationStart}
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    height: 48,
    borderRadius: 24,
    overflow: 'visible',
    zIndex: 1000,
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
    position: 'relative',
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingVertical: 8,
  },
  reloadButton: {
    position: 'absolute',
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    zIndex: 1,
  },
  reloadButtonInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 1,
    paddingTop: 1,
  },
});
