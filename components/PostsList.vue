<template>
  <div
    align="left"
    class="ui-posts"
  >
    <h2>{{ title }}</h2>
    <div>
      <PostCard
        v-for="post in posts"
        :key="post.key"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";
import PostCard from "@theme/components/PostCard.vue";

export default {
  props: ["posts", "title", "type"],
  components: {
    PostInfo,
    PostCard
  }
};
</script>

<style lang="stylus">
.ui-posts {
  max-width: 800px;
  margin-top: 50px;
  margin-right: 15px;
  margin-left: 15px;
}
</style>