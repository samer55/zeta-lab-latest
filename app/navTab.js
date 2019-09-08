import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import { getColor } from '../config'
import { observer, inject } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'




@inject("appStore") @observer
export default class NavigationTab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              {
                  //( tab === 'md-chatbubbles') ?
                  //<View style={styles.badgeContainer}><Text style={styles.counter}>3</Text></View>
                  //: null
              }
              <Icon
                name={tab}
                size={30}
                color={ this.props.activeTab === i ?
                'red' : ( (tab === 'briefcase-medical' && this.props.appStore.new_messages > 0) ? 'red' : 'white') }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.1)',
    elevation: 5
  },
  tab: {
    flex: 4,

    //borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    left: 16,
    top: 10,
    height: 15,
    width: 15,
    borderRadius: 90,
    //marginRight: 25,
    backgroundColor: 'red',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
  },
  counter: {
    fontSize: 10,
    fontWeight: '200',
    color: '#FFF',
  },
})
