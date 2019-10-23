<template>
  <div class="ui-post">
    <router-link :to="post.path">
      <div
        class="ui-post-image"
        :style="{backgroundImage: `url(${post.frontmatter.image})`}"
        v-if="post.frontmatter.image"
      ></div>
      <div class="ui-post-body">
        <div class="ui-post-title">
          <NavLink :link="post.path">{{ post.title }}</NavLink>
        </div>
        <div
          class="ui-post-description"
          v-if="post.frontmatter.description"
        >{{ post.frontmatter.description || post.description }}</div>
        <div
          class="ui-post-summary"
          v-if="post.summary"
        >
          {{ post.summary }}
          <router-link
            :to="post.path"
            class="read-more"
          >Read more</router-link>
        </div>
      </div>
      <PostInfo
        :date="post.frontmatter.date"
        :timeToRead="post.readingTime.text"
        :location="post.frontmatter.location"
      />
    </router-link>
  </div>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  name: "post-card",
  props: ["post"],
  components: {
    PostInfo
  }
}
</script>

<style lang="stylus">
.ui-post {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 10px;
  padding-top: 15px;
  margin-bottom: 25px;
  border-radius: 14px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  transition: all ease 0.4s;

  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  &:last-child {
    border-bottom: 0px;
    margin-bottom: 0px;
  }

  p {
    margin: 0;
  }

  .ui-post-body {
    padding: 15px;
  }

  .read-more {
    color: $secondaryColor;
  }

  .ui-post-image {
    height: 17rem;
    background-size: cover;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  .ui-post-title {
    font-size: 24px;
    border-bottom: 0;
    margin-bottom: 10px;

    a {
      cursor: pointer;
      color: #222;
      transition: all 0.2s;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .ui-post-description {
    font-size: 16px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 200;
  }

  .ui-post-author {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.84);
    margin-bottom: 3px;
    font-weight: 400;

    svg {
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
}
</style>