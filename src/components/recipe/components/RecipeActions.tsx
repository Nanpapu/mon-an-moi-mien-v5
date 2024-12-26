import React, { useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Recipe } from '../../../types';
import { createStyles } from './RecipeActions.styles';
import { useTheme } from '../../../theme/ThemeContext';
import { Typography } from '../../shared';

interface Props {
  recipe: Recipe;
  onSave?: () => Promise<boolean>;
  onDelete?: (recipe: Recipe) => void;
  onAddToCooking?: () => void;
  onRemoveFromCooking?: (recipe: Recipe) => void;
  isCooking?: boolean;
}

export const RecipeActions = ({
  recipe,
  onSave,
  onDelete,
  onAddToCooking,
  onRemoveFromCooking,
  isCooking,
}: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [isSaving, setIsSaving] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [wasSaved, setWasSaved] = useState(false);

  return (
    <View style={styles.actions}>
      {onDelete && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(recipe)}
        >
          <Ionicons
            name="trash-outline"
            size={20}
            color={theme.colors.background.default}
            style={{ marginRight: 4 }}
          />
          <Typography variant="body2" style={styles.deleteButtonText}>
            Xóa
          </Typography>
        </TouchableOpacity>
      )}

      {isCooking && onRemoveFromCooking ? (
        <TouchableOpacity
          style={[styles.cookingButton, styles.removeCookingButton]}
          onPress={() => onRemoveFromCooking(recipe)}
        >
          <Ionicons
            name="close-circle-outline"
            size={24}
            color={theme.colors.background.default}
            style={{ marginRight: 8 }}
          />
          <Typography variant="body1" style={styles.buttonText}>
            Bỏ nấu
          </Typography>
        </TouchableOpacity>
      ) : (
        onAddToCooking && (
          <TouchableOpacity
            style={[
              styles.cookingButton,
              isCooking && styles.cookingActiveButton,
            ]}
            onPress={onAddToCooking}
            disabled={isCooking}
          >
            <Ionicons
              name={isCooking ? 'checkmark-circle' : 'restaurant-outline'}
              size={24}
              color={theme.colors.background.default}
              style={{ marginRight: 8 }}
            />
            <Typography variant="body1" style={styles.buttonText}>
              {isCooking ? 'Đã thêm' : 'Nấu ngay'}
            </Typography>
          </TouchableOpacity>
        )
      )}

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
                setJustSaved(true);
                setTimeout(() => {
                  setJustSaved(false);
                }, 2000);
              } else {
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
            size={24}
            color={theme.colors.background.default}
            style={{ marginRight: 8 }}
          />
          <Typography variant="body1" style={styles.buttonText}>
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
    </View>
  );
};
