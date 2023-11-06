import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react'

const Note = ({navigation}) => {

  const handleHomeNavigate = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={note_styles.container}>

      <View styles={note_styles.headerContainer}>
        
        <TouchableOpacity styles={note_styles.backArrow} onPress={handleHomeNavigate}>
          <Image style={note_styles.backArrowImage} source={require('../../assets/img_backArrow.png')} />
        </TouchableOpacity>
        <View style={home_styles.mainLogoContainer}>
          <Text style={home_styles.firstLogo}>NOTE</Text>
          <Text style={home_styles.secondLogo}>APP</Text>
          <Text style={home_styles.firstLogo}>.</Text>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

import { note_styles } from './note.style'
import { home_styles } from '../home/home.style';
export default Note