import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

interface QuickFilterProps {
  label: string; // Label của filter
  options: string[]; // Các option có thể chọn
  selectedOption: string | null; // Option đang được chọn
  onSelectOption: (option: string | null) => void; // Callback khi chọn option
  showToggle?: boolean; // Có hiển thị nút toggle không (như nút favorite)
  toggleState?: boolean; // State của nút toggle
  onToggle?: () => void; // Callback khi bấm toggle
  toggleIcon?: {
    active: keyof typeof Ionicons.glyphMap; // Update type here
    inactive: keyof typeof Ionicons.glyphMap; // Update type here
  };
}

export const QuickFilter = ({
  label,
  options,
  selectedOption,
  onSelectOption,
  showToggle = false,
  toggleState = false,
  onToggle,
  toggleIcon = {
    active: 'heart',
    inactive: 'heart-outline',
  },
}: QuickFilterProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.mainContainer}>
      {/* Toggle button (optional) */}
      {showToggle && (
        <TouchableOpacity
          style={[
            styles.filterButton,
            styles.toggleFilter,
            toggleState && styles.selectedToggleButton,
          ]}
          onPress={onToggle}
        >
          <View style={styles.toggleIconContainer}>
            <Ionicons
              name={toggleState ? toggleIcon.active : toggleIcon.inactive}
              size={24}
              color={
                toggleState
                  ? theme.colors.primary.contrast
                  : theme.colors.error.main
              }
            />
          </View>
        </TouchableOpacity>
      )}

      {/* Options ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* "Tất cả" option */}
        <TouchableOpacity
          style={[
            styles.filterButton,
            !selectedOption && styles.selectedButton,
          ]}
          onPress={() => onSelectOption(null)}
        >
          <Typography
            variant="body1"
            style={[styles.buttonText, !selectedOption && styles.selectedText]}
          >
            Tất cả
          </Typography>
        </TouchableOpacity>

        {/* Filter options */}
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterButton,
              selectedOption === option && styles.selectedButton,
            ]}
            onPress={() => onSelectOption(option)}
          >
            <Typography
              variant="body1"
              style={[
                styles.buttonText,
                selectedOption === option && styles.selectedText,
              ]}
            >
              {option}
            </Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Giữ nguyên styles từ RegionFilter nhưng đổi tên một số class cho phù hợp
const createStyles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 44,
    },
    scrollContainer: {
      flexDirection: 'row',
      paddingLeft: 0,
      gap: theme.spacing.sm,
      alignItems: 'center',
      height: 44,
    },
    filterButton: {
      height: 44,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
      borderWidth: 1.5,
      borderColor: theme.colors.divider,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 2,
    },
    selectedButton: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
      borderWidth: 1.5,
    },
    buttonText: {
      color: theme.colors.text.primary,
    },
    selectedText: {
      color: theme.colors.primary.contrast,
    },
    toggleFilter: {
      borderColor: theme.colors.error.main,
      borderWidth: 2,
      width: 44,
      height: 44,
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing.sm,
    },
    toggleIconContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedToggleButton: {
      backgroundColor: theme.colors.error.main,
      borderColor: theme.colors.error.main,
    },
  });
