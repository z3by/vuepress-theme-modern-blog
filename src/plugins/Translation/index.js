export default function translation (Vue) {
  Vue.mixin({
    computed: {
      getTranslation () {
        return {
          ...require('./locale/en.js'),
          ...this.$themeConfig.translations,
        }
      },
    },
    methods: {
      $t (key, values) {
        if (key in this.getTranslation) {
          const str = this.getTranslation[key]
          const names = Object.keys(values || [])
          const vals = Object.values(values || [])
          // eslint-disable-next-line
          return new Function(...names, `return \`${str}\`;`)(...vals)
        } else {
          return key
        }
      },
    },
  })
}
