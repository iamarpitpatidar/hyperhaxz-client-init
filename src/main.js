// Import global styles
import '~/assets/styles/index.css'
import DefaultLayout from '~/layouts/Default'
import Dashboard from '~/layouts/Dashboard'

import Vuex from 'vuex'
// import { InlineSvgPlugin } from 'vue-inline-svg'

import { actions, getters, initiateState, mutations } from './store'
import { menu } from './store/modules'

export default function (Vue, { router, appOptions }) {
  Vue.use(Vuex)
  // Vue.use(InlineSvgPlugin)

  Vue.component('Layout', DefaultLayout)
  Vue.component('Dashboard', Dashboard)

  // Router settings
  router.options.linkActiveClass = 'e4w'
  router.options.linkExactActiveClass = 'xr5t'

  // registering the store
  appOptions.store = new Vuex.Store({
    state: initiateState(),
    mutations: mutations,
    actions: actions,
    getters: getters,
    modules: {
      menu
    }
  })
}
