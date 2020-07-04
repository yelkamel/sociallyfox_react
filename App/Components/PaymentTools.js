import React from 'react'
import {
   AlertIOS,
   Platform,
   AsyncStorage
} from 'react-native'

import Toast from 'react-native-root-toast';
import { Colors, Fonts, Images, Metrics } from './../Themes'

// APPLE In App Paid
import { NativeModules } from 'react-native'
import { InAppUtils } from 'NativeModules'
import simpleStore from 'react-native-simple-store'

// GOOGLE In App Paid


export default {

  async hasUnlock() {
    return (
      await simpleStore.get('dataProfil').then(dataProfil => {
      console.log("hasUnlock: " + (dataProfil.hasUnlock === '1'));
      return (dataProfil.hasUnlock  === '1')
    }))
  },

  async useInAppGoogle () {
    return true
  },

 useInAppApple(){
  var productIds = ['LaYou.SecretGame.Adv2'];


   return InAppUtils.loadProducts(productIds, (error, productDetails) => {
      console.warn("load: "+error, productDetails);

        return InAppUtils.purchaseProduct(productIds[0], (error, response) => {
          console.warn("purchase: ": error, response);

        if(response && response.productIdentifier) {
          simpleStore.update('dataProfil', {
            hasUnlock: '1'
          })
          Toast.show("Merci paiement réussi, tu as accès à l'application complète. 🙂", {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: Colors.background
          })
           return true
        }
        else {
          Toast.show("Paiement échoué... 😭", {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: Colors.background

          })
          return false
        }
      })
    })
  },

  async getPaid (){

    if (Platform.OS === 'ios')
      return await this.useInAppApple()
    else
      return await this.useInAppGoogle()
  }
}
