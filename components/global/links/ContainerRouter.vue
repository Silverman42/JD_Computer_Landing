<template>
  <nuxt-link class="container" :class='[extraClass]' :to="to">
    <div class="container_content">
      <slot></slot>
    </div>
    <div class="container_bg" :style="{background: background}"></div>
  </nuxt-link>
</template>

<script>
/**
 * @description - Component for clickable boxes for list of items
 */
export default {
  props: {
    background: {
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
  .container{
    @apply relative block border
  }
  .container_content{
    z-index: 5;
    @apply m-5 relative;
  }
  .container_bg{
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: #040969;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
    @apply absolute w-full h-full;
  }
  .container::after{
    content: '';
    z-index: -1;
    transition: all 0.3s ease-in-out;
    --webkit-transition: all 0.3s ease-in-out;
    left: 0px;
    top: 0px;
    @apply w-full h-full block absolute bg-gray-400;
  }
  .container:hover:after{
    left: 10px;
    top: 10px;
  }
</style>
