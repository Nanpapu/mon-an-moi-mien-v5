import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Instructions } from '../../../types';
import { createStyles } from '../RecipeCard.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  instructions: Instructions;
}

// Component hiển thị phần hướng dẫn nấu ăn
export const InstructionsSection = ({ instructions }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // Định nghĩa các section theo thứ tự hiển thị
  const sections = [
    { key: 'preparation', title: 'Chuẩn bị nguyên liệu', icon: 'list-outline' },
    { key: 'processing', title: 'Sơ chế', icon: 'cut-outline' },
    { key: 'marinating', title: 'Ướp gia vị', icon: 'flask-outline' },
    { key: 'broth', title: 'Nấu nước dùng', icon: 'water-outline' },
    { key: 'sauce', title: 'Làm nước chấm', icon: 'color-fill-outline' },
    { key: 'cooking', title: 'Nấu chính', icon: 'flame-outline' },
    { key: 'steaming', title: 'Hấp/Luộc', icon: 'thermometer-outline' },
    { key: 'filling', title: 'Làm nhân', icon: 'layers-outline' },
    { key: 'dough', title: 'Làm vỏ/bột', icon: 'disc-outline' },
    { key: 'assembly', title: 'Hoàn thiện', icon: 'construct-outline' },
    { key: 'serving', title: 'Cách dùng', icon: 'restaurant-outline' },
    { key: 'tips', title: 'Mẹo và lưu ý', icon: 'bulb-outline' },
    { key: 'storage', title: 'Bảo quản', icon: 'file-tray-outline' },
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

      {sections.map(({ key, title, icon }) => {
        const steps = instructions[key as keyof Instructions];
        if (!steps?.length) return null;

        return (
          <View key={key} style={styles.instructionSection}>
            <View style={styles.instructionSectionHeader}>
              <Ionicons
                name={icon as any}
                size={18}
                color={theme.colors.primary.main}
                style={styles.instructionSectionIcon}
              />
              <Typography style={styles.instructionSectionTitle}>
                {title}
              </Typography>
            </View>
            {steps.map((step, index) => (
              <View key={index} style={styles.instructionItem}>
                <View style={styles.instructionNumber}>
                  <Typography style={styles.instructionNumberText}>
                    {index + 1}
                  </Typography>
                </View>
                <View style={styles.instructionContent}>
                  <Typography style={styles.instructionText}>{step}</Typography>
                </View>
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
};
