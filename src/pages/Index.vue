<template>
  <main class="bg-gray-300 h-screen">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="text-2xl font-semibold text-gray-800">
            HyperHaxZ
          </div>
          <div>
            <button class="mx-2">
              <g-link to="/login">Login</g-link>
            </button>
            <button class="py-1 px-3 m-2 rounded-md bg-white">
              <g-link to="/register">Register</g-link>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="max-w-xl mb-5 mx-auto text-center lg:max-w-2xl">
          <span class="text-gray-600 text-3xl md:text-4xl lg:text-5xl">
            Welcome to HyperHaxZ
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
