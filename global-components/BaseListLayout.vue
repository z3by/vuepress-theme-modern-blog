<template>
  <div id="base-list-layout" align="center">
    <header class="home-hero" :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}">
      <h1>{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <PostsList :posts="pages" title="Latest Posts"/>
    <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PostsList from "@theme/components/PostsList.vue";
import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: { PostsList },

  data() {
    return {
      paginationComponent: null
    };
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    }
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    }
  }
};
</script>

<style lang="stylus">
.common-layout {
  .content-wrapper {
    padding-bottom: 80px;
  }
}

header.home-hero {
  height: 600px;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    margin: 0;
    font-size: 4em;

    @media (max-width: 600px) {
      font-size: 2em;
    }
  }

  h2 {
    color: darken(white, 9%);
    margin-top: 0;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    font-weight: 300;
  }
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


