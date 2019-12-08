<template>
  <el-card
    class="mb-4 cursor-pointer"
    :body-style="{ padding: '1rem' }"
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
          :src="$withBase(post.frontmatter.image)"
          :alt="post.title"
          class="w-100 rounded"
        >
      </div>
      <div class="col-sm-12 col-md-8">
        <div>
          <h3>
            <router-link
              :to="post.path"
              class="text-decoration-none"
            >
              {{ post.title }}
            </router-link>
          </h3>
        </div>
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
      </div>
    </div>
    <div class="d-flex justify-content-end text-secondary pt-3 mt-2 border-top border-light">
      <PostInfo
        :date="post.frontmatter.date"
        :timeToRead="post.readingTime.text"
        :location="post.frontmatter.location"
      />
    </div>
  </el-card>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  name: 'post-card',
  props: ['post'],
  components: {
    PostInfo
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>