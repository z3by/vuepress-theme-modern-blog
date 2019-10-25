<template>
  <div class="featured-posts">
    <el-carousel
      :interval="4000"
      type="card"
      height="400px"
    >
      <el-carousel-item
        v-for="post in posts"
        :key="post.key"
        class="bg-light bg-cover border-10"
        :style="{'background-image': post.frontmatter.image ? `url(${post.frontmatter.image})`: 'none', 'background-blend-mode': 'multiply'}"
      >
        <div class="carousel-card-content d-flex justify-content-center align-items-center flex-column h-100">
          <h2 class="story-title text-light text-center h3 mb-3">{{ post.title }}</h2>
          <el-button type="primary">Read this Post <i class="el-icon-arrow-right"></i></el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'featured-posts',
  computed: {
    posts () {
      return this.$site.pages.filter(page => page.frontmatter.featured == true)
    }
  }
};
</script>

<style lang="stylus" scoped>
.featured-posts {
  margin-top: -5rem;
}
</style>