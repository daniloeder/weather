import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CityWeatherScreen from './screens/CityWeatherScreen';
import Favourites from './components/Favourites';
import { initDB } from './services/DatabaseService';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CityWeather" component={CityWeatherScreen} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
