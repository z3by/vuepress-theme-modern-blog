<template>
  <header
    id="header"
    class="shadow"
  >
    <nav class="p-3 d-flex justify-content-between">
      <router-link
        to="/"
        class="text-decoration-none h4 m-0"
      >
        <div v-if="$themeConfig.logo" class="card-img-bg d-inline-block">
          <img
            :src="$themeConfig.logo"
            height="70px"
          />
        </div>
        {{ $site.title }}
      </router-link>

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
          class="mb-n3"
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

      <SearchBox />
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