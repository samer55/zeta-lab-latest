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
  ScrollView,
ListView,
  UIManager,
  Dimensions
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../../../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
import { Card, Button,Header } from 'react-native-elements'

import appStore from '../../../store/AppStore'
import _ from 'lodash'
import moment from 'moment'

@inject("appStore") @observer
export default class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postStatus: null,
      postText: '',
      postTitle: '',
      postPrice: '',
      imagePath: null,
      imageHeight: null,
      imageWidth: null,
      spinnervisible: false,
      dataSource:new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  componentDidMount() {
    console.log("--------- TIMELINE --------- " + this.state.counter)
    firebaseApp.database().ref().child(this.props.puid).child('com').on('value',
    (snapshot) => {
      console.log("---- TIMELINE POST RETRIEVED ---- "+ this.state.counter +" - "+ _.toArray(snapshot.val()).length)
      if (snapshot.val()) {
        this.setState({ isEmpty: false })
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val()))) })
      }
      else {
        this.setState({ isEmpty: true })
      }
      this.setState({ isLoading: false })
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView ref='scrollContent'>

          <View style={styles.titleContainer}>
            <TextInput
              style={styles.inputField}
              maxLength={34}
              value={this.state.postTitle}
              onChangeText={(text) => this.setState({ postTitle: text })}
              underlineColorAndroid='transparent'
              placeholder='Title'
              placeholderTextColor='rgba(0,0,0,.6)'
              onSubmitEditing={(event) => {
                this.refs.SecondInput.focus();
              }}
            />
            <TouchableOpacity style={styles.btnAdd} onPress={this._handleNewPost}>
              <Icon
                name={'md-add'}
                size={30}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>
          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />
        </KeyboardAwareScrollView>
      </View>
    )
  }
  renderRow(data) {

    return (

      <Card
        containerStyle={{textAlign: 'center',

          // Setting up TextInput height as 50 pixel.

          // Set border width.
          borderWidth: 2,

          // Set border Hex Color Code Here.
          shadowOffset:{  width: 1,  height: 1,  },
          shadowColor: 'black',

          // Set border Radius.
          borderRadius: 20 ,

          //Set background color of Text Input.
        }}
      >
        <Text style={{fontSize:20,fontWeight:'bold'}}>{data.title}</Text>

      </Card>


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

          this.setState({ spinnervisible: true })
          const uid = this.props.appStore.user.uid
          const username = this.props.appStore.user.displayName
          const newPostKey = firebaseApp.database().ref().child(this.props.puid).push().key

            const postData = {
              username: username,
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
              puid: newPostKey,
            }
            let updates = {}
            updates['/com/' + newPostKey] = postData
            firebaseApp.database().ref().child(this.props.puid).child('com').update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              postPrice: '',
                              postText: '',
                              spinnervisible: false,
                            })
              setTimeout(() => {
                this.setState({ postStatus: null })
              }, 3000)
              setTimeout(() => {
                this.refs.scrollContent.scrollToPosition(0, 0, true)
              }, 1000)
            })
            .catch(() => {
              this.setState({ postStatus: 'Something went wrong!!!' })
              this.setState({ spinnervisible: false })
            })

          .catch(error => {
            console.log(error)
            this.setState({ spinnervisible: false })
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
    color: 'black'
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
    flexDirection:'column',
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
    flex:1,
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
  list: {
    flex: 1
  },
})
