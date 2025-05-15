// import React, {useCallback, useMemo, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   ScrollView, // Added ScrollView
//   Button,
//   SafeAreaView,
// } from 'react-native';
// import {
//   ArrowLeft,
// } from 'lucide-react-native';

// import CustomHeader from '../../components/CustomHeader/CustomHeader';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
// import * as Animatable from 'react-native-animatable';
// import styles from './styles';
// import GasBottomSheet from '../../components/GasBottomSheet';
// import BottomSheet, {
//   BottomSheetScrollView,
//   useBottomSheetTimingConfigs,
//   BottomSheetModalProvider,
// } from '@gorhom/bottom-sheet';

// import {Easing} from 'react-native-reanimated';

// const Certificate = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<any>>();
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   const snapPoints = useMemo(() => ['40%'], []);

//   const handlePresentBottomSheet = useCallback(() => {
//     bottomSheetRef.current?.expand();
//   }, []);

//   const handleCloseBottomSheet = useCallback(() => {
//     bottomSheetRef.current?.close();
//   }, []);
//   const animationConfigs = useBottomSheetTimingConfigs({
//     duration: 250,
//     easing: Easing.exp,
//   });

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <CustomHeader
//         title="Certificate"
//         leftIcon={<ArrowLeft size={24} color="white" />}
//         onLeftPress={() => navigation.goBack()}
//       />

//       <View style={styles.container}>
       
//         <BottomSheet
//           ref={bottomSheetRef}
//           animationConfigs={animationConfigs}
//           enablePanDownToClose={true}
//           onChange={handleSheetChanges}
//           handleIndicatorStyle={styles.handleIndicator}
//           style={styles.bottomSheet}
//           // snapPoints={snapPoints}
//         >
//           <GasBottomSheet onClose={handleCloseBottomSheet} />
//         </BottomSheet>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Certificate;



import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView, // Added ScrollView
  Button,
  SafeAreaView,
} from 'react-native';
import {
  ArrowLeft,
} from 'lucide-react-native';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ChevronDown, FileText, CircleX} from 'lucide-react-native';
import Color from '../../theme/Colors';


const groupedData = [
  {
    groupTitle: 'Domestic Gas Records',
    items: [
      {id: '1', label: 'CP12 Homeowner Gas Safety Record'},
      {id: '2', label: 'CP12 Landlord Gas Safety Record'},
      {id: '3', label: 'CP14 Gas Warning Notice'},
      {id: '4', label: 'Service / Maintenance Record'},
      {id: '5', label: 'Gas Breakdown Record'},
      {id: '6', label: 'Gas Boiler System Commissioning Checklist'},
    ],
  },
  {
    groupTitle: 'Miscellaneous',
    items: [
      {id: '7', label: 'Powerflush Certificate'},
      {id: '8', label: 'Installation / Commissioning Decommissioning Record'},
      {id: '9', label: 'Unvented Hot Water Cylinders'},
      {id: '10', label: 'Job Sheet'},
    ],
  },
];
const roundedTop = [
  'Quote',
  'CP12 Homeowner Gas Safety Record',
  'Powerflush Certificate',
];
const roundedBottom = [
  'Invoice',
  'Gas Boiler System Commissioning Checklist',
  'Job Sheet',
];

const Certificate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
 
  const onNext = action => {
    if (
      action.label === 'CP12 Homeowner Gas Safety Record' ||
      action.label === 'CP12 Landlord Gas Safety Record' ||
      action.label === 'CP14 Gas Warning Notice' ||
      action.label === 'Service / Maintenance Record' ||
      action.label === 'Gas Breakdown Record' ||
      action.label === 'Gas Boiler System Commissioning Checklist'
    ) {
      navigation.navigate('CP12Form', {titleData: action.label});
    } else if (
      action.label === 'Powerflush Certificate' ||
      action.label === 'Installation / Commissioning Decommissioning Record' ||
      action.label === 'Unvented Hot Water Cylinders' ||
      action.label === 'Job Sheet'
    ) {
  
      navigation.navigate('Miscellaneous', {titleData: action.label});
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <CustomHeader
        title="Certificate"
        fontSize={hp(2.2)}
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        
       <View style={styles.sab_container}>
         <View style={styles.header}>
                  <Text style={styles.title}>Certificate Types</Text>
                  <TouchableOpacity style={styles.arrowDown} onPress={() => navigation.goBack()}>
                    <CircleX size={wp(7)} color="#6B7280" />
                  </TouchableOpacity>
                </View>
               {groupedData.map((group, groupIndex) => (
                 <View key={groupIndex} style={styles.groupContainer}>
                   <Text style={styles.groupTitle}>{group.groupTitle}</Text>
       
                   {group.items.map((item, itemIndex) => (
                     <TouchableOpacity
                       key={item.id}
                       style={[
                         styles.actionItem,
                         {
                           backgroundColor: Color.white,
                           borderTopRightRadius: roundedTop.includes(item.label)
                             ? 10
                             : null,
                           borderTopLeftRadius: roundedTop.includes(item.label)
                             ? 10
                             : null,
       
                           borderBottomRightRadius: roundedBottom.includes(item.label)
                             ? 10
                             : null,
                           borderBottomLeftRadius: roundedBottom.includes(item.label)
                             ? 10
                             : null,
                         },
                       ]}
                       onPress={() => {
                         // Handle click
                         onNext(item);
                        
                       }}>
                       <View style={styles.iconContainer}>
                         <FileText size={24} color={Color.primaryBGColor} />
                       </View>
       
                       <Text
                         style={[
                           styles.actionText,
                           {
                             color: Color.primaryBGColor,
                           },
                         ]}>
                         {item.label}
                       </Text>
                     </TouchableOpacity>
                   ))}
                 </View>
               ))}
       </View>
      </View>
    </SafeAreaView>
  );
};

export default Certificate;
