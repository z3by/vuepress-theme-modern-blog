<template>
  <footer class="footer">
    <div class="footer-left-wrap">
      <ul
        v-if="contact"
        class="contact"
      >
        <li
          v-for="(item, index) in contact"
          :key="index"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent" />
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>

    <div class="footer-right-wrap">
      <ul
        v-if="copyright"
        class="copyright"
      >
        <li
          v-for="(item, index) in copyright"
          :key="index"
          class="copyright-item"
        >
          <template v-if="item.link">
            <NavLink :link="item.link">
              {{ item.text }}
            </NavLink>
          </template>
          <template v-else>
            <a>{{ item.text }}</a>
          </template>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  PhoneIcon,
} from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
    PhoneIcon,
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
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright () {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName (contactType) {
      switch (contactType) {
        case 'github':
          return 'GithubIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'youtube':
          return 'YoutubeIcon'
        case 'phone':
          return 'PhoneIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  height: 60px;
  box-sizing: border-box;
  background: linear-gradient(to right, darken($accentColor, 50%), darken($secondaryColor, 70%));
  color: #FFF;
  display: flex;
  padding: 15px 32px;
  word-break: wrap;

  .footer-left-wrap {
    line-height: 30px;
    flex: 1;
    display: flex;

    .contact {
      display: flex;

      .contact-item {
        flex: 1;
        margin-right: 10px;

        a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #FFF;
          }
        }
      }
    }
  }

  .footer-right-wrap {
    flex: 1;
    display: none;
    align-items: center;

    @media (min-width: $MQNarrow) {
      display: flex;
      justify-content: flex-end;
    }

    .copyright {
      display: flex;
      justify-content: flex-end;

      .copyright-item {
        flex: 0 0 auto;
        padding: 0 10px;
        position: relative;
        line-height: 12px;

        &:last-child {
          border-right: none;
        }

        a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    height: 100px;
    flex-direction: column;

    .footer-left-wrap {
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
