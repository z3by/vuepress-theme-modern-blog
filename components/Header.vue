<template>
  <header
    id="header"
    class="shadow"
  >
    <nav class="p-3 d-flex menu-wrapper justify-content-between">
      <div class="d-flex blog-info-wrapper">
        <router-link
          to="/"
          class="text-decoration-none m-0"
        >
          <div v-if="$themeConfig.logo" class="card-img-bg d-inline-block blog-logo">
            <img
              :src="$themeConfig.logo"
              height="70px"
            />
          </div>
        </router-link>

        <div class="h4 blog-title text-center">{{ $site.title }}</div>
      </div>

      <Menu />
      <SearchBox />
      <Toggle :isToggleActive="isToggleActive" @onActivateToggle="isToggleActive = !isToggleActive" />
    </nav>

    <Menu :class="{ mobileVisible: isToggleActive }" />
  </header>
</template>

<script>
import Menu from "./Menu";
import SearchBox from "./SearchBox";
import Toggle from "./Toggle";

export default {
  components: {
    Menu,
    SearchBox,
    Toggle,
  },
  data() {
    return {
      isToggleActive: false
    }
  },
};
</script>

<style lang="stylus">
.menu-wrapper {
  position: relative
}

.blog-title {
  color: $accentColor;
  margin: auto !important;
}

@media only screen and (max-width: $MQMobile) {
  .blog-info-wrapper {
    width: 100%;
  }
}

@media only screen and (min-width: $MQMobile) {
  .menu-wrapper > .el-menu .search-wrapper {
    display: none !important;
  }

  #header > .el-menu {
    display: none !important;
  }
}
</style>