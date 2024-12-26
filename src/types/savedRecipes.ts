import { Timestamp } from 'firebase/firestore';

export interface UserSavedRecipes {
  userId: string;
  recipeIds: string[];
  cookingRecipeIds: string[];
  updatedAt: Timestamp;
  version: number;
  lastSyncedAt: Timestamp;
}
