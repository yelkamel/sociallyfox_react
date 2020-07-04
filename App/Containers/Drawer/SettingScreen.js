import React from 'react'
import { View,
ScrollView,
Text,
Image,
Alert,
Switch,
Animated,
Easing,
AsyncStorage} from 'react-native'
import { Colors, Fonts, Images,Metrics } from './../../Themes'
//import R from 'ramda'
import simpleStore from 'react-native-simple-store'
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from 'react-native-push-notification'
//import Chart from 'react-native-chart';
import * as Animatable from 'react-native-animatable'

import RoundedButton from '../../Components/RoundedButton'
//import DataGraph from '../../Components/DataGraph'
import Toast from 'react-native-root-toast';

import styles from '../Styles/SubjectStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loading from '../../Components/Loading'
import Background from '../../Components/Background'
import PaymentTools from '../../Components/PaymentTools'

import SubjectItem from './../SubjectItem'

//var _ = require('lodash')


export default class SettingScreen extends React.Component {
  listSub = []
  constructor () {
    super()
    this.state = {
      hasNotif: true,
      isloading: true,
      hasUnlock: false,
      subList : [],
    };
  }

  componentWillUpdate(){
  }

  componentWillMount(){
    this.loadData()
  }


  componentDidMount() {

  }

  deleteScoreData(dataSubject){
    simpleStore.save("data"+dataSubject.name, {
      score: 0,
      freeDateTime: null
    })

    AsyncStorage.setItem("IsFirstCo", '1')

  }

  deleteTimeOutData (dataSubject){
    simpleStore.get('data' + dataSubject.name)
    .then(dataSub => {
        if (dataSub != null){
        simpleStore.save("data"+dataSubject.name, {
          freeDateTime: null,
          score : dataSub.score
        })
      }
    })
  }

  loadData(){
    simpleStore.get("dataProfil")
    .then( (dataProfil) =>
        {
          return this.setState(
            {
              hasNotif: (dataProfil.hasNotif === '1'),
              hasUnlock: (dataProfil.hasUnlock === '1')
            })
        }
    ).done();



    SubjectItem.SUB_LIST.map((cell, i) => {
      simpleStore.get('data' + cell.name)
      .then(dataSub => {
        if (dataSub != null)
        this.setState({
          subList : this.state.subList.concat({
            name: cell.name,
            title: cell.title,
            score: dataSub.score,
            subAnimation : new Animated.Value(0)
          })
        })
      })
      if (i == SubjectItem.SUB_LIST.length){
        this.setState({isloading: false})
        return;
      }
    })
  }



  resetPress(){
    SubjectItem.SUB_LIST.map((cell) => this.deleteScoreData(cell))
    simpleStore.update('dataProfil' ,
    {
      level: 0,
      exp: 0,
      hasNotif: '1'
    })
    PushNotification.cancelAllLocalNotifications()

    Toast.show("Donnée Supprimée !", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.background

    });
    this.setState({isloading: true})
  }

  resetTimeOutPress (){
      SubjectItem.SUB_LIST.map((cell) => this.deleteTimeOutData(cell))
      Toast.show("Les comptes à rebours sont annulé ! ", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: Colors.background

      })
  }

  onSwithPress (value) {

    var hasNotifTmp = value ? '1' : '0'

    simpleStore.update('dataProfil' ,
    {
      hasNotif: hasNotifTmp,
    })

    this.setState({
      hasNotif:  value
    })

    if (value ===  false)
    PushNotification.cancelAllLocalNotifications()
  }


    askPay(){
    PaymentTools.getPaid().then(res => {
      if (res == true) {
        this.setState({
          hasUnlock: true,
        })
      }
    })
  }

  renderBarList(){
    return (
      this.state.subList.map((cell, i) => {
        if (cell.score == '0'  )
        return;
        return (<View key={i} style={styles.barItem}>
          <Text style={styles.barText}>{cell.title}</Text>
          <View style={styles.barData}>
            <Animatable.View
              ref="view"
              style={[styles.barView,
                {backgroundColor:Colors.highaccent,width: cell.score * 20}]}
              animation= "fadeInLeft"
              duration= {1000}
              easing="ease-out"/>
              <Animatable.Text style={[{color: Colors.snow,fontSize: 12, paddingHorizontal: 5}]}
                animation= "fadeInRightBig"
                delay= {1000}>
                {cell.score}
              </Animatable.Text>
            </View>
          </View>)
        })
      )
    }



    render () {

      if(this.state.isLoading === true){
        return (<Loading/>)
      }

      return (
        <View style={styles.mainContainer}>
          <Background/>

          <ScrollView style={styles.container}>
            <View style={styles.sectionHeaderView}>
              <Text style={styles.sectionHeaderText}> Notification </Text>
              <Icon style={styles.iconHeader} name="exclamation-circle"/>
            </View>
            <View style={styles.settingSwitchView}>
              <Text style={[styles.sectionHeader, {color: "white"}]}> Activer les notifcations </Text>
              <Switch
                onValueChange={(value) => {this.onSwithPress(value)}}
                style={styles.settingSwitch}
                value={this.state.hasNotif}
                onTintColor={Colors.accent}
                thumbTintColor={Colors.secondaryaccent}
                tintColor={Colors.accent}
                />
            </View>

            <View style={styles.sectionHeaderView}>
              <Text style={styles.sectionHeaderText}> Gestion des données </Text>
              <Icon style={styles.iconHeader} name="sliders"/>
            </View>

            <View>
              <RoundedButton
                onPress={() => this.resetTimeOutPress()}
                icon="hourglass-start">
                Réinitialiser les timers
              </RoundedButton>
            </View>

            <View>
              <RoundedButton
                onPress={() => this.resetPress()}
                icon="trash">
                Réinitialiser les données
              </RoundedButton>
            </View>

            {!this.state.hasUnlock &&        
              <RoundedButton
                onPress={() => this.askPay()}
                icon="star-o">
                Version Avancée
              </RoundedButton>}

            <View style={styles.sectionHeaderView}>
              <Text style={styles.sectionHeaderText}> Les statistiques d'utilisation </Text>
              <Icon style={styles.iconHeader} name="bar-chart"/>
            </View>
            <View style={styles.barMainView}>
              {this.renderBarList()}
            </View>


          </ScrollView>
        </View>
      )
    }
  }
