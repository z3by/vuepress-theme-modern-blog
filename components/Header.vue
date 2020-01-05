<template>
  <header
    id="header"
    class="shadow"
  >
    <div class="p-3 d-flex justify-content-between">
      <router-link
        to="/"
        class="text-decoration-none h4"
      >
        {{ $site.title }}
      </router-link>
      <SearchBox />
    </div>
    <nav class="px-5">
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
    </nav>
  </header>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
  components: { SearchBox },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  }
};
</script>

<style lang="stylus">
.el-menu-item.is-active {
  border-bottom: 3px solid $accentColor !important;
}
</style>