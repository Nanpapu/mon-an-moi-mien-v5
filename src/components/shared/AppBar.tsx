import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthenticatedAppBar } from './AuthenticatedAppBar';
import { PublicAppBar } from './PublicAppBar';

interface AppBarProps {
  title: string;
  showHeader?: boolean;
  rightComponent?: React.ReactNode;
}

// Component điều phối - quyết định hiển thị AppBar nào
export const AppBar = ({
  title,
  showHeader = true,
  rightComponent,
}: AppBarProps) => {
  const { user } = useAuth();

  if (!showHeader) return null;

  // Nếu đã đăng nhập -> hiển thị AuthenticatedAppBar
  // Nếu chưa đăng nhập -> hiển thị PublicAppBar
  return user ? (
    <AuthenticatedAppBar title={title} rightComponent={rightComponent} />
  ) : (
    <PublicAppBar title={title} />
  );
};
