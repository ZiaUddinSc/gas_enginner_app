import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ChevronDown, FileText} from 'lucide-react-native';
import Color from '../../theme/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const groupedData = [
  {
    groupTitle: 'Invoice/Quote',
    items: [
      {id: '1', label: 'Quote'},
      {id: '2', label: 'Invoice'},
    ],
  },
  {
    groupTitle: 'Domestic Gas Records',
    items: [
      {id: '3', label: 'CP12 Gas Safety Record (Landlord/Homeowner)'},
      {id: '4', label: 'CP14 Gas Warning Notice'},
      {id: '5', label: 'Service / Maintenance Record'},
      {id: '6', label: 'Gas Breakdown Record'},
      {id: '7', label: 'Gas Boiler System Commissioning Checklist'},
    ],
  },
  {
    groupTitle: 'Miscellaneous',
    items: [
      {id: '8', label: 'Powerflush Certificate'},
      {id: '9', label: 'Installation / Commissioning Decommissioning Record'},
      {id: '10', label: 'Unvented Hot Water Cylinders'},
      {id: '11', label: 'Job Sheet'},
    ],
  },
];

const GasBottomSheet = ({onClose}) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
    const onNext = (action) => {
      console.log(action)
      // if (action.label === 'New Certificate') {
      //   navigation.navigate('Certificate');
      // }
    };

  return (
    <BottomSheetScrollView contentContainerStyle={{elevation: 5}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowDown} onPress={() => onClose()}>
            <ChevronDown size={wp(8)} color="#6B7280" />
          </TouchableOpacity>
          <Text style={styles.title}>Certificate Types</Text>
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
                    backgroundColor:
                      itemIndex % 2 === 0 ? '#eff9f9' : Color.white,
                  },
                ]}
                onPress={() => {
                  // Handle click
                  onNext(item);
                  onClose();
                }}>
                <View style={styles.iconContainer}>
                  <FileText
                    size={24}
                    color={
                      itemIndex % 2 === 0 ? '#3aad99' : Color.primaryBGColor
                    }
                  />
                </View>

                <Text
                  style={[
                    styles.actionText,
                    {
                      color:
                        itemIndex % 2 === 0
                          ? '#3aad99'
                          : Color.primaryBGColor,
                    },
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
    alignItems: 'center',
    paddingBottom: hp(5),
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
    fontSize: wp(4.2),
    color: Color.textColor,
    fontWeight: 'bold',
  },
  groupContainer: {
    width: wp(94),
    marginTop: hp(1),
  },
  groupTitle: {
    fontSize: wp(3.6), 
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: hp(1),
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1), 
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
    elevation: 2,
    marginBottom: hp(1),
  },
  iconContainer: {
    marginRight: wp(2),
  },
  actionText: {
    fontSize: wp(3.8),
    fontWeight: '600',
  },
});

export default GasBottomSheet;
