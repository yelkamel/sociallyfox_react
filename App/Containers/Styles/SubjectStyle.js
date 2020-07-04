// @flow

import { StyleSheet, Image, Dimensions } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,


    iconText:{
      marginVertical: Metrics.baseMargin,
      marginHorizontal:  Metrics.baseMargin
    },

    puceView:{
      justifyContent : 'center',
      width: Metrics.screenWidth* 0.80,
     marginVertical: Metrics.baseMargin,
//      marginHorizontal:  Metrics.baseMargin
    },

    swipperWrapper:{
      marginVertical: Metrics.smallMargin,
      marginHorizontal:  Metrics.baseMargin
    },

    subTitle:{
      fontWeight: "bold",
      color: Colors.snow,
      fontSize: Fonts.size.regular,
      fontFamily: 'Rubik-Regular',

    },

    titleText:{
      fontWeight: "bold",
      color: Colors.snow,
      fontSize: Fonts.size.h6,
      fontFamily: 'Rubik-Regular',

    },
    basicText:{
      fontSize: Fonts.size.medium,
      color: Colors.snow,
      fontFamily: 'Rubik-Medium',
    },
    principalView: {
      justifyContent : 'center',
      marginVertical: Metrics.baseMargin,
      marginHorizontal:  Metrics.baseMargin
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
    expProgressBar :{

    },
    puissanceDesc :{
      color: Colors.textprimary,
      justifyContent : 'center',
      fontWeight: 'bold',
      fontSize: Fonts.size.h6,
      marginVertical: Metrics.baseMargin,
      marginHorizontal:  Metrics.section
    },

    puissanceNbLabel:{

    },

// LES QUESTIONS MAGIQUE
 questionMagicText:{
   color: Colors.snow,
   fontFamily: 'Rubik-Regular',
   fontFamily: Fonts.type.emphasis,
   fontSize: Fonts.size.regular,
 },
  // BAR
  barMainView: {
    borderLeftColor: Colors.darkaccent,
    borderLeftWidth: 3,
//    borderBottomColor: Colors.darkaccent,
//    borderBottomWidth: 3,
    marginLeft: 5,
    marginRight: 5,

    marginTop: 10,
  },
  barData: {
    flex: 2,
    flexDirection: 'row'
  },
  barItem: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  barText: {
    color: Colors.snow,
    flex: 1,
    fontSize: Fonts.size.small,
    position: 'relative',
    marginLeft: 5,
    marginBottom: 2,
    top: 2
  },
  barView: {
    alignSelf: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 8,
    //marginRight: 5
  },

  chartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  chartStyle: {
    width: 300,
    height: 300,
  },
  radialAnswerView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radialAnswerText:{
    height: 50,
    width: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent
  },

  globaleQuizzView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin
  },
  speakQuizzText:{
    color: Colors.snow,
  },
  descrQuizzText:{
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
  },
  drawerSectionView: {
    ...ApplicationStyles.darkLabelContainer,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.horizontalLineHeight,
  },

  drawerLogo:{
    marginTop: 100,
    marginBottom: 10,
    alignSelf: 'center'
  },
  // TOAST STYLE
  toastMessageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkaccent,
  },


  // PRAT SECTION
  pratText:{
    ...ApplicationStyles.darkLabel
  },

  // SWITH STYLE
  settingSwitch:{
    justifyContent : 'flex-end',
    alignItems : 'flex-end',
    marginHorizontal:  Metrics.section,
    marginVertical: Metrics.baseMargin
  },
  settingSwitchView: {
    height: Metrics.buttonHeight,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal:  Metrics.section,
    marginVertical: Metrics.baseMargin
  },


  sectionViewDescr: {
    justifyContent : 'center',
    marginVertical: Metrics.baseMargin,
    marginHorizontal:  Metrics.section
  },
  // TEXT VIEW MORE STYLE
  ViewMoreText:{
    color: Colors.accent,
    justifyContent : 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
  },
  // MODAL STYLE
  modalMascotteIOSView:{
    position: 'absolute',
    top: -80,
    left: (Metrics.screenWidth/2)- (Metrics.linePathWidth / 2),
  },
  modalMascotteAndroidView: {
    position: 'absolute',
    bottom: -10,
    left: (Metrics.screenWidth/2)- (Metrics.linePathWidth / 2),
  },
  sampleModal:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.darkaccent,
    height: Metrics.swiperNoteSize + 50,
    width : Metrics.modalWidth,
  },
  noteModal:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: Colors.darkaccent,
    height: Metrics.swiperNoteSize + 25,
    width : Metrics.modalWidth,
  },
  swipperWrapper:{
  },
  swiperText :{
    ...ApplicationStyles.darkLabel,
    fontSize: Fonts.size.regular,
    fontFamily: 'Rubik-Regular',
    marginHorizontal:  Metrics.marginHoriNoteSection,
    marginBottom: Metrics.baseMargin,

  },
  swiperView:{
    flex: 1,
    marginTop: 5,
    marginBottom: 3,
    height: Metrics.swiperNoteSize,
  },

  compteurDesc :{
    color: Colors.textprimary,
    justifyContent : 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    marginVertical: Metrics.baseMargin,
    marginHorizontal:  Metrics.section
  },

  SubjectRowImage:{
    width : Metrics.rowImageWidth,
    height : Metrics.rowImageHeight,
    resizeMode:'contain'
  },
  PratButtonView: {
    height: Metrics.buttonHeight,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  PratButtonBackground : {
    flex: 1,
    height: Metrics.buttonHeight,
    borderRadius: Metrics.buttonRadius
  },

  PratButtonLabel: {
    color: Colors.snow,
    fontFamily: 'Rubik-Regular'

  },

  sectionText :{
    color: Colors.snow,
    fontSize: 18,
    fontFamily: 'Rubik-Regular'
  },

  sectionHeaderView: {
    ...ApplicationStyles.darkLabelContainer,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconHeader: {
    color: Colors.snow,
    alignItems: 'flex-end',
    fontSize: Fonts.size.regular,
  },

  iconActionButton: {
    color: Colors.snow,
    alignItems: 'flex-end',
    fontSize: Fonts.size.h4,
  },

  sectionHeaderText: {
    ...ApplicationStyles.darkLabel,
    fontFamily: 'Rubik-Regular'

  },

  groupContainer: {
    ...ApplicationStyles.groupContainer
  },


  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  backgroundContainer: {
    position: 'relative',
    width: 102,
    height: 102,
    borderWidth: 1,
    borderColor: Colors.frost
  },
  backerImage: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    resizeMode: 'stretch'
  },
  colorContainer: {
    height: 130,
    padding: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin
  },
  colorSquare: {
    width: 100,
    height: 100
  },
  colorName: {
    width: 100,
    height: Metrics.doubleBaseMargin,
    lineHeight: Metrics.doubleBaseMargin,
    color: Colors.charcoal,
    textAlign: 'center'
  },
  fontRow: {
    padding: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
    color: Colors.snow
  }
})
