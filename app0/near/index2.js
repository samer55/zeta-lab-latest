import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView , { PROVIDER_GOOGLE }from 'react-native-maps';
const screen= Dimensions.get('window').height
import Geocoder from 'react-native-geocoding';
import {  Button } from 'native-base';
import mapsty from '../../mapsty'

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
import { Container, Content, Picker, Form } from "native-base";

export default class Home extends Component {
  state =  {
 distance: 160,
 selected: 200,
 mapType:'standard',
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
onValueChange(value: string) {
    this.setState({
      selected: value
    });
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
    title: `موقعي`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  render() {
    let marker = null;

if (this.state.locationChosen) {
  marker = <MapView.Marker    style={{width:20,height:20}}         image={require('./marker1.png')}
 coordinate={this.state.focusedLocation} />;
}
const markesr = sortByDistance(origin, points);

    return (
      <View style={{flex:1}}>
      <View style={styles.container}>
       <MapView
         initialRegion={this.state.focusedLocation}
         region={!this.state.locationChosen ? this.state.focusedLocation : null}
         style={styles.map}
         customMapStyle={mapsty}
         mapType={this.state.mapType}
         provider={PROVIDER_GOOGLE}

         onPress={this.pickLocationHandler}
         ref={ref => this.map = ref}
       >
         {marker}
       </MapView>
       <View style={{  position: "absolute",
         bottom: 30,
         left: 0,
         right: 0,
         paddingVertical: 10,
         marginBottom:10}}>
         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
     <Form>

                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          placeholder="اختار مسافة"
                          placeholderStyle={{ color: "black" }}
                          placeholderIconColor="#007aff"
                          style={{height: 50, width: 130,backgroundColor:'white' ,padding:10}}
                          selectedValue={this.state.selected}
                          onValueChange={this.onValueChange.bind(this)}
                        >
                          <Picker.Item label="200 متر" value="200" />
                          <Picker.Item label="500 متر" value="500" />
                          <Picker.Item label="1 كيلو متر" value="1000" />
                          <Picker.Item label="2 كيلو متر" value="2000" />
                          <Picker.Item label="5 كيلو متر" value="5000" />
                          <Picker.Item label="10 كيلو متر" value="10000" />

                          <Picker.Item label="20 كيلو متر" value="20000" />
                          <Picker.Item label="40 كيلو متر" value="40000" />
                          <Picker.Item label="50  كيلو متر" value="50000" />
                          <Picker.Item label="60  كيلو متر" value="60000" />
                          <Picker.Item label="70  كيلو متر" value="70000" />
                          <Picker.Item label="80  كيلو متر" value="80000" />
                          <Picker.Item label="90  كيلو متر" value="90000" />
                          <Picker.Item label="100  كيلو متر" value="100000" />
                        </Picker>
                      </Form>
                      { this.state.mapType === 'standard' ?     <TouchableOpacity style={{ borderWidth:1,
                   borderColor:'rgba(0,0,0,0.2)',
                   alignItems:'center',
                   justifyContent:'center',
                padding:5,
                   backgroundColor:'#fff',
                   borderRadius:100,}} onPress={()=>{this.setState({mapType:'satellite'})}}>
            <Icon name="earth" size={30}/>
          </TouchableOpacity> : <TouchableOpacity style={{ borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       padding:5,
       backgroundColor:'white',
       borderRadius:100,}} onPress={()=>{this.setState({mapType:'standard'})}}>
       <Icon name="earth" color="steelblue" size={30}/>
       </TouchableOpacity> }
     </View>
     <Button primary style={{alignSelf:'center',margin:3}} onPress={this.getLocationHandler}>
       <Text style={{color:'white',padding:5}}>موقعي الحالي</Text>
     </Button>
       <Button primary style={{alignSelf:'center'}} onPress={this.maps} >
       <Text style={{color:'white',padding:5,alignSelf:'center'}}>ابحث عن مختبرات</Text>
     </Button>
   </View>
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
this.props.navigation.navigate('index',{ lon: this.state.focusedLocation.longitude,lat:this.state.focusedLocation.latitude,dis:this.state.selected})  }

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor:'#ededed'
  },
  map: {
    width: "100%",
    height: '100%',
    backgroundColor:'#ededed'

  },
  button: {
    margin: 8,
    backgroundColor:'#ededed'

  }
});
