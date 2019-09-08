import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  ActivityIndicator,
  Alert,

  Platform,
  UIManager,
  ImageBackground,
  Dimensions,
  ListView
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'

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
      const imageRef = firebaseApp.storage().ref('img').child(imageName)
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
export default class Post extends Component {
  constructor(props) {
    super(props)
    this.inputRefs = {}

    this.state = {
      postStatus: null,
      favColor: undefined,
           items: [
               {
                   label: 'عمان',
                   value: '/amman/',
               },
               {
                   label: 'اربد',
                   value: '/irbid/',
               },
               {
                   label: 'زرقاء',
                   value: '/zarqa/',
               },
               {
                   label: 'بلقاء',
                   value: '/balqa/',
               },
               {
                   label: 'عقبه',
                   value: '/aqaba/',
               },
               {
                   label: 'رمثا',
                   value: '/ramtha/',
               },
           ],
      postText: '',
      postTitle: '',
      postPrice: '',
      imagePath: null,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

      imageHeight: null,
      imageWidth: null,
      counter: 1,
      isLoading: true,
      isEmpty: false,

      spinnervisible: false,
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }
  button(pdata) {
    const uid = this.props.appStore.user.uid
   Alert.alert(
     'Alert Title',
     'Alert  here...',
     [
       {text: 'NO', style: 'cancel'},
       {text: 'yes', onPress: () =>    firebaseApp.database().ref('user_posts/'+ uid +'/img/' + pdata.puid).remove()},
     ]
   )
 }

  static navigationOptions = {
     title: 'صور المختبر',
   };
  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }
  componentDidMount() {
    const uid = this.props.appStore.user.uid

    console.log("--------- TIMELINE --------- " + this.state.counter)
    firebaseApp.database().ref('user_posts/'+ uid +'/img').orderByChild('createdAt').limitToLast(this.state.counter).on('value',
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
    const height = ((screenWidth-40)*this.state.imageHeight/this.state.imageWidth)

    return (
      <View style={styles.container}>
      <Text>{this.state.postStatus}</Text>
      { this.state.imagePath === null ? <Text>اختر صورة</Text> :
        <Image
     source={{ uri:this.state.imagePath }}
     resizeMode='contain'
     style={{
      height: 100,
      width: 200-40,
      alignSelf: 'center',
      marginBottom: 10,
     }}
     />
         }
     <TouchableOpacity onPress={this._takePicture}>
     <Icon
     name={'md-camera'}
     size={30}
     color={'blue'}
     />
     </TouchableOpacity>
             <TouchableOpacity style={styles.btnAdd} onPress={this._handleNewPost}>
          <Icon
            name={'md-add'}
            size={30}
            color={'#fff'}
          />
        </TouchableOpacity>

                <ListView
                  horizontal={false}

                  automaticallyAdjustContentInsets={false}
                  initialListSize={1}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                  renderFooter={this._renderFooter}
                  onEndReached={this._onEndReached}
                  onEndReachedThreshold={1}
                />
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
  _renderRow = (data) => {
    //console.log("TIMELINE :::: _renderRow " + data.title)
    const timeString = moment(data.createdAt).fromNow()
    const height = screenWidth*data.imageHeight/data.imageWidth
    const shareOptions = {
      title: data.title + " for sale",
      url: "http://myapp.shop/post/" + data.puid,
      subject: "Share this item"
    }
    const BuyButton = (data.status === 'available') ?
            <TouchableOpacity style={styles.button} onPress={() => this._BuyNow(data)}>
              <Icon name='md-cart' size={30} color='#eee'/>
            </TouchableOpacity>
          : null
    const Status = (data.status === 'available') ? <Text style={{fontWeight:'bold',color:"green"}}>{data.status.toUpperCase()}</Text> : <Text style={{fontWeight:'bold',color:"red"}}>{data.status.toUpperCase()}</Text>
    const time = data.timeout
const p = data.puid

    return (
      <View style={styles.card}>
      <TouchableOpacity  style={{borderColor:'grey'}}  onPress={() => this.button(data)} >

        <ImageBackground
        source={{ uri:data.imagee}}
          style=  {styles.itemContainer}  resizeMode='cover'
borderRadius={20}             >

        </ImageBackground>
      </TouchableOpacity>
      <View style={{marginTop:2}} />
      </View>
    )
  }

  ima = () => {
    this.setState({
      postStatus: 'Posting...',
    })

          const uid = this.props.appStore.user.username

          const newPostKey = firebaseApp.database().ref('us').push().key
          const imageName = `${uid}.jpg`
          uploadImage(this.state.imagePath, imageName)
          .then(url => {

                  firebaseApp.database().ref('us/').child(this.props.appStore.user.uid).update({imagep:url})

              setTimeout(() => {
              }, 1000)
            })

  }

  _handleNewPost = () => {
    this.setState({
      postStatus: 'جاري نشر',
    })

          const uid = this.props.appStore.user.uid
          const username = this.props.appStore.user.displayName
          const newPostKey = firebaseApp.database().ref('img').push().key
          const imageName = `${newPostKey}.jpg`
          uploadImage(this.state.imagePath, imageName)
          .then(url => {
            const postData = {
              username: this.props.appStore.user.displayName,
              uid: uid,
              createdAt: firebase.database.ServerValue.TIMESTAMP,
              updatedAt: firebase.database.ServerValue.TIMESTAMP,
              status: "available",
              clientId: "",
              clientName: "",
              imagee:url,
              new_messages: 0,
              text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
              title: this.state.postTitle,
              price: this.state.postPrice,
              puid: newPostKey,
            }
            let updates = {}
            updates['/img/' + newPostKey] = postData
            updates['/user_posts/' + uid + '/img/' + newPostKey] = postData
            firebaseApp.database().ref().update(updates)
            .then(() => {
              this.setState({
                              postStatus: 'تم',
                              postTitle: '',
                              postPrice: '',
                              favColor:'',
                              imagePath: null,
                              postText: '',
                            })
              setTimeout(() => {
                this.setState({ postStatus: null })
              }, 3000)
              setTimeout(() => {
              }, 1000)
            })
          })
            .catch(() => {
              this.setState({ postStatus: 'Something went wrong!!!' })
            })

          .catch(error => {
            console.log(error)
          })


  }
  _onEndReached = () => {
    //console.log("TIMELINE ----> _onEndReached :+++:");
const uid= this.props.appStore.user.uid
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('user_posts/'+ uid +'/img').off()
      firebaseApp.database().ref('user_posts/'+ uid +'/img').orderByChild('createdAt').limitToLast(this.state.counter+1).on('value',
      (snapshot) => {
        this.setState({ isFinished: false })
        console.log("---- TIMELINE POST ON END RETRIEVED ---- "+ this.state.counter +" - "+ _.toArray(snapshot.val()).length)
        if (_.toArray(snapshot.val()).length < this.state.counter) {
          console.log("---- TIMELINE POST FINISHED ----");
          this.setState({ isFinished: true })
        }
        if (snapshot.val()) {
          this.setState({ isEmpty: false })
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val()))),
          })
        }
        this.setState({ isLoading: false })
      })
    }
  }

  _renderFooter = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.waitView}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    if (this.state.isEmpty) {
      return (
        <View style={styles.waitView}>
          <Text>لايوجد صور لديك</Text>
        </View>
      )
    }
  }

  componentWillUnmount() {
    const uid= this.props.appStore.user.uid
    console.log("---- TIMELINE UNMOUNT ---")
    firebaseApp.database().ref('user_posts/'+ uid +'/img').off()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    padding: 10,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
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
  card: {
    flex: 1,
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
  gridView: {
    paddingTop: 5,
    flex: 1,
    borderRadius:19
  },
  itemContainer: {
    justifyContent: 'flex-end',

    padding: 10,
    height: 300,
width:screenWidth
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
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
