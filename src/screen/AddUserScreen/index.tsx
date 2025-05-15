import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ArrowLeft, ChevronDown} from 'lucide-react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './styles';

interface Error {
  name: any;
  email: any;
  password: any;
  passwordConfirmation: any;
  cardHolderName: any;
  cardNumber: any;
  expiryDate: any;
  cvc: any;
  postalCode: any;
}

const AddUserScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    gasSafeId: '',
    oilRegistrationNumber: '',
    installerRefNo: '',
    subscriptionType: 'monthly',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState<Error>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    postalCode: '',
  });
  const [showFeatures, setShowFeatures] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
    // Clear error when typing
    if (errors[field]) {
      setErrors({...errors, [field]: ''});
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.password) newErrors.password = 'This field is required';
    if (formData.password !== formData.passwordConfirmation) {
      newErrors.passwordConfirmation = 'Passwords do not match';
    }
    if (!formData.cardHolderName)
      newErrors.cardHolderName = 'This field is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'This field is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'This field is required';
    if (!formData.cvc) newErrors.cvc = 'This field is required';
    if (!formData.postalCode) newErrors.postalCode = 'This field is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', formData);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomHeader
          title="Create User"
          fontSize={hp(2.2)}
          leftIcon={<ArrowLeft size={hp(3)} color="white" />}
          onLeftPress={() => navigation.goBack()}
        />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Personal Information Section */}
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.card}>
            <InputField
              label="Name *"
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
              error={errors.name}
              placeholder="Jhon Deo"
            />
            <InputField
              label="Email *"
              value={formData.email}
              onChangeText={text => handleInputChange('email', text)}
              keyboardType="email-address"
              error={errors.email}
              placeholder="yourname@example.com"
            />
            <InputField
              label="Password *"
              value={formData.password}
              onChangeText={text => handleInputChange('password', text)}
              secureTextEntry
              error={errors.password}
              placeholder="******"
            />
            <InputField
              label="Password Confirmation"
              value={formData.passwordConfirmation}
              onChangeText={text =>
                handleInputChange('passwordConfirmation', text)
              }
              secureTextEntry
              error={errors.passwordConfirmation}
              placeholder={'******'}
            />
          </View>

          {/* Professional Information Section */}
          <Text style={styles.sectionTitle}>Professional Information</Text>
          <View style={styles.card}>
            <InputField
              label="Gas Safe Id Card"
              value={formData.gasSafeId}
              onChangeText={text => handleInputChange('gasSafeId', text)}
              error={undefined}
              placeholder={undefined}
            />
            <InputField
              label="Oil Registration Number"
              value={formData.oilRegistrationNumber}
              onChangeText={text =>
                handleInputChange('oilRegistrationNumber', text)
              }
              error={undefined}
              placeholder={undefined}
            />
            <InputField
              label="Installer Ref No"
              value={formData.installerRefNo}
              onChangeText={text => handleInputChange('installerRefNo', text)}
              error={undefined}
              placeholder={undefined}
            />
          </View>

          {/* Subscription Section */}
          <Text style={styles.sectionTitle}>Subscription</Text>
          <View style={styles.card}>
            <TouchableOpacity
              style={[
                styles.subscriptionOption,
                formData.subscriptionType === 'monthly' &&
                  styles.selectedOption,
              ]}
              onPress={() => handleInputChange('subscriptionType', 'monthly')}>
              <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                  {formData.subscriptionType === 'monthly' && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
              <View style={styles.subscriptionDetails}>
                <Text style={styles.subscriptionTitle}>
                  Monthly Subscription £8.99 /Monthly
                </Text>
                <Text style={styles.subscriptionDescription}>
                  Create unlimited Certificates, Invoices and Quotes. Integrated
                  with QuickBooks, Manage your Customers and much more.
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    setShowFeatures(
                      showFeatures === 'monthly' ? null : 'monthly',
                    )
                  }
                  style={styles.featuresButton}>
                  <Text style={styles.featuresButtonText}>MORE FEATURES</Text>
                  <ChevronDown
                    size={hp(2)}
                    color="#007AFF"
                    style={[
                      styles.chevron,
                      showFeatures === 'monthly' && styles.rotateChevron,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.subscriptionOption,
                formData.subscriptionType === 'yearly' && styles.selectedOption,
                {marginTop: hp(2)},
              ]}
              onPress={() => handleInputChange('subscriptionType', 'yearly')}>
              <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                  {formData.subscriptionType === 'yearly' && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
              <View style={styles.subscriptionDetails}>
                <Text style={styles.subscriptionTitle}>
                  Yearly Subscription £99.00 /Yearly
                </Text>
                <Text style={styles.subscriptionDescription}>
                  Create unlimited Certificates, Invoices and Quotes. Integrated
                  with QuickBooks, Manage your Customers and much more.
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    setShowFeatures(showFeatures === 'yearly' ? null : 'yearly')
                  }
                  style={styles.featuresButton}>
                  <Text style={styles.featuresButtonText}>MORE FEATURES</Text>
                  <ChevronDown
                    size={hp(2)}
                    color="#007AFF"
                    style={[
                      styles.chevron,
                      showFeatures === 'yearly' && styles.rotateChevron,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          {/* Payment Information Section */}
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <View style={styles.card}>
            <InputField
              label="Card Holder Name"
              value={formData.cardHolderName}
              onChangeText={text => handleInputChange('cardHolderName', text)}
              error={errors.cardHolderName}
              placeholder={'Jhon Doe'}
            />
            <InputField
              label="Card Number"
              value={formData.cardNumber}
              onChangeText={text => handleInputChange('cardNumber', text)}
              keyboardType="numeric"
              placeholder="1234 1234 1234 1234"
              error={errors.cardNumber}
            />
            <View style={styles.rowInputs}>
              <View style={[styles.inputContainer, {flex: 2}]}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  style={[styles.input, errors.expiryDate && styles.inputError]}
                  value={formData.expiryDate}
                  onChangeText={text => handleInputChange('expiryDate', text)}
                  placeholder="MM / YY"
                  keyboardType="numeric"
                />
                {errors.expiryDate && (
                  <Text style={styles.errorText}>{errors.expiryDate}</Text>
                )}
              </View>
              <View
                style={[styles.inputContainer, {flex: 1, marginLeft: wp(2)}]}>
                <Text style={styles.label}>CVC</Text>
                <TextInput
                  style={[styles.input, errors.cvc && styles.inputError]}
                  value={formData.cvc}
                  onChangeText={text => handleInputChange('cvc', text)}
                  placeholder="CVC"
                  keyboardType="numeric"
                  secureTextEntry
                />
                {errors.cvc && (
                  <Text style={styles.errorText}>{errors.cvc}</Text>
                )}
              </View>
              <View
                style={[styles.inputContainer, {flex: 2, marginLeft: wp(2)}]}>
                <Text style={styles.label}>Postal Code</Text>
                <TextInput
                  style={[styles.input, errors.postalCode && styles.inputError]}
                  value={formData.postalCode}
                  onChangeText={text => handleInputChange('postalCode', text)}
                  placeholder="G13 TLS"
                />
                {errors.postalCode && (
                  <Text style={styles.errorText}>{errors.postalCode}</Text>
                )}
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSubmit}>
              <Text style={[styles.buttonText, {color: 'white'}]}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const InputField = ({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  ...props
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, error && styles.inputError]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...props}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

export default AddUserScreen;
