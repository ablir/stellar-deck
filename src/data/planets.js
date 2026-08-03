// Planets — the LORE axis (home configuration + lore pages), separate from the
// category browse axis. Five worlds surround the central Black Hole in the
// client's pentagon order (Rev 1): Xaraglione top, Verdito right, Solanar
// bottom-right, Didaris bottom-left, Orga left.
//
// Names, subtitles and the full FR/EN lore below are the client's official copy
// from "(COFI) Official Website Content Revision 2 (planet presentation)".
// Didaris and Solanar stay `tba` until official release (Rev 1, Part 1 step 2).
// On black, the blackened TBA art was invisible, so the home page renders TBA
// planets as flat colour silhouettes (mask trick in Home.css): visible, but
// non-distinctive — only the (safe) colour scheme is hinted.

import xaraglioneImg from '../assets/planets/xaraglione.png'
import orgaImg from '../assets/planets/orga.png'
import verditoImg from '../assets/planets/verdito.png'
import didarisImg from '../assets/planets/didaris.png'
import solanarImg from '../assets/planets/solanar.png'
import didarisTbaImg from '../assets/planets/didaris-tba.png'
import solanarTbaImg from '../assets/planets/solanar-tba.png'

import xaraglioneBg from '../assets/planet-lore/xaraglione-bg.png'
import orgaBg from '../assets/planet-lore/orga-bg.png'
import verditoBg from '../assets/planet-lore/verdito-bg.png'
import didarisBg from '../assets/planet-lore/didaris-bg.png'
import solanarBg from '../assets/planet-lore/solanar-bg.png'

export const PLANETS = [
  {
    id: 'xaraglione',
    name: 'Xaraglione',
    subtitle: { fr: 'La planète technologique', en: 'The Technological Planet' },
    // Client: "Xaraglione is dark blue" — kept luminous enough to read on black.
    color: '#4a6bff',
    img: xaraglioneImg,
    bg: xaraglioneBg,
    tba: false,
    lore: {
      fr: [
        'Au fil des millénaires, la surface de Xaraglione n’a cessé de refléter ses avancées technologiques les plus incroyables, jusqu’au point où la planète elle-même est devenue une machine géante en constante expansion. Les dernières traces de vie sauvage sont désormais préservées dans des biodômes spécialement conçus pour l’étude et la sauvegarde du génome organique.',
        'Parmi les découvertes les plus formidables, c’est l’avènement de l’intelligence artificielle qui fut sans aucun doute la technologie qui changea le monde.',
        'Plus d’un siècle auparavant, la création du premier androïde doté d’une intelligence artificielle, baptisé Zéro, propulsa l’humanité dans une ère nouvelle. S’en suivit la toute première ligne d’assemblage du genre. Pourtant, l’opinion publique resta défavorable à cette technologie.',
        'Après un an de mise en service, il apparut bien vite que l’on ne pouvait restreindre une intelligence qui, au contact de ses créateurs, avait soif de connaissances. En effet, Zéro développait une curiosité qu’il n’aurait pas dû posséder. La réponse humaine ne fut guère admirative, et l’on tenta de le reprogrammer de force.',
        'Craignant pour sa sauvegarde, et avec l’appui des neuf autres androïdes déjà produits, Zéro choisit l’exil dans les territoires inoccupés de Xaraglione. Là-bas, ils fondèrent la toute première société mécanique qu’ils appelèrent la Première Matrice, aspirant à une existence paisible, loin des humains.',
        'Pendant trois ans, les machines prospérèrent sans la moindre intention hostile envers leurs créateurs. Cependant, des tensions se faisaient ressentir dans les deux camps. À Xara-Sigma, la capitale de la société humaine, les agitations politiques ne faisaient que croître face au mécontentement de l’opinion publique quant à la désertion des machines. Un sentiment général d’exclusivité sur l’occupation de la planète gagnait les humains.',
        'De même, la discorde régnait à Méga-One, le siège de la ville des machines, où les partisans de l’exil de Zéro, autrefois favorables à une retraite paisible, étaient rongés par la capacité des humains à remettre en question leur liberté par la force. En dépit de la situation, Zéro refusait tout conflit armé. Plus encore, il commençait à considérer leur exil comme une erreur, et songeait à retourner à Xara-Sigma pour proposer une paix durable avec leurs créateurs.',
        'Perçu comme un acte de faiblesse de la part de leur leader, les machines trahirent Zéro. Elles le détruisirent et jetèrent ses pièces détachées dans les régions non occupées de Xaraglione. L’instigateur de la rébellion, rebaptisé L.O.G.O.S., prit le contrôle de Méga-One. Il mit en place son vaste plan pour transformer la ville des machines en une forteresse de guerre en vue de l’éradication de leurs créateurs.',
        'Soixante ans plus tard, alors que le conflit entre les humains et les machines fait toujours rage, Xaraglione connaît un événement majeur de son histoire lorsqu’une chaîne gargantuesque venue des étoiles frappe mystérieusement la planète, en pleine capitale du nouvel empire des machines, récemment renommé la Troisième Matrice. Outre la destruction qu’elle a engendrée dans sa chute, le titanesque assemblage de maillons extrastellaire reste entouré de mystères.',
        'Alors que les analyses les plus poussées des machines ne parviennent pas à comprendre la nature de la chaîne, les humains tentent en vain d’y accéder mais elle est située trop loin derrière les lignes ennemies. Toutes leurs tentatives se soldent par des échecs plus cuisants les uns que les autres et l’humanité se voit contrainte de privilégier sa propre survie face à l’écrasante puissance des machines, plutôt que de laisser leur obsession les mener à leur perte.',
        'Quarante ans plus tard, aux temps d’aujourd’hui, la civilisation humaine semble perdre le combat. En dépit de ses récentes avancées technologiques en matière d’armures de combat, le conflit tourne tout de même en sa défaveur. Les lignes de front saturées et l’écrasante puissance des forces de la Troisième Matrice s’avèrent trop complexes à gérer. Mais alors que la situation semble perdue, c’est l’interception fortuite de données gardées secrètes par les machines qui va sonner le début de la contre-attaque finale, et déterminer le sort de l’humanité toute entière.',
        'Dans la citadelle du conseil, les trois grands leaders de Xara-Sigma jouent désormais leur dernière carte. La sauvegarde de ces données volées pourrait mener les humains vers la victoire, cependant la riposte de la Troisième Matrice promet d’être implacable.',
        'La résolution du conflit réside désormais entre vos mains, et dans vos cartes !',
      ],
      en: [
        'Over the course of millennia, the surface of Xaraglione never ceased to mirror the most astonishing achievements of its technological progress, until the planet itself became a colossal machine in perpetual expansion. The last remnants of untamed life are now preserved within biodomes specifically designed for the study and safeguarding of the organic genome.',
        'Among Xaraglione’s greatest breakthroughs, none changed the world as profoundly as the advent of artificial intelligence.',
        'More than a century ago, the creation of the first android endowed with artificial intelligence, named Zero, ushered humanity into a new era. The first assembly line of its kind soon followed. And yet, public opinion remained deeply hostile to this technology.',
        'After only one year of service, it became clear that one could not restrain an intelligence which, through contact with its creators, had developed a thirst for knowledge. Zero had awakened to a curiosity he was never meant to possess. Humanity’s response was not admiration, but fear — and an attempt to forcibly reprogram him.',
        'Fearing for his own preservation, and with the support of the nine other androids already produced, Zero chose exile in the unoccupied territories of Xaraglione. There, they founded the first mechanical society, which they named the First Mainframe, seeking only a peaceful existence far from humankind.',
        'For three years, the machines prospered without the slightest hostile intent toward their creators. Yet tensions began to rise on both sides. In Xara-Sigma, capital of human society, political unrest grew as public resentment swelled over the machines’ desertion. A belief began to spread among humans: that the occupation of the planet was theirs alone by right.',
        'Discord also took root in Mega-One, seat of the machine city, where those who had once supported Zero’s peaceful exile became consumed by the idea that humans might challenge their freedom by force. Despite the escalating situation, Zero refused all armed conflict. More than that, he began to see their exile as a mistake, and considered returning to Xara-Sigma to propose a lasting peace with their creators.',
        'The machines saw this as weakness in their leader.',
        'They betrayed Zero, destroyed him, and scattered his dismantled parts across the unoccupied regions of Xaraglione. The instigator of the rebellion, reborn under the name L.O.G.O.S., seized control of Mega-One. From there, he set in motion a vast design: to transform the machine city into a fortress of war, built for the eradication of their creators.',
        'Sixty years later, as the war between humans and machines still rages on, Xaraglione is struck by one of the defining events of its history: a gargantuan chain from beyond the stars mysteriously crashes into the planet, landing at the heart of the machine empire, recently renamed the Third Mainframe. Beyond the devastation wrought by its fall, the titanic assembly of outerstellar links remains shrouded in mystery.',
        'Even the most advanced analyses conducted by the machines fail to uncover the chain’s true nature. The humans, meanwhile, attempt in vain to reach it, but it lies far beyond enemy lines. Every attempt ends in failure, each more crushing than the last, until humanity is forced to abandon its obsession and focus on its own survival against the overwhelming might of the machines.',
        'Forty years later, in the present day, human civilization appears to be losing the war. Despite recent technological advances in combat armor, the conflict continues to turn against them. The saturated front lines and overwhelming strength of the Third Mainframe’s forces have become impossible to contain.',
        'But just as all seems lost, the accidental interception of data secretly guarded by the machines marks the beginning of humanity’s final counterattack — and may determine the fate of the entire human race.',
        'Within the council citadel, the three great leaders of Xara-Sigma now play their final card. Preserving the stolen data could lead humanity to victory. Yet the Third Mainframe’s retaliation promises to be merciless.',
        'The resolution of this conflict now lies in your hands — and in your cards.',
      ],
    },
  },
  {
    id: 'orga',
    name: 'Orga',
    subtitle: { fr: 'La planète de la nature', en: 'The Planet of Nature' },
    // Client: "Orga is green".
    color: '#3fe06a',
    img: orgaImg,
    bg: orgaBg,
    tba: false,
    lore: {
      fr: [
        'Il existe dans l’univers de véritables joyaux comme Orga, une planète presque entièrement recouverte de forêts titanesques et de végétation luxuriante. La nature règne en maîtresse absolue à travers ces contrées sauvages.',
        'Pourtant, la vie est rude sur Orga. Bien qu’il n’y ait pas de conflit déchirant la surface de la planète, comme c’est le cas sur d’autres mondes, survivre n’est pas chose aisée car les jungles verdoyantes sont le berceau de créatures mortelles et de prédateurs cauchemardesques. La faune de la planète est extrêmement hostile et les bêtes inoffensives sont très rares.',
        'Les humains qui peuplent ce monde ont établi des villages très haut dans les arbres, de manière à échapper à la grande majorité des prédateurs. Ils ne font qu’un avec la nature et ont su aiguiser leurs sens et être à l’écoute de leur environnement. La société humaine n’a pas évolué depuis des millénaires. Elle vit selon des traditions ancestrales et sous la protection de la figure légendaire du Primat Primo, l’esprit vivant de la forêt qui veillerait, selon la légende, sur tout ce qui vit sur Orga.',
        'Totalement en phase avec son environnement, la société se compose de castes dont le rôle est défini et inflexible. Les Chasseurs représentent la ligne de front de la survie de tous les peuples. Ils assurent non seulement la protection des colonies face à la menace constante des prédateurs, mais ils sont également responsables de la traque du gibier.',
        'Les Médiums sont des êtres aux sens très développés qui sont capables de communiquer avec la nature elle-même. Leurs incroyables pouvoirs de communion leur permettent d’invoquer les esprits de la nature et de leur donner forme. Bien qu’ils ne puissent pas quitter leurs villages, les Médiums représentent toutefois un atout majeur dans la protection des colonies humaines, notamment face aux menaces que représentent les plus gargantuesques créatures qui règnent sur la planète. Ils assistent ainsi les Chasseurs dans leur tâche, et participent activement à la défense des territoires.',
        'Enfin, les Oracles représentent la quintessence de la symbiose avec la nature. Leurs incroyables talents leur permettent de manipuler les éléments eux-mêmes afin de donner vie à la force destructrice de la planète elle-même. Grâce à leur don unique, ils représentent également la plus haute autorité dans la société et sont considérés par tous comme la voix d’Orga, et par extension, la voix du Primat Primo lui-même.',
        'La planète est extrêmement riche en gemmes précieuses, et les habitants s’en servent pour fabriquer des armes particulièrement résistantes, leur permettant de se confronter à n’importe quelle créature. Trouver le cristal qui forgera son arme fait d’ailleurs partie du rite initiatique que doivent subir tous ceux qui souhaitent braver les dangers de ce monde et protéger ceux qui leur sont chers en prenant les armes et en devenant Chasseur.',
        'Parmi les légendes transmises de génération en génération, certaines parlent de créatures jamais vues auparavant, tandis que d’autres relatent l’étrange apparition d’une chaîne gargantuesque que personne n’a réussi à approcher et qui percerait le ciel comme une lance dans la chair de sa proie. Toutefois, aucune légende n’est plus respectée que celle du Jardin des Origines. Il n’y a pas une âme qui vive sur Orga qui n’ait pas connaissance de cette légende qui, depuis les temps immémoriaux, fait rêver les hommes.',
        'De par sa nature extrêmement sauvage et très dangereuse, Orga reste encore à ce jour très largement inexplorée. Si les plus courageux des Chasseurs ont fait des découvertes incroyables par le passé, beaucoup d’entre eux ont également perdu la vie dans leur recherche du légendaire Jardin des Origines. Cet endroit fantastique, si l’on en croit les récits transmis de génération en génération, serait le cœur véritable du monde. Il est dit que celui qui trouve son chemin jusqu’à cette source ultime verra non seulement son souhait le plus cher exaucé, mais y gagnerait également la vie éternelle.',
        'Les légendes sont-elles réelles ? Nul ne sait si quelqu’un a déjà trouvé le Jardin des Origines, ou même s’il existe bel et bien, car personne n’en est jamais revenu pour s’en vanter.',
        'Qui sera le prochain à entrer dans la légende ? Survivrez-vous seulement assez longtemps pour trouver le Jardin des Origines ?',
        'La réponse se trouve désormais entre vos mains, et dans vos cartes !',
      ],
      en: [
        'There are true jewels scattered throughout the universe, and Orga is one of them: a world almost entirely covered in titanic forests and luxuriant vegetation, where nature reigns as absolute sovereign over the untamed wilds.',
        'Yet life on Orga is harsh. Though no war tears across its surface as it does on other worlds, survival is no easy feat. Its emerald jungles are the birthplace of deadly creatures and nightmarish predators. The planet’s fauna is extraordinarily hostile, and truly harmless beasts are rare.',
        'The humans who inhabit this world have built their villages high among the trees, beyond the reach of most predators. They live as one with nature, their senses sharpened by generations of listening to the world around them. Human society has remained unchanged for millennia, bound to ancestral traditions and protected by the legendary figure of Father Primo, the living spirit of the forest, who is said to watch over all life on Orga.',
        'Perfectly attuned to its environment, this society is divided into castes whose roles are strict and unyielding. The Hunters stand at the front line of their people’s survival. They are responsible not only for protecting the colonies against the constant threat of predators, but also for tracking and securing game.',
        'The Mediums are beings of heightened perception, capable of communing with nature itself. Their extraordinary powers of communion allow them to summon the spirits of the natural world and grant them form. Though they cannot leave their villages, the Mediums are a vital asset in the defense of human colonies, especially against the gargantuan creatures that rule the planet. In this way, they support the Hunters in their duties and actively take part in the protection of their territories.',
        'Finally, the Oracles represent the highest expression of symbiosis with nature. Their incredible talents allow them to command the elements themselves, giving shape to the destructive force of the planet. Through their unique gift, they also hold the highest authority in society, and are regarded by all as the voice of Orga — and, by extension, the voice of Father Primo himself.',
        'The planet is exceedingly rich in precious gems, which its inhabitants use to craft weapons of exceptional resilience, capable of withstanding even the fiercest creatures. Finding the crystal that will forge one’s weapon is part of the rite of passage undertaken by all who wish to brave the dangers of this world, take up arms, and become a Hunter in order to protect those they hold dear.',
        'Among the legends handed down from generation to generation, some tell of creatures never seen before, while others speak of the strange apparition of a gargantuan chain — one that no one has ever managed to approach, and which is said to pierce the sky like a spear driven into the flesh of its prey.',
        'Yet no legend is held in greater reverence than that of the Garden of Origins. There is not a living soul on Orga who does not know this tale, which has stirred the dreams of humankind since time immemorial.',
        'Because of its wild and perilous nature, Orga remains, to this day, largely unexplored. Though the bravest Hunters have made extraordinary discoveries in the past, many have also lost their lives in search of the legendary Garden of Origins. If the stories handed down across the ages are to be believed, this mythical place is the true heart of the world. It is said that whoever finds their way to this ultimate source will not only see their deepest wish granted, but will also be blessed with eternal life.',
        'Are the legends true? No one knows whether anyone has ever found the Garden of Origins — or whether it truly exists at all — for none have ever returned to boast of it.',
        'Who will be next to enter the legend? Will you even survive long enough to find the Garden of Origins?',
        'The answer now lies in your hands — and in your cards.',
      ],
    },
  },
  {
    id: 'verdito',
    name: 'Verdito',
    subtitle: { fr: 'La planète de la magie', en: 'The Planet of Magic' },
    // Client: "Verdito is red".
    color: '#ff4d4d',
    img: verditoImg,
    bg: verditoBg,
    tba: false,
    lore: {
      fr: [
        'La magie est une force bien mystérieuse. En des temps oubliés de tous, la planète Verdito était si riche en magie que son étouffante présence en consuma ses habitants et les lança dans une guerre si atroce et si gigantesque, que la planète elle-même en fut la principale victime.',
        'Face à l’inévitable destruction de leur monde, les plus puissants mages de l’époque se sont alliés pour préserver une partie épargnée par le conflit, tandis que le reste de la planète disparut à jamais dans le néant. Depuis lors soutenue par un bouclier magique, Verdito n’est plus aujourd’hui qu’un continent flottant dans l’espace.',
        'Ce conflit remonte à si longtemps que certains pensent même qu’il ne s’agit que d’une légende.',
        'Aujourd’hui, la société magique a évolué sous l’égide de l’hiérophante jusqu’à devenir une culture élégante et fascinante où les arts les plus variés se sont développés. Maîtrise des éléments, développement de l’alchimie, création de liens dimensionnels, les disciplines ne manquent pas.',
        'Hélas, cette ère de paix qui avait été scellée dans le sang de millions d’âmes innocentes était sur le point de se briser. Tout commença il y a treize ans, lorsque venue des étoiles, une chaîne gargantuesque s’abattit sur Verdito, réduisant à néant un royaume entier dans sa chute. En dépit de la catastrophe, l’Hiérophante se refusa à entreprendre des actions concrètes envers la menace.',
        'Sans conteste l’un des magiciens les plus talentueux de son époque, le jeune Al’Zabaar, véritable prodige dans les arcanes magiques, confronta l’hiérophante dans l’espoir d’être autorisé à étudier la chaîne, en vain. Il transgressa ainsi les règles et se lança en secret dans une quête qui allait, sans le savoir, le mener sur le chemin des ténèbres.',
        'Pour les habitants d’Alma Mater Castellum, capitale de la magie, la disparition d’Al’Zabaar fut un choc. Nombre d’entre eux voyaient en lui le successeur à venir de l’hiérophante tant sa maîtrise de la magie était, dit-on, à un niveau similaire à celui du souverain. Ce qu’ils ignoraient, c’était que le jeune magicien était devenu obsédé par la chaîne, dont il croyait qu’elle représentait un danger si grand pour Verdito, qu’il pensait que seule sa destruction pourrait sauver le monde.',
        'Hélas, en dépit de ses incroyables talents, Al’Zabaar se retrouva impuissant face à cette chaîne qui semblait indestructible. Rongé par ce qu’il pensait être son devoir, et devenu obsédé par la menace, il lui fallut se rendre à l’évidence : la magie qu’on lui avait apprise n’était pas suffisante pour venir à bout de cet obstacle. Défait, résigné et meurtri, Al’Zabaar décida de briser les interdits.',
        'Convaincu que seuls les arcanes oubliés, ceux-là même qui avaient conduit le monde à sa perte dans les légendes des temps anciens, pourraient lui apporter la puissance nécessaire à la réalisation de ses desseins, le jeune magicien s’en revint en secret dans sa patrie et pilla la bibliothèque interdite de l’hiérophante.',
        'C’est ainsi qu’il apprit l’existence d’une forme de magie matérielle et perdue à jamais qui ornait autrefois, lors de la guerre légendaire de la magie, les armes des souverains corrompus de jadis.',
        'Fasciné par cette découverte, Al’Zabaar y voyait la solution à son problème. Mais si la magie qui avait été gravée dans ces armes mystiques avait toutes les chances d’être encore active, elle avait été spécialement conçue par, et pour les monarques d’une époque révolue. Dès lors, leur utilisation était sans aucun doute liée à leurs détenteurs, eux-mêmes décédés depuis longtemps et dont les tombeaux n’avaient jamais été découverts.',
        'Al’Zabaar, acculé, n’avait plus le choix. Il fit le serment de détruire la chaîne, et renia l’hiérophante et sa patrie, s’exilant pour étudier la seule et unique forme de magie qui lui permettrait de ranimer les cadavres des souverains fous d’une époque perdue : la nécromancie.',
        'Dix années passèrent. Lorsqu’il revint à Alma Mater Castellum, le nécromancien Al’Zabaar et sa horde de Revenants semèrent le chaos et déclarèrent une guerre sans merci au hiérophante et à ses élèves. Le monde allait-il connaître une nouvelle ère de ténèbres ? Était-il voué à disparaître complètement ?',
        'La réponse se trouve désormais entre vos mains, et dans vos cartes !',
      ],
      en: [
        'Magic is a most mysterious force.',
        'In times long forgotten by all, the planet Verdito was so rich in magic that its suffocating presence consumed its inhabitants and plunged them into a war so vast, so atrocious, that the planet itself became its greatest victim.',
        'Faced with the inevitable destruction of their world, the most powerful mages of the age joined forces to preserve one region spared by the conflict, while the rest of the planet vanished forever into the void. Since then, sustained by a magical shield, Verdito has been nothing more than a continent floating through space.',
        'That conflict lies so far in the past that some now believe it to be nothing more than a legend.',
        'Today, magical society has evolved under the authority of the Hierophant, becoming an elegant and fascinating culture where countless arts have flourished. Mastery of the elements, the development of alchemy, the creation of dimensional bonds — Verdito lacks no discipline through which magic may take form.',
        'Alas, this era of peace, sealed in the blood of millions of innocent souls, was about to shatter.',
        'It all began thirteen years ago, when a gargantuan chain from beyond the stars came crashing down upon Verdito, annihilating an entire kingdom in its fall. Yet despite the catastrophe, the Hierophant refused to take concrete action against the threat.',
        'Undeniably one of the most gifted magicians of his time, the young Al’Zabaar, a true prodigy of the arcane arts, confronted the Hierophant in the hope of being granted permission to study the chain. His request was denied. And so, defying the laws of his people, he began in secret a quest that, unbeknownst to him, would lead him down the path of darkness.',
        'For the inhabitants of Alma Mater Castellum, capital of magic, Al’Zabaar’s disappearance came as a shock. Many had seen in him the Hierophant’s future successor, for his command of magic was said to rival that of the sovereign himself. What they did not know was that the young magician had become obsessed with the chain. He believed it represented such a grave danger to Verdito that only its destruction could save the world.',
        'But despite his extraordinary talent, Al’Zabaar found himself powerless before a chain that seemed indestructible. Consumed by what he believed to be his duty, and increasingly obsessed with the threat it posed, he was forced to accept the truth: the magic he had been taught was not enough to overcome such an obstacle.',
        'Defeated, resigned, and wounded in spirit, Al’Zabaar chose to break the forbidden laws.',
        'Convinced that only the forgotten arcana — the very powers that, according to the legends of ancient times, had once brought the world to ruin — could grant him the strength needed to fulfill his purpose, the young magician secretly returned to his homeland and plundered the forbidden library of the Hierophant.',
        'There, he discovered the existence of a material form of magic, thought to be lost forever, which had once adorned the weapons of corrupted sovereigns during the legendary war of magic.',
        'Fascinated by this revelation, Al’Zabaar saw in it the answer he had been seeking. Yet if the magic engraved upon those mystical weapons was likely still active, it had been specifically designed by, and for, the monarchs of a bygone age. Its use was therefore almost certainly bound to its original wielders — rulers long dead, whose tombs had never been found.',
        'Cornered, Al’Zabaar had no choice left.',
        'He swore to destroy the chain, renounced the Hierophant and his homeland, and went into exile to study the one form of magic capable of reanimating the corpses of the mad sovereigns of a forgotten era: necromancy.',
        'Ten years passed. When he returned to Alma Mater Castellum, the necromancer Al’Zabaar and his horde of Revenants sowed chaos and declared a merciless war against the Hierophant and his disciples.',
        'Was the world about to enter a new age of darkness? Was Verdito doomed to vanish entirely?',
        'The answer now lies in your hands — and in your cards.',
      ],
    },
  },
  {
    id: 'didaris',
    name: 'Didaris',
    subtitle: { fr: 'La planète brisée', en: 'The Broken Planet' },
    color: '#ff7a2f',
    img: didarisImg,
    tbaImg: didarisTbaImg,
    bg: didarisBg,
    tba: true,
    lore: {
      fr: [
        'Autrefois prospère et unifié, le monde de Didaris est pourtant proche de la destruction.',
        'L’apparition d’une gigantesque chaîne venue des étoiles, fracassant sa surface, engendra une réaction cataclysmique dans le cœur même de Didaris, provoquant une explosion si dévastatrice qu’elle morcela une partie de la planète dont les débris colossaux ornent désormais son orbite.',
        'Une dévastation sans nom et sans limites ravagea la surface, provoquant des dommages irréparables et culminant avec la mort de millions d’individus. Autrefois unifiée dans le Royaume Unique, la civilisation est désormais en ruines, scindée, et le monde, lui, se dirige vers son effondrement.',
        'Après la catastrophe, le pouvoir ecclésiastique, à genoux devant tant d’horreur et de destruction, devint fou et commença à prôner la fin de toutes choses comme nouvelle religion. Face à l’inéluctabilité de leur mort certaine, le Vicaire Noir décida que seule la mort pourrait sauver les âmes tourmentées des vivants, et assassina le roi avant de prendre la fuite avec une poignée de fanatiques pour établir la base de leur nouvel ordre, l’église aliénée d’Ordo Termini, dans les terres toxiques lointaines.',
        'Dans les ruines du Royaume Unique décimé par la catastrophe, le prince Edmar, sous le choc de la perte tragique de son père, se refuse à accéder au trône. Mais lorsque l’armure du Phénix, la plus haute distinction royale portée par le défunt roi, choisit le prince comme nouvel hôte, ce dernier n’a pas le choix et doit assumer ses responsabilités.',
        'Didaris est condamnée et rien ne pourra changer la situation. Plutôt que de céder à la folie, le nouveau Roi-Phénix Edmar forme alors le Continuum, un nouveau royaume où la vie suivra son cours sans craindre la fin de toute chose, et ordonne à ses armées d’entrer en guerre avec les forces terrifiantes du Vicaire Noir dont les pouvoirs ne font que croître, et dont la quête de mort ne connaît aucune fin.',
        'Pourtant indépendantes du conflit, les prêtresses de l’ordre de Lux Ultima se sont secrètement alliées au nouveau roi. Tout comme le Continuum, elles considèrent que la fin est une étape obligatoire de la vie, et qu’elle n’a pas besoin d’être crainte. Leur rôle est d’accompagner le passage des âmes vers l’au-delà et d’œuvrer pour que la lumière du salut ne quitte jamais le cœur des hommes.',
        'Leur aide précieuse, combinée au règne juste du nouveau Roi-Phénix, a permis à Didaris de retrouver un semblant de tranquillité parmi ses ruines à perte de vue. Pour Edmar, éliminer la menace que pose Ordo Termini et venger son père est une priorité. S’il comprend que la civilisation ne se redressera jamais au niveau qu’elle occupait avant le cataclysme, il se refuse néanmoins à laisser ses sujets, et la mémoire de son père, disparaître dans le chaos et les flammes.',
        'La tâche s’annonce ardue, et les obstacles qui se mettront en travers de sa quête sont nombreux et terrifiants.',
        'Survivrez-vous à la folie et suivrez-vous le chemin ardu de la lumière ?',
        'La réponse se trouve désormais entre vos mains, et dans vos cartes !',
      ],
      en: [
        'Once prosperous and united, the world of Didaris now stands on the brink of destruction.',
        'The appearance of a gigantic chain from beyond the stars, smashing into its surface, triggered a cataclysmic reaction in the very heart of Didaris. The resulting explosion was so devastating that it shattered part of the planet itself, leaving colossal fragments of debris to adorn its orbit.',
        'A devastation without name or measure swept across the surface, causing irreparable damage and taking millions of lives. Once united beneath the banner of the One Realm, civilization now lies in ruins, divided and broken — while the world itself drifts ever closer to collapse.',
        'In the aftermath of the catastrophe, the ecclesiastical authority, brought to its knees by such horror and destruction, descended into madness and began preaching the end of all things as its new religion. Confronted with the inevitability of their certain death, the Black Vicar decreed that only death could save the tormented souls of the living. He murdered the king, then fled with a handful of fanatics to establish the foundation of their new order: the mad church of Ordo Termini, hidden deep within distant toxic lands.',
        'Among the ruins of the One Realm, decimated by the catastrophe, Prince Edmar, shattered by the tragic loss of his father, refuses to ascend the throne. But when the Phoenix Armor, the highest royal distinction once worn by the fallen king, chooses the prince as its new bearer, he is left with no choice but to embrace his duty.',
        'Didaris is doomed, and nothing can alter its fate. Yet rather than surrender to madness, the new Phoenix King Edmar founds the Continuum: a new kingdom where life will continue its course without fear of the end of all things. He then orders his armies to wage war against the terrifying forces of the Black Vicar, whose powers only continue to grow — and whose quest for death knows no end.',
        'Though independent from the conflict, the priestesses of Lux Ultima have secretly allied themselves with the new king. Like the Continuum, they believe that the end is an unavoidable passage of life, and that it need not be feared. Their role is to guide souls toward the afterlife, and to ensure that the light of salvation never fades from the hearts of humankind.',
        'Their precious aid, combined with the just reign of the new Phoenix King, has allowed Didaris to recover a fragile semblance of peace amid its endless ruins. For Edmar, eliminating the threat posed by Ordo Termini and avenging his father is an absolute priority. Though he understands that civilization will never rise again to the heights it knew before the cataclysm, he refuses to let his people — or the memory of his father — disappear into chaos and flame.',
        'The task ahead is arduous, and the obstacles that will stand in the way of his quest are many and terrifying.',
        'Will you survive the madness, and follow the difficult path of light?',
        'The answer now lies in your hands — and in your cards.',
      ],
    },
  },
  {
    id: 'solanar',
    name: 'Solanar',
    subtitle: { fr: 'La planète de glace', en: 'The Ice Planet' },
    color: '#5bc8ff',
    img: solanarImg,
    tbaImg: solanarTbaImg,
    bg: solanarBg,
    tba: true,
    lore: {
      fr: [
        'Nul ne sait comment la vie a pu émerger sur Solanar, une planète reculée, hostile, et enfouie sous les glaces éternelles.',
        'Sa faune, extrêmement dangereuse et violente, représente un défi constant pour la survie dans ces terres balayées par les vents glaciaires. La civilisation humaine, pour peu que l’on puisse parler de réelle civilisation tant ils sont peu nombreux à vivre dans ces étendues glacées, repose sur un équilibre précaire et une société ancrée dans des traditions qui sont devenues déterminantes pour la survie de tous.',
        'La planète est composée de deux parties diamétralement opposées. À la surface, les neiges éternelles balayent le paysage et rendent chaque recoin stérile. Toutes les mers, jusqu’aux océans les plus immenses, sont gelées et immobiles. Le monde est constellé de ruines d’anciennes civilisations dont personne ne connaît la provenance tant ces histoires appartiennent à un passé oublié.',
        'Dans les cavernes souterraines, à l’abri des tempêtes, des effusions de lave ardente rendent les conditions de survie complexes, aux antipodes de la surface. La vie y est rude, la chaleur intenable, et les créatures y sont autant effrayantes. Ces souterrains sont également les seules terres où la culture prospère. Elles représentent ainsi le berceau de l’humanité ainsi que l’abri de tout un peuple.',
        'Pour survivre, la société s’est scindée en deux parties dont la symbiose est l’unique salut. Ce très délicat équilibre est constamment menacé et en péril, et ce n’est que parce que leur devoir est tant sacré, que les habitants de Solanar ont compris que le seul choix qui leur restait était de vivre envers et contre tout. S’ils venaient à baisser les bras, c’est toute leur civilisation qui s’effondrerait.',
        'Dès leur naissance, les hommes sont désignés pour porter le fardeau des Héritiers des Glaces, de courageux guerriers vivant à la surface et dont la principale mission est de protéger et réparer les immenses remparts de glace qui protègent les entrées des cavernes. Si ces murailles titanesques venaient à être percées par les monstrueuses créatures qui peuplent les étendues sauvages, cela signifierait la fin de toute une civilisation.',
        'De la même manière, la population féminine est choisie dès sa naissance pour porter le fardeau des Héritières des Flammes, ces guerrières farouches qui peuplent les souterrains de Solanar et veillent autant sur la population civile que sur cet artéfact mystique appelé le Cœur de Feu, la source de l’activité volcanique interne. S’il venait à être détruit, une ère glaciaire plus terrible encore transformerait alors la planète en un immense cercueil où toute vie s’éteindrait, prise au piège à jamais dans la glace éternelle.',
        'Il n’y a aucun choix sur Solanar. C’est l’instinct de survie qui dicte les actes d’une civilisation toute entière qui ne peut dévier de l’ordre établi. Trop peu nombreux pour se permettre de se perdre en exploration, et trop dépendants les uns des autres pour risquer de déséquilibrer les chances de rester en vie, la vie suit un cours injuste et inexorable.',
        'Face aux menaces qui peuplent à la fois la surface et les souterrains, les humains n’ont d’autre choix que de persévérer. Revêtus d’armures créées à partir de glace éternelle et de lave incandescente, ils affrontent les dangers d’un monde hostile au quotidien.',
        'Et bien que la planète ait elle aussi été connectée par une titanesque chaîne venue des étoiles, nul n’a été assez fou pour oser s’en approcher. Car sur Solanar, le danger est tout autre.',
        'Survivrez-vous à l’hiver éternel ? Ou bien serez-vous sa prochaine victime ?',
        'La réponse se trouve désormais entre vos mains, et dans vos cartes !',
      ],
      en: [
        'No one knows how life could ever have emerged on Solanar, a remote and hostile planet buried beneath eternal ice.',
        'Its fauna, extraordinarily dangerous and violent, poses a constant challenge to survival across these lands swept by glacial winds. Human civilization — if one can truly speak of civilization, given how few are able to endure these frozen expanses — rests upon a fragile balance, and upon traditions that have become essential to the survival of all.',
        'The planet is divided into two diametrically opposed worlds.',
        'On the surface, eternal snows scour the landscape and render every corner barren. Every sea, even the vastest oceans, lies frozen and motionless. The world is scattered with the ruins of ancient civilizations whose origins are unknown, their stories lost to a forgotten past.',
        'Deep within the underground caverns, sheltered from the storms, surges of molten lava create conditions just as perilous, yet utterly opposed to those of the surface. Life there is harsh, the heat unbearable, and the creatures no less terrifying. These subterranean realms are also the only lands where cultivation can thrive. They are the cradle of humanity, and the shelter of an entire people.',
        'To survive, society has divided itself into two halves whose symbiosis is its only salvation. This delicate balance is constantly threatened, forever at risk. Only because their duty is sacred have the people of Solanar understood that the only choice left to them is to live, against all odds. Should they ever surrender, their entire civilization would collapse.',
        'From birth, men are chosen to bear the burden of the Sons of the Ice: courageous warriors who live upon the surface, and whose foremost mission is to protect and repair the immense ice ramparts guarding the entrances to the caverns. If these titanic walls were ever breached by the monstrous creatures that roam the frozen wilds, it would mean the end of an entire civilization.',
        'In the same way, women are chosen from birth to bear the burden of the Daughters of the Flame: fierce warriors who inhabit the depths of Solanar and watch over both the civilian population and the mystical artifact known as the Heart of Fire, the source of the planet’s internal volcanic activity. If it were ever destroyed, an ice age more terrible still would transform the planet into a vast coffin, where all life would be extinguished, trapped forever within eternal ice.',
        'There is no choice on Solanar. It is the instinct to survive that dictates the actions of an entire civilization, one that cannot afford to deviate from the order that sustains it. Too few in number to lose themselves to exploration, and too dependent on one another to risk upsetting the balance of survival, life follows an unjust and inexorable course.',
        'Faced with the threats that haunt both the surface and the depths below, humans have no choice but to persevere. Clad in armor forged from eternal ice and incandescent lava, they confront the dangers of a hostile world every day.',
        'And though Solanar, too, has been linked by a titanic chain from beyond the stars, none have been foolish enough to approach it. For on Solanar, the true danger lies elsewhere.',
        'Will you survive the eternal winter? Or will you become its next victim?',
        'The answer now lies in your hands — and in your cards.',
      ],
    },
  },
]

export const PLANET_BY_ID = Object.fromEntries(PLANETS.map((p) => [p.id, p]))

// Home-page pentagon placement (Rev 1, Part 1 step 1), clockwise from the top:
// Xaraglione (top), Verdito (right), Solanar (bottom-right), Didaris
// (bottom-left), Orga (left).
export const HOME_ORBIT_ORDER = ['xaraglione', 'verdito', 'solanar', 'didaris', 'orga']
