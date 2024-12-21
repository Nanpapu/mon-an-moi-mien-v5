import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
  TextInput,
} from 'react-native';
import { RandomRecipeButton } from './RandomRecipeButton';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Region } from '../../../types';
import { SearchBar } from './SearchBar';

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

  const expandedWidth = Platform.OS === 'ios' ? 358 : 328;

  const toggleSearch = () => {
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

  const handleSubmit = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
      toggleSearch();
    }
  };

  React.useEffect(() => {
    if (isRefreshing) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [isRefreshing]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <SearchBar onSearch={onSearch} />

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
