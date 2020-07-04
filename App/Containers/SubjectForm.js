import React from 'react';
import { View, ScrollView, Text, Image, AppState } from 'react-native';
import { Colors, Fonts, Images, Metrics } from './../Themes';
import styles from './Styles/SubjectStyle';
import NoteSection from './NoteSection';
import PratSection from '../Components/PratSection';
import Loading from '../Components/Loading';
import Background from '../Components/Background';
import simpleStore from 'react-native-simple-store';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modalbox';
import moment from 'moment';
import { func, bool, string, arrayOf, element, number } from 'prop-types';

export default class SubjectForm extends React.Component {
  _unmounted = false;
  static propTypes = {
    duration: number,
    hasButton: bool,
    exp: number,
    subName: string,
    subSample: arrayOf(string),
    subTextList: arrayOf(string),
    subNote: arrayOf(string),
    expWin: number,
  };

  constructor(props) {
    super(props);
    this.state = {
      subData: {
        score: 0,
        nbtimeout: 0,
      },
      isOpen: false,
      isDisabled: false,
      isLoading: true,
      nbtimeout: 0,
    };
  }

  componentDidMount() {
    //  AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillMount() {
    this.loadData();
    //    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
    }
  }
  componentWillUnmount() {
    this._unmounted = true;
  }

  componentDidUpdate(prevProps, prevState) {}

  loadData() {
    simpleStore.get('data' + this.props.subName).then(data => {
      var tmptimeout = 0;
      var tmpscore = 0;
      if (data !== null) {
        tmpscore = data.score;

        if (data.freeDateTime != null) {
          var now = moment(new Date());
          if (now.isBefore(data.freeDateTime)) {
            var end = moment(data.freeDateTime);
            var duration = moment.duration(end.diff(now));
            tmptimeout = duration.asSeconds();
          }
        }
      }
      this.setState({
        subData: {
          score: tmpscore,
        },
        isLoading: false,
        nbtimeout: tmptimeout,
      });
      console.log(
        'Get DATA' +
          '\n' +
          this.props.subName +
          ':' +
          '\n' +
          'score ' +
          tmpscore +
          '\n' +
          'nbTimeOut ' +
          tmptimeout
      );
    });
  }

  rendersubText(subText: string, i: number) {
    return (
      <Text key={i} style={styles.sectionText}>
        {subText}
      </Text>
    );
  }

  rendersubTextList() {
    return this.props.subTextList.map((subText, i) =>
      this.rendersubText(subText, i)
    );
  }

  rendersubImage() {
    if (this.props.subName == 'PowerPose')
      return (
        <View style={styles.centered}>
          <Image source={Images.PowerPoseImg} style={styles.SubjectRowImage} />
        </View>
      );
    return;
  }

  renderViewMore(onPress) {
    return (
      <Text style={styles.ViewMoreText} onPress={onPress}>
        {' '}
        lire la suite{' '}
      </Text>
    );
  }

  renderViewLess(onPress) {
    return;
  }

  rendersubQuote() {
    if (this.props.subQuote != null)
      return (
        <View style={styles.section}>
          <Text
            style={[styles.sectionHeader, Fonts.style['quote']]}
            key="quote"
          >
            {this.props.subQuote[0]}
          </Text>
          <Text style={[styles.sectionHeader]}>{this.props.subQuote[1]}</Text>
        </View>
      );

    return;
  }

  toggleDisable() {
    this.setState({ isDisabled: !this.state.isDisabled });
  }

  toggleSwipeToClose() {
    this.setState({ swipeToClose: !this.state.swipeToClose });
  }

  openModalNote = () => {
    this.refs.modalNote.open();
  };

  openModalExample = () => {
    this.refs.modalExemple.open();
  };

  addSampleButton() {
    if (this.props.subSample[0].length < 1) return;

    return (
      <ActionButton
        buttonColor={Colors.accent}
        onPress={this.openModalExample}
        position="left"
        offsetX={20}
        offsetY={10}
        icon={<Icon style={styles.iconActionButton} name="window-maximize" />}
      />
    );
  }

  render() {
    if (this.state.isLoading == true) {
      return <Loading />;
    }

    return (
      <View style={styles.mainContainer}>
        <Background />
        <ScrollView style={styles.container}>
          <PratSection
            score={this.state.subData.score}
            duration={this.props.duration}
            nbtimeout={this.state.nbtimeout}
            hasButton={this.props.hasButton}
            subName={this.props.subName}
            exp={this.props.exp}
            expWin={this.props.expWin}
          />
          <View style={styles.sectionHeaderView}>
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.sectionHeaderText}>Consigne</Text>
            </View>

            <View style={{ marginRight: 8 }}>
              <Icon style={styles.iconHeader} name="info" />
            </View>
          </View>

          <View style={styles.sectionViewDescr}>
            {this.rendersubTextList()}
            {this.rendersubImage()}
          </View>
          <View style={{ height: 70 }} />
        </ScrollView>
        {this.addSampleButton()}
        <Modal
          style={styles.sampleModal}
          position={'center'}
          ref={'modalExemple'}
          isDisabled={this.state.isDisabled}
          swipeToClose={false}
          swipeArea={0}
        >
          <View>
            <NoteSection
              title={'Exemple'}
              descr={this.props.subSample}
              asTipping={false}
              asSharing={this.props.subName === 'DoorInFace'}
              asRating={this.props.subName === 'AutoSpeak'}
            />
          </View>
        </Modal>
        <ActionButton
          buttonColor={Colors.accent}
          onPress={this.openModalNote}
          position="right"
          offsetX={20}
          offsetY={10}
          icon={<Icon style={styles.iconActionButton} name="bullhorn" />}
        />
        <Modal
          style={styles.noteModal}
          position={'center'}
          ref={'modalNote'}
          isDisabled={this.state.isDisabled}
          swipeToClose={false}
          swipeArea={0}
        >
          <View>
            <NoteSection
              title={'Remarque'}
              descr={this.props.subNote}
              asTipping={true}
              asSharing={false}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
