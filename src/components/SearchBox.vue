<template>
  <div class="search-wrapper u-px3 d-flex align-items-center">
    <el-autocomplete
      ref="searchInput"
      slot="reference"
      v-model="query"
      size="small"
      :fetch-suggestions="querySearchAsync"
      :placeholder="$t('search_placeholder')"
      popper-class="components-search"
      :trigger-on-focus="false"
      placement="bottom-end"
      :debounce="200"
      @select="handleSelect"
    >
      <template slot-scope="props">
        <!-- eslint-disable-next-line -->
        <li role="option" v-html="props.item.value"/>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import Flexsearch from 'flexsearch'

export default {
  data () {
    return {
      index: null,
      query: '',
    }
  },
  mounted () {
    this.index = new Flexsearch({
      tokenize: 'forward',
      doc: {
        id: 'key',
        field: ['title', 'content'],
      },
    })
    const { pages } = this.$site
    this.index.add(pages)
  },
  methods: {
    querySearchAsync (queryString, cb) {
      const { themeConfig } = this.$site
      const query = queryString.trim().toLowerCase()
      const usingGoogleSearch =
        themeConfig.googleCustomSearchEngineID && themeConfig.googleAPIKey
      const max = themeConfig.searchMaxSuggestions || 20
      if (this.index === null || query.length < 1) {
        // eslint-disable-next-line
        return cb([])
      }
      this.index.search(
        query,
        {
          limit: max,
          threshold: 4,
          encode: 'extra',
        },
        result => {
          if (result.length) {
            const resolvedResult = result.map(page => {
              return {
                link: page.path,
                value: this.getQuerySnippet(page),
              }
            })
            return cb(resolvedResult)
          } else {
            if (usingGoogleSearch) {
              // eslint-disable-next-line
              return cb([
                {
                  value: this.$t('search_entire_site', { query }),
                  link: `/search?q=${query}`,
                },
              ])
            } else {
              // eslint-disable-next-line
              cb([{ value: this.$t('no_results'), link: '' }])
            }
          }
        },
      )
    },
    getQuerySnippet (page) {
      const queryPosition = page.content.toLowerCase().indexOf(this.query)
      const startIndex = queryPosition - 20 < 0 ? 0 : queryPosition - 20
      const endIndex = queryPosition + 30
      const querySnippet = page.content
        .slice(startIndex, endIndex)
        .toLowerCase()
        .replace(
          this.query,
          `<strong class="text--primary">${this.query}</strong>`,
        )
        .split(' ')
        .slice(1, -1)
        .join(' ')
      if (querySnippet) {
        return `
        <strong class="text--primary">${page.title}</strong>\n
        <div class="text-muted pl-2"> ${querySnippet} ..</div>`
          .replace(/\|/g, ' ')
          .replace(/:::/g, ' ')
      } else {
        return page.title
      }
    },
    handleSelect (item) {
      if (item.link) {
        this.$router.push(item.link)
      }
      this.query = ''
    },
  },
}
</script>

<style lang="stylus">
.search-wrapper {
  .el-input__inner {
    height: 2rem !important;
  }

  .search-wrapper input {
    width: 160px;
    transition: all 0.5s ease;
  }

  .el-autocomplete-suggestion__wrap, .el-autocomplete-suggestion {
    width: 100%;
  }

  .el-input__suffix {
    line-height: 2rem;
  }
}

.components-search {
  width: 30rem !important;
}

@media only screen and (max-width: $MQMobile) {
  .components-search {
    width: calc(100% - 10px) !important;
  }
}
</style>
