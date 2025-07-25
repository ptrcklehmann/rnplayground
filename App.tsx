import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/features/home/HomeScreen';
import { MenuScreen } from './src/features/menu/MenuScreen';
import { AnimatedBottomTabBar } from './src/components/TabBar';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: any) => <AnimatedBottomTabBar {...props} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
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
