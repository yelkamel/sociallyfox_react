import {Dimensions, Platform, PixelRatio} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  levelGaugeHeight : height * 0.15,
  barMenuIconWidth : width * 0.09,
  pixelRatio : PixelRatio.getPixelSizeForLayoutSize(1),
  subListHeight : height* 0.65,
  subButtonHeight: ((height* 0.65) / 11),


  actionButtonSize: (width * 0.2),
  subButtonWidth: width * 0.40,
//  subButtonMainWidth: width * 0.1,
  linePathWidth: PixelRatio.getPixelSizeForLayoutSize(2),
  borderMainWidth: 3,
  modalWidth : width * 0.90,
  screenWidth : width,
  screenHeight : height,
  expProgressBarSize : width * 0.6,
  dataGraphSpacing : width * 0.02,
  dataGraphHeight: height * 0.3,
  dataGraphMargin: width * 0.05,
  marginHorizontal: 10,
  marginVertical: 10,
  buttonWidth:width * 0.80,
  buttonHeight: 35,
  swiperNoteSize : height * 0.4,
  marginHoriNoteSection : width * 0.10,
  rowImageWidth : width * 0.8,
  rowImageHeight : height * 0.2,
  marginRoundedButton : width * 0.1,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 100,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300
  }
}

export default metrics
