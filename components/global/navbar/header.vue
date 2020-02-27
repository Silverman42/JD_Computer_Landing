<template>
    <header class="flex flex-wrap items-center justify-between bg-white md:px-20">
        <div class="w-full flex align-middle md:w-6/12 bg-white p-3 py-5" :class="{'navbar-fixed': menuOpen}">
            <div class="w-10/12 flex align-middle">
                <slot name="logo">
                    <div>Logo</div>
                </slot>
            </div>
            <div class="w-2/12 md:hidden pr-3">
                <a href="#" class="hamburger" @click="toggleMenuButton" :class="{'hamburger_open': menuOpen}">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </a>
            </div>
        </div>
        <div class="w-full md:w-6/12 px-8 md:px-0 md:py-5 py-16 md:flex md:align-top md:justify-end" :class="{'submenu-fixed': menuOpen, 'hidden': !menuOpen}" style="transition: all 0.3s ease-in-out">
            <slot></slot>
        </div>
    </header>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenuButton () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
    .hamburger{
        @apply inline-flex flex-wrap justify-end align-middle w-full;
    }
    .hamburger_open>span{
        @apply bg-transparent w-3/6 !important;
    }
    .hamburger_open>span:nth-child(2){
        @apply bg-black w-4/6 !important;
    }
    .hamburger>span{
        transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        @apply bg-black block w-4/6 pb-px;
    }
    .hamburger>span:nth-child(2){
        @apply my-2;
    }
    .navbar-fixed{
        z-index: 10;
        @apply fixed top-0;
    }
    .submenu-fixed{
        z-index: 5;
        @apply fixed top-0 left-0 bottom-0 overflow-auto h-screen block bg-white;
    }
</style>
