# vuepress-theme-modern-blog

[![NPM version](https://badgen.net/npm/v/vuepress-theme-modern-blog)](https://npmjs.com/package/vuepress-theme-modern-blog) [![NPM downloads](https://badgen.net/npm/dt/vuepress-theme-modern-blog)](https://npmjs.com/package/vuepress-theme-modern-blog)

## Features

- builtin comments support
- Sitemap generator support
- Comments support
- Auto meta tags
- Better SEO experience
- Social Sharing
- Google Analytics
- Smooth Scrolling
- Reading Time
- Reading Progress
- PWA Support

## Sites

- [Live Example](https://vp-modern.z3by.com/)

## Install

```bash
yarn add vuepress-theme-modern-blog -D
# OR npm install vuepress-theme-modern-blog -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  theme: 'modern-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  }
}
```

## Options

### nav

- Type: `Array<{ text: string, link: string }>`
- Default: `undefined`

e.g.

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Archive',
        link: '/archive/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
  },
}
```

### footer

#### footer.contact


- Type: `Array<{ type: ContactType, link: string }>`
- Default: `undefined`

Contact information, displayed on the left side of footer.

```js
module.exports = {
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ],
    },
  },
}
```

For now `ContactType` supports following enums:

- github
- facebook
- twitter
- instagram
- linkedin
- phone

::: tip
Welcome contribution of adding more built-in contact type.
:::

#### footer.copyright

Copyright information, displayed on the right side of footer.

```js
module.exports = {
  themeConfig: {
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
```

### modifyBlogPluginOptions

A function used to modify the default blog plugin options of [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/). It's common to use it to add apply custom [document classifiers](https://vuepress-plugin-blog.ulivz.com/#document-classifier). e.g.

```js
module.exports = {
  themeConfig: {
    modifyBlogPluginOptions(blogPlugnOptions) {
      const writingDirectoryClassifier = {
        id: 'writing',
        dirname: '_writings',
        path: '/writings/',
        layout: 'IndexWriting',
        itemLayout: 'Writing',
        itemPermalink: '/writings/:year/:month/:day/:slug',
        pagination: {
          perPagePosts: 5,
        },
      }
      blogPlugnOptions.directories.push(writingDirectoryClassifier)
      return blogPlugnOptions
    },
  },
}
```

Here is the default blog plugin options:

```js
{
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      layout: 'IndexPost',
      itemLayout: 'Post',
      itemPermalink: '/:year/:month/:day/:slug',
      pagination: {
        perPagePosts: 5,
      },
    },
    {
      id: 'archive',
      dirname: '_archive',
      path: '/archive/',
      layout: 'IndexArchive',
      itemLayout: 'Post',
      itemPermalink: '/archive/:year/:month/:day/:slug',
      pagination: {
        perPagePosts: 5,
      },
    },
  ],
  frontmatters: [
    {
      id: "tag",
      keys: ['tag', 'tags'],
      path: '/tag/',
      layout: 'Tags',
      frontmatter: { title: 'Tags' },
      itemlayout: 'Tag',
      pagination: {
        perPagePosts: 5
      }
    },
  ]
}
```

**Also see:**

- [Document Classifier](https://vuepress-plugin-blog.ulivz.com/#document-classifier)


### summary

- Type: `boolean` or `object`
- Default: `true`

Whether to extract summary from source markdowns. If this value is set to `true`,
the `summaryLenth` will be used to slice the text. If, on the other hand, this
value is set to an object, you'll be able to specify a more complex pattern for
the extraction of the summary. Available options:

```js
{
  /*
  Get as many paragraphs as the value of this property is set to. A paragraph
  is considered to be a chunk of text followed by a "\n\n", but you can use
  "paragraphsSeparator" in order to specify your own separator.

  Once the chunks of text are splitted (with "paragraphsSeparator"), the first N
  (as specified by the "paragraphs" property) chunks are obtained and joined
  using the "paragrahpsJoiner" text, which is "<br><br>" by default.
  */
  paragraphs: 0,
  paragraphsSeparator: "\n\n",
  paragrahpsJoiner: "<br><br>",

  /*
  If you want the summary to extend until a given text pattern is found, use
  this option. If the "stopSymbol" symbol is not found, the "summaryLength" will
  be used as a safe fallback.
  */
  stopSymbol: '',

  /*
  Use these two options to append and/or prepend any text you want to the
  summary.
  */
  prepend: ''
  append: '',
}
```


### summaryLength

- Type: `number`
- Default: `200`

Set the length of summary.

### pwa

- Type: `boolean`
- Default: `false`

Whether to enable PWA support. this option is powered by the [official
PWA plugin](https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html).

if you enable this option, the default options of the internal PWA
plugin is as follows:

```js
{
  serviceWorker: true,
  updatePopup: true
}
```

### about

to make this works you need to create a new page and add the proper config to `themeConfig.nav`
then set the layout to `AboutLayout` in page frontmatter.

- Type: `{ fullName: string, bio: string, image: string }`
- Default: `undefined`

### heroImage

- Type: `string`
- Default: `"https://source.unsplash.com/random"`

### disqus

- Type: `string`
- Default: `undefined`

Disqus website short name check [official website](https://disqus.com/)

### sitemap

- Type: `boolean`
- Default: `false`

to enable this plugin you need to define:


```js
...
  sitemap: true,
  hostname: "https://ahmadmostafa.com/" // your own hostname
...
```

### socialShare

- Type: `boolean`
- Default: `false`

to enable this plugin you need also to define:

#### socialShareNetworks

- Type: `Array< string >`
- Default: `undefined`

refer to [docs](https://sns.goyfe.com/)

e.g

```js
  socialShare: true,
  socialShareNetworks: ["twitter", "facebook"],
```

### googleAnalytics
Google analytics tracking ID

- Type: `string`
- Default: `undefined`

### paginationComponent

- Type: `string`
- Default: `Pagination`

Custom the pagination component.

The default is the 
[pagination component](https://vuepress-plugin-blog.ulivz.com/components/#pagination) powerful by 
[@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog):

<img src="./assets/pagination.png" width="250" height="" style=""/>

You can set this option to `SimplePagination` to enable another out-of-box 
[simple pagination component](https://vuepress-plugin-blog.ulivz.com/components/#simplepagination):

<img src="./assets/simple-pagination.png" width="250" height="" style=""/>

You can also wirte a custom pagination component and register it as a global component. then pass its
name to this option.

## Front Matter

### tag/tags

- Type: `string|string[]`
- Default: `200`

e.g.

```markdown
---
tags: 
  - JavaScript
  - DOM
---
```

### date

Date published

```markdown
---
date: 2016-10-20 20:44:40
---
```

### author

Author name

```markdown
---
author: Ahmad Mostafa
---
```

### location

```markdown
---
location: Jordan
---
```

### description

Post summary

```markdown
---
description: some description
---
```

### title

title will be shown in the posts list

```markdown
---
title: Front Matter in VuePress
---
```


### image

header image for the post item

```markdown
---
image: https://source.unsplash.com/random
---
```
