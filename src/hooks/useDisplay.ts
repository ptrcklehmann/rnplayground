import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { viewportGapTablet, viewportGap as viewportGapPhone } from '../styles';

export type DisplayInfo = {
  isSmallScreen: boolean;
  isPhoneBigScreen: boolean;
  viewportGap: number;
  isTabletScreen: boolean;
  pagePaddingBottom: number;
};

const useDisplay = (): DisplayInfo => {
  const { width: viewportWidth, height: viewportHeight } =
    useWindowDimensions();

  const isSmallScreen = viewportWidth <= 360;
  const isPhoneBigScreen = viewportWidth >= 414;
  const isTabletScreen = viewportWidth >= 600 && viewportHeight >= 600;
  const viewportGap = isTabletScreen ? viewportGapTablet : viewportGapPhone;

  const pagePaddingBottom = 20;

  return useMemo(() => {
    return {
      isSmallScreen,
      isPhoneBigScreen,
      viewportGap,
      isTabletScreen,
      pagePaddingBottom,
    };
  }, [
    isSmallScreen,
    isPhoneBigScreen,
    isTabletScreen,
    viewportGap,
    pagePaddingBottom,
  ]);
};

export default useDisplay;
