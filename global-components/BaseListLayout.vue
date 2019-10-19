<template>
  <div id="base-list-layout" align="center">
    <header class="home-hero" :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}">
      <h1>{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <div class="ui-posts" align="left">
      <h2>Latest Articles</h2>
      <div class="ui-post" v-for="page in pages" :key="page.key">
        <div
          class="ui-post-image"
          :style="{backgroundImage: `url(${page.frontmatter.image})`}"
          v-if="page.frontmatter.image"
        ></div>
        <div class="ui-post-body">
          <div class="ui-post-title">
            <NavLink :link="page.path">{{ page.title }}</NavLink>
          </div>
          <div
            class="ui-post-description"
            v-if="page.frontmatter.description"
          >{{ page.frontmatter.description || page.description }}</div>
          <div class="ui-post-summary" v-if="page.summary">
            {{ page.summary }}
            <router-link :to="page.path" class="read-more">Read more</router-link>
          </div>
        </div>
        <hr />
        <PostInfo
          :date="page.frontmatter.date"
          :timeToRead="page.readingTime.text"
          :location="page.frontmatter.location"
        />
      </div>
    </div>

    <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PostInfo from "../components/PostInfo";
import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: { PostInfo },

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

.ui-posts {
  max-width: 800px;
  margin-top: 50px;
  margin-right: 15px;
  margin-left: 15px;
}

.ui-post {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 10px;
  padding-top: 15px;
  margin-bottom: 25px;
  border-radius: 14px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #FFF;

  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  }

  &:last-child {
    border-bottom: 0px;
    margin-bottom: 0px;
  }

  p {
    margin: 0;
  }
}

.ui-post-body {
  padding: 15px;
}

.read-more {
  color: $secondaryColor;
}

.ui-post-image {
  height: 200px;
  background-size: cover;
  margin-bottom: 15px;
  border-radius: 10px;
}

.ui-post-title {
  font-size: 24px;
  border-bottom: 0;
  margin-bottom: 10px;

  a {
    cursor: pointer;
    color: #222;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.ui-post-description {
  font-size: 16px;
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;
}

.ui-post-author {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.84);
  margin-bottom: 3px;
  font-weight: 400;

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


