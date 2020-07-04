import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import RatingRequestor from 'react-native-rating-requestor';
import RoundedButton from './RoundedButton'
import { Colors } from '../Themes/'


const RATE_OPT =
{
    title: "Noter Secret Game",
    message: "Du coup, si tu as compris le Faux Dialogue merci de bien vouloir noter l'application.😉",
    actionLabels: {
        decline: "Vasy garde la peche.",
        delay: "Flemme, une prochaine fois.",
        accept: "D'accord 👊"
    }
}

export default class ShareButton extends Component {
  RatingTracker = new RatingRequestor("TEST",RATE_OPT);

  static propTypes = {
};

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <RoundedButton
        onPress={()=>{
          this.RatingTracker.showRatingDialog();
        }}
        icon="star"
        backgroundColor= {Colors.defaultprimary}>
        Noter
      </RoundedButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});
