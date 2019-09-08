import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { firebaseApp } from '../../firebase'

export default class Loading extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator size="large" />

        <Text>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
