import React from 'react'
import { View, ScrollView, Text, Image,StyleSheet } from 'react-native'
import { Colors, Fonts, Images,Metrics,ApplicationStyles } from './../Themes'
import Background from '../Components/Background'
import Flake from '../Components/Flake'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/SubjectStyle'

const B = (props) => <Text style={{fontWeight: 'bold',color: Colors.snow}}>{props.children}</Text>
export default class HowTo extends React.Component {
  constructor () {
    super()
  }

  renderSourceList () {
  return SOURCE_LIST.map((source) => {return (<Text style={styles.sectionText} >
  {source}
  </Text>)})
  }

  renderPublicTodo(){
    return FUTUR_DESC.map((publicTodo) => {return (<Text style={styles.sectionText} >
        {publicTodo}
        </Text>)})
  }


  render () {

    return (
    <View style={styles.mainContainer}>
      <Background/>
        <ScrollView style={{flex:1}}>
        <View style={styles.principalView}>
        <View style={styles.section}>
          <Text style={styles.subTitle}>
            Les Astuces
          </Text>
        </View>

          <Text style={styles.basicText}>
              L’idée de l’application est de vous apprendre quelques <B>astuces</B> afin de vous aidez à :
          </Text>

          <View style={styles.puceView}>
          <View style={[{flexDirection: 'row'}]}>
            <Icon name='handshake-o' size={20} color={Colors.snow} style={styles.iconText}></Icon>
            <Text style={[styles.basicText]}>Avoir des liens avec d’autres personnes et de les renforcer.</Text>
          </View>
          <View style={[{marginRight: 5, flexDirection: 'row'}]}>
            <Icon name='users' size={20} color={Colors.snow} style={styles.iconText}></Icon>
            <Text style={[styles.basicText]}>Mieux communiquer votre pensée et influencer votre entourage.</Text>
          </View>
          </View>

          <Text style={styles.basicText}>
            Pour cela, vous aurez une liste de méthodes à disposition avec des explications et des exemples.
            {"\n"}
            Elles sont courtes, expliquées le plus simplement possible et inspirées par des experts en science comportementale.
          </Text>
          <View style={styles.section}>
            <Text style={styles.subTitle}>
              La Progression
            </Text>
          </View>

          <Text style={styles.basicText}>
            Les <B>astuces</B> ne sont pas toutes disponibles dès le début, l’idée étant de vous pousser à progresser dans le jeu.
            Chaque méthode nécessite un certain niveau pour pouvoir y accéder.
            {"\n"}
            Et pour y accéder, vous devrez utiliser les <B>astuces</B> précédentes plusieurs fois afin d’avoir le niveau necessaire.
            {"\n\n"}
            Pour chaque <B>astuce</B>, vous pourrez indiquer lorsque vous l’aurez utiliser.
            {"\n"}
            Cela vous permettra d’accumuler des points d’expérience et gagner des niveaux.{" "}
            <Icon name='user-plus' size={20} color={Colors.snow} style={styles.iconText}></Icon>

            {"\n"}
            Ce qui vous permettra d’accéder à des <B>astuces</B> encore plus avancée.
          </Text>

          <View style={styles.section}>
            <Text style={styles.subTitle}>
              La Disponibilité
            </Text>
          </View>
          <Text style={styles.basicText}>
            L’application est disponible à tout moment, il n’y a pas de connexion internet nécessaire.
            {"\n"}
            Suivant votre niveau, vous recevrez des notifications ajoutant quelques informations supplémentaire concernant les  <B>astuces</B>.
            {" "}
            <Icon name='thumbs-o-up' size={20} color={Colors.snow} style={styles.iconText}></Icon>
          </Text>
          </View>
          </ScrollView>
        </View>)
  }
}
