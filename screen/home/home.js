import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react'

import getRandomColorFromList from '../../components/color.js';

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

  const note = [
    { noteTitle: 'Team Meeting', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '1' },
    { noteTitle: 'AAA', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '2' },
    { noteTitle: 'Shopping list', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '3'},
    { noteTitle: 'Assignment 1', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '4',},
    { noteTitle: 'Notes', description: 'Hello fdfasdf dfdsfdf fdfdsfdsfdfdf ...', id: '5' },
  ]

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
          keyExtractor={(item)=> item.id}
        />

        <FlatList
          data={note}
          renderItem={({ item }) =>
            <View style={ [note_styles.noteContainer , {backgroundColor: getRandomColorFromList()}] }>
              <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
                {item.noteTitle}
              </Text>
              <Text>
                {item.description}
              </Text>
            </View>
          }
        />
      </View>

      <TouchableOpacity style={home_styles.button} onPress={handleNoteNavigate}>
        <View>
          <Image style={home_styles.buttonImg} source={require('../../assets/img_add.png')} />
        </View>
      </TouchableOpacity>

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

import { home_styles } from './home.style';
import { cate_styles } from '../cate/cate.style';
import { note_styles } from '../note/note.style.js'

export default Home