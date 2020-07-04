import React, { Component } from 'react'
import { View,BackAndroid } from 'react-native'
import { Provider } from 'react-redux'
import '../I18n/I18n' // keep before root container
import RootContainer from './RootContainer'
import createStore from '../Redux'
import codePush from "react-native-code-push";
import Toast from 'react-native-root-toast';
import {  Colors, Metrics, Fonts } from '../Themes'


const store = createStore()
const UPDATE_DIALOG = {
        title: "Mise à jour 😉",
        mandatoryUpdateMessage: "Une nouvelle version pour vous servir ! ",
        mandatoryContinueButtonLabel: "continuer",
    };

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {}
   this.backPress=false
  }


  backfunction(){
    if(!this.backPress) {
      Toast.show("Appuyer une seconde fois sur retour pour quitter 😭", {
        duration: 2500,
        backgroundColor: Colors.highdarkaccent,
        position: Metrics.screenHeight/2,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      })

      this.backPress=true

      setTimeout(() => {
        this.backPress=false
      },2500)

      return true

      } else {
        return false
      }
  }

  componentWillMount(){
    BackAndroid.addEventListener('hardwareBackPress', this.backfunction.bind(this))
  }

  componentDidMount(){
      codePush.sync({
          installMode: codePush.InstallMode.IMMEDIATE,
          updateDialog: UPDATE_DIALOG,
      })
   }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
