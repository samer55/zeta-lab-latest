import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from './../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
import RNPickerSelect from 'react-native-picker-select';


const screenWidth = Dimensions.get('window').width
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

@inject("appStore") @observer
export default class Newp extends Component {
  constructor(props) {
    super(props)
    this.inputRefs = {}

    this.state = {
      postStatus: null,
      favColor: undefined,
           items: [
               {
                   label: 'amman',
                   value: '/amman/',
               },
               {
                   label: 'irbid',
                   value: '/irbid/',
               },
               {
                   label: 'Zarqa',
                   value: '/zarqa/',
               },
               {
                   label: 'balqa',
                   value: '/balqa/',
               },
               {
                   label: 'aqaba',
                   value: '/aqaba/',
               },
               {
                   label: 'ramtha',
                   value: '/ramtha/',
               },
           ],
      postText: '',
        isChecked:true,
      postTitle: '',
      postPrice: '',
      pricefrom:'',
      checked:'',
      imagePath: null,
      imageHeight: null,
      imageWidth: null,
      spinnervisible: false,
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  componentDidMount() {
  }

  render() {
    const height = ((screenWidth-40)*this.state.imageHeight/this.state.imageWidth)

    return (
      <View style={styles.container}>
      <Text style={{textAlign:'center'}}>add test price?</Text>

                  <View style={styles.titleContainer}>
                    <TextInput
                      style={styles.inputField}
                      value={this.state.postTitle}
                      onChangeText={(text) => this.setState({ postTitle: text })}
                      underlineColorAndroid='transparent'
                      placeholder='please add name of test'
                      placeholderTextColor='rgba(0,0,0,.6)'
                      onSubmitEditing={(event) => {
                        this.refs.Second.focus();
                      }}
                    />
                  </View>
                  <View style={styles.titleContainer}>
                      <TextInput
                      ref='Second'
                        style={styles.inputField}
                        value={this.state.pricefrom}
                        onChangeText={(text) => this.setState({ pricefrom: text })}
                        underlineColorAndroid='transparent'
                        placeholder='Price from..'
                        placeholderTextColor='rgba(0,0,0,.6)'
                        onSubmitEditing={(event) => {
                          this.refs.third.focus();
                        }}
                      />
                    </View>
                  <View style={styles.titleContainer}>
                    <TextInput
                    ref='third'
                      style={styles.inputField}
                      value={this.state.postPrice}
                      onChangeText={(text) => this.setState({ postPrice: text })}
                      underlineColorAndroid='transparent'
                      placeholder='to range'
                      placeholderTextColor='rgba(0,0,0,.6)'
                      onSubmitEditing={(event) => {this._handleNewPost()}}
                    />
                  </View>

       <TouchableOpacity style={styles.btnAdd} onPress={this._handleNewPost}>
          <Icon
            name={'md-add'}
            size={30}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    )
  }

  _takePicture = () => {
    const cam_options = {
      mediaType: 'photo',
      maxWidth: 600,
      maxHeight: 600,
      quality: 1,
      noData: true,
    };
    ImagePicker.launchCamera(cam_options, (response) => {
      if (response.didCancel) {
      }
      else if (response.error) {
      }
      else {
        this.setState({
          imagePath: response.uri,
          imageHeight: response.height,
          imageWidth: response.width,
        })
      }
    })
  }

  _handleNewPost = () => {
    this.setState({
      postStatus: 'Posting...',
    })

          const uid = this.props.appStore.user.uid
          const username = this.props.appStore.user.displayName
const city = this.state.favColor
          const newPostKey = firebaseApp.database().ref('posts').push().key

            const postData = {
              username: this.props.appStore.user.displayName,
              uid: uid,
              createdAt: firebase.database.ServerValue.TIMESTAMP,
              updatedAt: firebase.database.ServerValue.TIMESTAMP,
              status: "available",
              clientId: "",
              clientName: "",
              new_messages: 0,
              text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
              title: this.state.postTitle,
              price: this.state.postPrice,
              pricef:this.state.pricefrom,
              puid: newPostKey,
            }
            let updates = {}
            updates['/posts/' + newPostKey] = postData
            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              postPrice: '',
                              pricefrom:'',
                              favColor:'',
                              postText: '',
                            })
              setTimeout(() => {
                this.setState({ postStatus: null })
              }, 3000)
              setTimeout(() => {
              }, 1000)
            })
            .catch(() => {
              this.setState({ postStatus: 'Something went wrong!!!' })
            })

          .catch(error => {
            console.log(error)
          })


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    padding: 10,
    //flexDirection: 'column',
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
    color: 'red'
  },
  message: {
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 160,
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  titleContainer: {
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputField: {
    flex: 1,
    width: 300,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 13,
  },
  btnAdd: {
    width: 280,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  postImage: {
    alignSelf: 'center',
    height: 140,
    width: 140,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
