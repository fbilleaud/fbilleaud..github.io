<template lang="html">
  <a class="contact" :href="data.href" :target="data.target" :title="data.title">
    <img :src="iconPath" alt="">
    <p v-if="text">{{ data.text }}</p>
  </a>
</template>

<script>
export default {
  name: 'contact',
  props: ['data', 'text'],
  computed: {
    iconPath () {
      return `../../static/images/icons/icon_${this.data.icon}.svg`
    }
  },
  mounted () {
    // add animation delay
    let delay = `${(this.data.id - 1) * 0.2}s`
    this.$el.getElementsByTagName('img')[0].style.transitionDelay = delay
    if (this.text) {
      this.$el.getElementsByTagName('p')[0].style.transitionDelay = delay
    }
  }
}
</script>

<style src="@/components/_shared/scss/Contact.scss" lang="scss"></style>
