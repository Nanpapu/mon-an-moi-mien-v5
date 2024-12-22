import { Timestamp } from 'firebase/firestore';

export interface UserSavedRecipes {
  userId: string;
  recipeIds: string[];
  updatedAt: Timestamp;
  version: number;
  lastSyncedAt: Timestamp;
}
