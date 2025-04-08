import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  FlameIcon,
  ArrowLeft,
  CirclePlusIcon,
  CircleMinusIcon,
  Flashlight,
} from 'lucide-react-native';
import Color from '../../theme/Colors';
import {styles} from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CustomButton from '../../components/CustomButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Card from '../../components/Card';
const GAS_LIST = [
  {label: 'Natural Gas', value: '1'},
  {label: 'LPG', value: '2'},
];
const GAS_TYPE_LIST = [
  {label: 'Metric', value: '1'},
  {label: 'Imperial', value: '2'},
];
const CALCULATOR_TIMER = [
  {label: '1.00', value: 60},
  {label: '2.00', value: 120},
];
const GasRateCalculator = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [gasName, setGasName] = useState<any>({label: 'Item 1', value: '1'});
  const [gasType, setGasType] = useState<any>({label: 'Metric', value: '1'});
  const [calculatTimer, setCalculatTimer] = useState<any>(CALCULATOR_TIMER[0]);
  const [initialReading, setInitialReading] = useState<any>(null);
  const [FinalReading, setFinalReading] = useState<any>(null);

  const onChangeInitialReading = value => {
    setInitialReading(value);
  };

  const onChangeFinalReading = value => {
    setFinalReading(value);
  };

  return (
    <>
      <CustomHeader
        title="Calculator"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<Flashlight size={24} color="white" />}
      />

      <View style={styles.container}>
        <View style={styles.sub_container}>
          <View>
            <Text style={styles.title}>Gas Rate Calculator</Text>
          </View>
          <View style={styles.row}>
            <Dropdown
              style={styles.dropdown}
              data={GAS_LIST}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              searchPlaceholder="Please Search..."
              value={gasName}
              onChange={item => {}}
            />
            <Dropdown
              style={styles.dropdown}
              data={GAS_TYPE_LIST}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              searchPlaceholder="Please Search..."
              value={gasType}
              onChange={item => {}}
            />
          </View>
          <View style={styles.circleView}>
            <CountdownCircleTimer
              isPlaying={false}
              duration={120}
              colors="#164E63">
              {({remainingTime}) => (
                <View>
                  <Dropdown
                    style={styles.Circledropdown}
                    data={CALCULATOR_TIMER}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Select item'}
                    searchPlaceholder="Please Search..."
                    value={calculatTimer}
                    onChange={item => {}}
                  />
                </View>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={'Initial Reading'}
                placeholderTextColor={'gray'}
                onChangeText={value => onChangeInitialReading(value)}
                value={initialReading}
                keyboardType={'numeric'}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={'Final Reading'}
                placeholderTextColor={'gray'}
                onChangeText={value => onChangeFinalReading(value)}
                value={initialReading}
                keyboardType={'numeric'}
              />
            </View>
          </View>
          <View style={styles.row_center}>
            <CustomButton
              style={[styles.btnStyle, {backgroundColor: '#F59E0B'}]}
              textName={'Reset'}
              handleSubmit={() => {}}
              buttonTextStyle={styles.btnTextStyle}
            />
            <CustomButton
              style={[styles.btnStyle, {backgroundColor: '#0C9488'}]}
              textName={'Start'}
              handleSubmit={() => {}}
              buttonTextStyle={styles.btnTextStyle}
            />
          </View>
          <View
            style={[
              styles.row_center,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <Card
              style={styles.card}
              childrenIcon={
                <View
                  style={styles.iconView}>
                  <FlameIcon
                    style={{alignSelf: 'center'}}
                    color="black"
                    size={30}
                  />
                </View>
              }
              cardHeader="GAS RATE"
              cardTextString={'M3/HR'}
              calculatorValue="0.00"
            />
            <Card
              style={styles.card}
              childrenIcon={
                <View
                  style={styles.iconView}>
                <CirclePlusIcon
                  style={{alignSelf: 'center'}}
                  color="black"
                  size={30}
                />
                </View>
              }
              cardHeader="GROSS"
              cardTextString={'KW'}
              calculatorValue="0.00"
            />
            <Card
              style={styles.card}
              childrenIcon={
                <View
                  style={styles.iconView}>
                <CircleMinusIcon
                  style={{alignSelf: 'center'}}
                  color="black"
                  size={30}
                />
                </View>
              }
              cardHeader="NET"
              cardTextString={'KW'}
              calculatorValue="0.00"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default GasRateCalculator;
