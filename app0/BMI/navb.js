import React, { Component } from 'react'

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider } from 'mobx-react/native'

import Navt from '../test/navt'
import Navn from '../near/navn'
import Bmif from './bmif'

import Bmim from './bmim'
import Index from './index'
import Prom from '../ads/add'

import Hometab from '../hometab'

import Coll from '../summary/coll';

class Navb extends Component {

  render() {
    console.disableYellowBox = true
    return (
        <Router>
          <Scene
            key="home"
            component={Hometab}
            hideNavBar
            duration={1}
          />
          <Scene
            key="price"
            component={Navt}
            duration={1}

          />
          <Scene
            key="bmi"
            component={Navb}
            duration={1}
            hideNavBar

          />
          <Scene
            key="index"
            component={Index}
            duration={1}
            hideNavBar
            initial
          />
          <Scene
            key="f"
            component={Bmif}
            duration={1}
            hideNavBar
          />
          <Scene
            key="ma"
            component={Bmim}
            duration={1}
            hideNavBar
          />
          <Scene
            key="promotion"
            component={Prom}
            duration={1}
            hideNavBar
          />
          <Scene
            key="sum"
            component={Coll}
            duration={1}
            hideNavBar
          />
          <Scene
            key="near"
            component={Navn}
            duration={1}
            hideNavBar
          />
        </Router>
    )
  }
}

//export default App
//export default App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default Navb
