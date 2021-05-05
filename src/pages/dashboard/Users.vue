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
                  UID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Username
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Roles
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sold By
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
                v-for="person in people"
                :key="person.email"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.uid }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.username }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.created }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    v-for="role in person.roles"
                    :key="role"
                    :class="['px-2', 'mr-2', 'inline-flex', 'text-xs', 'leading-5', 'font-semibold', 'rounded-full', role === `Admin` ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']"
                  >
                    {{ role }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="['px-2', 'inline-flex', 'text-xs', 'leading-5', 'font-semibold', 'rounded-full', isActive(person) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                    {{ person.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.seller }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    <chip class="inline-block h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-900 mx-2"
                  >
                    <ban class="inline-block h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-900 ml-2"
                  >
                    <dots class="inline-block h-6 w-6" />
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
import Chip from '~/assets/icons/chip.svg'
import Ban from '~/assets/icons/ban.svg'
import Dots from '~/assets/icons/dots.svg'
import Pagination from '~/components/Pagination'

const people = [
  {
    uid: 1,
    username: 'iamarpit',
    created: '23 Nov 2020',
    email: 'arpit.ptdr@hotmail.com',
    status: 'Active',
    roles: ['SuperAdmin', 'Admin', 'Seller'],
    seller: 'admin'
  },
  {
    uid: 2,
    username: 'hyper',
    created: '30 Jun 2020',
    status: 'Banned',
    roles: ['SuperAdmin', 'Admin'],
    email: 'hyper@gmail.com',
    seller: 'admin'
  },
  {
    uid: 3,
    username: 'someguy123',
    created: '23 Nov 2020',
    status: 'Active',
    roles: ['Admin', 'someRole', 'Pro'],
    email: 'someguy@live.com',
    seller: 'tora'
  },
  {
    uid: 4,
    username: 'schlumped',
    created: '12 Dec 2020',
    status: 'Active',
    roles: ['seller', 'Plus'],
    email: 'schlumped@live.com',
    seller: 'nobita'
  },
  {
    uid: 5,
    username: 'boss',
    created: '15 Aug 2020',
    status: 'Active',
    roles: ['Admin', 'Exclusive'],
    email: 'boss@google.com',
    seller: 'ncert'
  }
]

export default {
  components: {
    Ban,
    Chip,
    Dots,
    Pagination
  },
  metaInfo: {
    title: 'Users'
  },
  data () {
    return {
      people
    }
  },
  methods: {
    isActive (person) {
      return person.status === 'Active'
    }
  }
}
</script>
