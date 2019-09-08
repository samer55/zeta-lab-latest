import React from 'react';
import { View, Image, StatusBar } from 'react-native';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Image
      source={require('./twitterimage.jpeg')}
      style={styles.image}
      resizeMode="contain"
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
};

export default Main;
