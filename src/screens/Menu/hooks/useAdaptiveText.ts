import { useState, useEffect } from 'react';
import {
  LayoutChangeEvent,
  TextLayoutEventData,
  NativeSyntheticEvent,
} from 'react-native';

interface Props {
  text: string;
  maxLines: number;
  baseFontSize: number;
  minFontSize: number;
}

export const useAdaptiveText = ({
  text,
  maxLines,
  baseFontSize,
  minFontSize,
}: Props) => {
  const [fontSize, setFontSize] = useState(baseFontSize);
  const [measured, setMeasured] = useState(false);

  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (measured) return;

    const lines = e.nativeEvent.lines.length;
    if (lines > maxLines) {
      // Giảm font size theo tỷ lệ số dòng vượt quá
      const newSize = Math.max(minFontSize, baseFontSize - (lines - maxLines));
      setFontSize(newSize);
    }
    setMeasured(true);
  };

  // Reset khi text thay đổi
  useEffect(() => {
    setMeasured(false);
    setFontSize(baseFontSize);
  }, [text, baseFontSize]);

  return {
    fontSize,
    onTextLayout,
  };
};
