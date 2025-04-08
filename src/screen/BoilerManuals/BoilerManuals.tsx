import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Home } from 'lucide-react-native'; // optional, change as needed
import { TouchableOpacity } from 'react-native';
import {styles} from './styles'
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
    ArrowLeft,
    LogOut
  } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const brandData = [
  { label: 'ACV', value: 'ACV' },
  { label: 'AEG', value: 'AEG' },
  { label: 'ALPHA', value: 'ALPHA' },
  { label: 'ARISTON', value: 'ARISTON' },
  { label: 'ATAG', value: 'ATAG' },
  // Add more brands as needed
];

const BoilerManuals = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <CustomHeader
        title="Boiler Manuals"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />
    <View style={styles.container}>
            

      <View style={styles.card}>
        

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.itemTextStyle}
          data={brandData}
          labelField="label"
          valueField="value"
          placeholder="Please Select your Brand"
          value={selectedBrand}
          onChange={item => setSelectedBrand(item.value)}
        />

        <View style={styles.resultBox}>
          {selectedBrand === 'ARISTON' ? (
            <Text style={styles.resultText}>Showing manuals for: {selectedBrand}</Text>
          ) : (
            <Text style={styles.resultText}>No Manual Found</Text>
          )}
        </View>
      </View>
    </View>
    </>
  );
};

export default BoilerManuals;
