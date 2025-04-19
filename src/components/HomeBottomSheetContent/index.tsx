import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Wrench,
  User,
  Calendar,
  Award,
  FileText,
  X,
  ChevronDown,
} from 'lucide-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../../theme/Colors'; // Assuming you have a Colors file
import BottomSheet, {
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const items = [
  { label: 'Job', icon: <Wrench size={wp(8)} />, iconColor: '#FFFF00' },
  { label: 'Quote', icon: <Calendar size={wp(8)} />, iconColor: '#FFFF00' },
  {
    label: 'Domistic Gas Certificate',
    icon: <Award size={wp(8)} />,
    iconColor: '#FFFF00',
  },
  { label: 'Invoice', icon: <FileText size={wp(8)} />, iconColor: '#FFFF00' },
];

const HomeBottomSheetContent = ({ onClose }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onNext = (action) => {
    if (action.label === 'Domistic Gas Certificate') {
      navigation.navigate('Certificate');
    }
  };

  return (
    <BottomSheetScrollView contentContainerStyle={{ elevation: 5 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowDown} onPress={() => onClose()}>
            <ChevronDown size={wp(8)} color="#6B7280" />
          </TouchableOpacity>
          <Text style={styles.title}>New Add</Text>
        </View>

        <View style={styles.actionsContainer}>
          {items.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.actionItem,
                {
                  backgroundColor: index % 2 === 0 ? '#eff9f9' : Color.white,
                },
              ]}
              onPress={() => {
                // Handle action based on label
                onNext(action);
                onClose(); // Close the bottom sheet after action (optional)
              }}>
              <View style={[styles.iconContainer]}>
                {React.cloneElement(action.icon, {
                  color: index % 2 === 0 ? '#3aad99' : Color.primaryBGColor,
                })}
              </View>

              <Text
                style={[
                  styles.actionText,
                  { color: index % 2 === 0 ? '#3aad99' : Color.primaryBGColor },
                ]}>
                {action.label}
              </Text>
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
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    borderBottomWidth: 0.5,
    borderBottomColor: Color.primaryBGColor,
    padding: wp(2),
    paddingLeft: wp(5),
    width: wp(100),
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
    // marginBottom: hp(2),
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    borderRadius: wp(1),
    marginBottom: hp(2),
    width: wp(94),
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 1,
  },
  iconContainer: {
    marginRight: wp(3),
  },
  actionText: {
    fontSize: wp(4.8),
    color: Color.textColor,
    fontWeight: '700',
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
