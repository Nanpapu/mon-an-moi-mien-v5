import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Typography } from '../shared';
import { useTheme } from '../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { createStyles } from './ReviewsList.styles';
import { Review } from '../../types';
import { ReviewVoteService } from '../../services/reviewVoteService';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../hooks/useToast';

// Props interface cho ReviewsList
interface ReviewsListProps {
  recipeId: string;
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}

interface VoteState {
  voteType: 'up' | 'down' | null;
  score: number;
}

// ReviewsList component
export const ReviewsList = ({
  recipeId,
  reviews,
  averageRating,
  totalReviews,
}: ReviewsListProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { user } = useAuth();
  const { showToast } = useToast();

  // State để lưu trạng thái vote cho mỗi review
  const [votes, setVotes] = useState<Record<string, VoteState>>({});

  // Load trạng thái vote ban đầu và cập nhật khi reviews thay đổi
  useEffect(() => {
    const initialVotes: Record<string, VoteState> = {};
    reviews.forEach((review) => {
      initialVotes[review.id] = {
        voteType: review.votes?.[user?.uid || ''] || null,
        score: review.upvotes || 0,
      };
    });
    setVotes(initialVotes);
  }, [reviews, user?.uid]);

  // Hàm render sao đánh giá
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color={theme.colors.warning.main}
        style={{ marginRight: theme.spacing.xs }}
      />
    ));
  };

  // Thêm hàm xử lý like
  const handleLike = async (reviewId: string) => {
    console.log('handleLike called:', { reviewId }); // Debug

    if (!user) {
      showToast('warning', 'Vui lòng đăng nhập để thích');
      return;
    }

    // Lấy trạng thái vote hiện tại
    const currentVote = votes[reviewId]?.voteType || null;
    const currentScore = votes[reviewId]?.score || 0;

    console.log('Current state:', { currentVote, currentScore }); // Debug

    // Tính toán score mới dựa trên hành động like
    // Note: Vẫn giữ logic upvote/downvote phía sau nhưng chỉ sử dụng 'up'
    let newScore = currentScore;
    let newVoteType: 'up' | null = currentVote === 'up' ? null : 'up';

    // Nếu đang like -> unlike
    if (currentVote === 'up') {
      newScore = currentScore - 1;
    } else {
      // Nếu ch��a like -> like
      newScore = currentScore + 1;
    }

    console.log('New state:', { newVoteType, newScore }); // Debug

    // Update state ngay lập tức
    setVotes((prev) => ({
      ...prev,
      [reviewId]: {
        voteType: newVoteType,
        score: newScore,
      },
    }));

    // Gọi API trong background (vẫn giữ nguyên service cũ)
    try {
      await ReviewVoteService.vote(reviewId, user.uid, newVoteType);
      console.log('API call successful'); // Debug
    } catch (error) {
      console.error('API call failed:', error); // Debug
      // Nếu API fail -> rollback state
      setVotes((prev) => ({
        ...prev,
        [reviewId]: {
          voteType: currentVote,
          score: currentScore,
        },
      }));
      showToast('error', 'Không thể thích lúc này, vui lòng thử lại sau');
    }
  };

  const renderLikeButton = (review: Review) => {
    const voteState = votes[review.id] || {
      voteType: review.votes?.[user?.uid || ''] || null,
      score: review.upvotes || 0, // Chỉ hiển thị upvotes
    };

    return (
      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => handleLike(review.id)}
          style={styles.likeButton}
        >
          <Ionicons
            name={voteState.voteType === 'up' ? 'heart' : 'heart-outline'}
            size={24}
            color={
              voteState.voteType === 'up'
                ? theme.colors.error.main
                : theme.colors.text.secondary
            }
          />
          <Typography variant="body2" style={styles.likeCount}>
            {voteState.score}
          </Typography>
        </TouchableOpacity>
      </View>
    );
  };

  // Nếu không có đánh giá nào, hiển thị thông báo
  if (reviews.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="chatbubble-outline"
          size={64}
          color={theme.colors.text.secondary}
        />
        <Typography variant="subtitle1" style={{ marginTop: theme.spacing.md }}>
          Chưa có đánh giá nào
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          style={{ marginTop: theme.spacing.sm }}
        >
          Hãy là người đầu tiên đánh giá món ăn này!
        </Typography>
      </View>
    );
  }

  // Nếu có đánh giá, hiển thị danh sách đánh giá
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={star <= (averageRating || 0) ? 'star' : 'star-outline'}
              size={20}
              color={theme.colors.warning.main}
              style={{ marginRight: 4 }}
            />
          ))}
          <Typography
            variant="subtitle1"
            style={{ marginLeft: 8, fontWeight: 'bold' }}
          >
            {averageRating?.toFixed(1) || '0.0'} ({totalReviews} đánh giá)
          </Typography>
        </View>
      </View>

      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewContainer}>
          <View style={styles.reviewContent}>
            <View style={styles.userInfoContainer}>
              {review.userInfo?.photoURL ? (
                <Image
                  source={{ uri: review.userInfo.photoURL }}
                  style={styles.userAvatar}
                  contentFit="cover"
                  transition={200}
                />
              ) : (
                <Ionicons
                  name="person-circle"
                  size={40}
                  color={theme.colors.primary.main}
                  style={{ marginRight: theme.spacing.sm }}
                />
              )}
              <View>
                <Typography variant="subtitle2">
                  {review.userInfo?.displayName || 'Người dùng'}
                </Typography>
                <Typography variant="caption" color="secondary">
                  {review.userInfo?.email}
                </Typography>
              </View>
            </View>

            <View style={styles.ratingContainer}>
              <View style={styles.starsContainer}>
                {renderStars(review.rating)}
              </View>
              <Typography
                variant="caption"
                color="secondary"
                style={styles.dateText}
              >
                {new Date(review.createdAt.seconds * 1000).toLocaleDateString(
                  'vi-VN'
                )}
              </Typography>
            </View>

            <Typography variant="body2">{review.comment}</Typography>
          </View>

          {/* Thay thế phần voting UI cũ bằng like button */}
          {renderLikeButton(review)}
        </View>
      ))}
    </ScrollView>
  );
};
