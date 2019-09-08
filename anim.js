import React, { Component } from 'react';
import { Animated, Easing, StatusBar, MaskedViewIOS, View } from 'react-native';

class AnimatedGate extends Component {
  constructor(props) {
    super(props);
    this.beginAnimation = this.beginAnimation.bind(this);
    this.state = {
      animation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.bootstraped && nextProps.bootstraped) {
      setTimeout(() => this.beginAnimation(), 1000);
    }
  }

  beginAnimation() {
    const duration = 1300;
    setTimeout(() => StatusBar.setHidden(false, 'fade'), 0.6 * duration);
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration,
      easing: Easing.bezier(0.42, 0, 0.42, 1),
    }).start();
  }

  render() {
    const { animation } = this.state;

    const opacity = animation.interpolate({
      inputRange: [0, 30, 70],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    const MainApp = (
      <View style={styles.mainContainer}>
        <Animated.View
          style={{
            flex: 1,
            opacity,
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 50, 100],
                  outputRange: [1.05, 1.05, 1],
                }),
              },
            ],
          }}
        >
          {this.props.children}
        </Animated.View>
      </View>
    );

    const MaskElement = (
      <View style={styles.maskElementContainer}>
        <Animated.Image
          source={require('./twitter_logo.png')}
          style={[
            styles.logo,
            {
              transform: [
                {
                  scale: animation.interpolate({
                    inputRange: [0, 30, 100],
                    outputRange: [1, 0.8, 40],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );

    return (
      <View style={styles.gateContainer}>
        <MaskedViewIOS style={styles.maskedView} maskElement={MaskElement}>
          {MainApp}
        </MaskedViewIOS>
      </View>
    );
  }
}

const styles = {
  gateContainer: {
    flex: 1,
    backgroundColor: 'rgb(29, 161, 242)',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  maskedView: {
    flex: 1,
  },
  maskElementContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 62,
    height: 62,
  },
};

export default AnimatedGate;
