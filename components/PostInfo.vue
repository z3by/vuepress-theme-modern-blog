<template>
  <div class="ui-post-info d-flex">
    <div class="post-info-item">
      <CalendarIcon />
      {{ new Date(date.trim()).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }}
    </div>
    <div
      class="post-info-item"
      v-if="timeToRead"
    >
      <ClockIcon />
      {{ $t("time_to_read", {
        rounded_time: Math.round(timeToRead.time / 60000),
        raw_obj: timeToRead
      }) }}
    </div>
    <div class="post-info-item"
         v-if="location"
    >
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
div.post-info-item {
  margin-right: 1rem;
  font-size: .8rem;

  svg {
    width: 17px;
    height: 17px;
  }
}
</style>
