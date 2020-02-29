<template>
    <div class="dropdown">
        <span class="dropdown__link">
            <slot></slot>
        </span>
        <div class="sublink_container">
            <slot name="sublinks">
            </slot>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      subNavIsOpen: false
    }
  },
  methods: {
    OpenSubNavlink () {
      this.subNavIsOpen = !this.subNavIsOpen
    }
  }
}
</script>
<style>
    .dropdown{
        @apply block relative my-10;
    }
    .dropdown__link{
        @apply block uppercase;
    }
    .sublink_container{
        @apply bg-white relative;
    }
    @screen md{
        .dropdown{
            @apply my-0;
         }
         .dropdown:hover>.sublink_container{
            @apply block;
            visibility: visible;
            opacity: 1;
         }
        .dropdown:last-child>.sublink_container{
            right: 0;
        }
        .sublink_container{
            @apply absolute shadow-md min-w-full border border-gray-400 p-4;
            top: 150%;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s;
            --webkit-transition: all 0.3s;
            z-index: 50;
        }
        .sublink_container a{
            @apply pb-2
        }
        .dropdown__link{
            @apply px-4 font-bold text-sm capitalize;
        }
        .dropdown__link:hover{
            cursor: pointer;
        }
    }
</style>
