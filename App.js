import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './app/components/home';
import QuestionScreen from './app/components/questionScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <QuestionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
