---
template: BlogPost
path: /add-dark-mode-to-your-react-native-app
date: 2020-08-15T20:12:45.562Z
title: Add dark mode to your react native app
thumbnail: /assets/1_mIQwGuCDnPlx78q1cO2-sA.png
---
Dark Mode was introduced in iOS 13. It adds a darker theme to iOS and allows you to do the same for your app. It’s a great addition to give to your users so they can use your app in a darker design.

In this blog post, we are going to see how to add it in your react native app very quickly with React navigation v5 and Expo.

- - -

## Create the expo app

if you dont have the expo-cli installed run this before:

```
npm install -g expo-cli

```

and then :

```
expo init

```

## Adding navigation

Let’s install React navigation(latest version v5)

```
yarn add @react-navigation/native

```

We need to install a few more libraries for this to work.

In the project directory, run

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

```

This will install versions of these libraries that are compatible.

We have React navigation installed in our project we can start using it by creating a simple stack navigator with 2 screens.

* Install the stack navigator

```
 yarn add @react-navigation/stack

```

* Imports

```
import { createStackNavigator } from “@react-navigation/stack”;
import { NavigationContainer } from “@react-navigation/native”;
```

* Create the stack

```
const Stack = createStackNavigator();

```

![Image for post](https://miro.medium.com/max/60/1*TQ6LHPjdsoSa-l54PC1tqw.png?q=20)

![Image for post](https://miro.medium.com/max/2152/1*TQ6LHPjdsoSa-l54PC1tqw.png)

![Image for post](https://miro.medium.com/freeze/max/60/1*Zemd40vMXZAf66I9Hh6V9Q.gif?q=20)

![Image for post](https://miro.medium.com/max/1312/1*Zemd40vMXZAf66I9Hh6V9Q.gif)

## Adding dark mode support

Now we want to provide light and dark themes based on the user preference.

* Let’s install react-native-appearance to detect the operating system color scheme preferences.

```
expo install react-native-appearance

```

* Then, in app.json, under the`ios`key we need to add "userInterfaceStyle": "automatic"

```
"ios": {"userInterfaceStyle": "automatic"}

```

* Now we can import AppearanceProvider and useColorScheme(return the operating system color scheme)

```
import { AppearanceProvider, useColorScheme } from “react-native-appearance”;

```

![Image for post](https://miro.medium.com/max/60/1*OIfUwi41N5ezN97YENcz7A.png?q=20)

![Image for post](https://miro.medium.com/max/1956/1*OIfUwi41N5ezN97YENcz7A.png)

* React navigation provide by default a Dark theme and a defaultTheme we can import it and use it

```
import { DefaultTheme, DarkTheme } from “@react-navigation/native”;

```

![Image for post](https://miro.medium.com/max/60/1*-Pf7_JTCappkI2E42dKp-A.png?q=20)

![Image for post](https://miro.medium.com/max/2760/1*-Pf7_JTCappkI2E42dKp-A.png)

![Image for post](https://miro.medium.com/freeze/max/28/1*rGaoEfNQLS1JW29HGxAk4A.gif?q=20)

![Image for post](https://miro.medium.com/max/704/1*rGaoEfNQLS1JW29HGxAk4A.gif)

IphoneXr

When I change the color scheme of my operating system, the theme of my app changes automatically. Cool 😍

But we can notice that the text is not displayed when the theme is dark because this is a black text in a black background. We can adjust the text color by using the current theme color text.

To gain access to the theme in any component that is rendered inside the navigation container: we can use the`useTheme`hook. It returns the theme object.

![Image for post](https://miro.medium.com/max/60/1*TcVQx6MdIWc94yNWpuS3oA.png?q=20)

![Image for post](https://miro.medium.com/max/2320/1*TcVQx6MdIWc94yNWpuS3oA.png)

![Image for post](https://miro.medium.com/max/28/1*OW1SYLzft5lBXBP3IddTkQ.png?q=20)

![Image for post](https://miro.medium.com/max/1656/1*OW1SYLzft5lBXBP3IddTkQ.png)

![Image for post](https://miro.medium.com/max/28/1*evqgBcwcgPfHoHKN2e5o2Q.png?q=20)

![Image for post](https://miro.medium.com/max/1656/1*evqgBcwcgPfHoHKN2e5o2Q.png)

The colored text automatically adapts to the current schema.

## Custom themes

Instead of using themes provided by React navigation we can create our own themes.

A theme is a JS object containing a list of colors to use. It contains the following properties:

* `dark`(`boolean`): Whether this is a dark theme or a light theme
* `colors`(`object`): Various colors used by react navigation components:
* `primary`(`string`): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
* `background`(`string`): The color of various backgrounds, such as background color for the screens.
* `card`(`string`): The background color of card-like elements, such as headers, tab bars etc.
* `text`(`string`): The text color of various elements.
* `border`(`string`): The color of borders, e.g. header border, tab bar border etc.
* `notification`(`string`): The color of Tab Navigator badge.

When creating a custom theme, you will need to provide all of these properties.

![Image for post](https://miro.medium.com/max/60/1*Aretbq14pi7oUMouZ5Jdtg.png?q=20)

![Image for post](https://miro.medium.com/max/2724/1*Aretbq14pi7oUMouZ5Jdtg.png)

![Image for post](https://miro.medium.com/max/28/1*GkNoFgoVbIXfuwVe81BQvA.png?q=20)

![Image for post](https://miro.medium.com/max/1656/1*GkNoFgoVbIXfuwVe81BQvA.png)

![Image for post](https://miro.medium.com/max/28/1*x55Io1VKil-gGlJ7nXKmug.png?q=20)

![Image for post](https://miro.medium.com/max/1656/1*x55Io1VKil-gGlJ7nXKmug.png)

Done ✅

- - -

This is what i wanted to share with you today, thanks for reading.

Visit my [youtube channel](https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ?view_as=subscriber) for more content.
