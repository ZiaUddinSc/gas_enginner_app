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
  const [gasName, setGasName] = useState<any>({
    label: 'Natural Gas',
    value: '1',
  });
  const [gasType, setGasType] = useState<any>({label: 'Metric', value: '1'});
  const [calculatTimer, setCalculatTimer] = useState<any>(CALCULATOR_TIMER[1]);
  const [initialReading, setInitialReading] = useState<any>(null);
  const [FinalReading, setFinalReading] = useState<any>(null);
  const [isFinalReading, setIsFinalReading] = useState<boolean>(false);
  const onChangeGasValue = value => {
    setGasName(value);
  };
  const onChangeGasType = value => {
    setGasType(value);
  };
  const onChangeTimer = value => {
    setCalculatTimer(value);
  };

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
              onChange={item => onChangeGasValue(item)}
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
              onChange={item => {
                onChangeGasType(item);
              }}
            />
          </View>
          <View style={styles.circleView}>
            <CountdownCircleTimer
              isPlaying={false}
              duration={120}
              colors={gasType?.value === '2' ? '#D1D5DA' : '#164E63'}>
              {({remainingTime}) => (
                <View>
                  {gasType?.value === '1' ? (
                    <Dropdown
                      style={styles.Circledropdown}
                      data={CALCULATOR_TIMER}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={'Select item'}
                      searchPlaceholder="Please Search..."
                      value={calculatTimer}
                      onChange={item => onChangeTimer(item)}
                    />
                  ) : null}
                  {gasType?.value === '2' ? (
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 30,
                        color: Color.primaryBGColor,
                      }}>
                      0:00
                    </Text>
                  ) : null}
                </View>
              )}
            </CountdownCircleTimer>
          </View>
          {gasType?.value === '1' ? (
            <View style={{flexDirection: 'row',justifyContent:'center', alignItems: 'center'}}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder={'Initial Reading'}
                  placeholderTextColor={'#A2AFC2'}
                  onChangeText={value => onChangeInitialReading(value)}
                  value={initialReading}
                  keyboardType={'numeric'}
                />
              </View>
              {isFinalReading ?
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder={'Final Reading'}
                  placeholderTextColor={'#A2AFC2'}
                  onChangeText={value => onChangeFinalReading(value)}
                  value={FinalReading}
                  keyboardType={'numeric'}
                />
              </View>
              :null
              }
            </View>
          ) : null}
          <View style={styles.row_center}>
            <CustomButton
              style={[styles.btnStyle, {backgroundColor: '#F59E0B'}]}
              textName={'Reset'}
              handleSubmit={() => {}}
              buttonTextStyle={styles.btnTextStyle}
            />
            {gasType?.value === '2' || initialReading !=='' ? (
              <CustomButton
                style={[styles.btnStyle, {backgroundColor: '#0C9488'}]}
                textName={'Start'}
                handleSubmit={() => {}}
                buttonTextStyle={styles.btnTextStyle}
              />
            ) : null}
          </View>
          <View
            style={[
              styles.row_center,
              {justifyContent: 'space-between', marginTop: 10},
            ]}>
            <Card
              style={styles.card}
              childrenIcon={
                <View style={styles.iconView}>
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
                <View style={styles.iconView}>
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
                <View style={styles.iconView}>
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
