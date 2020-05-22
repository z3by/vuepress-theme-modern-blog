<template>
  <main class="">
    <div class="posts-list">
      <post-card
        v-for="post in posts"
        :key="post.key"
        :post="post"
        class="mb-4 cursor-pointer"
        shadow="hover"
      />
    </div>
  </main>
</template>

<script>
import PostCard from '@theme/components/PostCard.vue'

export default {
  components: {
    'post-card': PostCard,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus">
.cursor-pointer {
  cursor: pointer;
}
</style>
