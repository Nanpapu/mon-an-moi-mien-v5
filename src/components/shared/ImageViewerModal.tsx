import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { createStyles } from './ImageViewerModal.styles';
import { useTheme } from '../../theme/ThemeContext';

interface Props {
  visible: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageViewerModal = ({ visible, imageUrl, onClose }: Props) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.9)' }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={imageUrl || require('../../../assets/default-avatar.png')}
            style={styles.image}
            contentFit="contain"
            transition={200}
          />
        </View>
      </View>
    </Modal>
  );
};
