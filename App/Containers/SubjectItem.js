

const SUB_LIST = [
  {Id : 0, name: 'Smile',title: 'Sourire', icon : 'handshake-o',level : 0, expWin: 24, duration : 5 * 60},
  {Id : 1, name: 'Nod',title: "Hochement de tête", icon : 'users', level : 0, expWin: 24, duration : 5 * 60},

  {Id : 2, name: 'Mimic', title: "Mimétisme", icon : 'handshake-o',level : 0, expWin: 32, duration : 30 * 60},
  {Id : 3, name: 'DoorInFace',title: "Porte-au-Nez", icon : 'user-plus', level : 0, expWin: 32, duration :30 * 60},

  {Id : 4, name: 'MeToo',title: "Moi aussi", icon : 'handshake-o', level : 0, expWin: 40, duration : 48 * 60},
  {Id : 5, name: 'FakeLiberty',title: "Fausse Liberté", icon : 'users',level : 0, expWin: 40, duration : 48 * 60},

  {Id : 6, name: 'BodyLangOpen',title: "Langage Corporel", icon : 'handshake-o',level : 2, expWin: 85, duration : 240 * 60},
  {Id : 7, name: 'FeetInDoor',title:  "Pied-dans-la-Porte", icon : 'users', level : 2, expWin: 85, duration : 240 * 60},

  {Id : 8, name: 'GenericOpinion',title: "Opinion Banal", icon : 'handshake-o',level : 2, expWin: 100, duration : 480 * 60},
  {Id : 9, name: 'FakeSyllogisme',title: "Faux Syllogisme", icon : 'user-plus', level : 2, expWin: 100, duration : 480 * 60},

  {Id : 10, name: 'Collision',title: "Abordage", icon : 'user-plus', level : 3, expWin: 147, duration : 720 * 60},
  {Id : 11, name: 'SetRef',title: "Référence", icon : 'user-plus',level : 3, expWin: 147, duration : 720 * 60},

  {Id : 12, name: 'PerfectComp',title: "Compliment Parfait", icon : 'user-plus', level : 4, expWin: 192, duration : 960 * 60},
  {Id : 13, name: 'CognitiveChange',title: "Dissonance Cognitive", icon : 'users', level : 4, expWin: 192, duration : 960 * 60},

  {Id : 14, name: 'AutoSpeak',title: "Faux Dialogue", icon : 'handshake-o',level : 5, expWin: 243, duration : 1200 * 60},
  {Id : 15, name: 'Rewording',title: "Belle Reformulation", icon : 'handshake-o',level : 5, expWin: 243, duration : 1200 * 60},

  {Id : 16, name: 'ConfortQuest',title: "Question Confortable", icon : 'handshake-o',level : 6, expWin: 290, duration : 1440 * 60},
  {Id : 17, name: 'PublicHelp',title: "Aide du Public", icon : 'handshake-o',level : 6, expWin: 290, duration : 1440 * 60},

  {Id : 18, name: 'Meeting',title: "Reunion", icon : 'handshake-o',level : 7, expWin: 350, duration : 2160 * 60},
  {Id : 19, name: 'SocrateMeth',title: "Socrate a Raison", icon : 'handshake-o',level : 7, expWin: 350, duration : 2160 * 60},

  {Id : 20, name: 'Vulnerability',title: "Vulnérabilité", icon : 'handshake-o',level : 8, expWin: 400, duration : 2880 * 60},
  {Id : 21, name: 'StoryTelling',title: "Anecdote Inoubliable", icon : 'handshake-o',level : 8, expWin: 400, duration : 2880 * 60},
]
const levelExp = [
  {level:1, exp: 0},
  {level:2, exp: 210},
  {level:3, exp: 700},
  {level:4, exp: 1100},
  {level:5, exp: 1700},
  {level:6, exp: 2500},
  {level:7, exp: 3500},
  {level:8, exp: 4700},
  {level:9, exp: 6000},
  {level:10, exp: 7800},
  {level:11, exp: 9900},
  {level:12, exp: 12200},
  {level:13, exp: 15000},
  {level:14, exp: 12180}, ///
  {level:15, exp: 14880},
  {level:16, exp: 17952},
  {level:17, exp: 21420},
  {level:18, exp: 25308},
  {level:19, exp: 29640},
  {level:20, exp: 34440},
  {level:21, exp: 39732},
  {level:22, exp: 45540},
  {level:23, exp: 51888},
  {level:24, exp: 58800},
  {level:25, exp: 66300},
  {level:26, exp: 74412},
  {level:27, exp: 83160},
  {level:28, exp: 92568},
  {level:29, exp: 102660},
  {level:30, exp: 113460},
  {level:31, exp: 124992},
  {level:32, exp: 137280},
  {level:33, exp: 150348},
  {level:34, exp: 164220},
  {level:35, exp: 178920},
  {level:36, exp: 194472},
  {level:37, exp: 210900},
  {level:38, exp: 228228},
  {level:39, exp: 246480},
  {level:40, exp: 265680},
  {level:41, exp: 285852},
  {level:42, exp: 307020},
  {level:43, exp: 329208},
  {level:44, exp: 352440},
  {level:45, exp: 376740},
  {level:46, exp: 402132},
  {level:47, exp: 428640},
  {level:48, exp: 456288},
  {level:49, exp: 485100},
  {level:50, exp: 515100},
  {level:51, exp: 546312}
]
const SAMPLE_LIST = [
  // SOURIRE
  [ "Des chercheurs ayant étudié l'impact du sourire sur l'environnement ont pu démontrer qu’une serveuse souriante obtient nettement plus de pourboires qu'une serveuse efficace mais froide."],
  // Hochement de tete
  [""],
  // Mimétisme
  [""],
  // porte au nez
  [
    "- Peux-tu partager Socially Fox à toute ta famille et sur tous les réseaux sociaux avec un bon commentaire ?"+ '\n'+
    "- Non, j’ai la flemme.",
    "- Bon d’accord peux-tu au moins cliquer sur ce bouton."
  ],
  // Moi aussi
  [""],
  // Fausse Liberté
  [""],
  // Langage Corporel
  [""],
  //Pied-dans-la-Porte
  [""],
  // Opinion Banal
  [""],
  // Faux Syllogisme
  [
    "Un collègue vous propose d’aller manger au kebab du coin mais vous préférez manger ailleurs." + '\n' +
    "A = B : Les kebabs sont des aliments gras pleins d’huile." + '\n' +
    "B = C : Rappelle-toi que tu as pris du poids, ce qui est mauvais pour ta santé." + '\n' +
    "A = C : manger au kebab est mauvais pour ta santé." ,
    "Il y a de fortes chances pour que votre collègue vous propose autre chose."+ '\n' +
    "Et pourtant, ne dit-on pas que le secret d’un bon régime c’est de se faire plaisir de temps en temps ?"
  ],
  // Abordage
  [""],
  // Référence
  [""],
  // Compliment Parfait
  [""],
  // Dissonance Cognitive
  [""],
  // Faux Dialogue
  ["Peux-tu faire un commentaire et noter l’application sur le store ?"+'\n' +
  "Je sais tu vas surement mettre une mauvaise note ou un commentaire disant que l’application n’est pas assez aboutie.",
  "Mais cela a pris beaucoup de temps personnel du développeur, qui à lui seul a synthétisé le contenu texte et l’application." + '\n'+
  "Après oui tu me dira que c’est c’est pour ces raisons que tu mettra peut-être peu d'étoiles",
  "Une notation pourra aider dans l'évolution de l'application."],
  // Belle Reformulation
  [
    "- J’ai gagné une belle partie de Go ce matin." + '\n'+
    "- Tu gagnes souvent des parties de Go ?"+ '\n'+
    "- Ouais surtout sur un plateau 19x19.",
    "- Alors tu perds sur d’autres plateaux ?"+ '\n'+
    "- Ouais l’avantage du 19x19, c’est qu’il y a plein de Joseki différent.",
    "- Quel est ton Joseki préférer ? (Ce n’est pas grave laissez le l’expliquer tout laissant l’illusion de le savoir)"+ '\n'+
    "- Tu sais celui qui commence avec une pierre ici puis la... (vous savez maintenant que c’est une entrée de jeux sur plateau)"],
    // Question Confortable
    ["Au lieu de dire « Aimes-tu l’application Socially Fox ? »" + '\n'+
    "Dites plutôt « J’ai téléchargé l’application Socially Fox l’autre jour. J’aime beaucoup. Tu connais ? »."],
    // Aide du Public
    [
      "- Tu me déposes chez moi Sam ?"+ '\n'+
      "- Non pas envie de faire un détour",
      "- Mais comme ça tu déposes Adil et Nicolas, c’est sur le chemin aussi"+ '\n'+
      "- Bon d’accord"
    ],
    // Réunion
    [""],
    // Socrate a Raison
    ["Pour convaincre des pêcheurs d’aller pêcher: " + '\n'+
    "- Le soleil chauffe l’eau ? Oui" + '\n'+
    "- Les poissons ont besoin de chaleur pour vivre ? Oui" + '\n'+
    "- Donc les jours ensoleillés sont bons pour la pêche",
    "Et voilà pour argumenté l’inverse :"+ '\n'+
    "- Les poissons mangent des insectes, pas vrai ? Oui (surement avec un hochement de tête)" + '\n' +
    "- Les insectes aiment le temps humide ? Oui" + '\n'+
    "- Donc les jours pluvieux sont bons pour la pêche"],
    // vulnérabilité
    [""],
    // Mise en récit
    [""]
  ]

  const NOTE_LIST = [
    // SOURIRE
    ["De nombreuses personnes ont conscience de l'importance et du pouvoir du sourire. ",
    "Mais ils pensent offrir un grand sourire lorsqu'ils ne l'esquissent qu'à peine.",
    "Vous savez ce beau sourire où la bouche et les yeux sont complices, ce sourire qui orne vos yeux de dizaine de petits plis radieux !",
    "Jouez avec votre sourire dans votre miroir. Entretenez des pensées joyeuses, créez une complicité entre vous et votre reflet.",
  ],  // Hochement de tecter
  ["Sachez que, dans une moindre mesure, cela fonctionne également avec le non.",
],
// Mimétisme
["La prochaine fois que je vais parler à un indien, je vais donc agiter la tête ?",
"Attention, le mimétisme n'est pas une affaire de miroir. Il ne faut pas se comporter à l'identique mais reprendre certains tics personnels.",
"N'imitez surtout pas les comportements culturels, cela pourrait vexer votre interlocuteur au lieu de le mettre en confiance."
],
// porte au nez
["Attention à ne pas utiliser cette technique trop souvent car cela pourrait lasser votre entourage.",
"Utilisez cette astuce pour le bien de votre interlocuteur (arrêter de fumer etc...). Sachez que l’intensité de la culpabilité est encore plus forte avec vos proches."
],
// Moi aussi
["Je me souviens d’un jour où j’avais fait remarquer à une fille que nous portions la même chemise.",
"Deux ans plus tard, elle m’interpelle dans une autre soirée en m’appelant « frère chemise » !"
],
// Fausse Liberté
["Petite astuce intitulée : le pied dans la mémoire.",
"Rappelez à votre interlocuteur les actions que vous attendez de lui.",
],
// Langage Corporel
["Résumons un peu : si votre interlocuteur a un langage corporel fermé. Comment faire en reprenant l’astuce du mimétisme ?",
"Mon expérience me pousse à l’imiter.",
" Si votre posture est trop différente de la sienne, si vous êtes entièrement ouvert tandis qu’il se referme, il risque de se sentir agressé et mal à l’aise.",
],
//Pied-dans-la-Porte
["Ne pas vouloir perdre la gratitude de l’autre est un élément primordial ! ",
"C’est pour cela que les représentants commerciaux passent autant de temps à vous expliquer les choses !",
"En utilisant votre temps, ils vous poussent à la vente.Ne vous êtes-vous jamais dit « bon ça fait 1 heure que je suis là pour un téléphone, il faudrait quand même que j’en prenne un » ?",
],
// Opinion Banal
["Si a un moment vous voulez convaincre votre interlocuteur du bien fondé de votre opinion par rapport au sien.",
"Réfléchissez bien si vous devez vraiment vous engager sur ce terrain. Est-ce que cela en vaut vraiment la peine ?"],
// Faux Syllogisme
["A = B : Les chats ont 4 pattes.",
"B = C : Les chiens ont aussi 4 pattes.",
"A = C : Les chiens sont alors des chats.",
"Prenez garde à ne pas rendre votre logique absurde trop évidente !"
],
// Abordage
["Voyez les gens comme des livres, lisez-les, tournez les pages et arrêtez-vous à vos chapitres préférés.",
"Croyez mon expérience : il y a beaucoup à apprendre des gens.",
],
// Référence
["Il m’arrive, en entendant une information intéressante, de la retenir uniquement pour l’utiliser plus tard comme référence utile."],
// Compliment Parfait
["Vous savez, un jour, quelqu’un m’a dit que les gens oublient nos actions.",
"En revanche, il n’oublient jamais ce que nous leur avons fait ressentir.",
"Faites en sorte que ce sentiment soit positif."
],
// Dissonance Cognitive
["C’est une astuce très forte, beaucoup de gens l’utilisent sans vraiment s’en rendre compte.",
"Mais attention n’essayez pas de perturber une connaissance bien ancrée (comme les croyances religieuses).",
"Cela peut conduire à de très longs débats ou créer un conflit inutile."],
// Faux Dialogue
["Si vous êtes une personne empathique, vous aurez des facilités dans ce domaine. Les autres, vous devrez travailler un peu plus."],
// Belle Reformulation
["Prenez garde à ne pas perturber l’autre avec une question évidente.",
"Si votre interlocuteur vous demande si vous vous y connaissez réellement, surtout, ne lui mentez pas et avouez que vous êtes novice dans ce domaine.",
"Cela renforcera votre complicité.",
],
// Question Confortable
["C’est une belle astuce qui vous permettra en plus de parler de vous à votre interlocuteur."
],
// Aide du Public
["Attention, au moment de demander de l’aide à quelqu’un soyez certain qu’il vous appuiera et qu’il sera d’accord avec vous.",
],
// Réunion
["Vous pouvez procéder de la même manière avec plusieurs personnes en retrait.",
"Et si vous vous sentez l’âme d’un Cupidon, cela peut également fonctionner pour former un couple !",
],
// Socrate a Raison
["Si la technique semble simple au premier abord, assurez-vous de bien préparer votre conversation avant de vous lancer.",
],
// vulnérabilité
["Contentez-vous de poser les bases et n’entrez pas dans les détails.",
"Votre interlocuteur s’en chargera naturellement."
],
// Mise en récit
["Sachez que certaines histoires peuvent marquer un esprit à vie. Je me rappelle encore certaines histoires qui m’ont été contées il y a longtemps.",
"Elles ont plus d’impact sur moi que n’importe quelle leçon de morale.",
"Ces histoires ne sont pas faciles à mettre en place et nécessitent une bonne imagination.",
"N’hésitez pas à retenir de bonnes histoires et à vous les approprier pour les réutiliser !"],
]

const DESCR_LIST =[
  // SOURIRE
  ["Le sourire est la plus belle façon de communiquer votre sympathie. Un sourire ne coûte pas cher mais impacte réellement votre entourage.",
  "Dans cet environnement peuplé de gens aux visages fermés, une personne souriante est un véritable rayon de soleil.",
  "Prenez le temps de vous entraîner devant votre miroir. Le sourire est un mouvement naturel qui gagne à être travaillé pour être parfait. Portez votre attention sur les petits plis de la bouche, les rides aux coins des yeux...",
  "Amusez-vous dans la rue à offrir des sourires aux passants et essayez d'obtenir le leur en retour."
],
// Hochement de tecter
["Lorsque vous voulez une réponse positive, hochez la tête pour dire « Oui » et formulez votre demande en même temps.",
"Enclin vers le positif, si votre interlocuteur n’a pas une position ferme sur le sujet, il sera poussé à être en accord avec vous." + '\n',
"Vous en avez surement déjà fait l’expérience !",
"Hocher la tête tout en disant « tu es d’accord avec moi ? » influence fortement une réponse positive.",
],
// Mimétisme
["Il est plus facile de se rapprocher de quelqu'un lorsqu'on met cette personne en confiance. Pour cela, rien de mieux que de l'imiter subtilement.",
"Vous développerez une complicité confortable qui ouvrira la porte à davantage d'intimité. Soyons lucides : nous aimons ce qui nous ressemble !",
"Pour créer ce mimétisme, n'hésitez pas à emprunter à votre interlocuteur ses gestes, ses postures et même son vocabulaire. Cela renforce votre connexion émotionnelle.",
"Commencez par observer son comportement, puis reproduisez certains mots et gestes 30 secondes plus tard.",
"Rapidement, vous remarquerez que votre interlocuteur est plus détendu, plus à l’aise en votre compagnie."],
// porte au nez
["Commencez par demander quelque chose de compliqué, voire fantaisiste à quelqu’un, qui va au-delà de ce que vous voulez vraiment.",
"Après son refus, il vous suffira de demander ce que vous voulez vraiment pour que cela paraisse évident.",
"Votre concession (une demande plus facile) le poussera vers vous et la culpabilité ne le laissera pas vous décevoir une fois de plus."
],
// Moi aussi
["Au cours d’une discussion, ne manquez pas de mettre en évidence vos points communs.",
"Montrez que vous aussi vous pensez de la même manière ou que vous avez eu une expérience similaire."+ '\n',
"Votre conversation s’en trouvera immédiatement plus riche et plus animée.",
"Attention, ne mentez pas ! Chercher simplement le point commun, il y en a toujours.",
],
// Fausse Liberté
["Préciser à une personne qu’elle est libre d’accepter ou de refuser ce que vous lui demandez suffit à considérablement à augmenter vos chances d’obtenir une réponse positive.",
"Une expérience a démontré qu’une simple demande d’argent réussit à 10%, tandis que la même demande terminant par « Libre à vous de faire ce geste » passe à 47,5% de réussite.",
"Rendez-vous compte de l’ampleur du taux de réussite en faisant appel au libre-arbitre de chacun !",
"Nous n’aimons pas être obligé de faire quelque chose. Dès qu’on offre la possibilité de choisir à quelqu’un, sa générosité augmente naturellement, avec son propre espace de liberté."
],
// Langage Corporel
["Lors d'une discussion, montrez que vous êtes entièrement disposé à recevoir le message de l'autre. Votre corps doit être ouvert au sens propre du terme.",
"Ne croisez ni les bras, ni les jambes et gardez votre dos droit.",
"Limitez les mouvements parasites et concentrez-vous sur les mouvements nécessaires (on évite de se ronger les ongles).",
"Fixez votre interlocuteur avec votre regard, les yeux dans les yeux, il se sentira plus proche de vous.",
"Lorsque cela est possible, essayez de montrer les paumes de vos mains, cela vous aidera à garder un langage corporel ouvert."
],
//Pied-dans-la-Porte
["C’est une astuce bien connue des commerciaux. Elle est du même ressort que la porte au nez.",
"Avant de demander ce qui vous tient à coeur, commencez par quelque chose de simple qui sera forcément accepté par votre interlocuteur.",
"Là, vous avez bloqué la porte avec votre pied : elle ne peut plus se refermer.",
"Montrez que vous êtes heureux et demandez ce que vous voulez réellement.",
"Pour ne pas perdre votre joie, il est probable que votre interlocuteur accède à votre demande.",
"Cela multiplie par deux les chances d’obtenir une réponse favorable."
],
// Opinion Banal
["Nous avons tous des opinions dont nous aimons parler, soit pour les valider, soit pour les partager ou les défendre.",
"Prenez un sujet simple et peu engagé :",
"« Aimes-tu le café ? »",
"« Que penses-tu de la couleur rose ? »",
"Vous engagez ainsi la conversation de manière simple et efficace. n’hésitez pas à faire jaillir un point commun en partageant votre opinion.",
"Si vous n’êtes pas du même avis, dites-le également car le sujet n’est pas brûlant."
],
// Faux Syllogisme
["Le Syllogisme est un mode de raisonnement vieux 2 400 ans, attribué au philosophe Aristote qui consiste en la logique suivante :",
" A = B, B= C donc A = C",
"En apparence, cette démonstration est irréfutable. ",
"On peut donc facilement utiliser ce raisonnement pour donner une rationalité à un argument.",
],
// Abordage
["Vous croyez qu’il y existe un secret pour parler à un inconnu ? Qu’il faut forcément être connu, beau parleur, magicien ?",
"Détrompez-vous : si vous le voulez, vous le pouvez ! C’est à la portée de tout le monde.",
"Tout d’abord, n’essayez pas d’être pertinent car vous serez stressé et abandonnerez rapidement.",
"Ensuite, pensez à être simple et efficace. Inspirez-vous de la situation que vous avez devant vous et laissez-vous aller.",
"Faites un petit commentaire, demandez un renseignement, un conseil, une idée… Lorsque vous vous rendrez compte que cela fonctionne, vous aurez de moins en moins de mal à vous lancer."
],
// Référence
["C’est le principe de la démonstration universitaire : citer des références est un grand atout pour vous permettre de construire votre réflexion et susciter l’adhésion d’autrui.",
"Chiffres, citations, dialogues de film… tout est sujet à vous faire entrer dans un débat ou à relancer une discussion.",
"Intéressez-vous à ces références, surtout dans vos domaines de prédilection et retenez-les pour les utiliser ultérieurement.",
"Prenez soin de choisir une citation pertinente qui va vous permettre d’étoffer votre propos face à une personne capable de la recevoir.",
"Evitez donc de citer un philosophe à un scientifique ou des chiffres à un littéraire."
],
// Compliment Parfait
["Dire à un mannequin qu’elle est belle ne va rien lui apprendre. ",
"C’est une phrase qu’elle aura entendu un millier de fois.",
"Essayez de trouver le compliment qui va la toucher, celui qu’on ne lui a jamais fait.",
"Vous jouez sur le terrain de la surprise et du plaisir.",
"Prenez soin de faire un compliment sincère et désintéressé afin de gagner la confiance de votre interlocuteur."
],
// Dissonance Cognitive
["L’idée de cette technique est de perturber, voire de modifier, les connaissances de votre interlocuteur pour l’amener à votre conclusion.",
"Vous devez alors conduire l’autre à voir les choses d’un point de vue différent pour qu’il accepte votre conclusion.",
"Si vous souhaitez inviter un ami à la soirée de votre hôte alors que vous savez pertinemment que cette personne n’aime pas lorsqu’il y a trop de monde à cause du bruit.",
"Expliquez-lui d’abord que plus on est de fous, plus on rit.",
"Demandez ensuite si vous pouvez inviter votre ami."
],
// Faux Dialogue
["Pensez à ces disputes ponctuées de « et après tu vas me dire que … » ou à ces discours parcourus de « vous vous dites sûrement que… ».",
"👉 Convaincre l’autre que vous le comprenez entièrement.",
"👉 Obtenir des explications alors que vous vous trompez.",
"Il est important d’essayer d’adopter le plus possible le point de vue de votre interlocuteur. Imaginez ce qu’il pense et sa manière de construire son argumentaire.",
"Communiquez ainsi en jouant votre propre partie et la sienne."
],
// BELLE REFORMULATION
["Voilà une technique géniale si vous voulez avoir une discussion passionnante et profonde avec quelqu’un alors que vous ne connaissez rien au sujet.",
"Il s’agit de reformuler une déclaration venant de votre interlocuteur, tout en y ajoutant une demande d’informations (temps, lieu, action).",
"On peut aller très loin de cette manière.",
"Votre interlocuteur sera content d’avoir partagé sa passion avec vous et vous en aurez sans doute retiré de nouvelles connaissances."
],

// Question Confortable
["Avez-vous remarqué comment vos proches communiquent avec vous ? Ils vous parlent sans forcément vous poser de questions.",
"Tout se fait naturellement : vous leur parlez de votre journée sans avoir à répondre à aucune question.",
"C’est comme cela que vous devez discuter avec une personne le plus tôt possible dans la relation.",
"Commencez par changer la formulation de vos questions.",
"La conversation deviendra alors naturelle et agréable : finis les interrogatoires !"
],
// Aide du Public
["Une requête a beaucoup plus de poids lorsqu'elle est formulée par plusieurs personnes, c’est le principe de la pétition.",
"Parfois il suffit simplement d’être nombreux à vouloir quelque chose pour que cela se réalise.",
"Ainsi, demandez aux gens autour de vous d'appuyer vos propos ou votre demande."
],
// Réunion
["Lors d’une conversation avec un ami, il se peut qu’une tierce personne soit présente sans participer. En étant en retrait, cette tierce personne peut se sentir mal à l’aise.",
"Pensez à connecter vos amis.",
"Pour cela, écoutez votre interlocuteur jusqu’au bout et demandez à la tierce personne ce qu’elle en pense.",
"Vous pourrez ainsi dialoguer à trois et permettre à deux personnes ne se connaissant pas de construire une nouvelle relation."
],
// Socrate a Raison
["Prince de la rhétorique, Socrate a toujours su mener les discussions à l’endroit exact où il souhaitait aller.",
"Comment faisait-il ?",
"Chaque conversation débutait par une série de questions dont la réponse était inévitablement “oui”.",
"Il suscitait alors l’adhésion de son interlocuteur, par cet enchaînement de questions rhétoriques, avant de poursuivre vers ce qu’il souhaitait montrer.",
"Chaque oui entraînant un nouveau oui, il était alors plus facile d’obtenir un nouveau oui, même pour une question moins évidente."
],
// vulnérabilité
["On pense que la vulnérabilité est la clé de l’intimité.",
"Pour créer des relations profondes, assumez votre vulnérabilité.",
"Vos faiblesses sont aussi vos forces. Il n’est donc pas mauvais voire, au contraire, nécessaire de parler de vos défauts à votre interlocuteur.",
"Il s’agit là d’une confidence prouvant que vous avez confiance en lui. Votre relation s’en trouvera plus forte par la suite.",
"Mais attention à ne pas sombrer dans l’excès et dévoiler vos faiblesses trop rapidement.",
"Si vous souhaitez réellement devenir ami avec cette personne, vous lui ferez cette confidence tôt ou tard. Alors pourquoi attendre ?",
""],
// Mise en récit
["Pour s’adresser à l’esprit, il faut toucher le cœur.",
"Ainsi, pour faire passer un message, il est beaucoup plus efficace d’utiliser une histoire.",
"Racontez des histoires ou vos expériences ayant un point de départ clair, un élément perturbateur, un conflit puis une résolution.",
"C’est la résolution qui va représenter le message que vous voudriez transmettre.",
"Soyez précis sur les détails qui feront avancer l’histoire.",
"N’hésitez pas à fournir des péripéties !"
]
]
// 240=2h 480=4h 720 = 12h 1440= 24h
const NOTIF_LIST = [
{subName: 'GENERAL', score: 1, pushTime: 360 * 60,  notifMessage: "\"What does the fox say ?\""},
{subName: 'GENERAL', score: 1, pushTime: 480 * 60,  notifMessage: "N'hésitez pas à partager Socially Fox autour de vous."},
{subName: 'GENERAL', score: 1, pushTime: 480 * 60,  notifMessage: "Parler de Socially Fox aux gens qui en ont besoin."},
{subName: 'GENERAL', score: 1, pushTime: 480 * 60, notifMessage: "Les astuces sont progressives c'est à dire de plus en plus difficile mais aussi efficace."},
{subName: 'GENERAL', score: 1, pushTime: 480 * 60,  notifMessage: "Ces astuces vous seront de plus en plus naturelles à force de les utiliser."},
{subName: 'GENERAL', score: 1, pushTime: 360 * 60,  notifMessage: "Chaque personne sait une chose que vous ignorez."},
{subName: 'GENERAL', score: 1, pushTime: 1440 * 60,  notifMessage: "À force de vous entraîner, vous maîtriserez ces astuces."},
{subName: 'GENERAL', score: 1, pushTime: 1440 * 60,  notifMessage: "Les chercheurs en psychologie expérimentale ont montré de nombreuses fois que nos décisions sont souvent très influencées par des éléments que l’on ne soupçonne pas."},
{subName: 'GENERAL', score: 1, pushTime: 720 * 60, notiMessage: "N'oubliez pas d'indiquer lorsque vous avez essayé une astuce pour gagner de l'expérience."},
{subName: 'Smile', score: 1, pushTime: 480 * 60, notiMessage: "« Un sourire est une clef secrète qui ouvre bien des coeurs. » Lord Robert Baden-Powell, Militaire et fondateur du scoutisme anglais."},
{subName: 'Smile', score: 2, pushTime: 720 * 60, notiMessage: "Le sourire avec les yeux, aussi appelé sourire de Duchenne, est le type de sourire le plus sincère."},
{subName: 'Smile', score: 4, pushTime: 1440*60, notiMessage: "Pourquoi n'essayez-vous pas de sourire à la prochaine personne qui croise votre regard ?"},
{subName: 'Nod', score: 1, pushTime: 480 * 60,notiMessage: "Une expérience de Gary Wells et Richard Petty publiée en 1980 a montré comment nos mouvements de tête peuvent influencer notre jugement."},
{subName: 'Mimic', score: 1, pushTime: 720 * 60,notiMessage: "« L'imitation est la plus sincère des flatteries. » de Charles Caleb Colton."},
{subName: 'BodyLangOpen', score: 1, pushTime: 720 * 60,notiMessage: "«Je ne recrute jamais un collaborateur qui, lors de l’entretien, fuit mon regard » Jean-Louis, directeur à la banque Dexia."},
{subName: 'DoorInFace', score: 1, pushTime: 240 * 60,notiMessage: "La porte au nez fut officiellement dévoilée en 1975 par Robert Cialdini lors d'une expérimentation. Il a demandaient à des étudiants d’aider un adolescent pendant deux heures par semaine durant deux ans… Puis il demande une sortie unique de deux heures, résultat trois fois plus d’acceptation !"},
{subName: 'Collision', score: 1, pushTime: 720 * 60,notiMessage: "L'abordage: On y va, on n'a rien à perdre, qu'à y gagner."},
{subName: 'Collision', score: 1, pushTime: 480 * 60,notiMessage: "Ne rangez pas les gens dans une boîte, parlez-leur, essayez de connaître leur histoire, vous serez surpris."},
{subName: 'Rewording', score: 1, pushTime: 240 * 60,notiMessage: "Reformuler aide à montrer que l'on a écouté son interlocuteur, à vérifier que l'on a compris le sens des propos, éventuellement à faire clarifier ou préciser ce sens."},
{subName: 'Rewording', score: 2, pushTime: 480 * 60,notiMessage: "La reformulation sert à améliorer l'écoute, à encourager la parole de chacun, à la mettre en valeur. Elle sert aussi à vérifier, à rectifier avec nuance, à dédramatiser ce qui a été prononcé."},
{subName: 'FeetInDoor', score: 1, pushTime: 480 * 60,notiMessage: "Le Pied-dans-la-Porte fonctionne même en séduction ! Après une petite escalade d’engagements, votre interlocuteur souriant cherchera à obtenir votre numéro."},
{subName: 'FeetInDoor', score: 2, pushTime: 480 * 60,notiMessage: "Le Pied-dans-la-Porte a été mise en évidence en 1966 par les chercheurs Freedman et Fraser."},
{subName: 'FeetInDoor', score: 3, pushTime: 480 * 60,notiMessage: "Pied-dans-la-Porte: Ce n’est pas pour autant que les vendeurs sont des manipulateurs. Ils ne font qu’utiliser une technique de vente."},
{subName: 'FakeLiberty', score: 1, pushTime: 720 * 60,notiMessage: "Méfiez-vous lorsqu'on vous donne des libertés avec des « C’est toi qui vois », « Comme tu veux » et « Livre à toi » etc."},
{subName: 'FakeSyllogisme', score: 1, pushTime: 480 * 60,notiMessage: "Exemple de faux syllogisme: «Tu veux pas m'acheter un nouveau téléphone, tu sais qu'il a les dernières nouveautés numérique. tu es donc contre le progrés techniques !»"},
{subName: 'Vulnerability', score: 1, pushTime: 720 * 60,notiMessage: "Aujourd’hui des recherches comme celles de Brené Brown nous indiquent que la vulnérabilité peut nous offrir des trésors cachés."},
{subName: 'Meeting', score: 1, pushTime: 480 * 60,notiMessage: "Réunissez les gens, faite le cupidon, lancez des flèches, vous en recevrez peut-être une en retour !"},
]



export default {
SUB_LIST,
DESCR_LIST,
NOTE_LIST,
NOTIF_LIST,
SAMPLE_LIST,
levelExp
}
