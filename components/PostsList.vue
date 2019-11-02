<template>
  <main class="px-5">
    <h2>{{title}}</h2>
    <div class="container px-0">
      <el-card
        v-for="post in posts"
        :key="post.key"
        class="my-3 cursor-pointer"
        :body-style="{ padding: '.5rem' }"
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
          <div class="ui-post-body col-sm-12 col-md-8">
            <h3 class="mt-3">
              <router-link
                :to="post.path"
                class="text-decoration-none"
              >
                {{ post.title }}
              </router-link>
            </h3>
            <div
              class="ui-post-summary text-secondary my-2 pr-3"
              v-if="post.summary"
            >
              {{ post.summary }}
              <router-link
                :to="post.path"
                class="read-more"
              >Read more</router-link>
            </div>
            <div class="my-3 d-flex justify-content-end text-secondary">
              <PostInfo
                :date="post.frontmatter.date"
                :timeToRead="post.readingTime.text"
                :location="post.frontmatter.location"
              />
            </div>
          </div>
        </div>
      </el-card>
    </div>
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