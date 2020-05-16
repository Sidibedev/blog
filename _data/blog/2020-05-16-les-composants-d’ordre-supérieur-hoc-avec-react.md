---
template: BlogPost
path: /les-composants-d’ordre-supérieur-avec-React
date: 2020-04-16T20:00:10.474Z
title: Les composants d’ordre supérieur(HOC) avec React
metaDescription: Les composants d’ordre supérieur(HOC) avec React
thumbnail: /assets/1_qzdgm6IoYSCB3YJqfO8IHQ.png
---
L’un des objectifs de chaque développeur React c’est d’écrire le maximum de composants réutilisables. D’ailleurs les composants par défaut sont le principal moyen de réutiliser du code en React, mais ces derniers ne sont pas adaptés à tous les cas.

Quand vous développez une application avec React vous aurez à un moment donné besoin de réutiliser de la logique à travers plusieurs composants au lieu de dupliquer du code. Dans ce genre de scénario vous utiliserez les HOC. Ils sont un autre moyen d’écrire du code réutilisable.

Dans cet article nous allons voir ensemble comment réutiliser du code à travers les HOC.

- - -

## DEFINITION

Selon la [documentation de React](https://fr.reactjs.org/docs/higher-order-components.html), **un composant d’ordre supérieur est une fonction qui accepte un composant et renvoie un nouveau composant.**

En d’autres termes un HOC va prendre un composant en paramètre, il va y ajouter de la logique, du comportement, et puis retourner un nouveau composant.

```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- - -

## EXEMPLE

Nous allons prendre un exemple pour mieux comprendre.

Le client nous demande de faire une application web ou il y a juste un bouton et quand on clique sur ce bouton on incrémente un compteur.

Facile!

*On va utiliser les classes dans cet exemple pour mieux comprendre.*

Nous allons créer un composant **ClickCounter** que nous allons appeler depuis notre fichier principal App.js

**App.js**

![](https://miro.medium.com/max/60/1*GTfqZgo4_K4B5cnv_ejgSw.png?q=20)

![](https://miro.medium.com/max/2268/1*GTfqZgo4_K4B5cnv_ejgSw.png)

**ClickCounter.js**

![](https://miro.medium.com/max/60/1*zsELHGJHPNkk3KidpUPSaA.png?q=20)

![](https://miro.medium.com/max/2272/1*zsELHGJHPNkk3KidpUPSaA.png)

Le client a testé et il est content mais il veut autre chose. Il veut maintenant un système pareil mais cette fois à chaque fois qu’on survole le texte on incrémente un compteur.

Facile! c’est presque la même chose que ce qu’on a déjà codé.

![](https://miro.medium.com/max/60/1*PAPpUtCOhXXxXT1MidFfFg.png?q=20)

![](https://miro.medium.com/max/2268/1*PAPpUtCOhXXxXT1MidFfFg.png)

**HoverCounter.js**

![](https://miro.medium.com/max/60/1*GW_olNkCRrFGemBmvT3TUQ.png?q=20)

![](https://miro.medium.com/max/2272/1*GW_olNkCRrFGemBmvT3TUQ.png)

Le code marche, le client est encore content.

![](https://miro.medium.com/max/60/1*cML5_zj1-HwePaxc2E8K8w.jpeg?q=20)

![](https://miro.medium.com/max/1954/1*cML5_zj1-HwePaxc2E8K8w.jpeg)

Mais nous, en tant que développeur react, sommes nous content de notre code ? Est ce que notre code réponds aux meilleures pratiques React ? Avons nous écris du code réutilisable ?

## NON !

![](https://miro.medium.com/max/60/1*U_lNUEOBTppLfdjlgrBhaQ.jpeg?q=20)

![](https://miro.medium.com/max/2400/1*U_lNUEOBTppLfdjlgrBhaQ.jpeg)

## Refactoring

Si vous remarquez bien nous avons dupliqué la logique d’incrémentation dans les deux composants **ClickCounter** et **HoverCounter**.

On va donc créer un HOC **WithCounter** qui va contenir la logique d’incrémentation.

![](https://miro.medium.com/max/60/1*AAWpnXQ2qOWCu5mP9bEwig.png?q=20)

![](https://miro.medium.com/max/3272/1*AAWpnXQ2qOWCu5mP9bEwig.png)

Maintenant que notre logique se trouve dans notre HOC, on peut l’utiliser dans **ClickCounter** et **HoverCounter** comme suit:

![](https://miro.medium.com/max/60/1*C18sPlb8ydYjbsL_cnQ1tg.png?q=20)

![](https://miro.medium.com/max/2644/1*C18sPlb8ydYjbsL_cnQ1tg.png)

![](https://miro.medium.com/max/60/1*KIz1fx4xFksqanl2QrZiiQ.png?q=20)

![](https://miro.medium.com/max/2800/1*KIz1fx4xFksqanl2QrZiiQ.png)

Nous avons enveloppé nos composants avec le HOC, de ce fait **count** et **increment** sont passés par props. Nous écrivons à présent du code réutilisable.

- - -

On peut décider de passer des paramètres à notre hoc pour lui dire par exemple d’incrémenter par X au lieu d’incrémenter par 1.

```
const WithCounter = (WrappedComponent , x) => {...}
```

Et puis,

```
export default WithCounter(HoverCounter , 4)
export default WithCounter(ClickCounter, 2)
```

Voila c’était tout , retrouver les sources [ici](https://github.com/Sidibedev/highOrderComponent) et une petite démo [ici](https://trusting-knuth-0458a0.netlify.app/).

- - -

Les HOC sont très pratiques pour partager de la logique entre des composants. Vous pouvez les utiliser dans beaucoup de uses case, aujourd’hui on a vu ensemble un cas très simple mais n’hésitez pas à aller en profondeur pour mieux comprendre.

Si vous avez trouvé cet article intéressant n’hésitez pas à le partager à d’autres développeurs.
