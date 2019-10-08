module.exports = {
  title: "VuePress Blog Example",
  description: "This is a blog example built by VuePress",
  theme: require.resolve("../../"),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/about/"
      }
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShareNetworks: ["facebook", "twitter"],
    about: {
      fullName: "Ahmad Mostafa",
      bio: "I am a passionate Software Engineer, I love Vue.js ♥ ...",
      image: "https://www.ahmadmostafa.com/images/bg_1.png",
    },
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz"
        },
        {
          type: "instagram",
          link: "#"
        },
        {
          type: "linkedin",
          link: "#"
        },
        {
          type: "twitter",
          link: "https://twitter.com/_ulivz"
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

    // paginationComponent: 'SimplePagination'
  }
};
