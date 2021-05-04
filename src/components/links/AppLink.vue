<template>
  <g-link
    :to="to"
    :class="isActive ? activeClass : inactiveClass"
  >
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    inactiveClass: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  },
  computed: {
    isActive: function () {
      return this.$route.path === this.to
    }
  }
}
</script>
