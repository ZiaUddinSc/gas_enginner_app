import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Dropdown} from 'react-native-element-dropdown';
import {
  Home,
  Save,
  X,
  ArrowLeft,
  LogOut,
  PlusCircle,
} from 'lucide-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles'; // Assuming you have a styles.ts file
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';

const priorityData = [
  {label: 'Please Select', value: ''},
  {label: 'High', value: 'high'},
  {label: 'Medium', value: 'medium'},
  {label: 'Low', value: 'low'},
];

const statusData = [
  {label: 'Please Select', value: ''},
  {label: 'Open', value: 'open'},
  {label: 'In Progress', value: 'in_progress'},
  {label: 'On Hold', value: 'on_hold'},
  {label: 'Closed', value: 'closed'},
];

const validationSchema = Yup.object().shape({
  customer: Yup.string().required('Customer is required'),
  jobAddress: Yup.string().required('Job Address is required'),
  jobDescriptionShort: Yup.string(),
  jobDetails: Yup.string(),
  estimatedJobValue: Yup.number().notRequired(),
  priority: Yup.string().notRequired(),
  jobStatus: Yup.string().notRequired(),
  jobRefNo: Yup.string().notRequired(),
  appointmentDate: Yup.string().notRequired(),
});

const CreateJobs = ({handleFormSubmit}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [noResults, setNoResults] = useState<any>(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="New Job"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Job Details</Text>
          <Formik
            initialValues={{
              customer: '',
              jobAddress: '',
              jobDescriptionShort: '',
              jobDetails: '',
              estimatedJobValue: '',
              priority: '',
              jobStatus: '',
              jobRefNo: '',
              appointmentDate: '',
            }}
            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    Customer <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Search Customer..."
                    value={values.customer}
                    onChangeText={handleChange('customer')}
                    onBlur={handleBlur('customer')}
                    onFocus={() => {
                      setNoResults(true);
                      // need customer search logic
                      // Show "No Result" and "Add Customer" based on search results
                    }}
                  />
                  {/* Conditionally render this section based on customer search results. */}
                  {noResults && (
                    <View style={styles.noResultContainer}>
                      <Text style={styles.noResultText}>No Result</Text>
                      <TouchableOpacity
                        style={styles.addCustomerButton}
                        onPress={() => {}}>
                        <PlusCircle size={wp(5)} color="#fff" />
                        <Text style={styles.addCustomerButtonText}>
                          Add Customer
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {errors.customer && touched.customer && (
                    <Text style={styles.errorText}>{errors.customer}</Text>
                  )}
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    Job Address <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Search Address..."
                    value={values.jobAddress}
                    onChangeText={handleChange('jobAddress')}
                    onBlur={handleBlur('jobAddress')}
                  />
                  {errors.jobAddress && touched.jobAddress && (
                    <Text style={styles.errorText}>{errors.jobAddress}</Text>
                  )}
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Job description</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Short Description"
                    value={values.jobDescriptionShort}
                    onChangeText={handleChange('jobDescriptionShort')}
                    onBlur={handleBlur('jobDescriptionShort')}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Job Details</Text>
                  <TextInput
                    style={[styles.input, styles.multilineInput]}
                    placeholder="Details..."
                    multiline
                    numberOfLines={4}
                    value={values.jobDetails}
                    onChangeText={handleChange('jobDetails')}
                    onBlur={handleBlur('jobDetails')}
                  />
                </View>

                <View style={[styles.inputGroup, {marginTop: hp(4)}]}>
                  <Text style={styles.label}>
                    Estimated Job Value (Excluding VAT)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Please Enter Value"
                    value={values.estimatedJobValue}
                    onChangeText={handleChange('estimatedJobValue')}
                    onBlur={handleBlur('estimatedJobValue')}
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Priority</Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={priorityData}
                    labelField="label"
                    valueField="value"
                    placeholder="Please Select"
                    value={values.priority}
                    onChange={item => setFieldValue('priority', item.value)}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Job Status</Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={statusData}
                    labelField="label"
                    valueField="value"
                    placeholder="Please Select"
                    value={values.jobStatus}
                    onChange={item => setFieldValue('jobStatus', item.value)}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Job Ref No</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Reference No"
                    value={values.jobRefNo}
                    onChangeText={handleChange('jobRefNo')}
                    onBlur={handleBlur('jobRefNo')}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Appointment Date</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Select Date"
                    value={values.appointmentDate}
                    onChangeText={handleChange('appointmentDate')}
                    onBlur={handleBlur('appointmentDate')}
                    // You might want to use a DatePicker component here
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.saveButtonText}>Save Job</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => {
                      /* Implement cancel logic */
                    }}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateJobs;
