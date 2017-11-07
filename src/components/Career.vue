<template lang="html">
  <div id="career" class="category">
    <title-cat title="Parcours"></title-cat>
    <div class="content">
      <div id="careerContent">
        <div class="jobs">
          <job v-for="(job, index) in jobs" :index="index" :data="job" :key="index"></job>
        </div>
        <div class="timeline">
          <p>{{ startJob | date('year')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCat from '@/components/_shared/TitleCat'
import Job from '@/components/Career/Job'

import date from '@/filters/date.filter'

import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'Career',
  store,
  filters: {
    date
  },
  components: {
    TitleCat,
    Job
  },
  computed: {
    ...mapGetters(['jobs', 'startJob']),
    startDate () {
      return new Date(this.startJob).getFullYear()
    }
  }
}
</script>

<style src="@/components/scss/Career.scss" lang="scss"></style>
