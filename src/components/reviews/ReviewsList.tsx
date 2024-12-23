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

  // Load trạng thái vote ban đầu
  useEffect(() => {
    // Debug: Log dữ liệu từ server
    console.log('Reviews from server:', reviews);

    // Khởi tạo state votes từ dữ liệu reviews
    const initialVotes: Record<string, VoteState> = {};
    reviews.forEach((review) => {
      const score = (review.upvotes || 0) - (review.downvotes || 0);
      console.log(
        `Review ${review.id} - upvotes: ${review.upvotes}, downvotes: ${review.downvotes}, score: ${score}`
      );

      initialVotes[review.id] = {
        voteType: review.votes?.[user?.uid || ''] || null,
        score: score,
      };
    });
    console.log('Initial votes state:', initialVotes);

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

  // Thêm hàm xử lý vote
  const handleVote = async (
    reviewId: string,
    voteType: 'up' | 'down' | null
  ) => {
    console.log('handleVote called:', { reviewId, voteType }); // Debug

    if (!user) {
      showToast('warning', 'Vui lòng đăng nhập để vote');
      return;
    }

    // Lấy trạng thái vote hiện tại
    const currentVote = votes[reviewId]?.voteType || null;
    const currentScore = votes[reviewId]?.score || 0;

    console.log('Current state:', { currentVote, currentScore }); // Debug

    // Tính toán score mới dựa trên hành động vote
    let newScore = currentScore;
    let newVoteType = voteType;

    if (currentVote === voteType) {
      // Nếu click lại vote cũ -> hủy vote
      newScore = currentScore + (voteType === 'up' ? -1 : 1);
      newVoteType = null;
    } else if (currentVote === null) {
      // Nếu chưa vote -> vote mới
      newScore = currentScore + (voteType === 'up' ? 1 : -1);
    } else {
      // Nếu đã vote khác -> đổi vote
      newScore = currentScore + (voteType === 'up' ? 2 : -2);
    }

    console.log('New state:', { newVoteType, newScore }); // Debug

    // Update state ngay lập tức
    setVotes((prev) => {
      console.log('Updating votes state:', {
        old: prev[reviewId],
        new: { voteType: newVoteType, score: newScore },
      });
      return {
        ...prev,
        [reviewId]: {
          voteType: newVoteType,
          score: newScore,
        },
      };
    });

    // Gọi API trong background
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
      showToast('error', 'Không thể vote lúc này, vui lòng thử lại sau');
    }
  };

  const renderVoteButtons = (review: Review) => {
    const voteState = votes[review.id] || {
      voteType: review.votes?.[user?.uid || ''] || null,
      score: (review.upvotes || 0) - (review.downvotes || 0),
    };

    return (
      <View style={styles.votingContainer}>
        <TouchableOpacity
          onPress={() => handleVote(review.id, 'up')}
          style={styles.voteButton}
        >
          <Ionicons
            name={voteState.voteType === 'up' ? 'arrow-up' : 'arrow-up-outline'}
            size={20}
            color={
              voteState.voteType === 'up'
                ? theme.colors.primary.main
                : theme.colors.text.secondary
            }
          />
        </TouchableOpacity>

        <Typography variant="body2" style={styles.voteCount}>
          {voteState.score}
        </Typography>

        <TouchableOpacity
          onPress={() => handleVote(review.id, 'down')}
          style={styles.voteButton}
        >
          <Ionicons
            name={
              voteState.voteType === 'down'
                ? 'arrow-down'
                : 'arrow-down-outline'
            }
            size={20}
            color={
              voteState.voteType === 'down'
                ? theme.colors.error.main
                : theme.colors.text.secondary
            }
          />
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

          {/* Thêm phần voting UI */}
          {renderVoteButtons(review)}
        </View>
      ))}
    </ScrollView>
  );
};
