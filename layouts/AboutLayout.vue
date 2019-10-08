<template>
  <div>
    <div align="center" class="card">
      <div class="card-header">
        <img src="/images/bg_1.png" alt="Ahmad Mostafa" class="card-img" />
        <h1>{{ $themeConfig.fullName }}</h1>
      </div>
      <p>{{ $themeConfig.fullDescription }}</p>
      <hr />
      <ul class="contact" v-if="contact">
        <li class="contact-item" v-for="item in contact" :key="item.text">
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon
  },

  methods: {
    getIconComponentName(contactType) {
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
        default:
          return "";
      }
    }
  },

  computed: {
    contact() {
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

    copyright() {
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
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  overflow: hidden;
  transition: all 0.4s ease;

  .card-img {
    transition: all 0.4s ease;
  }

  .card-header {
    background: linear-gradient(to right, #B993D6, #8CA6DB);
    padding-top: 50px;
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