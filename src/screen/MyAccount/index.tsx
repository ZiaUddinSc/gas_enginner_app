import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {
  ArrowLeft,
  Edit,
  User,
  Mail,
  Key,
  IdCard,
  Hash,
  Signature,
  User2,
  BadgePoundSterling,
  ReceiptPoundSterling,
} from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect,useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const MyAccount = ({navigation}) => {
  const [showOilPopup, setShowOilPopup] = useState(false);
  const [showInstallerPopup, setShowInstallerPopup] = useState(false);
  const [oilNumber, setOilNumber] = useState('N/A');
  const [installerNumber, setInstallerNumber] = useState('N/A');
  const [signatureImage, setSignatureImage] = useState(null);
  const route = useRoute();

  // Mock user data
  const user = {
    name: 'Bhuiyan Sakib',
    email: 'sakibbhuiyan@yahoo.com',
    gasSafeId: '654321',
    paymentMethod: 'Mastercard ....4444',
    expiry: 'December 2026',
    subscription: 'Monthly Subscription (£8.99)',
    lastPayment: '12th May, 2025 - 12th June, 2025',
  };

  const handleUpdateOilNumber = () => {
    setShowOilPopup(false);
    // Here you would typically call an API to update the value
  };

  const handleUpdateInstallerNumber = () => {
    setShowInstallerPopup(false);
    // Here you would typically call an API to update the value
  };

  useFocusEffect(
    useCallback(() => {
      
      if (route.params?.signature) {
        setSignatureImage(route.params.signature);
      }
    }, [route.params?.signature])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomHeader
        fontSize={hp(2.2)}
          title="My Account"
          leftIcon={<ArrowLeft size={24} color="white" />}
          onLeftPress={() => navigation.goBack()}
        />

        <ScrollView contentContainerStyle={styles.content}>
          {/* Personal Info Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Info</Text>
            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <User size={17} color="#0d9488" />
                <Text style={styles.label}>Name:</Text>
              </View>
              <Text style={styles.value}>{user.name}</Text>
            </View>
          </View>

          {/* Account Details Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Details</Text>

            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <Mail size={17} color="#0d9488" />
                <Text style={styles.label}>Email</Text>
              </View>
              <Text style={styles.value}>{user.email}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <Key size={17} color="#0d9488" />
                <Text style={styles.label}>Password</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.linkText}>Change password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <IdCard size={17} color="#0d9488" />
                <Text style={styles.label}>Gas Safe ID Card</Text>
              </View>
              <Text style={styles.value}>{user.gasSafeId}</Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <Hash size={17} color="#0d9488" />
                <Text style={styles.label}>Oil Registration Number</Text>
              </View>
              <TouchableOpacity onPress={() => setShowOilPopup(true)}>
                <Text
                  style={oilNumber === 'N/A' ? styles.naText : styles.value}>
                  {oilNumber}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <Hash size={17} color="#0d9488" />
                <Text style={styles.label}>Installer Ref Number</Text>
              </View>
              <TouchableOpacity onPress={() => setShowInstallerPopup(true)}>
                <Text
                  style={
                    installerNumber === 'N/A' ? styles.naText : styles.value
                  }>
                  {installerNumber}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Signature Section */}
          <View style={styles.section}>
            <View style={styles.iconView}>
              <Signature size={24} color="#0d9488" />
              <Text
                style={[
                  styles.sectionTitle,
                  {paddingBottom: 0, marginBottom: 0, paddingLeft: 5},
                ]}>
                Signature
              </Text>
            </View>
            <TouchableOpacity
              style={styles.signatureContainer}
              onPress={() => navigation.navigate('SignatureScreen', {returnTo: 'MyAccount',})}>
             {signatureImage ? (
                <Image
                  source={{uri: signatureImage}}
                  style={styles.signatureImage}
                />
              ) : (
                <View style={styles.addSignature}>
                  <Edit size={24} color="#555" />
                  <Text style={styles.addSignatureText}>Add Signature</Text>
                </View>
              )}
              
            </TouchableOpacity>
          </View>

          {/* Subscriptions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Subscriptions</Text>
            <View style={styles.infoRow}>
              <View style={styles.iconView}>
                <User size={17} color="#0d9488" />
                <Text style={styles.label}>{user.subscription}</Text>
              </View>
            </View>
            <View
              style={[
                styles.infoRow,
                {flexDirection: 'column', alignItems: 'flex-start'},
              ]}>
              <View style={styles.iconView}>
                <User2 size={17} color="#0d9488" />
                <Text style={styles.label}>Company Members</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('CompanyUsersScreen')}>
                <Text style={styles.linkText}>
                  Manage subscription policies
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Payments Section */}
          <View style={styles.section}>
            <View style={styles.iconView}>
              <BadgePoundSterling size={24} color="#0d9488" />
              <Text
                style={[
                  styles.sectionTitle,
                  {paddingBottom: 0, marginBottom: 0, paddingLeft: 5},
                ]}>
                Payments
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Payment Method</Text>
              <Image
                source={require('../../assets/icon/mastercard.png')}
                style={{height: 17, width: 30}}
                resizeMode="stretch"
              />
              <Text style={styles.value}>{user.paymentMethod}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Expires</Text>
              <Text style={styles.value}>{user.expiry}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Default</Text>
            </View>
            <View
              style={[
                styles.infoRow,
                {flexDirection: 'column', alignItems: 'flex-start'},
              ]}>
              <View style={styles.iconView}>
                <ReceiptPoundSterling size={24} color="#0d9488" />
                <Text
                  style={[
                    styles.sectionTitle,
                    {paddingBottom: 0, marginBottom: 0, paddingLeft: 5},
                  ]}>
                  Billing History
                </Text>
              </View>
              <Text style={styles.value}>{user.lastPayment}</Text>
            </View>
          </View>
        </ScrollView>

        {/* Oil Registration Number Popup */}
        {showOilPopup && (
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <Text style={styles.popupTitle}>
                Update Oil Registration Number
              </Text>
              <TextInput
                style={styles.popupInput}
                value={oilNumber === 'N/A' ? '' : oilNumber}
                onChangeText={setOilNumber}
                placeholder="Enter oil registration number"
              />
              <View style={styles.popupButtons}>
                <TouchableOpacity
                  style={styles.popupButton}
                  onPress={() => setShowOilPopup(false)}>
                  <Text style={styles.popupButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.popupButton, styles.popupButtonPrimary]}
                  onPress={handleUpdateOilNumber}>
                  <Text style={styles.popupButtonText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Installer Ref Number Popup */}
        {showInstallerPopup && (
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <Text style={styles.popupTitle}>Update Installer Ref Number</Text>
              <TextInput
                style={styles.popupInput}
                value={installerNumber === 'N/A' ? '' : installerNumber}
                onChangeText={setInstallerNumber}
                placeholder="Enter installer reference number"
              />
              <View style={styles.popupButtons}>
                <TouchableOpacity
                  style={styles.popupButton}
                  onPress={() => setShowInstallerPopup(false)}>
                  <Text style={styles.popupButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.popupButton, styles.popupButtonPrimary]}
                  onPress={handleUpdateInstallerNumber}>
                  <Text style={styles.popupButtonText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;
