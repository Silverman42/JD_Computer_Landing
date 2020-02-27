<template>
  <a class="block md:px-4" :href="to" :class="[color,hoverColor,fontWeight,textSize,extraCss]">
      <slot></slot>
  </a>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    to: {
      type: String,
      default: '#'
    },
    color: {
      type: String,
      default: 'text-black'
    },
    hoverColor: {
      type: String,
      default: 'hover:text-gray-500'
    },
    fontWeight: {
      type: String,
      default: 'font-bold'
    },
    textSize: {
      type: String,
      default: 'md:text-sm text-2xl'
    },
    extraCss: {
      type: String,
      default: ''
    }
  }
}

</script>
