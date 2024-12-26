import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
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

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

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

  const scaleAnim = new Animated.Value(1);
  const opacityAnim = new Animated.Value(1);

  const handleCookingPress = async () => {
    if (isCooking || !onAddToCooking) return;

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          speed: 20,
          bounciness: 8,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    onAddToCooking();
  };

  return (
    <View style={styles.actions}>
      {onDelete && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            Alert.alert(
              'Xác nhận xóa',
              `Bạn có chắc muốn xóa "${recipe.name}" khỏi danh sách đã lưu?\n\nLưu ý: Không thể hoàn tác sau khi xóa.`,
              [
                {
                  text: 'Hủy',
                  style: 'cancel',
                },
                {
                  text: 'Xóa',
                  style: 'destructive',
                  onPress: () => onDelete(recipe),
                },
              ],
              { cancelable: true }
            );
          }}
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
          onPress={() => {
            Alert.alert(
              'Xác nhận dừng nấu',
              `Bạn có chắc muốn dừng nấu "${recipe.name}"?\n\nCông thức vẫn được lưu, bạn có thể nấu lại sau.`,
              [
                {
                  text: 'Hủy',
                  style: 'cancel',
                },
                {
                  text: 'Dừng nấu',
                  style: 'destructive',
                  onPress: () => onRemoveFromCooking(recipe),
                },
              ],
              { cancelable: true }
            );
          }}
        >
          <Ionicons
            name="close-circle-outline"
            size={24}
            color={theme.colors.background.default}
            style={{ marginRight: 8 }}
          />
          <Typography variant="body1" style={styles.buttonText}>
            Dừng nấu
          </Typography>
        </TouchableOpacity>
      ) : (
        onAddToCooking && (
          <AnimatedTouchableOpacity
            style={[
              styles.cookingButton,
              isCooking && styles.cookingActiveButton,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
            onPress={handleCookingPress}
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
          </AnimatedTouchableOpacity>
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
