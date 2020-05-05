<template>
  <div id="vuperess-theme-blog__post-layout">
    <Toc />
    <transition name="el-fade-in-linear">
      <main class="vuepress-blog-theme-content">
        <el-card body-style="padding: 0" class="mb-4">
          <img
            :src="$withBase($frontmatter.image)"
            :alt="$frontmatter.title"
            v-if="$frontmatter.image"
            class="w-100"
          />
          <div class="p-3">
            <h1 align="center">{{ $frontmatter.title }}</h1>
            <PostInfo
              :date="$frontmatter.date"
              :timeToRead="$page.readingTime.text"
              :location="$frontmatter.location"
              class="text-secondary d-flex justify-content-center my-3"
            />
          </div>
        </el-card>

        <el-card class="py-3 px-3 mb-4" v-if="$themeConfig.posts && $themeConfig.posts.prepend && $themeConfig.posts.prepend.length > 0">
          <span v-html="$themeConfig.posts.prepend"></span>
        </el-card>

        <el-card class="py-3 px-3 mb-4">
          <Content />
        </el-card>

        <el-card class="py-3 px-3 mb-4" v-if="$themeConfig.posts && $themeConfig.posts.append && $themeConfig.posts.append.length > 0">
          <span v-html="$themeConfig.posts.append"></span>
        </el-card>

        <el-card class="mb-4" v-if="featured_posts.length">
          <div slot="header" class="clearfix">
            <h5 class="m-0">Read More</h5>
          </div>
          <FeaturedPosts class="my-4" :posts="featured_posts" />
        </el-card>

        <el-card>
          <div slot="header" class="clearfix">
            <h5 class="m-0">Tags</h5>
          </div>
          <div>
            <router-link
              :to="'/tag/' + tag"
              v-for="tag in $page.frontmatter.tags"
              :key="tag"
              class="el-button el-button--small text-decoration-none d-inline-block"
              >#{{ tag }}</router-link
            >
          </div>
        </el-card>

        <ClientOnly v-if="$themeConfig.disqus">
          <el-card class="comments-area my-4">
            <div slot="header" class="clearfix">
              <h5 class="m-0">Leave a comment!</h5>
            </div>
            <Disqus :shortname="$themeConfig.disqus" class="disqus-comments" />
          </el-card>
        </ClientOnly>
      </main>
    </transition>
  </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";
import PostInfo from "@theme/components/PostInfo.vue";
import FeaturedPosts from "@theme/components/FeaturedPosts.vue";

export default {
  components: {
    Toc,
    PostInfo,
    FeaturedPosts
  },
  computed: {
    featured_posts() {
      return this.$site.pages.filter(page => page.frontmatter.featured == true);
    }
  }
};
</script>

<style lang="stylus">
#vuperess-theme-blog__post-layout {
  position: relative;
}

.vuepress-blog-theme-content {
  font-size: 16px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;
  padding: 15px;
  max-width: 860px !important;

}

.post-tags {
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.disqus-comments {
  margin-top: 0rem;
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>
