// @flow

import React from 'react'
import { TouchableOpacity, Text,View,TouchableHighlight } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, Images } from '../Themes'
import simpleStore from 'react-native-simple-store'
import * as Animatable from 'react-native-animatable'


const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

const backAndRefresh = () =>{
  NavigationActions.pop()
    setTimeout(() => {
    NavigationActions.refresh({key: 'presentationScreen'})
  }, 10);
}

export default {
  backButton () {
    return (
      <TouchableOpacity style={{flex:1, justifyContent: "center", width: Metrics.barMenuIconWidth}}
        onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
        />
      </TouchableOpacity>
    )
  },

  backButtonWithRefresh () {
    return (
      <TouchableOpacity style={{flex:1, justifyContent: "center", width: Metrics.barMenuIconWidth}}
        onPress={backAndRefresh}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
        />
      </TouchableOpacity>
    )
  },

  connectRight(){
  return (
    <View>
      <Icon name='handshake-o' size={20} color={Colors.snow}  />
    </View>
  )
  },
  devRight(){
  return (
    <View>
      <Icon name='user-plus' size={20} color={Colors.snow}/>
    </View>
  )
  },
  influRight(){
  return (
    <View>
      <Icon name='users' size={20} color={Colors.snow} />
    </View>
  )
  },



  mainHelpRight(){
  return (
  <TouchableHighlight style={{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'flex-end',
      width: Metrics.barMenuIconWidth}}
     onPress={NavigationActions.HowTo}>
    <Icon name="question-circle" size={Metrics.icons.small+3} color={Colors.snow} />
 </TouchableHighlight>
  )
  },


  hamburgerButton () {
    return (
      <TouchableOpacity  style={{flex:1, justifyContent: "center", width: Metrics.barMenuIconWidth}}
        onPress={openDrawer}>
        <Icon name='bars'
          size={Metrics.icons.medium}
          color={Colors.snow}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='search'
          size={Metrics.icons.small}
          color={Colors.snow}
        />
      </TouchableOpacity>
    )
  }

}
