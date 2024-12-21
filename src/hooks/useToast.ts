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
      }
    ) => {
      // Tăng số lần gọi
      callCountRef.current += 1;

      // Clear timeout cũ nếu có
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      // Tính toán duration dựa vào số lần gọi
      const calculatedDuration =
        callCountRef.current > 1
          ? Math.min(options?.duration || 3000, 1000)
          : options?.duration;

      // Nếu immediate = true, hiện toast ngay lập tức
      if (options?.immediate) {
        context.showToast(type, message, calculatedDuration);
        return;
      }

      // Debounce toast trong 300ms
      debounceTimerRef.current = setTimeout(() => {
        context.showToast(type, message, calculatedDuration);
        // Reset số lần gọi sau khi hiển thị
        setTimeout(() => {
          callCountRef.current = 0;
        }, 1000);
      }, 300);
    },
    [context]
  );

  return { showToast };
};
