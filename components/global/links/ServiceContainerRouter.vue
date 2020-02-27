<template>
  <container-link :to="to" extra-class="w-5/12 sm:w-3/12 sm:m-3 m-1">
    <div class="flex flex-col">
        <span class="block bg-blue-200 w-10 text-2xl text-blue-800 h-10 mb-5 flex justify-center items-center rounded-full">
            <slot name="service-icon"></slot>
        </span>

        <span class="block text-white sm:text-xl font-bold mb-5">
            <slot name="service-title"></slot>
        </span>

        <div class="text-right">
            <span class="text-blue-500 flaticon-right-chevron sm:text-xl font-bold"></span>
        </div>
    </div>
 </container-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      default () {
        return {
          to: {
            path: ''
          }
        }
      }
    }
  }
}
</script>
