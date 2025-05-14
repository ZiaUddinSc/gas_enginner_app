import {StyleSheet,Platform,StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import Color from '../../theme/Colors';
export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
      },
      scrollContent: {
        padding: wp('3%'),
      },
      section: {
        backgroundColor: '#fff',
        borderRadius: wp('2%'),
        padding: wp('3%'),
        marginBottom: hp('2%'),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: wp('0.5%')},
        shadowOpacity: 0.1,
        shadowRadius: wp('1%'),
        elevation: 3,
      },
      sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('1.5%'),
      },
      sectionTitle: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: '#333',
      },
      editButton: {
        padding: wp('1%'),
      },
      infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('1%'),
        paddingVertical: hp('0.5%'),
      },
      labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('45%'),
        marginRight: wp('2%'),
      },
      icon: {
        marginRight: wp('3%'),
        width: wp('5%'),
        alignItems: 'center',
      },
      labelText: {
        fontSize: wp('4%'),
        color: '#777',
        paddingRight: wp(2),
      },
      value: {
        fontSize: wp('4%'),
        color: '#333',
        flex: 1,
        paddingLeft: wp(3),
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: hp('1%'),
      },
      logoImage: {
        width: wp('30%'),
        height: hp('8%'),
      },
});
