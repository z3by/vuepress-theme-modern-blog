<template>
  <div class="ui-post-info">
    <div class="post-info-item">
      <CalendarIcon />
      {{ new Date(date.trim()).toDateString() }}
    </div>
    <div
      class="post-info-item"
      v-if="timeToRead"
    >
      <ClockIcon />
      {{ timeToRead }}
    </div>
    <div class="post-info-item">
      <NavigationIcon />
      {{ location }}
    </div>
  </div>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: ["date", "timeToRead", "location"]
};
</script>

<style lang="stylus">
.ui-post-info {
  display: flex;
  align-items: center;
  font-size: 12px;
  background: lighten($accentColor, 98%);
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 200;
  padding: 15px 0px 15px 15px;
  margin-top: 1rem;

  div.post-info-item {
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      width: 17px;
      height: 17px;
    }
  }
}
</style>