import React, { useEffect, useState, memo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Typography } from '../../../components/shared';
import { Recipe } from '../../../types';
import { useTheme } from '../../../theme/ThemeContext';
import { ZOOM_LEVELS } from '../hooks/useGridZoom';
import { Ionicons } from '@expo/vector-icons';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { COLLECTIONS } from '../../../constants';
import { FavoriteButton } from '../../../components/buttons';
import { ImageUtils } from '../../../utils/imageUtils';
import { ImageCacheService } from '../../../services/imageCacheService';
import { useAdaptiveText } from '../hooks/useAdaptiveText';

interface Props {
  recipe: Recipe;
  onPress: () => void;
  width: number;
  config: (typeof ZOOM_LEVELS)[keyof typeof ZOOM_LEVELS];
  onFavoriteChange?: () => void;
  isSelectionMode?: boolean;
  isSelected?: boolean;
  onLongPress?: (recipeId: string) => void;
  onToggleSelect?: () => void;
  visible?: boolean;
  isCooking?: boolean;
}

interface FavoriteButtonStyleProps {
  size: number;
  iconSize: number;
  position: {
    top: number;
    right: number;
  };
}

export const RecipeGridItem = memo(
  ({
    recipe,
    onPress,
    width,
    config,
    onFavoriteChange,
    isSelectionMode = false,
    isSelected = false,
    onLongPress,
    onToggleSelect,
    visible = true,
    isCooking,
  }: Props) => {
    const { theme } = useTheme();
    const styles = createStyles(theme, width, config);
    const [stats, setStats] = useState({ averageRating: 0, totalReviews: 0 });
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const { fontSize, onTextLayout } = useAdaptiveText({
      text: recipe.name,
      maxLines: config.maxLines || 2,
      baseFontSize: config.baseFontSize || 13,
      minFontSize: config.minFontSize || 11,
    });

    useEffect(() => {
      const unsubscribe = onSnapshot(
        doc(db, COLLECTIONS.RECIPE_STATS, recipe.id),
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            setStats({
              averageRating: data.averageRating || 0,
              totalReviews: data.totalReviews || 0,
            });
          }
        }
      );
      return () => unsubscribe();
    }, [recipe.id]);

    useEffect(() => {
      const loadImage = async () => {
        if (recipe.image) {
          const cachedImage = await ImageCacheService.getCachedImage(recipe.id);
          if (cachedImage) {
            setImageUrl(cachedImage);
            return;
          }

          const url = await ImageUtils.getRecipeImageUrl(recipe.image);
          if (url) {
            const cachedUrl = await ImageCacheService.cacheImage(
              url,
              recipe.id
            );
            setImageUrl(cachedUrl);
          }
        }
      };
      loadImage();
    }, [recipe.image]);

    const handlePress = () => {
      if (isSelectionMode) {
        onToggleSelect?.();
      } else {
        onPress();
      }
    };

    const getFavoriteButtonStyle = (): FavoriteButtonStyleProps => {
      if (config.columns === 4) {
        return {
          size: 28,
          iconSize: 14,
          position: {
            top: 4,
            right: 4,
          },
        };
      }
      if (config.columns === 3) {
        return {
          size: 32,
          iconSize: 16,
          position: {
            top: 6,
            right: 6,
          },
        };
      }
      return {
        size: 36,
        iconSize: 20,
        position: {
          top: 8,
          right: 8,
        },
      };
    };

    const favoriteButtonStyle = getFavoriteButtonStyle();

    return (
      <TouchableOpacity
        style={[styles.container, { width }, !visible && { display: 'none' }]}
        onPress={handlePress}
        onLongPress={() => onLongPress?.(recipe.id)}
        activeOpacity={0.7}
        delayLongPress={300}
      >
        {isSelectionMode && (
          <View style={styles.checkboxContainer}>
            <Ionicons
              name={isSelected ? 'checkbox' : 'square-outline'}
              size={24}
              color={
                isSelected
                  ? theme.colors.primary.main
                  : theme.colors.text.secondary
              }
            />
          </View>
        )}

        <View
          style={[
            styles.favoriteButtonContainer,
            {
              top: favoriteButtonStyle.position.top,
              right: favoriteButtonStyle.position.right,
              width: favoriteButtonStyle.size,
              height: favoriteButtonStyle.size,
            },
          ]}
        >
          <FavoriteButton
            recipe={recipe}
            onToggle={onFavoriteChange}
            iconSize={favoriteButtonStyle.iconSize}
          />
        </View>

        <Image
          source={imageUrl || require('../../../../assets/default-avatar.png')}
          style={[styles.image, { width, height: width }]}
          contentFit="cover"
          transition={200}
        />
        {config.showTitle && (
          <View style={styles.infoContainer}>
            <View
              style={[
                styles.nameContainer,
                { minHeight: config.minTitleHeight },
              ]}
            >
              <Typography
                variant="caption"
                numberOfLines={config.titleLines}
                style={{
                  fontSize: config.titleFontSize || 12,
                  marginTop: 4,
                  textAlign: 'center',
                  height: config.minTitleHeight,
                }}
              >
                {recipe.name}
              </Typography>
            </View>

            {config.showRating && (
              <>
                <View style={styles.divider} />
                <View
                  style={[
                    styles.ratingContainer,
                    { minHeight: config.minRatingHeight },
                  ]}
                >
                  {stats.totalReviews > 0 ? (
                    <View style={styles.ratingContainer}>
                      <View style={styles.starsContainer}>
                        {(() => {
                          const fullStars = Math.floor(stats.averageRating);
                          const hasHalfStar = stats.averageRating % 1 >= 0.5;
                          const emptyStars =
                            5 - fullStars - (hasHalfStar ? 1 : 0);

                          return (
                            <>
                              {[...Array(fullStars)].map((_, index) => (
                                <Ionicons
                                  key={`full-${index}`}
                                  name="star"
                                  size={12}
                                  color={theme.colors.warning.main}
                                  style={{ marginRight: 2 }}
                                />
                              ))}

                              {hasHalfStar && (
                                <Ionicons
                                  key="half"
                                  name="star-half"
                                  size={12}
                                  color={theme.colors.warning.main}
                                  style={{ marginRight: 2 }}
                                />
                              )}

                              {[...Array(emptyStars)].map((_, index) => (
                                <Ionicons
                                  key={`empty-${index}`}
                                  name="star-outline"
                                  size={12}
                                  color={theme.colors.warning.main}
                                  style={{ marginRight: 2 }}
                                />
                              ))}
                            </>
                          );
                        })()}
                        <Typography
                          variant="caption"
                          style={styles.reviewCount}
                        >
                          ({stats.totalReviews})
                        </Typography>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.noReviewsContainer}>
                      <Ionicons
                        name="star-outline"
                        size={12}
                        color={theme.colors.text.secondary}
                      />
                      <Typography variant="caption" style={styles.noReviews}>
                        Chưa có đánh giá
                      </Typography>
                    </View>
                  )}
                </View>
              </>
            )}
          </View>
        )}
        {isCooking && (
          <View style={[styles.statusBadge, styles.cookingBadge]}>
            <Ionicons name="flame" size={12} color="#FFFFFF" />
            <Typography style={styles.badgeText}>Đang nấu</Typography>
          </View>
        )}
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.recipe.id === nextProps.recipe.id &&
      prevProps.width === nextProps.width &&
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.visible === nextProps.visible
    );
  }
);

const createStyles = (
  theme: any,
  width: number,
  config: (typeof ZOOM_LEVELS)[keyof typeof ZOOM_LEVELS]
) =>
  StyleSheet.create({
    container: {
      width: width,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      overflow: 'hidden',
      ...theme.shadows.sm,
      margin: config.spacing / 2,
      transform: [{ scale: 1 }],
    },
    containerSelected: {
      transform: [{ scale: 0.95 }],
      opacity: 0.8,
    },
    image: {
      width: '100%',
      height: width,
      backgroundColor: theme.colors.background.default,
    },
    infoContainer: {
      padding: theme.spacing.xs,
    },
    nameContainer: {
      minHeight: config.minTitleHeight,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.xs,
    },
    name: {
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 13,
      lineHeight: 18,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.divider,
      marginVertical: theme.spacing.xxs,
    },
    ratingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: config.minRatingHeight,
      gap: theme.spacing.xxs,
      paddingBottom: theme.spacing.xs,
    },
    starsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewCount: {
      color: theme.colors.text.secondary,
      fontSize: 12,
      marginLeft: theme.spacing.xs,
    },
    noReviewsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.xxs,
    },
    noReviews: {
      color: theme.colors.text.secondary,
      fontSize: 10,
    },
    checkboxContainer: {
      position: 'absolute',
      top: theme.spacing.sm,
      left: theme.spacing.sm,
      zIndex: 1,
      backgroundColor: theme.colors.background.paper,
      borderRadius: 20,
      padding: 4,
      ...theme.shadows.sm,
    },
    favoriteButtonContainer: {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: theme.colors.background.paper,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.shadows.sm,
    },
    statusBadge: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: '#FFA500',
      borderRadius: 10,
      padding: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    },
    cookingBadge: {
      backgroundColor: '#FF4500',
    },
    badgeText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: 'bold',
    },
  });
