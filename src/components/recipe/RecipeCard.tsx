import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Recipe } from '../../types';
import { createStyles } from './RecipeCard.styles';
import { useTheme } from '../../theme/ThemeContext';
import { ImageViewerModal } from '../shared';
import { ImageCacheService } from '../../services/imageCacheService';
import {
  InstructionsSection,
  RecipeHeader,
  RecipeMeta,
  RecipeIngredients,
  RecipeActions,
  RecipeReviews,
} from './components';

interface Props {
  recipe: Recipe;
  onSave?: () => Promise<boolean>;
  onDelete?: (recipe: Recipe) => void;
  showActions?: boolean;
  showReviews?: boolean;
}

export function RecipeCard({
  recipe,
  onSave,
  onDelete,
  showActions = false,
  showReviews = false,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [showDetails, setShowDetails] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showImageViewer, setShowImageViewer] = useState(false);

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
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          console.log('Image pressed');
          setShowImageViewer(true);
        }}
      >
        <Image
          source={imageUrl || require('../../../assets/default-avatar.png')}
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

      <View style={styles.content}>
        <RecipeHeader
          recipe={recipe}
          showDetails={showDetails}
          onToggleDetails={() => setShowDetails(!showDetails)}
        />

        <RecipeMeta recipe={recipe} />

        {showDetails && (
          <View style={styles.details}>
            <RecipeIngredients ingredients={recipe.ingredients} />
            <InstructionsSection instructions={recipe.instructions} />
          </View>
        )}

        {showActions && (
          <RecipeActions recipe={recipe} onSave={onSave} onDelete={onDelete} />
        )}

        {showReviews && <RecipeReviews recipe={recipe} />}
      </View>
    </View>
  );
}
