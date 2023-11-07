import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { PaperProvider, RadioButton, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/header.js';
import getRandomColorFromList from '../../utilities/color.js';
import { note_styles } from './note.style';

const Note = () => {
  const [checked, setchecked] = useState('');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const radioOptions = ['Important','Lecture Notes', 'To-do-lists', 'Shopping lists'];

  const handleRadioPress = (value) => {
    setchecked(value);
  };

  const handleSubmit = async () => {
    // Create a new data entry with the submitted values, including a unique ID
    const newData = {
      id: uuid(), // Generate a unique ID using UUID
      selectedValue,
      title,
      detail,
    };

    // Update the submitted data state with the new entry
    setSubmittedData((prevData) => [...prevData, newData]);

    // Clear the input fields
    setSelectedValue('');
    setTitle('');
    setDetail('');

    // Save the entire data array to AsyncStorage
    try {
      await AsyncStorage.setItem('submittedData', JSON.stringify(submittedData));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };



  return (
    <PaperProvider>
      <SafeAreaView>
        <Header />

        <View style={{marginTop:27, marginHorizontal: 25}}>
          <Text style={note_styles.title}>Title</Text>
          <TextInput style={note_styles.titleInputfield} placeholder='Enter Title' onChangeText={setTitle} />
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
          <TextInput style={note_styles.textArea} multiline={true} numberOfLines={10} onChangeText={setDetail}/>
        </View>

        <View style={note_styles.buttonContainer}>
          <Button style={note_styles.button} mode='contained' title="Create" onPress={handleSubmit}>
            Create
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>

    
  )
}

//import { home_styles } from '../home/home.style';
export default Note