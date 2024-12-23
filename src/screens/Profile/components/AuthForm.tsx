import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Input, Button, Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { Logo } from './Logo';

interface Props {
  isRegistering: boolean;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  errors: any;
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onConfirmPasswordChange: (text: string) => void;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
  onSubmit: () => void;
  onForgotPassword: () => void;
  onToggleAuthMode: () => void;
}

export const AuthForm = ({
  isRegistering,
  email,
  password,
  confirmPassword,
  showPassword,
  showConfirmPassword,
  errors,
  fadeAnim,
  slideAnim,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onTogglePassword,
  onToggleConfirmPassword,
  onSubmit,
  onForgotPassword,
  onToggleAuthMode,
}: Props) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Logo />

      <Animated.View
        style={[
          styles.formContainer,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -30],
                }),
              },
            ],
          },
        ]}
      >
        <Typography
          variant="h2"
          style={[
            styles.title,
            {
              color: theme.colors.text.primary,
              marginBottom: theme.spacing.sm,
              marginTop: theme.spacing.md,
            },
          ]}
        >
          {isRegistering ? 'Tạo tài khoản mới' : 'Chào mừng trở lại!'}
        </Typography>

        <Input
          label="Email"
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon="mail-outline"
          error={errors.email}
          placeholder="Nhập email của bạn"
          containerStyle={styles.input}
        />

        <Input
          label="Mật khẩu"
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry={!showPassword}
          leftIcon="lock-closed-outline"
          rightIcon={showPassword ? 'eye-off-outline' : 'eye-outline'}
          onRightIconPress={onTogglePassword}
          error={errors.password}
          placeholder="Nhập mật khẩu"
          containerStyle={styles.input}
        />

        {isRegistering && (
          <Input
            label="Xác nhận mật khẩu"
            value={confirmPassword}
            onChangeText={onConfirmPasswordChange}
            secureTextEntry={!showConfirmPassword}
            leftIcon="lock-closed-outline"
            rightIcon={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
            onRightIconPress={onToggleConfirmPassword}
            error={errors.confirmPassword}
            placeholder="Nhập lại mật khẩu"
            containerStyle={styles.input}
          />
        )}

        <Button
          onPress={onSubmit}
          style={[
            styles.submitButton,
            { backgroundColor: theme.colors.primary.main },
          ]}
        >
          {isRegistering ? 'Đăng ký' : 'Đăng nhập'}
        </Button>

        {!isRegistering && (
          <Button
            variant="text"
            onPress={onForgotPassword}
            style={styles.forgotPassword}
          >
            Quên mật khẩu?
          </Button>
        )}

        <View style={styles.divider}>
          <View
            style={[
              styles.dividerLine,
              { backgroundColor: theme.colors.divider },
            ]}
          />
          <Typography
            variant="caption"
            style={[styles.dividerText, { color: theme.colors.text.secondary }]}
          >
            HOẶC
          </Typography>
          <View
            style={[
              styles.dividerLine,
              { backgroundColor: theme.colors.divider },
            ]}
          />
        </View>

        <Button
          variant="outline"
          onPress={onToggleAuthMode}
          style={styles.switchButton}
        >
          {isRegistering
            ? 'Đã có tài khoản? Đăng nhập'
            : 'Chưa có tài khoản? Đăng ký'}
        </Button>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 24,
    height: 48,
  },
  forgotPassword: {
    marginTop: 12,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 16,
  },
  switchButton: {
    marginTop: 8,
  },
});
