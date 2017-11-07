import Vue from 'vue'
import Vuex from 'vuex'

import SkillsStore from '@/store/modules/skills.store'
import CareerStore from '@/store/modules/career.store'
import ContactsStore from '@/store/modules/contact.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SkillsStore,
    CareerStore,
    ContactsStore
  }
})
