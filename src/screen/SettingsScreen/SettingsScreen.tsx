// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import {
//   Building,
//   Users,
//   FileText,
//   Bell,
//   ArrowLeft,
// } from 'lucide-react-native';
// import {styles} from './styles';
// import CustomHeader from '../../components/CustomHeader/CustomHeader';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
// import * as Animatable from 'react-native-animatable';

// const settingsItems = [
//   {
//     icon: <Building color="#fff" size={28} />,
//     title: 'Company Setting',
//     description:
//       'Manage your registration numbers, business address, and company logo.',
//   },
//   {
//     icon: <Users color="#fff" size={28} />,
//     title: 'Manage Users',
//     description:
//       'Enable or disable users, and manage their login credentials and access permissions.',
//   },
//   {
//     icon: <FileText color="#fff" size={28} />,
//     title: 'Manage Invoice Details and Certificate Numbering',
//     description:
//       'Modify the information displayed on your invoices and control your certificate numbering.',
//   },
//   {
//     icon: <Bell color="#fff" size={28} />,
//     title: 'Service Reminders and Email Templates',
//     description:
//       'Customize your email templates and configure your reminder settings.',
//   },
// ];

// const SettingsScreen = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<any>>();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <CustomHeader
//         title="Setting"
//         leftIcon={<ArrowLeft size={24} color="white" />}
//         onLeftPress={() => navigation.goBack()}
//       />

//       <View style={styles.container}>
//         {/* Cards */}
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {settingsItems.map((item, index) => (
//             <Animatable.View
//               key={index}
//               animation="zoomIn"
//               delay={index * 300}
//               duration={600}
//               useNativeDriver>
//               <TouchableOpacity style={styles.card}>
//                 <View style={styles.iconWrapper}>{item.icon}</View>
//                 <Text style={styles.cardTitle}>{item.title}</Text>
//                 <Text style={styles.cardDescription}>{item.description}</Text>
//               </TouchableOpacity>
//             </Animatable.View>
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SettingsScreen;

import React from 'react';
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
const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <Image source={require('../../assets/headerimage.jpg')} style={styles.header}/>
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
      <Text style={[styles.infoTitle,{paddingLeft:wp(3),padding:5}]}>Manage</Text>
      <MenuItem
        icon={<User size={wp('5%')} color="#0d9488" />}
        title="My Account" onPrass={()=>navigation.navigate('MyAccount')}      />
      <MenuItem
        icon={<Users size={wp('5%')} color="#0d9488" />}
        title="Company Members" onPrass={()=>navigation.navigate('CompanyUsersScreen')}      />


<Text style={[styles.infoTitle,{paddingLeft:wp(3),padding:5}]}>Company</Text>
      <MenuItem
        icon={<Building size={wp('5%')} color="#0d9488" />}
        title="Company Settings" onPrass={()=>navigation.navigate('CompanySettingsScreen')}      />
      <MenuItem
        icon={<UserRoundCog size={wp('5%')} color="#0d9488" />}
        title="Subscriptions & Invoices" onPrass={()=>navigation.navigate('SubscriptionsInvoices')}      />

<Text style={[styles.infoTitle,{paddingLeft:wp(3),padding:5}]}>Form Settings</Text>
      <MenuItem
        icon={<BookText size={wp('5%')} color="#0d9488" />}
        title="Invoices & Certificates Numbering" onPrass={()=>navigation.navigate('CertificatesInvoicesNumbering')}      />
      <MenuItem
        icon={<BellRing size={wp('5%')} color="#0d9488" />}
        title="Service Reminders and Email Templates" onPrass={()=>navigation.navigate('EmailTemplateScreen')}      />
     
    </ScrollView>
  );
};

const MenuItem = ({icon, title,onPrass}: {icon: React.ReactNode; title: string;onPrass:any}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPrass}>
    <View style={styles.menuIcon}>{icon}</View>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

export default SettingsScreen;
