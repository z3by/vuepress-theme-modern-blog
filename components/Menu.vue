<template>
  <el-menu
    v-if="$themeConfig.nav"
    :default-active="activeIndex"
    mode="horizontal"
    class="d-flex justify-content-center border-0 align-items-end"
  >
    <el-menu-item
      v-for="item in $themeConfig.nav"
      :index="item.link"
      :key="item.link"
      @click="activeIndex !== item.link && $router.push(item.link)"
      class=""
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

    <el-menu-item>
      <SearchBox />
    </el-menu-item>
  </el-menu>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
  components: { SearchBox },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
}
</script>

<style lang="stylus">
.el-menu-item.is-active {
  border-bottom: 3px solid $accentColor !important;
}

.el-menu {
  &.mobileVisible {
    flex-direction: column;
    align-items: center !important;
    border-top: 1px solid #eee !important;
  }
}

@media only screen and (max-width: $MQMobile) {
  .menu-wrapper > .search-wrapper {
    display: none !important;
  }

  .el-menu:not(.mobileVisible) {
    display: none !important;
  }

  .el-menu {
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