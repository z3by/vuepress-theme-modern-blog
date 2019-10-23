<template>
  <div
    class="recommended-posts"
    v-if="posts.length"
  >
    <PostsList
      :posts="posts"
      title="Continue Reading"
      type="horizontal"
    />
  </div>
</template>

<script>
import PostsList from "@theme/components/PostsList.vue";

export default {
  components: {
    PostsList
  },
  computed: {
    posts () {
      const postTags = this.$page.frontmatter.tags;
      if (!postTags) {
        return [];
      }
      return this.$site.pages
        .filter(
          p =>
            p.frontmatter.tags &&
            p.key !== this.$page.key &&
            p.frontmatter.tags.includes(
              postTags[Math.floor(Math.random() * postTags.length)]
            )
        )
        .slice(0, 3);
    }
  }
};
</script>

<style lang="stylus">
.recommended-posts {
  margin-top: 4rem;
  margin-bottom: 4rem;
  min-width: 1200px;

  .ui-post {
    margin-right: 1rem;
    min-height: 100%;
  }
}
</style>