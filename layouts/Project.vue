<template>
  <div id="vuperess-theme-blog__post-layout">
    <main class="vuepress-blog-theme-content">
      <el-card
        body-style="padding: 1rem 2rem;"
        class="my-4"
      >
        <div>
          <h1 class="text-center text-capitalize">{{ $page.frontmatter.title || $page.title }}</h1>
          <hr>
          <p class="text-secondary">{{$page.frontmatter.description}}</p>
          <ul class="languages-list">
            <li
              v-for="lang in $page.frontmatter.languages"
              :key="lang"
            >{{lang}}</li>
          </ul>
        </div>
      </el-card>
      <el-card body-style="padding: 1rem 2rem;">
        <Content />
      </el-card>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.languages-list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  color: lighten($accentColor, 40%);
  font-family: monospace;

  li {
    padding: 0 5px;
  }
}
</style>
<style src="prismjs/themes/prism-okaidia.css"></style>

