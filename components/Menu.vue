<template>
  <el-menu
    v-if="$themeConfig.nav"
    :default-active="activeIndex"
    mode="horizontal"
    class="d-flex justify-content-center border-0"
  >
    <el-menu-item
      v-for="item in $themeConfig.nav"
      :index="item.link"
      :key="item.link"
      @click="activeIndex !== item.link && $router.push(item.link)"
    >
      <router-link
        :to="item.link"
        class="text-decoration-none d-block h-100 w-100"
      >
        <i
          v-if="item.icon"
          :class="item.icon"
        ></i>
        {{ item.text }}
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
}
</script>

<style lang="stylus">
.el-menu {
  align-items: flex-end;

  .el-menu-item {
    &.is-active {
      border-bottom: 3px solid $accentColor !important;
    }
  }
}

@media only screen and (max-width: $MQMobile) {
  .el-menu {
    flex-direction: column;
    align-items: center;

    .el-menu-item {
      display: block;
    }
  }
}

@media only screen and (min-width: $MQMobile) {
  .el-menu {
    .el-menu-item {
      margin-bottom: -1rem !important;
    }
  }
}


</style>