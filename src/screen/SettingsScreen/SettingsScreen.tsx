import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Building,
  Users,
  FileText,
  Bell,
  ArrowLeft,
} from 'lucide-react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const settingsItems = [
  {
    icon: <Building color="#fff" size={28} />,
    title: 'Company Setting',
    description:
      'Manage your registration numbers, business address, and company logo.',
  },
  {
    icon: <Users color="#fff" size={28} />,
    title: 'Manage Users',
    description:
      'Enable or disable users, and manage their login credentials and access permissions.',
  },
  {
    icon: <FileText color="#fff" size={28} />,
    title: 'Manage Invoice Details and Certificate Numbering',
    description:
      'Modify the information displayed on your invoices and control your certificate numbering.',
  },
  {
    icon: <Bell color="#fff" size={28} />,
    title: 'Service Reminders and Email Templates',
    description:
      'Customize your email templates and configure your reminder settings.',
  },
];

const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <CustomHeader
        title="Setting"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        {/* Cards */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {settingsItems.map((item, index) => (
            <Animatable.View
              key={index}
              animation="zoomIn"
              delay={index * 300}
              duration={600}
              useNativeDriver>
              <TouchableOpacity style={styles.card}>
                <View style={styles.iconWrapper}>{item.icon}</View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
