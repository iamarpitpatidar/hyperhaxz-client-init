<template>
  <div class="flex">
    <div class="flex flex-col w-64 h-screen px-3 py-8 bg-white border-r">
      <logo />
      <nav-bar />
    </div>
    <!-- Remove class [ h-64 ] when adding a card block -->
    <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      <div class="w-full h-full rounded">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import NavBar from '~/components/NavBar'

export default {
  components: {
    Logo,
    NavBar
  }
}
</script>
