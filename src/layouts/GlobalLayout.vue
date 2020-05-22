<template>
  <div class="global-layout d-flex flex-column">
    <Header />
    <DefaultGlobalLayout />
    <Footer />
    <ClientOnly v-if="$themeConfig.cookies">
      <cookie-law v-bind="$themeConfig.cookies" />
    </ClientOnly>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    CookieLaw,
  },
}
</script>
