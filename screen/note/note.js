import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react'
import { PaperProvider, RadioButton } from 'react-native-paper';

import Header from '../../components/header.js';
import getRandomColorFromList from '../../utilities/color.js';
import { note_styles } from './note.style';

const Note = () => {
  const [checked, setchecked] = useState('');
  const radioOptions = ['Important','Lecture Notes', 'To-do-lists', 'Shopping lists'];

  const handleRadioPress = (value) => {
    setchecked(value);
  };


  return (
    <PaperProvider>
      <SafeAreaView>
        <Header />

        <View style={{marginTop:27, marginHorizontal: 25}}>
          <Text style={note_styles.title}>Title</Text>
          <TextInput style={note_styles.titleInputfield} placeholder='Enter Title' />
        </View>

        <View style={{marginTop:27, marginHorizontal: 25}}>
          <Text style={note_styles.title}>Category</Text>
          <FlatList
            data={radioOptions}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <RadioButton.Item
                label={item}
                value={item}
                status={checked === item ? 'checked' : 'unchecked'}
                onPress={() => handleRadioPress(item)}
                color='rgba(93, 176, 117, 1)'
              />
            )}
          />
        </View>

        <View style={{marginTop:27, marginHorizontal: 25}}>
          <Text style={note_styles.title}>
            Detail
          </Text>
          <TextInput style={note_styles.textArea} multiline={true} numberOfLines={10}/>
        </View>
      </SafeAreaView>
    </PaperProvider>

    
  )
}

//import { home_styles } from '../home/home.style';
export default Note