import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {
  FileText,
  Layers,
  Users,
  Briefcase,
  Calendar,
  Calculator,
  BookOpen,
  Settings,
  ChevronRight,
  ArrowLeft,
  LogOut
} from 'lucide-react-native';
import Color from '../../theme/Colors';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import GasRateCalculator from '../GasRateCalculator';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

const menuItems = [
  {title: 'New Certificate / Invoice', icon: <FileText size={20} />},
  {title: 'Existing Records & Drafts', icon: <Layers size={20} />},
  {title: 'Customers (0)', icon: <Users size={20} />},
  {title: 'Jobs (0)', icon: <Briefcase size={20} />},
  {title: 'Calendar', icon: <Calendar size={20} />},
  {title: 'Gas Rate Calculator', icon: <Calculator size={20} />},
  {title: 'Boiler Manual', icon: <BookOpen size={20} />},
  {title: 'Settings', icon: <Settings size={20} />},
];

const MenuList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const onPressListItem = item => {
    if (item.title === 'Gas Rate Calculator') {
      navigation.navigate('Calculator');
    }
  };
  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.item} onPress={() => onPressListItem(item)}>
      <View style={styles.row}>
        <View style={styles.icon}>{item.icon}</View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <ChevronRight size={20} />
    </TouchableOpacity>
  );

  return (
    <>
         <CustomHeader
  title="Dashboard"
  // leftIcon={<ArrowLeft size={24} color="white" />}
  onLeftPress={() => navigation.goBack()}
  rightIcon1={<LogOut size={24} color="white" />}
  onRightPress1={() => alert('Notification')}
  
/>
    <View style={styles.container}>
 

        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    </>
  );
};

export default MenuList;
