import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import Login from '../screen/Login/Login';
import SignUp from '../screen/SignUp/SignUp';
import Dashboard from '../screen/Dashboard';
import WelcomeScreen from '../screen/WelcomeScreen';
import GasRateCalculator from '../screen/GasRateCalculator';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Calculator" component={GasRateCalculator} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
