import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react'

const Home = ({navigation}) => {

  const [text, setText] = useState('');
  const [cate, setCate] = useState('');
  const handleNavigate = () => {
    navigation.navigate('Category')
  }

  return (
    <SafeAreaView style={home_styles.container}>

      <View style={home_styles.mainLogoContainer}>
        <Text style={home_styles.firstLogo}>NOTE</Text>
        <Text style={home_styles.secondLogo}>APP .</Text>
      </View>

      <View style={home_styles.searchContainer}>
        <Image style={home_styles.searchLogo} source={require('../../assets/img_search_logo.png')}></Image>
        <TextInput style={home_styles.searchBar} value={text} placeholder='Search for notes'></TextInput>
      </View>

      <View>
        
      </View>

      <TouchableOpacity style={home_styles.button} onPress={handleNavigate}>
        <View>
          <Image style={home_styles.buttonImg} source={require('../../assets/img_add.png')} />
        </View>
      </TouchableOpacity>

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

import { home_styles } from './home.style';

export default Home