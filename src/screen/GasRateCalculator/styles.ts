import {StyleSheet} from 'react-native';
import Color from '../../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primaryBGColor,
        padding: wp('4%'),
      },
      sub_container:{
        height:hp('75%'),
        backgroundColor:'white',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('4%'),
        borderRadius: wp('3%'),
        justifyContent:'center',
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
  });
  