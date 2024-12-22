export const CACHE_KEYS = {
  REGIONS: 'cached_regions',
  RECIPES: 'cached_recipes_',
  SAVED_RECIPES: 'cached_saved_recipes_',
  USER_PROFILE: 'cached_user_',
  RECIPE_REVIEWS: 'cached_reviews_',
  FAVORITE_RECIPES: 'cached_favorite_recipes_',
} as const;

export const CACHE_EXPIRY = {
  REGIONS: 24 * 60 * 60 * 1000,
  RECIPES: 12 * 60 * 60 * 1000,
  SAVED_RECIPES: 6 * 60 * 60 * 1000,
  USER_PROFILE: 1 * 60 * 60 * 1000,
  RECIPE_REVIEWS: 30 * 60 * 1000,
  FAVORITE_RECIPES: 6 * 60 * 60 * 1000,
} as const;
