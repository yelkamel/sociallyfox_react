import React,{Component} from 'react'
import { StyleSheet,View, ScrollView, Text, Image } from 'react-native'
import { Colors, Fonts, Images } from './../Themes'
import LinearGradient from 'react-native-linear-gradient';
import Spinner from  'react-native-spinkit';


class Loading extends Component {
    state: {

  }

  render () {
    return (
      <LinearGradient
        colors={[Colors.defaultprimary, Colors.highdarkprimary]}
        style={[{flex: 1}]}>

        <View style={styles.loadingView}>
          <Spinner
            style={styles.spinner}
            isVisible={true}
            size={50}
            type="Circle"
            color={Colors.highaccent}/>

          <Text style={styles.loadingText}>
            Chargement...
          </Text>
        </View>

        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    marginBottom: 20,
},
  loadingView: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'transparent'
  },
  loadingText:{

    borderRadius: 20,
    color: Colors.accent,
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Loading
