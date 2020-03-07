<template>
  <a href="" :style="{'height': height}" :class="[padding,extraClass,width]" @click.prevent="click" class="block relative click-card" >
    <slot></slot>
    <div class="absolute top-0 left-0 bottom-0 w-full h-full click-card__bg"></div>
  </a>
</template>

<script>
export default {
  props: {
    // CSSValue
    background: {
      type: String,
      default: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E')"
    },

    // Tailwind Value
    padding: {
      type: String,
      default: 'p-5'
    },

    // Tailwind value
    width: {
      type: String,
      default: 'w-64'
    },

    // CSS value
    height: {
      type: String,
      default: '200px'
    },

    // Tailwind Value
    extraClass: {
      type: String,
      default: 'border text-white'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .click-card{
    overflow: hidden;
  }
  .click-card__bg{
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
    background-color: #040969;
    transition: all 0.3s ease-in-out;
    z-index: -2
  }
  .click-card:hover .click-card__bg{
    transform: scale(1.2);
  }
</style>
