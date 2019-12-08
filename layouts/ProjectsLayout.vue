<template>
  <el-container>
    <el-main class="">
      <h1 class="display-4">{{$page.frontmatter.title || $page.title}}</h1>
      <p class="text-secondary h3">{{$page.frontmatter.description}}</p>
      <el-row
        :gutter="10"
        align="center"
        class="py-3"
      >
        <el-col
          :sm="24"
          :md="12"
          :lg="8"
          v-for="project in projects"
          :key="project.name"
        >
          <el-card class="card project-card zoomIn">
            <div class="project-card-header">
              <div class="project-icon">
                <i class="el-icon-folder"></i>
              </div>
              <div class="project-card--links">
                <el-link
                  v-if="project.github"
                  class="p-2"
                  :href="project.github"
                  target="_blank"
                >
                  <GithubIcon />
                </el-link>

                <el-link
                  class="p-2"
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                >
                  <LinkIcon />
                </el-link>
              </div>
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
  LinkIcon,
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    LinkIcon
  },
  computed: {
    projects () {
      return this.$page.frontmatter.projects
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;

  .project-card.card {
    margin: 8px;
    background: linear-gradient(60deg, darken($accentColor, 40%), darken($accentColor, 70%));
    color: lighten($accentColor, 80%);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.4s;

    &:hover {
      transform: scale(0.99);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }

    .project-card-header {
      display: flex;
      margin-bottom: 1rem;
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