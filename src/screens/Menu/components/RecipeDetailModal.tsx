import React, { useEffect, useState } from 'react';
import { View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Typography } from '../../../components/shared';
import { Recipe } from '../../../types';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RecipeCard } from '../../../components/recipe';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { COLLECTIONS } from '../../../constants';
import { RecipeDetail } from '../../../components/recipe/components/RecipeDetail';

interface Props {
  visible: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onDelete?: (recipe: Recipe) => void;
  onSave?: () => Promise<boolean>;
  showReviews?: boolean;
}

export const RecipeDetailModal = ({
  visible,
  recipe,
  onClose,
  onDelete,
  onSave,
  showReviews = true,
}: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  // Lắng nghe thay đổi realtime từ Firebase
  useEffect(() => {
    if (!recipe?.id || !visible) return;

    const unsubscribe = onSnapshot(
      doc(db, COLLECTIONS.RECIPES, recipe.id),
      (doc) => {
        if (doc.exists()) {
          setCurrentRecipe({ ...recipe, ...doc.data() });
        }
      }
    );

    return () => {
      unsubscribe();
      if (!visible) {
        setCurrentRecipe(null); // Reset state khi đóng modal
      }
    };
  }, [recipe?.id, visible]);

  // Cập nhật currentRecipe khi recipe prop thay đổi
  useEffect(() => {
    if (recipe && visible) {
      setCurrentRecipe(recipe);
    }
  }, [recipe, visible]);

  if (!currentRecipe) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View
        style={{ flex: 1, backgroundColor: theme.colors.background.default }}
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

          <Typography variant="h2" style={{ fontSize: 20 }}>
            {currentRecipe.name}
          </Typography>
        </View>

        {/* Content */}
        <RecipeDetail
          recipe={currentRecipe}
          onClose={onClose}
          onSave={onSave}
          onDelete={onDelete}
          showActions={true}
          showReviews={showReviews}
          defaultExpandedInstructions={true}
        />
      </View>
    </Modal>
  );
};
