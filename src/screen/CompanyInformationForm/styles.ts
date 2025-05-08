import { StyleSheet,Platform,StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
  import Color from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContentContainer: {
    paddingBottom: hp(2),
  },
  formContainer: {
    padding: wp(4),
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: hp(2),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: wp(2),
  },

  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginBottom: hp(1.5),
    color: '#888',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: hp(1),
  },
  inputContainer: {
    marginBottom: hp(2.5),
  },
  label: {
    fontSize: hp(2),
    fontWeight: 'bold',
    marginBottom: hp(0.8),
    color: '#7f8c8d',
  },



  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  errorIcon: {
    marginRight: wp(1),
  },
  errorText: {
    color: '#e74c3c',
    fontSize: hp(1.6),
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  switchLabel: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: '#7f8c8d',
  },

  signatureContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },



  buttonText: {
    color: '#222',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#bdc3c7',
    padding: hp(1.5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(42),
  },
  submitButton: {
    backgroundColor: Color.primaryBGColor,
    padding: hp(1.5),
    borderRadius: 8,
    alignItems: 'center',
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
  submitButtonText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
  submitIcon: {
    marginLeft: wp(2),
  },
  previewImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default styles;