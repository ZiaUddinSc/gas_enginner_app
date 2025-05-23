// import React, {useRef, useState, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   TouchableOpacity,
//   Text,
//   Image,
//   BackHandler,
// } from 'react-native';
// import SignatureCanvas from 'react-native-signature-canvas';
// import Orientation from 'react-native-orientation-locker';
// import CustomHeader from '../../components/CustomHeader/CustomHeader';
// import {ArrowLeft} from 'lucide-react-native';
// import Color from '../../theme/Colors';

// const SignatureScreen = ({navigation}) => {
//   const signatureRef = useRef(null);
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));
//   const [signature, setSignature] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(false);

//   useEffect(() => {
//     var initial = Orientation.getInitialOrientation();
//     if (initial === 'PORTRAIT') {
//       Orientation.lockToLandscape();
//       setIsLandscape(true);
//       const subscription = Dimensions.addEventListener('change', ({window}) => {
//         setDimensions(window);
//       });

//       const backHandler = BackHandler.addEventListener(
//         'hardwareBackPress',
//         handleBackPress,
//       );

//       return () => {
//         Orientation.lockToPortrait();
//         setIsLandscape(false);
//         subscription?.remove();
//         backHandler.remove();
//       };
//     }
//   }, []);

//   const handleOK = base64DataUrl => {
//     setSignature(base64DataUrl);
//   };

//   const handleClear = () => {
//     signatureRef.current.clearSignature();
//     setSignature(null);
//   };

//   const handleConfirm = () => {
//     if (signature) {
//       console.log('Saved Signature:', signature);
//       // navigation.goBack();
//     } else {
//       console.log('No signature to save');
//     }
//   };

//   const handleBackPress = () => {
//     Orientation.lockToPortrait();
//     setTimeout(() => navigation.goBack(), 100);
//     return true;
//   };

//   const canvasHeight = Math.min(dimensions.height, dimensions.width) * 0.7;

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CustomHeader
//         title="Add Signature"
//         leftIcon={<ArrowLeft size={24} color="white" />}
//         onLeftPress={handleBackPress}
//       />

//       <View style={styles.container}>
//         <SignatureCanvas
//           ref={signatureRef}
//           style={styles.signature}
//           webStyle={`
//             .m-signature-pad {
//               height: ${canvasHeight}px;
//               width: 100%;
//               margin: 0;
//               padding: 0;
//             }
//             .m-signature-pad--body {
//               border: 1px solid #ccc;
//               height: 100%;
//             }
//             .m-signature-pad--footer {
//               display: none;
//             }
//           `}
//           penColor="black"
//           onOK={handleOK}
//           onEmpty={() => setSignature(null)}
//           descriptionText=""
//           //   dataURL="image/jpeg"
//           backgroundColor="white"
//           onEnd={() => {
//             signatureRef.current?.readSignature(); // Force update signature state
//           }}
//         />

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.customButton} onPress={handleClear}>
//             <Text style={styles.buttonText}>Clear Signature</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.customButton,
//               {backgroundColor: signature ? '#e2e8f0' : 'gray'},
//             ]}
//             onPress={handleConfirm}
//             disabled={!signature}>
//             <Text style={[styles.buttonText]}>Save Signature</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: Color.primaryBGColor,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   signature: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: 'white',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   customButton: {
//     backgroundColor: '#e2e8f0',
//     padding: 15,
//     borderRadius: 5,
//     width: '48%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SignatureScreen;


import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  BackHandler,
} from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';
import Orientation from 'react-native-orientation-locker';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {ArrowLeft} from 'lucide-react-native';
import Color from '../../theme/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignatureScreen = ({navigation}) => {
  const signatureRef = useRef(null);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [signature, setSignature] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      Orientation.lockToLandscape();
      setIsLandscape(true);
      const subscription = Dimensions.addEventListener('change', ({window}) => {
        setDimensions(window);
      });

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );

      return () => {
        Orientation.lockToPortrait();
        setIsLandscape(false);
        subscription?.remove();
        backHandler.remove();
      };
    }
  }, []);

  useEffect(() => {
    const loadPreviousSignature = async () => {
      try {
        const storedSignature = await AsyncStorage.getItem('generalSignature');
        if (storedSignature) {
          setSignature(storedSignature);
        }
      } catch (error) {
        console.error('Error loading signature:', error);
      }
    };

    loadPreviousSignature();
  }, []);

  const handleOK = base64DataUrl => {
    setSignature(base64DataUrl);
  };

  const handleClear = () => {
    signatureRef.current.clearSignature();
    setSignature(null);
  };

  const handleConfirm = async () => {
    if (signature) {
      try {
        await AsyncStorage.setItem('generalSignature', signature);
        console.log('Saved Signature:', signature);
        navigation.goBack({ signatureUpdated: true }); 
      } catch (error) {
        console.error('Error saving signature:', error);
      }
    } else {
      console.log('No signature to save');
    }
  };

  const handleBackPress = () => {
    Orientation.lockToPortrait();
    setTimeout(() => navigation.goBack(), 100);
    return true;
  };

  const canvasHeight = Math.min(dimensions.height, dimensions.width) * 0.7;

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Add Signature"
         fontSize={hp(2.2)}
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={handleBackPress}
      />

      <View style={styles.container}>
        <SignatureCanvas
          ref={signatureRef}
          style={styles.signature}
          webStyle={`
            .m-signature-pad {
              height: ${canvasHeight}px;
              width: 100%;
              margin: 0;
              padding: 0;
            }
            .m-signature-pad--body {
              border: 1px solid #ccc;
              height: 100%;
            }
            .m-signature-pad--footer {
              display: none;
            }
          `}
          penColor="black"
          onOK={handleOK}
          onEmpty={() => setSignature(null)}
          descriptionText=""
          backgroundColor="white"
          onEnd={() => {
            signatureRef.current?.readSignature();
          }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear Signature</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.customButton,
              {backgroundColor: signature ? '#e2e8f0' : 'gray'},
            ]}
            onPress={handleConfirm}
            disabled={!signature}>
            <Text style={[styles.buttonText]}>Save Signature</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.primaryBGColor,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  signature: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#e2e8f0',
    padding: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignatureScreen;