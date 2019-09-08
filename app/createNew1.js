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
  Button,
  Dimensions
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import { firebaseApp } from '../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
import RNPickerSelect from 'react-native-picker-select';
import MapView , { PROVIDER_GOOGLE }from 'react-native-maps';
const screen= Dimensions.get('window').height
import Geocoder from 'react-native-geocoding';

const screenWidth = Dimensions.get('window').width
const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO



@inject("appStore") @observer
export default class CreateNew extends Component {
  state =  {

    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      add:'s',
      longitudeDelta:
        Dimensions.get("window").width /
        Dimensions.get("window").height *
        0.0122
    },
    locationChosen: false
}

componentDidMount(){
  this.getLocationHandler()
}
pickLocationHandler = event => {
  const coords = event.nativeEvent.coordinate;
  this.map.animateToRegion({
    ...this.state.focusedLocation,
    latitude: coords.latitude,
    longitude: coords.longitude
  });
  this.setState(prevState => {
    return {
      focusedLocation: {
        ...prevState.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      },
      locationChosen: true
    };
  });


};
getLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(pos => {
    const coordsEvent = {
      nativeEvent: {
        coordinate: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }
      }
    };
    this.pickLocationHandler(coordsEvent);
  },
err => {
  console.log(err);
  alert("Fetching the Position failed, please pick one manually!");
})
}
  render() {
    let marker = null;

if (this.state.locationChosen) {
  marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
}

    return (
      <View style={styles.container}>
       <MapView
         initialRegion={this.state.focusedLocation}
         region={!this.state.locationChosen ? this.state.focusedLocation : null}
         style={styles.map}
         onPress={this.pickLocationHandler}
         ref={ref => this.map = ref}
       >
         {marker}
       </MapView>
       <View style={styles.titleContainer}>
         <TextInput
           style={styles.inputField}
           maxLength={34}
           value={this.state.postTitle}
           onChangeText={(text) => this.setState({ postTitle: text })}
           underlineColorAndroid='transparent'
           placeholder='location details'
           placeholderTextColor='rgba(0,0,0,.6)'
         />
       </View>
       <View style={styles.button}>

         <Button title="Locate Me" onPress={this.getLocationHandler} />
         <Button title="Select lab location" onPress={this._handleNewPost} />
       </View>
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
          const newPostKey = firebaseApp.database().ref('location').push().key
const sar ={lat:this.state.focusedLocation.latitude,
lon:this.state.focusedLocation.longitude,
}
            const postData = {
              username: this.props.appStore.user.displayName,
              uid: uid,
title:this.state.postTitle,
              createdAt: firebase.database.ServerValue.TIMESTAMP,
              updatedAt: firebase.database.ServerValue.TIMESTAMP,

lat:this.state.focusedLocation.latitude,
lon:this.state.focusedLocation.longitude,

              puid: uid,
            }
            let updates = {}
            updates['location/' + uid] = postData
            updates['loc/' + newPostKey] = sar

            firebaseApp.database().ref().update(updates)
            .then(() => {
this.setState({ postTitle: '' })
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
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: '70%'
  },
  button: {
    margin: 8,
    marginBottom:10
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
});
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
