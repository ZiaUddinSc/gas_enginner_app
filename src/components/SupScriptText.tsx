import React, {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  base: string;
  exponent: string;
  eloseBracket?: String;
};

const SuperscriptText = (props: Props) => {
  const {base, exponent, eloseBracket} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      {/*View to wrap multiple text*/}
      <Text
        style={{
          fontSize: hp('1.4%'),
          fontWeight: '500',
          color: 'gray',
          lineHeight: 30,
        }}>
        {base}
      </Text>
      <Text style={{fontSize: hp('1.4%'), fontWeight: '500', color: 'gray'}}>
        {exponent}
      </Text>
      <Text
        style={{
          fontSize: hp('1.4%'),
          fontWeight: '500',
          color: 'gray',
          lineHeight: 30,
        }}>
        {eloseBracket}
      </Text>
    </View>
  );
};

export default SuperscriptText;
