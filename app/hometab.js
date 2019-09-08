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
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Share from 'react-native-share'
import { Actions } from 'react-native-mobx'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'
import { Card, ListItem, Button,Avatar,Header } from 'react-native-elements'

import Swiper from 'react-native-swiper'

const screenWidth = Dimensions.get('window').width
const screen= Dimensions.get('window').height

@inject("appStore") @observer
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
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
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
    return (
      <Image
        source={require('./123.jpg')}
        style=  {styles.ima}               >
        <View
          style={{backgroundColor:'rgba(0,0,0,0.1)',width:screenWidth,height:screen}} >


          <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginBottom:5}}>

            <Swiper style={styles.wrapper} height={170} width={screenWidth} horizontal={false} autoplay >
              <View style={styles.slide1}>
                <Image resizeMode='stretch' style={styles.imageee} source={require('./slide1.jpeg')} />
              </View>
              <View style={styles.slide2}>
                <Image resizeMode='stretch' style={styles.imageee} source={require('./slide2.jpeg')} />
              </View>
              <View style={styles.slide3}>
                <Image resizeMode='stretch' style={styles.imageee} source={require('./slide3.jpeg')} />
              </View>
            </Swiper>
          </View>
          <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this._openChat()}>
              <Image
                source={require('./img/price.jpg')}
                style=  {styles.image}               >
                <View
                  style={{alignItems:'center',backgroundColor: 'rgba(0,0,0,0.1)',justifyContent:'center',width:170,height:170}} ><Text style={styles.paragraph}>Price of Test</Text></View>
              </Image>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._openprom()}>

              <View>
                <Image
                  source={require('./prom.jpg')}                style={styles.image}
                >
                  <View
                    style={{backgroundColor: 'rgba(0,0,0,0.1)',width:170,height:170,alignItems:'center',justifyContent:'center'}} ><Text style={styles.paragraph}>Advertisment & Promotion</Text></View>
                </Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'space-around',flexDirection:'row',marginTop:4}}>
            <TouchableOpacity onPress={() => this._opensum()}>
              <Image
                source={require('./summary.jpg')}
                style=  {styles.image}               >
                <View
                  style={{width:170,height:170,alignItems:'center',backgroundColor: 'rgba(0,0,0,0.1)',justifyContent:'center'}} ><Text style={styles.paragraph}>A Brief summary of tests</Text></View>
              </Image>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._opencity()}>
              <Image
                source={require('./img/near.jpg')}
                style=  {styles.image}               >
                <View
                  style={{width:170,height:170,alignItems:'center',justifyContent:'center',backgroundColor: 'rgba(0,0,0,0.1)'}} ><Text style={styles.paragraph}>Near By</Text></View>
              </Image>

            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this._openbmi()}>
              <Image
                source={require('./img/bmi.jpg')}
                style=  {styles.imagee}               >
                <View
                  style={{width:350,height:170,alignItems:'center',justifyContent:'center',backgroundColor: 'rgba(0,0,0,0.1)'}} ><Text style={styles.paragraph}>Calculation of BMI</Text></View>
              </Image>

            </TouchableOpacity>

          </View>
        </View>
      </Image>
    )
  }

  _opensum = () => {
    Actions.sum()
  }
  _openChat = () => {
    Actions.price()
  }
  _opencity = () => {
    Actions.near()
  }
  _openbmi = () => {
    Actions.bmi()
  }
  _openprom = () => {
    Actions.promotion()
  }

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
  image:{  flexGrow:1,
    height:170,
    width:170,
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
    width:350,
marginTop:5,
marginHorizontal:5,
marginRight:5,
    // Set border Hex Color Code Here.
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',

    // Set border Radius.
    borderRadius: 20 ,
    alignItems: 'center',
    justifyContent:'center',
  },
  imageee: {
    flexGrow:1,
    height:100,
    width:Dimensions.get('window').width,


    // Set border Hex Color Code Here.

  },
  paragraph: {
    textAlign: 'center',
    fontSize:20,
    color:'black',
    fontWeight:'bold'

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
