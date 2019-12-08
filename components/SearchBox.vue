<template>
  <div class="search-box px-0">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="Search"
      @select="handleSelect"
      prefix-icon="el-icon-search"
      class="rounded"
    ></el-autocomplete>
  </div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
export default {
  data () {
    return {
      query: '',
      state: '',
    }
  },
  methods: {
    querySearchAsync (query, cb) {
      if (!query || query.length == 1) {
        return cb([{
          link: "#",
          value: "Enter a search term"
        }])
      }
      query = query.trim().toLowerCase()
      const { pages } = this.$site
      const max = SEARCH_MAX_SUGGESTIONS
      const matches = item => (
        item.title
        && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push({
                link: p.path + '#' + h.slug,
                value: h.title
              })
            }
          }
        }
      }

      cb(res)
    },
    handleSelect (item) {
      this.$router.push(item.link)
      this.state = ''
    }
  }
}
</script>

<style>
.search-box {
  width: 17rem;
}
.search-box input {
  width: 17rem;
}
</style>