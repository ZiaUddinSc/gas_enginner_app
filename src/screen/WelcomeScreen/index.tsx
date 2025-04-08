// 📁 screens/WelcomeScreen/index.tsx
import React,{useEffect,useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import LogoSvg from '../../components/LogoSvg';

const AnimatedText = ({ text, interval = 150 }) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        if (currentIndex < (text?.length || 0)) {
            setDisplayedText((prevText) => prevText + (text[currentIndex] || ''));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [text, interval]);
  
    return <Text style={styles.title}>{displayedText}</Text>;
  };

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
       <AnimatedText text="Welcome back!" interval={100} />

     
    <LogoSvg height={100} width={100}/>
    <View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.registerText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;