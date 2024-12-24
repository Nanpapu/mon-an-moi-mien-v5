import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Animated, Easing } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Loading, Typography } from '../../components/shared';
import { AuthForm } from './components/AuthForm';
import { UserProfile } from './components/UserProfile';
import { GoogleSignInButton } from './components/GoogleSignInButton';
import { useAuth } from '../../context/AuthContext';
import { useAuthForm } from './hooks/useAuthForm';
import { useAuthAnimation } from './hooks/useAuthAnimation';
import { useProfileActions } from './hooks/useProfileActions';
import { ResetPasswordModal } from './components/ResetPasswordModal';
import { useToast } from '../../hooks/useToast';
import { Card, Button } from '../../components/shared';
import { ThemeSelector } from './components/ThemeSelector';
import { DisplaySettings } from './components/DisplaySettings';
import { ImportButton } from './components/ImportButton';
import { useScreenTransition } from './hooks/useScreenTransition';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const {
    login,
    isLoading,
    user,
    logout,
    register,
    resetPassword,
    signInWithGoogle,
  } = useAuth();

  // Local state
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom hooks
  const { fadeAnim, slideAnim, animateFormTransition } =
    useAuthAnimation(isRegistering);
  const { fadeAnim: profileFadeAnim, slideAnim: profileSlideAnim } =
    useScreenTransition(!!user);
  const {
    displayName,
    setDisplayName,
    isEditing,
    handleStartEditing,
    handleCancelEditing,
    handleImportData,
    pickImage,
    handleSaveProfile,
    isUploading,
    photoURL,
    isImporting,
  } = useProfileActions(user);

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    resetEmail,
    setResetEmail,
    showResetPassword,
    setShowResetPassword,
    errors,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    handleResetPassword,
    validateDisplayName,
  } = useAuthForm(login, register, resetPassword);

  const { showToast } = useToast();

  // Handlers
  const handleLogin = async () => {
    try {
      setIsSubmitting(true);
      await login(email, password);
      showToast('success', 'Đăng nhập thành công');
    } catch (error: any) {
      showToast('error', 'Đăng nhập thất bại: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async () => {
    try {
      if (!validateDisplayName(displayName)) return;
      setIsSubmitting(true);
      await register(email, password, displayName);
      showToast('success', 'Đăng ký thành công');
    } catch (error: any) {
      showToast('error', 'Đăng ký thất bại: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
    animateFormTransition();
  };

  const handleLogout = async () => {
    try {
      // Trigger animation trước
      Animated.parallel([
        Animated.timing(profileFadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(profileSlideAnim, {
          toValue: -30,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
      ]).start(async () => {
        // Thực hiện logout sau khi animation hoàn thành
        await logout();
        showToast('success', 'Đã đăng xuất');
      });
    } catch (error: any) {
      showToast('error', 'Đăng xuất thất bại');
    }
  };

  return (
    <>
      <ResetPasswordModal
        visible={showResetPassword}
        email={resetEmail}
        onEmailChange={setResetEmail}
        onClose={() => setShowResetPassword(false)}
        onSubmit={handleResetPassword}
      />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background.default,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: user ? theme.spacing.xl : theme.spacing.xl,
          paddingBottom: theme.spacing.xl * 2,
          justifyContent: user ? 'flex-start' : 'center',
          paddingHorizontal: user ? theme.spacing.lg : 0,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        {isLoading ? (
          <Loading text="Đang tải..." />
        ) : user ? (
          <Animated.View
            style={{
              opacity: profileFadeAnim,
              transform: [{ translateY: profileSlideAnim }],
            }}
          >
            <View style={styles.container}>
              <Card
                style={[
                  styles.profileCard,
                  {
                    backgroundColor: theme.colors.background.paper,
                    ...theme.shadows.md,
                  },
                ]}
              >
                <UserProfile
                  user={user}
                  displayName={displayName}
                  isEditing={isEditing}
                  onDisplayNameChange={setDisplayName}
                  onEditPress={handleStartEditing}
                  onSavePress={handleSaveProfile}
                  onCancelPress={handleCancelEditing}
                  onPickImage={pickImage}
                  onLogout={handleLogout}
                  onImportData={
                    user.email === '21521059@gm.uit.edu.vn'
                      ? handleImportData
                      : undefined
                  }
                  photoURL={photoURL}
                  isUploading={isUploading}
                  isImporting={isImporting}
                />
              </Card>

              <DisplaySettings />
              <ThemeSelector />

              {/* <Card
                style={[
                  styles.logoutCard,
                  {
                    backgroundColor: theme.colors.background.paper,
                    ...theme.shadows.md,
                  },
                ]}
              >
                <Button
                  variant="secondary"
                  icon="log-out-outline"
                  onPress={handleLogout}
                  style={styles.logoutButton}
                >
                  Đăng xuất
                </Button>
              </Card> */}
            </View>
          </Animated.View>
        ) : (
          <>
            <AuthForm
              isRegistering={isRegistering}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              showPassword={showPassword}
              showConfirmPassword={showConfirmPassword}
              errors={errors}
              fadeAnim={fadeAnim}
              slideAnim={slideAnim}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onConfirmPasswordChange={setConfirmPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              onToggleConfirmPassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              onSubmit={isRegistering ? handleRegister : handleLogin}
              onForgotPassword={() => setShowResetPassword(true)}
              onToggleAuthMode={toggleAuthMode}
              displayName={displayName}
              onDisplayNameChange={setDisplayName}
              isSubmitting={isSubmitting}
            />
            {/* Tạm ẩn đăng nhập bằng Google */}
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  profileCard: {
    borderRadius: 16,
    padding: 0,
    // padding: 16,
  },
  logoutCard: {
    width: '60%',
    borderRadius: 12,
    padding: 0,
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 12,
  },
});
