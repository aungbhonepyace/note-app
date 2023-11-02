import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image style={styles.searchLogo} source={require('./assets/img_search_logo.png')}></Image>
        <TextInput style={styles.searchBar} placeholder='Search'></TextInput>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchLogo: {
    width: 30,
    height: 30
  },
  searchBar: {
    width: 370
  }
});
