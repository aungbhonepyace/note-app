import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image } from 'react-native';
import AppNavigator from './navigation/navigation';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator/>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
});
