<template>
    <magnified-bg-link :to="to" :extra-class="extraClass" :background-img="background">
        <div class="flex justify-between items-end" style="min-height: 150px" >
            <div class="w-9/12 text-white sm:text-xl font-bold mb-5">
                <slot name="link-title"></slot>
            </div>
            <slot name="link-icon"></slot>
        </div>
    </magnified-bg-link>
</template>
<script>
export default {
  props: {
    to: {
      type: Object,
      default () {
        return {
          path: ''
        }
      }
    },
    extraClass: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  }
}
</script>
