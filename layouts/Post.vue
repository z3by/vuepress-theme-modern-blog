<template>
  <div id="vuperess-theme-blog__post-layout">
    <main class="vuepress-blog-theme-content">
      <img
        :src="$frontmatter.image"
        :alt="$frontmatter.title"
        v-if="$frontmatter.image"
      />
      <h1 align="center">{{ $frontmatter.title }}</h1>
      <PostInfo
        :date="$frontmatter.date"
        :timeToRead="$page.readingTime.text"
        :location="$frontmatter.location"
        class="text-secondary d-flex justify-content-center my-3"
      />
      <hr>
      <div class="d-flex justify-content-center">
        <router-link
          :to="'/tag/'+tag"
          v-for="tag in $page.frontmatter.tags"
          :key="tag"
          class="el-button el-button--small text-decoration-none"
        >#{{tag}}</router-link>
      </div>
      <hr />
      <Content />
      <Toc />
      <ClientOnly v-if="$themeConfig.disqus">
        <div class="comments-area mt-5 pt-5">
          <Disqus
            :shortname="$themeConfig.disqus"
            class="disqus-comments"
          />
        </div>
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
    PostInfo,
  }
};
</script>

<style lang="stylus">
.vuepress-blog-theme-content {
  font-size: 16px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;
  padding: 15px;
}

.post-tags {
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.disqus-comments {
  margin-top: 0rem;
}

.blog-tag {
  display: inline-flex;
  align-items: center;
  height: 45px;
  word-break: break-word;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0 15px;
  border-radius: 5px;
  font-weight: 300;
  text-align: left;
  box-sizing: border-box;
  transition: background-color 0.3s;
  color: #222;
  border: 1px solid #222;
  transition: all 0.5s;

  &:hover {
    color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
  }

  a {
    text-decoration: none !important;
  }
}

@media screen and (max-width: 768px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

