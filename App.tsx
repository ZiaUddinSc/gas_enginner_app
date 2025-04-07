import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  const ref = useRef<null>(null);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
