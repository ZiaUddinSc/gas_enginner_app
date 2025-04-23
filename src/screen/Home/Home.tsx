import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
} from 'react-native';
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
  LogOut,
} from 'lucide-react-native';
import Color from '../../theme/Colors';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import GasRateCalculator from '../GasRateCalculator';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AnimateItem} from '../../helper/customMethods';
import * as Animatable from 'react-native-animatable';

const menuItems = [
  {title: 'Customers (0)', icon: <Users color={Color.fontColor} size={35} />},
  {title: 'Jobs (0)', icon: <Briefcase color={Color.fontColor} size={35} />},
  {
    title: 'Existing Records & Drafts',
    icon: <Layers color={Color.fontColor} size={35} />,
  },
  {
    title: 'Boiler Manual',
    icon: <BookOpen color={Color.fontColor} size={35} />,
  },
];

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const animatedValues = useRef(
    menuItems.map(() => new Animated.Value(0)),
  ).current;

  const onPressListItem = item => {
    var str = item.title;

    var jobs = str.substring(0, 4);
    var customers = str.substring(0, 9);
    console.log(jobs);
    if (item.title === 'Boiler Manual') {
      navigation.navigate('BoilerManuals');
    } else if (jobs === 'Jobs') {
      navigation.navigate('JobsScreen');
    } else if (customers === 'Customers') {
      navigation.navigate('Customers');
    }
  };

  const renderItem = ({item, index}: any) => {
    AnimateItem(animatedValues, index);
    const translateY = animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    });

    const opacity = animatedValues[index];
    return (
      <Animatable.View
        key={index}
        animation="zoomIn"
        delay={index * 300}
        duration={600}
        useNativeDriver>
        <TouchableOpacity
          style={styles.item}
          onPress={() => onPressListItem(item)}>
          <View style={styles.icon}>{item.icon}</View>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={styles.content}>
      <CustomHeader
        title="Home"
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
          numColumns={2}
          contentContainerStyle={{marginTop: hp(1.2)}}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
