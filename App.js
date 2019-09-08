import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import { AppRegistry, StyleSheet,TouchableOpacity, Text, View,ImageBackground,  Dimensions,Linking, Image,
 } from 'react-native';
import { Button } from 'react-native-elements'
const screen= Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default class Init extends Component {

  constructor(properties) {
    super(properties);
    this.state ={

      status:true

    }
    OneSignal.init("e5cb9193-6da8-454a-a431-e06f2063151b", {kOSSettingsKeyAutoPrompt : true});
OneSignal.configure();
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  static configure() {
        OneSignal.configure();
    }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);

  }
  static addEventListener(type: any, handler: Function) {

         // Listen to events of notification received, opened, device registered and IDSAvailable.

         invariant(
             type === 'received' || type === 'opened' || type === 'registered' || type === 'ids',
             'OneSignal only supports `received`, `opened`, `registered`, and `ids` events'
         );

         var listener;

         if (type === 'received') {
             listener = NativeAppEventEmitter.addListener(
                 DEVICE_NOTIF_RECEIVED_EVENT,
                 (notification) => {
                     handler(notification);
                 }
             );
         } else if (type === 'opened') {
             listener = NativeAppEventEmitter.addListener(
                 DEVICE_NOTIF_OPENED_EVENT,
                 (result) => {
                     handler(result);
                 }
             );
         } else if (type === 'registered') {
             listener = NativeAppEventEmitter.addListener(
                 DEVICE_NOTIF_REG_EVENT,
                 (notifData) => {
                     handler(notifData);
                 }
             );
         } else if (type === 'ids') {
             listener = NativeAppEventEmitter.addListener(
                 DEVICE_IDS_AVAILABLE,
                 (ids) => {
                     handler(ids);
                 }
             );
         }
         _notifHandlers.set(type, listener);

     }
  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

ShowHideTextComponentView = () =>{

  if(this.state.status == true)
  {
    this.props.navigation.navigate('app')
  }

}
TextComponentView = () =>{

  if(this.state.status == true)
  {
    this.props.navigation.navigate('appa')
  }

}

  render() {
console.disableYellowBox = true
    return (


        <ImageBackground source={require('./bi.jpg')}
          style={{width:screenWidth,height:screen,justifyContent:'space-around'}} >
<Image source={require('./logo.png')}
style={{width:200,height:200,alignSelf:'center'}} />


      <Button title="English" onPress={this.ShowHideTextComponentView} />
      <Button title="عربية" onPress={this.TextComponentView} />
      <Text style={{    backgroundColor: 'transparent',
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 12,
          alignSelf:'center',
      color: 'silver',}}>Owner: Sohib abu dalo & Yousef Al-Harthi</Text>
      <TouchableOpacity onPress={ ()=> Linking.openURL('http://Opentiq.com') } >
      <Text style={{    backgroundColor: 'transparent',
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 12,
          alignSelf:'center',
      color: 'silver',}}>Developed by Opentiq.com</Text>
      </TouchableOpacity>
              </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'space-around',
alignItems:'center',
flex:1,
margin: 10,
backgroundColor:'white'
},
  ima:{  flexGrow:1,
    height:screen,
    width:screenWidth,


    // Set border Radius.
},

});
