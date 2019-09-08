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
import { firebaseApp } from '../../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
import RNPickerSelect from 'react-native-picker-select';
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
const uploadImage = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = firebaseApp.storage().ref('us').child(imageName)
      fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


const screenWidth = Dimensions.get('window').width

@inject("appStore") @observer
export default class Pimg extends Component {
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
      postTitle: '',
      postPrice: '',
      img:'',
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
    const uid = this.props.appStore.user.uid

    console.log("--------- MY POSTS --------- " + uid)
    firebaseApp.database().ref('us/'+ uid ).on('value',
    (snapshot) => {
      val = snapshot.val()
      if (snapshot.val()) {
        this.setState({
          img:val.imagep
        })
      }
      else {
      }
    })
  }


  render() {
    const height = ((screenWidth-40)*this.state.imageHeight/this.state.imageWidth)

    return (
      <View style={styles.container}>
      <Text>{this.state.postStatus}</Text>
      { this.state.imagePath === null ? <Image
        style={styles.userImage}
        source={{
          uri: this.state.img,
        }}
      /> :
        <Image
     source={{ uri:this.state.imagePath }}
      style={styles.userImage}
     />
         }
     <TouchableOpacity onPress={this._takePicture}>
     <Icon
     name={'md-camera'}
     size={30}
     color={'blue'}
     />
     </TouchableOpacity>
             <TouchableOpacity style={styles.btnAdd} onPress={this.ima}>
          <Text style={{color:'white',fontSize:20}}>SAVE</Text>
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
    ImagePicker.showImagePicker(cam_options, (response) => {
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
  ima = () => {
    this.setState({
      postStatus: 'Changing profile picture...',
    })

          const uid = this.props.appStore.user.uid

          const newPostKey = firebaseApp.database().ref('us').push().key
          const imageName = `${uid}.jpg`
          uploadImage(this.state.imagePath, imageName)
          .then(url => {

                  firebaseApp.database().ref('us/').child(this.props.appStore.user.uid).update({imagep:url})


              setTimeout(() => {
              }, 1000)
            })
this.setState({postStatus:'changed'})
setTimeout(() => {
  this.setState({ postStatus: null })
}, 3000)
  }

  _handleNewPost = () => {
    this.setState({
      postStatus: 'Posting...',
    })

          const uid = this.props.appStore.user.uid
          const username = this.props.appStore.user.displayName
const city = this.state.favColor
          const newPostKey = firebaseApp.database().ref(city).push().key

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
              puid: newPostKey,
            }
            let updates = {}
            updates[city + newPostKey] = postData
            updates['/user_posts/' + uid + city + newPostKey] = postData
            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              postPrice: '',
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
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  },
  userImage: {
    borderColor: 'grey',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
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
