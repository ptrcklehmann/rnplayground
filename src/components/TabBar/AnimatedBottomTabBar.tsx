import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useWindowDimensions, View } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { palette, tabBarItemActiveColor } from '../../styles';
import createStyles from '../../utils/createStyles';
import { TabBarIndicator } from './TabBarIndicator';
import { TabBarItem } from './TabBarItem';

const useStyles = createStyles({
  container: {
    borderTopWidth: 2,
    borderTopColor: palette.grayscale02,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOpacity: 0.125,
    shadowRadius: 20,
    elevation: 8,
  },
  tabContainer: {
    flexDirection: 'row',
  },
});

export const AnimatedBottomTabBar = ({
  state,
  navigation,
}: BottomTabBarProps) => {
  const { styles } = useStyles();
  const { width: screenWidth } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { routeNames } = state;
  const selectedTab = state.index;
  const tabCount = routeNames.length;
  const tabWidth = screenWidth / tabCount;

  // Helper function to get display name for route
  const getRouteDisplayName = (routeName: string): string => {
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Menu':
        return 'Menu';
      default:
        return routeName;
    }
  };

  // Animated style for the indicator
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(tabWidth * selectedTab, { duration: 250 }) },
    ],
  }));

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <TabBarIndicator
        tabCount={tabCount}
        animatedStyle={animatedStyle}
        height={2}
        color={tabBarItemActiveColor}
      />
      <View style={styles.tabContainer}>
        {routeNames.map((routeName, index) => {
          const isSelected = selectedTab === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: state.routes[index].key,
              canPreventDefault: true,
            });

            if (!isSelected && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          };

          return (
            <TabBarItem
              key={routeName}
              title={getRouteDisplayName(routeName)}
              isSelected={isSelected}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};
