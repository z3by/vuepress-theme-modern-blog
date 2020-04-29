<template>
  <div id="toggle" @click="activateToggle()" >
    <div class="span" id="top" :class="{ active: isToggleActive }"></div>
    <div class="span" id="middle" :class="{ active: isToggleActive }"></div>
    <div class="span" id="bottom" :class="{ active: isToggleActive }"></div>
  </div>
</template>

<script>
export default {
  props: ["isToggleActive"],
  methods: {
    activateToggle: function() {
      this.$emit('onActivateToggle', !this.isToggleActive);
    }
  }
}
</script>

<style lang="stylus">
#toggle {
  z-index: 999;
  width: 40px;
  cursor: pointer;
  transition: all .3s ease-out;
  visibility: hidden;
  display: none;
  margin: auto 0;

  .span {
    border-radius: 10px;
    background: $accentColor;
    transition: all 0.3s ease-out;
    backface-visibility: hidden;
  }

  #top.span.active {
    transform: rotate(45deg) translateX(3px) translateY(5px);
  }

  #middle.span.active {
    opacity: 0;
  }

  #bottom.span.active {
    transform: rotate(-45deg) translateX(8px) translateY(-10px);
  }
}

@media only screen and (max-width: $MQMobile) {
  #toggle {
    visibility: visible;
    display: block;
  }

  #toggle .span {
    height: 4px;
    margin: 5px 0;
    transition: all .3s ease-out;
    backface-visibility: visible;
    visibility: visible;
    opacity: 1;
  }
}
</style>