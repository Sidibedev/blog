---
template: BlogPost
path: /Create-and-Deploy-Web-Apps-and-PWAs-with-Expo
date: 2020-05-15T20:04:57.223Z
title: "Create and Deploy Web Apps and PWAs with Expo \U0001F578"
metaDescription: "Create and Deploy Web Apps and PWAs with Expo \U0001F578"
thumbnail: /assets/interface-3614766_1280.png
---
Expo is an amazing tool which lets you create not only Android and iOS mobile applications but also web apps and progressive web applications (PWA) very easily from one single Javascript and React codebase 😍.

![](https://miro.medium.com/freeze/max/60/1*0ZSoKvS3RnIkODAA2HcUaw.gif?q=20)

![](https://miro.medium.com/max/960/1*0ZSoKvS3RnIkODAA2HcUaw.gif)

In this article, we will explore all the steps from the creation of an Expo web project to its deployment on Netlify.

![](https://miro.medium.com/freeze/max/60/1*Z6oha4SEnP8fTSyDAqg4JA.gif?q=20)

![](https://miro.medium.com/max/1000/1*Z6oha4SEnP8fTSyDAqg4JA.gif)

If you’re new to Expo, I’ve made a series of videos about Expo available on [Youtube](https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ).

# How it works 🛠

Developing for the web is just like you‘re developing your Expo mobile app. You’ll use the same components (View, Text, etc.) that will be executed on the web. In addition, you have access to almost all the Expo SDK Features.

# Our web app

In this guide, we’ll create a simple web app that lets users to upload a picture from their computer, and (if they choose) rotate the image.

![](https://miro.medium.com/freeze/max/60/1*tGHAV9yItR_FISNYM7HGqQ.gif?q=20)

![](https://miro.medium.com/max/2562/1*tGHAV9yItR_FISNYM7HGqQ.gif)

# Creating the project 💡

We need to install`expo-cli`to create a Expo project:

```
npm install -g expo-cli
```

This lets us use `expo-cli `to create a fresh Expo project by running: 

```
expo init
```

![](https://miro.medium.com/freeze/max/60/1*cz--IjVLepNB6tOTcNsTYg.gif?q=20)

![](https://miro.medium.com/max/1620/1*cz--IjVLepNB6tOTcNsTYg.gif)

Done ✅

If you look in the app.json file under platforms, you can see that our app is executable on the web. That’s pretty cool.

![](https://miro.medium.com/max/60/1*cgCk3RPSkbNof7ztO0A0FA.png?q=20)

![](https://miro.medium.com/max/1424/1*cgCk3RPSkbNof7ztO0A0FA.png)

# Run the project 🚗

Now let’s run our Expo project on the web:

```
expo start -w
```

When you run this command, your app will automatically launch in your browser:

![](https://miro.medium.com/max/60/1*HMV9wQc_9PC9CA83OYxu1A.png?q=20)

![](https://miro.medium.com/max/4200/1*HMV9wQc_9PC9CA83OYxu1A.png)

That’s cool: we just created our first web app with Expo! 🎉🎉🎉🎊

# Develop the app 💻

We’ll need to install two of the Expo SDK modules for the app we have mind:

* **expo-image-picker,** to pick an image from the user’s gallery or camera

```
expo install expo-image-picker
```

* **expo-image-manipulator,** to manipulate images (flipping, rotating, etc.)

```
expo install expo-image-manipulator
```

After that, we can import them into our app.js file:

```
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
```

Let’s declare our state, which will contain the uri of the selected image.

```
const [selectedImage, setSelectedImage] = React.useState(“”);
```

Our upload function will look like this:

![](https://miro.medium.com/max/60/1*dGHDzcKRK_bnZW9C52sCTg.png?q=20)

![](https://miro.medium.com/max/3048/1*dGHDzcKRK_bnZW9C52sCTg.png)

Upload function

And our rotate function:

![](https://miro.medium.com/max/60/1*Em_udQRVmfz0iM8EfHNBEw.png?q=20)

![](https://miro.medium.com/max/2464/1*Em_udQRVmfz0iM8EfHNBEw.png)

Rotate function

A simple view containing our upload button, our rotate button and the selected image:

![](https://miro.medium.com/max/60/1*1H2rYKtmNCONBDWyyIhbPA.png?q=20)

![](https://miro.medium.com/max/3072/1*1H2rYKtmNCONBDWyyIhbPA.png)

Render

## DEMO: write once, run everywhere!

The same code is runs here on the web and also on an iOS phone — Expo is multi-platform!

![](https://miro.medium.com/freeze/max/60/1*Hi1FoH_KhjaRSXj45TYtaw.gif?q=20)

![](https://miro.medium.com/max/1168/1*Hi1FoH_KhjaRSXj45TYtaw.gif)

Web app

![](https://miro.medium.com/freeze/max/34/1*XYNBJwyM9yPZtfv6VV4Flw.gif?q=20)

![](https://miro.medium.com/max/784/1*XYNBJwyM9yPZtfv6VV4Flw.gif)

Native Mobile app

# Deploying the app 🚀

Now, we’re going to deploy our app so others can use it.

## BUILD

Building with Expo is so easy: you can build your app in just one command:

```
expo build:web
```

This command builds our app and savse the final product inside the build folder:**web-build**

![](https://miro.medium.com/max/60/1*_ifgp5_G_aVs9aUpAIeBhg.png?q=20)

![](https://miro.medium.com/max/4556/1*_ifgp5_G_aVs9aUpAIeBhg.png)

Build

If you want to test your app locally, just run

```
npx serve web-build
```

and open :[http://localhost:5000](http://localhost:5000/)

## DEPLOYMENT

We can easily deploy our app with Netlify.

* Install the `netlify-cli `globally:

```
npm install netlify-cli -g
```

* Deploy:

```
netlify deploy
```

![](https://miro.medium.com/freeze/max/60/1*s-lY35wb3a2r0Y6zigjzkw.gif?q=20)

![](https://miro.medium.com/max/2016/1*s-lY35wb3a2r0Y6zigjzkw.gif)

Déploiement netlify

![](https://miro.medium.com/max/60/1*ZydDJ8GS_stDpCvt7FYTtg.png?q=20)

![](https://miro.medium.com/max/5052/1*ZydDJ8GS_stDpCvt7FYTtg.png)

## **Our app is now live**🎉🎉🎉🎉

![](https://miro.medium.com/max/60/1*2bkeAVlzDFR0ZkWkUXrm9g.png?q=20)

![](https://miro.medium.com/max/3456/1*2bkeAVlzDFR0ZkWkUXrm9g.png)

App live

## Continuous delivery

Netlify enables continuous delivery: with this setup, every time you push your code to git, Netlify will automatically deploy your site with the newest code. Here’s how it works:

1. [Start a new Netlify project](https://app.netlify.com/signup)
2. Pick your Git hosting service and select your repository
3. Click`Build your site`

You can test our final app [here](https://5eb5c036ddc1b083156f7c95--imagerotation.netlify.app/).

- - -

# Progressive Web Apps (PWA) 🎁

Something really cool with building web apps with Expo is that **by default** your web app is a **progressive web app**— you don’t need to do anything special to enable PWAs. That’s awesome 🎊

PWAs are installable:

![](https://miro.medium.com/max/60/1*152VAy4MEzG_Kp-_xlhz-A.png?q=20)

![](https://miro.medium.com/max/3632/1*152VAy4MEzG_Kp-_xlhz-A.png)

![](https://miro.medium.com/max/60/1*QURoPTVC3o2WRuV7nLh9VQ.png?q=20)

![](https://miro.medium.com/max/3696/1*QURoPTVC3o2WRuV7nLh9VQ.png)

It’s now essentially a desktop app:

![](https://miro.medium.com/freeze/max/60/1*ter4XsvVfcEg8kkMalxYSA.gif?q=20)

![](https://miro.medium.com/max/1312/1*ter4XsvVfcEg8kkMalxYSA.gif)

PWA

When you access the site via a smartphone, you can also install it so that the app is accessible from the home screen of your phone like a Native app.

![](https://miro.medium.com/freeze/max/32/1*xBlxCMbpo2uWlYc-44N31w.gif?q=20)

![](https://miro.medium.com/max/752/1*xBlxCMbpo2uWlYc-44N31w.gif)

This is just a default PWA with basics configurations; there’s a [guide](https://docs.expo.io/guides/progressive-web-apps/) if you want to customize your PWA.

And that’s all you need to do to create and deploy a mobile app, web app and a PWA with Expo.

- - -

The code is available on [GitHub](https://github.com/Sidibedev/ExpoImageRotation).Thanks [Evan Bacon](https://medium.com/u/16b715de038f?source=post_page-----a286cc35d83c----------------------) for this amazing work. Thanks for reading and share if you found this article helpful. 😀🚀

*This article was written by our awesome guest-blogger, [Mohamed aly sidibe](https://medium.com/u/1ada57a98f84?source=post_page-----a286cc35d83c----------------------). You can follow him here[on Medium](https://medium.com/@sidibemouhamed) or [on Twitter](https://twitter.com/mouhamedaly01) to keep in touch.*
