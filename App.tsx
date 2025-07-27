import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/features/home/HomeScreen';
import { MenuScreen } from './src/features/menu/MenuScreen';
import { AnimatedBottomTabBar } from './src/components/TabBar';
import { TabBarBackground } from './src/components/TabBar/TabBarBackground';
import { MenuIcon } from './src/components/icons';
import { PlaygroundIcon } from './src/components/icons';

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
        tabBarStyle: {
          position: 'absolute',
        },
        tabBarBackground: renderTabBarBackground,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: PlaygroundIcon,
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

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
