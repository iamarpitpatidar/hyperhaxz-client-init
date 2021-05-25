<template>
  <main class="bg-gray-200 h-screen">
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
