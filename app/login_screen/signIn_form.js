import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  BackAndroid,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native'
import { firebaseApp } from '../../firebase'
import * as Animatable from 'react-native-animatable'
import { observer,inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';


export function replace (routeName, params) {
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName, params})
    ]
  })
}
@inject("appStore") @observer
export default class SignInForm extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      init: true,
      errMsg: null,
      forgotPass: false,
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    console.log("--------- SIGN IN --------- ")
    BackAndroid.addEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    const errorMessage = this.state.errMsg ? <Text style={styles.errMsg}>{this.state.errMsg}</Text> : null
    return (
      <Animatable.View
        animation={animation}
        style={styles.container}
        onAnimationEnd={this._handleAnimEnd}>
        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={this._handleBackBtnPress}>
          <View style={styles.submitBtnContainer}>
            <Text style={styles.submitBtn}>back</Text>
          </View>
        </TouchableOpacity>
        </View>
        <Text style={styles.title}>Login</Text>
        {errorMessage}
        <View>
          <View style={[styles.inputContainer, { marginBottom: 10 }]}>
            <TextInput
              style={styles.inputField}
              underlineColorAndroid='transparent'
              placeholder='Email'
              autoCorrect={false}
              keyboardType='email-address'
              autoCapitalize='none'
              placeholderTextColor='rgba(255,255,255,.6)'
              value={this.state.email}
              onSubmitEditing={(event) => {
                this.refs.SecondInput.focus();
              }}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={[styles.inputContainer, { marginBottom: 10 }]}>
            <TextInput
              ref='SecondInput'
              style={styles.inputField}
              underlineColorAndroid='transparent'
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor='rgba(255,255,255,.6)'
              value={this.state.password}
              onSubmitEditing={(event) => {this._handleSignIn()}}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <View style={styles.btnContainers}>
            <TouchableOpacity onPress={this._handleForgotPassword}>
              <View style={styles.forgotBtnContainer}>
                <Text style={styles.forgotBtn}>{'Forgot Password?'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._handleSignIn}>
              <View style={styles.submitBtnContainer}>
                <Text style={styles.submitBtn}>{'Let\'s Go'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:50}}>
          </View>
        </View>
      </Animatable.View>
    )
  }

  _handleForgotPassword = () => {
    this.setState({ init: false, forgotPass: true })
  }

  _handleSignIn = () => {
    this.setState({errMsg: 'Signing In...'})
    if (this.state.email.length == 0) {
      this.setState({errMsg: "Please enter your email."})
    }
    else if (this.state.password.length == 0) {
      this.setState({errMsg: "Please enter your passowrd."})
    }
    else {
      firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {


    this.props.appStore.user = user
    this.props.appStore.username = user.displayName
    firebaseApp.database().ref('users').child(user.uid).once('value')
    .then((snapshot) => {
      this.props.navigation.navigate('home')
    }) })

      .catch((error) => {
        this.setState({ errMsg: error.message })
      })
    }
  }

  _handleGoBack = () => {
    this.setState({ init: false })
  }

  _handleBackBtnPress = () => {
    this._handleGoBack()
    return true
  }

  _handleAnimEnd = () => {
    if (this.state.forgotPass) {
      this.props.onForgotPass()
    } else if (!this.state.init) {
      this.props.onBackFromSignIn()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  errMsg: {
    width: 280,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 5
  },
  inputField: {
    width: 280,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#fff'
  },
  btnContainers: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280
  },
  forgotBtnContainer: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  forgotBtn: {
    fontSize: 12,
    color: '#fff',
  },
  submitBtnContainer: {
    width: 120,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    fontWeight: '800',
    fontSize: 20,
    color: 'red'
  }
})
