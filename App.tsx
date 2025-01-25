import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CardList } from 'components/ui/card-list';
import { GameCard } from 'components/ui/game-card';
import { UIText } from 'components/ui/text';
import { StatusBar } from 'expo-status-bar';

import './global.css';

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cards"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <UIText size="body2">{iconName}</UIText>;
          },
          sceneStyle: {
            display: 'flex',
            justifyContent: 'center',
            margin: '100px',
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Stack.Screen name="Cards" component={GameCard} />
        <Stack.Screen name="Cards2" component={CardList} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
