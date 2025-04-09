import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import Color from '../../theme/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryBGColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
  },
  logo: {
    width: wp('10%'),
    height: wp('10%'),
    resizeMode: 'contain',
  },
  userBadge: {
    backgroundColor: '#4A90A4',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('10%'),
  },
  userInitials: {
    color: '#fff',
    fontWeight: '700',
    fontSize: wp('4%'),
  },
  scrollContent: {
    padding: wp('4%'),
    paddingBottom: hp('10%'),
  },
  card: {
    backgroundColor: '#F3F6FA',
    borderRadius: wp('5%'),
    padding: wp('5%'),
    marginBottom: hp('3%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  iconWrapper: {
    backgroundColor: '#1D4D5D',
    padding: wp('6%'),
    borderRadius: wp('15%'),
    marginBottom: hp('1.5%'),
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: wp('4.5%'),
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  cardDescription: {
    textAlign: 'center',
    color: '#697D8C',
    fontSize: wp('3.8%'),
    marginBottom: hp('2%'),
  },
  button: {
    backgroundColor: '#1D4D5D',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderRadius: wp('10%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('4%'),
  },
});
