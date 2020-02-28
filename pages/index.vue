<template>
  <div>
    <section class="py-10">
      <div class="md:w-9/12 w-10/12 mx-auto">
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          <span class="text-black"> We are the light of technological tactfulness you need for your </span> <span class="text-blue-500"> business</span>.
        </h1>
        <div class="border py-5 px-3 flex flex-col sm:flex-row sm:items-center">
          <div class="sm:w-4/12 w:full p-3 font-bold md:text-lg flex items-center">
            <div class="text-blue-400 font-normal text-3xl mr-3">
              <span class="flaticon-verified" />
            </div>
            <span>Prompt and Reliable ICT service delivery</span>
          </div>
          <div class="sm:w-4/12 w:full p-3 font-bold md:text-lg flex items-center">
            <div class="text-blue-400 font-normal text-3xl mr-3">
              <span class="flaticon-verified" />
            </div>
            <span>Exceptional tuition of ICT courses</span>
          </div>
          <div class="sm:w-4/12 w:full p-3 font-bold">
            <primary-route-btn :to="{name:'contact'}">Contact Us</primary-route-btn>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10">
      <img class="w-full h-auto" src="/img/Landing_illustration.svg" alt="Tech Hub in JD computer">
    </section>

    <!--Testimony Start-->
    <section class="py-10">
      <div class="md:w-10/12 w-10/12 mx-auto flex flex-wrap sm:items-center sm:justify-between">
        <!--Testimony Header Start-->
        <div class="sm:w-5/12 w-full py-5">
          <h2 class="md:text-5xl text-3xl font-extrabold">
            Trusted by numerous  businesses. <span class="text-gray-600">Our clients help tell our story</span>
          </h2>
          <div />
        </div>
        <!--Testimony Header End-->

        <!--Sample Testimony Start-->
        <div class="sm:w-5/12 w-full py-5">
          <shadow-bg>
            <h3 class="sm:text-3xl text-2xl font-bold text-blue-100 mb-5">
              “ Lorem ipsum dolor sit amet. elit, Tortor id faucibus. ”
            </h3>
            <div class="flex mb-5">
              <img src="" class="block bg-blue-700 w-12 h-12 mr-5 rounded-full" alt="" srcset="">
              <div>
                <span class="text-lg text-white font-bold">James John</span> <br>
                <span class="text-sm text-blue-100 font-bold">CEO, Johnson Blake LTD</span>
              </div>
            </div>
            <div class="text-right mb-5">
              <nuxt-link to="" class="text-sm text-blue-200 hover:text-blue-300">
                More Testimonies &nbsp;
                <span class="flaticon-right-chevron" />
              </nuxt-link>
            </div>
          </shadow-bg>
        </div>
        <!--Sample Testimony End-->
      </div>
    </section>
    <!--Testimony end-->
    <!--Benefit Start-->
    <section class="py-10">
      <div class="md:w-10/12 w-10/12 flex flex-wrap sm:justify-between content-center mx-auto">
        <div class="w-full mx-auto sm:w-8/12">
          <h2 class="sm:text-5xl text-3xl text-gray-600 text-center font-extrabold">
            With Us, <span class="text-black">reliability</span> and <span class="text-black">speed of delivery</span> is assured
          </h2>
        </div>
        <!--Benefit Image Start-->
        <div class="sm:w-5/12 w-full my-5">
          <img>
        </div>
        <!--Benefit Image End-->

        <!--Benefit List Start-->
        <div class="sm:w-5/12 w-full my-5">
          <div class="mb-5">
            <div class="text-blue-400 text-5xl mb-3">
              <span class="flaticon-reliability" />
            </div>
            <h3 class="font-bold text-xl sm:text-2xl mb-3">
              Reliable Computer Services
            </h3>
            <span class="tracking-wider sm:text-xl font-bold text-gray-600 block mb-3">
              Est nulla aliquip laboris pariatur officia anim ex commodo dolore do laboris. Nisi cillum occaecat esse minim laboris.
            </span>
          </div>
          <div class="mb-5">
            <div class="text-blue-400 text-5xl mb-3">
              <span class="flaticon-updated" />
            </div>
            <h3 class="font-bold text-xl sm:text-2xl mb-3">
              Updated ICT Courses
            </h3>
            <span class="tracking-wider sm:text-xl font-bold text-gray-600 block mb-3">
              Est nulla aliquip laboris pariatur officia anim ex commodo dolore do laboris. Nisi cillum occaecat esse minim laboris.
            </span>
          </div>
        </div>
        <!--Benefit List End-->
      </div>
    </section>
    <!--Benefit end-->

    <!--Services Section start-->
    <section class="py-10">
      <div class="md:w-10/12 w-10/12 flex flex-wrap sm:justify-between items-center mx-auto">
        <!--Service header start-->
        <div class="w-full sm:w-4/12 my-5">
          <h2 class="sm:text-5xl text-3xl text-gray-600 font-extrabold">
            We pride ourselves in delivering the <span class="text-black">best ICT services</span> possible
          </h2>
        </div>
        <!--Service header End-->

        <!--Service list start-->
        <div class="w-full flex flex-wrap sm:justify-end justify-evenly sm:w-7/12 my-5">
          <service-links>
            <template slot="service-icon">
              <span class="flaticon-programming" />
            </template>
            <template slot="service-title">
              Software <br> Development
            </template>
          </service-links>
          <service-links>
            <template slot="service-icon">
              <span class=" flaticon-laptop" />
            </template>
            <template slot="service-title">
              Computer <br> Sales
            </template>
          </service-links>
          <service-links>
            <template slot="service-icon">
              <span class=" flaticon-education" />
            </template>
            <template slot="service-title">
              Computer <br> Training
            </template>
          </service-links>
          <service-links>
            <template slot="service-icon">
              <span class="flaticon-consultation" />
            </template>
            <template slot="service-title">
              Computer <br> Consultancy
            </template>
          </service-links>
          <service-links>
            <template slot="service-icon">
              <span class="flaticon-www" />
            </template>
            <template slot="service-title">
              Website <br> Development
            </template>
          </service-links>
          <service-links>
            <template slot="service-icon">
              <span class=" flaticon-image" />
            </template>
            <template slot="service-title">
              Graphic <br> Design
            </template>
          </service-links>
        </div>
        <!--Service list end-->
      </div>
    </section>
    <!--Services Section end-->
    <!--Course section start-->
    <section class="py-10">
      <div class="w-10/12 mx-auto">
        <!--Course Header start-->
        <div class="w-full mx-auto sm:w-8/12 my-5">
          <h2 class="sm:text-5xl text-3xl text-center text-gray-600 font-extrabold">
            We fortify our students with the most trendy digital skills. <span class="text-black"> Explore our flurry of courses.</span>
          </h2>
        </div>
        <!--Course Header End-->
        <div class="flex flex-wrap my-5">
          <course-links extraClass="w-full sm:w-4/12" background="url('https://res.cloudinary.com/drqi7vjyd/image/upload/q_auto/v1581391164/Jd_computer/compTraining_l7idbt.png')">
            <template slot="link-title">
              Computer Literacy
            </template>
            <template slot="link-icon">
              <span class="text-lg text-blue-300 flaticon-right-chevron"></span>
            </template>
          </course-links>
          <course-links extraClass="w-full sm:w-4/12" background="url('https://res.cloudinary.com/drqi7vjyd/image/upload/q_auto/v1581391168/Jd_computer/DigitalLit_bc8apr.png')">
            <template slot="link-title">
              Digital Marketing
            </template>
            <template slot="link-icon">
              <span class="text-lg text-blue-300 flaticon-right-chevron"></span>
            </template>
          </course-links>
          <course-links extraClass="w-full sm:w-4/12" background="url('https://res.cloudinary.com/drqi7vjyd/image/upload/q_auto/v1581391167/Jd_computer/softEngine_ukurnq.png')">
            <template slot="link-title">
              Software Engineering
            </template>
            <template slot="link-icon">
              <span class="text-lg text-blue-300 flaticon-right-chevron"></span>
            </template>
          </course-links>
          <course-links extraClass="w-full sm:w-6/12" background="url('https://res.cloudinary.com/drqi7vjyd/image/upload/q_auto/v1581393679/Jd_computer/webDesign_vtgfqz.png')">
            <template slot="link-title">
              Web Design
            </template>
            <template slot="link-icon">
              <span class="text-lg text-blue-300 flaticon-right-chevron"></span>
            </template>
          </course-links>
          <course-links extraClass="w-full sm:w-6/12" background="url('https://res.cloudinary.com/drqi7vjyd/image/upload/q_auto/v1581391164/Jd_computer/graphics_cykolg.png')">
            <template slot="link-title">
              Graphic Design
            </template>
            <template slot="link-icon">
              <span class="text-lg text-blue-300 flaticon-right-chevron"></span>
            </template>
          </course-links>
        </div>
      </div>
    </section>
    <!--Course section end-->

    <!--Contact section start-->
    <section class="pt-10 pb-20">
      <div class="sm:w-9/12 w-10/12 mx-auto">
        <div class="border py-5 px-3 flex flex-col sm:flex-row sm:items-center">
          <div class="sm:w-7/12 w:full p-3">
            <h2 class="sm:text-5xl text-3xl text-center text-gray-600 font-extrabold">
             Wish to know more ?
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
import ServiceLinks from '~/components/global/links/ServiceContainerRouter'
import CourseLinks from '~/components/global/links/CourseContainerRouter'
export default {
  transition: {
    name: 'page_slide'
  },
  layout: 'default',
  components: {
    ServiceLinks,
    CourseLinks
  }
}
</script>
