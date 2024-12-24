import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';

interface Props {
  progress: number; // 0-100
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

export const ProgressBar = ({
  progress,
  color,
  height = 4,
  showPercentage = true,
}: Props) => {
  const { theme } = useTheme();

  return (
    <View style={{ marginVertical: 8 }}>
      <View
        style={{
          height,
          backgroundColor: theme.colors.divider,
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: color || theme.colors.primary.main,
            borderRadius: height,
          }}
        />
      </View>
      {showPercentage && (
        <Typography
          variant="caption"
          style={{
            marginTop: 4,
            color: theme.colors.text.secondary,
            textAlign: 'right',
          }}
        >
          {progress.toFixed(0)}% hoàn thành
        </Typography>
      )}
    </View>
  );
};
