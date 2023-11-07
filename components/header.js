import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { IconButton } from 'react-native-paper'

import {header_styles} from './header.style.js'

const Header = () => {
  const navigation = useNavigation();
  const handleHomeNavigate = () => {
    navigation.navigate('Home')
  }

  return (
      <View styles={header_styles.headerContainer}>
        
        <View styles={header_styles.backArrowContainer}>

          <IconButton
            icon="chevron-left"
            size={60}
            style={header_styles.backArrowImage}
            onPress={handleHomeNavigate}
          />  

        </View>
      
        <View style={header_styles.mainLogoContainer}>
          <Text style={header_styles.firstLogo}>NOTE</Text>
          <Text style={header_styles.secondLogo}>APP</Text>
          <Text style={header_styles.firstLogo}>.</Text>
        </View>
        
      </View>
  )
}

export default Header