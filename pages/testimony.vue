<template>
  <div>
    <section class="py-10">
      <div class="md:w-9/12 w-10/12 mx-auto">
        <p class="mb-5 uppercase font-extrabold " style="letter-spacing: 3spx">
          TESTIMONIES
        </p>
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          <span class="text-gray-600">Our top notch computer services</span> leave nothing to be desired
        </h1>
      </div>
    </section>
    <!--Top Testimony Start-->
    <section class="py-10">
      <div class="w-10/12 mx-auto flex justify-between flex-wrap sm:flex-no-wrap">
        <shadow-bg :hasHoverBackground="true" extra-class="sm:w-6/12 w-full sm:mr-3 mb-5" padding="p-0">
          <div class="w-full h-20 bg-gray-900 mb-5" />
          <h3 class="sm:text-3xl text-2xl font-bold text-blue-100 px-10 mb-5">
            “ Lorem ipsum dolor sit amet. elit, Tortor id faucibus. ”
          </h3>
          <div class="px-10 mb-5">
            <span class="text-lg text-white font-bold">James John</span> <br>
            <span class="text-sm text-blue-100 font-bold">CEO, Johnson Blake LTD</span>
          </div>
        </shadow-bg>
        <shadow-bg :hasHoverBackground="true" extra-class="sm:w-6/12 w-full mb-5" padding="p-0">
          <div class="w-full h-20 bg-gray-900 mb-5" />
          <h3 class="sm:text-3xl text-2xl font-bold text-blue-100 px-10 mb-5">
            “ Lorem ipsum dolor sit amet. elit, Tortor id faucibus. ”
          </h3>
          <div class="px-10 mb-5">
            <span class="text-lg text-white font-bold">James John</span> <br>
            <span class="text-sm text-blue-100 font-bold">CEO, Johnson Blake LTD</span>
          </div>
        </shadow-bg>
      </div>
    </section>
    <!--Top Testimony ends-->
    <!--Other Testimonies starts-->
    <section class="py-10">
      <div class="w-10/12 mx-auto">
        <div class="text-xl font-bold mb-5">
          More Testimonies
        </div>
        <div class="flex justify-between flex-wrap sm:flex-no-wrap">
          <!--Column 1-->
          <div class="sm:w-4/12 w-full mr-5">
            <shadow-bg
              v-for="(testimony ,index) in 5"
              :key="index"
              :hasHoverBackground="true"
              background="white"
              extra-class="w-full p-5 mb-5 border"
              padding="p-0"
            >
              <h3 class="sm:text-2xl text-xl font-bold text-gray-600 mb-5">
                “ Lorem ipsum dolor sit amet. elit, Tortor id faucibus.”
              </h3>
              <div class="mb-5">
                <span class="text-lg font-bold">James John</span> <br>
                <span class="text-sm">CEO, Johnson Blake LTD</span>
              </div>
            </shadow-bg>
          </div>
          <!--Column 2-->
          <div class="sm:w-4/12 w-full mr-5">
            <shadow-bg
              v-for="(testimony ,index) in 5"
              :key="index"
              :hasHoverBackground="true"
              background="white"
              extra-class="w-full p-5 mb-5 border"
              padding="p-0"
            >
              <h3 class="sm:text-2xl text-xl font-bold text-gray-600 mb-5">
                “ Lorem ipsum dolor sit amet. elit, Tortor id faucibus. elit, Tortor id faucibus , Tortor id faucibus ”
              </h3>
              <div class="mb-5">
                <span class="text-lg font-bold">James John</span> <br>
                <span class="text-sm">CEO, Johnson Blake LTD</span>
              </div>
            </shadow-bg>
          </div>
          <!--Column 3-->
          <div class="sm:w-4/12 w-full">
            <shadow-bg
              v-for="(testimony ,index) in 5"
              :key="index"
              :hasHoverBackground="true"
              background="white"
              extra-class="w-full p-5 mb-5 border"
              padding="p-0"
            >
              <h3 class="sm:text-2xl text-xl font-bold text-gray-600 mb-5">
                “ Lorem ipsum dolor sit amet”
              </h3>
              <div class="mb-5">
                <span class="text-lg font-bold">James John</span> <br>
                <span class="text-sm">CEO, Johnson Blake LTD</span>
              </div>
            </shadow-bg>
          </div>
        </div>
      </div>
    </section>
    <!--Other Testimonies ends-->
    <!--Contact section start-->
    <section class="pt-10 pb-20">
      <div class="sm:w-9/12 w-10/12 mx-auto">
        <div class="border py-5 px-3 flex flex-col sm:flex-row sm:items-center">
          <div class="sm:w-7/12 w:full p-3">
            <h2 class="sm:text-5xl text-3xl text-center text-gray-600 font-extrabold">
              Give us a shot today !!
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
  head: {
    title: 'Testimony'
  },
  transition: {
    name: 'page_slide'
  },
  layout: 'default'
}
</script>

<style>

</style>
