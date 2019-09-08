import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  BackAndroid,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
  Picker,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight,
} from 'react-native'
import { firebaseApp } from '../../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ImagePicker from 'react-native-image-picker'
const screenWidth = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/Ionicons'
@inject("appStore") @observer
export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      init: true,
      errMsg: null,
      signUpSuccess: false,
      name: '',
      phone:'',
        info: '',
      email: '',
      password: '',
      time1:'',
      loc:'',
      week1:'',
      week2:'',
      labname:'',
      time2:'',
      imagePath: null,
imageHeight: null,
imageWidth: null,
      modalVisible: false,
    }
  }



  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'

    const errorMessage = this.state.errMsg ?
      <Text style={styles.errMsg}>{this.state.errMsg}</Text>
    : null

    const signUpForm = this.state.signUpSuccess ?
      null
    :

<ScrollView>




      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
          style={styles.inputField}
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          autoCapitalize='words'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder='username'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.Second.focus();
          }}
        />
      </View>
      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
          style={styles.inputField}
          value={this.state.labname}
          onChangeText={(text) => this.setState({ labname: text })}
          autoCapitalize='words'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder='lab name'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.Second.focus();
          }}
        />
      </View>
      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
        ref='Second'
          style={styles.inputField}
          value={this.state.phone}
          onChangeText={(text) => this.setState({ phone: text })}
          autoCapitalize='words'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder='Your phone'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.four.focus();
          }}
        />
      </View>
      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
        ref='four'
          style={styles.inputField}
          value={this.state.info}
          onChangeText={(text) => this.setState({ info: text })}
          autoCapitalize='words'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder='Your lab info'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.fifth.focus();
          }}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
        ref='fifth'
          style={styles.inputField}
          value={this.state.loc}
          keyboardType='default'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => this.setState({ loc: text })}
          underlineColorAndroid='transparent'
          placeholder='Lab Location'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.sixth.focus();
          }}
        />
      </View>
      <View style={[styles.inputContainer, { marginBottom: 10 }]}>
        <TextInput
          ref='sixth'
          style={styles.inputField}
          value={this.state.email}
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => this.setState({ email: text })}
          underlineColorAndroid='transparent'
          placeholder='Your Email'
          placeholderTextColor='rgba(255,255,255,.6)'
          onSubmitEditing={(event) => {
            this.refs.seventh.focus();
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          ref='seventh'
          style={styles.inputField}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          onSubmitEditing={(event) => {this._handleSignUp()}}
          underlineColorAndroid='transparent'
          placeholder='Choose Password'
          secureTextEntry={true}
          placeholderTextColor='rgba(255,255,255,.6)'
        />
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Picker
          style={{width: 100}}
          selectedValue={this.state.week1}
          onValueChange={(lang) => this.setState({week1: lang})}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />

        </Picker>
        <Text style={{fontSize:12}}>-</Text>
        <Picker
          style={{width: 100}}
          selectedValue={this.state.week2}
          onValueChange={(lang) => this.setState({week2: lang})}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />


        </Picker>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Picker
          style={{width: 100}}
          selectedValue={this.state.time1}
          onValueChange={(lang) => this.setState({time1: lang})}>
          <Picker.Item label="7 Am" value="7 Am" />
          <Picker.Item label="8 Am" value="8 Am" />
          <Picker.Item label="9 Am" value="9 Am" />
          <Picker.Item label="10 Am" value="10 Am" />
          <Picker.Item label="11 Am" value="11 Am" />
          <Picker.Item label="12 pm" value="12 pm" />
          <Picker.Item label="1 pm" value="1 pm" />
          <Picker.Item label="2 pm" value="2 pm" />
          <Picker.Item label="3 pm" value="3 pm" />
          <Picker.Item label="4 pm" value="4 pm" />
          <Picker.Item label="5 pm" value="5 pm" />
          <Picker.Item label="6 pm" value="6 pm" />
          <Picker.Item label="7 pm" value="7 pm" />
          <Picker.Item label="8 pm" value="8 pm" />
          <Picker.Item label="9 pm" value="9 pm" />
          <Picker.Item label="10 pm" value="10 pm" />

        </Picker>
        <Text style={{fontSize:12}}>-</Text>
        <Picker
          style={{width: 100}}
          selectedValue={this.state.time2}
          onValueChange={(lang) => this.setState({time2: lang})}>
          <Picker.Item label="7 Am" value="7 Am" />
          <Picker.Item label="8 Am" value="8 Am" />
          <Picker.Item label="9 Am" value="9 Am" />
          <Picker.Item label="10 Am" value="10 Am" />
          <Picker.Item label="11 Am" value="11 Am" />
          <Picker.Item label="12 pm" value="12 pm" />
          <Picker.Item label="1 pm" value="1 pm" />
          <Picker.Item label="2 pm" value="2 pm" />
          <Picker.Item label="3 pm" value="3 pm" />
          <Picker.Item label="4 pm" value="4 pm" />
          <Picker.Item label="5 pm" value="5 pm" />
          <Picker.Item label="6 pm" value="6 pm" />
          <Picker.Item label="7 pm" value="7 pm" />
          <Picker.Item label="8 pm" value="8 pm" />
          <Picker.Item label="9 pm" value="9 pm" />
          <Picker.Item label="10 pm" value="10 pm" />
          <Picker.Item label="11 pm" value="11 pm" />
          <Picker.Item label="12 pm" value="12 pm" />

        </Picker>
      </View>
      <View style={styles.btnContainers}>
        <TouchableOpacity onPress={this._handleSignUp}>
          <View style={styles.submitBtnContainer}>
            <Text style={styles.submitBtn}>{'Let\'s Go'.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>

  return (
  <Animated.View
    animation={animation}
    style={styles.container}
    onAnimationEnd={this._handleAnimEnd}>
    <ScrollView>

      {errorMessage}
      {signUpForm}
</ScrollView>
  </Animated.View>

            )
  }

  _handleSignUp = () => {
    this.setState({errMsg: 'Signing Up...'})
    if (this.state.name.length < 5) {
      this.setState({errMsg: "Your name should be at least 5 characters."})
    }
    else if (this.state.email.length == 0) {
      this.setState({errMsg: "Please enter your email."})
    }
    else if (this.state.loc.length == 0) {
      this.setState({errMsg: "Please enter your location."})
    }
    else if (this.state.labname.length == 0) {
      this.setState({errMsg: "Please enter your lab name."})
    }
    else if (this.state.phone.length == 0) {
      this.setState({errMsg: "Please enter your phone."})
    }
    else if (this.state.time1.length == 0) {
      this.setState({errMsg: "Please enter time from:."})
    }
    else if (this.state.time2.length == 0) {
      this.setState({errMsg: "Please enter time to:."})
    }
    else if (this.state.week1.length == 0) {
      this.setState({errMsg: "Please enter week from:."})
    }
    else if (this.state.week2.length == 0) {
      this.setState({errMsg: "Please enter week to:."})
    }
    else if (this.state.password.length == 0) {
      this.setState({errMsg: "Please enter your passowrd."})
    }
    else {
      firebaseApp.database().ref('usernameList').child(this.state.name.toLowerCase()).once('value')
      .then((snapshot) => {
        if (snapshot.val()) {
          this.setState({ errMsg: "Username not available." })
        }
        else {
          firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((user) => {
            firebaseApp.database().ref('usernameList').child(this.state.name.toLowerCase()).set(user.uid)
            user.updateProfile({displayName: this.state.name})
            .then(() => {
              const uid = user.uid
              const labn = this.state.labname
              const phone = this.state.phone
              const info = this.state.info
              const time1 = this.state.time1
              const time2 = this.state.time2
              const imagep = 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png'
              const week1 = this.state.week1
              const week2 = this.state.week2
              const username = user.displayName
              const loc = this.state.loc
              const email = user.email
              firebaseApp.database().ref('users/' + user.uid)
              .set({
                uid,
                username,
                phone,
                labn,
                loc,
                info,
                imagep,
                time1,
                time2,
                week1,
                week2,
                email,
              })
              firebaseApp.database().ref('us/' + user.uid)
              .set({
                uid,
                username,
                phone,
                labn,
                loc,
                info,
                imagep,
                time1,
                time2,
                week1,
                week2,
                email,
              })

              this.props.appStore.username = user.displayName

              this.props.appStore.user = user
                this.props.navigation.navigate('home')
              }) 
          })
          .catch((error) => {
            this.setState({ errMsg: error.message });
          })
        }
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
    if (!this.state.init) {
      this.props.onBackFromSignUp()
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor:'white',
    marginTop: 2,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
  errMsg: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    width: 280,
    textAlign: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 280
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
    fontSize: 20,
    fontWeight: '800',
    color: 'red'
  },
  showModal: {
    marginTop: 40,
    alignItems: 'center',
  }
})
