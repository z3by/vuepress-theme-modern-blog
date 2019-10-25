<template>
  <header id="header">
    <div class="header-wrapper">
      <div class="py-5">
        <router-link
          to="/"
          class="text-decoration-none"
        >
          <h1 class="text-center m-0 font-dancing">
            {{ $site.title }}
          </h1>
        </router-link>
      </div>
      <nav class="d-flex justify-content-between align-items-center px-5">
        <el-menu
          v-if="$themeConfig.nav"
          :default-active="activeIndex"
          mode="horizontal"
          class="border-0"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, index) in $themeConfig.nav"
            :index="index.toString()"
            :key="item.text"
          >
            <router-link :to="item.link" class="text-decoration-none d-block h-100 w-100">
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
    </div>
  </header>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
  components: { SearchBox },
  data () {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
