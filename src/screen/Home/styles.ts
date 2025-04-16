import {StyleSheet} from 'react-native';
import Color from '../../theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
      },
    
      item: {
        // flexDirection: 'row',
        alignItems: 'center',
        // gap:wp(10),
        backgroundColor: Color.white,
        marginBottom: hp('1.5%'),
        borderRadius: wp('1%'),
      height:hp(18),
      width:wp(44),
        borderColor:Color.textPrimaryColor,
        // borderWidth:.5,
        justifyContent:'center',
        elevation:5,
      },
      row:{flexDirection:'row',alignItems:'center'},
      icon: {
        // marginRight: wp('3%'),
      },
      title: {
        fontSize: wp('4.5%'),
        color: Color.fontColor,
        textAlign:'center'
      },
  });
  