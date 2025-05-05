import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screen/SplashScreen/SplashScreen';
import Login from '../screen/Login/Login';
import SignUp from '../screen/SignUp/SignUp';
import WelcomeScreen from '../screen/WelcomeScreen';
import BoilerManuals from '../screen/BoilerManuals/BoilerManuals';
import JobsScreen from '../screen/JobsScreen/JobsScreen';
import CreateJobs from '../screen/CreateJobs/CreateJobs';
import Customers from '../screen/Customers/Customers';
import CustomersCreate from '../screen/CustomersCreate/CustomersCreate';
import Certificate from '../screen/Certificate/Certificate';
import InviteFriendScreen from '../screen/InviteFriendScreen/InviteFriendScreen';
import CP12Form from '../screen/CP12Form/CP12Form';
import AddApplianceScreen from '../screen/CP12Form/AddAppliance';
import CP14AddAppliance from '../screen/CP12Form/CP14AddAppliance';
import SelectItemScreen from '../screen/CP12Form/SelectItemScreen';
import SignatureScreen from '../screen/CP12Form/SignatureScreen';
import ServiceAddAppliance from '../screen/CP12Form/ServiceAddAppliance';
import GasBreakdownAddAppliance from '../screen/CP12Form/GasBreakdownAddAppliance';
import GasBoilerAddAppliance from '../screen/CP12Form/GasBoilerAddAppliance';
import Miscellaneous from '../screen/Miscellaneous'
import PowerflushChecklist from '../screen/Miscellaneous/PowerflushChecklist'

import BottomTabs from './BottomTabs'; // 👈 BottomTab imported

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="BoilerManuals" component={BoilerManuals} />
      <Stack.Screen name="JobsScreen" component={JobsScreen} />
      <Stack.Screen name="CreateJobs" component={CreateJobs} />
      <Stack.Screen name="Customers" component={Customers} />
      <Stack.Screen name="CustomersCreate" component={CustomersCreate} />
      <Stack.Screen name="Certificate" component={Certificate} />
      <Stack.Screen name="InviteFriendScreen" component={InviteFriendScreen} />
      <Stack.Screen name="CP12Form" component={CP12Form} />
      <Stack.Screen name="AddAppliance" component={AddApplianceScreen} />
      <Stack.Screen name="CP14AddAppliance" component={CP14AddAppliance} />
      <Stack.Screen name="SelectItem" component={SelectItemScreen} />
      <Stack.Screen name="SignatureScreen" component={SignatureScreen} />
      <Stack.Screen name="ServiceAddAppliance" component={ServiceAddAppliance} />
      <Stack.Screen name="GasBreakdownAddAppliance" component={GasBreakdownAddAppliance} />
      <Stack.Screen name="GasBoilerAddAppliance" component={GasBoilerAddAppliance} />
      <Stack.Screen name="Miscellaneous" component={Miscellaneous} />
      <Stack.Screen name="PowerflushChecklist" component={PowerflushChecklist} />

      {/* Dashboard shows BottomTabs */}
      <Stack.Screen name="Dashboard" component={BottomTabs} />
    </Stack.Navigator>
  );
}
