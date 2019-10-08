<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>


<script>
export default {
  created() {
    document.getElementsByTagName("title")[0].text =
      "Ahmad Mostafa: Full Stack Software Engineer";
  }
};
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
