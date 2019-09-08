import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
import styles from './styles';

import { Card, ListItem, Button,Header,Input } from 'react-native-elements'

import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../../firebase';
export default class Priv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      dataSource: ds.cloneWithRows(''),
      commentsRef: ''
    }
  }
  componentDidMount() {
    const commentsRef = firebaseApp.database().ref().child(this.props.puid).child('comments');
    this.setState({commentsRef})
    this.listenForItems(commentsRef);
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let comments = [];
      snap.forEach(child => {
        comments.push({
          comment: child.val().comment,
        })
      })
      this.setState({dataSource: ds.cloneWithRows(comments)});
    })
  }

  postComment() {
    this.state.commentsRef.push({
      comment: this.state.comment,
    })
  }

  renderRow(data) {
    return (

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
        }}
      >
        <Text style={{fontSize:20,fontWeight:'bold'}}>{data.comment}</Text>
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.flexContainer}>

        <View style={styles.body}>
          <Header backgroundColor='white'
            leftComponent={{ icon: 'arrow-back', color: 'red' ,onPress: () => Actions.home(),}}
            centerComponent={{ text: 'Price of Test', style: { color: 'red' } }}
          />
          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />

          <Input
            placeholder='Answer'
            onChangeText={(text) => this.setState({comment: text})}
            onEndEditing={() => this.postComment()}
          />
          <TouchableOpacity style={{
              width:40,
              height:40,
              borderRadius:100,
              backgroundColor:'#2f95dc',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
          }}
            onPress={() => this.postComment()}
          >
            <Icon
              name={'md-add'}
              size={30}
              color={'#fff'}
            />
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}
