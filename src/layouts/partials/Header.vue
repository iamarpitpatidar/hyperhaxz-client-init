<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="text-2xl font-semibold text-gray-800">
          <g-link to="/">HyperHaxZ</g-link>
        </div>
        <div>
          <button class="mx-2">
            <g-link to="/auth/login">Login</g-link>
          </button>
          <button class="py-1 px-3 m-2 rounded-md bg-white">
            <g-link to="/auth/register">Register</g-link>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
