import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getRandomColorFromList from '../../utilities/color.js';
import { home_styles } from './home.style.js';
import { cate_styles } from '../cate/cate.style.js';
import { note_styles } from '../note/note.style.js';


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const storedData = await AsyncStorage.getItem('submittedData').then((res) => JSON.parse(res))
    console.log("Store data: ", storedData);
    setData(storedData ?? [])
  };

  const handleNoteNavigate = () => {
    navigation.navigate('Note')
  }

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
            <TouchableOpacity>
              <Text style={cate_styles.categoryList}>{item.catName}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        <View style={note_styles.noteFlatlist}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={({ item }) =>
            (<View style={[note_styles.noteContainer, { backgroundColor: getRandomColorFromList() }]}>
              <Text style={note_styles.noteTitle}>
                {item.title}
              </Text>
              <Text style={note_styles.noteDesc}>
                {item.detail}
              </Text>
            </View>)
            }
          />
        </View>
      </View>

      <FAB icon='plus' color='#fff' style={[{ backgroundColor: 'black', borderRadius: 100 }, home_styles.button]} onPress={handleNoteNavigate} />

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const cate = [
  { catName: 'All', id: '1' },
  { catName: 'Important', id: '2' },
  { catName: 'Lecture notes', id: '3' },
  { catName: 'To-do-lists', id: '4' },
  { catName: 'Shopping lists', id: '5' }
]

export default Home