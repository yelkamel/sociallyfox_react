import React, { Component, PropTypes } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './Styles/ComponentStyle';

import { func, bool, node, string, number } from 'prop-types';

import TimerMixin from 'react-timer-mixin';

const propTypes = {
  onPress: func,
  text: string,
  time: number,
  textStyle: string,
};

const defaultProps = {
  onPress: null,
  text: '',
  time: 60,
  buttonStyle: styles.PratButtonView,
  textStyle: styles.PratButtonText,
  disabledTextStyle: styles.PratButtonText,
};

export default class TimeLeft extends Component {
  mixins: [TimerMixin];

  constructor(props) {
    super(props);

    this.state = {
      time: this.props.time ? this.props.time : 60,
      disabled: true,
    };

    this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    this.countdown();
  }
  render() {
    var style = [styles.text];
    var component;
    if (this.state.disabled) {
      style.push({ color: 'gray' });
      style.push(this.props.disabledTextStyle);
      component = (
        <View style={[styles.wrapper, this.props.buttonStyle]}>
          <TouchableWithoutFeedback>
            <Text style={[style]}>
              {this.props.text}({this.state.time})
            </Text>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      component = (
        <TouchableHighlight
          style={[styles.wrapper, this.props.buttonStyle]}
          onPress={this.onPress.bind(this)}
        >
          <Text style={[style, this.props.textStyle]}>
            {this.props.text}({this.state.time})
          </Text>
        </TouchableHighlight>
      );
    }
    return component;
  }
  onPress() {
    if (this.state.disabled) {
      //nothing
    } else {
      this.setState({ disabled: true });
      this.countdown();
      if (this.props.onPress) {
        this.props.onPress();
      }
    }
  }

  countdown() {
    var timer = function() {
      var time = this.state.time - 1;
      this.setState({ time: time });
      if (time > 0) {
        setTimeout(timer, 1000);
      } else {
        this.setState({
          disabled: false,
          time: this.props.time,
        });
      }
    };
    setTimeout(timer.bind(this), 1000);
  }
}

TimeLeft.propTypes = propTypes;
TimeLeft.defaultProps = defaultProps;
