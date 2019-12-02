<template>
  <el-container>
    <el-main>
      <el-card
        align="center"
        class="card"
        body-style="padding: 0"
      >
        <div
          class="card-header"
        >
          <img
            :src="$withBase($themeConfig.about.image)"
            :alt="$themeConfig.about.fullName"
            class="card-img"
          />
          <h1>{{ $themeConfig.about.fullName }}</h1>
        </div>

        <p>{{ $themeConfig.about.bio }}</p>
        <hr />
        <ul
          class="contact"
          v-if="contact"
        >
          <li
            class="contact-item"
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

<style scoped lang="stylus">
.card {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  max-width: 400px;
  margin: 100px auto 120px auto;
  overflow: hidden;
  transition: all 0.4s ease;

  .card-img {
    transition: all 0.4s ease;
    max-width: 12rem;
  }

  .card-header {
    background: linear-gradient(to right, lighten($accentColor, 40%), $secondaryColor);
    padding: 0;
    padding-top: 50px;
    min-height: 300px;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: white;
    text-transform: uppercase;
  }

  p {
    padding: 20px 40px 0px 40px;
  }

  .contact {
    display: flex;
    list-style: none;
    justify-content: center;

    .contact-item {
      margin: 0 5px;
    }
  }
}
</style>