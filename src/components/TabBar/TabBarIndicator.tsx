import { useWindowDimensions } from 'react-native';
import Animated, { AnimatedStyle } from 'react-native-reanimated';
import createStyles from '../../utils/createStyles';
import { tabBarItemActiveColor } from '../../styles';

const useStyles = createStyles({
  tabItem: ({}, width: number, height: number = 2, color: string) => ({
    position: 'absolute',
    top: -2,
    width,
    height,
    backgroundColor: color,
  }),
});

type TabBarIndicatorProps = {
  tabCount: number;
  height?: number;
  color?: string;
  animatedStyle?: AnimatedStyle;
};

export const TabBarIndicator = ({
  tabCount,
  height,
  color = tabBarItemActiveColor,
  animatedStyle,
}: TabBarIndicatorProps) => {
  const { styles } = useStyles();
  const { width: screenWidth } = useWindowDimensions();
  const tabWidth = screenWidth / tabCount;

  return (
    <Animated.View
      style={[styles.tabItem(tabWidth, height, color), animatedStyle]}
    />
  );
};
