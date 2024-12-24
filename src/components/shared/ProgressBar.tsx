import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { Typography } from './Typography';

interface Props {
  progress: number; // 0-100
  color?: string;
  height?: number;
  showPercentage?: boolean;
  total?: number;
  completed?: number;
}

export const ProgressBar = ({
  progress,
  color,
  height = 6,
  showPercentage = true,
  total,
  completed,
}: Props) => {
  const { theme } = useTheme();

  const hasStarted = completed && completed > 0;

  return (
    <View style={{ marginVertical: 12 }}>
      {showPercentage && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 6,
          }}
        >
          <Typography
            variant="caption"
            style={{
              color: hasStarted
                ? theme.colors.text.secondary
                : theme.colors.text.disabled,
              fontWeight: '600',
            }}
          >
            {completed && total
              ? `Đã hoàn thành ${completed}/${total} bước (${progress.toFixed(0)}%)`
              : 'Chưa bắt đầu'}
          </Typography>
        </View>
      )}

      <View
        style={{
          height,
          backgroundColor: theme.colors.background.default,
          borderRadius: height,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: hasStarted
            ? theme.colors.divider
            : theme.colors.text.disabled,
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {!hasStarted && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: theme.colors.text.disabled,
              opacity: 0.1,
              borderRadius: height,
            }}
          />
        )}

        <View
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: hasStarted
              ? color || theme.colors.primary.main
              : theme.colors.text.disabled,
            borderRadius: height,
            opacity: hasStarted ? 0.9 : 0.5,
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}
          />
        </View>
      </View>

      {!hasStarted && (
        <Typography
          variant="caption"
          style={{
            color: theme.colors.text.disabled,
            fontSize: 12,
            marginTop: 4,
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Nhấn vào các ô vuông để đánh dấu hoàn thành
        </Typography>
      )}
    </View>
  );
};
