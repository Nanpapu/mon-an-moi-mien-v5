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

  return (
    <View style={[styles.container, { borderRadius: 16, overflow: 'hidden' }]}>
      <TouchableOpacity
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.background.paper,
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
            opacity: animatedHeight.interpolate({
              inputRange: [0, contentHeight.current],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        <View style={styles.content} onLayout={onLayout}>
          <View style={styles.settingItem}>
            <View style={{ flex: 1 }}>
              <Typography variant="subtitle1" style={{ marginBottom: 4 }}>
                Chế độ tập trung
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                style={{ fontSize: 12 }}
              >
                Ẩn thanh tiêu đề để tập trung vào nội dung
              </Typography>
            </View>
            <Switch
              value={focusMode}
              onValueChange={toggleFocusMode}
              trackColor={{
                false: theme.colors.divider,
                true: theme.colors.primary.main,
              }}
              thumbColor={theme.colors.background.paper}
            />
          </View>
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
