<template>
  <Dashboard>
    <section class="text-gray-600 container p-6 mx-auto">
      <div class="flex flex-wrap items-stretch">
        <div class="flex-1 p-2 md:w-1/2">
          <div class="h-full border-2 border-blue-500 px-6 py-8 rounded-lg">
            <h2 class="tracking-widest font-medium text-blue-500 mb-4 text-center">USER INFO</h2>
            <table class="table-auto w-full">
              <tbody>
                <tr>
                  <td class="px-6 py-3 whitespace-nowrap text-gray-400">Username</td>
                  <td>iamadmin</td>
                </tr>
                <tr>
                  <td class="px-6 py-3 whitespace-nowrap text-gray-400">Status</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td class="px-6 py-3 whitespace-nowrap text-gray-400">Role</td>
                  <td>user</td>
                </tr>
                <tr>
                  <td class="px-6 py-3 whitespace-nowrap text-gray-400">HardwareId</td>
                  <td>set</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex-1 p-2 md:w-1/2">
          <div class="h-full border-2 border-blue-500 px-6 py-8 rounded-lg">
            <h2 class="tracking-widest font-medium text-blue-500 mb-8 text-center">UPDATE PASSWORD</h2>
            <form novalidate>
              <div class="mb-4">
                <div class="mb-2">
                  <input
                    name="username"
                    placeholder="current password"
                    type="text"
                    autocomplete="off"
                    required="required"
                    class="border-blueGray-700 bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm"
                  >
                </div>
                <div class="mb-2">
                  <input
                    name="username"
                    placeholder="new password"
                    type="text"
                    autocomplete="off"
                    required="required"
                    class="border-blueGray-700 bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm"
                  >
                </div>
                <div class="mb-2">
                  <input
                    name="username"
                    placeholder="repeat password"
                    type="text"
                    autocomplete="off"
                    required="required"
                    class="border-blueGray-700 bg-blueGray-700 appearance-none rounded-md w-full px-3 py-2 border-2 text-gray-300 focus:outline-none sm:text-sm"
                  >
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 rounded-md bg-blue-600 text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blueGray-800"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5 text-gray-400"
                  ><path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  /></svg></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Dashboard>
</template>
