import { db } from '../config/firebase';
import { doc, runTransaction } from 'firebase/firestore';
import { COLLECTIONS } from '../constants';

/**
 * Service xử lý upvote/downvote cho reviews
 */
export const ReviewVoteService = {
  /**
   * Vote cho một review
   * @param reviewId ID của review
   * @param userId ID của user đang vote
   * @param voteType Loại vote (up/down/null để hủy vote)
   */
  vote: async (
    reviewId: string,
    userId: string,
    voteType: 'up' | 'down' | null
  ): Promise<void> => {
    try {
      const reviewRef = doc(db, COLLECTIONS.REVIEWS, reviewId);

      await runTransaction(db, async (transaction) => {
        const reviewDoc = await transaction.get(reviewRef);
        if (!reviewDoc.exists()) {
          throw new Error('Review không tồn tại');
        }

        const reviewData = reviewDoc.data();
        const votes = reviewData.votes || {};
        const oldVote = votes[userId];

        // Cập nhật số lượt vote
        let { upvotes = 0, downvotes = 0 } = reviewData;

        // Xóa vote cũ nếu có
        if (oldVote === 'up') upvotes--;
        if (oldVote === 'down') downvotes--;

        // Thêm vote mới
        if (voteType === 'up') upvotes++;
        if (voteType === 'down') downvotes++;

        // Cập nhật vào DB
        transaction.update(reviewRef, {
          votes: {
            ...votes,
            [userId]: voteType,
          },
          upvotes,
          downvotes,
          updatedAt: new Date(),
        });
      });
    } catch (error: any) {
      throw new Error(`Lỗi khi vote: ${error.message}`);
    }
  },
};
