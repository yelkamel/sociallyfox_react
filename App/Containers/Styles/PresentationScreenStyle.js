// @flow

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  subListView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: Metrics.subButtonHeight/2,
    //    left: (Metrics.screenWidth/2) - (Metrics.subButtonWidth/2),
    //    position: 'absolute',
    zIndex: 2
  },
  pathView: {
    width: Metrics.linePathWidth,
    flexDirection: 'column',
    bottom: 0,
    left: (Metrics.screenWidth/2)- (Metrics.linePathWidth / 2),
    position: 'absolute',
    zIndex: 1,
    borderTopLeftRadius:100,
    borderTopRightRadius: 100,
  },
  levelView: {
    backgroundColor: Colors.accent,
    width: Metrics.niveauWidth,
    height:Metrics.niveauHeight,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  /*
  actionButtonStyle:{
    height : 10,
    width : 10,
    borderRadius : 30,
    justifyContent: 'center',
    alignItems: 'center',
  }, */
  actionButtonMainView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100
  },
  actionButtonView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  insideGauge:{
    position: 'absolute',
    top: 25,
    left: 10,
    width: Metrics.levelGaugeHeight - (10*2),
    height: Metrics.levelGaugeHeight * (1 - 90/360) - (10*2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideLevelLabel: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    color: Colors.textprimary,
    fontWeight: 'bold',
    fontSize: 40,
  },
  roundedButtonCont:{
    flex: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
  },
})
