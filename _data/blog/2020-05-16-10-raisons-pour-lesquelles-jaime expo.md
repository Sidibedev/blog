---
template: BlogPost
path: /10-raisons-pour-lesquelles-jaime-expo
date: 2020-05-28T04:37:44.796Z
title: "10 raisons pour lesquelles j'aime\_Expo"
thumbnail: /assets/images.png
---
- - -

Aujourd’hui si vous voulez développez une application mobile vous avez différentes technologies disponibles. Vous allez peut-être choisir d’utiliser les langages classiques : swift/Objective C pour de l’IOS , Java/Kotlin pour de l’Android. Ou plutôt faire **d’une pierre deux coups**et opter pour une solution multiplateforme , un seul framework pour développer sur les deux plateformes. Ce choix va dépendre vraiment de plusieurs facteurs.

De nos jours des technologies comme *React native, Flutter, Ionic* etc vous permettent d’avoir une seule codebase exécutable sur plusieurs plateformes. Mais dans cet article nous allons plus nous pencher sur React Native.

- - -

### **REACT NATIVE**

![](https://cdn-images-1.medium.com/max/1600/1*mm8JucFufPWr2ls_I1h_0w.png)

React native est un framework qui permet de créer des applications **natives** avec **Javascript** et **React.**

C’est un outil qui a été développé par Facebook en 2015 dans le but d’accélérer le développement et la maintenance de ses applications mobiles

React Native a eu un grand succès. Il fait parti des projets open source les plus populaires sur Github avec plus de 2000 contributeurs.Des entreprises comme Uber, Airbnb, Walmart ont déjà utilisé ce framework, et tout récemment Shopify.

![](https://cdn-images-1.medium.com/max/1600/1*Z2QysMsBls82josKplE7IQ.png)

*L’évolution de l’intérêt de la requête React Native sur Google depuis 2016*

#### **Avantages de React native**

**— La courbe d’apprentissage** :Si tu viens d’un environnement **javascript**, c’est très facile d’apprendre React native : J’ai commencé à coder des applications react native il ya deux ans , tout ce que je connaissais c’était javascript et un peu de React.

— **Hot Reloading :**Un des trucs les plus sympa avec RN c’est le hot reloading qui permet de voir le rendu directement en développant, vous ne perdez pas de temps à compiler le code, à patienter , vous gagnez énormement de temps de développement.

—**UNE EXPÉRIENCE UTILISATEUR NATIVE** : Les applis React nativesont des applications natives**:**Quandvous développez une app react native, au final vous avez totalement un rendu natif, c’est a dire que c’est des composants natifs qui sont rendus.

— **Ecrivez du code une fois et exécutez le partout**: Avec react native vous n’avez pas besoin de recruter deux développeurs (android et ios) pour coder votre appli. Vous avez une seule codebase qui marche sur android et ios en même temps. Vous gagnez du temps et de l’argent.

C’est bien beau tout ça mais en réalité tout ne se passe pas comme prévu.

J’ai rencontré beaucoup de problèmes quand je commençais à coder avec React native.

Voici quelques uns:

— **Vous avez besoin de android studio et Xcode pour run vos projets** : cela veut dire que si vous n’avez pas d’ordinateur mac vous ne pouvez pas développer sur ios. Etant étudiant j’avais un vieux ACER , j’avais pas accès a Xcode et même pour démarrer Android Studio c’était un vrai problème. C’est des logiciels très lourds qui demandent beaucoup de ressources. Vous savez surement de quoi je parle :D

— **Il faut payer pour tester :** Bon maintenant imaginons vous avez un très bon mac dernière génération, vous pouvez allumer android Studio et xcode en quelques secondes vous n’avez donc pas le problème souligné plus haut. Vous développez votre app et à un moment du développement vous devez montrer au client ou tester votre app. Si vous êtes sur android vous allez build un apk et vous débrouiller pour l’envoyer au client. Mais si voulez tester sur iphone, apple vous oblige à acheter un apple developer account, ça coute 99$/an. Si vous êtes fauché comme moi c’est vraiment pas évident.

— **Pas que du Javascript:** Ils vous diront que vous pouvez créer des applications mobiles natives avec du javascript. Dans la pratique ça ne se passe pas toujours comme ça. Vous aurez à plonger dans le monde natif , vous aurez à écrire du code natif (soit du java/kotlin ou du swift). Si vous venez d’un environnement JS ça va barder pour vous :DDDD.

—**Vous écrirez du code spécifique:**C’est évident qu’à un moment du développement vous aurez forcément besoin d’écrire du code spécifique aux plateformes. C’est deux OS différents et donc des manières de fonctionner différentes.

— **Déploiement sur AppStore**: C’est le calvaire, c’est très dur. Vous devez gérer vous même les configurations de build , gérer les certificats , les “provisionning profiles”. J’ai galèré avec ça je vous promets.

J’ai eu pas mal de soucis auxquels je m’y attendais pas vraiment quand je commençais à développer avec React native. On vous dit pas tout et c’est en pratique que vous vous rendez compte des choses. Mais c’est toujours bien en terme d’expérience :).

### **C’est dans ce contexte que EXPO entre en jeu**

![](https://cdn-images-1.medium.com/max/1600/0*JarPAYjStqyrIIAD)

Photo by [Yogi Purnama](https://unsplash.com/@yogipurnama?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Expo apporte des solutions à ces problèmes énumérés plus haut.

De nos jours quand vous commencez une application React Native vous avez deux choix : Utiliser Expo ou Ne pas utiliser Expo.

#### **C’est quoi Expo ?**

Expo est un framework et une plateforme pour les applications React. Il s’agit d’un ensemble d’outils et de services construits autour de React Native et de plateformes natives qui vous aident à développer, créer, déployer et itérer rapidement sur des applications Ios, Android et Web à partir de la même codebase JavaScript / TypeScript.

> En gros Expo c’est un truc magique qui te dit : concentre toi sur ce que tu sais faire le mieux c’est à dire coder en JS et tout le reste moi je m’en charge, tu n’a plus à te préoccuper de tout ça.

C’est cool non ? :DDD

**Les avantages d’utiliser EXPO**

— **Facile à prendre en main**: Vous n’avez pas besoin d’avoir des connaissances en développement natif pour démarrer avec expo. Il faut juste savoir coder en JS/TS.

— **Accessible**: Tout le monde peut démarrer avec Expo , il suffit juste d’avoir un ordinateur et une connexion internet.

— **Pas besoin de Android Studio ou Xcode**: Tout simplement parce que vous n’aurez pas à dealer avec le code natif. les configurations sont déjà gérées.

— **Déployer vos apps facilement :**En quelques commandes vous pouvez mettre votre app sur les stores.

Dans un autre article je rentrerai dans les détails sur le fonctionnement de Expo.

J’en viens à ma meilleure partie: **Les 10 raisons pour lesquelles j’aime EXPO:**

### 1. EXPO SDK

Le Expo SDK est une librairie qui vous donne accès à une grande variété d’Apis natifs sur android et ios.

Si vous avez besoin d’une fonctionnalité native vous utilisez le expo sdk qui vous fournit une api pour ça.

Dans l’image suivante je montre quelques fonctionnalités natives dispo dans le Expo SDK

![](https://cdn-images-1.medium.com/max/1600/1*mmykvPJE427Yr_bX9kswqQ.png)

Vous avez accès par exemple au FileSystem du device pour lire et écrire des fichiers , à la caméra pour prendre des photos etc..

### 2. EXPO CLI

Le expo cli (command line tool) est un outil phare dans le process de développement d’une application react native avec Expo.

C’est un ensemble d’instructions en ligne de commande qui vous aide à développer facilement et rapidement vos projets.

Avec le Expo cli vous pouvez :

— démarrer un projet Expo avec la commande: e**xpo init**

![](https://cdn-images-1.medium.com/max/1600/1*QCo5KGDy4zKOVjgJLKB8FQ.png)

Expo vous fourni des templates pour démarrer votre projet.

— éxecuter votre app et commencer le développement: e**xpo start**

— Publier votre app pour la faire tester par vos clients/beta-users etc: **expo publish**

— Créer vos binaires qui vont être soumis aux stores: expo **build:andoid** , **expo buid:ios** ,**expo build:web**

Etc…

### 3. EXPO Client app

C’est une app dans laquelle vous pourrez avoir un rendu en temps réel. Grace à cette app vous pouvez tester votre app sur un device réel sans pour autant avoir un compte apple developer (99$/an). C’est pas comme si vous installez votre app sur un device sachant que vous êtes toujours dans une application mais c’est quand même cool. Vous pouvez partager le lien de votre app à vos testeurs et eux aussi pourront tester votre app.

![](https://cdn-images-1.medium.com/max/1200/1*qBkob38G5V9b8MdtWfSs9w.png)

![](https://cdn-images-1.medium.com/max/1200/1*v8qBXS5SJl5_I-zdj8JwQw.png)

### 4. SNACK

Snack est un outil en ligne qui vous permet d’écrire du code react native et d’avoir un aperçu directement. C’est un IDE en ligne. C’est comme [Jsfiddle](https://jsfiddle.net/), [playcode](https://playcode.io/online-javascript-editor).

C’est cool pour tester de petites fonctionnalités, partager son code.

Moi par exemple je l’utilise beaucoup pour me faire debugger quand j’ai un soucis. On a un groupe sur slack “Expo developers” quand tu as un bug tu peux partager ton code sur snack et les autres développeurs y ont accès.

[D](https://d30j33t1r58ioz.cloudfront.net/static/videos/snack-example.mp4)emo

### 5. Expo devtools

Expo devtools c’est le coté GUI de expo. Vous avez presque toutes les fonctionnalités du Expo cli en version web où vous pouvez cliquer sur des boutons pour faire des actions au lieu d’écrire des commandes. C’est pour les devs qui n’aiment pas trop le terminal.

![](https://cdn-images-1.medium.com/max/1600/1*XF3W5l7vkUZ-5sZ8wYPQuQ.png)

### 6. Publiez votre travail

Vous avez développé un module ou une partie de l’application et vous voulez le faire tester par votre client ou par quelques utilisateurs. Vous n’avez pas besoin de le mettre sur les stores pour ça, Expo vous fournit une commande qui vous permet de rendre votre app publique dans l’appli Expo client.

![](https://cdn-images-1.medium.com/max/1600/1*h2S7AIRb7Fay1wK_PbUc4A.png)

Expo vous génère un lien. C’est ce dernier que vous allez partager avec votre client ou vos users pour les faire tester l’application, sachant qu’ils ont déjà installer l’application Expo client.

### 7. Déploiement sur les stores

Maintenant que vous avez fini de coder, vous avez testé votre travail, votre client a approuvé, il est temps de passer en production, de déployer votre app sur les différents stores.

Pour déployer une app sur playstore vous devez soumettre un fichieR APK**,**sur appstore ça sera un IPA.

Expo vous donne une commande très simple pour générer ces fichiers:

**Expo build:android**pour générer l’APK

**Expo build:ios**pour générer le IPA

### 8. Expo OTA

Vous avez mis votre app sur playstore, vous avez beaucoup d’utilisateurs, les gens aiment votre app, mais en un moment on vous signale un petit bug ou des fautes dans l’application. Vous devez donc modifier votre code et faire une mise à jour. Le process normal c’est après avoir corriger votre petit bug ou votre faute, vous créez un nouveau binaire (apk ou ipa) puis vous soumettez encore aux stores, cela peut prendre du temps

Le OTA (over the air) update vous permet de mettre à jour votre app sans pour autant soumettre un nouveau binaire dans le store. Juste avec la commande **expo publish** votre application est mise à jour. C’est très efficace.

Faut savoir que le code javascript que vous écrivez est hosté quelque part dans les serveurs de expo. A chaque fois que vous faites un expo publish ce code est mis à jour. Quand l’utilisateur lance l’application expo vérifie s’il y a une nouvelle version de votre code si oui il le télécharge, et l’utilisateur voit une nouvelle version de votre application. C’est magique!

### 9. Release Channel

Maintenant vous avez votre application sur les stores, vous faites vos mis à jours tranquillement avec le Expo OTA tout se passe très bien.

Un jour le client vous appelle et vous demande d’ajouter une nouvelle fonctionnalité dans l’application.

Vous commencez à coder la nouvelle fonctionnalité, vous terminez, mais avant de faire la mise à jour en prod, vous devez montrer à votre client ou à vos beta users pour tester. Mais la vous vous dites qu’il ya un problème parce que si vous faites un **expo publish** tous les utilisateurs qui utilisent la version prod vont recevoir votre mise à jour alors que voulez juste un environnement de test pour votre client.

C’est la que les releases channels entrent en jeu en vous permettant de publier différentes versions de votre app.

Vous pouvez créer différentes channel, ce sont vos environnements développement.

Vous allez donc avoir une channel ***Staging*** pour tester vos nouvelles fonctionnalités: au lieu donc de faire **expo publish** vous allez faire ***expo publish — release-channel staging*.**Les utilisateurs qui utilisent la version prod ne verront pas vos mis à jours parce qu’il ne sont pas dans la channel staging. Vous pourrez donc donner le lien de la channel staging au client pour qu’il teste.

En réalité quand vous faites **expo publish**, expo rajoute implicitement une channel ***default*.**

### 10. Expo Web

Expo vous permet de faire des applications multiplateformes. Vous pouvez écrire du code React native et avoir un rendu dans votre navigateur.

Si vous voulez déployer votre application web vous pouvez juste lancer la commande: expo build:web.

![](https://cdn-images-1.medium.com/max/1600/1*dCIoZ2KkQpDAhoRvgAEG0g.png)

Expo est un outil qui m’a beacoup facilité la vie en tant que développeur react native.

Il faut noter que expo ne marches pas toujours: desfois vous aurez besoin de certaines fonctionnalités native que expo ne dispose pas encore.

En effet le Expo sdk n’est pas encore complet, par exemple si vous avez besoin de faire une app qui utilise la technologie Bluetooth vous ne pourrez pas avec expo. Il vous faudra démarrer un projet react native normal.

Si vous aviez deja démarrer un projet expo et que vous vous rendez compte que vous avez besoin d’une fonctionnalité native que Expo ne dispose pas, vous avez la possibilité d’ejecter votre app de expo et de retourner vers une app react native normale sans problèmes, sans bug.

Expo est encore un projet jeune par rapport à react native mais tous les jours il ya des améliorations, de nouveaux apis, etc… chapeau vraiment à la team expo : [Evan Bacon](https://medium.com/u/16b715de038f) , [Eric Samelson](https://medium.com/u/4dc83050e8c4) , [Brent Vatne](https://medium.com/u/d5a707474bd2) ils font un travail remarquable.

Je pense commencer une série d’articles sur les différentes apis disponibles.

A bientot 😊
