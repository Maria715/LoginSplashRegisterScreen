import React from 'react';

//Import all required component
import {View, Text} from 'react-native';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Text style={{fontSize: 23, marginTop: 10}}>DashBoard</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>Welcome!</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>Lets Start</Text>
    </View>
  );
};
export default HomeScreen;
