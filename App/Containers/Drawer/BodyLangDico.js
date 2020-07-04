import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Colors, Fonts, Images } from './../../Themes'
//import Accordion from 'react-native-accordion'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../Styles/SubjectStyle'

import Loading from '../../Components/Loading'
import Background from '../../Components/Background'

const MICROEXP_LIST = [
  {Id : 1, microExp: "Nez qui se fronce", mean: "Insécurité"},
  {Id : 2, microExp: "Intérieur des sourcils remonte légèrement ", mean: "Tristesse"},
  {Id : 3, microExp: "Rétrécissement des pupilles", mean: "Colère ou Scepticisme"},
  {Id : 4, microExp: "Battements très fréquents des paupières", mean: "Insécurité"},
  {Id : 5, microExp: "Sourcils relevés", mean: "Etonnement ou Scepticisme"},
  {Id : 6, microExp: "Commissures des lèvres tombent légèrement ", mean: "Tristesse"},
  {Id : 7, microExp: "Lèvres se pince", mean: "Colère "},
  {Id : 8, microExp: "Yeux/regard fuyants", mean: "Gêne ou désintérêt"},
  {Id : 9, microExp: "Pincer les narines", mean: "Dégoût"},
  {Id : 10, microExp: "Avancer la lèvre inférieure", mean: "Incrédulité"},
  {Id : 11, microExp: "Lever les yeux au ciel", mean: "Incrédulité"},
  {Id : 12, microExp: "Regard fixe", mean: "Mépris ou Colère"},
  {Id : 13, microExp: "Traits du visage pétrifiés", mean: "Refus"},
  {Id : 14, microExp: "Relever un seul sourcil", mean: "Incrédulité"},
  {Id : 16, microExp: "Léger plie autour des yeux", mean: "Amabilité"},
  {Id : 17, microExp: "Coins de la bouche décontractés", mean: "Calme"},
  {Id : 18, microExp: "Bouche fermée, souriante", mean: "Amabilité"},
  {Id : 19, microExp: "Front lisse", mean: "Amabilité"},
  {Id : 20, microExp: "Paupières supérieures abaisser", mean: "Tristesse"},
  {Id : 21, microExp: "Froncement du front", mean: "Songeur ou Penseur"},
  {Id : 22, microExp: "Bouche ouverte", mean: "Etonnement"},
  {Id : 23, microExp: "Sourcils se froncent", mean: "Colère"},
  {Id : 24, microExp: "Nez se plisse", mean: "Dégoût"},
  {Id : 25, microExp: "Sourcils se lèvent et se rapprochent ", mean: "Peur"},
  {Id : 26, microExp: "Bouche s’entrouvre et s’étend vers l’extérieur du visage", mean: "Peur"},
  {Id : 28, microExp: "poumons inspirent fort", mean: "Peur"},
  {Id : 29, microExp: "Lèvre supérieure se relève", mean: "Dégoût"},
  {Id : 30, microExp: "Narines se dilatent.", mean: "Colère"},
  {Id : 31, microExp: "Menton se contracte", mean: "Dégoût"},
  {Id : 32, microExp: "Sourcils remontent", mean: "Surprise"},
  {Id : 33, microExp: "Menton s’élève, la tête penche légèrement en arrière", mean: "Mépris"},
  {Id : 34, microExp: "Pupilles se rétractent", mean: "Peur"},
  {Id : 35, microExp: "Lèvres remontent d’un seul côté", mean: "Mépris"},
  {Id : 36, microExp: "Yeux s’écarquillent", mean: "Suprise"},
  {Id : 37, microExp: "Regard se perd dans le vide", mean: "Tristesse"},
  {Id : 38, microExp: "Serrement des sourcils et de la mâchoire", mean: "Colère"},
  {Id : 39, microExp: "Rétrécissement des yeux", mean: "Dégoût"},
  {Id : 40, microExp: "Regard tourné vers le bas", mean: "Tristesse"},
  {Id : 41, microExp: "Transpiration", mean: "Peur"},
]


const BODYLANG_LIST = [
  {Id : 1, bodyLang: "Contact visuel direct (regard droit)", mean: "Conscience de sa propre valeur, assurance, intérêt"},
  {Id : 3, bodyLang: "Buste penché en avant", mean: "Intérêt, attention"},
  {Id : 4, bodyLang: "Buste penché vers l’arrière", mean: "Aversion, mise à distance, autosatisfaction"},
  {Id : 5, bodyLang: "Bras croisé devant la poitrine", mean: "Attente, mise à distance"},
  {Id : 6, bodyLang: "Mouvements ouverts des bras", mean: "Assurance, bien-être, conscience de sa propre valeur"},
  {Id : 7, bodyLang: "Poing fermés", mean: "Colère, fureur, détermination"},
  {Id : 8, bodyLang: "Main sur les hanches", mean: "Indignation, arrogance, autoassurance"},
  {Id : 9, bodyLang: "Mains entourant fermement un objet", mean: "Crispation, nervosité"},
  {Id : 10, bodyLang: "Mouvements fréquents des jambes", mean: "Inquiétude, nervosité, incertitude"},
  {Id : 11, bodyLang: "Jambes croisées tournées dans une autre direction que l’interlocuteu", mean: "Désintérêt, évitement"},
  {Id : 12, bodyLang: "Position droite du corps (mais sans raideur ou rigidité)", mean: "Conscience de sa propre valeur, assurance"},
  {Id : 13, bodyLang: "Tête haute et droite", mean: "Auto-assurance, mais aussi arrogance"},
]

export default class BodyLangDico extends React.Component {
  state: {

  }
  constructor () {
    super()
  }

  rendermicroExpText (microExpText: Object) {
  return (
      <View>
      </View>
      /*
    <Accordion
              collapsed={true}
              header={
              <View style={styles.sectionHeaderView } >
                <Text style={styles.sectionHeaderText} >{microExpText.microExp}</Text>
            </View>}
              content={
                  <View>
                    <Text style={[styles.sectionHeader]}>{microExpText.mean}</Text>
                  </View>}
              easing="linear"
              onPress={() => { }}
            />*/
  )
  }

  rendermicroExpList () {
  return MICROEXP_LIST.map((microExpText) => this.rendermicroExpText(microExpText))
  }


  renderbodyLangText (bodyLangText: Object) {
  return (<View> </View>
      /*
    <Accordion
              collapsed={true}
              header={
              <View style={styles.sectionHeaderView } >
                <Text style={styles.sectionHeaderText} >{bodyLangText.bodyLang}</Text>
              </View>}
              content={
                  <View>
                    <Text style={[styles.sectionHeader]}>{bodyLangText.mean}</Text>
                  </View>}
              easing="linear"
              onPress={() => { }}
            />*/
        )
  }

  renderbodyLangList () {
  return BODYLANG_LIST.map((bodyLangText) => this.renderbodyLangText(bodyLangText))
  }

  render () {
    return (
    <View style={styles.mainContainer}>
<Background />
            <ScrollView style={styles.container}>

        <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Les signes potentiel du langage corporel
        </Text>
        </View>
          {this.renderbodyLangList()}

        <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Les différents micro-expressions émotionnelles
        </Text>
        </View>
        {this.rendermicroExpList()}



        </ScrollView>
      </View>
    )
  }
}
