<template>
  <div id="vuperess-theme-blog__post-layout">
    <main class="vuepress-blog-theme-content">
      <img :src="$frontmatter.image" :alt="$frontmatter.title" v-if="$frontmatter.image" />
      <h1 align="center">{{ $frontmatter.title }}</h1>
      <PostInfo
        :date="$frontmatter.date"
        :timeToRead="$page.readingTime.text"
        :location="$frontmatter.location"
      />
      <hr />
      <Content />
      <Toc />
      <ClientOnly v-if="$themeConfig.disqus">
        <Disqus :shortname="$themeConfig.disqus" />
      </ClientOnly>
    </main>
  </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  components: {
    Toc,
    PostInfo
  }
};
</script>

<style lang="stylus">
.vuepress-blog-theme-content {
  font-size: 20px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;
  padding: 15px;
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

