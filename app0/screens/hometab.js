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
  StatusBar,
  Dimensions,
  ImageBackground,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'
import { Card, ListItem, Button,Avatar,Header } from 'react-native-elements'
import Slider from './Slider'
import GridView from 'react-native-super-grid';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
import Swiper from 'react-native-swiper'

const screenWidth = Dimensions.get('window').width
const screen= Dimensions.get('window').height
const image1 = require('../img0/price.jpg')
const image2 = require('../prom.jpg')
const image3 = require('../summary.jpg')
const image4 = require('../img0/near.jpg')
export default class Hometab extends Component {
  constructor(props) {
    super(props)
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      counter: 1,
      isLoading: true,
      isEmpty: false,
      isFinished: false,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
  }

  componentDidMount() {
    console.log("--------- TIMELINE --------- " + this.state.counter)
    firebaseApp.database().ref('posts').orderByChild('createdAt').limitToLast(this.state.counter).on('value',
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
    const items = [
     { name: 'اسعار الفحوصات', img: image1 ,press:this._openChat},
     { name: 'العروض', img: image2,press:this._openprom},
     { name: 'نبذة', img: image3,press:this._opensum},
     { name: 'المختبرات القريبة', img: image4,press:this._opencity},

   ];
    return (

      <ImageBackground
        source={require('./22.jpg')}
        style=  {styles.ima}               >

        <View
          style={{backgroundColor:'rgba(0,0,0,0.1)',width:screenWidth,height:screen,justifyContent:'space-around'}} >
          <MyStatusBar backgroundColor="transparent" />

          <Slider/>

          <TouchableOpacity onPress={() => this._openbmi()} style={{width:screenWidth}} >
            <ImageBackground
              source={require('../img0/bmi.jpg')}
              style=  {styles.imagee}               >
              <View
                style={{width:screenWidth,height:80,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(255, 255, 255, 0.3)'}} ><Text style={styles.paragraph}>حساب كتلة الجسم</Text></View>
            </ImageBackground>

          </TouchableOpacity>
          <GridView
            itemDimension={150}
            items={items}
            style={styles.gridView}
            renderItem={item => (

              <TouchableOpacity onPress={item.press} style={{borderRadius:20,borderColor:'grey'}}>

                <ImageBackground
                  source={item.img}
                  style=  {styles.itemContainer}  resizeMode='cover'
borderRadius={20}             >
                <View style={{position: 'absolute', borderRadius:19,top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',  shadowColor: "white",alignSelf:'center',
              backgroundColor:'rgba(255, 255, 255, 0.4)'}} ><Text numberOfLines={2} style={styles.paragraph}>{item.name}</Text></View>
                </ImageBackground>
              </TouchableOpacity>

            )}
          />




        </View>
      </ImageBackground>
    )
  }

  _opensum = () => {
this.props.navigation.navigate('sum')
  }
  _openChat = () => {
  this.props.navigation.navigate('Details')
  }
  _opencity = () => {
  this.props.navigation.navigate('near')  }
  _openbmi = () => {
  this.props.navigation.navigate('bmi')   }
  _openprom = () => {
this.props.navigation.navigate('prom')  }

  _BuyNow = (postData) => {
    Actions.chat({ title:postData.title, puid:postData.puid, wantToBuy:true })
  }

  _onEndReached = () => {
    //console.log("TIMELINE ----> _onEndReached :+++:");
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('posts').off()
      firebaseApp.database().ref('posts').orderByChild('createdAt').limitToLast(this.state.counter+1).on('value',
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
    firebaseApp.database().ref('posts').off()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
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
  imag: {
    flexGrow:1,
    width:screenWidth,
  height:screen
  },
  ima:{  flexGrow:1,
    height:screen,
    width:screenWidth,


    // Set border Radius.
},
gridView: {
  paddingTop: 5,
  flex: 1,
  borderRadius:19
},
itemContainer: {
  justifyContent: 'flex-end',
  borderRadius: 20,
  padding: 10,
  height: 160,

},
itemName: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
},
itemCode: {
  fontWeight: '600',
  fontSize: 12,
  color: '#fff',
},
  image:{  flexGrow:1,
    height:150,
    width:150,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    borderRadius:20,
    borderWidth:1,
    borderColor:'grey'
    // Set border Radius.
},
  imagee: {
    flexGrow:1,
    height:80,
    width:screenWidth,

marginTop:5,marginBottom:5,
    // Set border Radius.

  },
  imageee: {
    flexGrow:1,
    height:100,
    width:Dimensions.get('window').width,


    // Set border Hex Color Code Here.

  },
  paragraph: {
    textAlign: 'center',
    alignSelf:'center',
    fontSize:20,
    color:'black',
    marginTop:9,
    fontWeight:'bold',
    padding:10,
    fontFamily:'Roboto',
    shadowColor: 'white',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,

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
  wrapper: {
    width:100
},

slide: {
width:350,
  justifyContent: 'center',
  backgroundColor: 'transparent'
},

slide1: {
  flex: 1,

  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

slide2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

  postButtons: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  row: {
    justifyContent:'space-around',
    flexDirection: 'row',
    flex: 1,
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
  info: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
})
