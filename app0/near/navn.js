import React, { Component } from 'react'

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider } from 'mobx-react/native'



import Irbid from './irbid';
import Amman from './amman'
import Index from './index'

class Navn extends Component {

  render() {
    console.disableYellowBox = true
    return (
        <Router>
          <Scene
            key="home"
            component={Index}
            hideNavBar
            duration={0}
            initial
          />
          <Scene
            key="Amman"
            component={Amman}
            duration={1}
            hideNavBar

          />
          <Scene
            key="irbid"
            component={Irbid}
            duration={1}
            hideNavBar
          />

        </Router>
    )
  }
}

//export default App
//export default App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App)
export default Navn
