<template>
  <div id="base-list-layout">
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $themeConfig.heroImage + ')'}"
    >
      <h1 class="font-dancing">{{ $site.title }}</h1>
      <h2>{{ $site.description }}</h2>
    </header>
    <featured-posts class="mb-5"></featured-posts>
    <div class="row container-fluid flex-row-reverse">
      <aside class="col-sm-12 col-lg-3">
        <div>
          <h3>Tags</h3>
          <ul class="list-unstyled">
            <li
              v-for="tag in tags"
              :key="tag.name"
              class="d-inline-block mx-1 my-2"
            >
              <el-badge
                :value="tag.pages.length"
                class="item"
              >
                <router-link
                  :to="tag.path"
                  class="el-button el-button--small text-decoration-none"
                >

                  {{tag.name}}
                </router-link>
              </el-badge>
            </li>
          </ul>
        </div>
      </aside>
      <div class="col-sm-12 col-lg-9">
        <PostsList
          :posts="pages"
          title="Latest Posts"
        />

        <div class="d-flex">
          <component
            v-if="$pagination.length > 1 && paginationComponent"
            :is="paginationComponent"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PostsList from "@theme/components/PostsList.vue";
import FeaturedPosts from "@theme/components/FeaturedPosts";
import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { PostsList, Pagination, FeaturedPosts },
  created () {
    this.paginationComponent = this.getPaginationComponent()
  },
  computed: {
    pages () {
      return this.$pagination.pages;
    },
    tags () {
      return this.$tag.list
    }
  },
  methods: {
    getPaginationComponent () {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    },
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
  height: 680px;
  background-size: cover;
  background-color: #aaa;
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    margin: 0;
    font-size: 4em;
    text-align: center;

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


