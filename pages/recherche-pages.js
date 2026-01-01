/**
 * MIT License
 *
 * Copyright (c) 2025-2026 guanqun-design
 * https://guanqun-design.github.io
 * https://zhangguanqun.cn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {ui} from '../utils/mini-ui.js'

const [title, images, paragraph, pages, items] =
    [ui.title, ui.images, ui.paragraph, ui.pages, ui.items];

let recherchePages = {

    memoirePage : [
        [title], "Mémoire 论文",
        [paragraph], "《数学与艺术  参数化在设计中的应用》 节选",
        [images, [1, 1]],
        {url: "image/memoire/me1.jpg", width: 595, height: 842},
        {url: "image/memoire/me2.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me3.jpg", width: 595, height: 842},
        {url: "image/memoire/me4.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me5.jpg", width: 595, height: 842},
        {url: "image/memoire/me6.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me7.jpg", width: 595, height: 842},
        {url: "image/memoire/me8.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me9.jpg", width: 595, height: 842},
        {url: "image/memoire/me10.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me11.jpg", width: 595, height: 842},
        {url: "image/memoire/me12.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me13.jpg", width: 595, height: 842},
        {url: "image/memoire/me14.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me15.jpg", width: 595, height: 842},
        {url: "image/memoire/me16.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me17.jpg", width: 595, height: 842},
        {url: "image/memoire/me18.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me19.jpg", width: 595, height: 842},
        {url: "image/memoire/me20.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me21.jpg", width: 595, height: 842},
        {url: "image/memoire/me22.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me23.jpg", width: 595, height: 842},
        {url: "image/memoire/me24.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me25.jpg", width: 595, height: 842},
        {url: "image/memoire/me26.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me27.jpg", width: 595, height: 842},
        {url: "image/memoire/me28.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me29.jpg", width: 595, height: 842},
        {url: "image/memoire/me30.jpg", width: 595, height: 842},
        [images, [1, 1]],
        {url: "image/memoire/me31.jpg", width: 595, height: 842},
        {url: null, width: 595, height: 842},
    ],

    parametricDesignPage : [
        [title], "参数化设计相关（研究生阶段）RECHERCH",
        [images, [1]],
        {url: "image/parametric-design/pd1.jpg", width: 1074, height: 400},
        [paragraph],
        "Les deux premiers cours ont eu lieu au début de ma recherche, et ils m'ont donné quelques idées. Ce cours est " +
        "d’ailleurs la première pratique de ma recherche. J’ai examiné l'application des conceptions réelles, focus sur " +
        "la morphologie humaine. Recherche: la conception paramétrique est une méthode de conception très large gamme " +
        "d'applications, d’architecture, design espace, de produits, etc. Pour sujet principal, j'ai choisi le médical " +
        "(ou la médecine ?), je vais en faire la description détaillée après.",
        [paragraph],
        "Avant de présenter la troisième conception, je voudrais simplement expliquer ma recherche. Le design paramétrique " +
        "est la pratique d'une méthode de travail basée sur la paramétrisation des éléments. Bien que la conception " +
        "paramétrique et la conception précédente soient très différentes, on peut modifier leurs paramètres. Autrement " +
        "dit, nous faisons évoluer les règles pour générer la forme, plutôt que les formes elles-mêmes. C'est un algorithme " +
        "à programmer par logiciels grasshopper. En modifiant ces paramètres je peux générer des dizaines de milliers de " +
        "formes différentes. Ainsi, en utilisant cet algorithme, des prototypes sont créés.",
        [images, [3]],
        {url: "image/parametric-design/pd2.jpg", width: 842, height: 279},
        {url: "image/parametric-design/pd3.jpg", width: 595, height: 842},
        {url: "image/parametric-design/pd4.jpg", width: 1288, height: 1852},
        [images, [1, 1, 1]],
        {url: "image/parametric-design/pd5.jpg", width: 595, height: 842},
        {url: "image/parametric-design/pd6.jpg", width: 595, height: 842},
        {url: "image/parametric-design/pd7.jpg", width: 595, height: 842},
        [images, [1]],
        {url: "image/parametric-design/pd8.jpg", width: 595, height: 842},
        [paragraph],
        "Cette exigence de cours est améliorée par des pièces vélo ou en ajoutant des pièces simples, de sorte que les " +
        "vélos ont des fonctionnalités supplémentaires. A ce moment-là, j'ai déjà terminé cette algorithme, j'ai pensé " +
        "alors, pourquoi ne pas l’utiliser pour réaliser la personnalisation d’une selle de vélo ? Chaque personne possède " +
        "différents muscles et os, les hommes, les femmes, les personnes âgées, les enfants, les gros, les minces. Les " +
        "exigences des selles sont différentes selon les paramètres de la morphologie de chacun pour générer un siège " +
        "individuel approprié. Cette conception est utile. Les entreprises de bicyclettes pourraient créer un logiciel " +
        "de génération en ligne sur lequel les gens entreraient les paramètres de leur taille, de leur poids et d’une " +
        "variété de caractéristiques, en fonction desquels l'ordinateur générera automatiquement une certaine forme, puis " +
        "l’imprimera via la 3D et réaliser leur propre selle.",
        [images, [3]],
        {url: "image/parametric-design/pd9.jpg", width: 1288, height: 1845},
        {url: "image/parametric-design/pd10.jpg", width: 1288, height: 1845},
        {url: "image/parametric-design/pd11.jpg", width: 1288, height: 1845},
        [paragraph],
        "Le cours d’Imagination et d’objet non-standard, Ses mots clé sont l'impression 3D, les méthodes de traitement, " +
        "les structures, la chaise Zig Zag. Certains disent que l'émergence de la technologie d'impression 3D aura un " +
        "impact énorme sur la production industrielle, de la production à la personnalisation individuelle, en passant " +
        "par la baisse des coûts de production. En raison de la complexité de la structure et l'aspect de la surface, un " +
        "grand nombre de projets de conception paramétrique sont mis en œuvre par l'impression 3D.",
        [paragraph],
        "Imagination et objet non-standard: L'école dispose de deux imprimantes en 3D, qui peuvent imprimer les pièces " +
        "simples jointes. Ce cours exigence est de changer la méthode de production de la chaise Zig Zag. On a tous entendu " +
        "la méthode de fabrication de cette chaise, celle-ci est complexe. On doit réfléchir à la façon de connecter les " +
        "quatre conseils généraux avec des pièces 3D imprimés simples. Je considère que, 1 Il doit être facile à assembler, " +
        "sans utiliser de clous. 2. Je ne veux pas qu’il copie seulement la forme de la chaise, Il doit avoir également " +
        "d'autres fonctionnalités, telles que le recours à la force agissant entre les uns et les autres, de sorte qu'il " +
        "peut être légèrement secoué. 3. Imprimante 3D est l'empilement de ces couches qui crée un volume. Donc, je veux " +
        "tenter de sauver le matériau et le temps d'impression. En vertu de cette idée, j'ai créé le premier prototype, " +
        "il a posé beaucoup de difficultés. Ensuite, j’y apporte quelques d'améliorations, plus de formes symétriques, " +
        "et utilise la forme ronde comme un élément de design. Dans les détails, au début de chaque section de plus 1 mm " +
        "de diamètre convexe , ainsi, ils ne sont pas facilement séparables. Ajuster son épaisseur peut disperser son poids, " +
        "mais aussi fait gagner du temps pour l'impression. Après l'achèvement de cette conception, je me suis demandé s’il " +
        "était possible d'explorer une route de “paramètres de faible technologie” en engendrant la liaison du 《design high-tech》 " +
        "et de la《construction low-tech》, tout en réalisant d'une manière simple la conception paramétrique. Dans le " +
        "processus de la conception, de l'utilisation de la logique paramétrique et des outils de conception paramétrique, " +
        "le travail de conception peut ensuite être effectué par l'équipe de construction générale avec les méthodes normales, " +
        "ceci dans le but de s'assurer que la conception peut être réalisée.",
        [images, [1]],
        {url: "image/parametric-design/pd12.jpg", width: 1288, height: 1824},
        [images, [1, 1]],
        {url: "image/parametric-design/pd13.jpg", width: 1288, height: 1826},
        {url: "image/parametric-design/pd14.jpg", width: 1288, height: 1826},
    ],

    bonesEMotoPage : [
        [title], "Bones E-MOTO 鸟骨越野摩托车",
        [paragraph],
        "Bionic is an electric off-roader designed to provide a simpler, safer, personalized and environmentally-friendly " +
        "riding experience. The lightweight frame is designed based on the algorithm. The extremely light but powerful " +
        "body provides freer off-road experiences and guarantees safety if operation mistakes happen. The new parametric " +
        "design is different from the previous design approach. It embodies the ultra-light and strong characteristics of " +
        "bird bones in bionics to write the algorithm together with aesthetic and ergonomic features to create a unique " +
        "motorcycle design. The parametric design makes it possible for customization. In other words, the motorcycle can " +
        "be manufactured in various forms within the same setup. For instance, different user groups can replace more " +
        "suitable cushions by adjusting the parameters.",
        [paragraph],
        "The bones of birds inspire the ultimate lightness of the design. Those hollow, smooth and strong bones help their " +
        "flight and allow them to consume less energy. According to features of the bird skeleton, force analysis and " +
        "ergonomic data have been used to generate the algorithm. Aesthetically, the design also reflects the beauty of " +
        "organic form and mechanics. At the same time, the emphasis is also given to minimizing the weight to guarantee " +
        "stability when riding on rough roads, even with high jumps. The whole car is made of metal 3D printing and carbon " +
        "fiber. The shape is not limited by the imagination of the engineer or the limitation of traditional manufacturing " +
        "processes. New production techniques make new shapes possible and offer the possibility of customization.",
        [images, [14]],
        {url: "image/bones-e-moto/b1.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b2.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b3.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b4.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b5.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b6.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b7.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b8.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b9.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b10.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b11.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b12.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b13.jpg", width: 922, height: 518},
        {url: "image/bones-e-moto/b14.jpg", width: 922, height: 518},
    ],

    arduinoPage : [
        [title], "Arduino 编程与设计实践",
        [paragraph],
        "arduino是一个小型芯片，自学简单的编程就可以使用，这门选修课是使用arduino完成一个与常规相反的装置，比如照镜子，镜子像有情绪般的转开。 " +
        "这里我使用了一个arduino芯片，一个感应器，一个马达实现了一个逆行为的手纸盒，当取拿纸时，马达旋转纸抽收回到盒子里，手拿走，马达转动纸复位，" +
        "一个无用的盒子，像个调皮的玩笑。",
        [paragraph],
        "ce petit contrôleur permet aux personnes qui n’ont aucune connaissance de base de la science et de l'ingénierie " +
        "de pouvoir créer une conception très intéressante. Donc même après la fin de ce workshop, je l'utilise encore " +
        "comme un hobby personnel. Ses mots clé, son open source, sa programmation, son code, son hackerspace, fablab.",
        [paragraph],
        "Arduino est un circuit imprimé en matériel libre sur lequel se trouve un microcontrôleur qui peut être programmé " +
        "pour analyser et produire des signaux électriques de manière à effectuer des tâches très diverses comme la domotique. " +
        "Sa conception de type ouverte et sa facilité extrême d’utilisation font que même un enfant peut aussi l’utiliser. " +
        "C'est une conception que j'ai créée au cours de workshop, le thème est uesless box, (Voir la vidéo) c'est-à-dire " +
        "que nous tentons de trouver quelque chose ? contre le comportement de la personne. Ma conception est un peu espiègle. " +
        "Dans des circonstances normales, le papier toilette est sorti, mais lorsque les gens veulent l'utiliser, le papier " +
        "sera tiré en arrière, et quand la main sera loin, le papier sortira.",
        [images, [2]],
        {url: "image/arduino/a1.jpg", width: 1288, height: 1827},
        {url: "image/arduino/a2.jpg", width: 1288, height: 1827},
        [images, [1, 1]],
        {url: "image/arduino/a3.jpg", width: 640, height: 480},
        {url: "image/arduino/a4.jpg", width: 640, height: 480},
        [images, [1, 1]],
        {url: "image/arduino/a5.jpg", width: 640, height: 480},
        {url: null, width: 640, height: 480},
    ],

    pavillionMusicalPage : [
        [title], "Pavillon Musical  雨的奏鸣",
        [paragraph],
        "法国的东北部地区常年多雨，在公共设施上需要遮雨的小亭子，同时因为多雨的特质，我设计了一个音乐亭，在亭子上方有压力传感器，雨声敲打在不同的" +
        "位置上会发出不同的音色，就像是雨的奏鸣。我使用了arduino制作了小模型，以参数化课题中的三角形作为基础图形，使用grasshopper生成亭子的表皮，" +
        "在三角面上嵌入传感器，通过连接arduino，连接喇叭，就完成了等比例模型的设计。",
        [paragraph],
        "Dans le nord de la France, il pleut toujours, je me suis demandé comment utiliser cette caractéristique pour faire " +
        "des choses amusantes. J'ai placé quelques capteurs au sommet du pavillon. Quand la pluie tombe sur le dessus il " +
        "donne différents sons, c’est comme si la pluie jouait du piano. On peut ainsi écouter le rythme de la pluie.",
        [images, [3]],
        {url: "image/arduino/a1.jpg", width: 1288, height: 1827},
        {url: "image/arduino/a2.jpg", width: 1288, height: 1827},
        {url: "image/arduino/a6.jpg", width: 1288, height: 1827},
    ],

    informationPage : [
        [title], "ZHANG GUANQUN 张冠群",
        [pages, [3, 1]],
        [items, 2],
        "Industrial Design: LuXun Academy of Fine Arts (鲁迅美术学院)",
        "Master Design: L’école Supérieure d’art et de design de Valenciennes (France)",
        [items, 6],
        "BEST OF THE BEST REDDOT",
        "IF AWARD",
        "CES INNOVATION AWARD",
        "DESIGN INTELLIGENCE  (GOLD) 中国设计智造金智奖",
        "DAF AWARD BRONZE AWARD",
        "K-DESIGN AWARD",
        [items, 20],
        "RECHERCHE: LES MATHÉMATIQUES ET LA FORME, LES OUTILS PARAMÉTRIQUES DANS LE DESIGN (L’école Supérieure d’art et de design de Valenciennes, France) 2012-2014",
        "WORKSHOP: SUR LA POUSSE (L’école Supérieure d’art et de design de Valenciennes, France) 2014",
        "WORKSHOP: VERRE (L’école Supérieure d’art et de design de Valenciennes, France) 2013",
        "WORKSHOP: Fives Cail Bakcock (L’école Supérieure d’art et de design de Valenciennes, France)2013",
        "EXHIBITION: GE medical exhibition design (uniplan) 2014",
        "EXHIBITION: Mercedes-Benz exhibition design (uniplan) 2014",
        "SPACE: Chang’an vehicle museum design (uniplan) 2014",
        "EXHIBITION: Volkswagen Phaeton exhibition design (uniplan) 2014",
        "SPACE: Smart vehicle rental design (uniplan) 2014",
        "BRAND DESIGN: Dental hospital VI design  2014",
        "EXHIBITION: MAHA exhibition design (uniplan) 2014",
        "EXHIBITION: LandRover Jaguar 4S store exhibition design (uniplan) 2014",
        "EXHIBITION: VOLVO exhibition design (uniplan) 2014",
        "EXHIBITION: WMF exhibition design (uniplan) 2014",
        "LECTURER: guide students to apply to overseas art colleges (MAXSINE) 2014",
        "PRODUCT: HOVERCAMERA  Design-Production-Sale (ZEROZERO Technology Co., Ltd.) 2014-2017",
        "EXHIBITION: HOVERCAMERA exhibition design (ZEROZERO Technology Co., Ltd.) 2014-2017",
        "PRODUCT: Mobile Phone Accessories Design (MOLINKS Technology Co., Ltd.) 2017",
        "PRODUCT: UV Disinfection Products Design (MOLINKS Technology Co., Ltd.) 2018",
        "PRODUCT: Censer Design (MOLINKS Technology Co., Ltd.) 2018",
        [items, 28],
        "PRODUCT: Modular Router Design (MOLINKS Technology Co., Ltd.) 2018",
        "PRODUCT: Off Road Motorcycle design (MOLINKS Technology Co., Ltd.) 2019",
        "PRODUCT: E-Bicycle Design (MOLINKS Technology Co., Ltd.) 2019",
        "PRODUCT: E-Moped (MOLINKS Technology Co., Ltd.) 2019",
        "PRODUCT: MOOA Design (MOLINKS Technology Co., Ltd.) 2019",
        "PRODUCT: OPHTHALMOLOGICAL  Design (MOLINKS Technology Co., Ltd.) 2020",
        "PRODUCT: E-Scooter Design (MOLINKS Technology Co., Ltd.) 2021 not public yet",
        "PRODUCT: Off Road Motorcycle Design (MOLINKS Technology Co., Ltd.) 2021 not public yet",
        "PRODUCT: Exoskeleton Insole Design (MOLINKS Technology Co., Ltd.) 2020",
        "PRODUCT: E-Scooter Design (MOLINKS Technology Co., Ltd.) 2021 not public yet",
        "PRODUCT: Medical product (MOLINKS Technology Co., Ltd.) 2021",
        "PRODUCT: Fire mask Design (MOLINKS Technology Co., Ltd.) 2021",
        "BRAND DESIGN: MAYATOU Restaurant VI design  2022",
        "PRODUCT: BlueShark E-Scooter Design (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: Small four-wheel track vehicle (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: Electric assist bicycles (MOLINKS Technology Co., Ltd.) 2022  not public yet",
        "EVENT: Motorcycle promotional activities (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: Reform of the bicycles (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: Felt Goods design (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: BIG DOG MOTORCYCLE (MOLINKS Technology Co., Ltd.) 2022",
        "PRODUCT: Straddle type motorcycle(MOLINKS Technology Co., Ltd.) 2022 not public yet",
        "PRODUCT: Helmet Design (MOLINKS Technology Co., Ltd.) 2023",
        "EXHIBITION: Dragon Tooth exhibition design  2023",
        "PRODUCT: 350ADV Design (MOLINKS Technology Co., Ltd.) 2023 not public yet",
        "PRODUCT: Straddle type motorcycle Design for Africa (MOLINKS Technology Co., Ltd.) 2023",
        "PRODUCT: Folding Bicycle (MOLINKS Technology Co., Ltd.) 2024 not public yet",
        "PRODUCT: New National standard E - Bicycle (MOLINKS Technology Co., Ltd.) 2024",
        "LECTURER: Central Academy of Fine Arts International College"
    ],
};

window.recherchePages = recherchePages;
