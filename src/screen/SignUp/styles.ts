import {StyleSheet,Platform,StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import Color from '../../theme/Colors';
export const styles = StyleSheet.create({
    content:{
  flex:1,
  paddingTop:Platform.OS=='android'?StatusBar.currentHeight:null,
  backgroundColor: Color.primaryBGColor
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primaryBGColor,
  },
  loginBody: {
    // width: wp('100%'),
    justifyContent: 'center',
    borderRadius: hp('2%'),
    // backgroundColor: Color.white,
  },
  scrollView:{justifyContent:'center',height:'100%'},
  textHeader: {
    margin: wp('4%'),
    textAlign: 'left',
    color: Color.white,
    fontSize: hp('3%'),
    fontWeight: '700',
  },
  signupSection: {
    marginLeft: wp('4%'),
    marginBottom: wp('4%'),
    flexDirection: 'row',
  },
  logo: {
    marginLeft: wp('4%'),
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: Color.primaryBGColor,
    marginBottom: 10,
    width: 70,
    height: 70,
    borderRadius: hp('1%'),
  },
  inputLabel: {
    marginLeft: wp('4%'),
    color: Color.white,
    fontSize: wp('4%'),
    marginBottom: 5,
  },
  inputView: {
    marginLeft: wp('4%'),
    marginBottom: wp('2%'),
    width: wp('82%'),
    backgroundColor: '#EAEAEA',
    borderRadius: wp('2%'),
    height: hp('6%'),
    justifyContent: 'center',
    padding: wp('3%'),
  },
  inputText: {
    height: hp('6%'),
    color: '#777777',
    fontWeight: '800',
  },
  dontAcountText: {
    fontSize: hp('2%'),
    color:Color.white
  },
  singUp: {
    marginLeft: 5,
    color: Color.white,
    fontWeight: '700',
    fontSize: hp('2%'),
    
  },
  loginBtn: {
    marginLeft: wp('2%'),
    marginBottom: wp('2%'),
    backgroundColor: Color.black,
    borderRadius: wp('10%'),
    width: wp('84%'),
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    margin: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoView: {
    marginLeft: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryBGColor,
    height: 80,
    width: 80,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 0,
  },
  forgot: {
    color: 'rgb(255 255 255)',
    fontWeight: 'normal',
    marginTop: hp('.8%'),
    marginRight: 5,
    textAlign: 'right',
    fontSize:13,
    
  },
  errorMessage: {
    color: 'rgb(185 28 28)',
    marginLeft: wp('4%'),
  },
    or:{textAlign:'center',
      color:Color.white,
      paddingHorizontal:4
    },
    row:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
    line:{height:2,width:wp('10%'),backgroundColor:'#FFF'}
});
