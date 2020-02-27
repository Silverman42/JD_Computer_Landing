<template>
  <nuxt-link class="container-custom" :class='[extraClass]' :to="to">
    <div class="container-custom_content">
      <slot></slot>
    </div>
    <div class="container-custom_bg" :style="[{background: backgroundImg}]"></div>
    <div class="container-custom_fg"></div>
  </nuxt-link>
</template>

<script>
/**
 * @description - Component for clickable boxes for list of items
 */
export default {
  props: {
    backgroundImg: {
      type: String,
      default: ''
    },
    extraClass: {
      type: String,
      default: ''
    },
    /**
     * to
     * @description: object prop for inserting router link properties
     */
    to: {
      type: Object,
      default () {
        return {
          path: ''
        }
      }
    }
  }
}

</script>

<style scoped>
  .container-custom{
    @apply relative block w-auto overflow-hidden
  }
  .container-custom_content{
    z-index: 5;
    @apply m-5 relative w-auto;
  }
  .container-custom:hover>.container-custom_bg{
      transform: scale(1.2,1.2);
      --webkit-transform: scale(1.2,1.2);
  }
  .container-custom_fg{
    z-index: 2;
    background: rgba(0, 0, 0, 0.411);
    @apply absolute w-full h-full top-0 left-0 right-0 bottom-0;
  }
  .container-custom_bg{
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: #040969;
    background-position: center !important;
    background-size: 110% !important;
    transition: all 0.3s ease-in-out;
    --webkit-transition: all 0.3s ease-in-out;
    @apply absolute w-full h-full;
  }
</style>
