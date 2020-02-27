<template>
    <div class="relative" :class="[padding, extraClass, {'shadow_bg': !hasHoverBackground, 'shadow_bg-hoverable': hasHoverBackground, }]" :style="{background: background}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: 'p-5'
    },
    extraClass: {
      type: String,
      default: ''
    },
    hasHoverBackground: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
    .shadow_bg, .shadow_bg-hoverable{
      background-color: #040969;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
    }
    .shadow_bg-hoverable::after{
      content: '';
      left: 0px;
      top: 0px;
      z-index: -1;
      transition: all 0.3s ease-in-out;
      --webkit-transition: all 0.3s ease-in-out;
      @apply w-full h-full block absolute bg-gray-400;
    }
    .shadow_bg::after,.shadow_bg-hoverable:hover:after{
      content: '';
      left: 7px;
      top: 7px;
      z-index: -1;
      @apply w-full h-full block absolute bg-gray-400;
    }
</style>
