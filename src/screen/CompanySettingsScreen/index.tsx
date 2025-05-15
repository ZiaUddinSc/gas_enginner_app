import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Pencil,
  ArrowLeft,
  User,
  Briefcase,
  Hash,
  Phone,
  Globe,
  Type,
  Mail,
  MapPin,
  Calendar,
  Image as ImageIcon,
  PiggyBank,
  Vault,
  SwitchCamera,

} from 'lucide-react-native';
import Color from '../../theme/Colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { styles } from './styles';
const iconColor = '#009688';

const CompanySettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
         <CustomHeader
         fontSize={hp(2.2)}
        title="Company Settings"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />
    <View style={styles.container}>
     
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Company Information Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Company Information</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <User size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Name</Text>
            </View>
            <Text style={styles.value}>Sakib Compnay</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Briefcase
                size={wp('4%')}
                color={iconColor}
                style={styles.icon}
              />
              <Text style={styles.labelText}>Business Type</Text>
            </View>
            <Text style={styles.value}>Sole Trader</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Vault size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Vat Registered</Text>
            </View>
            <Text style={styles.value}>Not Registered for VAT</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <SwitchCamera
                size={wp('4%')}
                color={iconColor}
                style={styles.icon}
              />
              <Text style={styles.labelText}>
                Display company name on certificates?
              </Text>
            </View>
            <Text style={styles.value}>No</Text>
          </View>
        </View>

        {/* Registered Details Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Registered Details</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Hash size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Gas Safe Registration No</Text>
            </View>
            <Text style={styles.value}>654321</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <User size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Registration No</Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <User size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Registration Body For</Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <User size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>
                Registration Body For Legionella Risk Assessment
              </Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Hash size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>
                Registration No For Legionella Risk Assessment
              </Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contact Details</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Phone size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Phone Number</Text>
            </View>
            <Text style={styles.value}>07811928453</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Globe size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Company Website</Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Type size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Company Tagline</Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Mail size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Admin Email</Text>
            </View>
            <Text style={styles.value}>N/A</Text>
          </View>
        </View>

        {/* Company Address Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Company Address</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <MapPin size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Address</Text>
            </View>
            <Text style={styles.value}>
              31, Woodford Green, IG8 RHX, England, United Kingdom
            </Text>
          </View>
        </View>

        {/* Payment Term & Bank Details Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Term & Bank Details</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <PiggyBank
                size={wp('4%')}
                color={iconColor}
                style={styles.icon}
              />
              <Text style={styles.labelText}>Bank Details</Text>
            </View>
            <Text style={styles.value}>HSBC, B SAKIB, 400233, 71885649</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Calendar size={wp('4%')} color={iconColor} style={styles.icon} />
              <Text style={styles.labelText}>Payment Terms</Text>
            </View>
            <Text style={styles.value}>PAY WITHIN 30 DAYS</Text>
          </View>
        </View>

        {/* Company Logo Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Company Logo</Text>
            <TouchableOpacity style={styles.editButton}>
              <Pencil size={wp('5%')} color={Color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <ImageIcon
              size={wp('15%')}
              color={iconColor}
              style={{marginBottom: hp('1%')}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};



export default CompanySettingsScreen;
