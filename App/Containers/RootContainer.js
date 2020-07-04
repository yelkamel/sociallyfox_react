import React, { Component } from 'react';
import {
  View,
  StatusBar,
  AsyncStorage,
  Alert,
  Image,
  Text,
} from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
//import AppIntro from 'react-native-app-intro';
import { Images, Colors } from '../Themes';
import PushNotification from 'react-native-push-notification';
import simpleStore from 'react-native-simple-store';
import PratNotification from '../Components/PratNotification';
import Toast from 'react-native-root-toast';
import Loading from '../Components/Loading';
import styles from './Styles/RootContainerStyle';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log('TOKEN:', token);
  },

  onNotification: notification => {
    console.log('NOTIFICATION:', notification);
    Toast.show(notification.message, {
      duration: notification.message.length > 150 ? 4000 : 6000,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.background,
    });
  },

  // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: 'YOUR GCM SENDER ID',

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
  requestPermissions: true,
});

const pageArray = [
  {
    title: 'La vie est un jeu',
    description: 'Et sans vous en rendre compte, vous y jouez tous les jours.',
    backgroundColor: Colors.highligtprimary,
    fontColor: '#fff',
    level: 5,
  },
  {
    title: 'Pour gagner',
    description: 'Il existe de petites ruses.',
    backgroundColor: Colors.lightprimary,
    fontColor: '#fff',
    level: 10,
    img: Images.MascotteImg,
    imgStyle: {
      height: 100,
      width: 100,
    },
  },
  {
    title: 'Je vais vous les expliquer,',
    description: 'Pour que vous puissiez les utiliser.',
    img: Images.ListSubImg,
    imgStyle: {
      height: 140,
      width: 210,
    },
    backgroundColor: Colors.defaultprimary,
    fontColor: '#fff',
    level: 20,
  },
  {
    title: "Une fois l'astuce compris,",
    description: 'Utiliser la autour de vous.',
    img: Images.PratButtonImg,
    imgStyle: {
      height: 80,
      width: 340,
    },
    backgroundColor: Colors.darkprimary,
    fontColor: '#fff',
    level: 20,
  },
  {
    title: '',
    description: 'Pour avoir accès aux astuces plus avancées...',
    img: Images.MascotteImg,
    imgStyle: {
      height: 140,
      width: 210,
    },
    backgroundColor: Colors.highdarkprimary,
    fontColor: '#fff',
    level: 20,
  },
];

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsFirstCo: 1,
      isloading: true,
    };
  }

  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup();
    }

    /*  setTimeout(()=>{
        SplashScreen.hide();
    }, 1000);*/
  }
  onSkipBtnHandle = index => {};

  doneBtnHandle = () => {
    AsyncStorage.setItem('hasNotif', '1');
    AsyncStorage.setItem('IsFirstCo', '0');
    this.setState({ IsFirstCo: '0' });
  };
  nextBtnHandle = index => {};
  onSlideChangeHandle = (index, total) => {};

  loadData() {
    AsyncStorage.getItem('IsFirstCo')
      .then(value => {
        this.setState({
          IsFirstCo: value == null ? '1' : value,
          isloading: false,
        });
      })
      .done();
  }

  componentWillMount() {
    PratNotification.setGlobalNotification();

    this.loadData();
  }

  initialSaveData() {
    simpleStore.save('dataProfil', {
      level: 0,
      exp: 0,
      hasNotif: '1',
      hasUnlock: '0',
    });
  }

  render() {
    if (this.state.isloading == true) {
      return <Loading />;
    }

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <NavigationRouter />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
