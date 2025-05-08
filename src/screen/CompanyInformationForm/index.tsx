import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
  Switch,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
} from 'react-native';
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  AlertCircle,
  CheckCircle,
  MapPin,
  Phone,
  FileText,
  Check,
  X,
  ArrowLeft,
} from 'lucide-react-native';
import Svg, {Path} from 'react-native-svg';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Color from '../../theme/Colors';
import CustomInput from '../../components/CustomInput1/CustomInput';
import RadioButton from '../../components/RadioButton/RadioButton';
// Validation schema using Yup
const validationSchema = Yup.object().shape({
  organizationName: Yup.string().required('Organization name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  town: Yup.string().required('Town is required'),
  county: Yup.string().required('County is required'),
  postCode: Yup.string().required('Post Code is required'),
  gasSafeRegistrationNumber: Yup.string().required(
    'Gas Safe Registration Number is required',
  ),
  gasSafeIdCardNumber: Yup.string().required(
    'Gas Safe ID Card Number is required',
  ),
});

import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const CompanyInformationForm = ({navigation}) => {
  const [isVatRegistered, setIsVatRegistered] = useState(false);
  const [businessType, setBusinessType] = useState(null);
  const [signatureSvg, setSignatureSvg] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);

  const initialValues = {
    organizationName: '',
    phoneNumber: '',
    addresLookup: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    county: '',
    postCode: '',
    gasSafeRegistrationNumber: '',
    gasSafeIdCardNumber: '',
  };

  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    console.log({
      ...values,
      businessType,
      isVatRegistered,
      signature: signatureSvg,
    });

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setIsVatRegistered(false);
      setBusinessType(null);
      setSignatureSvg(null);
      alert('Form submitted successfully!');
    }, 2000);
  };

  const handlePermission = async type => {
    let permission;
    if (type === 'camera') {
      permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA;
    } else {
      permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    }

    const status = await check(permission);

    if (status === RESULTS.GRANTED) return true;

    const requestStatus = await request(permission);
    return requestStatus === RESULTS.GRANTED;
  };

  const showImagePickerOptions = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Take Photo', 'Choose from Library'],
          cancelButtonIndex: 0,
        },
        async buttonIndex => {
          if (buttonIndex === 1) await takePhoto();
          if (buttonIndex === 2) await pickImage();
        },
      );
    } else {
      Alert.alert('Upload Signature', 'Choose an option', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Take Photo', onPress: async () => await takePhoto()},
        {text: 'Choose from Library', onPress: async () => await pickImage()},
      ]);
    }
  };

  const takePhoto = async () => {
    const hasPermission = await handlePermission('camera');
    if (!hasPermission) return;

    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });

    handleImageResult(result);
  };

  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
      });

      if (result.didCancel) {
        console.log('User cancelled');
      } else if (result.errorCode) {
        console.log('Error code:', result.errorCode);
        console.log('Error message:', result.errorMessage);
      } else if (result.assets) {
        setSignatureImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Full error:', error);
    }
  };

  const handleImageResult = result => {
    if (result.didCancel) {
      console.log('User cancelled');
    } else if (result.errorCode) {
      Alert.alert('Error', 'Failed to get image');
    } else if (result.assets) {
      setSignatureImage(result.assets[0].uri);
      Alert.alert('Success', 'Signature added successfully');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <CustomHeader
          title="Company Information"
          leftIcon={<ArrowLeft size={24} color="white" />}
          onLeftPress={() => navigation.navigate('SignUp')}
        />
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({handleSubmit, isSubmitting}) => (
              <>
                <View style={styles.formContainer}>
                  <Text style={styles.sectionTitle}>Company Information</Text>

                  {/* Organization/Company Name */}
                  <CustomInput
                    label="Organization/Company Name *"
                    name="organizationName"
                    placeholder="Organization/Company Name"
                    icon={FileText}
                  />

                  {/* Phone Number */}
                  <CustomInput
                    label="Phone Number *"
                    name="phoneNumber"
                    placeholder="+44 123 456 7890"
                    keyboardType="phone-pad"
                    icon={Phone}
                  />

                  {/* Business Type */}
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Business Type *</Text>
                    <View style={styles.radioGroup}>
                      <RadioButton
                        label="Sole trader"
                        value="soleTrader"
                        selectedValue={businessType || ''}
                        onSelect={setBusinessType}
                      />
                      <RadioButton
                        label="Company"
                        value="company"
                        selectedValue={businessType || ''}
                        onSelect={setBusinessType}
                      />
                      <RadioButton
                        label="Other"
                        value="other"
                        selectedValue={businessType || ''}
                        onSelect={setBusinessType}
                      />
                    </View>
                    {!businessType && (
                      <View style={styles.errorContainer}>
                        <AlertCircle
                          size={16}
                          color="red"
                          style={styles.errorIcon}
                        />
                        <Text style={styles.errorText}>
                          Business Type is required
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.sectionTitle}>Contact Details</Text>

                  {/* addresLookup */}
                  <CustomInput
                    label="Address Lookup"
                    name="addresLookup"
                    placeholder="123 Main Street"
                  />
                  {/* Address Line 1 */}
                  <CustomInput
                    label="Address Line 1 *"
                    name="addressLine1"
                    placeholder="123 Main Street"
                  />

                  {/* Address Line 2 */}
                  <CustomInput
                    label="Address Line 2"
                    name="addressLine2"
                    placeholder="Apartment 123"
                    icon={MapPin}
                  />

                  {/* Town */}
                  <CustomInput
                    label="Town *"
                    name="town"
                    placeholder="London"
                    icon={MapPin}
                  />

                  {/* County */}
                  <CustomInput
                    label="County *"
                    name="county"
                    placeholder="London"
                    icon={MapPin}
                  />

                  {/* Post Code */}
                  <CustomInput
                    label="Post Code *"
                    name="postCode"
                    placeholder="SW1W 0NY"
                    icon={undefined}
                  />
                </View>
                <View style={[styles.formContainer, {marginBottom: hp(6)}]}>
                  <Text style={styles.sectionTitle}>Other Information</Text>

                  {/* Gas Safe Registration Number */}
                  <CustomInput
                    label="Gas Safe Registration Number *"
                    name="gasSafeRegistrationNumber"
                    placeholder="Gas Safe Registration Number"
                    icon={undefined}
                  />

                  {/* Gas Safe ID Card Number */}
                  <CustomInput
                    label="Gas Safe ID Card Number *"
                    name="gasSafeIdCardNumber"
                    placeholder="Gas Safe ID Card Number"
                    icon={undefined}
                  />

                  {/* VAT Registered */}
                  <View style={styles.switchContainer}>
                    <Switch
                      trackColor={{false: '#767577', true: '#81b0ff'}}
                      thumbColor={
                        isVatRegistered ? Color.primaryBGColor : '#f4f3f4'
                      }
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={setIsVatRegistered}
                      value={isVatRegistered}
                    />
                    <Text style={styles.switchLabel}>VAT Registered</Text>
                  </View>
                  {signatureImage && (
                    <Image
                      source={{uri: signatureImage}}
                      style={styles.previewImage}
                    />
                  )}
                  {/* Signature */}
                  <View style={styles.signatureContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('SignatureScreen')}>
                      <Text style={styles.buttonText}>Add Signature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={showImagePickerOptions}>
                      <Text style={styles.buttonText}>Upload Signature</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => handleSubmit()}
                    disabled={isSubmitting}>
                    <Text style={styles.submitButtonText}>
                      {isSubmitting ? 'Saving...' : 'Save and Exit'}
                    </Text>
                    {isSubmitting && (
                      <CheckCircle
                        style={styles.submitIcon}
                        color="#fff"
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompanyInformationForm;
