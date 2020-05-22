<template>
  <transition
    name="el-fade-in-linear"
    mode="in-out"
  >
    <el-card
      class="mb-4 cursor-pointer post-card"
      shadow="hover"
      :body-style="{ padding: '0rem' }"
    >
      <div
        class="ui-post row px-3"
        @click="go(post.path)"
      >
        <div
          v-if="post.frontmatter.postcard_image || post.frontmatter.image"
          class="ui-post-image col-sm-12 col-md-6 col-lg-5 py-3"
        >
          <img
            :src="$withBase(post.frontmatter.image)"
            :alt="post.title"
            class="w-100 rounded"
          >
        </div>
        <div class="col-sm-12 col-md-6 col-lg-7 py-4">
          <div>
            <h3 class="h3">
              <router-link
                :to="post.path"
                class="text-decoration-none"
              >
                {{ post.title }}
              </router-link>
            </h3>
          </div>
          <div
            v-if="post.summary"
            class="ui-post-summary text-secondary my-2"
          >
            <!-- eslint-disable-next-line -->
            <p align="justify" v-html="post.summary"/>
            <router-link
              :to="post.path"
              class="read-more"
            >
              {{
                $t("read_more")
              }}
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="post-info d-flex justify-content-end text-secondary p-4 border-top border-light"
      >
        <PostInfo
          :date="post.frontmatter.date"
          :time-to-read="post.readingTime"
          :location="post.frontmatter.location"
        />
      </div>
    </el-card>
  </transition>
</template>

<script>
import PostInfo from '@theme/components/PostInfo.vue'
export default {
  name: 'PostCard',
  components: {
    PostInfo,
  },
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
  },
}
</script>
<style lang="stylus">

.post-info {
  @media only screen and (max-width: $MQMobile) {
    padding-top: 0 !important;
    justify-content: start !important;

    div.post-info-item {
      @media only screen and (max-width: $MQMobile) {
        text-align: left;
      }
    }
  }
}
</style>
