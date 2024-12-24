import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Recipe, Review } from '../../../types';
import { createStyles } from './RecipeReviews.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';
import { ReviewModal, ReviewsList } from '../../reviews';
import { ReviewService } from '../../../services/reviewService';
import { useAuth } from '../../../context/AuthContext';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { COLLECTIONS } from '../../../constants';

interface Props {
  recipe: Recipe;
}

const renderStars = (rating: number, size: number = 16, color: string) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Ionicons key={`full_${i}`} name="star" size={size} color={color} />
    );
  }

  // Render half star if needed
  if (hasHalfStar) {
    stars.push(
      <Ionicons key="half" name="star-half" size={size} color={color} />
    );
  }

  // Render empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Ionicons
        key={`empty_${i}`}
        name="star-outline"
        size={size}
        color={color}
      />
    );
  }

  return stars;
};

export const RecipeReviews = ({ recipe }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { user } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [stats, setStats] = useState({ averageRating: 0, totalReviews: 0 });
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [existingReview, setExistingReview] = useState<Review | null>(null);
  const [showReviewsList, setShowReviewsList] = useState(false);
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  useEffect(() => {
    setIsLoadingStats(true);

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
        setIsLoadingStats(false);
      },
      (error) => {
        console.error('Lỗi khi lắng nghe thay đổi stats:', error);
        setIsLoadingStats(false);
      }
    );

    return () => {
      unsubscribe();
      setIsLoadingStats(false);
    };
  }, [recipe.id]);

  useEffect(() => {
    if (user) {
      const loadUserReview = async () => {
        const review = await ReviewService.getUserReviewForRecipe(
          recipe.id,
          user.uid
        );
        setExistingReview(review);
      };
      loadUserReview();
    }
  }, [user, recipe.id]);

  const loadReviews = async () => {
    try {
      const reviewsList = await ReviewService.getRecipeReviews(recipe.id);
      setAllReviews(reviewsList);
      setShowReviewsList(true);
    } catch (error) {
      console.error('Lỗi khi tải đánh giá:', error);
    }
  };

  const handleReviewPress = () => {
    if (!user) {
      Alert.alert(
        'Yêu cầu đăng nhập',
        'Bạn cần đăng nhập để có thể đánh giá công thức này.',
        [
          {
            text: 'Đóng',
            style: 'cancel',
          },
        ]
      );
      return;
    }
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingHeader}>
          <View style={styles.ratingScore}>
            {!isLoadingStats && stats.totalReviews > 0 ? (
              <>
                <View>
                  <Typography variant="h2" style={styles.averageRating}>
                    {stats.averageRating.toFixed(1)}
                  </Typography>
                </View>

                <View style={styles.starsRow}>
                  {renderStars(stats.averageRating, 16, '#FFD700')}
                </View>
                <View>
                  <Typography
                    variant="caption"
                    color="secondary"
                    numberOfLines={1}
                  >
                    {stats.totalReviews} đánh giá
                  </Typography>
                </View>
              </>
            ) : isLoadingStats ? (
              <ActivityIndicator
                size="small"
                color={theme.colors.primary.main}
              />
            ) : (
              <View style={styles.noReviewsContainer}>
                <Ionicons
                  name="star-outline"
                  size={24}
                  color={theme.colors.text.secondary}
                />
                <Typography variant="body2" style={styles.noReviews}>
                  Chưa có đánh giá
                </Typography>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.addReviewButton,
              !user && styles.disabledReviewButton,
            ]}
            onPress={handleReviewPress}
          >
            <Ionicons
              name={existingReview ? 'create' : 'add'}
              size={20}
              color={theme.colors.primary.contrast}
            />
            <Typography
              variant="body1"
              style={{ color: theme.colors.primary.contrast }}
            >
              {existingReview ? 'Sửa đánh giá' : 'Đánh giá'}
            </Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.viewAllButton} onPress={loadReviews}>
          <Typography variant="body1" style={styles.viewAllText}>
            Xem tất cả {stats.totalReviews} đánh giá
          </Typography>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.colors.primary.main}
          />
        </TouchableOpacity>
      </View>

      {user && (
        <ReviewModal
          visible={modalVisible}
          recipeId={recipe.id}
          userId={user.uid}
          existingReview={existingReview}
          onClose={() => setModalVisible(false)}
          onSubmit={async () => {
            const recipeStats = await ReviewService.getRecipeStats(recipe.id);
            setStats(recipeStats);
            if (user) {
              const review = await ReviewService.getUserReviewForRecipe(
                recipe.id,
                user.uid
              );
              setExistingReview(review);
            }
            setModalVisible(false);
          }}
        />
      )}

      <Modal
        visible={showReviewsList}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowReviewsList(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { height: '60%' }]}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderBackground}>
                <Typography variant="h3" style={styles.modalTitle}>
                  Đánh giá
                </Typography>
                <TouchableOpacity
                  onPress={() => setShowReviewsList(false)}
                  style={styles.closeButton}
                >
                  <Ionicons
                    name="close"
                    size={24}
                    color={theme.colors.text.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={styles.modalBody}>
              <ReviewsList
                reviews={allReviews}
                recipeId={recipe.id}
                averageRating={stats.averageRating}
                totalReviews={stats.totalReviews}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};
