import React, { Component } from 'react';
import { View, Text,Animated ,LayoutAnimation, Platform, UIManager,StyleSheet, Dimensions } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import firebase from 'firebase';
import geolib from 'geolib';
import { firebaseApp } from '../../firebase'
import { Card, ListItem,Header,Slider } from 'react-native-elements'
import mapsty from '../../mapsty'

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;
const halfHeight = height / 2;
// import { MARKERS } from '../../constants/ToiletPositions';

export default class Index extends Component {
  constructor(props) {
     super(props);


     this.state = {
       positions: [],
             isMapReady: false,
        position: {
          latitude: this.props.navigation.state.params.lat,
          longitude: this.props.navigation.state.params.lon,
          latitudeDelta: 0.04,
     longitudeDelta: 0.05,
        },
       positiona: {
         latitude: this.props.navigation.state.params.lat,
         longitude: this.props.navigation.state.params.lon,
         latitudeDelta: 0.04,
   longitudeDelta: 0.05,
       },
       selectedTab: '100m',
       distance: this.props.navigation.state.params.dis
     };
     this.array=[]
   }

   componentWillMount() {
   this.index = 0;
   this.animation = new Animated.Value(0);
 }
 onMapLayout = () => {
   this.setState({ isMapReady: true });
 }
   componentDidMount() {


     this.getToiletPositions()
     this.setState({
       position: {
         latitude: this.props.navigation.state.params.lat,
         longitude: this.props.navigation.state.params.lon,
         latitudeDelta: 0.04,
    longitudeDelta: 0.05,
       },
     });
   }

   getToiletPositions() {
     firebaseApp
       .database()
       .ref('toilets')
       .on('value', (snap) => {
         const items = [];
         snap.forEach((child) => {
           items.push({
             location: child.val(),
             _key: child.key,
           });
         });
         this.setState({ positions: items });
       });
   }

   fitAllMarkers = (coordinates) => {
     if (this.map) {
       // console.log('--->', this.map);
       this.map.fitToCoordinates(coordinates, {
         animated: true,
       });
     }
   };

   renderMarkers = () => {
     const { selectedTab, position, positions,positiona } = this.state;
     // let collectionOfMarkers;
     // let coordinates;
     const collectionOfMarkers = [];
     const coordinates = [];
     const map =[]

     // console.log('>>', coordinates);
     coordinates.push(position);
     positions.map((obj, index) => {
       // console.log(obj);

       const {
         coordinate,name,uid,des
       } = obj.location;
       const distance = geolib.getDistance(positiona, coordinate);
       // console.log(coordinate); const scaleStyle = {

       if (this.state.distance && distance <= this.state.distance) {

         coordinates.push(coordinate);
         map.push({names:name,puid:uid,pdes:des,coordinate});
this.array =map
         collectionOfMarkers.push(
           <MapView.Marker key={index}  title={name}
           pinColor="#F0FF"

   description={des}
              coordinate={coordinate}/>

         );
       }
     });

     // console.log(coordinates, '<<');

     this.fitAllMarkers(coordinates);

     return collectionOfMarkers;
   };

   render() {
     const { position, selectedTab, positions,positiona } = this.state;
     const collectionOfMarkers = [];
     const coordinates = [];
     const map =[]

      console.log('>>>', position);

     coordinates.push(position);
     return (
       <View style={{  position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         justifyContent: 'flex-end',
         alignItems: 'center',}}>
         <MapView
           ref={(ref) => {
             this.map = ref;
           }}
           style={Styles.map}
           customMapStyle={mapsty}
           provider={PROVIDER_GOOGLE}
           region={this.state.position}
         >
         <MapView.Marker
           pinColor="#F0FF"
           coordinate={position}
            image={require('./marker1.png')}
            style={{width:20,height:20}}

           title="My current location"
           description="I am here"
         />

           { positions.map((obj, index) => {
              // console.log(obj);

              const {
                coordinate,name,uid,des
              } = obj.location;
              const distance = geolib.getDistance(positiona, coordinate);
              // console.log(coordinate); const scaleStyle = {

              if (this.state.distance && distance <= this.state.distance) {

                coordinates.push(coordinate);
                map.push({names:name,puid:uid,pdes:des,coordinate});
       this.array =map
                collectionOfMarkers.push(
                  <MapView.Marker key={index}  title={name}
                  pinColor="#F0FF"
                  image={require('./labiss.png')}
style={{width:20,height:20}}
          description={des}
                     coordinate={coordinate}/>

                );
                return collectionOfMarkers
              }
            })}


         </MapView>
         <Animated.ScrollView
           horizontal
           scrollEventThrottle={1}
           showsHorizontalScrollIndicator={false}
           snapToInterval={CARD_WIDTH}
           onScroll={Animated.event(
             [
               {
                 nativeEvent: {
                   contentOffset: {
                     x: this.animation,
                   },
                 },
               },
             ],
             { useNativeDriver: true }
           )}
           style={Styles.scrollView}
           contentContainerStyle={Styles.endPadding}
         >
           {this.array.map((marker, index) => (
             <View style={Styles.card} key={index}>
               <View style={Styles.textContent}>
               <Text numberOfLines={1} style={Styles.cardtitle}>
               {marker.names}
               </Text>

      <Text numberOfLines={5} style={Styles.cardDescription}>
{marker.pdes}
</Text>

<Button bordered  onPress={()=> this.user(marker)}>
          <Text style={{color:'steelblue',padding:5}}>View Profile</Text>
        </Button>
               </View>
             </View>
           ))}
         </Animated.ScrollView>

</View>


     );
   }
   user = (data) => {
   this.props.navigation.navigate('profilea', {name: data.names, uid: data.puid})}

 }
const Styles = StyleSheet.create({
  container: {
     width,
     height:halfHeight
  },
  map: {
    width,
    height
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
    marginBottom:10
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
    borderRadius:15,
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
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
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
  spinner: {
    marginLeft: width * 0.5 - 50,
    marginTop: height * 0.5 - 50,
  },
  footer: {
    flex: 1,
    backgroundColor: '#009688',
    height: 55,
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  footerText: {
    fontSize: 20,
  },
});
