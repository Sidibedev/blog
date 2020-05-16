---
template: BlogPost
path: /authentification-par-numéro-de-téléphone-avec-Expo(SDK37)-et-Firebase.
date: 2020-05-16T04:44:55.814Z
title: Authentification par numéro de téléphone avec Expo(SDK37) et Firebase.
thumbnail: /assets/1_iquPRpQs9z3E5iWSGGJA-g.png
---
- - -

Le 31 mars 2020 **Expo** a annoncé leur première release de l’année : **LE SDK 37.**Danscette nouvelle version, **Expo** propose beaucoup de nouvelles fonctionnalités. Vous pouvez aller jeter un coup d’oeil [ici](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6) pour tout savoir sur le **SDK 37**.

Parmi les nouveautés nous avons **l’authentification par numéro de téléphone avec Firebase.**Désormais **Expo** nous permet d’intégrer très rapidement ce module dans notre application mobile.

De nos jours cette forme d’authentification est beaucoup utilisée pour vérifier les utilisateurs rapidement et de manière sûre.

Dans cet article nous allons voir étape par étape comment mettre en place ce système dans notre application expo.

### Prérequis

Pour suivre ce tutoriel vous aurez besoin de:

1. Créer un projet expo avec le “managed workflow”. Si vous ne savez pas comment créer un projet expo vous pouvez lire [mon dernier article](https://medium.com/@sidibemouhamed/les-notifications-push-avec-expo-4d30b15b486d?source=your_stories_page---------------------------).
2. Créer un projet Firebase. Rendez vous sur <https://firebase.google.com/> accédez à votre console et créez un nouveau projet. Nous verrons comment créer un nouveau projet dans la section suivante.

### Configuration Firebase

Les configurations suivantes se feront dans la console Firebase.

#### 1. Créer un projet Firebase

* Rendez vous dans [la console Firebase](https://console.firebase.google.com/) et connectez vous à votre compte google.
* Cliquez sur *Add Project*
* Donnez un nom à votre projet
* Cliquez sur *Create Project*

#### 2. Ajouter une app à votre projet Firebase

Au niveau de la page d’accueil, cliquez sur web,

![](https://cdn-images-1.medium.com/max/1600/1*40sjowMTFDhwR_L4ANM01w.png)

Ou bien cliquez sur *project settings* et ensuite *add* app

![](https://cdn-images-1.medium.com/max/1600/1*HWJKxgjZ15-kRzrx-7jcMQ.png)

![](https://cdn-images-1.medium.com/max/1600/1*XCuro-saMB2pwv-c2p1gCw.png)

Choisissez un nom

![](https://cdn-images-1.medium.com/max/1600/1*w5zKD6lo9PE8oEatvUD6hQ.png)

![](https://cdn-images-1.medium.com/max/1600/1*_Upm0ted3AmatcJ3HdHlUw.png)

On va copier nos configurations et les garder quelque part on en aura besoin plus tard.

#### 3. Activer l’authentification par numéro de téléphone

Cliquez sur *Authentification* au niveau du menu , sélectionner *phone* puis appuyez sur le bouton activer.

![](https://cdn-images-1.medium.com/max/1600/1*O2auQut7QsfNOWz7Q3-2iA.png)

![](https://cdn-images-1.medium.com/max/1600/0*EFERTDstse9ABnrJ.png)

L’authentification par numéro de téléphone a été bien activée, nous pouvons donc l’utiliser dans notre application mobile.

> Vous pouvez ajouter des numéros de test et des codes par défaut associés aux numéros pour ne pas utiliser votre quota.(voir le pricing firebase)

C’est tout ce qu’il y a à faire coté firebase, nous pouvons maintenant nous concentrer sur notre application expo.

### Application Expo

#### Installations des dépendances:

Nous avons besoin d’un certain nombre de dépendances pour utiliser l’authentification par numéro de téléphone, installons les:

```

```

* En installant le**expo-firebase-recaptcha** nous avons le composant qui va nous permettre de créer le **Recaptcha** qui sert à valider si l’utilisateur est bien un humain et pas un robot.
* Le **expo-firebase-recaptcha**s’affiche dans une webview raison pour laquelle il nous faut installer**react-native-webview**.
* Et ensuite **firebase** pour pouvoir utiliser les services/fonctions d’authentification par numéro de téléphone.

#### Initialisation de firebase

Pour utiliser firebase il faut d’abord l’initialiser. Pour ça nous allons créer un fichier **Firebase.js**dans notre projet et on va y initialiser firebase avec notre configuration.

![](https://cdn-images-1.medium.com/max/1600/1*DrMKnNEnwGOd9NTuLJAnRQ.png)

#### Navigation (V5)

Nous aurons donc deux écrans, un écran pour récupérer le numéro de téléphone de l’utilisateur, afficher le Recaptcha et ensuite envoyer le code , puis un autre écran pour vérifier le code.

![](https://cdn-images-1.medium.com/max/1600/1*0HCmGZ8ec0270TEEqvJ-zQ.png)

Dans notre fichier App.js nous allons définir un simple StackNavigator qui contiendra ces deux écrans :

![](https://cdn-images-1.medium.com/max/1600/1*89BcryAa43gF6x3PWHxKCQ.png)

Nous avons créé notre navigation et nos deux composants **PhoneNumberScreen** et **VerifyScreen.**

#### **<PhoneNumberScreen />**

1. Dans ce composant on récupère le numéro de téléphone que l’utilisateur renseigne dans le champs numéro tel et on le stocke dans le state. Nous ajoutons aussi le modal Recaptcha dans notre méthode **Render**.

![](https://cdn-images-1.medium.com/max/1600/1*0TgGrHdTgUFOq0NXVyPxZw.png)

2. Quand l’utilisateur clique sur Envoyer la fonction **sendCode()** s’exécute. Elle permet d’afficher le Recaptcha et d’envoyer le code par sms si tout se passe bien.

![](https://cdn-images-1.medium.com/max/1600/1*aSAiHJiiZ9dwAw9DrLGDeQ.png)

Voici le code final du composant:

![](https://cdn-images-1.medium.com/max/1600/1*l1x87WLNn64pVzDBtUISyw.png)

#### VerifyScreen**.js**

Dans cet écran on doit vérifier que le code que l’utilisateur a renseigné est bien le code envoyé.

Voici la fonction qui permet de faire cette vérification:

![](https://cdn-images-1.medium.com/max/1600/1*wgWf8gBQt0jDA0cBxdqULA.png)

Voici le code final du composant:

![](https://cdn-images-1.medium.com/max/1600/1*r4esjpaq8eY9xarhazVwwQ.png)

C’est tout, nous pouvons maintenant tester notre application dans le Expo client.

Voici une démo de notre application:

Demo

Quand on vérifie sur Firebase on voit bien notre utilisateur.

![](https://cdn-images-1.medium.com/max/1600/1*Ae5n3ctr507cWKEPn8XY2A.png)

#### Felicitations !

Vous pouvez retrouver les sources du projet [ici](https://github.com/Sidibedev/ExpoPhoneAuthentification)

- - -

J’ai découvert un outil très cool qui s’appelle **[doorman](http://doorman.cool)** et permet d’intégrer l’authentification par numéro de téléphone très facilement sans avoir à beaucoup coder. Ils fournissent un backend et un UI complet. J’écrirais un article sur cet outil bientôt.

N’hésitez pas à utiliser l’authentification par numéro dans vos applications.C’est l’un des meilleurs moyens de vérifier vos utilisateurs et d’être sûr que c’est pas des robots grâce au Recaptcha. En termes de **UX** c’est généralement mieux qu’un système de email/mot de passe.

Merci et à bientôt.
