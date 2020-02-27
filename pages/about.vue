<template>
  <div>
    <section class="py-10">
      <div class="md:w-9/12 w-10/12 mx-auto">
        <p class="mb-5 uppercase font-extrabold " style="letter-spacing: 3px">
          ABOUT US
        </p>
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          <span class="text-gray-600">We strive to </span>abrigde the divide between ignorance and knowledge <span class="text-gray-600">through technology</span>
        </h1>
        <div class="flex mb-5">
          <img src="" class="block bg-blue-700 w-12 h-12 mr-5 rounded-full" alt="" srcset="">
          <div>
            <span class="text-lg font-bold">Jude Nwani</span> <br>
            <span class="text-sm text-gray-600 font-bold">CEO, JD Computer Technologies</span>
          </div>
        </div>
      </div>
    </section>
    <!--Illustration start-->
    <section class="py-10">
      <div class="bg-gray-800 h-64" />
    </section>
    <!--ilusstration end-->
    <!--Story Starts-->
    <section class="py-10">
      <div class="w-10/12 mx-auto flex flex-wrap justify-between">
        <shadow-bg padding="p-0" extra-class="sm:w-5/12 w-full mb-10">
          <h3 class="sm:text-5xl p-5 text-3xl text-blue-200 font-extrabold">
            Our Passion, <br>
            Our Story
          </h3>
        </shadow-bg>
        <div class="sm:w-6/12 w-full sm:text-lg font-bold text-gray-600">
          <p class="mb-3">
            In the past years, JD Computer Technologies has grown to become the largest independent IT training company in Nigeria. We offer lot of digital literacy and proffessional course in patnership with Aptech courses. Businesses and individuals can choose from hundreds of course offerings, delivered by experts, and offered in hundreds of convenient locations around the world. For many small, medium and large organizations, JD Computer Technologies is the single source for all their IT training needs.
          </p>
          <p class="mb-3">
            The IT skills level in Nigeria is still in her formative stages and years behind other countries in America, Europe and Asia. IT has also proven to be the greatest creator/driver of wealth in these countries and Nigeria has been unable to partake in this because of our dearth of skills in this area.
          </p>
          <p class="mb-3">
            Situted in Asaba and Ogwashi-Uku, we have mapped out the needs of the Nigerian youth in terms of Knowledge workspace and knowledge delivery.
          </p>
          <p class="mb-3">
            Jd Computer Technologies strongly believes that by doing this, she will contribute immensely to the socio-economic development of Nigeria.
          </p>
        </div>
      </div>
    </section>
    <!--Story ends-->
    <section class="py-10">
      <div class="w-10/12 mx-auto flex flex-wrap justify-between items-center">
        <h3  class="sm:text-5xl text-3xl mb-10 text-center sm:text-left font-extrabold text-gray-600 sm:w-5/12 w-full">
          Our Vision
        </h3>
        <shadow-bg padding="p-5 py-20" extra-class="w-full sm:w-6/12 border border=gray-400 text-center text-lg sm:text-xl font-bold" background="#f3f5f8">
          “ To be the fore most knowledge sharing insitutuion, disseminating top class knowledge to the masses “
        </shadow-bg>
      </div>
    </section>
    <!--Mission Start-->
    <section class="py-10">
      <div class="w-10/12 mx-auto flex flex-wrap flex-col-reverse sm:flex-row justify-between items-center">
        <shadow-bg padding="p-5 py-20" extra-class="w-full sm:w-6/12 border border=gray-400 text-center text-lg sm:text-xl font-bold" background="#f3f5f8">
          “ To be the fore most knowledge sharing center in regards to the IT sector “
        </shadow-bg>
        <h3  class="sm:text-5xl text-gray-600 text-center sm:text-right text-3xl mb-10 font-extrabold sm:w-5/12 w-full">
          Our Mision
        </h3>
      </div>
    </section>
    <!--Mission End-->
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
    title: 'About'
  },
  transition: {
    name: 'slide',
    appear: true
  },
  layout: 'default'
}
</script>

<style>

</style>
