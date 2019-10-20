<template>
  <div class="featured-posts" v-if="posts.length">
    <PostsList :posts="posts" title="Continue Reading" />
  </div>
</template>

<script>
import PostsList from "@theme/components/PostsList.vue";

export default {
  components: {
    PostsList
  },
  computed: {
    posts() {
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
.featured-posts {
  margin-top: 4rem;
  margin-bottom: 4rem;

  .featured-post-group {
    list-style-type: none;
    padding: 0;

    .featured-post {
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
      padding: 0.3rem;
    }
  }
}
</style>