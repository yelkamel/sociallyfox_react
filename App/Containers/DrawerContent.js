import React, { Component } from 'react';
import { ScrollView, Image, BackAndroid } from 'react-native';
import styles from './Styles/SubjectStyle';
import { Images } from '../Themes';
import DrawerButton from '../Components/DrawerButton';
import { Actions as NavigationActions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

import ResponsiveImage from 'react-native-responsive-image';

class DrawerContent extends Component {
  componentDidMount() {
    /*BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })*/
    this.animation.play();
  }

  animation = null;

  toggleDrawer() {
    this.context.drawer.toggle();
  }

  handlePressOutil = () => {
    this.toggleDrawer();
  };

  handlePressSetting = () => {
    this.toggleDrawer();
    NavigationActions.Setting();
  };

  handlePressMagicQuestion = () => {
    this.toggleDrawer();
    NavigationActions.MagicQuestion();
  };

  handlePressBodyLangDico = () => {
    this.toggleDrawer();
    NavigationActions.BodyLangDico();
  };

  handlePressAbout = () => {
    this.toggleDrawer();
    NavigationActions.AboutScreen();
  };

  handlePressYouYouHelp = () => {
    this.toggleDrawer();
    NavigationActions.StoryQuizz();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LottieView
          style={{ height: 150, width: 200, backgroundColor: 'blue' }}
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../Images/mascotte.json')}
        />
        <ResponsiveImage
          source={Images.MascotteImg}
          style={styles.drawerLogo}
          initWidth="150"
          initHeight="150"
        />
        <DrawerButton
          style={styles.drawerSectionView}
          text="Les Questions Magiques"
          onPress={this.handlePressMagicQuestion}
        />
        <DrawerButton
          style={styles.drawerSectionView}
          text="Paramètres"
          onPress={this.handlePressSetting}
        />
        <DrawerButton
          style={styles.drawerSectionView}
          text="À Propos"
          onPress={this.handlePressAbout}
        />
      </ScrollView>
    );
  }
}

DrawerContent.contextTypes = {};

export default DrawerContent;
