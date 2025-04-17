import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Wrench, User, Calendar, Award, FileText, X,ChevronDown } from 'lucide-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Colors'; // Assuming you have a Colors file
import BottomSheet, { BottomSheetScrollView,useBottomSheetTimingConfigs,BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const items = [
  { label: 'Job', icon: <Wrench color="#6B7280" size={wp(5)} /> },
  { label: 'Quote', icon: <Calendar color="#6B7280" size={wp(5)} /> },
  { label: 'Domistic Gas Certificate', icon: <Award color="#6B7280" size={wp(5)} /> },
  { label: 'Invoice', icon: <FileText color="#6B7280" size={wp(5)} /> },
];

const HomeBottomSheetContent = ({ onClose }) => {
  return (
     <BottomSheetScrollView contentContainerStyle={{}}>
       <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowDown} onPress={()=>onClose()}>
          <ChevronDown size={wp(8)} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.title}>New Add</Text>
      </View>

      <View style={styles.actionsContainer}>
        {items.map((action, index) => (
          <TouchableOpacity key={index} style={[
            styles.actionItem,
            { 
              backgroundColor: index % 2 === 0 ? '#F3F4F6' : '#FFFFFF'
            }
          ]}  onPress={() => {
            // Handle action based on label
            onClose(); // Close the bottom sheet after action (optional)
          }}>
            <View style={styles.iconContainer}>{action.icon}</View>
            <Text style={styles.actionText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      
    </View>
  </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
    // padding: wp(4),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    borderBottomWidth:1,
    borderBottomColor:Color.primaryBGColor,
    padding:wp(2)
  },
  arrowDown: {
    marginRight: wp(3),
  },
  title: {
    fontSize: wp(5),
    color: Color.textColor,
    fontWeight: 'bold',
  },
  actionsContainer: {
    marginBottom: hp(2),
    paddingHorizontal:wp(3)
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal:wp(3),
    borderRadius:wp(1)
  },
  iconContainer: {
    marginRight: wp(3),
  },
  actionText: {
    fontSize: wp(4.5),
    color: Color.textColor,
    fontWeight:'700'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
    marginRight: wp(3),
  },
  cancelText: {
    fontSize: wp(4.5),
    color: '#6B7280',
    fontWeight: 'bold',
  },
  okButton: {
    backgroundColor: Color.primaryBGColor,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
    borderRadius: wp(1),
  },
  okText: {
    fontSize: wp(4.5),
    color: Color.white,
    fontWeight: 'bold',
  },
});

export default HomeBottomSheetContent;