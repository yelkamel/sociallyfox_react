// @flow

import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native'
import styles from './Styles/ComponentStyle'
//import ExamplesRegistry from '../Services/ExamplesRegistry'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../Themes/'


type RoundedButtonProps = {
  onPress: () => void,
  text?: string,
  children?: string,
  navigator?: Object,
  icon?: Object,
  backgroundColor: string
}

export default class RoundedButton extends React.Component {
  props: RoundedButtonProps

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

getIcon ()
{
  if (this.props.icon == null)
    return ;
  return (
    <Icon style={styles.ButtonIcon} name={this.props.icon}/>)
}

  render () {
    return (
      <TouchableOpacity style={[styles.RoundedButtonView,{backgroundColor: this.props.backgroundColor == null ? Colors.darkaccent : this.props.backgroundColor  }]} onPress={this.props.onPress}>
        <View style={styles.buttonLeftView}>
        </View>

        <Text style={styles.ButtonText}>{this.getText()}</Text>

        <View style={styles.buttonIconView}>
          {this.getIcon()}
        </View>
      </TouchableOpacity>
    )
  }
}
