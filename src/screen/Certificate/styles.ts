import { StyleSheet,Platform,StatusBar } from 'react-native';
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
          paddingTop:Platform.OS=='android'?StatusBar.currentHeight:null
        },
    container: {
        flex: 1,
        padding: wp('4%'),
        backgroundColor: Color.white,
      },

   bottomSheet: {
          backgroundColor: Color.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
  elevation:9
        },
  
        handleIndicator: {
          backgroundColor: '#ccc',
          width: 40,
          height: 5,
          borderRadius: 2.5,
        },
});

export default styles;