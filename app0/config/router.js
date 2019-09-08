import React, { Component } from 'react'
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform} from 'react-native'
import Hometab from '../screens/hometab';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Testn from '../namet/name'
import Prom from '../ads/add'
import Test from '../summary/test'
import Index from '../near/index'
import Amman from '../near/amman'
import Irbid from '../near/irbid'
import Zarqa from '../near/zarqa'
import Profila from '../ads/profilea'
import Balqa from '../near/balqa'
import Texts from '../ads/text'
import Aqaba from '../near/aqaba'
import Ramtha from '../near/ramtha'
import Images from '../ads/image'
import Indexb from '../BMI/index'
import Bmim from '../BMI/bmim'
import Bmif from '../BMI/bmif'
import { Provider } from 'mobx-react/native';
import appStore from '../../store/AppStore'
import LoginScreen from '../screens/login_screen'
import HomeScreen from '../screens/home_screen'
import SettingScreen from '../screens/setting_screen'
import CreateNew from '../createNew'
import Lab from '../screens/labsc'
import Promu from '../ads0/addd'
import Promuh from '../ads00/addd'
import Labimg from '../screens/labimg'
import User from '../screens/user'
import Pimg from '../screens/pimg'
import Post from '../screens/post'
import Loading from '../screens/load'
import Home from '../near/index2'

import Newp from '../newp'
import Uimg from '../screens/uimg'
import  SignInForm from '../login_screen/signIn_form'
const AppStack = StackNavigator({ Home: HomeScreen,setting:SettingScreen,  new:CreateNew,
  pimg:Pimg,
  price:Newp,
  post:Post,});
const AuthStack = StackNavigator({ SignIn: LoginScreen});
const AuthSt = StackNavigator({ log:SignInForm });

const Aut= StackNavigator({ load: Loading });
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export const Roo = SwitchNavigator(
  {
    login: AuthStack,
    home: AppStack,
    loading:Aut,
    log:AuthSt

  }

);
export const FeedStack = StackNavigator({
  Feed: {
    screen: Hometab,
    navigationOptions: {
      header:null,
    },
  },
  Details: {
    screen: Testn,

  },
  texts: {
    screen: Texts,

  },
  prom: {
    screen: Prom,

  },
  sum: {
    screen: Test,


  },
  images: {
    screen: Images,

  },

  index: {
    screen: Index,

  },
  amman: {
    screen: Amman,

  },
  profilea: {
    screen: Profila,

  },
  near: {
    screen: Home,

  },
  zarqa: {
    screen: Zarqa,

  },
  balqa: {
    screen: Balqa,

  },
  user: {
    screen: User,

  },
  aqaba: {
    screen: Aqaba,

  },
  ramtha: {
    screen: Ramtha,

  },
  bmi: {
    screen: Indexb,

  },
  la: {
    screen: Labimg,

  },
  bmim: {
    screen: Bmim,

  },
  bmif: {
    screen: Bmif,

  },
  pul: {
    screen: Promuh,

  },
});
export const Labse = StackNavigator({
  home: {
    screen: Lab,
    navigationOptions: {
      header:null,
    },
  },
  user: {
    screen: User,

  },
  pu: {
    screen: Promu,

  },
  uimg: {
    screen: Uimg,

  },

});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      backgroundColor:'steelblue',
      tabBarLabel: 'الرئيسية',
      tabBarIcon: ({ tintColor }) => <Icon name="medkit"  style={{  width: 25, height: 25 }}
size={30} color={tintColor} />,
    },
  },
  Labs: {
    screen: Labse,
    navigationOptions: {
      backgroundColor:'steelblue',
      tabBarLabel: 'المختبرات',
      tabBarIcon: ({ tintColor }) => <Icon name="hospital-o"  style={{  width: 25, height: 25 }} size={30} color={tintColor} />,
    },
  },
  pro: {
    screen: Roo,
    navigationOptions: {
      tabBarLabel: 'ملف الشخصي',
      tabBarIcon: ({ tintColor }) => <Icon name="user"   style={{  width: 25, height: 25 }} size={30} color={tintColor} />
    },
  },
},{
      tabBarPosition: 'bottom',
      tabBarOptions: {
      activeTintColor: '#FF0000',  // Color of tab when pressed
      inactiveTintColor: 'gray', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: 'silver', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off.
      }
    },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});
class App0 extends Component {
  constructor(properties) {
  super(properties);
  OneSignal.init("e5cb9193-6da8-454a-a431-e06f2063151b");
}
  render() {
    console.disableYellowBox = true

    return (
        <Provider appStore={appStore}>
          <Root />
        </Provider>

    );
  }
}

export default App0;
export const Root = StackNavigator({


  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
