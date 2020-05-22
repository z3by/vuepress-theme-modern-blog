<template>
  <div
    v-if="posts && posts.length"
    class="container featured-posts"
  >
    <el-carousel
      :interval="4000"
      type="card"
      height="300px"
    >
      <el-carousel-item
        v-for="post in posts"
        :key="post.key"
        class="carousel-card bg-cover border-10"
        :style="{
          'background-image': $withBase(post.frontmatter.image)
            ? `url(${$withBase(post.frontmatter.image)})`
            : 'none',
          'background-blend-mode': 'multiply',
          'background-size': 'cover',
          'background-color': 'rgba(0,0,0,0.3)'
        }"
      >
        <div
          class="carousel-card-content d-flex justify-content-center align-items-center flex-column h-100"
        >
          <h4 class="story-title text-center h4 mb-3 text-light">
            {{ post.title }}
          </h4>
          <router-link
            :to="post.path"
            class="el-button el-button--primary"
          >
            {{ $t("read_this_post") }} <i class="el-icon-arrow-right" />
          </router-link>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'FeaturedPosts',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
