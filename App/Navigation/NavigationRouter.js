import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

/* Main Object */
import PresentationScreen from '../Containers/PresentationScreen'
import AboutScreen from '../Containers/Drawer/AboutScreen'
import Setting from '../Containers/Drawer/SettingScreen'
import MagicQuestion from '../Containers/Drawer/MagicQuestion'
import StoryQuizz from '../Containers/Drawer/StoryQuizz'
import BodyLangDico from '../Containers/Drawer/BodyLangDico'

/* Subject Object */
import HowTo from '../Containers/HowTo'
import SubjectCont from '../Containers/SubjectCont'

class NavigationRouter extends Component {

  render () {
  let nb = 2;
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>


            {/* The Main Navigation */}
            <Scene initial key='presentationScreen' levelUp={false} component={PresentationScreen} title='Socially Fox' renderLeftButton={NavItems.hamburgerButton} renderRightButton={NavItems.mainHelpRight} />
            <Scene key='Setting' component={Setting} title="Paramètres"  renderBackButton={NavItems.backButton} />
            <Scene key='AboutScreen' component={AboutScreen} title="À Propos"  />
            <Scene key='MagicQuestion' component={MagicQuestion} title="Socially Fox"  />
            <Scene key='HowTo' component={HowTo} title="Comment jouer ?"  />
            <Scene key='StoryQuizz' component={StoryQuizz} title="Aider YouYou"  />
            <Scene key='SubjectCont' component={SubjectCont} renderBackButton={NavItems.backButton} />

           </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
