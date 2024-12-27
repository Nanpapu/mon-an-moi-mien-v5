import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '../../../components/shared';
import { useTheme } from '../../../theme/ThemeContext';
import { useDisplay } from '../../../context/DisplayContext';
import { useMapStyle } from '../../../context/MapStyleContext';

export const DisplaySettings = () => {
  const { theme } = useTheme();
  const { focusMode, toggleFocusMode } = useDisplay();
  const [expanded, setExpanded] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const { simpleMapMode, toggleSimpleMapMode } = useMapStyle();
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(0);

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? 0 : contentHeight.current,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.cubic),
    }).start();
  };

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    contentHeight.current = height;
    if (expanded) {
      animatedHeight.setValue(height);
    }
  };

  const renderSettingItem = (
    title: string,
    description: string,
    value: boolean,
    onToggle: () => void,
    icon: string,
    isDisabled: boolean = false,
    developmentNote?: string
  ) => (
    <View style={[styles.section, isDisabled && styles.disabledSection]}>
      <View style={styles.sectionHeader}>
        <Ionicons
          name={icon as any}
          size={18}
          color={
            isDisabled ? theme.colors.text.disabled : theme.colors.text.primary
          }
          style={{ marginRight: 6 }}
        />
        <Typography
          variant="subtitle1"
          style={[
            styles.sectionTitle,
            {
              color: isDisabled
                ? theme.colors.text.disabled
                : theme.colors.text.primary,
            },
          ]}
        >
          {title}
        </Typography>
      </View>
      <View style={styles.settingItem}>
        <View style={{ flex: 1 }}>
          <Typography
            variant="body2"
            color={isDisabled ? 'disabled' : 'secondary'}
            style={{ fontSize: 13 }}
          >
            {description}
          </Typography>
          {developmentNote && (
            <Typography
              variant="caption"
              style={[
                styles.developmentNote,
                { color: theme.colors.error.main },
              ]}
            >
              {developmentNote}
            </Typography>
          )}
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          disabled={isDisabled}
          trackColor={{
            false: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.divider,
            true: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.primary.main,
          }}
          thumbColor={theme.colors.background.paper}
        />
      </View>
    </View>
  );

  const getFocusModeDescription = (isFocusMode: boolean) => {
    if (isFocusMode) {
      return 'Đã bật chế độ tập trung - Thanh điều hướng được ẩn để tối ưu không gian hiển thị. Nhấn để tắt chế độ này';
    }
    return 'Ẩn App Bar để tối ưu không gian hiển thị và tập trung vào nội dung';
  };

  const getMapModeDescription = (isSimpleMode: boolean) => {
    if (isSimpleMode) {
      return 'Chế độ đơn giản - Đường xá và tên đường được ẩn, biên giới được làm nổi bật. Nhấn để tắt chế độ này';
    }
    return 'Ẩn đường xá và tên đường, tăng độ nổi bật cho biên giới và ranh giới hành chính';
  };

  return (
    <View style={[styles.container, { borderRadius: 16, overflow: 'hidden' }]}>
      <TouchableOpacity
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.background.paper,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.divider,
          },
        ]}
        onPress={toggleExpand}
      >
        <View style={styles.headerContent}>
          <Ionicons
            name="eye-outline"
            size={20}
            color={theme.colors.primary.main}
            style={{ marginRight: 8 }}
          />
          <Typography
            variant="h3"
            style={{
              color: theme.colors.text.primary,
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Tùy chỉnh hiển thị
          </Typography>
        </View>
        <Ionicons
          name={expanded ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={theme.colors.text.secondary}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.animatedContent,
          {
            height: animatedHeight,
            backgroundColor: theme.colors.background.paper,
          },
        ]}
      >
        <View style={styles.content} onLayout={onLayout}>
          {renderSettingItem(
            'Chế độ tập trung',
            getFocusModeDescription(focusMode),
            focusMode,
            toggleFocusMode,
            'eye-outline',
            false
          )}
          {renderSettingItem(
            'Đơn giản hóa bản đồ',
            getMapModeDescription(simpleMapMode),
            simpleMapMode,
            toggleSimpleMapMode,
            'map-outline',
            false
          )}
          {/* {renderSettingItem(
            'Thông báo',
            'Nhận thông báo về công thức mới và cập nhật',
            notifications,
            () => setNotifications(!notifications),
            'notifications-outline',
            true,
            'Tính năng đang phát triển'
          )} */}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedContent: {
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  disabledSection: {
    opacity: 0.6,
  },
  developmentNote: {
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
});
