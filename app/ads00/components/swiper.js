import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    },

  wrapper: {
  },
}

export default class Slide extends Component {
    constructor(props){
        super(props)

        this.state = {
           width: '100%',
            imagesSlider: [

              { uri:'https://i.pinimg.com/564x/16/1c/e0/161ce05a68f66e3e8d2367b6c2e6ea74.jpg' },
                  { uri:'https://i.pinimg.com/564x/3c/12/96/3c1296ea18178aac154e3168d755e8a5.jpg' },
{ uri:'https://i.pinimg.com/564x/a5/e9/8e/a5e98e7736dca698cf4e347ee8f46b2a.jpg' },
            ]
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                width: '100%'
            });
        });
    }
    render(){
        return (
          <View style={{borderRadius:20}} >

            <Swiper  height={150} horizontal={true} width={this.state.width} autoplay >

            {
              this.state.imagesSlider.map((item, i) => <Slider
                uri={item}
                key={i}
                                                       />)
                }

                </Swiper>
            </View>
        )
    }
}
