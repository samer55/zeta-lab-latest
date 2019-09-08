import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ListView,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
  ScrollView,
Animated,
Image,
  ImageBackground,
  Alert,
} from 'react-native'
import { Container,Content, List, Left, Body, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import MapMixin from './map'
const GeoFire = require('geofire')

import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'

import { Card, ListItem, Button,Header } from 'react-native-elements'

const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height
import MapView from "react-native-maps";

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;


export default class Irbid extends Component {
  constructor(props) {
     super(props)
     this.geoFire = new GeoFire(firebaseApp.database().ref('location'))


     this.state.nearestDriver = null
     this.state.nearestDriverRadius = []

     this.state.route = null
   }
    state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

      markers: [
        {
          coordinate: {
            latitude: this.props.navigation.state.params.lat,
            longitude:this.props.navigation.state.params.lon,
          },
          title: "Best Place",
          description: "This is the best place in Portland",
          image: Images[0],
        },

      ],
      region: {
        latitude: this.props.navigation.state.params.lat,
        longitude: this.props.navigation.state.params.lon,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
     getNearbyUsers() {
      let ref = firebaseApp.database().ref('loc/');

      let geoFire = new GeoFire(ref);

      let geoQuery = geoFire.query({
        center: [this.props.navigation.state.params.lat, this.props.navigation.state.params.lon],
        radius: 0.1
      })
      var merchants = [];

      // How do I get initial data from here?

      geoQuery.on("ready", function() {
        console.log("GeoQuery has loaded and fired all other events for initial data");
      });

      geoQuery.on("key_entered", function(key, location, distance) {
        ref.child(key).once('value').then((snapshot) => { // here too!
          // ... and add it to the matches array
          merchants.push(snapshot.val())
          console.log(merchants)
          this.setState({
            loading: snapshot.val(),
            dataSource: this.state.dataSource.cloneWithRows(merchants)
          })
        })
        console.log(key + " entered query at " + location + " (" + distance + " km from center)");
      });

      geoQuery.on("key_exited", function(key, location, distance) {
        console.log(key + " exited query to " + location + " (" + distance + " km from center)");
      });

      geoQuery.on("key_moved", function(key, location, distance) {
        console.log(key + " moved within query to " + location + " (" + distance + " km from center)");
      });
    }
    _renderRow = (data) => {
      return (

        <List>
              <ListItem avatar>
                <Left>


                </Left>
                <Body>

  <Text style={{color:'white',fontSize:15}}>{data.lon}sdddddd</Text>

                </Body>
                <Right>
                </Right>
              </ListItem>
            </List>

      )
    }

    queryDrivers() {
      let radius = 5 // 100m
      let currentLocation = [
        this.props.navigation.state.params.lat,
        this.props.navigation.state.params.lon,
      ]

      let driversFound = {}

      let geoQuery = this.geoFire.query({center: currentLocation, radius})

      geoQuery.on('key_entered', (key, location, distance) => {

        if (/driver:/.test(key)) {
               driversFound[key] = {key, location, distance}
             }
      })

      let timeout = null

      geoQuery.on('ready', _ => {
        // update circle
        this.state.nearestDriverRadius.push(geoQuery.radius())
        this.setState({nearestDriverRadius: this.state.nearestDriverRadius})

        // clear previous timeout
        clearTimeout(timeout)

        timeout = setTimeout(_ => {
          if (Object.keys(driversFound).length === 0) {
         radius += 0.1
         geoQuery.updateCriteria({radius})
       } else {
         clearTimeout(timeout)
         // find nearest
         let minDistance = -1, nearestDriver = null

         Object.keys(driversFound).forEach(key => {
           const driver = driversFound[key]

           if (driver.distance < minDistance || minDistance === -1)
             minDistance = driver.distance, nearestDriver = driver
         })

         const nearestDriverKey = nearestDriver.key.split(':')[1]

         this.state.markers.forEach(driver => {
           if (driver.id === nearestDriverKey) {
             this.setState({nearestDriver: driver})
           }
         })
       }
     }, 2000)
   })
    }
  componentWillMount() {
  this.index = 0;
  this.animation = new Animated.Value(0);
}
listenForItems(ref) {
  ref.on('value', snap => {
    let comments = [];
    snap.forEach(child => {
      var carArray = [  {
          coordinate: {
            latitude: child.val().lat,
            longitude:child.val().lon,
          },
          title: "new",
          description: child.val().title,
          image: Images[0],
        }]
      this.setState({
        markers: [ ...this.state.markers, ...carArray ]
      })
    })
    this.setState({dataSource: this.state.dataSource.cloneWithRows(comments)}, function() {

       // In this block you can do something with new state.
       this.arrayholder = comments ;

     });
  })
}
renderNearestDriver() {
  if (this.state.nearestDriver === null)
    return

  return <Marker draggable image={redDotIcon}
                 coordinate={this.state.nearestDriver.position} />
}

componentDidMount() {
  // We should detect when scrolling has stopped then animate
  // We should just debounce the event listener here
  this.getNearbyUsers()
  const commentsRef = firebaseApp.database().ref('loc');
  this.setState({commentsRef})
  this.listenForItems(commentsRef);

  this.animation.addListener(({ value }) => {
    let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
    if (index >= this.state.markers.length) {
      index = this.state.markers.length - 1;
    }
    if (index <= 0) {
      index = 0;
    }

    clearTimeout(this.regionTimeout);
    this.regionTimeout = setTimeout(() => {
      if (this.index !== index) {
        this.index = index;
        const { coordinate } = this.state.markers[index];
        this.map.animateToRegion(
          {
            ...coordinate,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          },
          350
        );
      }
    }, 10);
  });
}


  static navigationOptions = () => ({
    title: `irbid`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return(
             <View style={{flex:1,justifyContent:'space-between',backgroundColor:'white'}}>


                   <ListView
                     automaticallyAdjustContentInsets={false}
                     initialListSize={1}
                     dataSource={this.state.dataSource}
                     renderRow={this._renderRow}
                     onEndReachedThreshold={1}
                   />


             </View>    )
  }

  _flagPost = (postData) => {
    console.log("--------> FLAG !!!!!!")
    console.log(postData)
    Alert.alert(
      'Flag Confirmation',
      'Are you sure you want to flag this item? If yes, a moderator will decide within 24 hours if this item should be removed.',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        { text: 'Yes', onPress: () => {

          fetch('https://onesignal.com/api/v1/notifications',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': this.props.appStore.onesignal_api_key,
            },
            body: JSON.stringify(
            {
              app_id: this.props.appStore.onesignal_app_id,
              included_segments: ["All"],
              headings: {"en": "🏴🏴🏴🏴 Item flaged! 🏴🏴🏴🏴"},
              android_sound: "fishing",
              data: postData,
              big_picture: postData.image,
              ios_sound: "fishing.caf",
              contents: {"en": this.props.appStore.user.displayName + " just flaged: " + postData.title + " for " + postData.price},
              filters: [{"field":"tag","key":"username","relation":"=","value":"Herve f"}],
            })
          })
          .then((responseData) => {
            console.log("Push POST:" + JSON.stringify(responseData));
          })
          .done()

         } },
      ]
    )
  }

  _openChat = (postData) => {
    console.log(" *************** Opening CHAT ROOM *************** " + postData.puid);
    Actions.chat({ title:postData.title, puid:postData.puid })
  }

  _BuyNow = (postData) => {
    Actions.chat({ title:postData.title, puid:postData.puid, wantToBuy:true })
  }

  _onEndReached = () => {
    //console.log("TIMELINE ----> _onEndReached :+++:");
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('irbid').off()
      firebaseApp.database().ref('irbid').orderByChild('createdAt').limitToLast(this.state.counter+1).on('value',
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
          <Text>Nothing there yet.</Text>
        </View>
      )
    }
  }

  componentWillUnmount() {
    console.log("---- TIMELINE UNMOUNT ---")
    firebaseApp.database().ref('irbid').off()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
