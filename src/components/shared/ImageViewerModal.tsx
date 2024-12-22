import React, { useEffect } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Theme, useTheme } from '../../theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  visible: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageViewerModal = ({ visible, imageUrl, onClose }: Props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);

  useEffect(() => {
    if (visible) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          onClose();
          return true;
        }
      );

      return () => backHandler.remove();
    }
  }, [visible, onClose]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Nút đóng */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Component ImageZoom cho phép zoom và pan */}
        <View style={styles.imageContainer}>
          {imageUrl && (
            <ImageViewer
              imageUrls={[{ url: imageUrl }]}
              backgroundColor="transparent"
              saveToLocalByLongPress={false}
              // enableImageZoom={true}
              style={styles.image}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (theme: Theme, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: insets.top + theme.spacing.md,
      right: theme.spacing.md,
      zIndex: 1,
      padding: theme.spacing.sm,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: theme.spacing.lg,
    },
    imageContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
