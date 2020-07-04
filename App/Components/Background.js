import React, {Component, PropTypes} from 'react';
import {StyleSheet, StatusBar, Dimensions, View, Animated, Easing} from 'react-native';
import NativeLinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Images, Metrics } from './../Themes'
//import Particles from 'react-particles-js';

import rgb2hex from 'rgb2hex';

class LinearGradient extends Component {
  render () {
    const {color0, color1} = this.props;
    return (
      <NativeLinearGradient
        // colors={this.props.colors.map((c) => rgb2hex(c).hex)}
        colors={[color0, color1].map((c) => rgb2hex(c).hex)}
        start={{x:0, y:0.4}}
        end={{x:1, y:0.6}}
        style={[styles.linearGradient]} />
    )
  }
}

Animated.LinearGradient = Animated.createAnimatedComponent(LinearGradient)

export const presetColors = {
  instagram: [
    'rgb(106, 57, 171)',
    'rgb(151, 52, 160)',
    'rgb(197, 57, 92)',
    'rgb(231, 166, 73)',
    'rgb(181, 70, 92)'
  ],
  sunrise: [
    'rgb(92, 160, 186)',
    'rgb(106, 166, 186)',
    'rgb(142, 191, 186)',
    'rgb(172, 211, 186)',
    'rgb(239, 235, 186)',
    'rgb(212, 222, 206)',
    'rgb(187, 216, 200)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ],
  cyan: [
    'rgb(0, 77, 64)',
    'rgb(0,105,92)',
    'rgb(0,121,107)',
    'rgb(0,137,123)',
  ]
};

class Background extends Component {

  static defaultProps = {
    customColors: presetColors.cyan,
    speed: 3000
  }

  state = {
    color0: new Animated.Value(0),
    color1: new Animated.Value(0),
  }

  componentDidMount = () => {
    this.startAnimation();
  }

  startAnimation = () => {
    const {color0, color1} = this.state;
    const {customColors, speed} = this.props;
    [color0, color1].forEach(color => color.setValue(0));

    Animated.parallel(
      [color0, color1].map(animatedColor => {
        return Animated.timing(animatedColor, {
          toValue: customColors.length,
          duration: customColors.length * speed,
          easing: Easing.linear
        })
      })
    )
      .start(this.startAnimation);

  };

  render () {

    const {color0, color1} = this.state;
    const {customColors} = this.props;
    const preferColors = [];
    // while (preferColors.length < customColors.length) {
    while (preferColors.length < 2) {
      preferColors.push(
        customColors
          .slice(preferColors.length)
          .concat(customColors.slice(0, preferColors.length+1))
      )
    }
    const interpolatedColors = [color0, color1]
      .map((animatedColor, index) => {
        return animatedColor.interpolate({
          inputRange: Array.from({length: customColors.length+1}, (v, k) => k),
          outputRange: preferColors[index]
        })
      });

      return (
        <NativeLinearGradient
            style={[styles.linearGradient]}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.5, y: 1.0}}
            locations={[0,0.5]}
            colors={[Colors.defaultprimary, Colors.highdarkprimary]}
          >
        </NativeLinearGradient>
    )

  }
}
// Gradient animé

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex : 1,
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});


export default Background
