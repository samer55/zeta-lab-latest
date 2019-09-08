import React, { Component } from 'react'
import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StatusBar,

  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions
} from 'react-native'

import b64 from "base64-js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import uuid from 'uuid';
import { firebaseApp } from '../../../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
const screenWidth = Dimensions.get('window').width

@inject("appStore") @observer
export default class Addn extends Component {
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
      image: null,
      imageUrl: null,
      downloadUrl: null,
      imageLoading: false,
      imageObj: null
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



    return (

      <View style={{   flex: 1,
        width: screenWidth,
      padding: 10,}}>
        <KeyboardAwareScrollView ref='scrollContent'>
          <View style={{
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
          }}>
            <TextInput
              style={{height:50}}
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
            </View>
          <TouchableOpacity style={{
            width:40,
            height:40,
            borderRadius:100,
            backgroundColor:'#2f95dc',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
            onPress={this._handleNewPost}
          >

          </TouchableOpacity>
        </KeyboardAwareScrollView>

</View>
    )
  }

  _handleNewPost = () => {
    this.setState({
      postStatus: 'Posting...',
    })

      if (this.state.postTitle.length > 0) {

        const uid = this.props.appStore.user.uid
            const newPostKey = firebaseApp.database().ref('tag').push().key
            const postData = {
              uid: uid,
              clientId: "",
              clientName: "",
              text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
              title: this.state.postTitle,
              puid: newPostKey,
            }
            let updates = {}
            this.props.appStore.post_count = this.props.appStore.post_count + 1
            this.props.appStore.chat_count = this.props.appStore.chat_count + 1
            updates['/tag/' + newPostKey] = postData
            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              postPrice: '',
                              postText: '',
                              imagePath: null,
                              imageHeight: null,
                              imageWidth: null,
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
          })


      } else {
        this.setState({ postStatus: 'Please enter a title' })
      }

  }

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,

    flexDirection: 'column',
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
    width: 300,

    fontSize: 13,
  },
  btnAdd: {
    width: 150,
    height: 40,
    backgroundColor:'#2f95dc',
    borderRadius: 5,
    marginTop:10,
    marginLeft:40,
    marginBottom:10,
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
