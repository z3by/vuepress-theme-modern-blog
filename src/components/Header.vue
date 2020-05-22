<template>
  <header
    id="header"
    class="shadow"
  >
    <nav class="p-3 d-flex desktop-menu justify-content-between">
      <div class="d-flex blog-info-wrapper">
        <router-link
          to="/"
          class="text-decoration-none m-0"
        >
          <div
            v-if="$themeConfig.logo"
            class="card-img-bg d-inline-block blog-logo"
          >
            <img
              :src="$themeConfig.logo"
              height="70px"
            >
          </div>
        </router-link>

        <router-link
          to="/"
          class="blog-title"
        >
          <div class="h4 text-center">
            {{ $site.title }}
          </div>
        </router-link>
      </div>

      <Menu />
      <SearchBox />
      <Toggle
        :is-toggle-active="isToggleActive"
        @onActivateToggle="isToggleActive = !isToggleActive"
      />
    </nav>

    <div
      class="flex-column align-items-center mobile-menu pb-4"
      :class="{ mobileVisible: isToggleActive }"
    >
      <Menu />
      <SearchBox class="pt-4" />
    </div>
  </header>
</template>

<script>
import Menu from './Menu'
import SearchBox from './SearchBox'
import Toggle from './Toggle'

export default {
  components: {
    Menu,
    SearchBox,
    Toggle,
  },
  data () {
    return {
      isToggleActive: false,
    }
  },
}
</script>

<style lang="stylus">
.blog-title {
  color: $accentColor;
  margin: auto !important;
  text-decoration: none !important;
}

@media only screen and (max-width: $MQMobile) {
  .blog-info-wrapper {
    width: 100%;
  }

  .desktop-menu {
    .el-menu {
      display: none !important;
    }

    .search-wrapper {
      display: none !important;
    }
  }

  .mobile-menu {
    display: flex;
    border-top: 1px solid #eee !important;

    &:not(.mobileVisible) {
      display: none !important;
    }
  }
}

@media only screen and (min-width: $MQMobile) {
  #header > .el-menu {
    display: none !important;
  }

  .mobile-menu {
    display: none !important;
  }
}
</style>
