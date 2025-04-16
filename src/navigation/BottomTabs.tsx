import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GasRateCalculator from '../screen/GasRateCalculator';
import SettingsScreen from '../screen/SettingsScreen/SettingsScreen';

import HomeScreen from '../screen/Home/Home';
import CalendarScreen from '../screen/CalendarScreen/CalendarScreen';
import { Home, Calendar, Calculator, Settings, Plus } from 'lucide-react-native';
import {TouchableOpacity, View,StyleSheet} from 'react-native';
import Color from '../theme/Colors.js';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') return <Home color={focused ? Color.primaryBGColor : '#9ca3af'} size={24} />;
          if (route.name === 'Calendar') return <Calendar color={focused ? Color.primaryBGColor : '#9ca3af'} size={24} />;
          if (route.name === 'Calculator') return <Calculator color={focused ? Color.primaryBGColor : '#9ca3af'} size={24} />;
          if (route.name === 'Settings') return <Settings color={focused ? Color.primaryBGColor : '#9ca3af'} size={24} />;
          return null;
        },
        tabBarActiveTintColor: Color.primaryBGColor,   // Active label and icon color
    tabBarInactiveTintColor: '#9ca3af',            // Inactive label and icon color
    tabBarLabelStyle: {
      fontSize: 12,
    },
       
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calculator" component={GasRateCalculator} />
      <Tab.Screen
        name="Plus"
        component={View} // Placeholder for now
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={styles.plusButton}>
              <Plus color={'white'} size={26} />
            </TouchableOpacity>
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            // Future action here
          },
        }}
      />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;


const styles = StyleSheet.create({
    plusButton: {
      backgroundColor: Color.primaryBGColor,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  