import React, { Component } from 'react'

import ImagePicker from 'react-native-image-picker'
import { firebaseApp } from '../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'
import RNPickerSelect from 'react-native-picker-select';
import MapView , { PROVIDER_GOOGLE }from 'react-native-maps';
const screen= Dimensions.get('window').height
import Geocoder from 'react-native-geocoding';
import mapsty from '../mapsty'
const screenWidth = Dimensions.get('window').width
const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

import { View, Text, ScrollView, Platform, UIManager, LayoutAnimation ,Dimensions,  TextInput,
  TouchableOpacity,Keyboard, KeyboardAvoidingView
} from 'react-native';
import { List, ListItem, Switch, Body, Right, ActionSheet, Root, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Styles from './sssss';

const BUTTONS = ['Public', 'Restaurant', 'Shopping Center', 'Gas Station', 'Cancel'];
const DESTRUCTIVE_INDEX = 4;
const CANCEL_INDEX = 4;

@inject("appStore") @observer
export default class CreateNew extends Component {
  constructor(props) {
   super(props);



   this.state = {
     locationChosen: false,
    postTitle:'',
     position: undefined,
     currentPosition: undefined,
     starCount: 3.5,
     disabledAccess: false,
     free: false,
    errors:'',
     selectedType: undefined,
   };
 }
 getLocationHandler = () => {
   navigator.geolocation.getCurrentPosition(pos => {
     const coordsEvent = {
       nativeEvent: {
         coordinate: {
           latitude: pos.coords.latitude,
           longitude: pos.coords.longitude,
           latitudeDelta: 0.0122,
           longitudeDelta:
             Dimensions.get("window").width /
             Dimensions.get("window").height *
             0.0122

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

 componentDidMount() {
   this.getLocationHandler()

   ActionSheet.actionsheetInstance = null;
 }


 handleAdd = () => {
   const {
     free, disabledAccess, starCount, selectedType, position,
   } = this.state;

   const data = {
     name:this.props.appStore.user.displayName,
     uid:this.props.appStore.user.uid,
     des:this.state.postTitle,
     coordinate: {
       latitude: this.state.position.latitude,
       longitude: this.state.position.longitude,
       latitudeDelta: 0.01,
       longitudeDelta: 0.01,
     },
   };

   firebaseApp.database().ref('toilets').push(data, (error) => {
       if (error) alert('Internal Server Error!');
       else if (this.state.position.latitude.length == 0) {
         this.setState({errors:'set location'})
       }
       else if (this.state.position.longitude.length == 0) {
         this.setState({errors:'set location'})
       }
       else {
         alert('تم نشر موقع المختبر!');
         this.setState({
           starCount: 3.5,
           disabledAccess: false,
           free: false,
           postTitle: '',
           selectedType: undefined,
         });
this.getLocationHandler()
       }
     });
 };
 fitAllMarkers = () => {
   this.map.fitToCoordinates([this.state.position, this.state.position], {
     edgePadding: DEFAULT_PADDING,
     animated: true,
   });
 };

 handleCancel = () => {
   const { goBack } = this.props.navigation;
   goBack(null);
 };
 pickLocationHandler = event => {
   const coords = event.nativeEvent.coordinate;
   this.map.animateToRegion({

     ...this.state.position,
     latitude: coords.latitude,
     longitude: coords.longitude,
     latitudeDelta: 0.0122,
     longitudeDelta:
       Dimensions.get("window").width /
       Dimensions.get("window").height *
       0.0122

   });
   this.setState(prevState => {
     return {
       position: {
         ...prevState.position,
         latitude: coords.latitude,
         longitude: coords.longitude,
         latitudeDelta: 0.0122,
         longitudeDelta:
           Dimensions.get("window").width /
           Dimensions.get("window").height *
           0.0122
       },
       locationChosen: true
     };
   });


 };

 render() {
   const {
     position, currentPosition, disabledAccess, free, selectedType,
   } = this.state;
   let marker = null;

   if (this.state.locationChosen) {
     marker = <MapView.Marker
       style={{width:30,height:30}}    image={require('./marker1.png')}
 coordinate={this.state.position} />;
   }

   return (
     <KeyboardAvoidingView
             behavior={Platform.OS === "ios" ? "padding" : null}
             style={{ flex: 1 }}
         >
       <View>
         <ScrollView>
         <View style={Styles.container}>
           <MapView
             ref={(ref) => {
               this.map = ref;
             }}
             provider={PROVIDER_GOOGLE}

             customMapStyle={ mapsty }

             onPress={this.pickLocationHandler}
             style={Styles.map}
             region={!this.state.locationChosen ? position : null}
           >

         {marker}
           </MapView>
         </View>
         <ScrollView>

           <View style={{ marginTop: 15 }} />
           <View style={Styles.buttonsContainer}>
           <View style={Styles.titleContainer}>
             <TextInput
               style={Styles.inputField}
               value={this.state.postTitle}
               onChangeText={(text) => this.setState({ postTitle: text })}
               underlineColorAndroid='transparent'
               placeholder='location details'
               placeholderTextColor='rgba(0,0,0,.6)'
             />
           </View>
             <View style={{ marginTop: 20 ,flexDirection:'row',justifyContent:'space-around'}} />
             <Button style={Styles.button} block info onPress={() => this.handleAdd()}>
               <Text style={Styles.buttonText}>ADD</Text>
             </Button>
             <Button style={Styles.button} block info onPress={() => this.getLocationHandler()}>
               <Text style={Styles.buttonText}>Current location</Text>
             </Button>
           </View>
           <View style={{ marginTop: 15 }} />
         </ScrollView>
       </ScrollView>
       </View>
     </KeyboardAvoidingView>

   );
 }
}
