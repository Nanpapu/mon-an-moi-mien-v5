import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Typography } from '../../../components/shared';
import { Recipe } from '../../../types';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RecipeCard } from '../../../components/recipe';

interface Props {
  visible: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onDelete?: (recipe: Recipe) => void;
  onSave?: () => Promise<boolean>;
  showReviews?: boolean;
  isSaved?: boolean;
}

export const RecipeDetailModal = ({
  visible,
  recipe,
  onClose,
  onDelete,
  onSave,
  showReviews = true,
  isSaved = false,
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  if (!recipe) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
      style={{ zIndex: 999 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background.default,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.spacing.md,
            paddingTop: insets.top,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.divider,
            backgroundColor: theme.colors.background.paper,
            ...theme.shadows.sm,
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{
              padding: theme.spacing.sm,
              marginRight: theme.spacing.sm,
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.colors.text.primary}
            />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Typography variant="h2" style={{ fontSize: 20 }}>
              {recipe.name}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              style={{ marginTop: 2 }}
            >
              {recipe.region}
            </Typography>
          </View>
        </View>

        {/* Recipe Detail */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            padding: theme.spacing.md,
            paddingBottom: insets.bottom + theme.spacing.xl,
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.background.paper,
              borderRadius: theme.spacing.md,
              ...theme.shadows.sm,
            }}
          >
            <RecipeCard
              recipe={recipe}
              onSave={onSave}
              onDelete={onDelete ? () => onDelete(recipe) : undefined}
              showActions={true}
              showReviews={showReviews}
              mode="detailed"
              isSaved={isSaved}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
