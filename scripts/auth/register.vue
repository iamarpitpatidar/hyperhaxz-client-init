<template>
  <Layout>
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-auto">
      <div class="max-w-md w-full space-y-8 mt-6">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-500">
            Create a account
          </h2>
        </div>
        <div class="bg-white rounded-md p-10 mt-8 bg-gray-900 border-2 border-blue-500">
          <form
            novalidate
            @submit.prevent="signupHandler"
          >
            <div class="rounded-md mb-8">
              <div class="mb-2">
                <label
                  for="username"
                  class="text-gray-300"
                >Username</label>
                <div>
                  <input
                    id="username"
                    v-model.trim="$v.user.username.$model"
                    name="username"
                    type="text"
                    autocomplete="off"
                    required
                    :class="[$v.user.username.$error ? 'border-red-500' : 'border-blueGray-700 focus:ring-blue-500 focus:border-blue-500', 'bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm']"
                    @blur="$v.user.username.$touch()"
                  >
                  <div
                    v-if="$v.user.username.$error"
                    class="p-1 text-red-500 rounded"
                  >
                    Please enter a valid username
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label
                  for="password"
                  class="text-gray-300"
                >Password</label>
                <div>
                  <input
                    id="password"
                    v-model.trim="$v.user.password.$model"
                    name="password"
                    type="password"
                    autocomplete="off"
                    required
                    :class="[$v.user.password.$error ? 'border-red-500' : 'border-blueGray-700 focus:ring-blue-500 focus:border-blue-500', 'bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm']"
                    @blur="$v.user.password.$touch()"
                  >
                  <div
                    v-if="$v.user.password.$error"
                    class="p-1 text-red-500 rounded"
                  >
                    Please enter your password
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label
                  for="activationKey"
                  class="text-gray-300"
                >Activation Key</label>
                <div>
                  <input
                    id="activationKey"
                    v-model.trim="$v.user.password.$model"
                    name="activationKey"
                    type="text"
                    required
                    :class="[$v.user.activationKey.$error ? 'border-red-500' : 'border-blueGray-700 focus:ring-blue-500 focus:border-blue-500', 'bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm']"
                    @blur="$v.user.activationKey.$touch()"
                  >
                  <div
                    v-if="$v.user.activationKey.$error"
                    class="p-1 text-red-500 rounded"
                  >
                    Please enter your activation Key
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 rounded-md bg-blue-600 text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blueGray-800" disabled="disabled">
                <span class="hidden absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                </span>
                <svg class="visible animate-spin my-auto mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Lock from '~/assets/icons/lock.svg'

export default {
  components: {
    Lock
  },
  metaInfo: {
    title: 'Sign up'
  },
  validations: {
    user: {
      username: {
        required
      },
      password: {
        required
      },
      activationKey: {
        required
      }
    }
  },
  methods: {
    signupHandler () {
      this.$v.user.$touch()
      if (!this.$v.user.$invalid) {
        console.log('form is valid')
      }
    }
  }
}
</script>
