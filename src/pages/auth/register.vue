<template>
  <Layout>
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a account
          </h2>
        </div>
        <div class="bg-white rounded-md p-10 mt-8">
          <form>
            <div class="rounded-md shadow-sm mb-8">
              <div class="mb-2">
                <label
                  for="username"
                  class="text-gray-700"
                >Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  class="appearance-none rounded-md w-full px-3 py-2 border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
              </div>
              <div class="mb-2">
                <label
                  for="password"
                  class="text-gray-700"
                >Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-md w-full px-3 py-2 border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
              </div>
              <div class="mb-2">
                <label
                  for="activationKey"
                  class="text-gray-700"
                >Activation Key</label>
                <input
                  id="activationKey"
                  name="activationKey"
                  type="text"
                  required
                  class="appearance-none rounded-md w-full px-3 py-2 border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <lock class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Lock from '~/assets/icons/lock.svg'

export default {
  components: {
    Lock
  },
  metaInfo: {
    title: 'Sign up'
  }
}
</script>
