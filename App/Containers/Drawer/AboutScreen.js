import React from 'react'
import { View, ScrollView, Text, Image,WebView, Linking  } from 'react-native'
import { Colors, Fonts, Images } from './../../Themes'
import styles from '../Styles/SubjectStyle'
import Loading from '../../Components/Loading'
import Background from '../../Components/Background'
import RoundedButton from '../../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'



const SC_DESCR = "Le terme de sciences comportementales regroupe les disciplines qui explorent les activités et les interactions entre les organismes qui vivent dans la nature."
+'\n'+
"Cela implique analyses systématiques et recherches sur le comportement animal et humain au moyen d'observations contrôlées et naturelles ainsi que des expérimentations scientifiques rigoureuses."
+'\n'+
"Elles visent des conclusions légitimes à travers des formulations rigoureuses."
+'\n'+
"Des exemples d'études comportementales se constituent à travers la psychologie, les sciences cognitives et l'anthropologie."
const FUTUR_DESC = [
  "🎮 Rendre l'application le plus ludique possible.",
  "📱 Améliorer les images.",
  "🏃 Mettre de belles animations.",
  "📹 Créer une chaine Youtube.",
]
const SOURCE_LIST = [
  {
    title:"Comment se faire des amis ",
    by:"Dale Canergie"
  },
  {
    title:"Les 48 Lois du Pouvoir",
    by:"Robert Greene"
  },
  {
    title:"Petit traité de manipulation",
    by:"RV Joule et JL Beauvois"
  },
  {
    title:"Le pouvoir de la vulnérabilité",
    by:"Brene Brown"
  },
  {
    title:"Père Riche Père Pauvre",
    by:"Robert T.Kiyosaki"
  },
  {
    title:"Le grand art de la petit Conversation",
    by:"Debra Fine"
  },
  {
    title:"Les secrets d'un mentaliste",
    by:"John Bastardi Daumont"
  },
  {
    title:"L’art d’avoir toujours raison",
    by:"Arthur Schopenhauer"
  },
  {
    title:"La PNL pour les nuls",
    by:"Kate Burton et Romilla Ready"
  },
  {
    title:"L'art d'engager la conversation",
    by:"Don Gabor"
  }
]

export default class AboutScreen extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpenFb: false,
    };
  }

  clickOnFbPage(){
    var uri = 'https://www.facebook.com/LaYouCeferie/';
    // Catch pas de co
    if (this.state.isOpenFb){
      return (<WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri }}
          onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />)

      this.setState({
        isOpenFb:false
      })

    }
  }

  renderTextList (text_list : Array<Object>) {
  return text_list.map((source, i) => {
    return (<Text key={i} style={styles.sectionText} >
      {source}
    </Text>)})
  }

  renderSourceList(source_list : Array<Object>){
    return source_list.map((source, i) => {
      return (
    <View key={i} style={{flex:1,flexDirection: 'row',justifyContent:'space-between'}}>
      <View >
      <Text style={styles.sectionText} >
      {source.title}
      </Text>
      </View>
      <View >
      <Text style={styles.barText} >
      {source.by}
      </Text>
      </View>
    </View>)})
  }



  render () {
    return (
    <View style={styles.mainContainer}>
    <Background/>
        <ScrollView style={styles.container}>

          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeaderText}>Réseau Social</Text>
              <Icon style={styles.iconHeader} name="share-square"/>

          </View>
          <View style={styles.principalView}>
          <RoundedButton  onPress={() =>{
              this.setState({
                isOpenFb:true
              })
            }} icon="facebook-square">
            facebook
          </RoundedButton>

          </View>


          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeaderText}>La science comportementale</Text>
              <Icon style={styles.iconHeader} name="flask"/>

          </View>

          <View style={styles.principalView}>
          <Text style={styles.basicText}>
            {SC_DESCR}
          </Text>
          </View>

          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeaderText}>Sources</Text>
            <Icon style={styles.iconHeader} name="book"/>
          </View>

          <View style={styles.principalView}>
          {this.renderSourceList(SOURCE_LIST)}
          </View>



          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeaderText}>Futures améliorations</Text>
              <Icon style={styles.iconHeader} name="line-chart"/>
          </View>

          <View style={styles.principalView}>
          {this.renderTextList(FUTUR_DESC)}
          </View>



          {this.clickOnFbPage()}

        </ScrollView>
      </View>
    )
  }
}
