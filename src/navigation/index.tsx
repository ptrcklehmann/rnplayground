import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { EmojiIcon, MenuIcon } from '../components/icons';
import { AnimatedBottomTabBar, TabBarBackground } from '../components/TabBar';
import { HomeScreen } from '../features/home/HomeScreen';
import { MenuScreen } from '../features/menu/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => (
  <AnimatedBottomTabBar {...props} />
);

const renderTabBarBackground = () => <TabBarBackground />;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarBackground: renderTabBarBackground,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: EmojiIcon,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: MenuIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
    return (
      <NavigationContainer
        onReady={() => {
          BootSplash.hide({ fade: true });
        }}
      >
        <TabNavigator />
      </NavigationContainer>
    );
};
