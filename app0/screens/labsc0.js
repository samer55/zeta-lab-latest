import React, { Component } from 'react'
import { ListView, Linking,Text, View, StyleSheet,Dimensions,Platform,TouchableOpacity,TextInput,ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'

import { SearchBar,Card, Button} from 'react-native-elements'; // Version can be specified in package.json
const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height
import { Container, Header,Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';


@inject("appStore") @observer
export default class Lab extends Component {
  constructor(props) {
    super(props)


    this.state = {
      counter: 1,
      isLoading: true,
      isEmpty: false,
      search: '',
      comment: '',
      commentsRef: '',
      num:'',
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
user:'',
  data: [],
  filteredData: [],
      isFinished: false,
    }
    this.arrayholder=[]
  }



    filter = search => {
      // Here's where we'll do the filter

      // 1. Lowercase the value
      const value = search.toLowerCase();

      // 2. Always filter from the original set of values
      const filteredData = this.state.dataSource.filter(a =>
        a.title.toLowerCase().includes(value)
      );

      this.setState({ search, filteredData });
    };
    componentDidMount() {
      console.log("--------- TIMELINE --------- " + this.state.counter)
      firebaseApp.database().ref('users').orderByChild('createdAt').on('value',
      (snapshot) => {
        console.log("---- TIMELINE POST RETRIEVED ---- "+ this.state.counter +" - "+ _.toArray(snapshot.val()).length)
        if (snapshot.val()) {
          this.setState({ dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val()))) })
        }

      })
    }



  render() {
    return (
      <View style={{flex:1,justifyContent:'space-between'}}>

      <Header />

            <ListView
              automaticallyAdjustContentInsets={false}
              initialListSize={1}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              onEndReachedThreshold={1}
            />


      </View>
    )
  }
  onPressTel = number => {
    Linking.openURL(`tel://${this.state.num}`).catch(err => console.log('Error:', err))
  }

    num = (data) => {
    this.setState({num:data.phone})}
  user = (data) => {
  this.props.navigation.navigate('user', {name: data.username, uid: data.uid})}
  _renderRow = (data) => {
    return (

      <List>
            <ListItem avatar>
              <Left>
              <TouchableOpacity  onPress={()=> this.user(data)}>
              <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Doctor-512.png' }} />

              </TouchableOpacity>

              </Left>
              <Body>
                <Text style={{fontWeight:'800'}}>{data.username}</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.button}  onPress={this.onPressTel}>
<Text style={{color:'white',fontSize:15}}>call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonn}  onPress={this.onPressTel}>
<Text style={{color:'white',fontSize:15}}>share</Text>
                </TouchableOpacity>

                </View>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>

    )
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
  TextInputStyleClass:{

 textAlign: 'center',
 height: 40,
 borderWidth: 1,
 borderColor: 'grey',
 borderRadius: 20 ,
 marginTop:70,
 backgroundColor : "#FFFFFF"

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
  imag: {
    flexGrow:1,
    width:screenWidth,
  height:screen
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
  button: {
flex:3,
    padding: 6,
    margin: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonn: {
flex:3,
    padding: 6,
    margin: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  info: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
})
