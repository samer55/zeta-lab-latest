import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet,Dimensions,Platform,TouchableOpacity,TextInput,ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'

import { SearchBar, ListItem,Card, Button,Header } from 'react-native-elements'; // Version can be specified in package.json
const screenWidth = Dimensions.get('window').width
const screen = Dimensions.get('window').height



export default class Testn extends Component {
  constructor(props) {
    super(props)


    this.state = {
      counter: 1,
      isLoading: true,
      isEmpty: false,
      search: '',
      comment: '',
      commentsRef: '',
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

  data: [],
  filteredData: [],
      isFinished: false,
    }
    this.arrayholder=[]
  }

  static navigationOptions = () => ({
    title: `اسعار الفحوصات`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });

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
     const commentsRef = firebaseApp.database().ref('posts');
     this.setState({commentsRef})
     this.listenForItems(commentsRef);
   }

   listenForItems(ref) {
     ref.on('value', snap => {
       let comments = [];
       snap.forEach(child => {
         comments.push({
           title: child.val().title,
           price: child.val().price,
           pricef:child.val().pricef,
username:child.val().username
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
            const itemData = item.title.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

  componentDidUpdate() {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'space-between'}}>

        <ImageBackground
          source={require('./pricesd.jpg')}
          style=  {styles.imag}               >
          <View
            style={{backgroundColor: 'rgba(0,0,0,0.2)',width:screenWidth,height:screen,justifyContent:'space-around'}} >
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:'#ffffff'}}>حسب اسعار وزارة الصحة فقط</Text>
            <TextInput
              style={styles.TextInputStyleClass}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              value={this.state.text}
              underlineColorAndroid='transparent'
              placeholder="ابحث"
            />


            <ListView
              automaticallyAdjustContentInsets={false}
              initialListSize={1}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              onEndReachedThreshold={1}
            />


          </View>
        </ImageBackground>
      </View>
    )
  }

  _renderRow = (data) => {
    return (
      <Card
        containerStyle={{textAlign: 'center',

          // Setting up TextInput height as 50 pixel.

          // Set border width.
          borderWidth: 2,

          // Set border Hex Color Code Here.
          shadowOffset:{  width: 1,  height: 1,  },
          shadowColor: 'black',
          backgroundColor:'rgb(245,245,245)',
          // Set border Radius.
          borderRadius: 20 ,

          //Set background color of Text Input.
        }}
      >
        <View style={{flexDirection:'column',justifyContent:'space-around'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#09090a'}}>فحص:<Text style={{color:'grey'}}>{data.title}</Text></Text>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#09090a',textAlign:'center'}}> من: <Text style={{color:'red'}}>{data.pricef} دينار</Text>الى<Text style={{color:'red'}}>{data.price}</Text>دينار</Text>

        </View>

      </Card>
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
