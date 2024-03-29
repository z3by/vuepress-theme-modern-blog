---
date: '2019-10-14'
slug: vuepress-modern-blog-theme
tags:
- vue.js
- blog
title: Create a modern vuepress blog in 5 minutes!
description: Create a modern vuepress blog in 5 minutes!
author: Ahmad Mostafa
location: Irbid-Jordan
image: https://i.picsum.photos/id/100/800/600.jpg
meta:
  - name: title
    content: Create a modern vuepress blog in 5 minutes!
  - name: description
    content: create a modern vuepress blog
  - name: keywords
    content: Ahmad Mostafa, Vuepress, Vue.js, Vuepress website, vuepress blog, vuepress theme, vuepress blog theme, vue blog, create vuepress blog, blog theme, create a blog
  - name: author
    content: Ahmad Mostafa
  - name: language
    content: English
featured: true
---


### get started

at the end of this tutorial you will create a vuepress blog that looks and feels like this demo [http://vp-modern.z3by.com](http://vp-modern.z3by.com),

You can scaffold your project how ever you want, here we will use [Create Vuepress](https://github.com/vuepressjs/create-vuepress) with the Blog boilerplate.

so let's get started by running this command in an empty directory

```bash
yarn create vuepress
```

Now you will be prompted to choose what boilerplate you want to go with, let's select blog

![image](/images/vuepress-modern-blog-theme/2.png)

After that you will be prompted for some basic info.

![image](/images/vuepress-modern-blog-theme/3.jpg)

then, let's open the project with a good code editor (Visual Studio Code :wink:)

The directory structure will look like this
![image](/images/vuepress-modern-blog-theme/4.png)

all posts will go inside `/blog/_posts/`
let's install dependencies and run a development serve by running

```bash
yarn && yarn dev
```

you can access the development server at [http://localhost:8080/](http://localhost:8080/)

### Install My theme

Let's install my theme by running

```bash
yarn add -D vuepress-theme-modern-blog
```

Then let's change Vuepress config,
open `/blog/.vuepress/config.js` then change theme value from

```js
theme: '@vuepress/theme-blog',
```

to

```js
theme: 'modern-blog',
```

you might need to restart the development server.

### Add Frontmatter metadata to the posts

Let's take one of the demo posts generated by the first step and let's add some new Frontmatter metadata into it.

Current metadata is on the upper section of the post that is located withing `---` mark,
like this

```yml
---
date: 2018-11-7
tag:
  - frontmatter
  - vuepress
author: ULIVZ
location: Hangzhou
---
```

We can add some values that will improve how the post looks, for example we can specify title, description and Image.

```yml
---
date: 2018-11-7
tag:
  - frontmatter
  - vuepress
author: ULIVZ
location: Hangzhou
title: Front Matter in VuePress
description: What is Front Matter in Vuepress 🤔🤔🤔
image: https://static.qdskill.com/2018/05/vuepress.jpg
---
```

Now you can see the difference

![image](/images/vuepress-modern-blog-theme/5.png)

**NOTE** to use internal image link you can put your image inside the public directory in `.vuepress/public/images` then the image value will be like this

```yml
image: /images/<YOUR_IMAGE_HERE>
```

### Increase Posts per page

now the current config shows only 2 Posts per page, to increase this number we will modify blog plugin options by modifying this method in `/blog/.vuepress/config.js`

```js
    // path: /blog/.vuepress/config.js
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
```

we will modify it to be

```js
    modifyBlogPluginOptions(blogPluginOptions) {
      blogPluginOptions["directories"].find(
        el => el.id == "post"
      ).pagination.lengthPerPage = 10;
      return blogPluginOptions;
    },
```

it is not a magic you can check [this](https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions) to see what we have done here.

## Customize Theme

### Change theme Colors

to change theme colors let's navigate to `blog/.vuepress/styles/palette.styl`

you can see that it contains some [Stylus](http://stylus-lang.com/) variables, let's change the `$accentColor` to `#6A82FB`
and let's add a new variable and let's name it `$secondaryColor` and give it a value of `#FC5C7D`

:tada: Now you can see that the whole theme colors did change

### add custom styling

now you can see that te footer colors looks ugly! I did this on purpose :smiling_imp: to let you add your own styling and not to stick to mine!

to change Footer style you can inspect the page using your browser and check the proper css selector for the element you want to change, in our case it is a `<footer>` element with a class attribute set to `footer`

so let's go to `.vuepress/styles/index.styl` and let's add some styling for example

```stylus
footer.footer
  background lighten(#000, 20%) !important
```

you might need `!important` statement in some cases not all cases, but it is a good practice to use it wisely.

### Change Hero Image

this theme is using [Unsplash Random API](https://source.unsplash.com/) as a place holder for the Hero Image, to replace it with your own image just add your image to themeConfig like this

```js
themeConfig: {
    heroImage: "<YOUR_NEW_IMAGE_URL>",
    ...
```

## Add commenting functionality

We will use [Disqus](https://disqus.com/) as a commenting engine, so go ahead and create an account, and get the `Short Website Name` from Disqus configurations, put it inside themeConfig object in `.vuepress/config.js` as follows

```js
themeConfig: {
    disqus: "<DISQUS WEBSITE SHORT NAME>",
    ...
```

now you will see this cool comments box after each post

![image](/images/vuepress-modern-blog-theme/6.png)

## Add google analytics

after deploying your Blog you will need to know some statistics about your website, how much visitors you have and where your website visits are coming from, etc...

to have these cool features we will incorporate Google Analytics, to get started you just need to create an account on Google analytics, then you need to create a property that is linked to your domain, after that you can get the `Tracking ID` of this property, it is usually composed of some numbers, prefixed with `UA-`
copy this value and add it to themeConfig this way:

```js
themeConfig: {
    googleAnalytics: "UA-************", // replace this value with your tracking ID
    ...
```

## Add Sitemap

Sitemaps are very important for your website to be indexed by google, you can learn more about Sitemaps [here](https://support.google.com/webmasters/answer/156184?hl=en)

We will auto generate a sitemap for our blog, all you need to do is to add these two settings to you themeConfig

```js
themeConfig: {
    sitemap: true,
    hostname: "https://www.yourdomain.com/",
    ...
```

replace hostname value with your own domain name, for example mine is  [https://www.ahmadmostafa.com/](https://www.ahmadmostafa.com/)

## Add Social-Sharing feature

It is good to allow your users to share your posts on their Social Media accounts, [Disqus](https://disqus.com/) already offers this feature, but it is good to make it more visible to your users so you encourage them to share your content, we will add these settings to themeConfig to enable social sharing feature

```js
themeConfig: {
    socialShare: true,
    socialShareNetworks: ["twitter", "facebook"],
    ...
```

you can add other networks to `socialShareNetworks` array.

now you can see a cool floating button on the right side of your posts that help your users sharing your content! :tada:

That's It! :tada:
go and add some cool posts! :wink:
