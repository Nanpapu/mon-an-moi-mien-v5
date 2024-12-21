import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Toast } from '../components/shared/Toast';
import { ToastType } from '../hooks/useToast';

interface ToastContextType {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastState {
  id: string;
  type: ToastType;
  message: string;
  duration: number;
  isExiting?: boolean;
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentToast, setCurrentToast] = useState<ToastState | null>(null);
  const [toastQueue, setToastQueue] = useState<ToastState[]>([]);
  const exitAnimationTimeoutRef = useRef<NodeJS.Timeout>();

  const handleToastExit = useCallback((toast: ToastState) => {
    setCurrentToast((prev) => (prev ? { ...prev, isExiting: true } : null));

    exitAnimationTimeoutRef.current = setTimeout(() => {
      setCurrentToast(null);
    }, 500);
  }, []);

  useEffect(() => {
    if (toastQueue.length > 0 && !currentToast) {
      const nextToast = toastQueue[0];

      const similarToasts = toastQueue.filter(
        (toast) =>
          toast.type === nextToast.type && toast.message === nextToast.message
      );

      const message =
        similarToasts.length > 1
          ? `${nextToast.message} (${similarToasts.length})`
          : nextToast.message;

      setCurrentToast({ ...nextToast, message, isExiting: false });

      setToastQueue((prev) =>
        prev.filter(
          (toast) =>
            !(
              toast.type === nextToast.type &&
              toast.message === nextToast.message
            )
        )
      );

      const adjustedDuration = Math.max(
        1000,
        similarToasts.length > 1 ? 2000 : nextToast.duration
      );

      setTimeout(() => {
        handleToastExit(nextToast);
      }, adjustedDuration);
    }
  }, [toastQueue, currentToast, handleToastExit]);

  const showToast = useCallback(
    (type: ToastType, message: string, duration = 3000) => {
      if (exitAnimationTimeoutRef.current) {
        clearTimeout(exitAnimationTimeoutRef.current);
      }

      if (currentToast && !currentToast.isExiting) {
        handleToastExit(currentToast);
      }

      setToastQueue((prev) => {
        const newQueue = [
          ...prev,
          {
            type,
            message,
            duration: prev.length > 0 ? Math.min(duration, 2000) : duration,
            id: `${Date.now()}-${Math.random()}`,
            isExiting: false,
          },
        ];
        return newQueue.slice(-5);
      });
    },
    [currentToast, handleToastExit]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {currentToast && (
        <Toast
          visible={!!currentToast}
          message={currentToast.message}
          type={currentToast.type}
        />
      )}
    </ToastContext.Provider>
  );
};
