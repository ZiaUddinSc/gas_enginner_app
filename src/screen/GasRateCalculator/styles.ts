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
  });
  