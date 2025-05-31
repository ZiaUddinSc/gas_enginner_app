import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  User,
  Mail,
  Phone,
  CheckCircle2,
  MapPin,
  CreditCard,
  KeyRound,
  Clock,
  Camera,
  Trash2,
  User2Icon,
  User2,
  Users,
  Building,
  UserRoundCog,
  BookText,
  BellRing,
} from 'lucide-react-native';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
      console.log('User Info:', userInfo);
      setUserInfo(userInfo);
      // do something with userInfo here
    };

    fetchUserInfo();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/headerimage.jpg')}
          style={styles.header}
        />
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Camera size={wp('4.5%')} color="#1E90FF" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.infoTitle,{textAlign:'center'}]}>{userInfo?.name}</Text>
      {/* Info Card */}
      {/* <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <User size={wp('5%')} color="#000" />
          <Text style={styles.infoTitle}>Todd Christien</Text>
        </View>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Email: </Text>Toddchristien@sequ­r.io
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Mobile: </Text>9123456789
        </Text>
       
      </View> */}

      {/* Menu Items */}
      <Text style={[styles.infoTitle, {paddingLeft: wp(3), padding: 5}]}>
        Manage
      </Text>
      <MenuItem
        icon={<User size={wp('5%')} color="#0d9488" />}
        title="My Account"
        onPrass={() => navigation.navigate('MyAccount')}
      />
      <MenuItem
        icon={<Users size={wp('5%')} color="#0d9488" />}
        title="Company Members"
        onPrass={() => navigation.navigate('CompanyUsersScreen')}
      />

      <Text style={[styles.infoTitle, {paddingLeft: wp(3), padding: 5}]}>
        Company
      </Text>
      <MenuItem
        icon={<Building size={wp('5%')} color="#0d9488" />}
        title="Company Settings"
        onPrass={() => navigation.navigate('CompanySettingsScreen')}
      />
      <MenuItem
        icon={<UserRoundCog size={wp('5%')} color="#0d9488" />}
        title="Subscriptions & Invoices"
        onPrass={() => navigation.navigate('SubscriptionsInvoices')}
      />

      <Text style={[styles.infoTitle, {paddingLeft: wp(3), padding: 5}]}>
        Form Settings
      </Text>
      <MenuItem
        icon={<BookText size={wp('5%')} color="#0d9488" />}
        title="Invoices & Certificates Numbering"
        onPrass={() => navigation.navigate('CertificatesInvoicesNumbering')}
      />
      <MenuItem
        icon={<BellRing size={wp('5%')} color="#0d9488" />}
        title="Service Reminders and Email Templates"
        onPrass={() => navigation.navigate('EmailTemplateScreen')}
      />
    </ScrollView>
  );
};

const MenuItem = ({
  icon,
  title,
  onPrass,
}: {
  icon: React.ReactNode;
  title: string;
  onPrass: any;
}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPrass}>
    <View style={styles.menuIcon}>{icon}</View>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

export default SettingsScreen;
