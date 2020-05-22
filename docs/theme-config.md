# Theme Options

## nav

- Type: `Array<{ text: string, link: string }>`
- Default: `undefined`

e.g.

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'el-icon-house'
      },
      {
        text: "Projects",
        link: "/projects/",
        icon: "el-icon-folder"
      },
      // Add more
    ],
  },
}
```

## posts

### posts.prepend

- Type: `String`
- Default: `undefined`

Prepend a chunk of text or HTML to the body of each post.

### posts.append

- Type: `String`
- Default: `undefined`

Append a chunk of text or HTML to the body of each post.

```js
module.exports = {
  themeConfig: {
    posts: {
      prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
      append: "Hi, I hope you've <b>enjoyed</b> this post!",
    },
  },
}
```

## footer

### footer.contact

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

### footer.copyright

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

## modifyBlogPluginOptions

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
          lengthPerPage: 5,
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
        lengthPerPage: 5,
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
        lengthPerPage: 5,
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
        lengthPerPage: 5
      }
    },
  ]
}
```

**Also see:**

- [Document Classifier](https://vuepress-plugin-blog.ulivz.com/#document-classifier)


## summary

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


## summaryLength

- Type: `number`
- Default: `200`

Set the length of summary.

## about

to make this works you need to create a new page and add the proper config to `themeConfig.nav`
then set the layout to `AboutLayout` in page frontmatter.

- Type: `{ fullName: string, bio: string, image: string }`
- Default: `undefined`

## heroImage

- Type: `string`
- Default: `"https://source.unsplash.com/random"`

## disqus

- Type: `string`
- Default: `undefined`

Disqus website short name check [official website](https://disqus.com/)


```js
...
  sitemap: true,
  hostname: "https://ahmadmostafa.com/" // your own hostname
...
```

## paginationComponent

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

## tag/tags

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

## date

Date published

```markdown
---
date: 2016-10-20 20:44:40
---
```

## author

Author name

```markdown
---
author: Ahmad Mostafa
---
```

## location

```markdown
---
location: Jordan
---
```

## description

Post summary

```markdown
---
description: some description
---
```

## title

title will be shown in the posts list

```markdown
---
title: Front Matter in VuePress
---
```


## image

header image for the post item and the preview image in the list of posts.

```markdown
---
image: https://source.unsplash.com/random
---
```

## postcard_image

preview image for the post item in the list of posts. This property will
override the "image" property.

```markdown
---
postcard_image: https://source.unsplash.com/random
---
```

## cookies

- Type: `Object`
- Default: `undefined`

This theme supports GDPR cookies notice via the [apertureless/vue-cookie-law](https://github.com/apertureless/vue-cookie-law) package.
If no options are created in the config, the message won't be shown. The options
will be passed as-it to the plugin.

e.g.

```js
module.export = {
  themeConfig: {
    cookies: {
        theme: "dark-lime",
        buttonText: "Ok!",
    }
  },
}
```

## translations

- Type: `Object<{ key: string, value: string }>`
- Default: `undefined`

This theme supports fully localizable UI strings, which means that you can
translate any UI text (e.g. the "Read more" link at the button of each post card).
If no translation string is provided for a particular key, the built-in English
string will be used.

Some of the strings (where it makes sense) support interpolation. You can find
all the localizable strings in the file `plugins/Translations/locale/en.js`.

e.g.

```js
module.exports = {
  themeConfig: {
    translations: {
      read_more: "Leer más",
      time_to_read: "${rounded_time} min de lectura",
    }
  },
}
```
