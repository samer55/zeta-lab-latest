import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { Container, Content, Text, StyleProvider } from 'native-base';
import { Provider } from 'mobx-react/native';
import appStore from './store/AppStore'

class App extends Component {
  render() {
    console.disableYellowBox = true

    return (
      <Container>
        <Provider appStore={appStore}>
          <Root />
        </Provider>

      </Container>
    );
  }
}

export default App;
