import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native'
import Profile from './profile'
import { observer, inject } from 'mobx-react/native'
import PropTypes from 'prop-types';


@inject("appStore") @observer
export default class HomeScreen extends Component {


  componentWillMount() {
    console.log("--------- HOME ---------");
    this.props.appStore.current_page = 'home'
    this.props.appStore.current_puid = ''
  }

  render() {
    return (
      <View style={styles.container}>

        <Profile navigation={this.props.navigation}/>
      </View>
    )
  }

  componentWillUnmount() {
    console.log("---- HOME UNMOUNT ---")
    this.props.appStore.current_page = ''
    this.props.appStore.current_puid = ''
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
