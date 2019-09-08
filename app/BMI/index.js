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
  ImageBackground,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { Card, ListItem, Button,Avatar,Header } from 'react-native-elements'

const screen = Dimensions.get('window').height

const screenWidth = Dimensions.get('window').width

export default class Indexb extends Component {
  static navigationOptions = () => ({
    title: `bmi`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  render() {
    return (

      <ImageBackground
        source={require('./bm.jpg')}
        style=  {styles.ima}               >

        <View
          style={{width:screenWidth,height:screen,backgroundColor:'rgba(0,0,0,0.1)'}} >

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#cd295a'}}>BMI Calculation</Text>

          </View>
          <View style={{justifyContent:'center',alignItems:'center',width:screenWidth,flexDirection:'column'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}>What's your gender</Text>

            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => this._openm()}
            >

              <Text style={styles.TextStyle}> MALE </Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonStylef}
              activeOpacity = { .5 }
              onPress={() => this._openf()}
            >

              <Text style={styles.TextStyle}> FEMALE</Text>

            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>

    )
  }

_openm = () => {
  this.props.navigation.navigate('bmim') }
_openf= () => {
  this.props.navigation.navigate('bmif') }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  ima:{  flexGrow:1,
    height:screen,
    width:screenWidth,


    // Set border Radius.
},
  image: {
    flexGrow:1,
    height:150,
    width:150,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
    fontSize:30,
    color:'white'

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
  SubmitButtonStyle: {
width:100,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  SubmitButtonStylef: {
width:100,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor:'red',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold'
  }
})
