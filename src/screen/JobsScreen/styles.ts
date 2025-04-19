import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
  import Color from '../../theme/Colors';

const styles = StyleSheet.create({
   safeArea: {
            flex: 1,
            backgroundColor: Color.primaryBGColor,
          },
    container: {
        flex: 1,
        padding: wp('2%'),
        backgroundColor: Color.white,
      },

      filterRow: {
        flexDirection: 'row',
        marginBottom: hp('1.5%'),
        gap: wp('2%'),
        flexWrap: 'wrap',
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: wp('2%'),
        padding: wp('2.5%'),
        backgroundColor: '#fff',
      },
      dropdown: {
        width: wp('25%'),
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: wp('2%'),
        paddingHorizontal: wp('2.5%'),
        backgroundColor: '#fff',
      },
      goButton: {
        backgroundColor: Color.primaryBGColor,
        borderRadius: wp('2%'),
        paddingHorizontal: wp('4%'),
        justifyContent: 'center',
      },
      goText: {
        color: 'white',
      },
      resetButton: {
        backgroundColor: '#E2E8F0',
        borderRadius: wp('2%'),
        paddingHorizontal: wp('4%'),
        justifyContent: 'center',
      },
      resetText: {
        color: '#1E293B',
      },
      tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
  
        borderBottomWidth: 1,
        borderColor: '#CBD5E1',
      },
      headerText: {
        flex: 1,
        fontWeight: '600',
        color: '#475569',
        fontSize: wp('3.5%'),
      },
      jobCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
        borderColor: '#E2E8F0',
      },
      jobTitle: {
        flex: 1,
        color: '#1E293B',
        fontSize: wp('3.8%'),
      },
      jobText: {
        marginRight: wp(2),
        color: '#555',
      },
      emptyText: {
        textAlign: 'center',
        marginVertical: hp('2%'),
        color: '#94A3B8',
      },
      pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('1.5%'),
        alignItems: 'center',
        gap: wp('4%'),
      },
      pageText: {
        fontWeight: 'bold',
        fontSize: wp('4%'),
        color: '#0F172A',
      },
      addJobBtn: {
        marginTop: hp('2%'),
        backgroundColor: Color.primaryBGColor,
        padding: wp('3%'),
        borderRadius: wp('4%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: wp('2%'),
      },
      addJobText: {
        color: 'white',
        fontSize: wp('4%'),
        fontWeight:'700'
      },
      card_content:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
      card_text:{ 
        color:'black',
        fontSize: hp(2)
       },
       scrollContent: {
        padding: wp('1%'),
        paddingBottom: hp('10%'),
      },
      card:{
        backgroundColor: '#F3F6FA',
        borderRadius: wp('3%'),
        padding: wp('2%'),
        marginBottom: hp('3%'),
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
      }
});

export default styles;