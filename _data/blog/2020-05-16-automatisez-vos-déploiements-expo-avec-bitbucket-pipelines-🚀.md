---
template: BlogPost
path: /Automatisez-vos-déploiements-Expo-avec-Bitbucket-Pipelines
date: 2020-04-26T20:01:00.872Z
title: "Automatisez vos déploiements Expo avec Bitbucket Pipelines \U0001F680"
metaDescription: "Automatisez vos déploiements Expo avec Bitbucket Pipelines \U0001F680"
thumbnail: /assets/Group2.png
---
L’un des avantages d’utiliser Expo c’est de pouvoir tester votre application sur Android ou IOS très facilement sans avoir à acheter un *apple developer account* à 99$/an 😞, ou à générer un APK qu’il va falloir transférer par Dropbox ou Drive 😩.

Grace au Expo client ❤️ vous pouvez rendre disponible votre application à travers un lien. Vous avez juste à partager ce lien avec vos Beta-testeurs pour les permettre de tester rapidement votre application. 📱

Quand vous modifiez votre code et vous publiez à nouveau tous vos utilisateurs vont recevoir la nouvelle version de votre app sans pour autant réinstaller l’app ou installer la MAJ depuis les stores, C’est le Over the air 💨

Vous voulez connaitre la magie derrière ? Je l’explique [ici](https://medium.com/@sidibemouhamed/10-raisons-pour-lesquelles-jaime-expo-f19b6ecfe369) 🧐

Dans cet article nous allons voir comment automatiser le processus de publication d’une nouvelle release afin qu’elle soit directement disponible dans le Expo client à chaque nouveau push. ☁️

### Comment publier ? 💻

Pour publier une application dans le Expo client et ainsi la rendre disponible à travers un lien on exécute qu’une seule commande:

```
$ expo publish
```

Ici nous ne spécifions pas de *release channel*. donc notre app sera déployée dans la*release channel*default.

```
expo publish équivaut à expo publish --release-channel default
```

Les *releases channel* sont la pour créer différents environnements de travail pour vous. Vous pouvez avoir autant de *release channel* que vous voulez.

Dans cet article nous allons utilisé 2 *releases channel*, une pour un environnement de test : **staging** , et l’autre pour notre environnement de production : **production.**

En général les *releases channel* sont liés à nos branches. On va naturellement donc avoir notre branche master(production) et une branche develop(staging).

Du coup si on veut déployer en staging on fait :

```
expo publish --release-channel staging
```

Et si on veut déployer en production on fait :

```
expo publish --release-channel production
```

Ici le problème c’est que ce n’est pas automatisé. Nous développeurs nous aimons automatiser les choses parce qu’on est paresseux 😂.

L’idée c’est d’automatiser le processus de telle sorte que quand on push sur develop notre app est directement déployée sur Staging , quand on push sur master notre app est déployée en production.

### Comment Automatiser ? ⏱

Les pipelines Bitbucket nous permettent d’automatiser notre process de déploiement très facilement. Il existe d’autre providers comme Github actions , gitlab , Circle CI etc. Dans cet article nous allons utiliser Bitbucket 🤪.

#### Etape 1 : Configuration de Expo 🔧🔨

* Créer un compte Expo: Il nous faut un compte expo pour pouvoir publier nos apps. Pour créer un nouveau compte on se rend sur [expo.io](http://expo.io)
* Créer un projet expo avec la commande **expo init**ou utilisez un projet existant.

#### Etape 2 : Configuration de Bitbucket 🔧🔨

* Créer un repo bitbucket.
* S’assurer de faire un *npm i* qui va générer un fichier package.lock.json avant le push.
* Faire un push du code source sur le repo distant.
* Activer les pipelines dans l’onglet pipelines de votre projet et choisissez le JS comme langage de programmation

![](https://cdn-images-1.medium.com/max/1600/1*UQR3xEHM5BzOncoYM5gMVA.png)

![](https://cdn-images-1.medium.com/max/1600/1*eI9aWwyHcEF0bScrMB8gpA.png)

* Après avoir choisi le JS comme langage, un fichier **bitbucket-pipelines.yml**sera généré , c’est le fichier de configuration et c’est la que tout va se passer. Ne modifiez rien pour le moment et faites juste le commit.

![](https://cdn-images-1.medium.com/max/1600/1*HaSZnoqPpChmeYTMZtzyng.png)

* Sauvegardez vos identifiants expo dans vos variables d’environnement. On en aura besoin dans le bitbucket-pipelines.yml pour nous connecter à expo. Allez dans > Repository settings > Repository variables puis ajoutez votre username et votre mot de passe 🔑.

![](https://cdn-images-1.medium.com/max/1600/1*T6CkV-_BI8n6hkE5FuABwQ.png)

Variables d’env

#### Etape 3 : Déploiement 🚀

Pour automatiser notre déploiement nous allons principalement nous baser sur le fichier de configuration **bitbucket-pipelines.yml**. Dans ce fichier nous allons décrire étape par étape ce qu’il faut faire quand il ya un nouveau push en fonction des branches.

Le fichier est déjà dans votre projet vous pouvez l’ouvrir et y coller ceci : cliquez [ici](https://gist.github.com/Sidibedev/17114176ffdf82090bddcd1df3b166c3) pour copier.

![](https://cdn-images-1.medium.com/max/1600/1*EFFiyJQrQ2pNbeuQsG1VHQ.png)

Dans cette configuration nous spécifions deux branches master pour déployer en production et develop pour déployer en staging.

Vous pouvez créer une branche develop à partir de master et faire un commit pour tester , vous verrez que votre app sera déployée sur expo avec le lien :

*[https://exp.host/@USERNAME/PROJECT?release-channel=](https://exp.host/@USERNAME/PROJECT?release-channel=CHANNEL)staging* 🌏

de même que la branche master

*[https://exp.host/@USERNAME/PROJECT?release-channel=](https://exp.host/@USERNAME/PROJECT?release-channel=CHANNEL)production* 🌏

![](https://cdn-images-1.medium.com/max/1600/1*jYn83LaHB7XWOQkivX1IYQ.png)

Déploiement en Staging

![](https://cdn-images-1.medium.com/max/1600/1*xufmNyEf9LXMfzI-bJuQ0Q.png)

Déploiement en production

Et dans l’onglet déploiements vous pouvez voir vos déploiements

![](https://cdn-images-1.medium.com/max/1600/1*8QFPmh3mXrvQ8iucH8pjSw.png)

Déploiements

### ✅

Cette configuration est assez basique mais vous pouvez bien l’adapter vous à votre workflow.

Abonnez vous sur ma [chaine youtube](https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ) ️🔔 je prépare une série de videos sur Expo.

Merci ✌️
