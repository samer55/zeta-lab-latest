import React, { Component } from 'react'
import {
  Image,
  View,
  StyleSheet
} from 'react-native'

export default class Background extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer : {
  flex:1,
  backgroundColor:'red'
  },
  background : {
    flex: 1,
    height: null,
    width: null
  }
})
