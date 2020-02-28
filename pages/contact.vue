<template>
  <div>
    <section class="py-10 relative">
      <!--pattern start-->
      <img class="w-100 h-auto block absolute visible" style="left: 5px; z-index:-1" src="/pattern/circle_one.svg" alt="">
      <!--pattern end-->
      <div class="md:w-9/12 w-10/12 mx-auto">
        <p class="mb-5 uppercase font-extrabold " style="letter-spacing: 3px">
          CONTACT US
        </p>
        <h1 class="md:text-6xl text-3xl mb-5 font-extrabold">
          Reach us today and let us render the <span class="text-blue-500"> best ICT services </span> to you.
        </h1>
      </div>
    </section>
    <!--JDMap start-->
    <section class="py-10">
      <iframe
        width="100%"
        height="450"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAcr9vkl12QSevMuUamxYXIzIFM7abczjs
            &q=JD+Computer,Asaba,Nigeria"
        allowfullscreen
      />
    </section>
    <!--JDMap end-->
    <!--Contact info start-->
    <section class="py-10 mb-10">
      <div class="w-10/12 mx-auto flex flex-wrap justify-between">
        <div class="sm:w-5/12 w-full">
            <div class="mb-5">
              <span class="block text-blue-700 w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center mb-3">
                <i class="font-extrabold text-xl flaticon-placeholder"></i>
              </span>
              <p class="text-xl font-extrabold">
                472,  Nnebisi Road,<br>
                Opposite Ascon filling Station, <br>
                Asaba,<br>
                Delta State,<br>
                Nigeria.
              </p>
            </div>
            <div class="mb-5">
              <span class="block text-blue-700 w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center mb-3">
                <i class="font-extrabold text-xl flaticon-telephone"></i>
              </span>
              <p class="text-xl font-extrabold">
                09092120843, 08033666521,<br>08171156602
              </p>
            </div>
            <div class="mb-5 flex flex-wrap">
              <a title="facebook" href="" class="block hover:text-blue-700 text-blue-100 w-10 h-10 rounded-full hover:bg-blue-100 bg-blue-700 flex justify-center items-center mb-3 mr-3" style="transition: all 0.3s ease-in-out">
                <i class="font-extrabold text-xl flaticon-facebook"></i>
              </a>
              <a title="twitter" href="" class="block hover:text-blue-700 text-blue-100 w-10 h-10 rounded-full hover:bg-blue-100 bg-blue-700 flex justify-center items-center mb-3 mr-3" style="transition: all 0.3s ease-in-out">
                <i class="font-extrabold text-xl flaticon-twitter"></i>
              </a>
              <a title="instagram" href="" class="block hover:text-blue-700 text-blue-100 w-10 h-10 rounded-full hover:bg-blue-100 bg-blue-700 flex justify-center items-center mb-3" style="transition: all 0.3s ease-in-out">
                <i class="font-extrabold text-xl flaticon-instagram"></i>
              </a>
            </div>
        </div>
        <!--form start-->
        <div class="sm:w-5/12 w-full">
          <shadow-bg padding="px-5 py-10" extra-class="border border-gray-500" background="white" >
              <h4 class="text-gray-600 font-extrabold text-sm sm-text-lg mb-5">
                What would you like to know about our services ?
              </h4>
              <form action="" method="post">
                <!--form-group start-->
                <div class="mb-5">
                  <label for="name" class="font-extrabold mb-2 block text-sm">Name</label>
                  <input type="text" class="w-full bg-gray-200 focus:bg-gray-300 hover:bg-gray-300 outline-none text-gray-700 text-lg font-extrabold h-10 p-5" name="" id="name">
                </div>
                <!--form group end-->
                <!--form-group start-->
                <div class="mb-5">
                  <label for="email" class="font-extrabold mb-2 block text-sm">Email</label>
                  <input type="email" class="w-full bg-gray-200 focus:bg-gray-300 hover:bg-gray-300 outline-none text-gray-700 text-lg font-extrabold h-10 p-5" name="" id="email">
                </div>
                <!--form group end-->
                <!--form-group start-->
                <div class="mb-5">
                  <label for="enquiry_type" class="font-extrabold mb-2 block text-sm">Enquiry Type</label>
                  <select v-model="enquiryType" class="block w-full bg-gray-200 border font-extrabold border-gray-200 text-gray-700 py-2 px-5 h-10 leading-tight focus:outline-none focus:bg-gray-300" name="" id="enquiry_type">
                    <option value="services" >Services</option>
                    <option value="academy" checked>Academy</option>
                  </select>
                </div>
                <!--form group end-->
                <!--form-group start-->
                <div class="mb-5" v-if="enquiryType == 'services'">
                  <label for="services" class="font-extrabold mb-2 block text-sm">Services</label>
                  <select class="block w-full bg-gray-200 border font-extrabold capitalize border-gray-200 text-gray-700 py-2 px-5 h-10 leading-tight focus:outline-none focus:bg-gray-300" name="" id="services">
                    <option v-for="(service,index) in services" :key="index" :value="service" >{{service|snakeCaseToWords}}</option>
                  </select>
                </div>
                <!--form group end-->
                <!--form-group start-->
                <div class="mb-5" v-else-if="enquiryType == 'academy'">
                  <label for="academy" class="font-extrabold mb-2 block text-sm">Academy</label>
                  <select class="block w-full bg-gray-200 border font-extrabold border-gray-200 capitalize text-gray-700 py-2 px-5 h-10 leading-tight focus:outline-none focus:bg-gray-300" name="" id="academy">
                    <option v-for="(course,index) in academy" :key="index" :value="course" >{{course|snakeCaseToWords}}</option>
                  </select>
                </div>
                <!--form group end-->
                <!--form-group start-->
                <div class="mb-5">
                  <label for="enquiry_details" class="font-extrabold mb-2 block text-sm">Enquiry Details</label>
                  <textarea class="w-full bg-gray-200 focus:bg-gray-300 hover:bg-gray-300 outline-none text-gray-700 text-lg font-extrabold p-5 resize-none" name="" id="enquiry_details" cols="30" rows="3"></textarea>
                </div>
                <!--form group end-->
                <primary-btn>SEND EMAIL</primary-btn>
              </form>
          </shadow-bg>
        </div>
        <!--form end-->
      </div>
    </section>
    <!--Contact info end -->
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact - Reach Us today',
      meta: [
        { hid: 'theme-color', name: 'theme-color', content: '#0168fa' }
      ]
    }
  },
  transition: {
    name: 'page_slide'
  },
  layout: 'default',
  data () {
    return {
      enquiryType: 'services',
      services: [
        'software_development',
        'Computer Sales',
        'Training',
        'Consultancy',
        'Web Development',
        'Graphic Design'
      ],
      academy: [
        'computer_literacy',
        'digital_marketing',
        'software_engineering',
        'web_design',
        'graphic_design'
      ]
    }
  },
  filters: {
    snakeCaseToWords (value) {
      return value.replace('_', ' ')
    }
  }
}
</script>

<style>

</style>
