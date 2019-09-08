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

export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
           width: '99%',
            imagesSlider: [

              { uri:'https://i.pinimg.com/564x/16/1c/e0/161ce05a68f66e3e8d2367b6c2e6ea74.jpg' },
                  { uri:'https://i.pinimg.com/564x/23/b1/da/23b1da664ec94a9f7ab0854cd5d5adb1.jpg' },
                  { uri:'https://i.pinimg.com/564x/60/2e/50/602e50a07a27b77439f7bb005a44236f.jpg' },

{ uri:'https://www.wired.com/images_blogs/wiredscience/2009/10/nikon2003_1st_wittmann.jpg' },
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
          <View>
            <Swiper  height={120} horizontal={false} width={this.state.width} autoplay>

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
