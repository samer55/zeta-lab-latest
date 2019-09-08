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
  Image,
  StatusBar,
  ImageBackground,
  TouchableHighlight,
  Animated,
  ScrollView,
  Alert,
  Modal
} from 'react-native'
import { Card, ListItem, Button,Header } from 'react-native-elements'
import { Actions } from 'react-native-mobx'

import Share from 'react-native-share'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../../firebase'

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const scw = Dimensions.get('window').width
const heigh = Dimensions.get('window').height

@inject("appStore") @observer
export default class Testn extends Component {

  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      counter: 1,
      liked: false,
      likeCount: 0,
      commentCount: 0,
      isLoading: true,
      isEmpty: false,
      scrollY: new Animated.Value(0),
      isFinished: false,
      modalVisible: false,
      likes: '',
     updated: false,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    }
  }

  componentDidMount() {
    console.log("--------- TIMELINE --------- " + this.state.counter)
    firebaseApp.database().ref('tag').orderByChild('create').limitToLast(this.state.counter).on('value',
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

  componentDidUpdate() {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {

    return (
      <Image source={require('./priceback.jpg')} style={styles.imagee}>
        <View
          style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
          <Header backgroundColor='white'
            leftComponent={{ icon: 'arrow-back', color: 'red' ,onPress: () => Actions.home(),}}
            centerComponent={{ text: 'Price of Test', style: { color: 'red' } }}
          />
          <TouchableOpacity onPress={() =>{
            Actions.cbc()
          }}>
            <Card
              containerStyle={{textAlign: 'center',

                // Setting up TextInput height as 50 pixel.

                // Set border width.
                borderWidth: 2,

                // Set border Hex Color Code Here.
                shadowOffset:{  width: 1,  height: 1,  },
                shadowColor: 'black',

                // Set border Radius.
                borderRadius: 20 ,

                //Set background color of Text Input.
              }}              title='CBC'
            >

            </Card>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }

  _renderRow = (data) => {
    //console.log("TIMELINE :::: _renderRow " + data.title)

    return (
  <View style={styles.container}>
    <Text style={{textAlign:'center',justifyContent:'center', fontSize:26}}>#{ data.title }</Text>


  </View>





    )
  }



  _openChat = (postData) => {
    console.log(" *************** Opening CHAT ROOM *************** " + postData.puid);
  }


  _onEndReached = () => {
    //console.log("TIMELINE ----> _onEndReached :+++:");
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('tag').off()
      firebaseApp.database().ref('tag').orderByChild('create').limitToLast(this.state.counter+1).on('value',
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
    firebaseApp.database().ref('tag').off()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    padding: 5,
    color: '#444',
  },
  postImage: {
    backgroundColor: '#eee',
  },
  postInfo: {
    padding: 3,
    alignItems: 'center',
  },
  postButtons: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  imagee: {
flexGrow:1,
width:scw,
height:heigh

  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    backgroundColor: "#FEFEFE"
  },
  avatarbg: {
    //marginTop: -95,
    marginLeft: 20,
    padding: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 12
    // borderRadius: 180
  },
  avatar: {
    marginLeft: 26,
    marginTop: -95,
    width: 89,
    height: 89,
    borderRadius: 44,
    zIndex: 12
  },
  headerButton: {
    // alignSelf: "flex-end",
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 3,
    paddingTop: 3,
    marginRight: 8
  },
  nameText: {
    fontSize: 26,
    fontWeight: "500",
    marginLeft: 14
  },
  usernameText: {
    color: "#777",
    fontSize: 16,
    marginLeft: 14
  },
  bioText: {
    fontSize: 16,
    marginLeft: 14,
    marginTop: 10,
    maxHeight: 41
  },
  locationText: {
    fontSize: 16,
    marginLeft: 14,
    marginTop: 10,
    color: "#555"
  },
  topMargin: {
    // marginTop: 25
  },
  content: {
    padding: 10,
    backgroundColor: "white"
  },
  heading: {
    fontSize: 32,
    fontWeight: "400",
    marginBottom: 30
  },
  tweet: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "column"
  },
  tweetText: {
    marginTop: 10,
    fontSize: 18,
    color: "#555"
  },
  tweetFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  badgeCount: {
    fontSize: 12,
    paddingLeft: 5
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  topMargin: {
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: "white",
    zIndex: -1
  },
  button: {
    flex: 3,
    padding: 5,
    margin: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    backgroundColor: '#4285f4',
  },
  modalContent: {
    marginLeft: Dimensions.get("window").width / 40,
    marginRight: Dimensions.get("window").width / 40
  },
  info: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
      width: 150,
      height: 150,
  },
  info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  name: {
      fontSize: 20,
      marginTop: 10,
      color: '#333'
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 40,
      marginTop: 15,
  },
  iconContainer:{
      flex: 1,
      alignItems: 'center',
  },
  count: {
      color: 'red',
      fontSize: 16,
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
 userCityText: {
   color: '#A5A5A5',
   fontSize: 15,
   fontWeight: '600',
   textAlign: 'center',
 },

 userNameText: {
   color: '#FFF',
   fontSize: 22,
   fontWeight: 'bold',
   paddingBottom: 8,
   textAlign: 'center',
 },
})
