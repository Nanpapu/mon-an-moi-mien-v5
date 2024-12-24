import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDisplay } from '../../context/DisplayContext';
import { AuthenticatedAppBar } from './AuthenticatedAppBar';
import { PublicAppBar } from './PublicAppBar';

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

  // Không hiển thị khi ở chế độ focus hoặc showHeader = false
  if (!showHeader || focusMode) return null;

  return user ? (
    <AuthenticatedAppBar title={title} rightComponent={rightComponent} />
  ) : (
    <PublicAppBar title={title} />
  );
};
