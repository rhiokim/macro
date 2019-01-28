import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'

import modules from '@/store/modules'
import states from '@/store/states.js'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  states,
  actions,
  mutations,
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
