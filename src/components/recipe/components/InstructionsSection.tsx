import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Instructions, Step } from '../../../types';
import { createStyles } from './InstructionsSection.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';
import { Checkbox } from '../../shared/Checkbox';
import { ProgressBar } from '../../shared/ProgressBar';

interface Props {
  instructions: Instructions;
  defaultExpanded?: boolean;
  showCheckbox?: boolean;
}

export const InstructionsSection = ({
  instructions,
  defaultExpanded = false,
  showCheckbox = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [checkedSteps, setCheckedSteps] = useState<Set<string>>(new Set());
  const [completionProgress, setCompletionProgress] = useState(0);

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

  const toggleStep = (stepKey: string) => {
    setCheckedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(stepKey)) {
        newSet.delete(stepKey);
      } else {
        newSet.add(stepKey);
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
      title: 'Nấu nước dùng/xốt',
      icon: 'water-outline',
      color: '#2196F3',
    },
    {
      key: 'sauce',
      title: 'Làm nước chấm/sốt',
      icon: 'beaker-outline',
      color: '#00BCD4',
    },
    {
      key: 'cooking',
      title: 'Nướng/Chiên/Xào',
      icon: 'flame-outline',
      color: '#F44336',
    },
    {
      key: 'steaming',
      title: 'Hấp/Luộc',
      icon: 'thermometer-outline',
      color: '#3F51B5',
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
      color: '#FF5722',
    },
    {
      key: 'assembly',
      title: 'Hoàn thiện món ăn',
      icon: 'construct-outline',
      color: '#607D8B',
    },
    {
      key: 'serving',
      title: 'Cách thưởng thức',
      icon: 'restaurant-outline',
      color: '#8BC34A',
    },
  ];

  const getTotalSteps = () => {
    return sections.reduce((total, section) => {
      const steps = instructions[section.key as keyof Instructions] || [];
      return total + steps.length;
    }, 0);
  };

  useEffect(() => {
    const totalSteps = getTotalSteps();
    const checkedCount = checkedSteps.size;
    const progress = (checkedCount / totalSteps) * 100;
    setCompletionProgress(progress);
  }, [checkedSteps, instructions]);

  const renderStep = (
    step: Step,
    index: number,
    color: string,
    key: string
  ) => (
    <View
      key={index}
      style={[
        styles.instructionItem,
        index === (typeof step === 'string' ? 0 : step.details.length - 1) && {
          borderBottomWidth: 0,
        },
      ]}
    >
      <View style={[styles.instructionNumber, { backgroundColor: color }]}>
        <Typography style={styles.instructionNumberText}>
          {index + 1}
        </Typography>
      </View>
      <View style={styles.instructionContent}>
        {typeof step === 'string' ? (
          <Typography style={styles.instructionText} variant="body2">
            {step}
          </Typography>
        ) : (
          <>
            <Typography variant="subtitle1" style={styles.stepTitle}>
              {step.title}
            </Typography>
            {step.details.map((detail, detailIndex) => (
              <Typography
                key={detailIndex}
                style={styles.instructionText}
                variant="body2"
              >
                • {detail}
              </Typography>
            ))}
          </>
        )}
      </View>
      {showCheckbox && (
        <Checkbox
          checked={checkedSteps.has(`${key}_${index}`)}
          onToggle={() => toggleStep(`${key}_${index}`)}
          size={22}
          color={color}
        />
      )}
    </View>
  );

  const renderTipsAndStorage = () => (
    <>
      {instructions.tips?.length > 0 && (
        <View style={styles.tipsContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.tipIconContainer}>
              <Ionicons
                name="bulb-outline"
                size={16}
                color={theme.colors.background.paper}
              />
            </View>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Mẹo và lưu ý quan trọng
            </Typography>
          </View>
          <View style={styles.tipsContent}>
            {instructions.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Typography style={styles.tipText} variant="body2">
                  {tip}
                </Typography>
              </View>
            ))}
          </View>
        </View>
      )}

      {instructions.storage?.length > 0 && (
        <View style={styles.storageContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.storageIconContainer}>
              <Ionicons
                name="file-tray-outline"
                size={16}
                color={theme.colors.background.paper}
              />
            </View>
            <Typography variant="subtitle1" style={styles.sectionTitle}>
              Cách bảo quản
            </Typography>
          </View>
          <View style={styles.tipsContent}>
            {instructions.storage.map((item, index) => (
              <View key={index} style={styles.tipItem}>
                <View style={styles.storageBullet} />
                <Typography style={styles.storageText} variant="body2">
                  {item}
                </Typography>
              </View>
            ))}
          </View>
        </View>
      )}
    </>
  );

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

      {showCheckbox && (
        <ProgressBar
          progress={completionProgress}
          color={theme.colors.primary.main}
          height={4}
          completed={checkedSteps.size}
          total={getTotalSteps()}
        />
      )}

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
                      {typeof step === 'string' ? (
                        <Typography
                          style={styles.instructionText}
                          variant="body2"
                        >
                          {step}
                        </Typography>
                      ) : (
                        <>
                          <Typography
                            variant="subtitle1"
                            style={styles.stepTitle}
                          >
                            {step.title}
                          </Typography>
                          {step.details.map((detail, detailIndex) => (
                            <Typography
                              key={detailIndex}
                              style={styles.instructionText}
                              variant="body2"
                            >
                              • {detail}
                            </Typography>
                          ))}
                        </>
                      )}
                    </View>
                    {showCheckbox && (
                      <Checkbox
                        checked={checkedSteps.has(`${key}_${index}`)}
                        onToggle={() => toggleStep(`${key}_${index}`)}
                        size={22}
                        color={color}
                      />
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        );
      })}

      {renderTipsAndStorage()}
    </View>
  );
};
