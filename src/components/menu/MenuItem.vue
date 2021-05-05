<template>
  <g-link
    :to="to"
    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
    role="menuitem"
    tabindex="-1"
  >
    <slot />
  </g-link>
</template>

<script>
export default {
  name: 'MenuIcon',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
