import { useWindowDimensions } from 'react-native';
import Animated, { AnimatedStyle } from 'react-native-reanimated';
import createStyles from '../../utils/createStyles';

interface TabBarIndicatorProps {
  tabCount: number;
  height?: number;
  color?: string;
  animatedStyle?: AnimatedStyle;
}

const useStyles = createStyles({
  tabItem: ({}, width: number, height: number = 4, color: string) => ({
    position: 'absolute',
    top: 0,
    width,
    height,
    backgroundColor: color,
  }),
});

export const TabBarIndicator: React.FC<TabBarIndicatorProps> = ({
  tabCount,
  height,
  color = '#04d226',
  animatedStyle,
}) => {
  const { styles } = useStyles();
  const { width: screenWidth } = useWindowDimensions();
  const tabWidth = screenWidth / tabCount;

  return (
    <Animated.View
      style={[styles.tabItem(tabWidth, height, color), animatedStyle]}
    />
  );
};
