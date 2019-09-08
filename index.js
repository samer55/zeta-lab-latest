/** @format */
import React from 'react';
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Init from './App'
import {AppRegistry} from 'react-native';
import App from './app/config/router';
import App0 from './app0/config/router';

import {name as appName} from './app.json';
export const lan = SwitchNavigator({
  first: {
    screen: Init,
    navigationOptions: {
      header:null,
    },
  },
  app: {
    screen: App,
    navigationOptions: {
      header:null,
    },
  },
  appa: {
    screen: App0,
    navigationOptions: {
      header:null,
    },
  },
});


AppRegistry.registerComponent(appName, () => lan);
