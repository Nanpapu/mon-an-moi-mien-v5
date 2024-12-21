// Component hiển thị thông tin chi tiết của một công thức nấu ăn
// Bao gồm hình ảnh, tên món, vùng miền, nguyên liệu và cách làm
import React, { useEffect, useState } from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import { Recipe, Review, Instructions } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { ReviewService } from '../../services/reviewService';
import { Ionicons } from '@expo/vector-icons';
import { ReviewModal, ReviewsList } from '../reviews';
import { createStyles } from './RecipeCard.styles';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from '../shared';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { COLLECTIONS } from '../../constants';
import { ImageUtils } from '../../utils/imageUtils';
import { ImageCacheService } from '../../services/imageCacheService';
import { formatInstructions } from '../../utils/formatInstructions';

// Props interface cho RecipeCard
interface Props {
  recipe: Recipe;
  onSave?: () => Promise<boolean>;
  onDelete?: (recipe: Recipe) => void;
  showActions?: boolean;
  showReviews?: boolean;
}

// Thêm component InstructionsSection mới
const InstructionsSection = ({
  instructions,
}: {
  instructions: Instructions;
}) => {
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

  // Lọc ra các section có dữ liệu và đánh số lại
  const availableSections = sections.filter(({ key }) => {
    const steps = instructions?.[key as keyof Instructions];
    return Array.isArray(steps) && steps.length > 0;
  });

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
        // Kiểm tra steps tồn tại và có phần tử
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

// RecipeCard component
export function RecipeCard({
  recipe,
  onSave,
  onDelete,
  showActions = false,
  showReviews = false,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { user } = useAuth();

  // State quản lý trạng thái modal
  const [modalVisible, setModalVisible] = useState(false);

  // State quản lý trạng thái thống kê đánh giá
  const [stats, setStats] = useState({ averageRating: 0, totalReviews: 0 });
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // State quản lý trạng thái đánh giá hiện tại
  const [existingReview, setExistingReview] = useState<any>(null);

  // State quản lý trạng thái hiển thị danh sách đánh giá
  const [showReviewsList, setShowReviewsList] = useState(false);

  // State quản lý trạng thái hiển thị chi tiết công thức
  const [showDetails, setShowDetails] = useState(false);

  // State quản lý danh sách đánh giá
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  // State quản lý URL hình ảnh
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // State quản lý trạng thái lưu công thức
  const [isSaving, setIsSaving] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [wasSaved, setWasSaved] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Effect hook để tải hình ảnh từ Firebase Storage
  useEffect(() => {
    const loadImage = async () => {
      if (recipe.image) {
        const url = await ImageCacheService.getImageUrl(recipe.image);
        setImageUrl(url);
      }
    };
    loadImage();
  }, [recipe.image]);

  // Effect hook để tải thống kê đánh giá
  useEffect(() => {
    if (showReviews) {
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

      // Cleanup subscription
      return () => {
        unsubscribe();
        setIsLoadingStats(false);
      };
    }
  }, [showReviews, recipe.id]);

  // Effect hook để tải đánh giá của người dùng
  useEffect(() => {
    if (user && showReviews) {
      const loadUserReview = async () => {
        const review = await ReviewService.getUserReviewForRecipe(
          recipe.id,
          user.uid
        );
        setExistingReview(review);
      };
      loadUserReview();
    }
  }, [user, showReviews]);

  // const loadReviewStats = async () => {
  //   setIsLoadingStats(true);
  //   try {
  //     const recipeStats = await ReviewService.getRecipeStats(recipe.id);
  //     setStats(recipeStats);
  //   } catch (error) {
  //     console.error("Lỗi khi tải thống kê đánh giá:", error);
  //   } finally {
  //     setIsLoadingStats(false);
  //   }
  // };

  // Hàm để tải danh sách đánh giá
  const loadReviews = async () => {
    try {
      const reviewsList = await ReviewService.getRecipeReviews(recipe.id);
      setAllReviews(reviewsList);
    } catch (error) {
      console.error('Lỗi khi tải đánh giá:', error);
    }
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.background.paper,
          borderColor: theme.colors.border,
          ...theme.shadows.sm,
        },
      ]}
    >
      <Image
        source={imageUrl || require('../../../assets/default-avatar.png')}
        style={[styles.image, { borderColor: theme.colors.border }]}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Typography variant="h3" style={styles.name}>
              {recipe.name}
            </Typography>
            <Typography variant="body2" style={styles.region}>
              {recipe.region}
            </Typography>
          </View>

          <TouchableOpacity
            style={[
              styles.expandButton,
              showDetails && styles.expandButtonRotate,
            ]}
            onPress={() => setShowDetails(!showDetails)}
          >
            <Ionicons
              name="chevron-up"
              size={24}
              color={theme.colors.text.primary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.recipeMetaContainer}>
          <View style={styles.metaItem}>
            <View style={styles.metaIcon}>
              <Ionicons
                name="time-outline"
                size={16}
                color={theme.colors.text.secondary}
              />
            </View>
            <Typography style={styles.metaLabel}>Thời gian</Typography>
            <Typography style={styles.metaValue}>
              {recipe.cookingTime ? `${recipe.cookingTime} phút` : 'N/A'}
            </Typography>
          </View>

          <View style={styles.metaDivider} />

          <View style={styles.metaItem}>
            <View style={styles.metaIcon}>
              <Ionicons
                name="bar-chart-outline"
                size={16}
                color={theme.colors.text.secondary}
              />
            </View>
            <Typography style={styles.metaLabel}>Độ khó</Typography>
            <Typography style={styles.metaValue}>
              {recipe.difficulty ? `${recipe.difficulty}/5` : 'N/A'}
            </Typography>
          </View>

          <View style={styles.metaDivider} />

          <View style={styles.metaItem}>
            <View style={styles.metaIcon}>
              <Ionicons
                name="people-outline"
                size={16}
                color={theme.colors.text.secondary}
              />
            </View>
            <Typography style={styles.metaLabel}>Khẩu phần</Typography>
            <Typography style={styles.metaValue}>
              {recipe.servings ? `${recipe.servings} người` : 'N/A'}
            </Typography>
          </View>
        </View>

        {showDetails && (
          <View style={styles.details}>
            <View style={styles.ingredientsContainer}>
              <View style={styles.sectionTitle}>
                <Ionicons
                  name="restaurant-outline"
                  size={20}
                  color={theme.colors.primary.main}
                  style={styles.sectionIcon}
                />
                <Typography variant="h3">Nguyên liệu</Typography>
              </View>
              <View style={styles.ingredientsList}>
                {recipe.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <View style={styles.ingredientNumber}>
                      <Typography style={styles.ingredientNumberText}>
                        {index + 1}
                      </Typography>
                    </View>
                    <Typography style={styles.ingredientText}>
                      {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                      {ingredient.note && ` (${ingredient.note})`}
                    </Typography>
                  </View>
                ))}
              </View>
            </View>

            <InstructionsSection instructions={recipe.instructions} />
          </View>
        )}

        {showActions && (
          <View style={styles.actions}>
            {onSave && (
              <TouchableOpacity
                style={[
                  styles.saveButton,
                  isSaving && styles.savingButton,
                  justSaved && styles.savedButton,
                  wasSaved && styles.wasSavedButton,
                ]}
                onPress={async () => {
                  if (isSaving) return;

                  setIsSaving(true);
                  if (onSave) {
                    const success = await onSave();
                    if (success) {
                      // Công thức mới được lưu - chỉ hiện "Đã lưu!"
                      setJustSaved(true);
                      setTimeout(() => {
                        setJustSaved(false);
                      }, 2000);
                    } else {
                      // Công thức đã lưu trước đó
                      setWasSaved(true);
                      setTimeout(() => {
                        setWasSaved(false);
                      }, 2000);
                    }
                  }
                  setIsSaving(false);
                }}
                disabled={isSaving}
              >
                <Ionicons
                  name={
                    isSaving
                      ? 'hourglass-outline'
                      : justSaved
                        ? 'checkmark-circle'
                        : wasSaved
                          ? 'bookmark'
                          : 'bookmark-outline'
                  }
                  size={20}
                  color={theme.colors.background.default}
                  style={{ marginRight: 8 }}
                />
                <Typography
                  variant="body1"
                  style={{
                    color: theme.colors.background.default,
                    fontWeight: justSaved ? 'bold' : 'normal',
                  }}
                >
                  {isSaving
                    ? 'Đang lưu...'
                    : justSaved
                      ? 'Đã lưu!'
                      : wasSaved
                        ? 'Đã lưu trước đó'
                        : 'Lưu công thức'}
                </Typography>
                {isSaving && (
                  <ActivityIndicator
                    size="small"
                    color={theme.colors.background.default}
                    style={{ marginLeft: 8 }}
                  />
                )}
              </TouchableOpacity>
            )}
            {onDelete && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  if (onDelete) {
                    onDelete(recipe);
                  }
                }}
              >
                <Ionicons
                  name="trash-outline"
                  size={20}
                  color={theme.colors.background.default}
                />
                <Typography
                  variant="body1"
                  style={{ color: theme.colors.background.default }}
                >
                  Xóa công thức
                </Typography>
              </TouchableOpacity>
            )}
          </View>
        )}

        {showReviews && (
          <View style={styles.ratingContainer}>
            <View style={styles.ratingHeader}>
              <View style={styles.ratingScore}>
                {!isLoadingStats && stats.totalReviews > 0 ? (
                  <>
                    <Typography variant="h2" style={styles.averageRating}>
                      {stats.averageRating.toFixed(1)}
                    </Typography>
                    <View style={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Ionicons
                          key={star}
                          name={
                            star <= stats.averageRating
                              ? 'star'
                              : 'star-outline'
                          }
                          size={16}
                          color="#FFD700"
                        />
                      ))}
                    </View>
                    <Typography variant="caption" color="secondary">
                      {stats.totalReviews} đánh giá
                    </Typography>
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

              {user && (
                <TouchableOpacity
                  style={styles.addReviewButton}
                  onPress={() => setModalVisible(true)}
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
              )}
            </View>

            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => {
                loadReviews();
                setShowReviewsList(true);
              }}
            >
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
        )}
      </View>

      {showReviews && user && (
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
    </View>
  );
}
