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
            <RadioButton.Item status={ checked === 'first' ? 'checked' : 'unchecked' } label="First" value="first" />
            <RadioButton.Item status={ checked === 'first' ? 'checked' : 'unchecked' } label="Second" value="second" />
            <RadioButton.Item status={ checked === 'first' ? 'checked' : 'unchecked' }label="Third" value="third" />
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