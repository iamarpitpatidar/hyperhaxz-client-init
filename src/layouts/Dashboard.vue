<template>
  <div class="flex">
    <aside class="h-screen top-0 sticky p-4 bg-gray-800 flex flex-col w-64 px-3 py-8 border-r border-gray-700">
      <logo />
      <nav-bar />
    </aside>
    <main class="bg-gray-900 w-full">
      <nav class="top-0 sticky bg-gray-800 mx-auto px-6 shadow">
        <div class="relative flex justify-end h-14">
          <div class="absolute inset-y-0 right-0 flex items-center pr-2">
            <menu class="ml-3 relative">
              <menu-button>
                <button class="flex focus:outline-none">
                  <span class="sr-only">Open user menu</span>
                  <user-icon class="h-8 w-8" />
                </button>
              </menu-button>
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <menu-items>
                  <div class="py-1 select-none">
                    <div class="px-4 py-2 text-sm">
                      <span>Signed in as</span><br>
                      <span class="text-gray-800">arpit.ptdr@hotmail.com</span>
                    </div>
                  </div>
                  <div class="py-1">
                    <menu-item to="/logout/">Sign Out</menu-item>
                  </div>
                </menu-items>
              </transition>
            </menu>
          </div>
        </div>
      </nav>
      <slot />
    </main>
  </div>
</template>

<script>
import { MenuButton, MenuItem, MenuItems } from '~/components/menu'
import Logo from '~/components/Logo'
import NavBar from '~/components/NavBar'
import UserIcon from '~/assets/icons/user.svg'

export default {
  components: {
    Logo,
    NavBar,
    MenuItem,
    MenuItems,
    MenuButton,
    UserIcon
  }
}
</script>
