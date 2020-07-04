import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicatorIOS,
  ProgressViewIOS,
  AsyncStorage,
  Platform,
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import styles from './Styles/SubjectStyle';
import { Colors, Fonts, Images, Metrics } from './../Themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import PratButton from './../Components/PratButton';
import PratNotification from './../Components/PratNotification';
import PratWritingNote from './../Components/PratWritingNote';
import TimeLeft from './../Components/TimeLeft';
import Toast from 'react-native-root-toast';
import RateButton from './../Components/RateButton';
import ShareButton from './../Components/ShareButton';
import simpleStore from 'react-native-simple-store';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Swiper from './../Components/MySwiper';
import TimerMixin from 'react-timer-mixin';
import { func, bool, string, arrayOf, number } from 'prop-types';

export default class NoteSection extends Component {
  static propTypes = {
    title: string,
    descr: arrayOf(string),
    asTipping: bool,
    asSharing: bool,
    asRating: bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      IsOpen: false,
    };
  }

  onFinish() {
    this.setState({ is_begin: !this.state.is_begin });
  }

  rendersubDescr(subText: string, i: number) {
    if (this.props.asTipping)
      return (
        <View
          key={i}
          style={[
            styles.swiperView,
            {
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginTop: 30,
            },
          ]}
        >
          <PratWritingNote
            key={i}
            style={styles.swiperText}
            typeInterval={10}
            blinkInterval={200}
            cursor={false}
            text={subText}
          />
        </View>
      );

    if (this.props.asSharing && i + 1 === this.props.descr.length)
      return (
        <View
          key={i}
          style={[
            styles.swiperView,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <Text key={i} style={styles.swiperText}>
            {subText}
          </Text>
          <ShareButton />
        </View>
      );

    if (this.props.asRating && i + 1 === this.props.descr.length)
      return (
        <View
          key={i}
          style={[
            styles.swiperView,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <Text style={styles.swiperText}>{subText}</Text>
          <RateButton />
        </View>
      );

    return (
      <View
        key={i}
        style={[
          styles.swiperView,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text key={i} style={styles.swiperText}>
          {subText}
        </Text>
      </View>
    );
  }

  rendersubDescrList() {
    return (
      <Swiper
        style={styles.swipperWrapper}
        showsButtons={true}
        horizontal={true}
        showsPagination={true}
        loop={false}
        bounces={true}
        paginationStyle={{ marginTop: 5, bottom: 5 }}
        dot={
          <View
            style={{
              backgroundColor: Colors.highdarkprimary,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: Colors.highligtprimary,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        height={Metrics.swiperNoteSize}
        width={Metrics.modalWidth}
        showsButtons={true}
        nextButton={
          <Text style={[{ color: Colors.snow, fontSize: 40 }]}>›</Text>
        }
        prevButton={
          <Text style={[{ color: Colors.snow, fontSize: 40 }]}>‹</Text>
        }
      >
        {this.props.descr.map((subText, i) => this.rendersubDescr(subText, i))}
      </Swiper>
    );
  }

  render() {
    return (
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.cloud,
              padding: Metrics.smallMargin,
              width: 100,
            },
          ]}
        >
          <Text style={styles.sectionHeaderText}>{this.props.title}</Text>
        </View>

        <View
          style={
            Platform.OS === 'ios'
              ? styles.modalMascotteIOSView
              : styles.modalMascotteAndroidView
          }
        >
          <ResponsiveImage
            source={Images.MascotteImg}
            style={styles.noteMascotte}
            initWidth="100"
            initHeight="100"
          />
        </View>

        {this.rendersubDescrList()}
      </View>
    );
  }
}
