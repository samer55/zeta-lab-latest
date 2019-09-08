import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
  ImageBackground,
  Linking,
Dimensions,
  Platform,
  Image,
  Picker,
  TextInput,
  UIManager,
} from 'react-native'
import _ from 'lodash'
import { firebaseApp } from './../../firebase'
import Icon from 'react-native-vector-icons/Ionicons'
import icon from 'react-native-vector-icons/Feather'
import RNFetchBlob from 'react-native-fetch-blob'
import firebase from 'firebase'
import RNPickerSelect from 'react-native-picker-select';
import {YellowBox} from 'react-native';

import { observer,inject } from 'mobx-react/native'
import { Card,Header,Tile,CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import {  List, ListItem,Left,Right,Body,Button} from 'native-base';

import PropTypes from 'prop-types';
import Modal from 'react-native-modal'; // 2.4.0
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const screenWidth = Dimensions.get('window').width
const height = Dimensions.get('window').height

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = firebaseApp.storage().ref('posts').child(imageName)
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
const uploadImag = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = firebaseApp.storage().ref('users').child(imageName)
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

@inject("appStore") @observer
export default class Profile extends Component {
  state = {
  visibleModal: null,
};
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.inputRefs = {}
    this.state = {
      isLoading: true,
      isFinished: false,
      counter: 10,
      phone:'',
      out1:'',
      out2:'',
      cut:'',
      time1:'',
      to:'',
      info:'',
      testn:'',
      testp:'',
      time2:'',
      image:'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png',
      postText: '',
      img:'',
      postTitle: '',
      isChecked:true,
      uploadURL: '',
      postPrice: '',
      image1:'',
      week1:'',
      imagePath: null,
      imagePat: null,
namea:'',
imageHeight: null,
avatarSource: null,

imageWidth: null,
postStatus: null,
      week2:'',
      favSport: undefined,
           items2: [
               {
                   label: '1 يوم',
                   value: '24',
               },
               {
                   label: '2 ايام',
                   value: '48',
               },
               {
                   label: '3 ايام',
                   value: '72',
               },
               {
                   label: '4 ايام',
                   value: '96',
               },
               {
                   label: '5 ايام',
                   value: '120',
               },
               {
                   label: '6 ايام',
                   value: '144',
               },
               {
                   label: '7 ايام',
                   value: '168',
               },
               {
                   label: '8 ايام',
                   value: '192',
               },
               {
                   label: '9 ايام',
                   value: '216',
               },
               {
                   label: '10 ايام',
                   value: '240',
               },
               {
                   label: '11 ايام',
                   value: '264',
               },
               {
                   label: '12 ايام',
                   value: '288',
               },
               {
                   label: '13 ايام',
                   value: '312',
               },
               {
                   label: '14 ايام',
                   value: '366',
               },
               {
                   label: '15 ايام',
                   value: '360',
               },
               {
                   label: '16 ايام',
                   value: '384',
               },
               {
                   label: '17 ايام',
                   value: '408',
               },
               {
                   label: '18 ايام',
                   value: '432',
               },
               {
                   label: '19 ايام',
                   value: '456',
               },
               {
                   label: '20 ايام',
                   value: '480',
               },
               {
                   label: '21 ايام',
                   value: '504',
               },
               {
                   label: '22 ايام',
                   value: '528',
               },
               {
                   label: '23 ايام',
                   value: '552',
               },
               {
                   label: '24 ايام',
                   value: '576',
               },
               {
                   label: '25 ايام',
                   value: '600',
               },
               {
                   label: '26 ايام',
                   value: '624',
               },
               {
                   label: '27 ايام',
                   value: '648',
               },
               {
                   label: '28 ايام',
                   value: '672',
               },
               {
                   label: '29 ايام',
                   value: '696',
               },
               {
                   label: '30 ايام',
                   value: '720',
               },
               {
                   label: '31 ايام',
                   value: '744',
               },
               {
                   label: '32 ايام',
                   value: '768',
               },
               {
                   label: '33 ايام',
                   value: '792',
               },
               {
                   label: '34 ايام',
                   value: '816',
               },
               {
                   label: '35 ايام',
                   value: '840',
               },
               {
                   label: '36 ايام',
                   value: '864',
               },
               {
                   label: '37 ايام',
                   value: '888',
               },
               {
                   label: '38 ايام',
                   value: '912',
               },
               {
                   label: '39 ايام',
                   value: '936',
               },
               {
                   label: '40 ايام',
                   value: '960',
               },
               {
                   label: '41 ايام',
                   value: '984',
               },
               {
                   label: '42 ايام',
                   value: '1008',
               },
               {
                   label: '43 ايام',
                   value: '1032',
               },
               {
                   label: '44 ايام',
                   value: '1056',
               },
               {
                   label: '45 ايام',
                   value: '1080',
               },
               {
                   label: '46 ايام',
                   value: '1104',
               },
               {
                   label: '47 ايام',
                   value: '1128',
               },
               {
                   label: '48 ايام',
                   value: '1152',
               },
               {
                   label: '49 ايام',
                   value: '1176',
               },
               {
                   label: '50 ايام',
                   value: '1200',
               },
               {
                   label: '51 ايام',
                   value: '1224',
               },
               {
                   label: '52 ايام',
                   value: '1248',
               },
               {
                   label: '53 ايام',
                   value: '1272',
               },
               {
                   label: '54 ايام',
                   value: '1296',
               },
               {
                   label: '55 ايام',
                   value: '1320',
               },
               {
                   label: '56 ايام',
                   value: '1344',
               },
               {
                   label: '57 ايام',
                   value: '1368',
               },
               {
                   label: '58 ايام',
                   value: '1392',
               },
               {
                   label: '59 ايام',
                   value: '1416',
               },
               {
                   label: '60 ايام',
                   value: '1440',
               },
           ],
           fav: undefined,
                items1:  [
                    {
                        label: '1 يوم',
                        value: '24',
                    },
                    {
                        label: '2 ايام',
                        value: '48',
                    },
                    {
                        label: '3 ايام',
                        value: '72',
                    },
                    {
                        label: '4 ايام',
                        value: '96',
                    },
                    {
                        label: '5 ايام',
                        value: '120',
                    },
                    {
                        label: '6 ايام',
                        value: '144',
                    },
                    {
                        label: '7 ايام',
                        value: '168',
                    },
                    {
                        label: '8 ايام',
                        value: '192',
                    },
                    {
                        label: '9 ايام',
                        value: '216',
                    },
                    {
                        label: '10 ايام',
                        value: '240',
                    },
                    {
                        label: '11 ايام',
                        value: '264',
                    },
                    {
                        label: '12 ايام',
                        value: '288',
                    },
                    {
                        label: '13 ايام',
                        value: '312',
                    },
                    {
                        label: '14 ايام',
                        value: '366',
                    },
                    {
                        label: '15 ايام',
                        value: '360',
                    },
                    {
                        label: '16 ايام',
                        value: '384',
                    },
                    {
                        label: '17 ايام',
                        value: '408',
                    },
                    {
                        label: '18 ايام',
                        value: '432',
                    },
                    {
                        label: '19 ايام',
                        value: '456',
                    },
                    {
                        label: '20 ايام',
                        value: '480',
                    },
                    {
                        label: '21 ايام',
                        value: '504',
                    },
                    {
                        label: '22 ايام',
                        value: '528',
                    },
                    {
                        label: '23 ايام',
                        value: '552',
                    },
                    {
                        label: '24 ايام',
                        value: '576',
                    },
                    {
                        label: '25 ايام',
                        value: '600',
                    },
                    {
                        label: '26 ايام',
                        value: '624',
                    },
                    {
                        label: '27 ايام',
                        value: '648',
                    },
                    {
                        label: '28 ايام',
                        value: '672',
                    },
                    {
                        label: '29 ايام',
                        value: '696',
                    },
                    {
                        label: '30 ايام',
                        value: '720',
                    },
                    {
                        label: '31 ايام',
                        value: '744',
                    },
                    {
                        label: '32 ايام',
                        value: '768',
                    },
                    {
                        label: '33 ايام',
                        value: '792',
                    },
                    {
                        label: '34 ايام',
                        value: '816',
                    },
                    {
                        label: '35 ايام',
                        value: '840',
                    },
                    {
                        label: '36 ايام',
                        value: '864',
                    },
                    {
                        label: '37 ايام',
                        value: '888',
                    },
                    {
                        label: '38 ايام',
                        value: '912',
                    },
                    {
                        label: '39 ايام',
                        value: '936',
                    },
                    {
                        label: '40 ايام',
                        value: '960',
                    },
                    {
                        label: '41 ايام',
                        value: '984',
                    },
                    {
                        label: '42 ايام',
                        value: '1008',
                    },
                    {
                        label: '43 ايام',
                        value: '1032',
                    },
                    {
                        label: '44 ايام',
                        value: '1056',
                    },
                    {
                        label: '45 ايام',
                        value: '1080',
                    },
                    {
                        label: '46 ايام',
                        value: '1104',
                    },
                    {
                        label: '47 ايام',
                        value: '1128',
                    },
                    {
                        label: '48 ايام',
                        value: '1152',
                    },
                    {
                        label: '49 ايام',
                        value: '1176',
                    },
                    {
                        label: '50 ايام',
                        value: '1200',
                    },
                    {
                        label: '51 ايام',
                        value: '1224',
                    },
                    {
                        label: '52 ايام',
                        value: '1248',
                    },
                    {
                        label: '53 ايام',
                        value: '1272',
                    },
                    {
                        label: '54 ايام',
                        value: '1296',
                    },
                    {
                        label: '55 ايام',
                        value: '1320',
                    },
                    {
                        label: '56 ايام',
                        value: '1344',
                    },
                    {
                        label: '57 ايام',
                        value: '1368',
                    },
                    {
                        label: '58 ايام',
                        value: '1392',
                    },
                    {
                        label: '59 ايام',
                        value: '1416',
                    },
                    {
                        label: '60 ايام',
                        value: '1440',
                    },
                ],
      isEmpty: false,
      loading: false,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    }

  }

  componentDidMount() {
    const uid = this.props.appStore.user.uid

    console.log("--------- MY POSTS --------- " + uid)
    firebaseApp.database().ref('us/'+ uid ).on('value',
    (snapshot) => {
      val = snapshot.val()
      if (snapshot.val()) {
        this.setState({
          info:val.info,
          img:val.imagep,
          time1:val.time1,
          time2:val.time2,
          phone:val.phone,
          week1:val.week1,
          week2:val.week2,
          namea:val.labn,
        })
      }

    })
  }


  renderButtoni = (text, onPress) => (
     <TouchableOpacity onPress={onPress}>
       <View style={styles.button}>
         <Text>{text}</Text>
       </View>
     </TouchableOpacity>
   );

   renderModalContenti = () => (


     <View style={styles.modalContent}>
     <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     { this.state.imagePath === null ? <Text>اختر الصورة</Text> :
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
</View>
     <Text style={styles.message}>{this.state.postStatus}</Text>
     <Text>{ this.state.uploadURL }</Text>

     
     <RNPickerSelect
                   placeholder={{
                       label: 'مدة العرض',
                       value: null,
                   }}
                   items={this.state.items1}
                   onValueChange={(value) => {
                       this.setState({
                           fav: value,
                       });
                   }}
                   onUpArrow={() => {
                       this.inputRefs.name.focus();
                   }}
                   onDownArrow={() => {
                       this.inputRefs.picker2.togglePicker();
                   }}
                   style={{ ...pickerSelectStyles }}
                   value={this.state.fav}
                   ref={(el) => {
                       this.inputRefs.picker = el;
                   }}
               />

     <TouchableOpacity style={styles.btnAdd} onPress={this.image}>
       <Icon
         name={'md-add'}
         size={30}
         color={'#fff'}
       />
     </TouchableOpacity>

       {this.renderButtoni('Close', () => this.setState({ visibleModal: null }))}
     </View>
   );

   image = () => {
     this.setState({
       postStatus: 'جاري النشر...',
     })


           const uid = this.props.appStore.user.uid
           const username = this.props.appStore.user.displayName
           const timeou = new Date().getTime() +this.state.fav*60 *60 *1000

           const newPostKey = firebaseApp.database().ref('image').push().key
           const imageName = `${newPostKey}.jpg`
           uploadImage(this.state.imagePath, imageName)
           .then(url => {

             const postData = {
               username: this.props.appStore.user.displayName,
               uid: uid,
               labn:this.state.namea,
               createdAt: firebase.database.ServerValue.TIMESTAMP,
               updatedAt: firebase.database.ServerValue.TIMESTAMP,
               status: "available",
               clientId: "",
               clientName: "",
               new_messages: 0,
               timeout:timeou,
               imagew:this.state.imageWidth,
               imageh:this.state.imageHeight,
                image: url,
               text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
               title: this.state.postTitle,
               price: this.state.postPrice,
               puid: newPostKey,
             }
             let updates = {}

             updates['/image/' + newPostKey] = postData
             updates['/user_posts/' + uid + '/image/' + newPostKey] = postData

             firebaseApp.database().ref().update(updates)
             .then(() => {
               this.setState({
                               postStatus: 'تم النشر',
                               postTitle: '',
                               new:newPostKey,
                               postPrice: '',
                               postText: '',
                               imagePath: null,
                               fav:''
                             })

               setTimeout(() => {
               }, 1000)
             })
             .catch(() => {
               this.setState({ postStatus: 'Something went wrong!!!' })
             })

           .catch(error => {
             console.log(error)
           })
})


   }
     _handleNewPost = () => {
       this.setState({
         postStatus: 'جاري النشر...',
       })

         if (this.state.postTitle.length > 0) {
           if (this.state.postPrice.length > 0) {
             const uid = this.props.appStore.user.uid
             const timeou = new Date().getTime() +this.state.favSport*60*60 *1000
             const username = this.props.appStore.user.displayName
             const newPostKey = firebaseApp.database().ref('text').push().key
               const postData = {
                 username: this.props.appStore.user.displayName,
                 uid: uid,
                 labn:this.state.namea,
                 createdAt: firebase.database.ServerValue.TIMESTAMP,
                 updatedAt: firebase.database.ServerValue.TIMESTAMP,
                 status: "available",
                 clientId: "",
                 clientName: "",
                 new_messages: 0,
                 timeout:timeou,
                 text: this.state.postText.replace(/(\r\n|\n|\r)/gm,""),
                 title: this.state.postTitle,
                 price: this.state.postPrice,
                 puid: newPostKey,
               }
               let updates = {}

               updates['/text/' + newPostKey] = postData
               updates['/user_posts/' + uid + '/text/' + newPostKey] = postData

               firebaseApp.database().ref().update(updates)
               .then(() => {
                 this.setState({
                                 postStatus: 'تم النشر شكرا لك',
                                 postTitle: '',
                                 new:newPostKey,
                                 postPrice: '',
                                 postText: '',
                                 favSport:'',
                               })

                 setTimeout(() => {
                 }, 1000)
               })
               .catch(() => {
                 this.setState({ postStatus: 'هناك خطأ!!!' })
               })

             .catch(error => {
               console.log(error)
             })

           } else {
             this.setState({ postStatus: 'Please enter a price' })
           }
         } else {
           this.setState({ postStatus: 'Please enter a title' })
         }

     }
  renderButtont = (text, onPress) => (
     <TouchableOpacity onPress={onPress}>
       <View style={styles.button}>
         <Text>{text}</Text>
       </View>
     </TouchableOpacity>
   );

   renderModalContentt = () => (
     <View style={styles.modalContent}>

     <Text>{this.state.cut}</Text>
     <Text style={{fontSize:15}}>اضف اعلان نصي</Text>



     <Text style={styles.message}>{this.state.postStatus}</Text>
     <View style={styles.titleContainer}>
       <TextInput
         ref='SecondInput'
         maxLength={34}
         style={styles.inputField}
         keyboardType="numeric"
         value={this.state.postPrice}
         onChangeText={(text) => this.setState({ postPrice: text })}
         underlineColorAndroid='transparent'
         placeholder='سعر العرض بالدينار الاردني'
         placeholderTextColor='rgba(0,0,0,.6)'
         onSubmitEditing={(event) => {
           this.refs.ThirdInput.focus();
         }}
       />
       <Text>دينار</Text>
     </View>
     <View style={styles.titleContainer}>
       <TextInput
         style={styles.inputField}
         value={this.state.postTitle}
         onChangeText={(text) => this.setState({ postTitle: text })}
         underlineColorAndroid='transparent'
         placeholder='تفاصيل العرض'
         placeholderTextColor='rgba(0,0,0,.6)'
         onSubmitEditing={(event) => {
           this.refs.SecondInput.focus();
         }}
       />
     </View>

     <RNPickerSelect
                    placeholder={{
                        label: 'مدة العرض ...',
                        value: null,
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

     <TouchableOpacity style={styles.btnAdd} onPress={this._handleNewPost}>
       <Icon
         name={'md-add'}
         size={30}
         color={'#fff'}
       />
     </TouchableOpacity>

       {this.renderButtoni('Close', () => this.setState({ visibleModal: null }))}
     </View>
   );

   _handleSave = () => {
     console.log("USER EDIT SAVING...")


  firebaseApp.database().ref('us').child(this.props.appStore.user.uid).update({info:this.state.info,time1:this.state.time1,time2:this.state.time2,phone:this.state.phone,week1:this.state.week1,week2:this.state.week2,home:this.state.isChecked})

   }
  _renderButton = (text, onPress) => (
     <TouchableOpacity onPress={onPress}>
       <View style={styles.button}>
         <Text style={{fontSize:20}}>{text}</Text>
       </View>
     </TouchableOpacity>
   );

   _renderModalContent = () => (
     <View style={styles.modalContent}>
     <CheckBox
center
title='خدمة السحب المنزلي'
checked={this.state.isChecked}
onPress={()=>{
 this.setState({
     isChecked:!this.state.isChecked
 })
}}
/>
<Text style={styles.info}>الوقت من:</Text>

       <View style={[styles.inputContainer, { marginBottom: 10 }]}>
         <TextInput
           style={styles.inputField}
           value={this.state.time1}
           onChangeText={(text) => this.setState({ time1: text })}
           autoCapitalize='words'
           autoCorrect={false}
           underlineColorAndroid='transparent'
           placeholder='Your Name'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>
       <Text style={styles.info}>الى:</Text>

       <View style={[styles.inputContainer, { marginBottom: 10 }]}>
         <TextInput
           style={styles.inputField}
           value={this.state.time2}
           onChangeText={(text) => this.setState({ time2: text })}
           autoCapitalize='words'
           autoCorrect={false}
           underlineColorAndroid='transparent'
           placeholder='Your Name'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>
       <Text style={styles.info}>الاسبوع من:</Text>

       <View style={[styles.inputContainer, { marginBottom: 10 }]}>
         <TextInput
           style={styles.inputField}
           value={this.state.week1}
           onChangeText={(text) => this.setState({ week1: text })}
           autoCapitalize='words'
           autoCorrect={false}
           underlineColorAndroid='transparent'
           placeholder='Your Name'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>
       <Text style={styles.info}>الى:</Text>

       <View style={[styles.inputContainer, { marginBottom: 10 }]}>
         <TextInput
           style={styles.inputField}
           value={this.state.week2}
           onChangeText={(text) => this.setState({ week2: text })}
           autoCapitalize='words'
           autoCorrect={false}
           underlineColorAndroid='transparent'
           placeholder='Your Name'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>
       <Text style={styles.info}>رقم هاتف:</Text>

       <View style={[styles.inputContainer, { marginBottom: 10}]}>
         <TextInput
           ref='SecondInput'
           style={styles.inputField}
           value={this.state.phone}
           onChangeText={(text) => this.setState({ phone: text })}
           underlineColorAndroid='transparent'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>
       <Text style={styles.info}>معلومات:</Text>

       <View style={styles.inputContainer}>
         <TextInput
           ref='ThirdInput'
           style={styles.inputField}
           value={this.state.info}
           onChangeText={(text) => this.setState({ info: text })}
           underlineColorAndroid='transparent'
           placeholder='Choose Password'
           placeholderTextColor='rgba(255,255,255,.6)'
         />
       </View>

     <TouchableOpacity onPress={this._handleSave}>
       <View style={styles.submitBtnContainer}>
         <Text style={styles.submitBtn}>{'SAVE'}</Text>
       </View>
     </TouchableOpacity>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
     </View>
   );

  render() {

    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
          {this.renderHeader()}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>

            </View>
          </Card>
          <ListItem icon>

           <Left>
             <Button onPress={() => this.setState({ visibleModal: 1 })} style={{ backgroundColor: "#007AFF" }}>
               <Icon color='white'
               size={20} name="ios-create" />
             </Button>
           </Left>
           <Body>
             <Text>تعديل ملف الشخصي</Text>
           </Body>
           <Right>

           </Right>
         </ListItem>

         <ListItem icon>
           <Left>
             <Button style={{ backgroundColor: "#D0021B" }}>
               <Icon onPress={this.pim} color='white' size={20} name="md-images" />
             </Button>
           </Left>
           <Body>
             <Text>تامين</Text>
           </Body>
           <Right>

           </Right>
         </ListItem>
         <ListItem icon>
           <Left>
             <Button style={{ backgroundColor: "green" }}>
               <Icon onPress={this.price} color='white' size={20} name="ios-map" />
             </Button>
           </Left>
           <Body>
             <Text>تفاصيل عن موقع المختبر</Text>
           </Body>
           <Right>

           </Right>
         </ListItem>


<List>
           <ListItem>
           <Text style={{fontSize:20}}>اضف اعلان</Text>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<Button rounded style={{padding:10,marginLeft:5}} onPress={() => this.setState({ visibleModal: 2})}>
<Icon  color='white' size={20} name="md-create" />
          </Button>
          <Button rounded danger style={{padding:10,marginLeft:5}} onPress={() => this.setState({ visibleModal: 3 })}>
          <Icon  color='white' size={20} name="md-camera" />
                    </Button>

</View>

           </ListItem>
           <ListItem icon>
             <Left>
               <Button style={{ backgroundColor: "black" }}>
                 <Icon onPress={this._userEdit} color='white' size={20} name="md-key" />
               </Button>
             </Left>
             <Body>
             <TouchableOpacity onPress={this._userEdit}>

               <Text>حساب</Text>
               </TouchableOpacity>

             </Body>
             <Right>

             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Button style={{ backgroundColor: "black" }}>
                 <Icon onPress={this._logOut} color='white' size={20} name="md-exit" />
               </Button>
             </Left>
             <Body>
               <Text>تسجيل الخروج</Text>
             </Body>
             <Right>
             <TouchableOpacity onPress={this._logOut}>

               <Icon active name="ios-arrow-forward" />
               </TouchableOpacity>
             </Right>
           </ListItem>

         </List>
         <Modal isVisible={this.state.visibleModal === 1}>
        {this._renderModalContent()}
      </Modal>
      <Modal isVisible={this.state.visibleModal === 2}>
     {this.renderModalContentt()}
   </Modal>
   <Modal isVisible={this.state.visibleModal === 3}>
  {this.renderModalContenti()}
</Modal>


        </View>
      </ScrollView>
    )
  }
  onPressPlace = () => {
     console.log('place')
   }

   onPressTel = number => {
     Linking.openURL(`tel://${this.state.phone}`).catch(err => console.log('Error:', err))
   }



   renderHeader = () => {

     return (
       <View style={styles.headerContainer}>

         <ImageBackground
           style={styles.headerBackgroundImage}
           blurRadius={10}
           source={{
             uri: this.state.img,
           }}
         >
           <View style={styles.headerColumn}>

              <Image
                style={styles.userImage}
                source={{
                  uri: this.state.img,
                }}
              />
              <TouchableOpacity onPress={this.pimg}>
<Text style={{fontSize:15,color:'red'}}>تعديل الصورة الشخصية</Text>
</TouchableOpacity>
             <Text style={styles.userNameText}>{this.state.namea}</Text>
           </View>

         </ImageBackground>

       </View>
     )
   }



  _renderRow = (data) => {
    let index = 0;
    const options = [
        { key: index++, section: true, label: 'Status' },
        { key: index++, label: 'available' },
        { key: index++, label: 'released' },
        { key: index++, label: 'sold' },
        { key: index++, label: 'closed' },
    ]
    const timeString = moment(data.updatedAt).fromNow()
    const Status = (data.status === 'available') ? <Text style={{fontWeight:'bold',color:"green"}}>{data.status.toUpperCase()}</Text> : <Text style={{fontWeight:'bold',color:"red"}}>{data.status.toUpperCase()}</Text>
    return (
      <TouchableOpacity onPress={() => this._openChat(data)}>
        <View style={styles.card}>
          <View style={styles.RawContainer}>
            <View style={styles.LeftContainer}><Text style={styles.title}>{ data.title }</Text></View>
          </View>
          <View style={styles.RawContainer}>
            <View style={styles.LeftContainer}><Text style={styles.info}>{ data.price }</Text></View>
            <View style={styles.RightContainer}>

            </View>
          </View>
          <View style={styles.RawContainer}>
            <Text style={styles.info}>{timeString}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _changeStatus = (option, postData) => {
    console.log("NEW STATUS: " + option.label)
    firebaseApp.database().ref('posts').child(postData.puid).update( { status:option.label } )
    firebaseApp.database().ref('user_posts/'+postData.uid+'/posts').child(postData.puid).update( { status:option.label } )
    if (postData.clientId) {
      firebaseApp.database().ref('user_orders/'+postData.clientId+'/posts').child(postData.puid).update( { status:option.label } )
      firebaseApp.database().ref('posts').child(postData.puid).update( { clientId:"",clientName:"" } )
    }
  }

  _onEndReached = () => {
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 10 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('user_posts/'+ this.props.appStore.user.uid +'/posts').off()
      firebaseApp.database().ref('user_posts/'+ this.props.appStore.user.uid +'/posts').orderByChild('createdAt').limitToLast(this.state.counter+10).on('value',
      (snapshot) => {
        console.log("---- USER POST RETRIEVED ----");
        if (_.toArray(snapshot.val()).length < this.state.counter) {
          this.setState({ isFinished: true })
          console.log("---- USER POST FINISHED !!!! ----")
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
          <Text>- Here will be the list of the items you are selling and sold -</Text>
        </View>
      )
    }
  }

  price = () => {
  this.props.navigation.navigate('new')  }
  pric = () => {
  this.props.navigation.navigate('price')  }

  pimg = () => {
  this.props.navigation.navigate('pimg')  }
  pim = () => {
  this.props.navigation.navigate('post')  }

  _userEdit = () => {
this.props.navigation.navigate('setting')  }

  _logOut = () => {
    firebaseApp.auth().signOut()
    .then(() => {
      this.props.appStore.username = ""
      this.props.appStore.user = {}
      this.props.appStore.post_count = 0
      this.props.appStore.chat_count = 0
      this.props.appStore.order_count = 0
    this.props.navigation.navigate('login');
    }, function(error) {
      console.log(error)
    });
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

  componentWillUnmount() {
    firebaseApp.database().ref('user_posts/'+ this.props.appStore.user.uid +'/posts').off()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfoContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 65,
    margin: 5,
    borderRadius: 2,
    backgroundColor: '#fff'
  },
  postImage: {
   backgroundColor: 'rgba(0, 0, 0, 0.075)',
   height: 200,
 },
  profileNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  profileName: {
    fontSize: 20,
    color: 'black',
  },
  cardContainer: {
  backgroundColor: '#FFF',
  borderWidth: 0,
  flex: 1,
  margin: 0,
  padding: 0,
},
container: {
  flex: 1,
},
emailContainer: {
  backgroundColor: '#FFF',
  flex: 1,
  paddingTop: 30,
},
headerBackgroundImage: {
  paddingBottom: 20,
  paddingTop: 35,
},
headerContainer: {},
headerColumn: {
  backgroundColor: 'transparent',
  ...Platform.select({
    ios: {
      alignItems: 'center',
      elevation: 1,
      marginTop: -1,
    },
    android: {
      alignItems: 'center',
    },
  }),
},
placeIcon: {
  color: 'white',
  fontSize: 26,
},
scroll: {
  backgroundColor: '#FFF',
},
telContainer: {
  backgroundColor: '#FFF',
  flex: 1,
  paddingTop: 30,
},
userAddressRow: {
  alignItems: 'center',
  flexDirection: 'row',
},
userCityRow: {
  backgroundColor: 'transparent',
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
  height: 40,
  backgroundColor: 'rgba(255,255,255,.6)',
  marginBottom: 10,
  padding: 5,
  borderWidth: 1,
  borderColor: '#e2e2e2',
  borderRadius: 2,
},
titleContainerp: {
  height: 40,
  width: 100,
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
titleContainer: {
  height: 40,
  width: 300,
  justifyContent: 'center',
  flexDirection:'row',
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
inputFieldp: {
  flex: 1,
  width: 100,
  height:90,
  paddingLeft: 10,
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: 13,
},
inputField: {
  flex: 1,
  width: 300,
  height:90,
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
  marginTop:5,
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
userCityText: {
  color: '#A5A5A5',
  fontSize: 15,
  fontWeight: '600',
  textAlign: 'center',
},
userImage: {
  borderColor: 'grey',
  borderRadius: 85,
  borderWidth: 3,
  height: 170,
  marginBottom: 15,
  width: 170,
},
button: {
  backgroundColor: 'lightblue',
  padding: 12,
  margin: 16,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
},
modalContent: {
   backgroundColor: 'white',
   marginBottom:10,
   marginTop:10,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 4,
   borderColor: 'rgba(0, 0, 0, 0.1)',
 },
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },
userNameText: {
  color: 'black',
  fontSize: 22,
  fontWeight: 'bold',
  paddingBottom: 8,
  textAlign: 'center',
},
errMsg: {
  color: '#000',
  fontSize: 12,
  marginBottom: 10,
  textAlign: 'center',
  fontSize: 14,
},

btnContainers: {
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end'
},
submitBtnContainer: {
  width: 120,
  height: 40,
  backgroundColor: '#697689',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center'
},
submitBtn: {
  fontSize: 20,
  fontWeight: '400',
  color: 'white'
},
  profileCountsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  profileCounts: {
    fontSize: 30,
    color: '#fff'
  },
  countsName: {
    fontSize: 12,
    color: '#ffffff'
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    margin: 2,
  },
  RawContainer: {
    flexDirection: 'row',
    flex: 1,
    //borderWidth: 1,
    marginLeft: 5,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //borderWidth: 1,
  },
  RightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
    padding: 10,
    //borderWidth: 1,
    //backgroundColor:'#000',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    color: '#444',
  },
  info: {
    padding: 3,
    fontSize: 13,
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
