<template lang="html">
  <div class="job" :class="typeClass" :style="jobPosition">
    <p class="date" v-if="data.end">{{ data.end | date('year')}}</p>
    <p class="date" v-else>Actuellement</p>
    <div class="contentJob">
      <img :src="jobLogo" alt="">
      <h3>{{ data.company }}</h3>
      <div class="details">
        <p>{{ data.location }}</p>
        <p>{{ data.contract }}</p>
      </div>
      <div class="descriptions">
        <p v-for="description in data.descriptions">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import date from '@/filters/date.filter'

import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'job',
  props: ['data', 'index'],
  store,
  filters: {
    date
  },
  computed: {
    ...mapGetters(['startJob', 'rangeJob']),
    jobLogo () {
      return `../../../static/images/jobs/logo-${this.data.logo}.gif`
    },
    typeClass () {
      return (this.index % 2 === 0) ? 'even' : 'odd'
    },
    jobPosition () {
      let right = 0
      let top = 0

      if (this.index % 2 === 0) {
        top = -265
      } else {
        top = 8
      }

      if (this.data.end) {
        let rangeElm = this.data.end - this.startJob
        let pourcent = (rangeElm * 100) / this.rangeJob
        right = 100 - pourcent
      }

      return `top: ${top}px; right: ${right}%`
    }
  }
}
</script>

<style src="@/components/Career/scss/Job.scss" lang="scss"></style>
