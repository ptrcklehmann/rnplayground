import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAVE_SCREEN_PADDING_TOP } from '../constants';

export const useSaveScreenTopGap = (): number => {
  const safeAreaInsets = useSafeAreaInsets();
  return SAVE_SCREEN_PADDING_TOP + safeAreaInsets.top;
};
