<template>
    <transition name="fade_up" mode="out-in">
        <div class="h-screen w-screen bg-white fixed overflow-y-auto top-0 left-0 bottom-0" style="z-index: 99">
        <!--Modal Header start-->
        <div class="w-full fixed flex flex-col justify-between pt-5 bg-white shadow-md top-0 left-0" style="height: 10vh; z-index: 120">
            <a class="ml-5 inline-block w-24 h-24 text-black hover:text-blue-400" @click.prevent="closeModal">
                <span class="flaticon-left-chevron"></span>
            </a>
        </div>
        <!--Modal header end-->
        <!--Modal Body Start-->
        <div class="" style="padding-top: 15vh;">
            <slot></slot>
        </div>
        <!--Modal Body end-->
    </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      bodyElement: document.querySelector('body')
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  },
  mounted () {
    this.bodyElement.style = 'overflow-y : hidden'
    const vm = this
    document.addEventListener('keyup', function (event) {
      if (event.code === 'Escape') {
        vm.$emit('close-modal')
      }
    })
  },
  beforeDestroy () {
    this.bodyElement.style = 'overflow-y : auto'
  }
}
</script>

<style>

</style>
