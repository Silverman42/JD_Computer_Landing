<template>
  <nuxt-link class="block md:px-4" exact exact-active-class="text-blue-500" :class="[color,hoverColor,fontWeight,textSize,extraCss]" :to="to">
      <slot></slot>
  </nuxt-link>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    to: {
      type: Object,
      default () {
        return {
          path: '/'
        }
      }
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
