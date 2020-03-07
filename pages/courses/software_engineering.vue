<template>
  <div>
    <course-layout>
      <template slot="course_name">
        Software Engineering
      </template>
      <template slot="hero-message">
        We ensure you learn <span class="text-blue-400">best practices</span> to build <span class="text-blue-400"> sclalable software </span> for both large and small scale businesses
      </template>
      <template slot="illustration">
        <img src="/img/courses/softEngine-min.png" class="w-full h-auto" alt="software engineering">
      </template>
      <template slot="faculty_detail">
        <div class="flex mb-5">
          <img src="" class="block bg-blue-700 w-12 h-12 mr-5 rounded-full" alt="" srcset="">
          <div>
            <span class="text-lg font-bold">Sylvester Nkeze</span><br>
            <span class="text-sm text-gray-600 font-bold">Faculty, Software Engineering</span>
          </div>
        </div>
      </template>
      <template slot="carousel_slot">
        <carousel
          ref="carousel"
          :autoWidth="true"
          :dots="false"
          :nav="false"
          :margin="10"
        >
          <card v-for="(subcourse,index) in 6" @click="openModal" :key="index" extra-class="flex flex-col justify-between">
            <h3 class="text-sm sm:text-base font-extrabold text-white">
              Frontend Development
            </h3>
            <p class="text-xs text-blue-300 text-right font-extrabold">
              See More <span class="flaticon-right-chevron" />
            </p>
          </card>
        </carousel>
      </template>
      <template slot="contact-text">
        Reach us today to get started !!
      </template>
    </course-layout>
    <modal v-if="modalIsOpen == true" @close-modal="closeModal">
      <div class="w-10/12 mx-auto flex flex-wrap justify-between">
        <!--Subcourse Title Start-->
        <div class="sm:w-5/12 w-full flex justify-between pb-5">
          <shadow-bg extra-class="w-full">
            <h3 class="sm:text-5xl text-3xl text-blue-300 font-extrabold mb-10">
              Frontend Engineering
            </h3>
          </shadow-bg>
        </div>
        <!--Subcourse Title End-->

        <!--Carousel Container Start-->
        <div class="sm:w-5/12 w-full py-5">
          <div class="mb-8">
            <h5 class="text-sm font-extrabold text-gray-600 tracking-wider mb-3">Description</h5>
            <p class="font-extrabold">Commodo magna in nulla sunt ullamco eu eiusmod consectetur ex reprehenderit eu velit non. Ea esse et nisi nisi ea ea sunt enim occaecat et nisi. Irure cillum consectetur dolor tempor reprehenderit do velit elit cupidatat. Magna quis veniam anim minim deserunt ipsum exercitation eu id. Nisi esse officia sit nisi nulla cupidatat ad nulla non id enim anim.</p>
          </div>
          <div class="mb-8">
            <h5 class="text-sm font-extrabold text-gray-600 tracking-wider mb-3">Description</h5>
            <p class="font-extrabold">Commodo magna in nulla sunt ullamco eu eiusmod consectetur ex reprehenderit eu velit non. Ea esse et nisi nisi ea ea sunt enim occaecat et nisi. Irure cillum consectetur dolor tempor reprehenderit do velit elit cupidatat. Magna quis veniam anim minim deserunt ipsum exercitation eu id. Nisi esse officia sit nisi nulla cupidatat ad nulla non id enim anim.</p>
          </div>
        </div>
        <!--Carousel Container End-->
      </div>
    </modal>
  </div>
</template>

<script>
import CourseLayout from '~/components/page_layout/courses'
import Card from '~/components/global/links/ClickableCard'
import Modal from '~/components/global/layout/Modal'
import Carousel from 'vue-owl-carousel2'
export default {
  transition: {
    name: 'page_slide'
  },
  components: {
    CourseLayout,
    Carousel,
    Card,
    Modal
  },
  data () {
    return {
      modalIsOpen: false
    }
  },
  methods: {
    openModal () {
      this.modalIsOpen = true
    },
    closeModal () {
      this.modalIsOpen = false
    }
  }
}
</script>

<style>

</style>
