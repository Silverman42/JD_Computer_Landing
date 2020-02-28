<template>
  <div class="min-h-screen">
    <section class="py-10 relative">
      <!--pattern start-->
      <img class="w-4/12 h-auto block absolute visible" style="right: 5px; z-index:-1" src="/pattern/kite_1.svg" alt="">
      <!--pattern end-->
      <div class="md:w-9/12 w-10/12 mx-auto">
        <span class="uppercase py-3 tracking-widest font-bold">services</span>
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          <slot name="hero-message">hero-message</slot>
        </h1>
      </div>
    </section>

    <!--illustration start-->
    <section class="py-10">
      <slot name="illustration">Illustration</slot>
    </section>
    <!--Illustration end-->

    <!--Description Start-->
    <section class="py-10">
      <div class="md:w-10/12 w-10/12 mx-auto flex flex-wrap sm:items-center sm:justify-between">
        <!--Description text Start-->
        <div class="sm:w-5/12 text-gray-600 w-full py-5">
          <slot name="description-text">Description text</slot>
        </div>
        <!--Description text End-->

        <!--Service highlights Start-->
        <div class="sm:w-5/12 w-full py-5">
          <shadow-bg background="white" extra-class="border border-gray-500">
            <div class="text-sm font-bold p-3 text-gray-600">
              We offer ->
            </div>
            <slot name="service-highlight">Service Highlights</slot>
          </shadow-bg>
        </div>
        <!--Service Highlights End-->
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

}
</script>

<style>

</style>
