<template>
  <Layout>
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div class="bg-white rounded-md p-10 mt-8">
          <form
            novalidate
            @submit.prevent="loginHandler"
          >
            <div class="rounded-md shadow-sm mb-8">
              <div class="mb-2">
                <label
                  for="username"
                  class="text-gray-700"
                >Username</label>
                <div class="rounded-md bg-red-500">
                  <input
                    id="username"
                    v-model.trim="$v.user.username.$model"
                    name="username"
                    type="text"
                    required
                    autocomplete="username"
                    :class="[$v.user.username.$error ? 'border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500' ,'appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-700 focus:outline-none sm:text-sm']"
                    @blur="$v.user.username.$touch()"
                  >
                  <div
                    v-if="$v.user.username.$error"
                    class="px-3 py-1 text-white bg-red-500 rounded"
                  >
                    Please enter your username
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label
                  for="password"
                  class="text-gray-700"
                >Password</label>
                <div class="rounded-md bg-red-500">
                  <input
                    id="password"
                    v-model.trim="$v.user.password.$model"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    :class="[$v.user.password.$error ? 'border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500' ,'appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-700 focus:outline-none sm:text-sm']"
                    @blur="$v.user.password.$touch()"
                  >
                  <div
                    v-if="$v.user.password.$error"
                    class="px-3 py-1 text-white bg-red-500 rounded"
                  >
                    Please enter your password
                  </div>
                </div>
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
