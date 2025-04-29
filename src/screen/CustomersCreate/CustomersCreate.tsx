import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Dropdown } from 'react-native-element-dropdown';
import {
    Home,
    Save,
    X,
    ArrowLeft,
    PlusCircle,
  } from 'lucide-react-native';
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import styles from './styles'; // Assuming you have a styles.ts file
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';


const titleData = [
  { label: 'Mr.', value: 'mr' },
  { label: 'Ms.', value: 'ms' },
  { label: 'Mrs.', value: 'mrs' },
  { label: 'Dr.', value: 'dr' },
];

const CustomersCreate = ({ handleFormSubmit }) => {
const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const validationSchema = Yup.object().shape({
    title: Yup.string().notRequired(),
    fullName: Yup.string().required('Full Name is required'),
    companyName: Yup.string().notRequired(),
    vatNo: Yup.string().notRequired(),
    addressLine1: Yup.string().notRequired(),
    addressLine2: Yup.string().notRequired(),
    townCity: Yup.string().notRequired(),
    countyState: Yup.string().notRequired(),
    postCode: Yup.string().notRequired(),
    mobile: Yup.string().notRequired(),
    phone: Yup.string().notRequired(),
    fax: Yup.string().notRequired(),
    email: Yup.string().email('Invalid email').notRequired(),
    other_email: Yup.string().email('Invalid email').notRequired(),
    note: Yup.string().notRequired(),
    automaticRevenue: Yup.boolean().required('Automatic Revenue is required'),

  });

  return (
    <SafeAreaView style={styles.safeArea}>
         <CustomHeader
        title="New Customer"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
       

        <Formik
          initialValues={{
            title: '',
            fullName: '',
            companyName: '',
            vatNo: '',
            addressLine1: '',
            addressLine2: '',
            townCity: '',
            countyState: '',
            postCode: '',
            mobile: '',
            phone: '',
            email: '',
            other_email: '',
            note: '',
            automaticRevenue: false,
          }}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={styles.formContainer}>
              <Text style={styles.sectionTitle}>Personal Information</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Title</Text>
                <Dropdown
                  style={styles.dropdown}
                  data={titleData}
                  labelField="label"
                  valueField="value"
                  placeholder="-"
                  value={values.title}
                  onChange={item => setFieldValue('title', item.value)}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name <Text style={styles.required}>*</Text></Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Full Name"
                  placeholderTextColor='black'
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                />
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Company Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Company Name"
                  placeholderTextColor='black'
                  value={values.companyName}
                  onChangeText={handleChange('companyName')}
                  onBlur={handleBlur('companyName')}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>VAT No</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter VAT No"
                  placeholderTextColor='black'
                  value={values.vatNo}
                  onChangeText={handleChange('vatNo')}
                  onBlur={handleBlur('vatNo')}
                />
              </View>

              <Text style={styles.sectionTitle}>Address</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Address Line 1</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Address Line 1"
                  placeholderTextColor='black'
                  value={values.addressLine1}
                  onChangeText={handleChange('addressLine1')}
                  onBlur={handleBlur('addressLine1')}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Address Line 2</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Address Line 2 (Optional)"
                  placeholderTextColor='black'
                  value={values.addressLine2}
                  onChangeText={handleChange('addressLine2')}
                  onBlur={handleBlur('addressLine2')}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Town/City</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Town/City"
                  placeholderTextColor='black'
                  value={values.townCity}
                  onChangeText={handleChange('townCity')}
                  onBlur={handleBlur('townCity')}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>County/State</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter County/State"
                  placeholderTextColor='black'
                  value={values.countyState}
                  onChangeText={handleChange('countyState')}
                  onBlur={handleBlur('countyState')}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Post Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Post Code"
                  placeholderTextColor='black'
                  value={values.postCode}
                  onChangeText={handleChange('postCode')}
                  onBlur={handleBlur('postCode')}
                />
              </View>

              <Text style={styles.sectionTitle}>Contact Information</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Mobile</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Mobile No."
                  placeholderTextColor='black'
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Phone</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Phone No."
                  placeholderTextColor='black'
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  keyboardType="phone-pad"
                />
              </View>
          
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email Address"
                  placeholderTextColor='black'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Other Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Other Email Address"
                  placeholderTextColor='black'
                  value={values.other_email}
                  onChangeText={handleChange('other_email')}
                  onBlur={handleBlur('other_email')}
                  keyboardType='email-address'
                />
                {errors.other_email && touched.other_email && (
                  <Text style={styles.errorText}>{errors.other_email}</Text>
                )}
              </View>

              <Text style={styles.sectionTitle}>Note</Text>
              <View style={styles.inputGroup}>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Enter Note (Optional)"
                  placeholderTextColor='black'
                  multiline
                  numberOfLines={4}
                  value={values.note}
                  onChangeText={handleChange('note')}
                  onBlur={handleBlur('note')}
                />
              </View>

              {/* Automatic Revenue? Switch */}
              <View style={styles.switchContainer}>
                <Text style={styles.label}>Automatic Revenue?</Text>
                <Switch
                  value={values.automaticRevenue}
                  onValueChange={(newValue) => setFieldValue('automaticRevenue', newValue)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={values.automaticRevenue ? '#f4f3f4' : '#f4f3f4'}
                />
             
              </View>

              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.saveButtonText}>Save Customer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => {
                      /* Implement cancel logic */
                    }}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};


export default CustomersCreate;