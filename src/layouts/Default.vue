<template>
  <main class="bg-gray-900 flex flex-col h-screen">
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
