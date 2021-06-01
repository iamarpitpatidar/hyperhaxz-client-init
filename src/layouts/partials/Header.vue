<template>
  <header class="bg-gray-800 shadow-lg sticky top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="text-2xl font-semibold text-gray-400">
          <g-link
            class="focus:outline-none"
            to="/"
          >
            HyperHaxZ
          </g-link>
        </div>
        <div>
          <g-link
            to="/auth/login"
            class="p-0.5 px-3 m-1 text-gray-400 rounded-md hover:bg-blueGray-700 focus:outline-none"
          >
            Login
          </g-link>
          <g-link
            to="/auth/register"
            class="p-0.5 px-3 m-1 text-gray-900 bg-blue-500 rounded-md bg-white hover:text-gray-300 focus:outline-none"
          >
            Register
          </g-link>
        </div>
      </div>
    </div>
  </header>
</template>
