<template>
<div class="min-h-screen">
      <custom-header>
        <template slot="logo">
          <nuxt-link to="/">
            <img src="~/assets/img/Logo_white-bg.svg" class="block w-32 sm:w-40 h-auto mb-4" alt="JD computer logo">
          </nuxt-link>
        </template>
        <sublink-container>
          Services &nbsp; <span class="hidden sm:inline-block flaticon-down-chevron"></span>
          <template slot="sublinks">
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" :to="{name:'services-software_development'}" hoverColor="hover:text-black">Software Development</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Computer Sales</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black md:hover:border">Training</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Consultancy </custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Web Development</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Graphic Design</custom-navlink>
          </template>
        </sublink-container>
        <sublink-container>
          Academy &nbsp; <span class="hidden sm:inline-block flaticon-down-chevron"></span>
          <template slot="sublinks">
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Computer Literacy</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Digital Marketing</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Software Engineering</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Web Design</custom-navlink>
              <custom-navlink color="text-gray-600" extra-css="my-2 sm:my-0" hoverColor="hover:text-black">Graphic Design</custom-navlink>
          </template>
        </sublink-container>
        <custom-navlink extra-css="my-2 sm:my-0" :to="{name:'about'}">About Us</custom-navlink>
        <custom-link extra-css="my-2 sm:my-0">Shop</custom-link>
        <custom-navlink extra-css="my-2 sm:my-0" :to="{name:'testimony'}">Testimony</custom-navlink>
        <custom-navlink extra-css="my-2 sm:my-0" :to="{name:'contact'}">Contact</custom-navlink>
      </custom-header>
      <nuxt/>

      <!--Footer Start-->
      <footer class="bg-gray-900 py-20 relative overflow-hidden">
          <!--pattern start-->
          <img class="w-100 h-auto block absolute invisible sm:visible" style="left: -220px; bottom:-380px;z-index:0" src="/pattern/grill_2.svg" alt="">
          <!--pattern end-->
          <div class="w-10/12 flex flex-wrap justify-between mx-auto">
            <div class="w-8/12 sm:w-2/12 my-5 pr-2">
              <div class="mb-5">
                <img src="~/assets/img/Logo_black-bg.svg" class="block w-32 sm:w-40 h-auto h-auto mb-4" alt="JD computer">
                <span class="text-gray-500 text-sm">Copyright © 2020</span>
              </div>
              <div class="mb-5 flex flex-wrap">
                <a title="facebook" href="" class="block text-gray-100 w-10 h-10 rounded-full hover:bg-gray-700 bg-gray-800 flex justify-center items-center mb-3 mr-3" style="transition: all 0.3s ease-in-out">
                  <i class="font-extrabold text-xl flaticon-facebook"></i>
                </a>
                <a title="twitter" href="" class="block text-gray-100 w-10 h-10 rounded-full hover:bg-gray-700 bg-gray-800 flex justify-center items-center mb-3 mr-3" style="transition: all 0.3s ease-in-out">
                  <i class="font-extrabold text-xl flaticon-twitter"></i>
                </a>
                <a title="instagram" href="" class="block text-gray-100 w-10 h-10 rounded-full hover:bg-gray-700 bg-gray-800 flex justify-center items-center mb-3" style="transition: all 0.3s ease-in-out">
                  <i class="font-extrabold text-xl flaticon-instagram"></i>
                </a>
              </div>
            </div>
            <div class="w-6/12 sm:w-2/12 my-5 pr-2">
              <h3 class="text-white mb-4 font-bold">Services</h3>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Web Development
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Computer Training
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Computer Sales
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Graphic Design
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Computer Consultancy
              </nuxt-link>
            </div>
            <div class="w-6/12 sm:w-2/12 my-5">
              <h3 class="text-white mb-4 font-bold">Courses</h3>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Software Enginnering
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Graphic Design
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Web Design
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Computer Literacy
              </nuxt-link>
              <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                Digital Marketing
              </nuxt-link>
            </div>
            <div class="w-6/12 sm:w-2/12 my-5 pr-2">
              <h3 class="text-white mb-4 font-bold">Contact</h3>
              <address class="mb-2 not-italic text-gray-500 block text-sm">
                17,  Nnebisi Road,
                Opposite Ascon filling Station,
                Asaba,
                Delta State,
                Nigeria.
              </address>
              <figure class="mb-2 text-gray-500 block text-sm">
                09092120843, 08033666521,
                08171156602
              </figure>
            </div>
            <div class="w-6/12 sm:w-2/12 my-5">
              <div class="mb-5">
                <h3 class="text-white mb-4 font-bold">Company</h3>
                <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                  About Us
                </nuxt-link>
                <nuxt-link to="" class="mb-2 text-gray-500 hover:text-gray-300 block text-sm">
                  Carrier
                </nuxt-link>
              </div>
            </div>
          </div>
      </footer>
      <!--footer ends-->
  </div>
</template>

<script>
/* eslint-disable */
import CustomHeader from '~/components/global/navbar/header'
import CustomNavlink from '~/components/global/navbar/routelinks'
import CustomLink from '~/components/global/navbar/navlinks'
import SublinkContainer from '~/components/global/navbar/sublinkContainer'

export default {
  components: {
    CustomHeader, CustomNavlink, SublinkContainer, CustomLink
  }
}
</script>
