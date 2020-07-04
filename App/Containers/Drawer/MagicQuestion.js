import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Colors, Fonts, Images } from './../../Themes';
import RoundedButton from '../../Components/RoundedButton';
import styles from '../Styles/SubjectStyle';
import * as Animatable from 'react-native-animatable';
import Loading from '../../Components/Loading';
import Background from '../../Components/Background';

const QEST_LIST = [
  {
    Id: 1,
    question:
      'Si tu avais le choix parmi n’importe qui dans le monde, qui voudrais-tu comme invité(e) pour le dîner ?',
  },
  { Id: 2, question: 'Aimerais-tu être célèbre ? De quelle façon ?' },
  {
    Id: 3,
    question:
      'Avant d’appeler quelqu’un, est-ce que cela t’arrive de répéter ce que tu vas dire ? Pourquoi ?',
  },
  { Id: 4, question: 'Que serait un jour parfait pour toi ?' },
  {
    Id: 5,
    question:
      'Quand as-tu chanté seul(e) pour la dernière fois ? Et avec quelqu’un ?',
  },
  {
    Id: 6,
    question:
      'Si tu pouvais vivre jusqu’à 90 ans en conservant le corps OU l’esprit d’une personne de 30 ans, pendant les 60 dernières années de ta vie, que choisirais-tu ? Le corps ou l’esprit ?',
  },
  {
    Id: 7,
    question: 'As-tu un pressentiment secret sur la façon dont tu vas mourir ?',
  },
  {
    Id: 8,
    question: 'Qu’est-ce qui dans ta vie te rend le plus heureux(se) ?',
  },
  {
    Id: 9,
    question:
      'Si tu devais changer quelque chose sur la manière dont tu as été élevé(e), ce serait quoi ?',
  },
  {
    Id: 10,
    question:
      'Si tu pouvais te lever demain en ayant gagné une qualité ou une capacité, ce serait quoi ?',
  },
  {
    Id: 11,
    question:
      'Si une boule de cristal pouvait te dire la vérité sur toi, ta vie, le futur ou quoi que ce soit, que voudrais-tu savoir ?',
  },
  {
    Id: 12,
    question:
      'Est-ce qu’il y a quelque chose dont tu rêves depuis longtemps ? Pourquoi ne l’as-tu pas encore réalisé ?',
  },
  { Id: 13, question: 'Quel est le plus bel accomplissement de ta vie ?' },
  { Id: 14, question: 'A quoi donnes-tu le plus de valeur dans une amitié ?' },
  { Id: 15, question: 'Quel est ton plus beau souvenir ?' },
  { Id: 16, question: 'Quel est ton pire souvenir ?' },
  {
    Id: 17,
    question:
      'Si tu savais que tu allais mourir soudainement dans un an, changerais-tu quelque chose dans la façon dont tu vis aujourd’hui ? Pourquoi ?',
  },
  { Id: 18, question: 'Que signifie l’amitié pour toi ?' },
  {
    Id: 19,
    question: 'Quels rôles jouent l’amour et l’affection dans ta vie ?',
  },
  {
    Id: 20,
    question:
      'Chacun notre tour, on doit énoncer une caractéristique que l’on considère positive chez l’autre. Il en faut 5 par personne.',
  },
  {
    Id: 21,
    question:
      'Fais 3 affirmations qui soient vraies pour nous deux. Par exemple : On est tous les deux dans cette pièce',
  },
  {
    Id: 22,
    question:
      'Si tu commences à être un(e) ami(e) proche, dis-moi ce qui serait important pour moi de savoir.',
  },
  { Id: 23, question: 'Partage avec moi un moment embarrassant de ta vie.' },
  {
    Id: 24,
    question:
      'Dis-moi ce que tu aimes chez moi : soit honnête, dis des choses que tu ne dirais pas à quelqu’un que tu viens seulement de rencontrer.',
  },
  {
    Id: 25,
    question:
      'Comment ça se passe pour toi, si quelque chose est trop sérieux pour pouvoir en rire ?',
  },
  {
    Id: 26,
    question:
      'Si tu devais mourir ce soir sans opportunité de communiquer avec qui que ce soit, qu’est-ce que tu regretterais le plus de ne pas avoir dit à quelqu’un ? Pourquoi tu ne l’as pas encore dit ?',
  },
  {
    Id: 27,
    question:
      'Ta maison, avec tous tes biens à l’intérieur, prend feu. Après avoir sauvé ceux que tu aimes et les animaux de compagnie, tu as encore le temps de prendre les affaire d’une personne. Qu’est-ce que ce serait ? Pourquoi ?',
  },
  {
    Id: 28,
    question:
      'Partage un problème personnel et demande-moi un conseil pour que je puisse t’aider à le résoudre. Je devrais aussi réfléchir et te dire ensuite comment je pense que tu te sens par rapport à ce problème.',
  },
  { Id: 29, question: 'Raconte moi une journée typique ' },
  {
    Id: 30,
    question: 'La partie de ton physique que tu aimes le plus ? et le moins ?',
  },
  {
    Id: 31,
    question:
      'Quel est : ton film, ta série, ton livre, ton mangas etc... ? (au choix)',
  },
  { Id: 32, question: 'Quel est ta citation préférés ?' },
];

export default class AboutScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      QuestionId: 0,
    };
  }

  renderandomQuestion() {
    this.setState({
      QuestionId: Math.floor(Math.random() * 32),
    });
    this.refs.lineView.fadeIn(1500);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Background />

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <View style={{ marginTop: 30, marginHorizontal: 30 }}>
            <Text style={[styles.sectionText]}>
              Posez-vous la question suivante mais reformulez à votre maniere et
              ecoutez bien la réponse.
              {'\n'}
              {'\n'}
              Ensuite dites à votre tour ce que vous en pensez aussi tôt puis la
              discution s'enchainera.
            </Text>
          </View>

          <Animatable.View
            style={styles.section}
            animation="fadeIn"
            ref="lineView"
            duration={2500}
            iterationCount={1}
          >
            <Text style={styles.questionMagicText}>
              {QEST_LIST[this.state.QuestionId].question}
            </Text>
          </Animatable.View>
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 30,
            justifyContent: 'flex-end',
          }}
        >
          <RoundedButton
            onPress={() => this.renderandomQuestion()}
            icon="random"
          >
            Question Aléatoire
          </RoundedButton>
        </View>
        <MyBanAds />
      </View>
    );
  }
}
