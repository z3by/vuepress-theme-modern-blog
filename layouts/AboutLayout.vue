<template>
  <el-container>
    <el-main>
      <el-card
        align="center"
        class="mx-auto my-5 zoomIn"
      >
        <div class="card-header rounded p-3">
          <div class="rounded-circle card-img-bg d-inline-block">
            <img
              :src="$withBase($themeConfig.about.image)"
              :alt="$themeConfig.about.fullName"
              width="200px"
            />
          </div>
          <h1 class="mt-2 text-light">{{ $themeConfig.about.fullName }}</h1>
        </div>
        <div class="p-3">
          <p>{{ $themeConfig.about.bio }}</p>
        </div>
        <hr class="mt-0"/>
        <ul
          class="list-inline m-0"
          v-if="contact"
        >
          <li
            class="list-inline-item"
            v-for="item in contact"
            :key="item.text"
          >
            <NavLink :link="item.link">
              <component :is="item.iconComponent"></component>
              {{ item.text }}
            </NavLink>
          </li>
        </ul>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedinIcon
  },

  methods: {
    getIconComponentName (contactType) {
      switch (contactType) {
        case "github":
          return "GithubIcon";
        case "facebook":
          return "FacebookIcon";
        case "twitter":
          return "TwitterIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "youtube":
          return "YoutubeIcon";
        default:
          return "";
      }
    }
  },

  computed: {
    contact () {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },

    copyright () {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
main.el-main {
  min-height: calc(100vh - 193px );

  .el-card {
    max-width: 30rem;

    .card-header {
      min-height: 220px;
      background-color: darken($accentColor, 50%);
    }

    .card-img-bg {
      background-color: darken($accentColor, 20%);
    }
  }
}

</style>