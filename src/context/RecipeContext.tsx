import React, { createContext, useContext, useState } from 'react';
import { Recipe } from '../types';
import { getSavedRecipes } from '../utils/storage';
import { useAuth } from './AuthContext';

interface RecipeContextType {
  savedRecipes: Recipe[];
  refreshSavedRecipes: () => Promise<void>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const { user } = useAuth();

  const refreshSavedRecipes = async () => {
    if (user) {
      const recipes = await getSavedRecipes(user.uid);
      setSavedRecipes(recipes);
    } else {
      setSavedRecipes([]); // Reset khi không có user
    }
  };

  return (
    <RecipeContext.Provider value={{ savedRecipes, refreshSavedRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};
