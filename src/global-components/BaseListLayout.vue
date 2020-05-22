<template>
  <div
    id="base-list-layout"
    class="zoomIn"
  >
    <header
      class="home-hero"
      :style="{
        backgroundImage: 'url(' + $withBase($themeConfig.heroImage) + ')'
      }"
    >
      <div class="p-3 text-center text-light">
        <h1 class="display-3">
          {{ $site.title }}
        </h1>
        <p class="font-weight-light h3 text-light">
          {{ $site.description }}
        </p>
        <a
          href="#posts"
          class="el-button el-button--primary my-3"
        >{{
          $t("latest_posts")
        }}</a>
      </div>
    </header>
    <featured-posts class="my-5 d-sm-none d-lg-block" />
    <el-container class="row px-lg-4">
      <aside class="tags col-md-12 col-lg-3  py-0 py-lg-5">
        <About v-if="$themeConfig.about" />
        <BlogTags :tags="tags" />
      </aside>
      <div
        id="posts"
        class="col-md-12 col-lg-9 py-3 py-lg-5"
      >
        <PostsList :posts="pages" />

        <div class="d-flex">
          <component
            :is="paginationComponent"
            v-if="$pagination.length > 1 && paginationComponent"
          />
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import PostsList from '@theme/components/PostsList.vue'
import About from '@theme/components/About.vue'
import FeaturedPosts from '@theme/components/FeaturedPosts'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { PostsList, Pagination, FeaturedPosts, About },
  computed: {
    pages () {
      return this.$pagination.pages
    },
    tags () {
      return this.$tag.list
    },
  },
  created () {
    this.paginationComponent = this.getPaginationComponent()
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
  },
}
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>

<style lang="stylus">
header.home-hero {
  background-color: #999;
  background-blend-mode: multiply;
  padding: 10rem 0rem;
  background-repeat: none;
  background-size: cover;
}

.tags, #posts {
  @media only screen and (max-width: $MQMobile) {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
