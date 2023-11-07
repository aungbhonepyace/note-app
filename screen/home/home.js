import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getRandomColorFromList from '../../utilities/color.js';
import { home_styles } from './home.style.js';
import { cate_styles } from '../cate/cate.style.js';
import { note_styles } from '../note/note.style.js';


const Home = ({navigation}) => {

  const handleNoteNavigate = () => {
    navigation.navigate('Note')
  }

  const cate = [
    { catName: 'All', id: '1' },
    { catName: 'Important', id: '2' },
    { catName: 'Lecture notes', id: '3' },
    { catName: 'To-do-lists', id: '4' },
    { catName: 'Shopping lists', id: '5' }
  ]
//
//  const note = [
//    { noteTitle: 'Team Meeting', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '1' },
//    { noteTitle: 'AAA', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '2' },
//    { noteTitle: 'Shopping list', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '3'},
//    { noteTitle: 'Assignment 1', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '4',},
//    { noteTitle: 'Notes', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '5' },
  //  ]
  
  const DataDisplay = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const storedData = await AsyncStorage.getItem('submittedData');
          if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData);
          }
        } catch (error) {
          console.error('Error loading data from AsyncStorage:', error);
        }
      };
  
      loadData();
    }, []);
  }

  const numofColumns = 2; // for note flatlist

  return (
    <SafeAreaView style={home_styles.container}>
      
      <View style={home_styles.mainLogoContainer}>
        <Text style={home_styles.firstLogo}>NOTE</Text>
        <Text style={home_styles.secondLogo}>APP</Text>
        <Text style={home_styles.firstLogo}>.</Text>
      </View>

      <View style={home_styles.searchContainer}>
        <Image style={home_styles.searchLogo} source={require('../../assets/img_search_logo.png')}></Image>
        <TextInput style={home_styles.searchBar} placeholder='Search for notes'></TextInput>
      </View>

      <View>
        <FlatList
          horizontal={true}
          data={cate}
          renderItem={({ item }) =>
            <Text style={cate_styles.categoryList}>{item.catName}</Text>
          }
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      
        <View  style={note_styles.noteFlatlist}>
          <FlatList 
          numColumns={numofColumns}
          data={note}
          renderItem={({ item }) =>
            <View style={ [note_styles.noteContainer , {backgroundColor: getRandomColorFromList()}] }>
              <Text style={note_styles.noteTitle}>
                {item.noteTitle}
              </Text>
              <Text style={note_styles.noteDesc}>
                {item.description}
              </Text>
            </View>
          }
          />
        </View>


      </View>

      <FAB color='black' icon='plus' color='#fff' style={[{backgroundColor: 'black', borderRadius: 100},home_styles.button]} onPress={handleNoteNavigate}/>

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Home