import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/navigation';

export default function App() {

  return (
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  );
}

export const styles = StyleSheet.create({
});
