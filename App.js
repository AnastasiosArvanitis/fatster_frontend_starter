/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux';
import store from "./src/store";

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyScreen from "./src/screens/MyScreen/MyScreen";


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <MyScreen />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    color: '#fff',
  },
  container:{
    flex:1,
    padding:5,
    backgroundColor: '#ffffff'
  },
});

export default App;
