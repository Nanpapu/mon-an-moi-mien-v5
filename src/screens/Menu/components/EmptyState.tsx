import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  'Cá nhân': undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  hasRecipes: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  isAuthenticated: boolean;
  activeTab?: 'cooking' | 'saved';
}

export const EmptyState = ({
  hasRecipes,
  isRefreshing = false,
  onRefresh,
  isAuthenticated,
  activeTab = 'saved',
}: Props) => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();

  const EmptyContent = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.xl,
        minHeight: 400,
      }}
    >
      <Ionicons
        name={
          !isAuthenticated
            ? 'lock-closed-outline'
            : activeTab === 'cooking'
              ? 'flame-outline'
              : hasRecipes
                ? 'search'
                : 'book-outline'
        }
        size={64}
        color={theme.colors.text.secondary}
        style={{ marginBottom: theme.spacing.md }}
      />

      <Typography
        variant="subtitle1"
        color="secondary"
        align="center"
        style={{ marginBottom: 20 }}
      >
        {!isAuthenticated
          ? 'Bạn cần đăng nhập để xem và quản lý các công thức đã lưu'
          : activeTab === 'cooking'
            ? 'Bạn chưa thêm công thức nào vào danh sách nấu.\nHãy thêm từ danh sách công thức đã lưu!'
            : hasRecipes
              ? 'Không tìm thấy công thức phù hợp với điều kiện lọc.'
              : 'Bạn chưa lưu công thức nào.\nHãy khám phá các món ăn trong phần Bản đồ!'}
      </Typography>

      {!isAuthenticated && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Cá nhân')}
          style={{
            backgroundColor: theme.colors.primary.main,
            paddingHorizontal: theme.spacing.lg,
            paddingVertical: theme.spacing.md,
            borderRadius: theme.spacing.md,
            ...theme.shadows.sm,
          }}
        >
          <Typography
            variant="body1"
            style={{ color: theme.colors.primary.contrast }}
          >
            Đăng nhập ngay
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  );

  if (onRefresh && isAuthenticated) {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        <EmptyContent />
      </ScrollView>
    );
  }

  return <EmptyContent />;
};
