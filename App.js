import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback, //kisi image ko wrap krne pe pta nhi chalega ki ye clickable hai ki nhi but wo click hoga
  TouchableOpacity, //kisi image pe click krne pe effect dikhta hai opacity ka
  TouchableHighlight, //esse wrap krne pe background dark hota hai
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routing from './src/Routes.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(props) {
  const useOrientation = () => {
    const height = useWindowDimensions().height;
    const width = useWindowDimensions().width;
    return { isPortrait: height > width };
  };
  const cx = styles;
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Routing />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  }
});
