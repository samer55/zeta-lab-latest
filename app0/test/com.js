import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Card,
  CardItem,
  FooterTab,
  Button,
  Input,
  Left,
  List,
   ListItem,
   Thumbnail,
  Item,
  Right,
  Body,
  Spinner
} from "native-base";
import { Ionicons } from '@expo/vector-icons';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
import moment from 'moment'

import { observer,inject } from 'mobx-react/native'
import styles from './styles';
import { firebaseApp } from '../../firebase'
@inject("appStore") @observer
class com extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      dataSource:new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      commentsRef: '',
       title: this.props.navigation.state.params.title,
       puid: this.props.navigation.state.params.puid,
       user: this.props.navigation.state.params.user,

    }

  }
  componentDidMount() {
    const commentsRef = firebaseApp.database().ref().child(this.state.puid).child('com');
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
      this.setState({dataSource: this.state.dataSource.cloneWithRows(comments)});
    })
  }

  postComment() {
    this.state.commentsRef.push({
      comment: this.state.comment,
    })
  }

  renderRow(data) {

    return (

      <Card>
        <List>
          <ListItem >

            <Body>
              <Text style={{color:'steelblue'}}>{this.state.user}</Text>
              <Text >{data.comment}</Text>
            </Body>

          </ListItem>
        </List>
      </Card>


    )
  }

  render() {
    return (
      <View style={styles.flexContainer}>

        <View style={styles.body}>
          <Text style={styles.detailTitle}>
#{this.state.title}          </Text>
<Button transparent onPress={() =>this.props.navigation.goBack()}>
<Ionicons size={40} color={'#2f95dc'} name="ios-arrow-back" />
</Button>

          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />

          <Item rounded style={{backgroundColor:'white',height:50,justifyContent:'space-between'}}>
      <Input
      placeholder='What do you want to Ask??'
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
          <Ionicons
            name={'md-add'}
            size={30}
            color={'#fff'}
          />
          </TouchableOpacity>
            </Item>

        </View>
      </View>
    )
  }
}
export default com;
