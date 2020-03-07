<template>
  <div class="min-h-screen">
    <section class="py-10 relative">
      <!--pattern start-->
      <img class="w-4/12 h-auto block absolute visible" style="right: 5px; z-index:-1" src="/pattern/kite_1.svg" alt="">
      <!--pattern end-->
      <div class="md:w-9/12 w-10/12 mx-auto">
        <div class="my-3">
          <span class="uppercase tracking-widest font-bold text-blue-500">academy </span>
          <span> | </span>
          <span class="uppercase tracking-widest font-bold text-black">
              <slot name="course_name"></slot>
          </span>
        </div>
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          <slot name="hero-message">hero-message</slot>
        </h1>
        <div class="mb-5">
            <slot name="faculty_detail"></slot>
        </div>
      </div>
    </section>

    <!--illustration start-->
    <section class="py-10">
      <slot name="illustration">Illustration</slot>
    </section>
    <!--Illustration end-->

    <!--SubCourse List Start-->
    <section class="py-10">
      <div class="w-10/12 mx-auto flex flex-wrap items-center justify-between">
        <!--Carousel Head Start-->
        <div class="w-full flex justify-between items-center py-5">
          <div class="w-8/12">
              <span class="font-extrabold text-xs sm:text-sm inline-block">Course List</span> <br>
              <span class="font-extrabold mb-3 text-xs sm:text-sm inline-block text-gray-700">List of sub courses offered under this course</span>
          </div>
          <div class="w-20 flex justify-between">
              <a href="" class="inline-block text-sm" @click.prevent="carouselPrev">
                  <span class=" flaticon-left-chevron"></span>
              </a>
              <a href="" class="inline-block text-sm" @click.prevent="carouselNext">
                  <span class=" flaticon-right-chevron"></span>
              </a>
          </div>
        </div>
        <!--Carousel Head End-->

        <!--Carousel Container Start-->
        <div class="w-full py-5">
          <slot name="carousel_slot"></slot>
        </div>
        <!--Carousel Container End-->
      </div>
    </section>
    <!--Description Ends-->
    <!--Contact section start-->
    <section class="pt-10 pb-20">
      <div class="sm:w-9/12 w-10/12 mx-auto">
        <div class="border py-5 px-3 flex flex-col sm:flex-row sm:items-center">
          <div class="sm:w-7/12 w:full p-3">
            <h2 class="sm:text-5xl text-3xl text-left text-gray-600 font-extrabold">
              <slot name="contact-text">Contact Text</slot>
            </h2>
          </div>
          <div class="sm:w-4/12 w:full p-3 font-bold">
            <primary-route-btn :to="{name:'contact'}">Contact Us</primary-route-btn>
          </div>
        </div>
      </div>
    </section>
    <!--COntact section end-->
  </div>
</template>

<script>
export default {
  methods: {
    // Trigger previuos carousel slide
    carouselPrev () {
      this.$emit('carousel_prev')
    },

    // Trigger next carousel slide
    carouselNext () {
      this.$emit('carousel_next')
    }
  }
}
</script>

<style>

</style>
