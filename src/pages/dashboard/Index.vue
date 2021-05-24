<template>
  <Dashboard>
    <div class="container mx-auto">
      <div class="grid grid-cols-3 p-6 gap-8">
        <div class="col-span-2 h-24">
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-white shadow-md rounded-md h-24 p-5">Item 1</div>
            <div class="bg-white shadow-md rounded-md h-24 p-5">Item 2</div>
          </div>
          <div class="bg-white shadow-md rounded-md h-24 p-5">Item 4</div>
        </div>
        <div class="bg-white shadow-md rounded-md h-full p-5">
          <div class="text-xl">Recent Purchases</div>
          <div class="mt-8">
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block text-sm">Github Tools</span>
                <span class="block text-xs text-gray-700">arpit.ptdr@hotmail.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * 201) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block">Red Brawler</span>
                <span class="block text-sm text-gray-700">red@brawler.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * 201) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block">Green Leader</span>
                <span class="block text-sm text-gray-700">leader@hotmail.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * 201) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block">Royal Army</span>
                <span class="block text-sm text-gray-700">fantasy@live.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * 201) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block">Random Soft</span>
                <span class="block text-sm text-gray-700">admin@google.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * 201) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-md my-3">
              <div>
                <span class="block">Melody Soft</span>
                <span class="block text-sm text-gray-700">hyper@hotmail.com</span>
              </div>
              <div class="my-auto">
                <span>${{ Math.floor(Math.random() * (865 - 50) + 50) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dashboard>
</template>

<script>
export default {
  metaInfo: {
    title: 'Dashboard'
  }
}
</script>
