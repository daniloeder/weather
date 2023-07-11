import React from 'react';
import { View, Button } from 'react-native';
import CityList from './CityList';

function Favourites({ navigation }) {
  return (
    <View>
      <CityList />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Favourites;
