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
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Card,
  CardItem,
  FooterTab,
  Button,
  Input,
  Left,
  Item,
  Right,
  Body,
  Spinner
} from "native-base";
import b64 from "base64-js";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Constants, ImagePicker } from 'expo';
import uuid from 'uuid';
import { Ionicons } from '@expo/vector-icons';
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
const screenWidth = Dimensions.get('window').width
import { StackNavigator } from "react-navigation";
const url =
  'gs://weask-55.appspot.com';

  const uploadImage = result => {
    return new Promise((resolve, reject) => {
      const byteArray = b64.toByteArray(result.base64);
      const metadata = { contentType: "image/jpg" };
      const sessionId = new Date().getTime();
      const storage = firebase.storage();
      const imageRef = storage.ref("posts").child(`${sessionId}`);
      imageRef
        .put(byteArray, metadata)
        .then(snapshot => {
          console.log("uploaded image!");
        })
        .then(() => {
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
@inject("appStore") @observer
export default class Cat extends Component {
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
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true
    });
    console.log("result", result);
    if (result["cancelled"]) {
      this.setState({ imageLoading: false });
    } else {
      this.setState({ imageUrl: result["uri"], imageObj: result });
    }
  };

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  componentDidMount() {
  }

  render() {
    let { image } = this.state;

    const height = ((screenWidth-40)*this.state.imageHeight/this.state.imageWidth)


    return (

<Card>

                <Item rounded style={{backgroundColor:'white'}}>
            <Input
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
          <Ionicons
            name={'md-add'}
            size={30}
            color={'#fff'}
          />
          </TouchableOpacity>
            </Item>

</Card>
    )
  }
  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>


      </View>
    );
  };
  showImage() {
      if (this.state.imageUrl) {
        return (
          <Image
            source={{ uri: this.state.imageUrl }}
            style={{ width: 200, height: 200, marginBottom: 10 }}
          />
        );
      } else if (this.state.imageLoading) {
        return <Spinner color="gray" />;
      }
    }
  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
    }
  };
  _handleNewPost = () => {
    this.setState({
      postStatus: 'Posting...',
    })

      if (this.state.postTitle.length > 0) {

        const uid = this.props.appStore.user.uid
            const username = this.props.appStore.user.displayName
            const newPostKey = firebaseApp.database().ref('posttag').push().key
           uploadImage(this.state.imageObj)
            const postData = {
              username: username,
              uid: uid,
              create: firebase.database.ServerValue.TIMESTAMP,
              clientId: "",
              clientName: "",
              text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
              title: this.state.postTitle,
              puid: newPostKey,
            }
            let updates = {}
            updates[`/tag/` + newPostKey] = postData
            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'Posted! Thank You.',
                              postTitle: '',
                              postText: '',
                              imageObj: false,
                              image: null,
                              imageUrl:null,
                              imageLoading: false,

                            })
              setTimeout(() => {
                this.setState({ postStatus: null })
              }, 3000)
            })
            .catch(() => {
              this.setState({ postStatus: 'Something went wrong!!!' })
            })

          .catch(error => {
            console.log(error)
          })


      } else {
        this.setState({ postStatus: 'Please enter a title' })
      }

  }

}

async function uploadImageAsync(uri) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());

  const snapshot = await ref.put(blob);
  return snapshot.downloadURL;
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
    color: getColor()
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
