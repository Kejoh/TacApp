import React from 'react'
import { HomePage } from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MiAppScreen } from '../screens/MiAppScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
 return (
    <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="Home" component={HomePage} options={{
          headerStyle: {
            backgroundColor: '#c31d6a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="MiApp" component={MiAppScreen} options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
  );
}
