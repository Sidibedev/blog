---
template: BlogPost
path: /Expoweb
date: 2020-05-14T19:02:24.624Z
title: Create And Deploy Web apps and Pwas with Expo
thumbnail: /assets/interface-3614766_1280.png
---


- - -



Expo is an amazing tool which, in addition to allowing you to create ANDROID and IOS mobile applications, also gives you the possibility of creating web applications and progressive web app (pwa) very easily from the same Javascript and React codebase 😍.

![](https://cdn-images-1.medium.com/max/1600/1*0ZSoKvS3RnIkODAA2HcUaw.gif)

In this article, we will explore all the steps from the creation of an expo web project to the deployment on netlify.

![](https://cdn-images-1.medium.com/max/1600/1*Z6oha4SEnP8fTSyDAqg4JA.gif)

If you’re new to Expo, i created a series of videos about Expo available on [youtube](https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ).

By the way this article is also written in French. You can read the french version [here](https://medium.com/@sidibemouhamed/expo-pour-le-web-2c3ddf4f7ceb?source=your_stories_page---------------------------).

### How it works ? 🛠

Developing for the web is just like your are developing your expo mobile app. You’ll use the same components (View, Text etc) that will be executed on the web. In addition, you have access to almost all the Expo SDK Features.

### The web app💊

In this guide, we will create a simple web app that will allow users to upload a picture from their computer , and then they will be able to rotate the image.

![](https://cdn-images-1.medium.com/max/1600/1*tGHAV9yItR_FISNYM7HGqQ.gif)

### Create the project 💡

We need to install the expo-cli to create a Expo project

```

```

We can now use the expo-cli to create a fresh expo project by running:

```

```

![](https://cdn-images-1.medium.com/max/1600/1*cz--IjVLepNB6tOTcNsTYg.gif)

Done ✅

If you look in the app.json file under platforms , we can see that our app is executable on the web. That’s pretty cool.

![](https://cdn-images-1.medium.com/max/1600/1*cgCk3RPSkbNof7ztO0A0FA.png)

### Run the project 🚗

Now let’s run our expo project on the web:

```

```

When you run this command, your app will be automatically launched on your browser.

![](https://cdn-images-1.medium.com/max/1600/1*HMV9wQc_9PC9CA83OYxu1A.png)

That’s cool, we just created our first web app with Expo. 🎉🎉🎉🎊

### Develop the app 💻

We’ll need to install two features of the Expo SDK:

* **expo-image-picker :**pick an image from the user gallery or camera

```

```

* **expo-image-manipulator :**manipulate an image : flip , rotate etc

```

```

After that, we can import them into our app.js file.

```

```

```

```

Let’s declare our state that will contain the uri of the selected image.

```

```

The upload function

![](https://cdn-images-1.medium.com/max/1600/1*dGHDzcKRK_bnZW9C52sCTg.png)

Upload function

The rotate function

![](https://cdn-images-1.medium.com/max/1600/1*Em_udQRVmfz0iM8EfHNBEw.png)

Rotate function

A simple view with the upload button , the rotate button and the selected image.

![](https://cdn-images-1.medium.com/max/1600/1*1H2rYKtmNCONBDWyyIhbPA.png)

Render

#### DEMO

![](https://cdn-images-1.medium.com/max/1600/1*Hi1FoH_KhjaRSXj45TYtaw.gif)

Web app

![](https://cdn-images-1.medium.com/max/1600/1*XYNBJwyM9yPZtfv6VV4Flw.gif)

Native Mobile app

The same code is running on the web and on an ios phone. Expo is cross-platform

> Write once, run everywhere

### Deploy the app 🚀

Now we are going to deploy our app and make it usable by people.

#### BUILD

Building with expo is so easy. In just one command you can build your app

```

```

This command will build our app and save the final product inside the build folder : **web-build**

![](https://cdn-images-1.medium.com/max/1600/1*_ifgp5_G_aVs9aUpAIeBhg.png)

Build

If you want to test your app locally, just run

```

```

and open : <http://localhost:5000>

#### DEPLOYMENT

We can easily deploy our app with netlify

* Install the netlify-cli globally

```

```

* Deploy

```

```

![](https://cdn-images-1.medium.com/max/1600/1*s-lY35wb3a2r0Y6zigjzkw.gif)

Déploiement netlify

![](https://cdn-images-1.medium.com/max/1600/1*ZydDJ8GS_stDpCvt7FYTtg.png)

**Our app is now live**🎉🎉🎉🎉

![](https://cdn-images-1.medium.com/max/1600/1*2bkeAVlzDFR0ZkWkUXrm9g.png)

App live

Netlify allow you to do continus delivery. With this setup every time you push your code to git, Netlify automatically deploy your site with the newest code.

How it works ?

1. [Start a new Netlify project](https://app.netlify.com/signup)
2. Pick your Git hosting service and select your repository
3. Click `Build your site`

- - -

You can test our final app [here](https://5eb5c036ddc1b083156f7c95--imagerotation.netlify.app/).

### Progressive Web App 🎁

Something really cool with building web app with Expo is that **by default**your web app is a **progressive web app** , you don’t need to do anything special to enable PWAs. That’s awesome 🎊

Pwa are installable :

![](https://cdn-images-1.medium.com/max/1600/1*152VAy4MEzG_Kp-_xlhz-A.png)

![](https://cdn-images-1.medium.com/max/1600/1*QURoPTVC3o2WRuV7nLh9VQ.png)

It’s like now a desktop app

![](https://cdn-images-1.medium.com/max/1600/1*ter4XsvVfcEg8kkMalxYSA.gif)

PWA

When you access the site via a smartphone you can also install it and then the app is visible in the homeScreen of the phone as a native app.

![](https://cdn-images-1.medium.com/max/1600/1*xBlxCMbpo2uWlYc-44N31w.gif)

This is just a default pwa with basics configurations , there is a [guide](https://docs.expo.io/guides/progressive-web-apps/) if you want to customize your pwa.

It is all you need to do to create and deploy a web app and pwa with Expo.

- - -

*The code is available on[GitHub](https://github.com/Sidibedev/ExpoImageRotation).*

Thanks [Evan Bacon](https://medium.com/u/16b715de038f) for this amazing work.

Thanks for reading and share if you found this article helpful. 😀🚀
