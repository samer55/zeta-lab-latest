import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Linking
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { observer, inject } from 'mobx-react/native'
import PropTypes from 'prop-types';
import {Container} from 'native-base'
import {Text} from 'react-native-elements';
const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height

@inject("appStore") @observer
export default class InitialView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: true,
      signInPressed: false,
      signUpPressed: false
    }
  }
  static navigationOptions = {
     title: 'Please sign in',
   };


  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    return (
      <ImageBackground
        source={require('./bi.jpg')}
        style=  {styles.imag}      blurRadius={1}
             >
        <View
          style={{backgroundColor: 'rgba(0,0,0,0.2)',width:screenWidth,height:screen,    alignItems: 'center',
          justifyContent: 'center'}} >
      <Text style={{fontStyle:'italic',color:'white',marginBottom:7}} h1>ζeta</Text>
          <View style={styles.btnBox}>
            <TouchableOpacity onPress={this._handleSignInPress.bind(this)}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{ 'Log in'.toUpperCase() }</Text>
              </View>
            </TouchableOpacity>

          </View>


          <Text style={{    backgroundColor: 'transparent',
              marginTop: 20,
              fontWeight: '800',
              fontSize: 15,
          color: 'white',}}>To register your lab communicate with</Text>
          <Text style={{    backgroundColor: 'transparent',
              marginTop: 20,
              fontWeight: '800',
              fontSize: 15,
          color: 'white',}}>Sohib hussin abo dalo</Text>

          <Text style={{    backgroundColor: 'transparent',
              marginTop: 20,
              fontWeight: '800',
              fontSize: 15,
          color: 'white',}}>0797804206</Text>
          <TouchableOpacity onPress={ ()=> Linking.openURL('http://Opentiq.com') } >
          <Text style={{    backgroundColor: 'transparent',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 12,
          color: 'silver',}}>Developed by Opentiq</Text>
        

          </TouchableOpacity>

        </View>
      </ImageBackground>          )
  }

  _handleSignInPress() {
    this.setState({ init: false, signInPressed: true })
    this.props.onSignIn()

  }

  _handleSignUpPress() {
    this.setState({ init: false, signUpPressed: true })
    this.props.onSignUp()

  }

  _handleAnimEnd() {
    if (!this.state.init) {
      if (this.state.signInPressed) {
        this.props.onSignIn()
      }
      if (this.state.signUpPressed) {
        this.props.onSignUp()
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    paddingBottom: 20
  },
  title: {
    backgroundColor: 'transparent',
    marginTop: 20,
    fontWeight: '300',
    fontSize: 80,
    color: 'black',
  },
  version: {
    backgroundColor: 'transparent',
    fontSize: 6,
    marginBottom: 20,
    color: '#fff',
  },
  btnBox: {
    height: 40,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  btnContainer: {
    width: 130,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imag: {
    flexGrow:1,
    width:screenWidth,
  height:screen
  },
  btnText: {
    fontWeight: '800',
    fontSize: 20,
    color: 'red'
  }
})
