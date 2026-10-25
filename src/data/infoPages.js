// Long-form editorial pages of the left menu, keyed by the menu item id
// (see siteMenu.js). Each page is { fr, en } → { title, intro, sections,
// signature }. Copy is the client's official text, verbatim — "IA COFI.docx"
// (WEBSITE WORK 25.10.26). Pages without an entry here fall back to the
// "coming soon" stub in InfoPage.jsx.

export const INFO_PAGES = {
  ai: {
    fr: {
  "title": "L'intelligence artificielle et nous",
  "intro": "Nous vous invitons à prendre connaissance de notre vision, de nos choix et notre engagement pour une création humaine à l'ère de l'intelligence artificielle.",
  "sections": [
    {
      "heading": "Une question qui mérite toute notre attention.",
      "paragraphs": [
        "L'IA occupe aujourd'hui une place, disons-le clairement, de plus en plus grandissante dans le domaine professionnel. Son développement ultra-rapide transforme les méthodes de travail, ouvre de nouvelles possibilités et soulève, dans le même temps, des interrogations profondes sur l'avenir, et sur nous-mêmes.",
        "Nous sommes conscients que son utilisation suscite des réactions parfois très critiques, dans bien des domaines, et aussi dans les univers du jeu, de l'illustration et du divertissement. Et c’est parce que ces préoccupations sont légitimes qu’elles méritent d'être entendues.",
        "Derrière chaque œuvre artistique se trouvent un savoir-faire, des années d'apprentissage, une sensibilité et une identité qui appartiennent à son créateur. Les inquiétudes concernant la rémunération des artistes, l'utilisation de leurs œuvres pour entraîner des modèles d'intelligence artificielle ou encore la place de l'humain dans les métiers créatifs, on ne rien décemment rien ignorer de tout cela.",
        "Malmaison Games n’a pas été créée avec l’intention de minimiser ces questions, et encore moins prétendre détenir la réponse idéale à un débat aussi complexe.",
        "Nous souhaitons simplement expliquer, avec sincérité et transparence, la place qu'occupe l'intelligence artificielle dans le développement de Chains of Innocence, mais la place qu’elle occupera dans nos futurs projets."
      ]
    },
    {
      "heading": "Derrière un projet, il y a d'abord des êtres humains.",
      "paragraphs": [
        "Avant d'être un jeu de cartes, Chains of Innocence est une idée née de l'imagination humaine, devenue progressivement un univers à part entière après une transformation qui a pris vingt ans, rien de moins que ça. Le projet étant passé d’extension de Yu-Gi-Oh, à un jeu de cartes inédit sur la saga Final Fantasy, il n’a trouvé son univers propre qu’en Août 2025.",
        "Son histoire, ses civilisations, ses personnages, ses mécaniques et son identité ont nécessité une longue de réflexion, et un certain temps de développement.",
        "Ce projet n'est pas le résultat d'une production industrielle automatisée. Il est porté par une structure française indépendante, fondée autour de la passion de son créateur, et prend forme grâce à un investissement personnel à la fois quantitatif et qualitatif, mais aussi et surtout grâce à la contribution de partenaires et de professionnels.",
        "Concevoir un jeu ne consiste pas uniquement à produire des illustrations ou à assembler des éléments graphiques. C'est aussi construire un univers cohérent, inventer des règles, imaginer des interactions, établir des équilibres, résoudre des problèmes, expérimenter, recommencer et prendre des milliers de décisions.",
        "C'est également organiser une véritable production : rechercher des partenaires, échanger avec des fabricants, concevoir des supports physiques, contrôler leur qualité et préparer leur arrivée entre les mains des joueurs.",
        "Toutes ces dimensions reposent sur des initiatives, des responsabilités et des décisions humaines.",
        "L'intelligence artificielle contribue sans aucun doute à alléger certaines étapes de ce travail, mais elle ne porte ni l'ambition du projet ni la responsabilité de son aboutissement.",
        "Derrière chaque décision importante de Chains of Innocence, il y a notre équipe."
      ]
    },
    {
      "heading": "Pourquoi faisons-nous appel à l'intelligence artificielle ?",
      "paragraphs": [
        "Nous avons fait le choix d'intégrer des outils d'intelligence artificielle générative dans notre processus de développement, notamment dans le domaine de la création visuelle.",
        "Il est de notre avis très important de le reconnaître ouvertement, sans chercher à masquer leur contribution.",
        "Développer un jeu de cartes original représente un investissement important, tant sur le plan financier que sur le plan humain. Chaque élément entraîne des coûts : illustrations, conception graphique, prototypes, impression, conditionnement, logistique, contrôles et commercialisation.",
        "Pour une petite structure qui ne dispose pas des moyens financiers, effectifs ou ressources d'un grand éditeur, ces contraintes déterminent directement ce qu'il est possible de réaliser.",
        "L’IA, on aime ou on n’aime pas. C’est à chacun d’en faire sa propre expérience. Mais elle nous permet d'explorer des directions créatives, de construire des propositions visuelles, d'expérimenter différentes approches et de développer un univers graphique avec des ressources plus limitées.",
        "Elle offre ainsi des possibilités qui auraient pu demeurer financièrement inaccessibles.",
        "Cela ne signifie pourtant pas que le travail artistique humain est superflu, interchangeable ou dépourvu de valeur. Tout au contraire.",
        "Nous reconnaissons pleinement les compétences, l'expérience et la sensibilité des artistes professionnels. Nous savons également qu'un résultat généré par une intelligence artificielle ne se confond pas avec le travail d'un illustrateur qui imagine et réalise une œuvre personnelle.",
        "Notre démarche ne consiste pas à affirmer que ces deux processus sont identiques, mais à expliquer pourquoi nous avons choisi de recourir à ces technologies dans le contexte particulier de notre développement.",
        "Pour bous, l'IA est un moyen de concrétiser une ambition créative, et non une volonté de dévaloriser celles et ceux qui vivent de leur art, et pour lesquels nous avons le plus grand respect pour leur talent et leur vision créative unique et merveilleuse."
      ]
    },
    {
      "heading": "Un outil de création, pas une vision créative.",
      "paragraphs": [
        "L'utilisation de l’IA ne fait pas disparaître l'intervention humaine dans notre process. Elle en transforme certaines modalités.",
        "Définir une identité artistique, imaginer un personnage, déterminer son apparence, rechercher une cohérence entre plusieurs centaines d'éléments ou décider qu'un résultat correspond à l'univers souhaité nécessite une direction créative. La direction artistique est par ailleurs le rôle du créateur du projet, Joffrey Jualan.",
        "Ces outils génératifs ne font que proposer des résultats, mais ces résultats ne constituent pas, à eux seuls, une vision d'ensemble. Nous générons en moyenne une dizaine d’illustrations à partir de nos prompts avant de valider une illustration (et nos prompts font un minimum de 20.000 caractères, de vrais romans, car nous savons exactement où nous souhaitons diriger notre univers).",
        "Dans Chains of Innocence, ces technologies s'inscrivent dans un processus plus vaste, au service d'un univers, de règles et d'une identité développés sur plusieurs années. Pour ce faire, notre exigence demeure la même, quelle que soit la méthode employée.",
        "Nous estimons que la valeur d'un projet réside aussi dans l'ensemble des idées, des choix, du travail et des responsabilités propres à l’humain, et nécessaires pour lui donner vie.",
        "Cela ne retire rien à l'importance de ses composantes artistiques ni au débat légitime entourant leurs conditions de création."
      ]
    },
    {
      "heading": "Nous comprenons les inquiétudes du monde artistique.",
      "paragraphs": [
        "Nous savons que l’IA générative ne représente pas uniquement une nouvelle catégorie d'outils.",
        "Elle soulève des questions importantes concernant les droits des auteurs, la provenance des données utilisées pour entraîner les modèles, la concurrence économique avec les artistes, la transformation des professions créatives et les conséquences environnementales de ces technologies.",
        "Nous comprenons que certaines personnes considèrent leur utilisation comme incompatible avec leur vision de la création artistique, et ce désaccord mérite tout notre respect.",
        "Nous ne souhaitons pas opposer les créateurs indépendants aux illustrateurs, ni présenter les difficultés financières des petites entreprises comme une réponse suffisante aux préoccupations éthiques.",
        "Les contraintes économiques expliquent un choix. Elles n'effacent pas les interrogations qu'il peut soulever.",
        "Nous ne prétendons pas non plus que les technologies actuellement disponibles sont exemptes de défauts, ni que leurs conditions de développement et d'utilisation sont toutes satisfaisantes, bien au contraire. A plusieurs reprises, leur évolution trop soudaine a bien failli coûter la cohérence entière de notre univers et a remis gravement notre projet en question.",
        "Ces sujets doivent continuer à faire l'objet de discussions, d'améliorations et d'un encadrement approprié. Nous souhaitons suivre ces évolutions avec attention et faire en parallèle évoluer nos pratiques lorsque cela s'avère nécessaire et possible.",
        "L'innovation n’empêche pas la remise en question. Elle doit, au contraire, nous encourager à réfléchir davantage aux responsabilités qui l'accompagnent."
      ]
    },
    {
      "heading": "Notre transparence et notre responsabilité.",
      "paragraphs": [
        "Nous considérons que chaque joueur doit pouvoir se faire sa propre opinion sur les méthodes employées pour créer un produit qu'il envisage de soutenir ou d'acheter.",
        "C'est précisément la raison d'être de cette page.",
        "Nous ne souhaitons pas dissimuler l'utilisation de l’IA, ni entretenir une ambiguïté volontaire sur sa participation au développement de Chains of Innocence, comme de nos futurs projets.",
        "Il également important de souligner que nous souhaitons aussi éviter les promesses excessives.",
        "Nous ne pouvons pas résoudre, à notre échelle, l'ensemble des enjeux associés aux modèles génératifs. En revanche, nous pouvons assumer nos décisions, expliquer notre démarche, écouter les critiques constructives et rester attentifs aux évolutions de ces technologies.",
        "Le recours à l'IA ne dispense Malmaison Games d'aucune de ses responsabilités envers ses clients, ses partenaires et les créateurs dont les droits doivent être respectés.",
        "Notre engagement est de présenter notre travail avec honnêteté, de ne pas attribuer abusivement à une création entièrement humaine ce qui relève d'un processus faisant intervenir l'intelligence artificielle, et de conserver une direction humaine dans les décisions qui façonnent notre jeu.",
        "Votre confiance ne se réclame pas. Nous devons la mériter."
      ]
    },
    {
      "heading": "Une passion que nous souhaitons partager.",
      "paragraphs": [
        "Nous savons que notre démarche ne fera pas l'unanimité. A juste titre, certains apprécieront les possibilités offertes par ces technologies. D'autres, de manière aussi légitime, choisiront de ne pas soutenir un projet qui y fait appel. Nous respectons vos positions.",
        "Nous souhaitons simplement que notre travail puisse être considéré dans son ensemble, avec une connaissance claire des moyens employés pour lui donner naissance. Car au-delà des technologies utilisées, Chains of Innocence demeure le fruit d'une ambition profondément humaine : celle de créer un univers original, de lui donner vie et d'inviter d'autres personnes à le découvrir.",
        "Derrière les cartes, les histoires, les personnages et les nombreuses heures de développement se trouvent des efforts bien réels, des difficultés surmontées, des choix assumés et la volonté de construire quelque chose qui mérite d'exister.",
        "En dépit de l’utilisation de l’IA, notre projet a été applaudi haut-la-main par la Chambre de Commerce et d’Industrie d’Étampes-sur-Marne, et soutenu dans sa construction par notre établissement bancaire. Nous n’avons rien caché de notre travail à ces professionnels, qui eux aussi connaissent bien le débat sur l’IA, et ont pourtant été favorables à son développement sur le marché.",
        "Nous continuerons à défendre la place de l'humain dans notre projet, à respecter le travail des créateurs et à avancer avec les moyens dont nous disposons, sans renoncer à nous interroger sur nos méthodes."
      ]
    }
  ],
  "signature": [
    "Joffrey Jualan",
    "Fondateur et directeur artistique de Malmaison Games"
  ]
},
    en: {
  "title": "Artificial Intelligence and Us",
  "intro": "We invite you to learn about our vision, our choices, and our commitment to human creativity in the age of artificial intelligence.",
  "sections": [
    {
      "heading": "An Issue That Deserves Our Full Attention.",
      "paragraphs": [
        "Artificial intelligence is playing an increasingly prominent role in the professional world. Its extraordinarily rapid development is transforming working methods, opening up new possibilities, and, at the same time, raising profound questions about the future and about ourselves.",
        "We are fully aware that its use can provoke strongly critical reactions across many industries, including gaming, illustration, and entertainment. These concerns are legitimate, and they deserve to be heard.",
        "Behind every artistic creation lie expertise, years of learning, sensitivity, and a unique identity belonging to its creator. Concerns surrounding fair compensation for artists, the use of their work to train artificial intelligence models, and the future of human involvement in creative professions are matters we cannot, in good conscience, ignore.",
        "Malmaison Games was not founded with the intention of downplaying these questions, much less claiming to possess the ideal answer to such a complex debate.",
        "Our intention is simply to explain, with sincerity and transparency, the role artificial intelligence plays in the development of Chains of Innocence, as well as the role it will play in our future projects."
      ]
    },
    {
      "heading": "Behind Every Project, There Are People.",
      "paragraphs": [
        "Before becoming a card game, Chains of Innocence was an idea born from human imagination, gradually evolving into a universe of its own through a transformation spanning twenty years. Yes, twenty years.",
        "Originally conceived as a Yu-Gi-Oh! expansion, the project later evolved into an original card game based on the Final Fantasy series before finally establishing its own independent universe in August 2025.",
        "Its story, civilizations, characters, mechanics, and identity have required extensive thought and considerable development.",
        "This project is not the product of automated industrial production. It is driven by an independent French company founded upon its creator's passion, and brought to life through substantial personal dedication, both in time and effort, and, above all, through the contributions of partners and professionals.",
        "Designing a game involves far more than producing illustrations or assembling graphical elements. It means building a coherent universe, developing rules, imagining interactions, balancing mechanics, solving problems, experimenting, starting over, and making thousands of decisions.",
        "It also means organizing an entire production process: finding partners, communicating with manufacturers, designing physical products, ensuring their quality, and preparing them to reach the hands of players.",
        "Every one of these aspects relies on human initiative, responsibility, and decision-making.",
        "Artificial intelligence undoubtedly helps streamline certain stages of this work, but it neither carries the project's ambition nor assumes responsibility for its completion.",
        "Behind every major decision shaping Chains of Innocence stands our team."
      ]
    },
    {
      "heading": "Why Do We Use Artificial Intelligence?",
      "paragraphs": [
        "We have made the decision to integrate generative artificial intelligence tools into our development process, particularly in the field of visual creation.",
        "We believe it is essential to acknowledge this openly, without attempting to conceal their contribution.",
        "Developing an original card game requires significant financial and human investment. Every component comes at a cost: illustrations, graphic design, prototypes, printing, packaging, logistics, quality control, and marketing.",
        "For a small company without the financial means, workforce, or resources of a major publisher, these constraints directly determine what can realistically be achieved.",
        "Whether people embrace AI or reject it is a matter of personal perspective, and everyone is entitled to form their own opinion. For us, however, it provides the opportunity to explore creative directions, develop visual concepts, experiment with different approaches, and build a graphical universe with more limited resources.",
        "It opens up possibilities that might otherwise have remained financially out of reach.",
        "This does not mean that human artistic work is unnecessary, interchangeable, or lacking in value. Quite the opposite.",
        "We fully recognize the expertise, experience, and sensitivity of professional artists. We also understand that an AI-generated image is not equivalent to the work of an illustrator who personally imagines and creates an original piece of art.",
        "Our intention is not to claim that these two creative processes are identical, but rather to explain why we have chosen to use these technologies within the particular circumstances of our development.",
        "For us, AI is a means of bringing a creative ambition to life, not an attempt to diminish the value of those who make a living through their art. We hold the utmost respect for their talent and their remarkable, unique creative vision."
      ]
    },
    {
      "heading": "A Creative Tool, Not a Creative Vision.",
      "paragraphs": [
        "The use of AI does not eliminate human involvement from our creative process. It changes certain aspects of how that involvement takes place.",
        "Defining an artistic identity, imagining a character, determining their appearance, maintaining consistency across hundreds of elements, and deciding whether a particular result fits the intended universe all require creative direction. The project's art direction is overseen by its creator, Joffrey Jualan.",
        "Generative tools can produce results, but those results alone do not constitute an overarching creative vision.",
        "On average, we generate around ten illustrations from our prompts before approving a final image. Our prompts themselves contain at least 20,000 characters—practically entire novels—because we know precisely the direction in which we want to take our universe.",
        "Within Chains of Innocence, these technologies form part of a much broader creative process, serving a universe, a set of rules, and an identity developed over many years. Regardless of the methods employed, our standards and expectations remain unchanged.",
        "We believe that the value of a project also lies in the ideas, decisions, efforts, and responsibilities that are inherently human and essential to bringing it to life.",
        "None of this diminishes the importance of its artistic components or the legitimacy of the debate surrounding the conditions under which they are created."
      ]
    },
    {
      "heading": "We Understand the Concerns of the Artistic Community.",
      "paragraphs": [
        "We recognize that generative AI represents far more than simply a new category of tools.",
        "It raises important questions concerning copyright, the origins of the data used to train AI models, economic competition with artists, the transformation of creative professions, and the environmental impact of these technologies.",
        "We understand that some people consider the use of such technologies incompatible with their understanding of artistic creation, and we fully respect that position.",
        "We do not wish to pit independent creators against illustrators, nor do we believe that the financial difficulties faced by small businesses constitute a sufficient response to ethical concerns.",
        "Economic constraints may explain a decision. They do not erase the questions that decision may raise.",
        "Nor do we claim that currently available technologies are free from flaws, or that every aspect of their development and use is satisfactory. Far from it. On several occasions, the sheer pace of their evolution has nearly compromised the consistency of our entire fictional universe and seriously called the future of our project into question.",
        "These issues must remain open to discussion, improvement, and appropriate regulation. We intend to follow these developments closely while adapting our own practices whenever necessary and feasible.",
        "Innovation does not prevent us from questioning our choices. On the contrary, it should encourage us to reflect more deeply on the responsibilities that come with it."
      ]
    },
    {
      "heading": "Transparency and Accountability.",
      "paragraphs": [
        "We believe every player should have the opportunity to form their own opinion about the methods used to create a product they may choose to support or purchase.",
        "That is precisely why this page exists.",
        "We have no intention of concealing our use of AI or deliberately creating ambiguity about its involvement in the development of Chains of Innocence or our future projects.",
        "It is equally important to emphasize that we do not wish to make promises we cannot reasonably keep.",
        "We cannot, on our own, resolve every issue associated with generative AI models. What we can do, however, is take responsibility for our decisions, explain our approach, listen to constructive criticism, and remain attentive to the evolution of these technologies.",
        "The use of AI does not relieve Malmaison Games of any of its responsibilities toward its customers, partners, or creators whose rights must be respected.",
        "Our commitment is to present our work honestly, never to misrepresent AI-assisted creations as entirely human-made, and to maintain human creative direction over the decisions that shape our game.",
        "Your trust is not something we can demand. It is something we must earn."
      ]
    },
    {
      "heading": "A Passion We Wish to Share.",
      "paragraphs": [
        "We know that our approach will not receive unanimous approval. Some will understandably appreciate the possibilities offered by these technologies. Others, just as legitimately, will choose not to support a project that makes use of them. We respect your positions.",
        "We simply hope that our work can be considered as a whole, with a clear understanding of the methods used to bring it into existence.",
        "Beyond the technologies involved, Chains of Innocence remains the product of a profoundly human ambition: to create an original universe, bring it to life, and invite others to discover it.",
        "Behind the cards, the stories, the characters, and the countless hours of development lie genuine efforts, challenges overcome, decisions consciously made, and the determination to build something worthy of existing.",
        "Despite our use of AI, our project has been enthusiastically praised by the Chamber of Commerce and Industry in Étampes-sur-Marne and has received support from our banking institution during its development. We have concealed nothing about our working methods from these professionals, who are themselves well aware of the debate surrounding AI and have nevertheless expressed their support for bringing our project to market.",
        "We will continue to defend the importance of human involvement in our project, respect the work of creators, and move forward with the resources available to us, without ever abandoning the responsibility to question and reassess our own methods."
      ]
    }
  ],
  "signature": [
    "Joffrey Jualan",
    "Founder and Art Director of Malmaison Games"
  ]
},
  },
}
