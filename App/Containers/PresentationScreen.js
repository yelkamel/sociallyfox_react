import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  LayoutAnimation,
  Animated,
  Alert,
  Platform,
  BackAndroid,
  AlertIOS,
  AppState,
} from 'react-native';
import { Images, Colors, Metrics, Fonts } from '../Themes';
import styles from './Styles/PresentationScreenStyle';
import SubButton from '../Components/SubButton';
import Background from '../Components/Background';
import Loading from '../Components/Loading';
import PaymentTools from '../Components/PaymentTools';
import _ from 'lodash';
import PulseAnimation from '../Components/PulseAnimation';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
import { Actions as NavigationActions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import simpleStore from 'react-native-simple-store';
import DropdownAlert from 'react-native-dropdownalert';
import Toast from 'react-native-root-toast';
import LinearGradient from 'react-native-linear-gradient';
import SubjectItem from './SubjectItem';
import { func, bool, string, arrayOf, element, number } from 'prop-types';

const SEN_LIST = [
  { Id: 1, sentence: 'Configurer votre cerveau pour faire face au mieux' },
  { Id: 2, sentence: 'Faites semblant jusqu’a ce que vous le deveniez' },
  {
    Id: 3,
    sentence:
      'De minuscule changement peuvent conduire à de grands changements',
  },
  { Id: 4, sentence: 'Plus de 55% de la communication est non verbale' },
  {
    Id: 5,
    sentence:
      'Garder en tête les conséquences possibles d’un rapprochement soudain',
  },
  { Id: 6, sentence: 'Les yeux sont les fenêtres de l’âme' },
  { Id: 7, sentence: "L'imitation est la plus sincère de la flatterie." },
  {
    Id: 8,
    sentence:
      'Il n’est pas nécessaire de parler quand on a un regard qui en dit long',
  },
  { Id: 9, sentence: 'Qui se justifie se crucifie' },
  {
    Id: 10,
    sentence:
      'Tout ce que tu peux perdre dans un naufrage tu ne le possèdes pas',
  },
  {
    Id: 11,
    sentence: 'Les signaux non verbeaux sont aussi importants que les mots',
  },
  {
    Id: 12,
    sentence:
      'Nos attitudes corporelles peuvent modifier fortement la manière dont on reçoit des messages qui tentent de nous persuader',
  },
  {
    Id: 13,
    sentence: 'L’analyse du langage corporel vous donnera une grande empathie',
  },
  {
    Id: 14,
    sentence:
      'Un langage corporel percutant donnera envie aux gens de vous côtoyez ',
  },
];

export default class PresentationScreen extends React.Component {
  static propTypes = {
    sentenceArray: arrayOf(string),
    senId: number,
    levelUp: bool,
  };

  static defaultProps = {
    levelUp: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      fadeAnim: new Animated.Value(0),
      levelUp: this.props.levelUp,
      dataProfil: {
        level: 0,
        exp: 0,
        hasUnlock: 0,
      },
      isLoading: true,
      progressBar: 0,
    };
    this.isBackgrounded = false;
    //  this.MyInterPresAds = new MyInterAds ()
  }

  // ALERT
  needUnLockAlert = () => {
    if (Platform.OS === 'ios') {
      this.refs.dropDownAlert.alertWithType(
        'custom',
        'Acces Bloqué !',
        'Débloque toutes les astuces dans la section paramètre. '
      );
    } else {
      Toast.show(
        'Acces Bloqué !' +
          '\n' +
          'Débloque toutes les astuces dans la section paramètre.',
        {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        }
      );
    }
  };

  _handleAppStateChange = nextAppState => {
    console.log('AppState changed to', nextAppState);

    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.isBackgrounded = true;
      console.log('App has come to the foreground!');
    } else {
      this.isBackgrounded = false;
    }
  };

  levelAlert = (level: number) => {
    if (Platform.OS === 'ios') {
      this.refs.dropDownAlert.alertWithType(
        'custom',
        'Niveau Insuffisant !',
        'Utilise les astuces précédente, il te faut atteindre le niveau ' +
          level +
          '.'
      );
    } else {
      Toast.show('Niveau Insuffisant !', {
        duration: Toast.durations.SHORT,
        position: Metrics.navBarHeight + 20,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  };

  // HANDLE PRESS
  handlePressList = (level: number, name: string, title: string) => {
    if (level <= this.state.dataProfil.level) {
      return NavigationActions.SubjectCont.bind(null, {
        subName: name,
        title: title,
        exp: this.state.dataProfil.exp,
      });
    } else {
      return this.levelAlert.bind(null, level);
    }
  };

  loadData() {
    var lvl = 1;
    var updateLvl = false;

    simpleStore.get('dataProfil').then(dataProfil => {
      SubjectItem.levelExp.map(cell => {
        if (cell.exp <= dataProfil.exp) {
          lvl = cell.level;
        }
      });
      if (
        lvl > this.state.dataProfil.level &&
        this.state.dataProfil.level > 0
      ) {
        updateLvl = true;
        this.refs.lineView.fadeInUpBig(1500);
      }
      if (dataProfil.exp > this.state.dataProfil.exp) {
        this.setState({
          dataProfil: {
            level: lvl,
            exp: dataProfil.exp,
            hasUnlock: dataProfil.hasUnlock,
          },
        });
        this.updateProgressBar(lvl, dataProfil.exp);
        console.log('PresentationScreen - loadData : exp ' + dataProfil.exp);
      }
    });
  }

  componentWillMount() {
    simpleStore.get('dataProfil').then(dataProfil => {
      SubjectItem.levelExp.map(cell => {
        if (cell.exp <= dataProfil.exp) {
          lvl = cell.level;
        }
      });
      this.setState({
        dataProfil: {
          level: lvl,
          exp: dataProfil.exp,
          hasUnlock: dataProfil.hasUnlock,
        },
      });
      this.updateProgressBar(lvl, dataProfil.exp);
    });
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
    AppState.addEventListener('change', this._handleAppStateChange);
    //setInterval(()=>{
    //  if (!this.isBackgrounded){
    //  var rand = _.random(0,100)
    //  if (rand < 33 )
    //        this.MyInterPresAds.showInter()
    //  }
    //}, 20 * 1000)
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUpdate() {
    if (this.state.dataProfil.level !== 0) {
      this.loadData();
    }
  }

  handleServerResponse(err, response) {
    if (err != null) {
      this.dropdown.alertWithType('error', 'Error', err);
    }
  }

  onClose(data) {}

  updateProgressBar(level, exp) {
    var Yexp = 0;
    var Zexp = 0;

    SubjectItem.levelExp.map(cell => {
      if (level == cell.level) {
        Yexp = cell.exp;
      }
      if (level + 1 == cell.level) {
        Zexp = cell.exp;
      }
    });

    var total = Zexp - Yexp;
    var actuel = exp - Yexp;
    var value = actuel / total;
    this.setState({
      progressBar: value * 100,
    });
  }

  makeLevelShinny() {
    return (
      <Animatable.Text
        style={styles.insideLevelLabel}
        animation="fadeInUp"
        direction="alternate"
        duration={1000}
        delay={1800}
        iterationCount={1}
      >
        {this.state.dataProfil.level}
      </Animatable.Text>
    );
  }

  renderSubButtonList(rowData: Array<Object>) {
    return rowData.map((cell, i) => {
      if (i % 2 == 0) {
        var niveau = parseInt(cell.Id / 2 + 1);
        var index = i + 1;
        var currentLevel = this.state.dataProfil.level;
        var timeToOpen = 2000 / niveau;

        return (
          <SubButton
            key={index}
            titleLeft={rowData[index - 1].title}
            titleRight={rowData[index].title}
            titleMain=""
            onPressLeft={this.handlePressList(
              currentLevel,
              rowData[index - 1].name,
              rowData[index - 1].title
            )}
            onPressRight={this.handlePressList(
              currentLevel,
              rowData[index].name,
              rowData[index].title
            )}
            onMainPress={this.levelAlert.bind(null, currentLevel)}
            isOpenable={this.state.dataProfil.level >= rowData[index].level}
            timeToOpen={2000 + 300 - timeToOpen}
          />
        );
      } else return;
    });
  }

  renderSubList() {
    return (
      <View style={styles.subListView}>
        {this.renderSubButtonList([...SubjectItem.SUB_LIST].reverse())}
      </View>
    );
  }

  renderpulseAnimation() {
    if (Platform.OS === 'ios' || Platform.Version >= 23)
      return (
        <View>
          <PulseAnimation
            color={Colors.highdarkprimary}
            numPulses={3}
            diameter={400}
            top={10}
            speed={20}
            marginTop={15}
            duration={2000}
          />
        </View>
      );
    else {
      return;
    }
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }

    var linePathHeight =
      (this.state.dataProfil.level + 3) * Metrics.subButtonHeight +
      Metrics.subButtonHeight / 2;

    if (this.state.dataProfil.level === 1) {
      linePathHeight =
        3 * Metrics.subButtonHeight + Metrics.subButtonHeight / 2;
    }

    if (this.state.dataProfil.level === 2) {
      linePathHeight =
        5 * Metrics.subButtonHeight + Metrics.subButtonHeight / 2;
    }
    if (this.state.dataProfil.level === 3) {
      linePathHeight =
        6 * Metrics.subButtonHeight + Metrics.subButtonHeight / 2;
    }

    if (this.state.dataProfil.level === 9) {
      linePathHeight = Metrics.subListHeight;
    }

    return (
      <View style={[styles.mainContainer]}>
        <LinearGradient
          colors={[Colors.defaultprimary, Colors.highdarkprimary]}
          style={[{ flex: 1 }]}
        >
          {this.renderpulseAnimation()}
          <View style={[styles.centered, { marginTop: 15 }]}>
            <AnimatedGaugeProgress
              size={Metrics.levelGaugeHeight}
              style={[{ borderColor: Colors.accent }]}
              width={10}
              fill={this.state.progressBar}
              rotation={90}
              cropDegree={90}
              tintColor={Colors.highaccent}
              backgroundColor={Colors.darkaccent}
              strokeCap="circle"
            >
              {fill => (
                <View style={styles.insideGauge}>{this.makeLevelShinny()}</View>
              )}
            </AnimatedGaugeProgress>
          </View>
          <View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                height: Metrics.subListHeight,
              },
            ]}
          >
            {this.renderSubList()}
            <Animatable.View
              style={[
                styles.pathView,
                {
                  backgroundColor: Colors.accent,
                  height: linePathHeight,
                },
              ]}
              animation="fadeInUpBig"
              duration={2000}
              easing="ease-out"
              ref="lineView"
            />
          </View>

          <DropdownAlert
            ref={'dropDownAlert'}
            onClose={data => this.onClose(data)}
            showCancel={true}
            tapToCloseEnabled={false}
            containerStyle={{
              backgroundColor: Colors.highdarkprimary,
              margin: 30,
              borderRadius: 8,
              height: 120,
            }}
          />
        </LinearGradient>
      </View>
    );
  }
}
