import React from 'react';
import { SignupScreen } from '../screens/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Home" component={HomeScreen} />
      </>}
    </Stack.Navigator>
  );
};
