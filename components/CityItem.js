import React from 'react';
import { View, Text, Button } from 'react-native';
import { removeCity } from '../services/DatabaseService';

function CityItem({ city, onDelete }) {
  return (
    <View>
      <Text>{city.name}</Text>
      <Button title="Delete" onPress={() => {
        removeCity(city.id);
        onDelete(city.id);
      }} />
    </View>
  );
}

export default CityItem;
