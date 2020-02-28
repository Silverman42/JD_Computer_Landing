<template>
  <a :href="href" class="hover:bg-blue-800 bg-blue-600 btn">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  .btn{
    transition: all 0.3s ease-out;
    --webkit-transition: all 0.3s ease-out;
    letter-spacing: 5px !important;
    @apply text-white px-3 block relative font-bold text-sm tracking-wider py-3 w-full uppercase text-center;
  }
  .btn:hover:after{
      left: 3px;
      top: 3px;
  }
  .btn::after{
      content: '';
      left: 7px;
      top: 7px;
       z-index: -2;
      transition: all 0.3s ease-out;
      --webkit-transition: all 0.3s ease-out;
      @apply w-full h-full block absolute bg-blue-200;
  }
</style>
