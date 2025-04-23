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
import {Dropdown} from 'react-native-element-dropdown';
import {
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  LogOut,
} from 'lucide-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import GasBottomSheet from '../../components/GasBottomSheet';
import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheetTimingConfigs,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import {Easing} from 'react-native-reanimated';

const Certificate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ['40%'], []);

  const handlePresentBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 250,
    easing: Easing.exp,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <CustomHeader
        title="Certificate"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />

      <View style={styles.container}>
       
        <BottomSheet
          ref={bottomSheetRef}
          animationConfigs={animationConfigs}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          handleIndicatorStyle={styles.handleIndicator}
          style={styles.bottomSheet}
          // snapPoints={snapPoints}
        >
          <GasBottomSheet onClose={handleCloseBottomSheet} />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Certificate;
