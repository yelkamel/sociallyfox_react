import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicatorIOS,
  ProgressViewIOS,
  AsyncStorage,
} from 'react-native';
import styles from './Styles/ComponentStyle';
import { Colors, Fonts, Images, Metrics } from './../Themes';
import PratButton from './../Components/PratButton';
import PratNotification from './../Components/PratNotification';
import PratWritingNote from './../Components/PratWritingNote';
import TimeLeft from './../Components/TimeLeft';

import { func, bool, string, arrayOf, element, number } from 'prop-types';

import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import simpleStore from 'react-native-simple-store';
import Swiper from 'react-native-swiper';
import TimerMixin from 'react-timer-mixin';
import moment from 'moment';

export default class PratSection extends Component {
  mixins: [TimerMixin];

  static propTypes = {
    hasButton: bool,
    subName: string,
    pratDescr: string,
    duration: number,
    nbtimeout: number,
    score: number,
    exp: number,
    expWin: number,
  };

  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'idle',
      isLoading: true,
    };

    this.logPress = this.logPress.bind(this);
  }

  componentWillUnmount() {
    this._unmounted = true;
  }

  componentWillMount() {
    this.loadData();
  }

  componentDidMount() {}

  loadData() {
    console.log('timeout string: ' + this.props.nbtimeout);
    if (this.props.nbtimeout > 0) {
      console.log('enter');
      this.setState({
        buttonState: 'busy',
        isLoading: false,
      }),
        setTimeout(() => {
          this.setState({ buttonState: 'idle' });
        }, this.props.nbtimeout * 1000);
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  logPress() {
    this.setState({
      buttonState: 'busy',
    });
    var date = moment(new Date()).add(this.props.duration, 'seconds');

    simpleStore.update('data' + this.props.subName, {
      score: this.props.score + 1,
      freeDateTime: date,
    });

    simpleStore.update('dataProfil', {
      exp: this.props.exp + this.props.expWin,
      update: '1',
    });

    console.log(
      'Save DATA' +
        '\n' +
        this.props.subName +
        ':' +
        '\n' +
        'score ' +
        (this.props.score + 1) +
        '\n' +
        'Profil:' +
        '\n' +
        'exp ' +
        (this.props.exp + this.props.expWin) +
        '\n' +
        'update 1 ' +
        '\n' +
        'freeDateTime ' +
        date.toString()
    );

    //PratNotification.setPratNotification(this.props.subName,this.props.score + 1)
    Toast.show('+' + this.props.expWin + " points d'experience", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.background,
    });

    setTimeout(() => {
      NavigationActions.pop();
      setTimeout(() => {
        NavigationActions.refresh({ key: 'presentationScreen' });
      }, 10);
    }, 200);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.section}>
        <View stye={styles.PratButtonView}>
          <PratButton
            subName={this.props.subName}
            duration={this.props.duration}
            nbtimeout={this.props.nbtimeout}
            labelStyle={styles.PratButtonLabel}
            states={{
              idle: {
                text: 'Fait',
                onPress: this.logPress,
                backgroundColor: Colors.accent,
              },
              busy: {
                text: this.state.congratMsg,
                backgroundColor: Colors.darkaccent,
                spinner: true,
              },
            }}
            buttonState={this.state.buttonState}
          />
        </View>
      </View>
    );
  }
}
