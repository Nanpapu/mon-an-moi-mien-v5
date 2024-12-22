import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Recipe } from '../../../types';
import { createStyles } from './RecipeDetail.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { ImageViewerModal } from '../../shared';
import { ImageCacheService } from '../../../services/imageCacheService';
import {
  RecipeHeader,
  RecipeMeta,
  RecipeIngredients,
  InstructionsSection,
  RecipeActions,
  RecipeReviews,
} from './';

interface Props {
  recipe: Recipe;
  onClose: () => void;
  onSave?: () => Promise<boolean>;
  onDelete?: (recipe: Recipe) => void;
  showActions?: boolean;
  showReviews?: boolean;
  defaultExpandedInstructions?: boolean;
}

export const RecipeDetail = ({
  recipe,
  onClose,
  onSave,
  onDelete,
  showActions = true,
  showReviews = true,
  defaultExpandedInstructions = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showImageViewer, setShowImageViewer] = useState(false);

  // Load và cache ảnh
  useEffect(() => {
    const loadImage = async () => {
      if (recipe.image) {
        const url = await ImageCacheService.getImageUrl(recipe.image);
        setImageUrl(url);
      }
    };
    loadImage();
  }, [recipe.image]);

  return (
    <ScrollView style={styles.detailContainer}>
      {/* Phần hình ảnh */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setShowImageViewer(true)}
      >
        <Image
          source={imageUrl || require('../../../../assets/default-avatar.png')}
          style={styles.image}
          contentFit="cover"
          transition={200}
          cachePolicy="memory-disk"
        />
      </TouchableOpacity>

      <ImageViewerModal
        visible={showImageViewer}
        imageUrl={imageUrl}
        onClose={() => setShowImageViewer(false)}
      />

      <View style={styles.detailContent}>
        {/* Thông tin cơ bản */}
        <RecipeMeta recipe={recipe} />

        {/* Phần nguyên liệu */}
        <View style={styles.detailSection}>
          <RecipeIngredients ingredients={recipe.ingredients} />
        </View>

        {/* Phần hướng dẫn */}
        <View style={styles.detailSection}>
          <InstructionsSection
            instructions={recipe.instructions}
            defaultExpanded={defaultExpandedInstructions}
          />
        </View>

        {/* Phần đánh giá */}
        {showReviews && (
          <View style={styles.detailSection}>
            <RecipeReviews recipe={recipe} />
          </View>
        )}

        {/* Các action */}
        {showActions && (
          <View style={styles.detailActions}>
            <RecipeActions
              recipe={recipe}
              onSave={onSave}
              onDelete={onDelete}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
