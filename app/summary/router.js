import React, { Component } from 'react'
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform} from 'react-native'
import Hometab from '../screens/hometab';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Testn from '../namet/name'
import Prom from '../ads/add'
import Grid from '../summary/grid'
import Index from '../near/index'
import Amman from '../near/amman'
import Irbid from '../near/irbid'
import Zarqa from '../near/zarqa'
import Profila from '../ads/profilea'
import Balqa from '../near/balqa'
import Texts from '../ads/text'
import Aqaba from '../near/aqaba'
import Ramtha from '../near/ramtha'
import Images from '../ads/image'
import Indexb from '../BMI/index'
import Bmim from '../BMI/bmim'
import Bmif from '../BMI/bmif'
import { Provider } from 'mobx-react/native';
import appStore from '../store/AppStore'
import LoginScreen from '../screens/login_screen'
import HomeScreen from '../screens/home_screen'
import SettingScreen from '../screens/setting_screen'
import CreateNew from '../createNew'
import Lab from '../screens/labsc'
import Promu from '../ads0/addd'
import Promuh from '../ads00/addd'
import Labimg from '../screens/labimg'
import User from '../screens/user'
import Pimg from '../screens/pimg'
import Post from '../screens/post'
import Loading from '../screens/load'
import Newp from '../newp'
import Uimg from '../screens/uimg'

export const summary = StackNavigator({
  Feed: {
    screen: Hometab,
    navigationOptions: {
      header:null,
    },
  },
  Details: {
    screen: Testn,

  },
  texts: {
    screen: Texts,

  },
  prom: {
    screen: Prom,

  },
  sum: {
    screen: Grid,

  },
  images: {
    screen: Images,

  },

  near: {
    screen: Index,

  },
  amman: {
    screen: Amman,

  },
  profilea: {
    screen: Profila,

  },
  irbid: {
    screen: Irbid,

  },
  zarqa: {
    screen: Zarqa,

  },
  balqa: {
    screen: Balqa,

  },
  user: {
    screen: User,

  },
  aqaba: {
    screen: Aqaba,

  },
  ramtha: {
    screen: Ramtha,

  },
  bmi: {
    screen: Indexb,

  },
  la: {
    screen: Labimg,

  },
  bmim: {
    screen: Bmim,

  },
  bmif: {
    screen: Bmif,

  },
  pul: {
    screen: Promuh,

  },
});

export default summary;
