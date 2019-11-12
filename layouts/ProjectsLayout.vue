<template>
  <el-container>
    <el-main>
      <el-row
        :gutter="10"
        align="center"
      >
        <el-col
          :sm="24"
          :md="12"
          :lg="8"
          v-for="project in projects"
          :key="project.name"
        >
          <el-card class="card project-card">
            <div
              class="project-card-header"
            >
              <div class="project-icon">
                <i class="el-icon-folder"></i>
              </div>
              <el-link
                style="float: right; padding: 3px 0;"
                :href="project.link"
                target="_blank"
              >
                <GithubIcon />
              </el-link>
            </div>
            <div>
              <h4>{{ project.title }}</h4>
              <p class="project-description">{{project.description}}</p>
              <ul class="languages-list">
                <li
                  v-for="lang in project.languages"
                  :key="lang"
                >{{lang}}</li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {
  GithubIcon,
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon
  },
  computed: {
    projects () {
      return this.$page.frontmatter.projects
    }
  }
}
</script>

<style lang="stylus">
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;

  .project-card.card {
    margin: 8px;
    background-color: darken($accentColor, 50%);
    color: lighten($accentColor, 80%);

    .project-card-header {
      display: flex;
      margin-bottom 1rem;
      justify-content: space-between;
      align-items: center;

      .project-icon {
        font-size: 3em;
        position: relative;
        top: 0.3rem;
        color: lighten($accentColor, 50%);
      }
    }

    p.project-description {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
    }

    .languages-list {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      color: lighten($accentColor, 40%);
      font-family: monospace;

      li {
        padding: 0 5px;
      }
    }
  }
}
</style>