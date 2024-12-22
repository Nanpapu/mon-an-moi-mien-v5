import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Instructions } from '../../../types';
import { createStyles } from './InstructionsSection.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  instructions: Instructions;
  defaultExpanded?: boolean;
}

export const InstructionsSection = ({
  instructions,
  defaultExpanded = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (defaultExpanded) {
      const allSections = sections
        .filter(
          (section) =>
            (instructions[section.key as keyof Instructions] ?? []).length > 0
        )
        .map((section) => section.key);
      setExpandedSections(new Set(allSections));
    }
  }, [defaultExpanded, instructions]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const sections = [
    {
      key: 'preparation',
      title: 'Chuẩn bị nguyên liệu',
      icon: 'list-outline',
      color: '#4CAF50',
    },
    {
      key: 'processing',
      title: 'Sơ chế',
      icon: 'cut-outline',
      color: '#FF9800',
    },
    {
      key: 'marinating',
      title: 'Ướp gia vị',
      icon: 'flask-outline',
      color: '#9C27B0',
    },
    {
      key: 'broth',
      title: 'Nấu nước dùng',
      icon: 'water-outline',
      color: '#2196F3',
    },
    {
      key: 'sauce',
      title: 'Làm nước chấm',
      icon: 'color-fill-outline',
      color: '#F44336',
    },
    {
      key: 'cooking',
      title: 'Nấu chính',
      icon: 'flame-outline',
      color: '#E91E63',
    },
    {
      key: 'steaming',
      title: 'Hấp/Luộc',
      icon: 'thermometer-outline',
      color: '#00BCD4',
    },
    {
      key: 'filling',
      title: 'Làm nhân',
      icon: 'layers-outline',
      color: '#795548',
    },
    {
      key: 'dough',
      title: 'Làm vỏ/bột',
      icon: 'disc-outline',
      color: '#607D8B',
    },
    {
      key: 'assembly',
      title: 'Hoàn thiện',
      icon: 'construct-outline',
      color: '#3F51B5',
    },
    {
      key: 'serving',
      title: 'Cách dùng',
      icon: 'restaurant-outline',
      color: '#8BC34A',
    },
    {
      key: 'tips',
      title: 'Mẹo và lưu ý',
      icon: 'bulb-outline',
      color: '#FFC107',
    },
    {
      key: 'storage',
      title: 'Bảo quản',
      icon: 'file-tray-outline',
      color: '#9E9E9E',
    },
  ];

  return (
    <View style={styles.instructionsContainer}>
      <View style={styles.sectionTitle}>
        <Ionicons
          name="book-outline"
          size={20}
          color={theme.colors.primary.main}
          style={styles.sectionIcon}
        />
        <Typography variant="h3">Cách làm</Typography>
      </View>

      {sections.map(({ key, title, icon, color }) => {
        const steps = instructions[key as keyof Instructions] ?? [];
        if (!steps.length) return null;

        const isExpanded = expandedSections.has(key);

        return (
          <View
            key={key}
            style={[
              styles.instructionSection,
              { marginBottom: theme.spacing.sm },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.instructionSectionHeader,
                {
                  backgroundColor: isExpanded
                    ? color
                    : theme.colors.background.paper,
                },
              ]}
              onPress={() => toggleSection(key)}
            >
              <Ionicons
                name={icon as any}
                size={18}
                color={isExpanded ? theme.colors.background.paper : color}
                style={styles.instructionSectionIcon}
              />
              <Typography
                style={[
                  styles.instructionSectionTitle,
                  { color: isExpanded ? theme.colors.background.paper : color },
                ]}
              >
                {title}
              </Typography>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={18}
                color={isExpanded ? theme.colors.background.paper : color}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.instructionSteps}>
                {steps.map((step, index) => (
                  <View
                    key={index}
                    style={[
                      styles.instructionItem,
                      index === steps.length - 1 && { borderBottomWidth: 0 },
                    ]}
                  >
                    <View
                      style={[
                        styles.instructionNumber,
                        { backgroundColor: color },
                      ]}
                    >
                      <Typography style={styles.instructionNumberText}>
                        {index + 1}
                      </Typography>
                    </View>
                    <View style={styles.instructionContent}>
                      <Typography style={styles.instructionText}>
                        {step}
                      </Typography>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};
