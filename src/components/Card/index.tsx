import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface CardProps {
  style;
  childrenIcon?: any;
  cardHeader?: string;
  cardTextString?: any;
  calculatorValue?: string;
}
const Index = (props: CardProps) => {
  const {style, childrenIcon, cardTextString, cardHeader, calculatorValue} =
    props;
  return (
    <View style={style}>
      {childrenIcon}
      <Text style={{textAlign: 'center', fontWeight: '500', color: 'gray',fontSize:hp('2%')}}>
        {cardHeader}
      </Text>
      <Text style={{textAlign: 'center', fontWeight: '400', color: 'gray',fontSize:hp('1.5%')}}>
        {cardTextString}
      </Text>
      <Text style={{textAlign: 'center', fontWeight: '700',fontSize:hp('3%')}}>
        {calculatorValue}
      </Text>
    </View>
  );
};
export default Index;
