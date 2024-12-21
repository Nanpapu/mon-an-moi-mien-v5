import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theme/ThemeContext';

// Lấy kích thước của màn hình
const { width } = Dimensions.get('window');

// Tạo styles cho RecipeCard
export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    // Container chính của card
    card: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      ...theme.shadows.sm,
      overflow: 'hidden',
    },

    // Styles cho hình ảnh món ăn
    image: {
      width: '100%',
      height: 400,
      backgroundColor: theme.colors.background.paper,
    },

    // Container chứa nội dung chính
    content: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
    },

    // Phần header chứa tên món và nút mở rộng
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: theme.spacing.sm,
    },

    // Phần nội dung của header (tên món, vùng miền)
    headerContent: {
      flex: 1,
      marginRight: theme.spacing.sm,
    },

    // Style cho tên món ăn
    name: {
      ...theme.typography.h3,
      color: theme.colors.text.primary,
    },

    // Style cho tên vùng miền
    region: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
      marginTop: theme.spacing.xs,
    },

    // Container chứa chi tiết món ăn (nguyên liệu, cách làm)
    details: {
      paddingTop: theme.spacing.md,
    },

    // Style cho tiêu đề các phần (Nguyên liệu, Cách làm)
    sectionTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },

    // Style cho icon bên cạnh tiêu đề
    sectionIcon: {
      marginRight: theme.spacing.sm,
    },

    // Container chứa danh sách nguyên liệu
    ingredientsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },

    // Layout cho danh sách nguyên liệu (2 cột)
    ingredientsList: {
      marginTop: theme.spacing.xs,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    // Style cho từng item nguyên liệu
    ingredientItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.xs,
      width: '48%', // Chiếm 48% để tạo khoảng cách giữa 2 cột
      marginBottom: theme.spacing.xs,
    },

    // Style cho số thứ tự nguyên liệu
    ingredientNumber: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },

    // Style cho text số thứ tự nguyên liệu
    ingredientNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 10,
      fontWeight: 'bold',
      lineHeight: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      includeFontPadding: false,
      padding: 0,
    },

    // Style cho text nguyên liệu
    ingredientText: {
      flex: 1,
      color: theme.colors.text.primary,
      fontSize: 14,
    },

    // Container chứa các bước làm
    instructionsContainer: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },

    // Layout danh sách các bước
    instructionsList: {
      marginTop: theme.spacing.xs,
    },

    // Style cho từng bước làm
    instructionItem: {
      flexDirection: 'row',
      marginBottom: theme.spacing.sm,
      backgroundColor: theme.colors.background.default,
      borderRadius: theme.spacing.sm,
      padding: theme.spacing.xs,
      alignItems: 'center',
      ...theme.shadows.xs,
    },

    // Style cho số thứ tự bước làm
    instructionNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      ...theme.shadows.xs,
    },

    // Style cho text số thứ tự bước làm
    instructionNumberText: {
      color: theme.colors.primary.contrast,
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 24,
      textAlign: 'center',
      textAlignVertical: 'center',
      includeFontPadding: false,
      padding: 0,
    },

    // Container chứa nội dung bước làm
    instructionContent: {
      flex: 1,
    },

    // Style cho text nội dung bước làm
    instructionText: {
      color: theme.colors.text.secondary,
      fontSize: 14,
      lineHeight: 20,
    },

    // Style cho nút mở rộng
    expandButton: {
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.sm,
      backgroundColor: theme.colors.background.paper,
    },

    // Style cho nút mở rộng khi được xoay
    expandButtonRotate: {
      transform: [{ rotate: '180deg' }],
    },

    // Container chứa các action (lưu, xóa)
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.md,
      gap: theme.spacing.sm,
    },

    // Style cho nút lưu công thức
    saveButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      marginRight: theme.spacing.sm,
      ...theme.shadows.sm,
    },

    // Style cho nút xóa công thức
    deleteButton: {
      flex: 1,
      backgroundColor: theme.colors.error.main,
      padding: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: theme.spacing.xs,
    },

    // Style cho text trong các nút
    buttonText: {
      ...theme.typography.body1,
      color: theme.colors.background.default,
      fontWeight: '600' as const,
    },

    // Các trạng thái khác nhau của nút lưu
    savedButton: {
      backgroundColor: theme.colors.success.main,
    },
    wasSavedButton: {
      backgroundColor: theme.colors.info.main,
    },
    savingButton: {
      backgroundColor: theme.colors.primary.light,
      opacity: 0.8,
    },

    // Styles cho phần đánh giá
    ratingContainer: {
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.divider,
      marginTop: theme.spacing.md,
    },

    ratingHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },

    ratingScore: {
      alignItems: 'center',
    },

    averageRating: {
      ...theme.typography.h2,
      color: theme.colors.text.primary,
    },

    starsRow: {
      flexDirection: 'row',
      marginVertical: theme.spacing.xs,
      gap: theme.spacing.xs,
    },

    // Style cho modal đánh giá
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContent: {
      backgroundColor: theme.colors.background.default,
      borderTopLeftRadius: theme.spacing.lg,
      borderTopRightRadius: theme.spacing.lg,
      height: '60%',
    },

    modalHeader: {
      zIndex: 1,
    },

    modalHeaderBackground: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderTopLeftRadius: theme.spacing.lg,
      borderTopRightRadius: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
  });
