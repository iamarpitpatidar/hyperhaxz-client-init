<template>
  <Layout>
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-auto">
      <div class="max-w-md w-full space-y-8 mt-12">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-500">
            Sign in to your account
          </h2>
        </div>
        <div class="bg-white rounded-md p-10 mt-8 bg-gray-900 border-2 border-blue-500">
          <form
            novalidate
            @submit.prevent="loginHandler"
          >
            <div class="rounded-md mb-8">
              <div class="mb-2">
                <label
                  for="username"
                  class="text-gray-300"
                >Username</label>
                <div class="rounded-md">
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
                    Please enter your username
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
                    required
                    :class="[$v.user.password.$error ? 'border-red-500' : 'border-blueGray-700 focus:ring-blue-500 focus:border-blue-500' ,'bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm']"
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
            </div>
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 rounded-md bg-blue-600 text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blueGray-800"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <lock class="h-5 w-5 text-gray-400" />
                </span>
                Sign in
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
    title: 'Login'
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    loginHandler () {
      this.$v.user.$touch()
      if (!this.$v.user.$invalid) {
        console.log('form is valid')
      }
    }
  }
}
</script>
