import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
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
      <Text style={{textAlign: 'center', fontWeight: '500', color: 'gray'}}>
        {cardHeader}
      </Text>
      <Text style={{textAlign: 'center', fontWeight: '400', color: 'gray'}}>
        {cardTextString}
      </Text>
      <Text style={{textAlign: 'center', fontWeight: '700'}}>
        {calculatorValue}
      </Text>
    </View>
  );
};
export default Index;
