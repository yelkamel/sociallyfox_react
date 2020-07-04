import React from 'react'
import { TouchableOpacity, Text,View,TouchableHighlight,AsyncStorage } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'
import PushNotification from 'react-native-push-notification'
import _ from 'lodash'
import styles from './Styles/ComponentStyle'
import SubjectItem from './../Containers/SubjectItem'
import simpleStore from 'react-native-simple-store'

export default {

  setGlobalNotification(){

      PushNotification.cancelAllLocalNotifications()
      
      simpleStore.get("dataProfil")
      .then( (dataProfil) => {
        var nbNotif=1
        var lvl = 1

        if (dataProfil != null){

          if (dataProfil.hasNotif == '0'){
            return ;
          }

          SubjectItem.levelExp.map((cell) => {
            if (cell.exp <= dataProfil.exp){
                lvl = cell.level
                return ;
            }
          })
        } else {
          nbNotif = 3
        }

        if (lvl == 1 || lvl == 3 || lvl == 4  || lvl == 2){
          nbNotif = 2
        }

        for (var i = 0; i < nbNotif; i++) {
            var randomNb = _.random(1, (lvl*2) + 7)
            var notif = SubjectItem.NOTIF_LIST[randomNb]
            var notifMessage = notif.notifMessage

            var notifTime = notif.pushTime * 1000 + (i * 60 * 60 * 1000)

            var randomTime = (i * 60) * 1000
            PushNotification.localNotificationSchedule({
             /* ANDROID */
             ticker: "Socially Fox",
             color: Colors.defaultprimary,
             /* IOS */
             alertAction: <View style={styles.CollapsedHeader}/>,
             category: null,
             message: notifMessage, // (required)
             playSound: true, // (optional) default: true
             soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
             date: new Date(Date.now() + (notifTime + randomTime)) // in 60 secs
           })
         }
       }).done()
  },

  setPratNotification (subName: string, score : number) {
    AsyncStorage.getItem("hasNotif").then((hasNotif) => {

        if (hasNotif == "0" )
          return ;
      SubjectItem.NOTIF_LIST.map((cell) => {
        if (cell.subName == subName && cell.score == score) {
         PushNotification.localNotificationSchedule({
          /* ANDROID */
          ticker: cell.title,
          color: Colors.defaultprimary,
          /* IOS */
          alertAction: <View style={styles.CollapsedHeader}/>,
          category: null,
          message:  cell.notifMessage, // (required)
          playSound: true, // (optional) default: true
          soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
          date: new Date(Date.now() + (cell.pushTime * 1000)) // in 60 secs
        });
      }
    }).done();
  })
  }
}
