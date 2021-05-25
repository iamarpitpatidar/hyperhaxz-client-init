import '~/assets/styles/index.css'
import DefaultLayout from '~/layouts/Default'
import Dashboard from '~/layouts/Dashboard'

import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import { actions, getters, initiateState, mutations } from './store'
import { menu, account } from './store/modules'

export default function (Vue, { router, appOptions }) {
  Vue.use(Vuex)
  Vue.use(Vuelidate)

  Vue.component('Layout', DefaultLayout)
  Vue.component('Dashboard', Dashboard)

  router.beforeEach((to, from, next) => {
    if (/^\/dashboard/gm.test(to.path)) {
      if (router.app.$store.state.user) next()
      else next('/auth/login')
    } else next()
  })

  router.options.linkActiveClass = 'e4w'
  router.options.linkExactActiveClass = 'xr5t'

  appOptions.store = new Vuex.Store({
    state: initiateState(),
    mutations: mutations,
    actions: actions,
    getters: getters,
    modules: {
      account,
      menu
    }
  })
}
