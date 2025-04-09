import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from '../../theme/Colors';


const borderColor = '#ced4da';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    flexGrow: 1,
    // paddingHorizontal: wp(4),
    // paddingTop: hp(2),
    // paddingBottom: hp(3),
  },

  formContainer: {
    backgroundColor: Color.white,
    padding: wp(4),
    borderRadius: wp(1),
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: borderColor,
  },
  sectionTitle: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: Color.textColorSecondary,
    marginBottom: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    paddingBottom: hp(0.5),
  },
  inputGroup: {
    marginBottom: hp(2),
  },
  label: {
    marginLeft: wp('1%'),
           color: Color.black,
           fontSize: wp('4%'),
           marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    height: hp(6),
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: wp(1),
    paddingHorizontal: wp(3),
    fontSize: wp('4%'),
    backgroundColor: Color.white,
  },
  multilineInput: {
    minHeight: hp(10),
    textAlignVertical: 'top',
  },
  dropdown: {
    height: hp(6),
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: wp(1),
    paddingHorizontal: wp(3),
    backgroundColor: Color.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(2),
  },
  saveButton: {
    backgroundColor: Color.primaryBGColor,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButtonText: {
    color: Color.white,
    fontSize: hp(2),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  cancelButton: {
    backgroundColor: '#b91c1b',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: Color.white,
    fontSize: hp(2),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  errorText: {
    fontSize: hp(1.4),
    color: Color.errorTextColor,
    marginTop: hp(0.3),
  },
  noResultContainer: {
    marginTop: hp(1),
    alignItems: 'center',
    backgroundColor:Color.white,
    elevation:5,
    
  },
  noResultText: {
    fontSize: hp(2.5),
    color: Color.textColor,
    marginBottom: hp(1),
    paddingVertical:hp(5),
    fontWeight:'700'
  },
  addCustomerButton: {
    backgroundColor: Color.primaryBGColor, 
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderBottomRightRadius: wp(1),
    borderBottomLeftRadius: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
    width:wp(92),
    justifyContent:'center'
  },
  addCustomerButtonText: {
    color: Color.white,
    fontSize: hp(1.8),
    marginLeft: wp(1),
  },
});

export default styles;