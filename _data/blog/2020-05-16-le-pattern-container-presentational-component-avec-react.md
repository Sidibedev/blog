---
template: BlogPost
path: /Le-pattern-Container-Presentational-Component-avec-React
date: 2020-03-30T19:16:58.575Z
title: Le pattern Container/Presentational Component avec React
thumbnail: /assets/Hierarchy-Organization-Persons.png
---
Le container/Presentational pattern est l’un des patterns les plus importants dans le développement d’applications webs avec React.

Dans cet article nous allons voir ensemble les solutions qu’il apporte et comment ça fonctionne.

Pour mieux comprendre ce pattern nous allons essayer de coder une page React native très simple qui permet d’avoir les données du Corona virus au Senegal. L’écran ressemblera à ça:

![](https://cdn-images-1.medium.com/max/1600/1*bBe0kjonPEr7mCwVFU--Cw.png)

Donc si on observe bien l’écran on remarque qu’il y a des informations qui viennent d’un serveur/api et sont affichées au niveau de la page.

Nous procédons comme suit:

*  On va chercher les données depuis une Api. (**componentDidMount**)
*  On stocke les données dans le state du component. (**componentDidMount**)
*  On affiche les données récupérées. (**Render**)

Voici ce que ça donne:

— **HomeScreen**

![](https://cdn-images-1.medium.com/max/1600/1*-JcFGgdVxPC7j3SMW05GCw.png)

Ce code fonctionne très bien, on arrive à récupérer les données et à les afficher.

Nous remarquons déjà que notre component est un peu long. Sachant qu’on va surement rajouter d’autres fonctionnalités, d’autres options. On verra que le code va vite grossir au niveau de notre component. On va vite se retrouver avec une classe qui contient des centaines de lignes de code, C’est ce que j’appelle les “components obèses”.

### Inconvénients des components obèses:

Ils sont illisibles, difficile à comprendre. même si vous êtes l’auteur il y a tellement de code qu’au final on est perdu.

* Difficile à réutiliser, ils sont très spécifiques.
* Difficile à modifier , vous touchez à une partie et une partie s’écrase.
* Difficile à maintenir.

![](https://cdn-images-1.medium.com/max/1600/1*GkyepIIMIvIHgbGgEYpmfA.jpeg)

#### Solution aux components obèses

Le **pattern Container/Presentation** vient pour éviter ce genre de situation en introduisant la notion de **séparation des responsabilités**, qui sonne, il faut le dire, beaucoup mieux en anglais : **separation of concerns** **(SoC)**.

Le SOC est un principe de conception visant à segmenter un programme informatique en plusieurs parties, afin que chacune d’entre elles isole et gère un aspect précis de la problématique générale. C’est une bonne pratique largement reconnue et mise en œuvre dans l’ingénierie logicielle.

> “\[Separation of Concerns], even if not perfectly possible, is yet the only available technique for effective ordering of one’s thoughts, that I know of.”
>
> — Edsger W. Dijkstra

Une responsabilité c’est en d’autres termes, une partie de notre code qui effectue une fonctionnalité ou une action précise.

*Bon revenons à nos moutons.*

Si on réfléchit SOC dans notre application qui permet d’afficher les données du corona virus au Senegal, on peut distinguer 2 responsabilités:

— Celle de fetch les données : Il s’agit de toute la logique de récupérer les données et les stocker dans le state.

— Celle d’afficher les données: Il s’agit de la partie User interface qui permet d’afficher du contenu à l’utilisateur.

Chaque responsabilité sera gérée par un component. On va voir donc apparaitre les notions de **container components** et de **presentational components**.

Les **Container components a.k.a *what it does,***vont se charger de la logique de notre fonctionnalité.

Les **Presentational components a.k.a *what it looks like,***seront responsables de la partie UI.

Si nous appliquons ceci à notre cas nous aurons donc :

— **CoronaWidgetContainer** : notre container component va se charger d’aller récupérer les données à travers l’api: <https://covid19.mathdro.id/api/countries/senega>l et les stocker dans le state et les passer au Presentational component(CoronaWidget**)**.

![](https://cdn-images-1.medium.com/max/1600/1*Rrh6f9aVadvUHlGb5hiwNg.png)

— **CoronaWidget**: notre presentational component : lui il reçoit les props qui contiennent les informations à propos du corona et les affiche à l’écran à travers le CustomCard.

![](https://cdn-images-1.medium.com/max/1600/1*fOQmJu-cNkE4rIl4XakQ-g.png)

**— CustomCard**

![](https://cdn-images-1.medium.com/max/1600/1*bB4N3JYLXa9QzM2wSynh3w.png)

**— CustomHeader**

![](https://cdn-images-1.medium.com/max/1600/1*uVTzEVepu7zAIcwr118urg.png)

Notre HomeScreen devient donc :

![](https://cdn-images-1.medium.com/max/1600/1*42DAzFbjbmNzK9A8rrvJqw.png)

Notre homeScreen contient que quelques lignes de code, c’est simple, lisible et concis.

### Pourquoi c’est utile d’utiliser ce pattern ?

* **Lisible**: Notre code devient plus lisible et plus compréhensible , tout est séparé , chaque partie s’occupe d’une responsabilité.
* **Facile à débogguer**: Quand on a un bug on peut facilement savoir quelle partie du code est touchée et on va directement au niveau de cette partie. On peut avoir un problème liés aux données on sait automatiquement qu’il faut aller voir au niveau des Container component , ou des problèmes d’affichage on sait qu’il s’agit du Presentational Component.

Ce pattern est très utile pas seulement dans le domaine React mais en informatique en général. C’est un outil optionnel qu’il faut avoir pour mieux organiser votre code quand vous en avez besoin.

Cependant, React a introduit les Hooks qui permettent de faire plus naturellement cette séparation de responsabilité. Mais je trouve que c’est toujours utile pour ceux qui n’utilisent pas les Hooks. Les Hooks apportent des solutions à beaucoup de problèmes liés aux classes, mais y a toujours des cas où les classes sont importantes.

Merci, A bientôt.
