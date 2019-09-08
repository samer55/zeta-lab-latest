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
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'
import moment from 'moment'
import { observer,inject } from 'mobx-react/native'
import { firebaseApp } from '../../firebase'
import Lightbox from 'react-native-lightbox';

const BASE_PADDING = 10;


const screenWidth = Dimensions.get('window').width
const he = Dimensions.get('window').height

export default class Images extends Component {
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
    firebaseApp.database().ref('image').orderByChild('createdAt').limitToLast(this.state.counter).on('value',
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
      <View style={styles.container}>

        <ListView
          horizontal={true}

          automaticallyAdjustContentInsets={false}
          initialListSize={1}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderFooter={this._renderFooter}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={1}
        />
      </View>
    )
  }

  _renderRow = (data) => {
    //console.log("TIMELINE :::: _renderRow " + data.title)
    const timeString = moment(data.createdAt).fromNow()
    const height = screenWidth*data.imageh/data.imagew
    const shareOptions = {
      title: data.title + " for sale",
      url: "http://myapp.shop/post/" + data.puid,
      subject: "Share this item"
    }
    const BuyButton = (data.status === 'available') ?
            <TouchableOpacity style={styles.button} onPress={() => this._BuyNow(data)}>
              <Icon name='md-cart' size={30} color='#eee'/>
            </TouchableOpacity>
          : null
    const Status = (data.status === 'available') ? <Text style={{fontWeight:'bold',color:"green"}}>{data.status.toUpperCase()}</Text> : <Text style={{fontWeight:'bold',color:"red"}}>{data.status.toUpperCase()}</Text>
    const time = data.timeout
const p = data.puid
    if (new Date().getTime() > time)  {
      return (
       firebaseApp.database().ref('text' + p).on('child_added', function(snapshot) {
    snapshot.ref.remove();
})
      )
    }
    else  {

    return (
      <View style={styles.card}>
      <Lightbox underlayColor="white">
        <ImageBackground
        source={{ uri:data.image}}
        resizeMode='contain'
           style={{
             height: height,
             width: screenWidth,
             alignSelf: 'center',
           }}
>
<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center',  shadowColor: "black",
elevation:4,
shadowOffset: { width: 5, height: 5 },
shadowColor: "grey",
shadowOpacity: 0.5,
shadowRadius: 10,width:screenWidth,height:50,backgroundColor: 'rgba(0,0,0,0.4)'}}>
<TouchableOpacity  onPress={()=>   this.props.navigation.navigate('profilea', {name: data.username, uid: data.uid})}>

<Text style={{shadowOffset: {
  width: 5,
  height: 12,
},
shadowOpacity: 10.58,
shadowRadius: 20.00,

elevation: 24,color:'#FFFFFF',fontWeight:'800',fontSize:15}}>{data.username}</Text>
<View style={{flexDirection:'row'}}>


</View>
</TouchableOpacity>

</View>


        </ImageBackground>
        </Lightbox>
      </View>
    )
  }
  }
  users = (pdata) => {
  this.props.navigation.navigate('amman')}

  _flagPost = (postData) => {
    console.log("--------> FLAG !!!!!!")
    console.log(postData)
    Alert.alert(
      'Flag Confirmation',
      'Are you sure you want to flag this item? If yes, a moderator will decide within 24 hours if this item should be removed.',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        { text: 'Yes', onPress: () => {

          fetch('https://onesignal.com/api/v1/notifications',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': this.props.appStore.onesignal_api_key,
            },
            body: JSON.stringify(
            {
              app_id: this.props.appStore.onesignal_app_id,
              included_segments: ["All"],
              headings: {"en": "🏴🏴🏴🏴 Item flaged! 🏴🏴🏴🏴"},
              android_sound: "fishing",
              data: postData,
              big_picture: postData.image,
              ios_sound: "fishing.caf",
              contents: {"en": this.props.appStore.user.displayName + " just flaged: " + postData.title + " for " + postData.price},
              filters: [{"field":"tag","key":"username","relation":"=","value":"Herve f"}],
            })
          })
          .then((responseData) => {
            console.log("Push POST:" + JSON.stringify(responseData));
          })
          .done()

         } },
      ]
    )
  }

  _openChat = (postData) => {
    console.log(" *************** Opening CHAT ROOM *************** " + postData.puid);
    Actions.chat({ title:postData.title, puid:postData.puid })
  }

  _BuyNow = (postData) => {
    Actions.chat({ title:postData.title, puid:postData.puid, wantToBuy:true })
  }

  _onEndReached = () => {
    //console.log("TIMELINE ----> _onEndReached :+++:");
    if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ isLoading: true })
      firebaseApp.database().ref('image').off()
      firebaseApp.database().ref('image').orderByChild('createdAt').limitToLast(this.state.counter+1).on('value',
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
    firebaseApp.database().ref('image').off()
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
    padding: 4,
    flexDirection:'row',
justifyContent:'space-between',
    alignItems: 'flex-start',
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
  gridView: {
    paddingTop: 5,
    flex: 1,
    borderRadius:19
  },

  itemContainer: {
    justifyContent: 'flex-end',

    padding: 10,
    height: 500,
width:screenWidth
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

  infoo: {
    fontSize: 30,
  },
  boldd: {
    fontWeight: 'bold',
  },
})
