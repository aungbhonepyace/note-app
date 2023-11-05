import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [cate, setCate] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.mainLogoContainer}>
        <Text style={styles.firstLogo}>NOTE</Text>
        <Text style={styles.secondLogo}>APP .</Text>
      </View>

      <View style={styles.searchContainer}>
        <Image style={styles.searchLogo} source={require('./assets/img_search_logo.png')}></Image>
        <TextInput style={styles.searchBar} value={text} placeholder='Search for notes'></TextInput>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button></Button>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
  mainLogoContainer: {
    fontWeight: 600,
    flexDirection: 'row',
    padding: 18,
    justifyContent: "center",
  },
  firstLogo: {
    fontSize: 24,
    marginRight: 10
  },
  secondLogo: {
    fontSize: 24,
    color: "#B0E9CA",
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ECECEC",
    padding: 10,
    alignItems: 'center'
  },
  searchLogo: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  searchBar: {
    height: 10,
  }
});
