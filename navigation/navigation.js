import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/home.js'
import Header from '../components/header.js'
import Category from '../screen/cate/cate.js'
import Note from '../screen/note/note.js'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Header' component={Header} />
          <Stack.Screen name='Category' component={Category} />
          <Stack.Screen name='Note' component={Note} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigator