import React, { PureComponent, PropTypes } from 'react';

import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Platform,
} from 'react-native';
import { Colors, Fonts, Images, Metrics } from './../Themes';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { func, bool, node, string, number } from 'prop-types';

import { touchablehighlight } from 'react-native';

const ANIMATED_EASING_PREFIXES = ['easeInOut', 'easeOut', 'easeIn'];

const ALMOST_ZERO = 0.00000001;

export default class SubButton extends PureComponent {
  static propTypes = {
    duration: number,
    onPressLeft: func,
    onPressRight: func,
    titleLeft: string,
    titleRight: string,
    titleMain: string,
    isOpenable: bool,
    onMainPress: func,
    timeToOpen: number,
  };

  static defaultProps = {};

  componentWillReceiveProps(props) {}

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onMainTouch() {
    this.props.onMainPress();

    if (Platform.OS === 'ios')
      this.setState({
        isOpen: !this.state.isOpen,
      });
  }

  componentDidMount() {
    if (this.props.timeToOpen !== 0) {
      var open = () => {
        this.setState({ isOpen: true });
      };
      setTimeout(open.bind(this), this.props.timeToOpen);
    }
  }

  render() {
    if (this.props.isOpenable == false) {
      return (
        <View style={styles.subButtonView}>
          <View style={[styles.subButtonMainView]}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.refs.view.fadeOutUp(400).then(endState => {
                  this.onMainTouch();
                  this.refs.view.fadeInDown(700);
                })}
            >
              <Animatable.View
                style={[
                  styles.subMainButtonView,
                  {
                    borderColor: Colors.darkaccent,
                    borderWidth: Metrics.borderMainWidth,
                  },
                ]}
                ref="view"
              >
                <Icon style={styles.subLockIcon} name={'lock'} />
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }

    if (this.state.isOpen == true)
      return (
        <View style={styles.subButtonView}>
          <View style={styles.subButtonLeftView}>
            <TouchableWithoutFeedback onPress={this.props.onPressLeft}>
              <Animatable.View
                animation={'fadeInRight'}
                duration={300}
                delay={0}
                style={styles.subButtonLeft}
              >
                <Text style={styles.subText}>{this.props.titleLeft}</Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.subButtonMainView}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.refs.view
                  .rubberBand(800)
                  .then(endState => this.onMainTouch())}
            >
              <Animatable.View
                style={[
                  styles.subMainButtonView,
                  { backgroundColor: Colors.accent },
                ]}
                ref="view"
              >
                <Text style={styles.subMainText} />
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.subButtonRightView}>
            <TouchableWithoutFeedback onPress={this.props.onPressRight}>
              <Animatable.View
                animation={'fadeInLeft'}
                duration={300}
                delay={0}
                style={styles.subButtonRight}
              >
                <Text style={styles.subText}>{this.props.titleRight}</Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );

    return (
      <View style={styles.subButtonView}>
        <View style={[styles.subButtonMainView]}>
          <TouchableWithoutFeedback
            onPress={() =>
              this.refs.view.shake(300).then(endState => this.onMainTouch())}
          >
            <Animatable.View
              style={[
                styles.subMainButtonView,
                { backgroundColor: Colors.darkaccent },
              ]}
              ref="view"
            >
              <Text style={styles.subMainText} />
            </Animatable.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subMainText: {
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    fontFamily: 'Rubik-Regular',
  },
  subText: {
    fontSize: Fonts.size.small,
    color: Colors.snow,
    fontFamily: 'Rubik-Medium',
  },
  subButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subMainButtonView: {
    borderRadius: 60,
    width: Metrics.subButtonHeight - 10,
    height: Metrics.subButtonHeight - 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subButtonLeft: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.darkaccent,
    width: Metrics.subButtonWidth,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subButtonRight: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.darkaccent,
    width: Metrics.subButtonWidth,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subButtonLeftView: {
    alignItems: 'flex-start',
    zIndex: 1,
  },
  subButtonRightView: {
    alignItems: 'flex-end',
    zIndex: 1,
  },
  subButtonMainView: {
    alignItems: 'center',
    zIndex: 3,
  },

  subLockIcon: {
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    color: Colors.darkgrey,
  },
});
