import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDisplay } from '../../context/DisplayContext';
import { AuthenticatedAppBar } from './AuthenticatedAppBar';
import { PublicAppBar } from './PublicAppBar';
import { useRoute } from '@react-navigation/native';

interface AppBarProps {
  title: string;
  showHeader?: boolean;
  rightComponent?: React.ReactNode;
}

export const AppBar = ({
  title,
  showHeader = true,
  rightComponent,
}: AppBarProps) => {
  const { user } = useAuth();
  const { focusMode } = useDisplay();
  const route = useRoute();

  // Chỉ ẩn AppBar khi bật focusMode và không phải ở màn hình Profile
  const shouldHideHeader =
    !showHeader || (focusMode && route.name !== 'Cá nhân');

  if (shouldHideHeader) return null;

  return user ? (
    <AuthenticatedAppBar title={title} rightComponent={rightComponent} />
  ) : (
    <PublicAppBar title={title} />
  );
};
