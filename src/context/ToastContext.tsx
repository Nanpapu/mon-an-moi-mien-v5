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

interface ToastItem {
  type: ToastType;
  message: string;
  duration: number;
  id: string;
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastQueue, setToastQueue] = useState<ToastItem[]>([]);
  const [currentToast, setCurrentToast] = useState<ToastItem | null>(null);

  const lastToastRef = useRef<{
    type: ToastType;
    message: string;
    timestamp: number;
  } | null>(null);

  useEffect(() => {
    if (toastQueue.length > 0 && !currentToast) {
      const nextToast = toastQueue[0];
      setCurrentToast(nextToast);
      setToastQueue((prev) => prev.slice(1));

      const adjustedDuration =
        toastQueue.length > 1
          ? Math.min(nextToast.duration, 1000)
          : nextToast.duration;

      setTimeout(() => {
        setCurrentToast(null);
      }, adjustedDuration);
    }
  }, [toastQueue, currentToast]);

  const showToast = useCallback(
    (type: ToastType, message: string, duration = 3000) => {
      const now = Date.now();
      const lastToast = lastToastRef.current;

      if (
        lastToast &&
        lastToast.type === type &&
        lastToast.message === message &&
        now - lastToast.timestamp < 500
      ) {
        return;
      }

      lastToastRef.current = {
        type,
        message,
        timestamp: now,
      };

      if (currentToast?.type === type && currentToast?.message === message) {
        return;
      }

      setToastQueue((prev) => {
        const newQueue = [
          ...prev,
          {
            type,
            message,
            duration: prev.length > 0 ? Math.min(duration, 1500) : duration,
            id: `${Date.now()}-${Math.random()}`,
          },
        ];
        return newQueue.slice(-3);
      });
    },
    [currentToast]
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
