import React, { Component } from 'react'

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider } from 'mobx-react/native'

import Testn from './testnav'
import Testp from './testp'
import Addn from './addn'



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

          />

          <Scene
            key="addn"
            component={Addn}
            duration={1}
            hideNavBar

          />
          <Scene
            key="price"
            component={Testp}
            hideNavBar={false}
            panHandlers={null}
            duration={0}
          />
        </Router>
      </Provider>
    )
  }
}

//export default App
//export default App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default Navt
