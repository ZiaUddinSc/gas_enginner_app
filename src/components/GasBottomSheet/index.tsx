import React, {useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheetTimingConfigs,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Wrench,
  Calendar,
  Award,
  FileText,
  ChevronDown,
} from 'lucide-react-native';
import Color from '../../theme/Colors'; // Assuming you have a Colors file

const data = [
  {
    id: '1',
    label: 'Landlord Gas Safety',
    icon: <Wrench size={24} color="#333" />,
  },
  {
    id: '2',
    label: 'Homeowner Gas Safety',
    icon: <Calendar size={24} color="#333" />,
  },
  {id: '3', label: 'Service', icon: <Award size={24} color="#333" />},
  {
    id: '4',
    label: 'Gas Warning Notice',
    icon: <FileText size={24} color="#333" />,
  },
];

const GasBottomSheet = ({onClose}) => {
  return (
    <BottomSheetScrollView contentContainerStyle={{elevation: 5}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowDown} onPress={() => onClose()}>
            <ChevronDown size={wp(8)} color="#6B7280" />
          </TouchableOpacity>
          <Text style={styles.title}>Certificate Types</Text>
        </View>

        <View style={styles.actionsContainer}>
          {data.map((action, index) => (
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
                  {color: index % 2 === 0 ? '#3aad99' : Color.primaryBGColor},
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
    elevation: 2,
    marginBottom: hp(2),
    width: wp(94),
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

export default GasBottomSheet;
