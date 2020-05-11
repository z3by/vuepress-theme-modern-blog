<template>
  <transition name="el-fade-in-linear" mode="in-out">
    <el-card
      class="mb-4 cursor-pointer"
      :body-style="{ padding: '0rem' }"
      shadow="hover"
    >
      <div class="ui-post row px-3" @click="go(post.path)">
        <div
          class="ui-post-image col-sm-12 col-md-6 col-lg-5 py-3"
          v-if="post.frontmatter.postcard_image || post.frontmatter.image"
          :style="{
            backgroundImage: 'url(' + $withBase(post.frontmatter.postcard_image || post.frontmatter.image) + ')'
          }"
          :alt="post.title"
        >
        </div>
        <div class="col-sm-12 col-md-6 col-lg-7 py-4">
          <div>
            <h3>
              <router-link :to="post.path" class="text-decoration-none">
                {{ post.title }}
              </router-link>
            </h3>
          </div>
          <div class="ui-post-summary text-secondary my-2" v-if="post.summary">
            <span v-html="post.summary"></span>
            <router-link :to="post.path" class="read-more"
              >{{$t('read_more')}}</router-link
            >
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-end text-secondary p-4 border-top border-light"
      >
        <PostInfo
          :date="post.frontmatter.date"
          :timeToRead="post.readingTime"
          :location="post.frontmatter.location"
        />
      </div>
    </el-card>
  </transition>
</template>

<script>
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  name: "post-card",
  props: ["post"],
  components: {
    PostInfo
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
.ui-post-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
}
</style>
