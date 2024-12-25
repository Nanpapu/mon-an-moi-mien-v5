import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '../../shared';
import { useTheme } from '../../../theme/ThemeContext';
import { SEASONAL_PERIODS } from '../../../constants/ingredientPrices';

type SeasonalIcon = 'alert-circle' | 'leaf' | 'warning';

export const SeasonalAlert = () => {
  const { theme } = useTheme();
  const now = new Date();
  const currentMonth = now.getMonth() + 1;

  const getSeasonalInfo = () => {
    if (SEASONAL_PERIODS.TET.months.includes(currentMonth)) {
      return {
        icon: 'alert-circle' as SeasonalIcon,
        text: 'Đang trong mùa Tết, giá nguyên liệu có thể tăng cao',
        color: theme.colors.warning.main,
      };
    }
    if (SEASONAL_PERIODS.ABUNDANT.months.includes(currentMonth)) {
      return {
        icon: 'leaf' as SeasonalIcon,
        text: 'Đang trong mùa thu hoạch, giá nguyên liệu đang tốt',
        color: theme.colors.success.main,
      };
    }
    if (SEASONAL_PERIODS.SCARCITY.months.includes(currentMonth)) {
      return {
        icon: 'warning' as SeasonalIcon,
        text: 'Đang trong mùa khan hiếm, giá nguyên liệu có thể cao',
        color: theme.colors.error.main,
      };
    }
    return null;
  };

  const seasonalInfo = getSeasonalInfo();
  if (!seasonalInfo) return null;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: seasonalInfo.color + '20',
        marginBottom: 8,
        borderRadius: 8,
      }}
    >
      <Ionicons
        name={seasonalInfo.icon}
        size={20}
        color={seasonalInfo.color}
        style={{ marginRight: 8 }}
      />
      <Typography
        style={{
          color: seasonalInfo.color,
          flex: 1,
          fontSize: 14,
        }}
      >
        {seasonalInfo.text}
      </Typography>
    </View>
  );
};
