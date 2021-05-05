<template>
  <div
    :class="isMenuOpen ? 'text-gray-700' : 'text-gray-500'"
    @click="toggleMenu"
  >
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      isMenuOpen: state => state.menu.isOpen
    })
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'menu/toggleMenuState'
    })
  }
}
</script>
