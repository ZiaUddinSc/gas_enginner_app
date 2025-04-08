import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LogoSvg from '../../components/LogoSvg';
import CustomInput from '../../components/CustomInput/CustomInput';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import IconButton from '../../components/IconButton';
import Icons from '../../theme/Icon';
import {ArrowLeft, Bell} from 'lucide-react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default function Index() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [rememberMe, setRememberMe] = useState(false);

  //Form Validation Using Formik nad Yum
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('The email field is required.')
      .label('Email'),
    password: Yup.string()
      .required('The password field is required.')
      .label('Password'),
  });
  //Check box Toggling

  const checkBoxChanged = () => {
    setRememberMe(!rememberMe);
  };
  const handleFormSubmit = (values: any) => {
    // Handle form submission logic here
    console.log('✅ Submitted values:', values);

    navigation.navigate('Dashboard');
  };
  const testSubmit = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <>
      <CustomHeader
        title=""
        leftIcon={<ArrowLeft size={24} color="black" />}
        onLeftPress={() => navigation.navigate("WelcomeScreen")} bg_color={''}      />
      <View style={styles.container}>
        <View style={styles.loginBody}>
          {/* <View style={styles.logoView}>
          <LogoSvg height={70} width={70} />
        </View> */}
          <View>
            <Text style={styles.textHeader}>Sign In</Text>
          </View>
          <View style={styles.signupSection}>
            <Text style={styles.dontAcountText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.singUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{email: '', password: ''}}
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
                <CustomInput
                  label="Email*"
                  placeholder="x@y.Z"
                  placeHolerTextColor="#AFAFAF"
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  value={values.email}
                  secureTextEntry={false}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
                <CustomInput
                  label="Password*"
                  placeholder="************"
                  placeHolerTextColor="#AFAFAF"
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
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
                        value={rememberMe}
                        onValueChange={() => checkBoxChanged()}
                        tintColors={{true: 'rgb(22 78 99)', false: 'fff'}}
                      />
                      <Text style={styles.forgot}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    testSubmit();
                    handleSubmit(); // This should call your form submit
                  }}>
                  <Text style={styles.loginText}>LOGIN</Text>
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
