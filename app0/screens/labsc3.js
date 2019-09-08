import React, { Component } from 'react'
import { ListView, Linking,Text,Share, View, StyleSheet,Dimensions,Platform,TouchableOpacity,TextInput,ImageBackground,Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'

import { SearchBar,Card, Button,CheckBox} from 'react-native-elements'; // Version can be specified in package.json
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
      a.username.toLowerCase().includes(value)
    );

    this.setState({ search, filteredData })
  };

    componentDidMount() {
      const commentsRef = firebaseApp.database().ref('users');
      this.setState({commentsRef})
      this.listenForItems(commentsRef);
    }

    listenForItems(ref) {
      ref.on('value', snap => {
        let comments = [];
        snap.forEach(child => {
          comments.push({
            phone: child.val().phone,
            uid: child.val().uid,
 username:child.val().labn,
 check:child.val().home,
 imagep:child.val().imagep,

          })
        })
        this.setState({dataSource: this.state.dataSource.cloneWithRows(comments)}, function() {

           // In this block you can do something with new state.
           this.arrayholder = comments ;

         });
      })

    }

    SearchFilterFunction(text){

         const newData = this.arrayholder.filter(function(item){
             const itemData = item.phone.toUpperCase()
             const textData = text.toUpperCase()
             return itemData.indexOf(textData) > -1
         })
         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(newData),
             text: text
         })
     }


  render() {
    return (
      <View style={{flex:1,justifyContent:'space-between',backgroundColor:'white'}}>

      <TextInput
        style={styles.TextInputStyleClass}
        onChangeText={(text) => this.SearchFilterFunction(text)}
        value={this.state.text}
        underlineColorAndroid='transparent'
        placeholder="ابحث عن مختبر"
      />
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
  onPressTel = (data) => {
    Linking.openURL(`tel://${this.state.num}`).catch(err => console.log('Error:', err))
  }


  user = (data) => {
  this.props.navigation.navigate('user', {name: data.username, uid: data.uid})}
  _renderRow = (data) => {
    return (

      <List>
            <ListItem avatar>
              <Left>
              <TouchableOpacity  onPress={()=> this.user(data)}>
              <Thumbnail square
           source={{ uri:data.imagep }}
          style={{width:80,height:80}}
           />
              </TouchableOpacity>

              </Left>
              <Body>
                <Text style={{fontWeight:'800',fontSize:20}}>{data.username}</Text>
                <CheckBox
                checkedColor='red'

    title='سحب منزلي'
    checked={data.check}
  />

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.button}    onPress={()=> Linking.openURL(`tel://${data.phone}`).catch(err => console.log('Error:', err))}>
<Text style={{color:'white',fontSize:15}}>اتصل</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonn} onPress={()=>{
                  Share.share({
               message: `تعرف على المختبر ${data.username}`,
               title: 'هل شاهدت مختبر'
             }, {
               // Android only:
               dialogTitle: 'Share BAM goodness',
               // iOS only:
               excludedActivityTypes: [
                 'com.apple.UIKit.activity.PostToTwitter'
               ]
             })
           }}>
<Text style={{color:'white',fontSize:15}}>شارك</Text>
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
 backgroundColor : "#fff"

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
    padding: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  buttonn: {
flex:3,
    padding: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  info: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
})
