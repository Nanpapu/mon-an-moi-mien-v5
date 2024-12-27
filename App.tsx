// Root component của ứng dụng

// Cấu hình navigation và các providers
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Keyboard, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedStatusBar } from './src/components/shared/ThemedStatusBar';
import { useTheme } from './src/theme/ThemeContext';

import MapScreen from './src/screens/Map';
import MenuScreen from './src/screens/Menu';
import ProfileScreen from './src/screens/Profile';
import { RecipeProvider } from './src/context/RecipeContext';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { ThemeProvider } from './src/theme/ThemeContext';
import { ToastProvider } from './src/context/ToastContext';
import { DisplayProvider } from './src/context/DisplayContext';
import { AppBar } from './src/components/shared/AppBar';
import { RootSiblingParent } from 'react-native-root-siblings';
import { ImageCacheService } from './src/services/imageCacheService';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { SyncQueueService } from './src/services/syncQueueService';
import { MapStyleProvider } from './src/context/MapStyleContext';
import { SplashScreen } from './src/components/SplashScreen';

// Khởi tạo Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await ImageCacheService.initialize();
      } catch (error) {
        console.error('Lỗi khởi tạo image cache:', error);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  useEffect(() => {
    // Xử lý sync khi có internet
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        SyncQueueService.processQueue();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <ThemeProvider>
          <DisplayProvider>
            <MapStyleProvider>
              <ToastProvider>
                <ThemedStatusBar />
                {isLoading ? (
                  <SplashScreen
                    onAnimationComplete={() => setIsLoading(false)}
                  />
                ) : (
                  <AuthProvider>
                    <RecipeProvider>
                      <NavigationContainer>
                        <Tab.Navigator
                          screenOptions={({ route }) => {
                            const { theme } = useTheme();
                            const { user } = useAuth();

                            return {
                              header: () => {
                                if (!user) return null;
                                return <AppBar title={route.name} />;
                              },
                              tabBarStyle: {
                                height: 60,
                                paddingBottom: 5,
                                backgroundColor: theme.colors.background.paper,
                                borderTopColor: theme.colors.divider,
                                display: isKeyboardVisible ? 'none' : 'flex',
                              },
                              tabBarIcon: ({ focused, size }) => {
                                let iconName: keyof typeof Ionicons.glyphMap;
                                if (route.name === 'Bản đồ') {
                                  iconName = focused ? 'map' : 'map-outline';
                                } else if (route.name === 'Menu') {
                                  iconName = focused ? 'book' : 'book-outline';
                                } else {
                                  iconName = focused
                                    ? 'person'
                                    : 'person-outline';
                                }
                                return (
                                  <Animated.View
                                    style={{
                                      transform: [{ scale: focused ? 1.2 : 1 }],
                                    }}
                                  >
                                    <Ionicons
                                      name={iconName}
                                      size={size}
                                      color={theme.colors.primary.main}
                                    />
                                  </Animated.View>
                                );
                              },
                              tabBarActiveTintColor: theme.colors.primary.main,
                              tabBarInactiveTintColor:
                                theme.colors.text.secondary,
                              headerStyle: {
                                backgroundColor: theme.colors.background.paper,
                              },
                              headerTintColor: theme.colors.text.primary,
                            };
                          }}
                        >
                          <Tab.Screen name="Bản đồ" component={MapScreen} />
                          <Tab.Screen name="Menu" component={MenuScreen} />
                          <Tab.Screen
                            name="Cá nhân"
                            component={ProfileScreen}
                          />
                        </Tab.Navigator>
                      </NavigationContainer>
                    </RecipeProvider>
                  </AuthProvider>
                )}
              </ToastProvider>
            </MapStyleProvider>
          </DisplayProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
