<template>
  <Dashboard>
    <div class="flex flex-col mt-4">
      <div class="mx-8 p-2 align-middle inline-block">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="table-auto w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Code
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Expiry
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created By
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="invite in invites"
                :key="invite.code"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {{ invite._id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {{ invite.code }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {{ invite.expiry }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {{ invite.creator }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    <delete class="inline-block h-6 w-6" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <pagination />
        </div>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Delete from '~/assets/icons/trash.svg'
import Pagination from '~/components/Pagination'

const invites = [
  {
    _id: 1,
    code: 'SylWt-uYUpM-iBtwX-wwqJo-bza5S',
    expiry: '30 Jun 2021',
    creator: 'iamarpit',
    plan: 'Pro'
  },
  {
    _id: 2,
    code: 'U5cpU-UlF9P-yPVbB-itQWR-b3NIA',
    expiry: '10 Apr 2022',
    creator: 'hyper',
    plan: 'Pro'
  },
  {
    _id: 3,
    code: 'pyq75-EcLI4-0iHi8-9t7hN-O52z2',
    expiry: '12 Dec 2022',
    creator: 'schlumped',
    plan: 'Free'
  },
  {
    _id: 4,
    code: 'Yr12X-LdrtS-rmj6M-8klCr-uKwKK',
    expiry: '15 Aug 2024',
    creator: 'someguy123',
    plan: 'Plus'
  },
  {
    _id: 5,
    code: 'HpJEQ-DUAKf-mTOpi-7JeGg-ZpR4G',
    expiry: '23 Nov 2021',
    creator: 'boss',
    plan: 'Free'
  }
]

export default {
  components: {
    Delete,
    Pagination
  },
  metaInfo: {
    title: 'Invites'
  },
  data () {
    return {
      invites
    }
  }
}
</script>
