import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Color from '../../theme/Colors';

interface Props {
  title?: string;
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  rightIcon1?: React.ReactNode;
  onRightPress1?: () => void;
  rightIcon2?: React.ReactNode;
  onRightPress2?: () => void;
}

const CustomHeader = ({
  title,
  leftIcon,
  onLeftPress,
  rightIcon1,
  onRightPress1,
  rightIcon2,
  onRightPress2,
}: Props) => {
  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.side}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPress}>
            {leftIcon}
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        {title && <Text style={[styles.title]}>{title}</Text>}
      </View>

      <View style={[styles.side, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        {rightIcon1 && (
          <TouchableOpacity onPress={onRightPress1} style={{ marginLeft: 10 }}>
            {rightIcon1}
          </TouchableOpacity>
        )}
        {rightIcon2 && (
          <TouchableOpacity onPress={onRightPress2} style={{ marginLeft: 10 }}>
            {rightIcon2}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;