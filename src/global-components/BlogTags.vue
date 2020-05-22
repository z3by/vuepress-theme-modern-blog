<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: '1rem' }"
  >
    <ul class="list-unstyled">
      <li
        v-for="tag in tags"
        :key="tag.name"
        class="d-inline-block mx-2 my-2"
      >
        <el-badge
          :value="tag.pages.length"
          class="item"
        >
          <router-link
            :to="{ path: tag.path, hash: 'posts' }"
            class="el-button el-button--small text-decoration-none"
          >
            {{ tag.name }}
          </router-link>
        </el-badge>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus">
.el-badge__content {
  z-index: 10;
}
</style>
