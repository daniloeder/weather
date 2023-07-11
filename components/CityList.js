import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import CityItem from './CityItem';
import { getCities } from '../services/DatabaseService';

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities(setCities);
  }, []);

  const handleDelete = (id) => {
    setCities(cities.filter(city => city.id !== id));
  };

  return (
    <View>
      {cities.map(city => (
        <CityItem key={city.id} city={city} onDelete={handleDelete} />
      ))}
    </View>
  );
}

export default CityList;
