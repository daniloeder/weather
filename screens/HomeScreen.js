import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import * as Location from 'expo-location';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../services/WeatherService';
import { addCity } from '../services/DatabaseService';

function HomeScreen({ navigation }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const data = await fetchWeatherData(location.coords.latitude, location.coords.longitude);
      setWeatherData(data);
    })();
  }, []);

  const fetchWeather = async (cityName) => {
    const data = await fetchWeatherData(cityName);
    addCity(cityName);
    setWeatherData(data);
  };

  return (
    <View>
      <SearchBar onSubmit={fetchWeather} />
      {weatherData && <WeatherCard data={weatherData} />}
      <Button title="Favourites" onPress={() => navigation.navigate('Favourites')} />
    </View>
  );
}

export default HomeScreen;
