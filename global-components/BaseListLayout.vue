<template>
  <div id="base-list-layout" class="zoomIn">
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $withBase($themeConfig.heroImage) + ')'}"
    >
      <div class="p-3 text-center text-light">
        <h1 class="display-3">{{ $site.title }}</h1>
        <h2 class="font-weight-light">{{ $site.description }}</h2>
        <a
          href="#posts"
          class="el-button el-button--primary my-3"
        >Latest Posts</a>
      </div>

    </header>
    <featured-posts class="mt-5 d-sm-none d-lg-block"></featured-posts>
    <el-container class="row flex-row-reverse p-2">
      <aside class="col-sm-12 col-lg-3 mb-2 mt-5 p-3">
        <h2 class="mb-3 h4 font-weight-bold">
          <span class="text-primary">#</span> Tags
        </h2>
        <BlogTags :tags="tags" />
      </aside>
      <div
        class="col-sm-12 col-lg-9"
        id="posts"
      >
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
    </el-container>
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

<style src="prismjs/themes/prism-okaidia.css"></style>


<style>
header.home-hero {
  background-color: #999;
  background-blend-mode: multiply;
  padding: 10rem 0rem;
  background-repeat: none;
  background-size: cover;
}
</style>