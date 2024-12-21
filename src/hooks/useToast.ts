import { useContext, useCallback, useRef } from 'react';
import { ToastContext } from '../context/ToastContext';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  // Ref để track debounce timeout và số lần gọi
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const callCountRef = useRef<number>(0);

  const showToast = useCallback(
    (
      type: ToastType,
      message: string,
      options?: {
        duration?: number;
        position?: 'top' | 'bottom';
        immediate?: boolean;
        groupSimilar?: boolean;
      }
    ) => {
      // Tăng số lần gọi
      callCountRef.current += 1;

      // Clear timeout cũ nếu có
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      // Tính toán duration dựa vào độ dài message
      const baseDuration = options?.duration || 3000;
      const messageLengthFactor = Math.min(message.length / 50, 2); // Tăng duration cho message dài
      const calculatedDuration = Math.max(
        2000,
        callCountRef.current > 1
          ? Math.min(baseDuration * messageLengthFactor, 3000)
          : baseDuration * messageLengthFactor
      );

      // Nếu immediate = true, hiện toast ngay lập tức
      if (options?.immediate) {
        context.showToast(type, message, calculatedDuration);
        return;
      }

      // Tăng debounce time để xử lý spam tốt hơn
      debounceTimerRef.current = setTimeout(() => {
        context.showToast(type, message, calculatedDuration);
        setTimeout(() => {
          callCountRef.current = 0;
        }, 1500);
      }, 500);
    },
    [context]
  );

  return { showToast };
};
