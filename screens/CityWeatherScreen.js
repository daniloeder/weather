import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../services/WeatherService';

function CityWeatherScreen({ route, navigation }) {
  const { cityName } = route.params;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
    })();
  }, [cityName]);

  return (
    <View>
      {weatherData && <WeatherCard data={weatherData} />}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CityWeatherScreen;
