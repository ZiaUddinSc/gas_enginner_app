import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import Miscellaneous from '../screen/Miscellaneous';
import PowerflushChecklist from '../screen/Miscellaneous/PowerflushChecklist';
import CompanyInformationForm from '../screen/CompanyInformationForm';
import MyAccount from '../screen/MyAccount'
import ProfileUpdate from '../screen/MyAccount/ProfileUpdate'
import CompanyUsersScreen from '../screen/CompanyUsersScreen'
import AddUserScreen from '../screen/AddUserScreen'
import CompanySettingsScreen from '../screen/CompanySettingsScreen'
import SubscriptionsInvoices from '../screen/SubscriptionsInvoices'
import CertificatesInvoicesNumbering from '../screen/CertificatesInvoicesNumbering'
import EmailTemplateScreen from '../screen/EmailTemplateScreen'
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right', // 👈 Slide animation added here
      }}>
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
      <Stack.Screen name="CompanyInformationForm" component={CompanyInformationForm} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="CompanyUsersScreen" component={CompanyUsersScreen} />
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      <Stack.Screen name="CompanySettingsScreen" component={CompanySettingsScreen} />
      <Stack.Screen name="SubscriptionsInvoices" component={SubscriptionsInvoices} />
      <Stack.Screen name="CertificatesInvoicesNumbering" component={CertificatesInvoicesNumbering} />
      <Stack.Screen name="EmailTemplateScreen" component={EmailTemplateScreen} />
      <Stack.Screen name="Dashboard" component={BottomTabs} />
    </Stack.Navigator>
  );
}
