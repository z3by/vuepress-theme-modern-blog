module.exports = {
  title: "VuePress Blog Example",
  description: "This is a blog example built by VuePress",
  theme: require.resolve("../../"),
  summaryLength: 500,
  themeConfig: {
    summary: true,

    // Example of advanced summary usage
    /*
    summary: {
      // Use the first two paragraphs
      paragraphs: 2,

      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",

      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      paragraphsJoiner: "",

      // If we didn't want to use the "paragraphs" functionalty, and istead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",

      // How about we add an emoji at the beginning of our summary?
      prepend: "🔈",

      // ... what about at the end?
      append: "📖",
    },
    */
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house"
      },
      {
        text: "Projects",
        link: "/projects/",
        icon: "el-icon-folder"
      }
    ],
    // Let's say that we want to add a small message at the beginning or at the
    // end of each post. This is the place!
    posts: {
      prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
      append: "Hi, I hope you've <b>enjoyed</b> this post!",
    },
    sitemap: true, // enables sitemap plugin
    hostname: "https://ahmadmostafa.com/", // required for sitemap
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
    googleAnalytics: "", // Google Analytics tracking ID
    about: {
      fullName: "Ahmad Mostafa",
      bio: "I am a passionate Software Engineer, I love Vue.js ♥ ...",
      image: "https://www.ahmadmostafa.com/images/bg_1.png"
    },
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by"
        },
        {
          type: "instagram",
          link: "https://instagram.com"
        },
        {
          type: "linkedin",
          link: "https://linkedin.com"
        },
        {
          type: "twitter",
          link: "https://twitter.com"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: ""
        }
      ]
    }
  }
};
