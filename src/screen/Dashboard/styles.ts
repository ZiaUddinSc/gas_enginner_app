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
        backgroundColor:'rgb(241 245 249)',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('4%'),
        borderRadius: wp('3%'),
        justifyContent:'center',
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('4%'),
        backgroundColor: Color.white,
        marginBottom: hp('1.5%'),
        borderRadius: wp('3%'),
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent:'space-between'
      },
      row:{flexDirection:'row',alignItems:'center'},
      icon: {
        marginRight: wp('3%'),
      },
      title: {
        fontSize: wp('4.5%'),
        color: Color.textPrimaryColor,
      },
  });
  