import React, { Component } from 'react'

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider } from 'mobx-react/native'

import Testn from './namet/name'
import Navn from './near/navn'

import Prom from './ads/add'

import Hometab from './hometab'
import Navb from './BMI/navb'
import Coll from './summary/coll';
import appStore from '../../store/AppStore'

class Nav extends Component {

  render() {
    console.disableYellowBox = true
    return (
      <Provider appStore={appStore}>
        <Router>
          <Scene
            key="home"
            component={Hometab}
            hideNavBar
            duration={0}
            initial
          />
          <Scene
            key="price"
            component={Testn}
            duration={1}

          />

          <Scene
            key="bmi"
            component={Navb}
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
      </Provider>
    )
  }
}

//export default App
//export default App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default Nav
