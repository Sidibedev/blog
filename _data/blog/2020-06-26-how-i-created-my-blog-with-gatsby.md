---
template: BlogPost
path: /How-I-Created-My-Blog-With-Gatsby
date: 2020-06-27T02:11:03.363Z
title: How I Created my Blog With Gatsby ?
thumbnail: /assets/blog.png
---
- - -

### How I Created My Blog With Gatsby



> As a software developer, one of the best mediums you can use to market yourself is a blog. It’s my firm belief that every software developer who cares about their career should invest in creating a blog.

These words come from a book i am reading : **Soft skills , the software developer’s life manual.**I definitely recommend you [this book](https://www.amazon.fr/Soft-Skills-software-developers-manual/dp/1617292397) if you want to know how to succeed in your career as a developer.

![](https://cdn-images-1.medium.com/max/1600/1*fb5aGJx3cZRZU0UvsKWB6w.jpeg)

Soft Skills

This book talk a lot about blogging and how it is important. Specially when you are a freelancer or consultant like me, you‘ll find that a successful blog can bring many clients your way instead of having to go find them by yourself.

Writing articles can also help you become a better developer and communicator because there is a huge work of researching, coding, learning, behind a blog post.

- - -

There’s another good job that’s inspired me a lot: **[The Prosperous software consultant](https://medium.com/@dabit3/the-prosperous-software-consultant-5dc8d705c5dd)** by [Nader Dabit](https://medium.com/u/695782484bda), he talk about how you can “build bridges” by making content on your blog:

> This also goes back to “Building Bridges”, when you learn something new, give that knowledge away, it helps the community and it helps you!

You should definitely read this one too.

- - -

In just 3 or 4 months of consistent writing, I’ve seen a lot of good results. Recently, my article on the Expo for the web was published on the official Expo blog and I was very happy about it.

- - -

I started writing on medium, which is really great and easy to write on. You can do a lot of cool things like importing articles, statistics, etc. But it seems that it’s not really a platform for developers.

I also tried [dev.to](http://dev.to) which is a very good platform for developers because 99% are programmers or people learning to code. You can follow me there by the way : <https://dev.to/mouhamedaly>

Finally I decided to create my own personal blog. Having my own platform will bring me a lot of benefices:

* I am not dependent on any other platform
* I can monetize my blog: maybe displaying ads
* I can customize it as i want.
* I can still publish on medium or dev.to and redirect readers to my personal blog.
* Etc

- - -

I procrastinated for quite a while before starting the development of my blog.\
I wasn’t motivated to make my website with classic html css or CMS like wordpress(Im not really fan).

But one day while doing research I discovered Gatsby and I fell in love.I realized that Gatsby’s was the perfect tool to create a personal or business website. So i decided to learn it. And for me, *the best way to learn is by practicing.*

# GATSBY

![](https://cdn-images-1.medium.com/max/1600/0*LtqW6FOAzMFveU0P.png)

### What is Gatsby ?

Gatsby is a free and open source framework based on React that helps developers build blazing fast **websites** and **apps.**

Gatsby is generally defined as a powerful static site generator, but very different from other SSGs like jeykill, hugo etc. The particularity of Gatsby is that it allows you to create extremely fast static sites, progressive and high performance web applications.

### How it works ?

Gatsby does all the data fetching during build time. No matter where your data come from you can access it in the same way. Gatsby normalize your data into a graphql api so you can read and display them easily.

At the end gatsby will compile all of this into static assets and then allow you to deploy very quickly your app to a CDN of your choice rather than a traditional server.

Here is a graphic that summarize it:

![](https://cdn-images-1.medium.com/max/1600/1*WmQ-xuhDBxxgV8oyip356Q.png)

# Getting started

## **Gatsby CLI**

```
npm install -g gatsby-cli
```

The above command installs Gatsby CLI globally on your machine so you can use all these commands.

**Create new project**

```
gatsby new gatsby-site
```

**Start project**

```
gatsby develop
```

**Build project**

```
gatsby build
```

## **Gatsby Starter**

The Gatsby CLI tool lets you install **starters**, which are boilerplate Gatsby sites maintained by the community and intended for jump-starting development quickly.

For example if you want to create a blog, you can use the blog starter instead of starting coding from scratch. All the gatsby starters can be found [here](https://www.gatsbyjs.org/starters?v=2).

I found a very nice [starter blog](https://www.gatsbyjs.org/starters/W3Layouts/gatsby-starter-delog/) which I used to quickly get up-and-running.

With this starter I have access to a lot of features like netlify CMS that we will see in the next section, that’s what’s cool about gatsby starters.

I initialized a new project with this starter by running:

```
gatsby new blog https://github.com/W3Layouts/gatsby-starter-delog
```

This command downloads the files and initializes the site by running `npm install`.

After that i can run my app :

```
cd blog 
gatsby develop
```

Gatsby will start a hot-reloading development environment accessible by default at `http://localhost:8000.`

## **Customizing:**

By default the starter looks like this:

![](https://cdn-images-1.medium.com/max/1600/1*cm-HaS-GRULjv6NszTOrGw.png)

After some customization it’s now look like this. I changed colors , added a avatar, changed the fonts etc :

![](https://cdn-images-1.medium.com/max/1600/1*J_FZLnpL-r80ttMxCTy_1g.png)

You can customize your app as you want , it’s just html, css and react.

By the way I created [my own starter](https://www.gatsbyjs.org/starters/Sidibedev/expo-gatsby-starter/) if you want to start a [Expo](http://expo.io)/Gatsby project.

## Gatsby Plugins

Basically Gatsby plugins are just Node packages, so you can install them like other packages in node using NPM.

You need Google analytics? There’s [a plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics) for that.

```
npm install - save gatsby-plugin-google-analytics
```

You need offline support?There’s [a plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-offline) for that.

```
npm install - save gatsby-plugin-offline
```

In short there is a plugin for everything you want to do.

# Netlify and Netlify CMS

## Netlify

**Definition**: Netlify is a platform you can use to automatically build, deploy, serve, and manage your frontend sites and web apps.

There are really a lot of advantages to using netlify in a gatsby site.

* **Continuous integration** : Every time i push my code to github, netlify build a new version of my app and deploy it. I have nothing to do, that’s super cool.
* **Forms** : I have a contact form in my website, so that users can write me. Netlify comes with built-in form handling. I just have to add the`netlify` attribute or `data-netlify="true"` to the `<form>` tag, and i can start receiving messages in my Netlify site admin panel.
* **Domain Settings**: I added my custom domain **[mouhamedaly.dev](https://mouhamedaly.dev)** directly from the netlify admin panel. In just a few minutes my domain was available

## Netlify CMS

**Definition**: Netlify CMS is an **open source headless content management system** which can be used with any static site generator to construct a faster and flexible web app. Netlify CMS is fully extensible, platform agnostic, easy to install and provides a friendly UI to the users.

A CMS is useful because you can add content like blog posts from a dashboard on your website, instead of having to add posts manually with Markdown.

Netlify CMS is preinstalled in this starter, no configuration needed. After starting the app i can access to my netlify cms dashboard at <http://localhost:8000/admin> and add new post.

![](https://cdn-images-1.medium.com/max/1600/1*PxCXugpaVe-_DilA6V83wA.png)

![](https://cdn-images-1.medium.com/max/1600/1*XM9ikKQD07CtBowYMj3E9Q.png)

Every time I add a new post, the content will be stored in my repository and versioned on GitHub because Netlify CMS is Git-based. Also, thanks to [Netlify’s Continuous Deployment](https://www.netlify.com/docs/continuous-deployment/), a new version will be deployed every time i add or edit a post. This is awesome.

# SEO

The better you optimize your blog for **SEO**, the higher your website will be listed on search engine result pages, so more people can find your website.

Using Gatsby makes your site fast and efficient for search engine crawlers to index your pages.

Gatsby is Good at SEO because gatsby pages are **server side rendered** and all the page content is available to search engine crawlers

Right click -> View page source

![](https://cdn-images-1.medium.com/max/1600/1*pwydaZHGZKeMSRQ92usv6Q.gif)

Some tricks i used to improve my SEO

## **React Helmet**

Meta tags are very important for SEO. They tell search engines important information about your web page, such as how they should display it in search results.

React helmet is the plugin i used to add meta data into my web pages.

![](https://cdn-images-1.medium.com/max/1600/1*lT1iYH63iQyjoAU6tMlkPQ.png)

React helmet

With this plugin, attributes you add to your components, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

## Sitemap

An sitemap is a XML file that lists all your website pages, making sure Google can find and crawl them all, also helping it understand your website structure.

The **[gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)** plugin allows you to automatically generate a sitemap with Gatsby and then bots can discover all your pages.

Eh voila :

![](https://cdn-images-1.medium.com/max/1600/1*wsJOshmoF_ohkxhtyRk4SA.png)

LightHouse SEO Test



# PWA

I really like progressive web apps. It was very important for me to have a pwa for my personal blog so users can download it like a native app.

The starter I used already had offline support, so I didn’t have to configure anything.Gatsby is usually is best defined as a pwa generator instead of a static site generator.

They give you all your need to build a [true PWA](https://www.gatsbyjs.org/docs/progressive-web-app/) :

* [**gatsby-plugin-manifes**t](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest) : This makes it possible for users to add your app to their home screen.

![](https://cdn-images-1.medium.com/max/1600/1*w_L_ZeKjAut_E3vfu9XzaQ.gif)

* **[gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline):** Even in offline mode , the user can still navigate into my app and read my blog posts.

![](https://cdn-images-1.medium.com/max/1600/1*vp7aot3JOh6YI8qJ25r2hQ.png)

PWA TEST

# Adaptive loading

[Adaptive Loading](https://www.youtube.com/watch?v=puUPpVrIRkc) is a web performance pattern where sites not just respond based on screen size — they adapt based on actual device hardware.

> *To be a good developer you should also be mindful on all aspects, not only those that the end user see. You must care about performance independently of who is using the app, which device loads it or the time you have to wait for it to be ready.*

After reading many articles about Adaptive loading i decided to include it in my website but this pattern has nothing to do with gatsby. You can add in any react app.

There is a library called [react-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks) that provided a suite of React Hooks for adaptive loading based on a user’s network, data saving preferences, device memory and logical CPU cores.

I can use this React library inside my gatsby project because gatsby is a React framework.

So I can check the type of internet connection of the users and according to that decide what to display to them.

Installation:

```
yarn add react-adaptive-hooks
```

Import :

```
import { useNetworkStatus } from "react-adaptive-hooks/network";
```

Hook :

```
const { effectiveConnectionType } = useNetworkStatus();
```

Usage : If the user has a slow connection i show a SVG avatar image instead of showing my PNG avatar.

![](https://cdn-images-1.medium.com/max/1600/1*fxsws4buAS1mWRFj15ZGSw.png)

![](https://cdn-images-1.medium.com/max/1600/1*E9mExPoRcfg6ICi16OmShA.gif)

Using these hooks and utilities can help you give users a great experience best suited to their device and network constraints.

# Image optimization

Large, unoptimized images dramatically slow down your site.

If you want to optimize your images, there is **[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)**for you.

Gatsby image solve this [problem](https://www.gatsbyjs.org/packages/gatsby-image#problem) by bringing this [solution](https://www.gatsbyjs.org/packages/gatsby-image#solution).

I can lazy load my images and have a nice blur up effect:

![](https://cdn-images-1.medium.com/max/1600/1*zdVm8fjuW7jGsRFXRNeA4w.gif)

For more info on how to install and use the gatsby-image plugin : visit this [page](https://www.gatsbyjs.org/packages/gatsby-image/?=).

There are so many cool things I haven’t mentioned in this article but you can go further and discover gatsby. Their documentation is very well done and the community is very nice.

# Why you should use gatsby ?

Gatsby is a very good framework if you want to build blazing fast **websites** and **apps very quickly.**

### Gatsby make it Simple

Getting started with modern web development is complicated, you have to care about a lot of thing like webpack, postcss, app performance, deployment etc.

* Things are easy with gatsby, you don’t need to worry about all that boilerplate.
* There a plenty of free starters available you can use to quickly get started.
* There is a plugin for everything you want to do.
* SEO friendly
* Progressive web apps generator

### **Gatsby is fun**

Gatsby is built on popular technologies like React and Graphql, so you won’t need to learn a new stack from scratch. If you like creating websites with React and Graphql, you’ll love Gatsby.

Gatsby lets you pull your data from wherever you want: API , markdown files, databases, CMSs like Wordpress and make it available through a graphql API, that’s pretty cool.

### Gatsby is performant

Stop worrying about performance in your web app, Gatsby take care of it for you. Gatsby sites are very very fast.

Here’s what makes gatsby sites very performant:

* Gatsby follows Google’s [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) architectural pattern: **Push** , **Precash**, **Prerender**, **Lazyload.**and other performance best practices
* Generates only static assets : no server needed
* Normalizes third party data
* It supports code splitting, enabling [progressive rendering](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) for your content.

Gatsby does a lot of optimization for us out of the box.

- - -

As a developer, my experience with Gatsby has been wonderful. I really enjoyed building my website with Gatsby ❤️. You should try it, you won’t be disappointed.

\*You also might like to take a look at my other articles:**<https://mouhamedaly.dev>***

Thanks for reading.
