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

export const DisplaySettings = () => {
  const { theme } = useTheme();
  const { focusMode, toggleFocusMode } = useDisplay();
  const [expanded, setExpanded] = useState(false);
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
    icon: string
  ) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons
          name={icon as any}
          size={18}
          color={theme.colors.text.primary}
          style={{ marginRight: 6 }}
        />
        <Typography
          variant="subtitle1"
          style={[styles.sectionTitle, { color: theme.colors.text.primary }]}
        >
          {title}
        </Typography>
      </View>
      <View style={styles.settingItem}>
        <View style={{ flex: 1 }}>
          <Typography
            variant="body2"
            color="secondary"
            style={{ fontSize: 13 }}
          >
            {description}
          </Typography>
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{
            false: theme.colors.divider,
            true: theme.colors.primary.main,
          }}
          thumbColor={theme.colors.background.paper}
        />
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { borderRadius: 16, overflow: 'hidden' }]}>
      <TouchableOpacity
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.background.paper,
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
            'Ẩn các thông tin phụ để tập trung vào nấu ăn',
            focusMode,
            toggleFocusMode,
            'eye-outline'
          )}
          {renderSettingItem(
            'Hiển thị số liệu',
            'Hiển thị thông tin chi tiết về thời gian và khối lượng',
            focusMode,
            toggleFocusMode,
            'stats-chart-outline'
          )}
          {renderSettingItem(
            'Thông báo',
            'Nhận thông báo về công thức mới và cập nhật',
            focusMode,
            toggleFocusMode,
            'notifications-outline'
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
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
});
