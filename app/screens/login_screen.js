import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native'
import PropTypes from 'prop-types';
import Background from './background'
const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height


import InitialView from '../login_screen/initial_view'
import SignInForm from '../login_screen/signIn_form'
import SignUpForm from '../login_screen/signUp_form'
import ForgotPassForm from '../login_screen/forgotPassword_form'
import { firebaseApp } from '../../firebase'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

@inject("appStore") @observer
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialScreen: true,
      signIn: false,
      signUp: false,
      forgotPass: false
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    _unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.appStore.user = user
        this.props.appStore.username = user.displayName
        firebaseApp.database().ref('users').child(user.uid).once('value')
        .then((snapshot) => {
          this.props.navigation.navigate('home')
        })
   }
      else {
        this.setState({ initialScreen: true })
      }
      _unsubscribe()
    })
  }
  static navigationOptions = {
     title: 'Please sign in',
   };
  componentWillUnmount() {
  }

  componentWillMount() {
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
       this.props.navigation.navigate((user) ? 'loading' : 'login')
     })
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {
    const initialView = this.state.initialScreen ?
      <InitialView
        onSignIn={this._onSignIn}
        onSignUp={this._onSignUp}
        animDelay={0}/>
    : null

    const signIn = this.state.signIn ?
      <SignInForm
        onBackFromSignIn={this._onBackFromSignIn}
        onForgotPass = {this._onForgotPass}  navigation={this.props.navigation}/>
    : null

    const signUp = this.state.signUp ?
      <SignUpForm
        onBackFromSignUp={this._onBackFromSignUp} navigation={this.props.navigation}/>
    : null

    const fogotPass = this.state.forgotPass ?
      <ForgotPassForm
      onBackFromForgotPass={this._onBackFromForgotPass} />
    : null

    return (
      <ImageBackground
        source={require('../login_screen/bi.jpg')}
        style=  {styles.imag}      blurRadius={1}
             >
        <View
          style={{backgroundColor: 'rgba(0,0,0,0.2)',width:screenWidth,height:screen,justifyContent:'space-around'}} >
          { initialView }
          { signIn }
          { signUp }
          { fogotPass }
        </View>
      </ImageBackground>        )
  }

  _onLogoClicked = () => {
    this.setState({
      initialScreen: true,
      signIn: false,
      signUp: false,
      forgotPass: false
    })
  }

  _onSignIn = () => {
    this.setState({
      initialScreen: false,
      signIn: true
    })
  }

  _onBackFromSignIn = () => {
    this.setState({
      initialScreen: true,
      signIn: false
    })
  }

  _onSignUp = () => {
    this.setState({
      initialScreen: false,
      signUp: true
    })
  }

  _onBackFromSignUp = () => {
    this.setState({
      initialScreen: true,
      signUp: false
    })
  }

  _onForgotPass = () => {
    this.setState({
      initialScreen: false,
      signIn: false,
      signUp: false,
      forgotPass: true
    })
  }

  _onBackFromForgotPass = () => {
    this.setState({
      initialScreen: true,
      forgotPass: false
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage : {
    height: 220,
    width: 220,
  },
  imag: {
    flexGrow:1,
    width:screenWidth,
  height:screen
  },
})
