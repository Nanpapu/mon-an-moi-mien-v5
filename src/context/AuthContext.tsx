// Context quản lý trạng thái đăng nhập và xác thực người dùng
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from 'firebase/auth';
import { AuthService } from '../services/authService';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { GoogleAuthService } from '../services/googleAuthService';
import { ProfileCache, ProfileCacheService } from '../services/profileCacheService';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';

// Định nghĩa các hàm và state có trong context
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  cachedProfile: ProfileCache | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

// Tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // STATE
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cachedProfile, setCachedProfile] = useState<ProfileCache | null>(null);

  // Load cache ngay khi component mount
  useEffect(() => {
    const preloadCache = async () => {
      try {
        const cache = await ProfileCacheService.getProfileCache();
        if (cache) {
          setCachedProfile(cache);
        }
      } catch (error) {
        console.error('Lỗi khi load profile cache:', error);
      }
    };

    preloadCache();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Nếu có cache và match với user hiện tại
        if (cachedProfile && cachedProfile.uid === user.uid) {
          // Cập nhật user profile từ cache
          await updateProfile(user, {
            displayName: cachedProfile.displayName || user.displayName,
            photoURL: cachedProfile.photoURL || user.photoURL,
          });
        }
      }
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [cachedProfile]); // Thêm cachedProfile vào dependencies

  // HANDLERS
  // Xử lý đăng nhập
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Lưu cache ngay khi login thành công
      await ProfileCacheService.saveProfileCache({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (error) {
      throw error;
    }
  };

  // Xử lý đăng ký
  const register = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const user = await AuthService.register(email, password, displayName);
      setUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  // Xử lý đăng xuất
  const logout = async () => {
    try {
      await auth.signOut();
      await ProfileCacheService.clearProfileCache();
    } catch (error) {
      throw error;
    }
  };

  // Xử lý đặt lại mật khẩu
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };

  const [request, response, promptAsync] = GoogleAuthService.useGoogleAuth();

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const result = await promptAsync();
      console.log('Google Sign In Result:', result);

      if (result?.type === 'success') {
        const { id_token } = result.params;
        const credential = await GoogleAuthService.signInWithGoogle(id_token);
        setUser(credential);
      }
    } catch (error) {
      console.error('Google Sign In Error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // RENDER
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        cachedProfile,
        login,
        register,
        logout,
        resetPassword,
        signInWithGoogle,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

// Thêm export cho hook useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
