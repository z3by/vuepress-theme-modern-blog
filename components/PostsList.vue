<template>
  <main class="my-5">
    <div class="p-3">
      <h2 class="mb-3 h4 font-weight-bold">
        <span class="text-primary">#</span> {{title}}
      </h2>
      <post-card
        v-for="post in posts"
        :key="post.key"
        :post="post"
        class="mb-4 cursor-pointer"
        :body-style="{ padding: '1rem' }"
        shadow="hover"
      >
      </post-card>

    </div>
  </main>
</template>

<script>
import PostCard from "@theme/components/PostCard.vue";

export default {
  props: ["posts", "title"],
  components: {
    'post-card': PostCard
  }
};
</script>

<style lang="stylus">
.cursor-pointer {
  cursor: pointer;
}
</style>