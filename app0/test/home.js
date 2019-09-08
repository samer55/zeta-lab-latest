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
import {
  Container,
  Header,
  Title,
  Thumbnail,
  Content,
  Footer,
  CardItem,
  FooterTab,
  Button,
  Left,
  Right,
  Card,
  Tab, Tabs, TabHeading,
  Body,
} from "native-base";
import Cat from './cat'
import { Ionicons } from '@expo/vector-icons';
import Share from 'react-native-share'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'
import { NavigationActions } from "react-navigation";
import * as Expo from "expo";
import {
  iOSColors,
  human,
  iOSUIKit,

  material,
  systemWeights
} from "react-native-typography";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import SearchBar from './search'
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const screenWidth = Dimensions.get('window').width
@inject("appStore") @observer
export default class Tag extends Component {
  static navigationOptions = {
  tabBarLabel: 'Photos',

}
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
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>


      </View>
    );
  };

  toggle() {
    this.setState({
      showText: !this.state.showText
    });
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
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { likes, comments} = this.props.appStore.user.uid

    var headMov = this.state.scrollY.interpolate({
      inputRange: [0, 390, 391],
      outputRange: [0, -390, -390]
    });
    var coverMov = this.state.scrollY.interpolate({
      inputRange: [0, 94, 95],
      outputRange: [0, -94, -94]
    });
    var avatarMov = this.state.scrollY.interpolate({
      inputRange: [0, 150, 151],
      outputRange: [0, -150, -150]
    });
    var avatarOp = this.state.scrollY.interpolate({
      inputRange: [0, 94, 95],
      outputRange: [1, 0, 0]
    });
    var headerOp = this.state.scrollY.interpolate({
      inputRange: [95, 180, 181],
      outputRange: [0, 0.75, 0.75]
    });
    var headerContentOp = this.state.scrollY.interpolate({
      inputRange: [0, 180, 210],
      outputRange: [0, 0, 1]
    });


    const { likeCount } = this.state
    const { commentCount } = this.state
    return (
      <View style={{ flex: 1,backgroundColor:'#FEFEFE' }}>

        <Animated.View
          style={{
            width: "100%",
            position: "absolute",
            backgroundColor: "#FEFEFE",
            height: 56 + Expo.Constants.statusBarHeight,
            zIndex: 13,
            opacity: headerOp,
            paddingTop: Expo.Constants.statusBarHeight,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >


          <Text style={material.title}>Discover</Text>


          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
              }
            ],
            {
              useNativeDriver: true
            }
          )}
        >
          <View
            style={StyleSheet.flatten([
              styles.header,
              { marginTop: 5 + Expo.Constants.statusBarHeight }
            ])}
          >
            <View style={{ flexDirection: "row", }}>
            <View style={{marginTop:25}}>
            <TouchableOpacity
          onPress={() =>this.props.navigation.navigate("profile") }
          >
          <Thumbnail

          source={{
            uri: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/30712271_2077585272526126_2578224842112439429_n.jpg?_nc_cat=0&oh=acf2414c8793fa810a97b2b7ab761274&oe=5B82FC9F"
          }}
          />
          </TouchableOpacity>
          </View>
          <View style={{marginBottom:17}}>
<SearchBar/>
</View>
            </View>
          </View>
        <ListView
          automaticallyAdjustContentInsets={false}
          initialListSize={1}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderFooter={this._renderFooter}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={1}
        />
        </Animated.ScrollView>
      </View>

    )
  }

  _renderRow = (data) => {
    //console.log("TIMELINE :::: _renderRow " + data.title)

    return (
      <Card style={{ marginLeft:15,marginRight:15,...Platform.select({
            android: { elevation: 16 },
            ios: {
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 16
              },
              shadowOpacity: 0.2,
              shadowRadius: 16
            }
          }),
        borderColor: '#fff'}} >


        <TouchableOpacity  onPress={() => this._BuyNow(data)}>
                           <CardItem style={{justifyContent:'center',alignItems:'center'}}>
                           <Text style={{textAlign:'center',justifyContent:'center', fontSize:26}}>#{ data.title }</Text>

                           </CardItem>
</TouchableOpacity>

              </Card>


    )
  }


  _BuyNow = (postData) => {
this.props.navigation.navigate("pos",{title:postData.title, puid:postData.puid,user:postData.username})
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
