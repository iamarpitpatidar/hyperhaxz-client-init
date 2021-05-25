<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="text-2xl font-semibold text-gray-800">
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
            class="p-0.5 px-3 m-1 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            Login
          </g-link>
          <g-link
            to="/auth/register"
            class="p-0.5 px-3 m-1 rounded-md bg-white hover:bg-gray-100 focus:outline-none"
          >
            Register
          </g-link>
        </div>
      </div>
    </div>
  </header>
</template>
