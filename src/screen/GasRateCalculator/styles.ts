import {StyleSheet} from 'react-native';
import Color from '../../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primaryBGColor,
        // padding: wp('4%'),
      },
      sub_container:{
        height:hp('100%'),
        backgroundColor:'white',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('4%'),
      },
      dropdown: {
        margin:hp('1%'),
        height: hp('5%'),
        width:wp('38%'),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      Circledropdown: {
        margin:hp('1%'),
        height: hp('5%'),
        width:wp('20%'),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      inputView: {
        marginLeft: wp('4%'),
        borderWidth: 0.5,
        borderColor:'black',
        marginBottom: wp('2%'),
        width: wp('35%'),
        borderRadius: wp('1%'),
        height: hp('6%'),
        justifyContent: 'center',
        padding: wp('3%'),
      },
      inputText: {
        height: hp('6%'),
        color: '#777777',
        fontWeight: '800',
      },
      btnStyle: {
        marginLeft: wp('2%'),
        marginBottom: wp('2%'),
        borderRadius: wp('1%'),
        width: wp('36%'),
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      btnTextStyle: {
       color:Color.white,
       fontWeight:'700',
       fontSize:20
      },
      card:{
        height:hp('15%'),
        width:wp('30%'),
        borderColor: 'gray',
        borderRadius:2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3
      }
  });
  