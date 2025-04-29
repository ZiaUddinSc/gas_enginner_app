import { StyleSheet,Platform,StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from '../../theme/Colors';
const primaryColor = '#007bff';
const backgroundColor = '#f8f9fa';
const textColorPrimary = '#343a40';
const textColorSecondary = '#6c757d';
const borderColor = '#ced4da';
const inputBackgroundColor = '#fff';
const buttonTextColor = '#fff';
const errorTextColor = 'red';

const styles = StyleSheet.create({
 safeArea: {
          flex: 1,
          backgroundColor: Color.primaryBGColor,
        },
  container: {
    flexGrow: 1,
    // paddingHorizontal: wp(4),
    // paddingTop: hp(2),
    // paddingBottom: hp(3),
    // backgroundColor:Color.white,
    // marginBottom:hp(6)
  },
  
  formContainer: {
    backgroundColor: Color.white,
    padding: wp(4),
    borderRadius: wp(1),
    marginBottom: hp(2),
    // borderWidth: 1,
    // borderColor: borderColor,
  },
  sectionTitle: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: textColorPrimary,
    marginBottom: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    paddingBottom: hp(0.5),
  },
  inputGroup: {
    marginBottom: hp(2),
  },
  label: {
    fontSize: hp(1.8),
    color: textColorPrimary,
    marginBottom: hp(0.5),
  },
  required: {
    color: 'red',
  },
  input: {
    height: hp(5.2),
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: wp(1),
    paddingHorizontal: wp(3),
    fontSize: hp(1.8),
    backgroundColor: Color.white,
    elevation:2
  },
  multilineInput: {
    minHeight: hp(10),
    textAlignVertical: 'top',
  },
  dropdown: {
    height: hp(5.2),
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: wp(1),
    paddingHorizontal: wp(3),
    backgroundColor: Color.white,
    elevation:2
  },
 buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: hp(2),
  },
  saveButton: {
    backgroundColor: Color.primaryBGColor,
    height:hp(6),
    borderRadius: wp(10),
    marginBottom:hp(2),
       alignItems:'center',
    justifyContent:'center'
  },
  saveButtonText: {
    color: Color.white,
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  cancelButton: {
    backgroundColor: Color.white,
height:hp(6),
    borderRadius: wp(10),
    borderWidth:1,
    borderColor:Color.primaryBGColor,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:hp(2)
  },
  cancelButtonText: {
    color: Color.textPrimaryColor,
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  errorText: {
    fontSize: hp(1.4),
    color: errorTextColor,
    marginTop: hp(0.3),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:hp(4)
  },
  switchPlaceholder: {
    width: wp(10),
    height: hp(4),
    backgroundColor: '#ccc', // Placeholder for Switch
    borderRadius: wp(2),
  },
});

export default styles;