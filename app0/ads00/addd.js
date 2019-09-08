import Images from './image'
import Texts from './text'
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import { createIconSetFromFontello } from 'react-native-vector-icons'


import { Card, ListItem, Divider,Header } from 'react-native-elements'


export default class Promuh extends Component {
  constructor(props) {
    super(props)
    this.state = {
name:this.props.navigation.state.params.name,
    }
  }
  static navigationOptions = () => ({
    title: `عروض`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  render() {
    return (
      <View style={{flex:1}}>

        <Images navigation={this.props.navigation}/>
        <Texts navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5
  },
  tab: {
    flex: 4,
    //borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    left: 16,
    top: 10,
    height: 15,
    width: 15,
    borderRadius: 90,
    //marginRight: 25,
    backgroundColor: 'red',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
  },
  counter: {
    fontSize: 10,
    fontWeight: '200',
    color: '#FFF',
  },
})
