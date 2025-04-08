import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LogoSvg from '../../components/LogoSvg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {EyeIcon, EyeClosed, EyeOff,ArrowLeft} from 'lucide-react-native';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import IconButton from '../../components/IconButton';

import Icons from '../../theme/Icon';

export default function Index() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [agree, setAgree] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);

  //Form Validation Using Formik nad Yum
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    full_name: Yup.string()
      .email('Please enter Full Name')
      .required('The full name field is required.')
      .label('Full Name'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('The email field is required.')
      .label('Email'),
    password: Yup.string()
      .required('The password field is required.')
      .label('Password'),
    password_confirmation: Yup.string()
      .required('The Password Confirmation field is required.')
      .label('Password Confirmation'),
  });
  //Check box Toggling

  const checkBoxChanged = () => {
    setAgree(!agree);
  };
  const handleFormSubmit = (values: any) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <>
    <CustomHeader
        title=""
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.navigate("WelcomeScreen")}   />
    <View style={styles.container}>
      <View style={styles.loginBody}>
       
         
          <View>
            <Text style={styles.textHeader}>Sign Up</Text>
          </View>
          <View style={styles.signupSection}>
            <Text style={styles.dontAcountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.singUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{
              full_name: '',
              email: '',
              password: '',
              password_confirmation: '',
            }}
            onSubmit={values => handleFormSubmit(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Text style={styles.inputLabel}>Full Name*</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="David Peterson"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={handleChange('full_name')}
                    onBlur={handleBlur('full_name')}
                    value={values.full_name}
                  />
                </View>
                {errors.full_name && touched.full_name && (
                  <Text style={styles.errorMessage}>{errors.full_name}</Text>
                )}
                <Text style={styles.inputLabel}>Email*</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="x@y.Z"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
                <Text style={styles.inputLabel}>Password*</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="************"
                    placeholderTextColor="#AFAFAF"
                    secureTextEntry={hidePass}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 20,
                    }}
                    onPress={() => setHidePass(!hidePass)}>
                    {hidePass ? <EyeOff color={"#AFAFAF"} size={20} /> : <EyeIcon color={"#AFAFAF"} size={20} />}
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
                <Text style={styles.inputLabel}>Password Confirmation*</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="************"
                    placeholderTextColor="#AFAFAF"
                    secureTextEntry={hideConfPass}
                    onChangeText={handleChange('password_confirmation')}
                    onBlur={handleBlur('password_confirmation')}
                    value={values.password_confirmation}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 20,
                    }}
                    onPress={() => setHideConfPass(!hideConfPass)}>
                    {hideConfPass ? <EyeOff color={"#AFAFAF"} size={20} /> : <EyeIcon color={"#AFAFAF"} size={20} />}
                  </TouchableOpacity>
                </View>
                {errors.password_confirmation &&
                  touched.password_confirmation && (
                    <Text style={styles.errorMessage}>
                      {errors.password_confirmation}
                    </Text>
                  )}
                <View>
                  <View style={styles.actions}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-start',
                      }}
                      onPress={() => checkBoxChanged()}>
                      <CheckBox
                        disabled={true}
                        value={agree}
                        onValueChange={() => checkBoxChanged()}
                        tintColors={{true: 'rgb(255 255 255)', false: 'fff'}}
                      />
                      <Text style={styles.forgot}>I agree to the </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={[styles.forgot, {fontWeight: '700'}]}>
                        Terms & Conditions and Privacy Policy.
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.loginText}>Register Now</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <View style={styles.row}>
                                  <View style={styles.line} />
                                  <Text style={styles.or}>Or Login with</Text>
                                  <View style={styles.line} />
                                </View>
          <IconButton
            title="Continue with Google"
            onPress={() => {}}
            icon={Icons.icGoogle}
          />
        
      </View>
    </View>
    </>
  );
}
