import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react'
import { PaperProvider, RadioButton } from 'react-native-paper';

import Header from '../../components/header.js'

const Note = () => {
  const [checked, setChecked] = useState('');

  const handleRadioPress = (value) => {
    setChecked(value);
  };


  return (
    <PaperProvider>
      <SafeAreaView>
        <Header />
        <View>
          <Text style={note_styles.title}>Title</Text>
          <TextInput style={note_styles.titleInputfield} placeholder='Enter Title' />
        </View>

        <View>
          <Text>Category</Text>
          <RadioButton.Group onValueChange={handleRadioPress} value={checked}>
            <RadioButton.Item status={ checked === 'Lecture Notes' ? 'checked' : 'unchecked' } label="Important" value="Lecture Notes" />
            <RadioButton.Item status={ checked === 'To-do-lists' ? 'checked' : 'unchecked' } label="To-do-lists" value="To-do-lists" />
            <RadioButton.Item status={ checked === 'Shopping lists' ? 'checked' : 'unchecked' }label="Shopping lists" value="Shopping lists" />
          </RadioButton.Group>
          <Text>Selected option: {checked}</Text>

          
        </View>
      </SafeAreaView>
    </PaperProvider>

    
  )
}

import { note_styles } from './note.style'
//import { home_styles } from '../home/home.style';
export default Note