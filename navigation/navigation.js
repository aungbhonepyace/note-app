import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/home.js'
import Category from '../screen/cate/cate.js'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Category' component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default AppNavigator