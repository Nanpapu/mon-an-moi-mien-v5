import React, { useMemo, useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Ingredient, IngredientType } from '../../../types';
import { createStyles } from './RecipeIngredients.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';
import { Checkbox } from '../../shared/Checkbox';
import { ProgressBar } from '../../shared/ProgressBar';

interface Props {
  ingredients: Ingredient[];
  onIngredientPress?: (ingredient: Ingredient) => void;
  showCheckbox?: boolean;
}

interface IngredientGroupConfig {
  title: string;
  icon: string;
  color: string;
  types: IngredientType[];
}

const INGREDIENT_GROUPS: IngredientGroupConfig[] = [
  {
    title: 'Thịt & Hải sản',
    icon: 'nutrition-outline',
    color: 'error.main',
    types: [
      'meat/pork',
      'meat/beef',
      'meat/chicken',
      'meat/duck',
      'meat/processed',
      'seafood/fish',
      'seafood/shrimp',
      'seafood/crab',
      'seafood/squid',
      'seafood/shellfish',
      'seafood/dried',
    ],
  },
  {
    title: 'Rau củ quả',
    icon: 'leaf-outline',
    color: 'success.main',
    types: [
      'vegetable/leafy',
      'vegetable/root',
      'vegetable/mushroom',
      'vegetable/fruit',
      'vegetable/sprout',
    ],
  },
  {
    title: 'Ngũ cốc & Tinh bột',
    icon: 'basket-outline',
    color: 'primary.main',
    types: ['grain/rice', 'grain/noodle', 'grain/flour'],
  },
  {
    title: 'Gia vị & Nước chấm',
    icon: 'flask-outline',
    color: 'warning.main',
    types: ['spice/fresh', 'spice/dried', 'spice/sauce', 'spice/powder'],
  },
  {
    title: 'Nguyên liệu khác',
    icon: 'apps-outline',
    color: 'text.secondary',
    types: ['other/egg', 'other/tofu', 'other/dried', 'other'],
  },
];

export const RecipeIngredients = ({
  ingredients,
  onIngredientPress,
  showCheckbox = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(
    new Set()
  );
  const [completionProgress, setCompletionProgress] = useState(0);

  // Thêm helper function
  const getThemeColor = (path: string): string => {
    const parts = path.split('.');
    const color = parts.reduce((obj: any, key) => obj?.[key], theme.colors);
    return typeof color === 'string' ? color : '';
  };

  // Nhóm nguyên liệu theo loại
  const groupedIngredients = useMemo(() => {
    // Bước 1: Tạo object chứa các nhóm
    const groups = ingredients.reduce(
      (groups, ingredient) => {
        const type = ingredient.type || 'other';
        const group = INGREDIENT_GROUPS.find((g) => g.types.includes(type));
        if (group) {
          if (!groups[group.title]) {
            groups[group.title] = {
              items: [],
              config: group,
              order: INGREDIENT_GROUPS.findIndex(
                (g) => g.title === group.title
              ), // Thêm order để sắp xếp
            };
          }
          groups[group.title].items.push(ingredient);
        }
        return groups;
      },
      {} as Record<
        string,
        {
          items: Ingredient[];
          config: IngredientGroupConfig;
          order: number;
        }
      >
    );

    // Bước 2: Chuyển object thành mảng và sắp xếp theo order
    return Object.entries(groups)
      .sort((a, b) => a[1].order - b[1].order)
      .reduce(
        (sorted, [title, data]) => {
          sorted[title] = {
            items: data.items,
            config: data.config,
          };
          return sorted;
        },
        {} as Record<
          string,
          { items: Ingredient[]; config: IngredientGroupConfig }
        >
      );
  }, [ingredients]);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const toggleIngredient = (ingredientKey: string) => {
    setCheckedIngredients((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(ingredientKey)) {
        newSet.delete(ingredientKey);
      } else {
        newSet.add(ingredientKey);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const totalIngredients = ingredients.length;
    const checkedCount = checkedIngredients.size;
    const progress = (checkedCount / totalIngredients) * 100;
    setCompletionProgress(progress);
  }, [checkedIngredients, ingredients]);

  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.header}>
        <Ionicons
          name="restaurant-outline"
          size={20}
          color={theme.colors.primary.main}
          style={styles.sectionIcon}
        />
        <Typography variant="h3">Nguyên liệu ({ingredients.length})</Typography>
      </View>
      {showCheckbox && (
        <ProgressBar
          progress={completionProgress}
          color={theme.colors.success.main}
          height={4}
          completed={checkedIngredients.size}
          total={ingredients.length}
        />
      )}

      {/* Danh sách nguyên liệu theo nhóm */}
      {Object.entries(groupedIngredients).map(([title, { items, config }]) => {
        const isExpanded = expandedGroups.has(title);
        return (
          <View key={title} style={styles.groupContainer}>
            <TouchableOpacity
              style={[
                styles.groupHeader,
                { backgroundColor: getThemeColor(config.color) },
              ]}
              onPress={() => toggleGroup(title)}
            >
              <Ionicons
                name={config.icon as any}
                size={18}
                color={theme.colors.background.paper}
                style={styles.groupIcon}
              />
              <Typography
                style={[
                  styles.groupTitle,
                  { color: theme.colors.background.paper },
                ]}
              >
                {title} ({items.length})
              </Typography>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={18}
                color={theme.colors.background.paper}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
            {isExpanded && (
              <View style={styles.ingredientsList}>
                {items.map((ingredient, index) => (
                  <View
                    key={`${ingredient.name}_${ingredient.amount}_${ingredient.unit}_${index}`}
                    style={[
                      styles.ingredientItem,
                      index === items.length - 1 && { borderBottomWidth: 0 },
                    ]}
                  >
                    <View
                      style={[
                        styles.ingredientNumber,
                        { backgroundColor: getThemeColor(config.color) },
                      ]}
                    >
                      <Typography style={styles.ingredientNumberText}>
                        {index + 1}
                      </Typography>
                    </View>
                    <View style={styles.ingredientContent}>
                      <Typography style={styles.ingredientName}>
                        {ingredient.name}
                      </Typography>
                      <Typography style={styles.ingredientDetails}>
                        {`${ingredient.amount} ${ingredient.unit}`}
                        {ingredient.note && ` (${ingredient.note})`}
                      </Typography>
                    </View>
                    {showCheckbox && (
                      <Checkbox
                        checked={checkedIngredients.has(
                          `${ingredient.name}_${ingredient.amount}_${ingredient.unit}`
                        )}
                        onToggle={() =>
                          toggleIngredient(
                            `${ingredient.name}_${ingredient.amount}_${ingredient.unit}`
                          )
                        }
                        size={22}
                        color={getThemeColor(config.color)}
                      />
                    )}
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
