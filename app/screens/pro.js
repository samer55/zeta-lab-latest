import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator ,StackNavigator} from 'react-navigation'
// import the different screens
import LoginScreen from './login_screen'
import HomeScreen from './home_screen'

export const Roo  =  SwitchNavigator(
  {
    login: LoginScreen,
    home: HomeScreen,
  },

);
