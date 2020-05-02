<template>
  <div class="global-layout d-flex flex-column">
    <Header />
    <DefaultGlobalLayout />
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer
  },

  data() {
    return {
      isMobileHeaderOpen: false
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  }
};
</script>
