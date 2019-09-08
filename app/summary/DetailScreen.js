import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ListView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class DetailScreen extends React.Component {
  state = {
    localPhoto: null
  };
  _openprom = () => {
  this.props.navigation.navigate('Home')  }
  componentWillReceiveProps(nextProps) {
    const { photo } = nextProps;
    if (photo) {
      this.setState({ localPhoto: photo });
    }
  }

  render() {
    const { onClose, openProgress, isAnimating } = this.props;
    const { localPhoto } = this.state;
    if (localPhoto) {
      return (
        <Animated.View
          style={[StyleSheet.absoluteFill]}
          pointerEvents={isAnimating || this.props.photo ? 'auto' : 'none'}
        >
          <Animated.Image
            ref={r => (this._openingImageRef = r)}
            source={localPhoto.source}
            style={{
              width: maxWidth,
              height: 300,
              opacity: openProgress.interpolate({
                inputRange: [0, 0.99, 0.995],
                outputRange: [0, 0, 1]
              })
            }}
          />
          <Animated.View
            style={[
              styles.body,
              {
                opacity: openProgress,
                backgroundColor: '#fff',
                transform: [
                  {
                    translateY: openProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0]
                    })
                  }
                ]
              }
            ]}
          >
          <ScrollView>
            <Text style={styles.title}>
              - {localPhoto.postedBy}
            </Text>
            <TouchableOpacity onPress={localPhoto.items1.press}>
            <Text style={styles.description}>
             {localPhoto.items1.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items2.press}>
            <Text style={styles.description}>
             {localPhoto.items2.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items3.press}>
            <Text style={styles.description}>
             {localPhoto.items3.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items4.press}>
            <Text style={styles.description}>
          {localPhoto.items4.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items5.press}>
            <Text style={styles.description}>
             {localPhoto.items5.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items6.press}>
            <Text style={styles.description}>
             {localPhoto.items6.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items7.press}>
            <Text style={styles.description}>
             {localPhoto.items7.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items8.press}>
            <Text style={styles.description}>
             {localPhoto.items8.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items9.press}>
            <Text style={styles.description}>
             {localPhoto.items9.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items10.press}>
            <Text style={styles.description}>
             {localPhoto.items10.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items11.press}>
            <Text style={styles.description}>
             {localPhoto.items11.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items12.press}>
            <Text style={styles.description}>
             {localPhoto.items12.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items13.press}>
            <Text style={styles.description}>
             {localPhoto.items13.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items14.press}>
            <Text style={styles.description}>
             {localPhoto.items14.name}

            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={localPhoto.items15.press}>
            <Text style={styles.description}>
             {localPhoto.items15.name}

            </Text>
            </TouchableOpacity>
            </ScrollView>
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              opacity: openProgress
            }}
            pointerEvents={isAnimating ? 'none' : 'auto'}
          >
            <TouchableOpacity
              onPress={() => onClose(localPhoto.id)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: 'Avenir Next',
    lineHeight: 50
  },
  description: {
    color: '#333',
    fontSize: 20
    // fontFamily: 'Avenir Next'
  },
  body: { flex: 1, padding: 15 },
  closeText: { color: 'white', backgroundColor: 'transparent' },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 5
  }
});
