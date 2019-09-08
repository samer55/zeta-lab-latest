import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
  Button,
Slider,
  Platform,
  UIManager,
  Dimensions,
  ImageBackground,
  Alert,
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { Card, ListItem, Header,Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView , { PROVIDER_GOOGLE }from 'react-native-maps';
const screen= Dimensions.get('window').height
import Geocoder from 'react-native-geocoding';

const screenWidth = Dimensions.get('window').width
const {width, height} = Dimensions.get('window')
const sortByDistance = require('sort-by-distance')

const points = [
    { x: 3, y: 5},
    { x: 80, y: 34},
    { x: 3, y: 7},
    { x: 22, y: 88},
    { x: 100, y: 60},
]

const origin = { x: 50, y: 50}

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Index extends Component {
  state =  {
 distance: 160,
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
get = () => {
  Geocoder.init("AIzaSyCWi4xtXXoA22-q334D_bD8VQTpdK2YLu0"); // use a valid API key
  Geocoder.from(41.89, 12.49)
  		.then(json => {
          		var addressComponent = json.results[0].address_components[0];
  			console.log(addressComponent);
        this.setState({add:addressComponent.long_name})
  		})
  		.catch(error => console.warn(error));

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
getValfrom(val){
    const { uid } = this.state.user
    const userData = {
        distance: val
      }
    this.agefrom = val
    firebase.database().ref('users').child(uid).update({ ...userData})
}
  static navigationOptions = () => ({
    title: `Choose the city`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  render() {
    let marker = null;

if (this.state.locationChosen) {
  marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
}
const markesr = sortByDistance(origin, points);

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

       <View style={styles.button}>


         <Button title="Locate Me" onPress={this.getLocationHandler} />
         <Button title="Find Labs" onPress={this.maps} />
       </View>
     </View>

    )
  }

_openamman = () => {
  this.props.navigation.navigate('amman')}
_openirbid = () => {
    this.props.navigation.navigate('irbid')
}
_openzarqa = () => {
    this.props.navigation.navigate('zarqa')
}
_openbalqa = () => {
    this.props.navigation.navigate('balqa')
}
_openaqaba= () => {
    this.props.navigation.navigate('aqaba')
}
_openramtha = () => {
    this.props.navigation.navigate('ramtha')
}
maps = () => {
this.props.navigation.navigate('irbid',{ lon: this.state.focusedLocation.longitude,lat:this.state.focusedLocation.latitude})  }

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height:height*0.5
  },
  map: {
    width: "100%",
    height: '70%'
  },
  button: {
    margin: 8,
    marginBottom:10
  }
});
