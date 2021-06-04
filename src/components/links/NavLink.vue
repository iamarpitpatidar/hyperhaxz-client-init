<template>
  <app-link
    :to="to"
    class="flex items-center px-4 py-2 my-4 rounded-md"
    active-class="text-gray-700 bg-blueGray-900"
    inactive-class="text-gray-600 transition-colors duration-200 transform hover:bg-gray-900 hover:text-gray-700"
  >
    <slot />
  </app-link>
</template>

<script>
import AppLink from './AppLink'

export default {
  components: {
    AppLink
  },
  props: {
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>
