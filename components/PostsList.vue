<template>
  <main>
    <el-card
      v-for="post in posts"
      :key="post.key"
      class="my-3 cursor-pointer"
      shadow="hover"
    >
      <div
        class="ui-post row"
        @click="go(post.path)"
      >
        <div
          class="ui-post-image col-sm-12 col-md-4"
          v-if="post.frontmatter.image"
        >
          <img
            :src="post.frontmatter.image"
            :alt="post.title"
            class="w-100 rounded"
          >
        </div>
        <div class="ui-post-body col-sm-12 col-md-8 text-secondary">
          <h3 class="mt-3">
            <router-link
              :to="post.path"
              class="text-decoration-none"
            >
              {{ post.title }}
            </router-link>
          </h3>
          <div
            class="ui-post-summary mt-2  h-50"
            v-if="post.summary"
          >
            {{ post.summary }}
            <router-link
              :to="post.path"
              class="read-more"
            >Read more</router-link>
          </div>
          <div class="ui-post-footer">
            <hr>
            <PostInfo
              :date="post.frontmatter.date"
              :timeToRead="post.readingTime.text"
              :location="post.frontmatter.location"
              class="mt-3 d-flex justify-content-center"
            />
          </div>
        </div>
      </div>
    </el-card>
  </main>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  props: ["posts", "title"],
  components: {
    PostInfo
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  }
};
</script>

<style lang="stylus">
.cursor-pointer {
  cursor: pointer;
}
</style>