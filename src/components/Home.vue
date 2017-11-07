<template lang="html">
  <div id="home" class="category">
    <div class="content">
      <div>
        <h1>FRANCOIS BILLEAUD</h1>
        <h2>DÉVELOPPEUR FRONT-END</h2>

        <div class="contact">
          <contact v-for="contact in contacts" :data="contact" :key="contact.id"></contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '@/components/_shared/Contact'
import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  store,
  components: {
    Contact
  },
  computed: {
    ...mapGetters(['contacts'])
  },
  methods: {
    iconPath (icon) {
      return `../../static/images/icons/icon_${icon}.svg`
    }
  }
}
</script>

<style src="@/components/scss/Home.scss" lang="scss"></style>
