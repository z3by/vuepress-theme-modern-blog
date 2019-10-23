<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <div class="title">
          <NavLink
            link="/"
            class="home-link"
          >{{ $site.title }}</NavLink>
        </div>
        <div class="header-right-wrap">
          <ul
            class="nav"
            v-if="$themeConfig.nav"
          >
            <li
              class="nav-item"
              v-for="item in $themeConfig.nav"
              :key="item.text"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <SearchBox />
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  components: { SearchBox }
};
</script>

<style lang="stylus">
@import '~@app/style/config';

#header {
  z-index: 12;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: linear-gradient(to right, $accentColor, $secondaryColor);
  padding: 15px 20px;
  margin: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.05);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.08);
  }
}

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper {
  display: flex;
  line-height: 40px;
  height: 40px;

  .title {
    /* flex 0 0 200px */
    color: #222;
    font-size: 22px;
    margin: 0;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .header-right-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .nav {
      flex: 0 0 auto;
      display: flex;
      margin: 0;
      align-items: center;

      .nav-item {
        margin-left: 20px;

        a {
          font-size: 18px;
          color: darken(#fff, 10%);
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: white;
          }

          &.router-link-exact-active.router-link-active {
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }

    .search-box {
      margin-left: 20px;

      input {
        border-radius: 20px;
        transition: all 0.5s;
        border: 1px solid #cecece;
        min-width: 5rem;

        &:hover {
          border: 1px solid $accentColor;
          box-shadow: 0 0 5px $accentColor;
        }
      }

      .suggestions {
        border: 1px solid #222;
        top: 40px;
        right: 0;

        a {
          color: #222;
          text-decoration: none;

          &.focused {
            color: $accentColor;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  #header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-right-wrap {
      display: none;
    }
  }
}
</style>
