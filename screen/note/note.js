import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react'
import Header from '../../components/header.js'

const Note = () => {
  return (
    <SafeAreaView>
        <Header />
    </SafeAreaView>

    
  )
}

import { note_styles } from './note.style'
import { home_styles } from '../home/home.style';
export default Note