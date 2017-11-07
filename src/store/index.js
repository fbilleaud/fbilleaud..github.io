import Vue from 'vue'
import Vuex from 'vuex'

import SkillsStore from '@/store/modules/skills.store'
import CareerStore from '@/store/modules/career.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SkillsStore,
    CareerStore
  }
})
