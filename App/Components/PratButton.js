import React, { Component, PropTypes } from 'react';
import { Fonts, Colors, Metrics } from '../Themes/';
import Icon from 'react-native-vector-icons/FontAwesome';

import { number, string } from 'prop-types';

import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import styles from './Styles/ComponentStyle';
import simpleStore from 'react-native-simple-store';

import _ from 'lodash';

//const timer = require('react-native-timer');

const SEN_LIST = [
  { Id: 1, sentence: 'Mission accomplie' },
  { Id: 2, sentence: 'Fait !' },
  { Id: 3, sentence: 'Facile !' },
  { Id: 4, sentence: 'Génial !' },
  { Id: 5, sentence: 'Compris !' },
];
class PratButtonText extends Component {
  _unmounted = false;

  constructor(props) {
    super(props);
    this.state = {
      sentenceId: 0,
      time: this.props.nbtimeout,
    };
    this.countdown = this.countdown.bind(this);
  }

  componentWillUnmount() {
    this._unmounted = true;
  }

  componentDidMount() {
    this.setState({
      sentenceId: _.random(0, 4),
    });
  }
  secondsToTime(secs: number) {
    var sec_num = parseInt(secs, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }
  countdown() {
    var timer = () => {
      var time = this.state.time - 1;
      if (!this._unmounted) {
        if (time > 0) {
          this.setState({ time: time });
        } else {
          this.setState({ time: this.props.duration });
          this.props.setStateButton('idle');
        }
      }
    };
    setTimeout(timer.bind(this), 1000);
  }

  setPratButtonText() {
    return SEN_LIST[this.state.sentenceId].sentence;
  }

  render() {
    if (this.props.buttonState === 'idle') {
      return (
        <View style={styles.PratButtonView}>
          <View style={styles.buttonTextView}>
            <Animatable.Text
              style={styles.PratButtonText}
              animation="bounceIn"
              delay={800}
              duration={2000}
              iterationCount={1}
            >
              {this.setPratButtonText()}
            </Animatable.Text>
          </View>
          <View style={styles.ButtonIconView}>
            <Icon
              name="check-square-o"
              size={20}
              color={Colors.snow}
              style={[styles.iconText, { marginRight: 10 }]}
            />
          </View>
        </View>
      );
    } else {
      this.countdown();
      return (
        <View style={styles.PratButtonView}>
          <View style={styles.buttonTextView}>
            <Animatable.Text
              style={styles.PratButtonText}
              animation="fadeIn"
              iterationCount={1}
            >
              {this.secondsToTime(this.state.time)}
            </Animatable.Text>
          </View>
          <View style={styles.ButtonIconView}>
            <Icon
              name="clock-o"
              size={20}
              color={Colors.snow}
              style={[styles.iconText, { marginRight: 10 }]}
            />
          </View>
        </View>
      );
    }
  }
}

export default class PratButton extends Component {
  static propTypes = {
    duration: number,
    nbtimeout: number,
    subName: string,
  };
  constructor(props) {
    super(props);
    const currentStateObject =
      this.props.states[this.props.buttonState] || this.getDefaultStateObject();
    this.state = {
      backgroundColor: new Animated.Value(0),
      startColor: this.hexToRgb(currentStateObject.backgroundColor),
      endColor: this.hexToRgb(currentStateObject.backgroundColor),
      time: 60,
      buttonState: this.props.buttonState,
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentStateObject =
      this.props.states[this.state.buttonState] || this.getDefaultStateObject();
    const nextStateObject =
      nextProps.states[nextProps.buttonState] || this.getDefaultStateObject();
    this.setState({
      backgroundColor: new Animated.Value(0),
      startColor: this.hexToRgb(currentStateObject.backgroundColor),
      endColor: this.hexToRgb(nextStateObject.backgroundColor),
    });
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? 'rgb(' +
          parseInt(result[1], 16) +
          ', ' +
          parseInt(result[2], 16) +
          ', ' +
          parseInt(result[3], 16) +
          ')'
      : null;
  }

  startAnimation() {
    Animated.timing(this.state.backgroundColor, {
      toValue: 1,
      duration: this.props.transitionDuration,
    }).start();
  }

  getDefaultStateObject() {
    return this.props.states[Object.keys(this.props.states)[0]];
  }

  setStateButton = stateButton => {
    const currentStateObject =
      this.props.states[this.state.buttonState] || this.getDefaultStateObject();
    const nextStateObject = this.props.states[stateButton];
    this.setState({
      backgroundColor: new Animated.Value(0),
      startColor: this.hexToRgb(currentStateObject.backgroundColor),
      endColor: this.hexToRgb(nextStateObject.backgroundColor),
      buttonState: stateButton,
    });
  };

  render() {
    const currentStateObject =
      this.props.states[this.state.buttonState] || this.getDefaultStateObject();

    const bgColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.startColor, this.state.endColor],
    });

    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={currentStateObject.onPress}
      >
        <Animated.View
          style={[
            styles.PratButtonBackground,
            { height: styles.button.height, backgroundColor: bgColor },
          ]}
        >
          <PratButtonText
            duration={this.props.duration}
            nbtimeout={this.props.nbtimeout}
            buttonState={this.state.buttonState}
            labelStyle={this.props.labelStyle}
            subName={this.props.subName}
            setStateButton={this.setStateButton}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

PratButton.defaultProps = {
  backgroundStyle: {
    backgroundColor: '#477CCC',
  },
  labelStyle: {
    color: '#000000',
  },
  spinnerColor: '#FFFFFF',
  transitionDuration: 250,
  activeOpacity: 0.92,
};
