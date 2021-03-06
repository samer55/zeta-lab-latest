import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
Alert,
ScrollView,
TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from "react-native-modal";
const screen = Dimensions.get('window').height
import { Card, ListItem, Button,Avatar,Header } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const screenWidth = Dimensions.get('window').width

export default class Bmim extends Component {
  static navigationOptions = () => ({
    title: `ذكر`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  constructor() {
    super();

    this.state = {
      height: 0,
      weight: 0,
      Age:0,
      states:'',
      err:''
    };
  }

  state = {
    visibleModal: null
  };

  renderButtonn = (text, onPress) => (
    <TouchableOpacity  onPress={onPress}>
      <View style={{width:100,
          marginTop:10,
          paddingTop:15,
          paddingBottom:15,
          marginLeft:15,
          marginRight:15,
          backgroundColor:'#00BCD4',
          borderRadius:10,
          borderWidth: 1,
      borderColor: '#fff'}}>
        <Text style={{color:'#fff',
          textAlign:'center',
        fontWeight:'bold'}}>close</Text>
      </View>
    </TouchableOpacity>
  );
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icon name='heartbeat' size={50} color='red' />

      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (

    <View style={styles.modalContent}>

      <Text style={styles.textResult}>
        {this.state.result}      </Text>
        <Text style={styles.textResult}>
        احتياجك اليومي الى </Text>
      <Text style={styles.textResult}>
        {this.state.fats}      </Text>
      <Text style={styles.textResult}>
        {this.state.carbs}      </Text>
      <Text style={styles.textResult}>
        {this.state.pro}      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.per}>
          اقل من طبيعي 18.5
        </Text>
        <Text style={styles.per}>
    طبيعي 18.5–24.9
        </Text>
        <Text style={styles.per}>
           25–29.9 اكثر من طبيعي
        </Text>
        <Text style={styles.per}>
          زائد عن الحد 30 واكثر
        </Text>
      </View>


      {this.renderButtonn("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };
  _showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',

    )
  }
  _showAlert1 = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',

    )
  }
  _showAlert2 = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',

    )
  }
  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };
  containerTouched(e) {
    this.refs.height.blur();
    this.refs.weight.blur();
      this.refs.Age.blur();
    return false;
  }

  calcBmi(e) {
    var { height, weight ,Age} = this.state;
    var h = height.trim() / 100;
    var bee = (66.5 + (13.8 * weight) + (5.0 * height) - (6.8 * Age))
    var bmi = (weight / ( h * h)).toFixed(2);
  var  male = bee * 1.3
  var  athletic = bee * 1.6
var fatm = (male * (0.25/9)).toFixed(1)
var fata = (athletic * (0.25/9)).toFixed(1)
var prom =(male * (0.20/4)).toFixed(1)
var proa =(athletic * (0.20/4)).toFixed(1)
var carbsm =(male * (0.55/4)).toFixed(1)
var carbsa =(athletic * (0.55/4)).toFixed(1)

    var result =  `كتلة الجسم = ${bmi}`;
    var fats = `دهون = ${fatm}غ /للرياضي  ${fata}g`;
    var pro = `بروتين = ${prom}غ /للرياضي  ${proa}g`;
    var carbs = `الكربوهيدرات = ${carbsm}غ /للرياضي  ${carbsa}g`;
if (this.state.height.length === 0){
  this.setState({states:'please add'});
}
else if(this.state.weight.length === 0){
  {this._showAlert1}
}
else if (this.state.height.length > 0){
    this.setState({fats});
    this.setState({pro});
    this.setState({carbs});

    this.setState({result});
  }
}

  render() {

    return (
      <ScrollView>
      <KeyboardAwareScrollView
           style={{ backgroundColor: '#4c69a5' }}
           resetScrollToCoords={{ x: 0, y: 0 }}
           contentContainerStyle={styles.container}
           scrollEnabled={false}
         >
        <View
          style={{width:screenWidth,height:screen,backgroundColor:'white'}} >

          <View
            style={styles.rootContainer}
            onStartShouldSetResponder={this.containerTouched.bind(this)}
          >


            <Text style={styles.title}>
              كتله الجسم
            </Text>
            <Text style={{fontSize:15}}>
              {this.state.err}
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>
                الطول
              </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(height) => this.setState({height})}
                value={this.state.height}
                placeholder='مثال 179 سم'
                placeholderTextColor='rgba(0,0,0,.6)'
                ref="height"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>
                الوزن
              </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder='مثال: 40 كغ'
                placeholderTextColor='rgba(0,0,0,.6)'
                onChangeText={(weight) => this.setState({weight})}
                value={this.state.weight}
                ref="weight"
              />

            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>
              العمر
              </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder='مثال:20 سنة'
                placeholderTextColor='rgba(0,0,0,.6)'
                onChangeText={(Age) => this.setState({Age})}
                value={this.state.Age}
                ref="Age"
              />

            </View>
            <TouchableOpacity onPress={() =>{
              this.calcBmi()
                  if(this.state.height.length > 0){
                          this.setState({ visibleModal: 1 })


                        } else {
                          this.setState({ err: 'Please add height' })
                        }
                        }}>
              <View style={styles.button}>
                <Icon name='heartbeat' size={50} color='red' />

              </View>
            </TouchableOpacity>

            <View style={{justifyContent:'space-between',alignItems:'center'}}>
            </View>
            <Modal isVisible={this.state.visibleModal === 1}>
              {this.renderModalContent()}
            </Modal>
          </View>
        </View>
        </KeyboardAwareScrollView>
</ScrollView>
          );
  }
}

var styles = StyleSheet.create({
  rootContainer: {

    alignItems: 'center',
    justifyContent:'space-between'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  ima:{  flexGrow:1,
    height:screen,
    width:screenWidth,


    // Set border Radius.
},
  title: {
    fontSize: 30,
    padding: 10,
    color:'black',
    fontWeight:'bold',
    textAlign: 'center',
  },
  per: {
    fontSize: 15,
    padding: 10,
    color:'black',
    fontWeight:'800',
    textAlign: 'center',
  },
  textLabel: {
    fontSize: 20,
    color:'black',
    fontWeight:'bold',

  },
  modalContent: {
   backgroundColor: "white",
   padding: 22,
   justifyContent: "center",
   alignItems: "center",
   borderRadius: 4,
   borderColor: "rgba(0, 0, 0, 0.1)"
 },
  textResult: {
    paddingTop: 20,
    fontSize: 20,
  },
  calcButton: {
    marginTop: 20,
  },
  textInput: {
    marginLeft: 10,
    padding: 5,
    height: 42,
    width: 316,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 18,
  },
});
