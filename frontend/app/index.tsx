import { Stack } from 'expo-router';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp'; 
import Explore from './(tabs)/Explore'; // Ensure this is imported correctly

export type RootStackParamList = {
  SignUp:undefined,
  Login:undefined
 };
const Index = () => {


 
 const Stack=createNativeStackNavigator<RootStackParamList>();

 return (
  <Stack.Navigator
    initialRouteName="SignUp"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />   
     <Stack.Screen name="Explore" component={Explore} />

  </Stack.Navigator>
);
};

export default Index;
