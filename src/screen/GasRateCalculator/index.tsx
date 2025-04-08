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
} from 'lucide-react-native';
import {styles} from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CustomButton from '../../components/CustomButton';

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
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#475569',
              fontWeight: '700',
              fontSize: 30,
            }}>
            Gas Rate Calculator
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Dropdown
            style={styles.dropdown}
            data={GAS_LIST}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select item'}
            searchPlaceholder="Please Search..."
            value={gasName}
            onChange={item => {
            }}
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
            }}
          />
        </View>
        <View
          style={{margin: 10, justifyContent: 'center', alignItems: 'center'}}>
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
                  onChange={item => {
                  }}
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
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <CustomButton
              style={[styles.btnStyle,{backgroundColor:'#F59E0B'}]}
              textName={'Reset'}
              handleSubmit={()=>{}}
              buttonTextStyle={styles.btnTextStyle}
            />
           <CustomButton
              style={[styles.btnStyle,{backgroundColor:'#0C9488'}]}
              textName={'Start'}
              handleSubmit={()=>{}}
              buttonTextStyle={styles.btnTextStyle}
            />
        </View>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
          <View style={styles.card}>
            <FlameIcon style={{alignSelf:'center',marginTop:20}} color='gray' size={30}/>
             <Text style={{textAlign:'center',fontWeight:'500',color:'gray'}}>Gas Rate</Text>   
             <Text style={{textAlign:'center',fontWeight:'400',color:'gray'}}>M3/HR</Text>    
             <Text style={{textAlign:'center',fontWeight:'700'}}>0.00</Text>   
          </View>
          <View style={styles.card}>
            <FlameIcon style={{alignSelf:'center',marginTop:20}} color='gray' size={30}/>
             <Text style={{textAlign:'center',fontWeight:'500',color:'gray'}}>Gas Rate</Text>   
             <Text style={{textAlign:'center',fontWeight:'400',color:'gray'}}>M3/HR</Text>    
             <Text style={{textAlign:'center',fontWeight:'700'}}>0.00</Text>   
          </View>
          <View style={styles.card}>
            <FlameIcon style={{alignSelf:'center',marginTop:20}} color='gray' size={30}/>
             <Text style={{textAlign:'center',fontWeight:'500',color:'gray'}}>Gas Rate</Text>   
             <Text style={{textAlign:'center',fontWeight:'400',color:'gray'}}>M3/HR</Text>    
             <Text style={{textAlign:'center',fontWeight:'700'}}>12345678</Text>   
          </View>
        </View>          
      </View>
    </View>
  );
};

export default GasRateCalculator;
