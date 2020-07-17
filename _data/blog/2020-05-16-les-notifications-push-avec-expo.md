---
template: BlogPost
path: /les-notifications-push-avec-Expo
date: 2020-04-06T19:23:26.054Z
title: Les notifications push avec Expo
metaDescription: Les notifications push avec Expo
thumbnail: /assets/1_khfEdToqjvxURcCqSQetRg.png
---
*Expo a sorti la version 38 de son SDK et il ya une nouvelle api pour les notifications, j’ai fait une [vidéo](https://www.youtube.com/watch?v=Kn14Xu3l-6w&t=2s) à ce sujet. Le code utilisé dans cet article reste valable mais deviendra obsolète bientôt.*

Les **Notifications Push** sont les messages qui apparaissent sur l’écran de votre smartphone lorsque vous n’utilisez pas l’application.C’un bon moyen de rappeler l’existence de votre application à vos utilisateurs. Lorsqu’elles ne sont pas trop intrusives et restent utiles pour l’utilisateur, elles permettent d’augmenter très rapidement le taux de rétention.

**Expo** nous permet d’intégrer très facilement les notifications push dans notre application react native. Nous allons voir pas à pas comment envoyer des notifications à nos utilisateurs depuis notre application expo.

### 1. Installer le expo-cli

Expo vous procure un outil en ligne de commande qui vous permet de gagner en productivité. Vous devez l’installer globalement sur votre machine comme suit:

```
$ npm install -g expo-cli
```

### 2. Créer le projet

Une fois le expo-cli installé, vous pouvez maintenant l’utiliser pour créer votre projet. Vous pouvez choisir un template pour aller plus vite mais dans notre cas on va juste choisir le blank template.

```
$ expo init ExpoPushNotifications
```

Expo va installer toutes les dépendances nécessaires pour votre app.

### 3. Exécuter le projet

Vous pouvez vous déplacer vers le dossier de votre projet et exécuter votre projet.

```
$ cd ExpoPushNotifications && expo start
```

Ou bien

```
$ cd ExpoPushNotifications && yarn start
```

Si tout se passe bien vous aurez quelque chose qui ressemble à ça:

![](https://cdn-images-1.medium.com/max/1600/1*y2Ncyk2CkPvUgqdPC-uS0Q.png)

### 3. Tester l’application

Maintenant que vous avez exécuté votre projet, vous avez besoin d’avoir un rendu de votre application. Pour ça il faut télécharger le Expo client sur P[lay store o](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)u A[pp Store.](https://apps.apple.com/app/apple-store/id982107779)

![](https://cdn-images-1.medium.com/max/1600/1*O0gi8HJkCyY0kZYtwljFig.png)

Une fois l’application téléchargée, connectez vous sur le même réseau que votre ordinateur et vous verrez votre projet ExpoPushNotifications dans l’application expo client.

![](https://cdn-images-1.medium.com/max/1600/1*0Dtbvcda-O-AIB15BYrqUQ.png)

Vous pouvez cliquer sur le projet pour l’ouvrir, normalement vous aurez un écran qui ressemble à ça:

![](https://cdn-images-1.medium.com/max/1600/1*BdnFsjUSyYLGR5yNscyKtg.png)

Votre application est prête. Vous pouvez effectuer des changements au niveau du App.js et voir directement le résultat dans l’application.

### 4. Obtention du Expo Push Token

Expo a besoin de savoir à quel appareil il doit envoyer la notification. Le Expo Push token sert à identifier chaque appareil. Ce token est unique et généré à chaque fois que votre application est installé sur un smartphone.

![](https://cdn-images-1.medium.com/max/1600/1*bpYB6TR637uEp6dgLmp8qg.png)

Vous pouvez donc récupérer ce token, le lié à un utilisateur et le stocker sur votre serveur.

#### En pratique

La première chose à faire c’est d’importer **Notification** et **expo-permissions**pour pouvoir utiliser les services de notifications.

```
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
```

Nous allons maintenant écrire une fonction qui va nous permettre de demander la permission d’envoyer des notifications, si on nous l’accorde on peut récupérer le Expo push token.

Voici notre classe:

![](https://cdn-images-1.medium.com/max/1600/1*E5HGCZLMh-L8aKbyrMFqoA.png)

Nous avons notre Expo push token:

```
ExponentPushToken[UwO2W_L5ryJt1Cji5Ta8Qy]
```

### 4. Envoi de la notification

Nous avons récupérer le Expo push token, il nous reste qu’à envoyer la notification à cet appareil en question. Normalement une notification vient d’un serveur. Expo fournit une **API RES**T que vous vous pouvez appeler depuis votre backend en lui passant juste le Expo push token.

![](https://cdn-images-1.medium.com/max/1600/1*6hKzAdWXzNWLK2P8s_MXRw.png)

Ce qui est cool encore c’est qu’il y a des packages déjà codés que vous pouvez utiliser coté backend en fonction du langage que vous utilisez: PHP , JAVA, PYTHON etc, vous pouvez trouver la liste complète [ici](https://docs.expo.io/versions/v37.0.0/guides/push-notifications/).

Mais dans cet article nous allons utiliser le [Expo push notification Tool](https://expo.io/notifications) pour envoyer nos notifications facilement sans coder.

C’est une app développée par expo qui permet d’envoyer des notifications push en renseignant le Expo push token , les données que vous voulez envoyer et d’autres paramètres facultatifs:

![](https://cdn-images-1.medium.com/max/1600/1*XPHBnqXisS0X9-vJI6Qxig.png)

L’appareil qui possède le expo push token qu’on a renseigné va recevoir la notification:

![](https://cdn-images-1.medium.com/max/1600/1*7FM82pNOLsnCIx9vdCZpRw.png)

### 4. Affichage des données de la notification dans notre app

Nous arrivons à envoyer la notification, ce qu’on veut maintenant c’est afficher les données qu’on envoie dans notre application.

Nous allons envoyer une nouvelle notification, mais cette fois ci avec des données: {“name”: “mas”}.

![](https://cdn-images-1.medium.com/max/1600/1*nod-GQh3uLDUO6eBy0S5gQ.png)

Pour afficher les données dans notre app il nous faut faire une souscription qui permet à chaque fois qu’on recevra une notification de faire un traitement spécifique:

![](https://cdn-images-1.medium.com/max/1600/1*vs7tkRcaui_iq0OyhP0jNw.png)

Voici notre fonction _HandleNotification() qui s’exécute chaque fois qu’on recevra une notification:

![](https://cdn-images-1.medium.com/max/1600/1*AYDDyhpY3CZjEB7gDAqnng.png)

Cette fonction reçoit l’objet notification qui contient nos données et le stocke dans le state.

Ainsi nous pouvons afficher les données reçu dans le render:

![](https://cdn-images-1.medium.com/max/1600/1*0GYOYGNuZKdXsm8JJjD9Dw.png)

Et Dans l’application on voit bien les données envoyées:

![](https://cdn-images-1.medium.com/max/1600/1*7qLRlu0DN0bPNg_pxMKGLw.png)

On peut après utiliser ces données pour en faire ce qu’on veut. COOL !!

J’espère que cet article vous a aider à comprendre comment fonctionnent les notifications push avec Expo et vous encourage à utiliser Expo pour vos applications React native.

Merci.
