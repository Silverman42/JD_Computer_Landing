<template>
    <service-layout>
        <template slot="service_name">
          Software development
        </template>
        <template slot="hero-message">
            <span class="text-blue-500">Customized Software </span>tailored for business
        </template>
        <template slot="illustration">
            <img class="w-full h-auto" src="/img/software_hero-min.jpg" alt="Software dev at JD computer">
        </template>
        <template slot="description-text">
          <p class="sm:text-lg font-bold my-3">
            Software development is the process of computer programming, documenting, testing, and bug fixing involved in creating and maintaining applications and frameworks resulting in a software product
          </p>
          <p class="sm:text-lg font-bold  my-3">
            From ERP to stand alone softwares, networking systems, JD Computers Technologies is capable of delivering such. We have lots of applicantions in our portfolio used by various companies and agencies nation wide. With our deep strategic thinkers and project managers, we have what it takes to deliver
          </p>
        </template>
        <template slot="service-highlight">
            <div class="w:full p-3 font-bold md:text-lg flex items-center">
              <div class="text-blue-400 font-normal text-3xl mr-3">
                <span class="flaticon-verified" />
              </div>
              <span>
                Yearly software support
              </span>
            </div>
            <div class="w:full p-3 font-bold md:text-lg flex items-center">
              <div class="text-blue-400 font-normal text-3xl mr-3">
                <span class="flaticon-verified" />
              </div>
              <span>
                Software specially customized
                for your business model
              </span>
            </div>
            <div class="w:full p-3 font-bold md:text-lg flex items-center">
              <div class="text-blue-400 font-normal text-3xl mr-3">
                <span class="flaticon-verified" />
              </div>
              <span>
                Speedy software delivery
              </span>
            </div>
            <div class="w:full p-3 font-bold md:text-lg flex items-center">
              <div class="text-blue-400 font-normal text-3xl mr-3">
                <span class="flaticon-verified" />
              </div>
              <span>
                Well Tested and documented
                software
              </span>
            </div>
        </template>
        <template slot="contact-text">
            Wish to get a software for your business ?
        </template>
    </service-layout>
</template>

<script>
import ServiceLayout from '~/components/page_layout/services'
export default {
  head () {
    return {
      title: 'Services - Software Development',
      meta: [
        { hid: 'theme-color', name: 'theme-color', content: '#0168fa' }
      ]
    }
  },
  transition: {
    name: 'page_slide'
  },
  layout: 'default',
  components: {
    ServiceLayout
  }
}
</script>

<style>

</style>
