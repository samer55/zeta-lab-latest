import React, { Component } from 'react'

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider } from 'mobx-react/native'

import Testn from './testn'
import CBC from './name/cbc'
import Hometab from '../hometab'

import Navn from '../near/navn'

import Prom from '../ads/add'


import Coll from '../summary/coll';

import appStore from '../../../store/AppStore'

class Navt extends Component {

  render() {
    console.disableYellowBox = true
    return (
      <Provider appStore={appStore}>
        <Router>

          <Scene
            key="name"
            component={Testn}
            duration={1}
            hideNavBar
            initial
          />

          <Scene
            key="home"
            component={Hometab}
            duration={1}
          hideNavBar/>


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
          <Scene
            key="price"
            component={Navt}
            duration={1}

          />
          <Scene
            key="cbc"
            component={CBC}
            duration={1}
            hideNavBar

          />

        </Router>
      </Provider>
    )
  }
}

//export default App
//export default App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default Navt
