import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.mainLogoContainer}>
        <Text>NOTE</Text>
        <Text>APP .</Text>
      </View>

      <View style={styles.searchContainer}>
        <Image style={styles.searchLogo} source={require('./assets/img_search_logo.png')}></Image>
        <TextInput style={styles.searchBar} value={text} placeholder='Search for notes'></TextInput>
      </View>
      
      <Text>hello</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  mainLogoContainer: {
    flex: 1,
    fontWeight: 600,
    fontFamily: 'Inter',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 20,
    alignItems: 'center'
  },
  searchLogo: {
    width: 30,
    height: 30
  },
  searchBar: {
    height: 10,
  }
});
