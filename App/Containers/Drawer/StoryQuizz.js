import React from 'react'
import { View, ScrollView, Text, Image, Alert,Switch,AsyncStorage,Platform } from 'react-native'
import { Colors, Fonts, Images } from './../../Themes'
//import R from 'ramda'
import simpleStore from 'react-native-simple-store'

import RadialAnswer from '../../Components/RadialAnswer'

import styles from '../Styles/SubjectStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

const ANS_LIST =[
  {
    stepId:1,
    ans: ['Mimétisme','Pied Dans La Porte'],
    correctAns: 2,
    explainText: "Pourquoi tu me regarde énervé toi, t'as un problème ? "
  },
  {
    stepId:2,
    ans: ['Vulnérabilité','Sourire'],
    correctAns: 1,
    explainText: "Je suis pas d'humeur souriante chiao."
  },
  {
    stepId:3,
    ans: ['Fausse Liberté','Belle Reformulation'],
    correctAns: 2,
    explainText: "Non mais tu peux pas comprendre."
  },
]

const QUIZZ_LIST = [
  { stepId : 1,
    name: 'Smile',
    speak: "ah salut, qu'est-ce que tu me veux ?!",
    descr: "Avec un ton un peu en colère",
  },
  { stepId : 2,
    name: 'PowerPose',
    speak: "Excuse moi, je m'enerve rapidement.",
    descr: "D'un air géné.",
  },
  { stepId : 3,
    name: 'PowerPose',
    speak: "Ce qui m'énerve par dessus tout c'est que je n'ai pas le temps de faire tout ce que je peux faire !",
    descr: "Avec un regard penseur.",
  }
]

export default class StoryQuizz extends React.Component {

  constructor () {
    super()
    this.state = {
      dataStory:
      {
        stepId:1,
      }
    };
  }

  loadSubjectData() {
  simpleStore.get('dataStory')
        .then(data => {
          this.setState(
            {dataStory:
            {
              stepId: data.score,
            }
          })
        })
}

// OBJECT LIST VIEW RENDER
renderTextList (rowData: Array<Object>) {
  return rowData.map((cell) => {
      if (this.state.dataStory.stepId  >= cell.stepId){
      return (
        <View style={styles.globaleQuizzView}>
          <View style={styles.section}>
            <Text style={styles.speakQuizzText} >
            {cell.speak}
            </Text>
          </View>
          <Text style={styles.descrQuizzText} >
            {cell.descr}
          </Text>
        </View>
      )}
  })
}

onSelectAnswer= (correctAns: number, index:number,explainText:string) => {
  console.log("correctAns : " + correctAns + " index : "+ index +" explainText "+explainText)

}


renderAnswerText(ans : Array, correctAns : number, explainText : string ){
  return (ans.map((subcell, i) => {
    return (<View style={styles.radialAnswerText}>
              <Text style={[{color:Colors.snow,fontSize:12}]} onSelect={this.onSelectAnswer.bind(null,correctAns,i,explainText)}>{subcell}</Text>
            </View>
            )
    })
  )
}

renderAnswer(){
return (ANS_LIST.map((cell) => {
  if (this.state.dataStory.stepId==cell.stepId)
    return (this.renderAnswerText(cell.ans))
  }))
}


  render () {
    return (
    <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

        {this.renderTextList(QUIZZ_LIST)}

        </ScrollView>

        <View style={styles.radialAnswerView}>
          <RadialAnswer onOpen={() => {}}
                onClose={() => {}}
                onOpen={() => {}}
                itemRadius={0}
                menuRadius= {110}
                spreadAngle= {360}
                startAngle= {0}>

              <View style={[styles.radialAnswerText,{backgroundColor: Colors.darkaccent}]}>
                <Text style={[{color:Colors.snow,fontSize:12}]}>Réponse</Text>
              </View>

              {this.renderAnswer()}

            </RadialAnswer>
        </View>
      </View>
    )
  }
}
